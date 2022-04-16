/// <reference types="@yarnpkg/plugin-pnp" />
import {BaseCommand, WorkspaceRequiredError}                                         from '@yarnpkg/cli';
import type {SupportedArchitectures}                                                 from '@yarnpkg/core/lib/Configuration';
import {getLibzipPromise}                                                            from '@yarnpkg/libzip';
import {Hooks as PackHooks}                                                          from '@yarnpkg/plugin-pack';
import {Command, Usage, Option}                                                      from 'clipanion';

import {ExportCache}                                                                 from '../ExportCache';
import {genPackTgz, makeExportDir, makeFetcher, makeGzipFromDirectory, makeResolver} from '../exportUtils';

import {
  DEFAULT_LOCK_FILENAME,
  Cache,
  Configuration,
  MessageName,
  Project,
  StreamReport,
  Workspace,
  formatUtils,
  structUtils,
  tgzUtils,
  CommandContext,
  scriptUtils,
  ReportError,
  InstallMode,
  Plugin,
  Manifest,
  WorkspaceResolver,
  stringifyMessageName,
  miscUtils,
  ConfigurationValueMap,
  LightReport,
} from '@yarnpkg/core';
import {
  CwdFS,
  Filename,
  PortablePath,
  ZipFS,
  npath,
  ppath,
  xfs,
} from '@yarnpkg/fslib';

type LogFilter = miscUtils.MapValueToObjectValue<ConfigurationValueMap['logFilters'][number]>;

const EXPORT_PHASE = Symbol(`EXPORT_PHASE`);

export default class WorkspacesExportCommand extends BaseCommand {
  json: boolean = Option.Boolean(`--json`, false, {description: `Format the output as an NDJSON stream`});

  production: boolean = Option.Boolean(
    `--production`,
    false,
    {description: `Only install regular dependencies by omitting dev dependencies`},
  );

  skipPackLifecycle: boolean = Option.Boolean(
    `--skip-pack-lifecycle`,
    false,
    {description: `Skip running \`yarn pack\` lifecycle scripts`},
  );

  nodeLinker?: string = Option.String(
    `--node-linker`,
    {description: `Override the project's nodeLinker option in the exported archive`},
  );

  out?: string = Option.String(`-o,--out`, {description: `Create the archive at the specified path`});

  workspaces: Array<string> = Option.Rest();

  static usage: Usage = Command.Usage({
    category: `Workspace-related commands`,
    description: `export a workspace package into a deployable archive`,
    details: `
      This command will export the active workspace and its dependencies into a deployable archive. It calls \`pack\` on each workspace dependency and installs them into the generated project's cache.

      This is designed to be used for deployment, not for publishing, so everything to run except for a runtime (i.e. node) is bundled into the archive.

      Why not just compile like we do on the front-end? Some dependencies may use require in interesting ways, or be or call binaries. It's safest not to transpile them.

      If the \`-o,---out\` is set the archive will be created at the specified path. The \`%s\` and \`%v\` variables can be used within the path and will be respectively replaced by the package name and version.
    `,
    examples: [
      [
        `Create an archive from the active workspace and its dependencies`,
        `yarn workspaces export`,
      ],
      [
        `Name and output the archive in a dedicated folder`,
        `yarn workspaces export --out /artifacts/%s-%v.zip`,
      ],
      [
        `Create a production gzip deployable in Docker`,
        `yarn workspaces export --production --out workspace.tgz`,
      ],
    ],
  });

  static paths = [[`workspaces`, `export`]];

