/// <reference types="@yarnpkg/plugin-pnp" />
import {BaseCommand, WorkspaceRequiredError}                 from '@yarnpkg/cli';
import type {SupportedArchitectures}                         from '@yarnpkg/core/lib/Configuration';
import {Hooks as PackHooks}                                  from '@yarnpkg/plugin-pack';
import {Command, Usage, Option}                              from 'clipanion';
import micromatch                                            from 'micromatch';

import {ExportCache}                                         from '../ExportCache';
import {genPackTgz, makeExportFs, makeFetcher, makeResolver} from '../exportUtils';

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
  Filename,
  PortablePath,
  npath,
  ppath,
  xfs,
} from '@yarnpkg/fslib';

type LogFilter = miscUtils.MapValueToObjectValue<ConfigurationValueMap['logFilters'][number]>;

const EXPORT_CONTEXT = Symbol(`EXPORT_CONTEXT`);

interface ExportContext {
  phase: 'main' | 'post';
  format: 'zip' | 'tarball' | 'dir';
  project: Project;
  cache: Cache;
  exportWorkspaces: Set<Workspace>;
}

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

  noCache: boolean = Option.Boolean(
    `--no-cache`,
    false,
    {description: `Skip storing exported artifacts in an intermediate cached folder`},
  );
  out: string = Option.String(`-o,--out`, `workspace.zip`, {description: `Create the archive at the specified path`});

  from: Array<string> = Option.Rest();

  static usage: Usage = Command.Usage({
    category: `Workspace-related commands`,
    description: `export a workspace package into a deployable archive`,
    details: `
      This command will export the active workspace and its dependencies into a deployable archive. It calls \`pack\` on each workspace dependency and installs them into the generated project's cache.

      This is designed to be used for deployment, not for publishing, so everything required to run except for a runtime (i.e. node) is bundled into the archive.

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
    const {[EXPORT_CONTEXT]: exportContext} = this.context as CommandContext & { [EXPORT_CONTEXT]: ExportContext};

    if (!exportContext) {
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

      if (!this.skipPackLifecycle)
        await project.restoreInstallState();

      const report = await StreamReport.start({
        configuration,
        stdout: this.context.stdout,
        json: this.json,
      }, async report => {
        const [extname] = /(\..*)?$/.exec(ppath.basename(this.out as Filename))!;
        let format: ExportContext['format'];
        switch (extname) {
          case `.zip`:
            format = `zip`;
            break;
          case `.tgz`:
          case `.tar.gz`:
            format = `tarball`;
            break;
          case ``:
            format = `dir`;
            break;
          default:
            throw new ReportError(MessageName.EXCEPTION, `Unexpected output format '${extname}'`);
        }
        const exportCandidates = [workspace, ...(this.from.length > 0 ? workspace.getRecursiveWorkspaceChildren() : [])];
        const fromPredicate = (workspace: Workspace) => micromatch.isMatch(structUtils.stringifyIdent(workspace.locator), this.from);
        const exportContext: ExportContext = {
          phase: `main`,
          format,
          project,
          cache: await Cache.find(configuration, {immutable: true}),
          exportWorkspaces: new Set(this.from.length > 0 ? exportCandidates.filter(fromPredicate) : exportCandidates),
        };

        const foreachCommand = [`workspaces`, `foreach`, `--parallel`];
        const exportCommand = [`workspaces`, `export`];

        if (this.json) exportCommand.push(`--json`);
        if (this.production) exportCommand.push(`--production`);
        if (this.noCache) exportCommand.push(`--no-cache`);
        if (this.skipPackLifecycle)
          exportCommand.push(`--skip-pack-lifecycle`);
        else
          foreachCommand.push(`--recursive`, `--topological-dev`);
        if (this.nodeLinker) exportCommand.push(`--node-linker`, this.nodeLinker);
        if (this.out) exportCommand.push(`--out`, this.out);

        foreachCommand.push(...this.from.flatMap(pattern => [`--from`, pattern]));
        try {
          monkeyPatchNextStreamReport();
          const exitCode = await this.cli.run([
            ...foreachCommand,
            ...exportCommand,
          ], {...this.context, [EXPORT_CONTEXT]: exportContext} as CommandContext);
          if (exitCode !== 0) {
            report.reportError(MessageName.EXCEPTION, `Export failed (please check the logs above for details)`);
          }
        } finally {
          exportContext.phase = `post`;
          if (!this.skipPackLifecycle) {
            monkeyPatchNextStreamReport();
            await this.cli.run([
              ...foreachCommand,
              ...exportCommand,
            ], {...this.context, [EXPORT_CONTEXT]: exportContext} as CommandContext);
          }
        }
      });
      return report.exitCode();
    }

    const {cache, exportWorkspaces, format, phase, project} = exportContext;
    const workspace = project.getWorkspaceByCwd(this.context.cwd);
    const nodeLinker = this.nodeLinker ?? project.configuration.get(`nodeLinker`);

    const target = ppath.resolve(this.context.cwd, interpolateOutputName(this.out, {workspace}));

    const report = await StreamReport.start({
      configuration: project.configuration,
      stdout: this.context.stdout,
      json: this.json,
    }, async report => {
      switch (phase) {
        case `main`: {
          if (exportWorkspaces.has(workspace) || !this.skipPackLifecycle)
            report.reportInfo(null, `Processing ${formatUtils.pretty(project.configuration, workspace.anchoredLocator, formatUtils.Type.LOCATOR)}`);
          if (!this.skipPackLifecycle)
            await scriptUtils.maybeExecuteWorkspaceLifecycleScript(workspace, `prepack`, {report});
          if (!exportWorkspaces.has(workspace))
            return;

          const {baseFs, finalize} = await makeExportFs(workspace, {format, noCache: this.noCache, report, target});
          const stagingDir = baseFs.getRealPath();

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
          const lockfilePath = ppath.join(project.cwd, project.configuration.get(`lockfileFilename`));
          await baseFs.copyPromise(DEFAULT_LOCK_FILENAME, lockfilePath);
          const supportedArchitectures = miscUtils.convertMapsToIndexableObjects(project.configuration.get(`supportedArchitectures`));
          const exportedArchitectures = project.configuration.get(`exportedArchitectures`);
          for (const key of (Object.keys(supportedArchitectures) as Array<keyof SupportedArchitectures>)) {
            const value = exportedArchitectures.get(key);
            if (value) {
              supportedArchitectures[key] = value;
            }
          }
          const tmpConfiguration = Configuration.create(stagingDir, stagingDir, project.configuration.plugins);

          tmpConfiguration.values.set(`compressionLevel`, project.configuration.get(`compressionLevel`));
          tmpConfiguration.values.set(`enableNetwork`, false);
          tmpConfiguration.values.set(`enableMirror`, false);
          tmpConfiguration.values.set(`globalFolder`, project.configuration.get(`globalFolder`));
          tmpConfiguration.values.set(`nodeLinker`, nodeLinker);
          tmpConfiguration.values.set(`packageExtensions`, project.configuration.get(`packageExtensions`));
          tmpConfiguration.values.set(`supportedArchitectures`, new Map(Object.entries(supportedArchitectures)));
          tmpConfiguration.values.set(`cacheFolder`, ppath.join(stagingDir, `.yarn/packages` as PortablePath));
          tmpConfiguration.values.set(`preferAggregateCacheInfo`, true);

          await Configuration.updateConfiguration(stagingDir, {
            cacheFolder: `.yarn/packages` as PortablePath,
            enableNetwork: tmpConfiguration.get(`enableNetwork`),
            enableMirror: tmpConfiguration.get(`enableMirror`),
            nodeLinker,
            packageExtensions: tmpConfiguration.get(`packageExtensions`),
            supportedArchitectures,
          });

          await tmpConfiguration.refreshPackageExtensions();

          const {project: tmpProject, workspace: tmpWorkspace} = await Project.find(tmpConfiguration, stagingDir);

          if (!tmpWorkspace)
            throw new WorkspaceRequiredError(tmpProject.cwd, stagingDir);

          tmpWorkspace.manifest.packageManager = project.topLevelWorkspace.manifest.packageManager;
          tmpWorkspace.manifest.resolutions = project.topLevelWorkspace.manifest.resolutions;
          tmpWorkspace.manifest.workspaceDefinitions = [{pattern: `.yarn/bundled/*`}];

          for (const dependency of workspace.getRecursiveWorkspaceDependencies({
            dependencies: this.production ? [`dependencies`] : Manifest.hardDependencies,
          })) {
            // Here be dragons - This overwrites the relative cwd
            // for workspace dependencies to the new location in the exported
            // project. The absolute cwd is preserved so that the fetcher is
            // still able to pack the workspace.
            const relativeCwd = `.yarn/bundled/${structUtils.slugifyLocator(dependency.anchoredLocator)}` as PortablePath;
            const anchoredDescriptor = structUtils.makeDescriptor(dependency.locator, `${WorkspaceResolver.protocol}${relativeCwd}`);
            const anchoredLocator = structUtils.makeLocator(dependency.locator, `${WorkspaceResolver.protocol}${relativeCwd}`);
            const properties: Partial<Workspace> = {relativeCwd, anchoredDescriptor, anchoredLocator};
            const proxy = new Proxy(dependency, {
              get: (target, prop: keyof Workspace) => properties[prop] ?? target[prop],
            });
            tmpProject.workspaces.push(proxy);
            tmpProject.workspacesByCwd.set(ppath.resolve(tmpProject.cwd, proxy.relativeCwd), proxy);
            tmpProject.workspacesByIdent.set(proxy.locator.identHash, proxy);
          }

          report.reportInfo(MessageName.UNNAMED, `Linking the exported workspace`);

          await tmpProject.install({
            cache: await ExportCache.find(tmpConfiguration, cache),
            mode: InstallMode.SkipBuild,
            fetcher: makeFetcher(project),
            resolver: makeResolver(project),
            report,
            persistProject: true,
          });

          await finalize();
          report.reportJson({output: target, format});

          report.reportInfo(MessageName.UNNAMED, `Workspace exported to ${formatUtils.pretty(project.configuration, target, `magenta`)}`);
          break;
        }
        case `post`:
          report.reportInfo(null, `Cleaning ${formatUtils.pretty(project.configuration, workspace.anchoredLocator, formatUtils.Type.LOCATOR)}`);
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