  async execute() {
    const {[EXPORT_PHASE]: exportPhase} = this.context as any;

    const configuration = await Configuration.find(this.context.cwd, this.context.plugins);
    configuration.values.set(`preferAggregateCacheInfo`, true);
    const ghostArchitectureFilter = {
      code: stringifyMessageName(MessageName.GHOST_ARCHITECTURE),
      level: formatUtils.LogLevel.Discard,
    } as LogFilter;
    configuration.get(`logFilters`).push(new Map(Object.entries(ghostArchitectureFilter)) as any);

    configuration.activatePlugin(`@yarnpkg/plugin-workspaces-export/fix-dependencies`, {
      hooks: {
        beforeWorkspacePacking: (workspace, rawManifest: Record<string, any>) => {
          // preserve workspace: descriptors
          const originalManifest: Record<string, any> = {};
          workspace.manifest.exportTo(originalManifest);
          rawManifest.dependencies = originalManifest.dependencies;
          if (this.production) {
            delete rawManifest.devDependencies;
          } else {
            rawManifest.devDependencies = originalManifest.devDependencies;
          }
        },
      },
    } as Plugin<PackHooks>);

    const {project, workspace} = await Project.find(configuration, this.context.cwd);

    if (!workspace)
      throw new WorkspaceRequiredError(project.cwd, this.context.cwd);

    const exportWorkspaces = this.workspaces.length ? this.workspaces : [structUtils.stringifyIdent(workspace.locator)];
    if (!exportPhase) {
      const report = await StreamReport.start({
        configuration,
        stdout: this.context.stdout,
        json: this.json,
      }, async report => {
        const foreachCommand = [`workspaces`, `foreach`, `--parallel`];
        const exportCommand = [`workspaces`, `export`];

        if (this.json) exportCommand.push(`--json`);
        if (this.production) exportCommand.push(`--production`);
        if (this.skipPackLifecycle)
          exportCommand.push(`--skip-pack-lifecycle`);
        else
          foreachCommand.push(`--recursive`, `--topological-dev`);
        if (this.nodeLinker) exportCommand.push(`--node-linker`, this.nodeLinker);
        if (this.out) exportCommand.push(`--out`, this.out);

        foreachCommand.push(...exportWorkspaces.flatMap(name => [`--from`, name])),
        exportCommand.push(...exportWorkspaces);
        try {
          monkeyPatchNextStreamReport();
          const exitCode = await this.cli.run([
            ...foreachCommand,
            ...exportCommand,
          ], {...this.context, [EXPORT_PHASE]: `main`} as CommandContext);
          if (exitCode !== 0) {
            report.reportError(MessageName.EXCEPTION, `Export failed (please check the logs above for details)`);
          }
        } finally {
          if (!this.skipPackLifecycle) {
            monkeyPatchNextStreamReport();
            await this.cli.run([
              ...foreachCommand,
              ...exportCommand,
            ], {...this.context, [EXPORT_PHASE]: `post`} as CommandContext);
          }
        }
      });
      return report.exitCode();
    }

    const nodeLinker = this.nodeLinker ?? configuration.get(`nodeLinker`) ?? `pnp`;

    const target = typeof this.out !== `undefined`
      ? ppath.resolve(this.context.cwd, interpolateOutputName(this.out, {workspace}))
      : ppath.resolve(workspace.cwd, `workspace.zip` as Filename);

    const cache = await Cache.find(configuration, {immutable: true});
    await project.restoreInstallState();

    const report = await StreamReport.start({
      configuration,
      stdout: this.context.stdout,
      json: this.json,
    }, async report => {
      switch (exportPhase) {
        case `main`: {
          const shouldExport = exportWorkspaces.includes(structUtils.stringifyIdent(workspace.locator));
          if (shouldExport || !this.skipPackLifecycle)
            report.reportInfo(null, `Processing ${formatUtils.pretty(configuration, workspace.anchoredLocator, formatUtils.Type.LOCATOR)}`);
          if (!this.skipPackLifecycle)
            await scriptUtils.maybeExecuteWorkspaceLifecycleScript(workspace, `prepack`, {report});
          if (!shouldExport)
            return;

          const cacheDir = await makeExportDir(workspace);
          const baseFs = new CwdFS(cacheDir);

          // remove files generated during the previous run
          const pathsToRemove: Set<PortablePath> = new Set(await baseFs.readdirPromise(PortablePath.dot));
          pathsToRemove.delete(`.yarn` as PortablePath);
          pathsToRemove.delete(Filename.nodeModules);
          // workspaces artifacts should never be cached
          pathsToRemove.add(`.yarn/bundled` as PortablePath);
          // node-modules linker only re-links workspaces when their locator hashes change
          // so we must invalidate its install state every time
          pathsToRemove.add(`${Filename.nodeModules}/.yarn-state.yml` as Filename);
          await Promise.all(
            [...pathsToRemove].map(pathname => xfs.removePromise(baseFs.resolve(pathname), {recursive: true})),
          );

          const tgz = await genPackTgz(workspace);
          await tgzUtils.extractArchiveTo(tgz, baseFs, {stripComponents: 1});
          const lockfilePath = ppath.join(project.cwd, configuration.get(`lockfileFilename`));
          await baseFs.copyPromise(DEFAULT_LOCK_FILENAME, lockfilePath);
          const supportedArchitectures = miscUtils.convertMapsToIndexableObjects(configuration.get(`supportedArchitectures`));
          const exportedArchitectures = configuration.get(`exportedArchitectures`);
          for (const key of (Object.keys(supportedArchitectures) as Array<keyof SupportedArchitectures>)) {
            const value = exportedArchitectures.get(key);
            if (value) {
              supportedArchitectures[key] = value;
            }
          }
          const tmpConfiguration = Configuration.create(cacheDir, cacheDir, configuration.plugins);

          tmpConfiguration.values.set(`compressionLevel`, configuration.get(`compressionLevel`));
          tmpConfiguration.values.set(`enableNetwork`, false);
          tmpConfiguration.values.set(`enableMirror`, false);
          tmpConfiguration.values.set(`globalFolder`, configuration.get(`globalFolder`));
          tmpConfiguration.values.set(`nodeLinker`, nodeLinker);
          tmpConfiguration.values.set(`packageExtensions`, configuration.get(`packageExtensions`));
          tmpConfiguration.values.set(`supportedArchitectures`, new Map(Object.entries(supportedArchitectures)));
          tmpConfiguration.values.set(`cacheFolder`, ppath.join(cacheDir, `.yarn/packages` as PortablePath));
          tmpConfiguration.values.set(`preferAggregateCacheInfo`, true);

          await Configuration.updateConfiguration(cacheDir, {
            cacheFolder: `.yarn/packages` as PortablePath,
            enableNetwork: tmpConfiguration.get(`enableNetwork`),
            enableMirror: tmpConfiguration.get(`enableMirror`),
            nodeLinker,
            packageExtensions: tmpConfiguration.get(`packageExtensions`),
            supportedArchitectures,
          });

          await tmpConfiguration.refreshPackageExtensions();

          const {project: tmpProject, workspace: tmpWorkspace} = await Project.find(tmpConfiguration, cacheDir);

          if (!tmpWorkspace)
            throw new WorkspaceRequiredError(tmpProject.cwd, cacheDir);

          tmpWorkspace.manifest.packageManager = project.topLevelWorkspace.manifest.packageManager;
          tmpWorkspace.manifest.resolutions = project.topLevelWorkspace.manifest.resolutions;
          tmpWorkspace.manifest.workspaceDefinitions = [{pattern: `.yarn/bundled/*`}];

          for (const dependency of workspace.getRecursiveWorkspaceDependencies({
            dependencies: this.production ? [`dependencies`] : Manifest.hardDependencies,
          })) {
            // The following is rather hacky. This overwrites the relative cwd
            // for workspace dependencies to the new location in the exported
            // project. The absolute cwd is preserved so that the fetcher is
            // still able to pack the workspace.

            // @ts-expect-error
            dependency.relativeCwd = `.yarn/bundled/${structUtils.slugifyLocator(dependency.anchoredLocator)}` as PortablePath;
            // @ts-expect-error
            dependency.anchoredDescriptor = structUtils.makeDescriptor(dependency.locator, `${WorkspaceResolver.protocol}${dependency.relativeCwd}`);
            // @ts-expect-error
            dependency.anchoredLocator = structUtils.makeLocator(dependency.locator, `${WorkspaceResolver.protocol}${dependency.relativeCwd}`);
            tmpProject.workspaces.push(dependency);
            tmpProject.workspacesByCwd.set(ppath.resolve(tmpProject.cwd, dependency.relativeCwd), dependency);
            tmpProject.workspacesByIdent.set(dependency.locator.identHash, dependency);
          }
          await tmpProject.restoreInstallState({restoreResolutions: false});

          report.reportInfo(MessageName.UNNAMED, `Linking the exported workspace`);

          await tmpProject.install({
            cache: await ExportCache.find(tmpConfiguration, cache),
            mode: InstallMode.SkipBuild,
            fetcher: makeFetcher(project),
            resolver: makeResolver(project),
            report,
            persistProject: true,
          });
          if (configuration.get(`yarnPath`))
            await this.cli.run([`set`, `version`, `self`], {...this.context, cwd: cacheDir, quiet: true});

          const extname = ppath.basename(target).split(`.`).slice(1).join(`.`);
          switch (extname) {
            case `zip`: {
              report.reportInfo(MessageName.UNNAMED, `Zipping archive`);
              report.reportJson({output: target, format: `zip`});
              const libzip = await getLibzipPromise();
              const zipFs = new ZipFS(target, {create: true, libzip});

              await zipFs.copyPromise(PortablePath.root, PortablePath.dot, {baseFs, stableTime: true, stableSort: true});
              await zipFs.saveAndClose();
              break;
            }
            case `tgz`:
            case `tar.gz`: {
              report.reportInfo(MessageName.UNNAMED, `Gzipping archive`);
              const gzip = await makeGzipFromDirectory(cacheDir);
              const write = xfs.createWriteStream(target);

              gzip.pipe(write);

              await new Promise(resolve => {
                write.on(`finish`, resolve);
              });
              report.reportJson({output: target, format: `gzip`});
              break;
            }
            case ``: {
              report.reportInfo(MessageName.UNNAMED, `Copying output`);
              await xfs.mkdirpPromise(target);
              const existing = await xfs.readdirPromise(target);
              if (existing.length) throw new ReportError(MessageName.EXCEPTION, `Output directory must be empty: ${target}`);

              await xfs.copyPromise(target, PortablePath.dot, {baseFs});
              report.reportJson({output: target, format: `dir`});
              break;
            }
            default:
              throw new ReportError(MessageName.EXCEPTION, `Unexpected output format '.${extname}'`);
          }

          report.reportInfo(MessageName.UNNAMED, `Workspace exported to ${formatUtils.pretty(configuration, target, `magenta`)}`);
          break;
        }
        case `post`:
          report.reportInfo(null, `Cleaning ${formatUtils.pretty(configuration, workspace.anchoredLocator, formatUtils.Type.LOCATOR)}`);
          await scriptUtils.maybeExecuteWorkspaceLifecycleScript(workspace, `postpack`, {report});
          break;
      }
    });
    return report.exitCode();
  }
}

function interpolateOutputName(name: string, {workspace}: {workspace: Workspace}) {
  const interpolated = name
    .replace(`%s`, prettyWorkspaceIdent(workspace))
    .replace(`%v`, prettyWorkspaceVersion(workspace));

  return npath.toPortablePath(interpolated);
}

function prettyWorkspaceIdent(workspace: Workspace) {
  if (workspace.manifest.name !== null) {
    return structUtils.slugifyIdent(workspace.manifest.name);
  } else {
    return `workspace`;
  }
}

function prettyWorkspaceVersion(workspace: Workspace) {
  if (workspace.manifest.version !== null) {
    return workspace.manifest.version;
  } else {
    return `unknown`;
  }
}

class LightInfoReport extends LightReport {
  reportInfo(name: MessageName | null, text: string): void {
    // eslint-disable-next-line dot-notation
    this[`stdout`].write(`${text}\n`);
  }
}

function monkeyPatchNextStreamReport() {
  const {start} = StreamReport;
  StreamReport.start = function (opts, cb: any) {
    this.start = start;
    return LightInfoReport.start(opts, cb) as any;
  };
}
