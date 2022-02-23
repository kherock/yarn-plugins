/// <reference types="@yarnpkg/plugin-pnp" />
import {BaseCommand, WorkspaceRequiredError}                                         from '@yarnpkg/cli';
import {StreamReportOptions}                                                         from '@yarnpkg/core/lib/StreamReport';
import {getLibzipPromise}                                                            from '@yarnpkg/libzip';
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

const MAIN_CONTEXT = Symbol(`MAIN_CONTEXT`);
const EXPORT_PHASE = Symbol(`EXPORT_PHASE`);

export default class WorkspacesExportCommand extends BaseCommand {
  json: boolean = Option.Boolean(`--json`, false, {description: `Format the output as an NDJSON stream`});

  production: boolean = Option.Boolean(
    `--production`,
    false,
    {description: `Only install regular dependencies by omitting dev dependencies`},
  );

  noCache: boolean = Option.Boolean(
    `--no-cache`,
    false,
    {description: `Do not cache archive contents in the configured \`exportCacheFolder\``},
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
    const {[MAIN_CONTEXT]: mainContext, [EXPORT_PHASE]: exportPhase} = this.context as any;

    const configuration = await Configuration.find(this.context.cwd, this.context.plugins);
    const {project, workspace} = await Project.find(configuration, this.context.cwd);

    if (!workspace)
      throw new WorkspaceRequiredError(project.cwd, this.context.cwd);

    const exportWorkspaces = this.workspaces.length ? this.workspaces : [structUtils.stringifyIdent(workspace.locator)];
    if (!mainContext) {
      const report = await StreamReport.start({
        configuration,
        stdout: this.context.stdout,
        json: this.json,
      }, async report => {
        let commandIndex = 0;
        const commandIndexes: Record<string, number> = {};
        const mainContext = {
          ...this.context,
          getCommandIndex: (workspace: Workspace) => {
            commandIndexes[workspace.locator.identHash] ??= commandIndex++;
            return commandIndexes[workspace.locator.identHash];
          },
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

        foreachCommand.push(...exportWorkspaces.flatMap(name => [`--from`, name])),
        exportCommand.push(...exportWorkspaces);
        try {
          const exitCode = await this.cli.run([
            ...foreachCommand,
            ...exportCommand,
          ], {...this.context, [MAIN_CONTEXT]: mainContext, [EXPORT_PHASE]: `main`} as CommandContext);
          if (exitCode !== 0) {
            report.reportError(MessageName.EXCEPTION, `Export failed (please check the logs above for details)`);
          }
        } finally {
          if (!this.skipPackLifecycle) {
            await this.cli.run([
              ...foreachCommand,
              ...exportCommand,
            ], {...this.context, [MAIN_CONTEXT]: mainContext, [EXPORT_PHASE]: `post`} as CommandContext);
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

    const report = await PrefixReport.start({
      configuration,
      stdout: mainContext.stdout,
      json: this.json,
      prefix: getPrefix(workspace, {configuration, commandIndex: mainContext.getCommandIndex(workspace)}),
      includeFooter: false,
    }, async report => {
      switch (exportPhase) {
        case `main`: {
          if (!this.skipPackLifecycle)
            await scriptUtils.maybeExecuteWorkspaceLifecycleScript(workspace, `prepack`, {report});
          if (!exportWorkspaces.includes(structUtils.stringifyIdent(workspace.locator)))
            return;

          const cacheDir = this.noCache ? await xfs.mktempPromise() : await makeExportDir(workspace);
          report.reportJson({base: workspace.cwd, cacheDir});
          const baseFs = new CwdFS(cacheDir);

          // remove files generated during pack
          const preservePaths = nodeLinker === `pnp` ? [Filename.pnpCjs, `.pnp`] : [Filename.nodeModules];
          await Promise.all(
            (await baseFs.readdirPromise(PortablePath.dot))
              .filter(pathname => !preservePaths.includes(pathname))
              .map(pathname => xfs.removePromise(baseFs.resolve(pathname))),
          );

          const tgz = await genPackTgz(workspace);
          await tgzUtils.extractArchiveTo(tgz, baseFs, {stripComponents: 1});
          const lockfilePath = ppath.join(project.cwd, configuration.get(`lockfileFilename`));
          await baseFs.copyPromise(DEFAULT_LOCK_FILENAME, lockfilePath);

          const tmpConfiguration = Configuration.create(cacheDir, cacheDir, configuration.plugins);

          tmpConfiguration.values.set(`enableNetwork`, false);
          tmpConfiguration.values.set(`enableMirror`, false);
          tmpConfiguration.values.set(`globalFolder`, configuration.get(`globalFolder`));
          tmpConfiguration.values.set(`nodeLinker`, nodeLinker);
          tmpConfiguration.values.set(`packageExtensions`, configuration.get(`packageExtensions`));

          if (nodeLinker === `pnp`) {
            // remove references to Yarn in the target archive as PnP's runtime does not depend on Yarn
            tmpConfiguration.values.set(`installStatePath`, ppath.join(cacheDir, `.pnp/install-state.gz` as Filename));
            tmpConfiguration.values.set(`cacheFolder`, ppath.join(cacheDir, `.pnp/packages` as PortablePath));
            tmpConfiguration.values.set(`pnpUnpluggedFolder`, ppath.join(cacheDir, `.pnp/unplugged` as PortablePath));
            tmpConfiguration.values.set(`virtualFolder`, ppath.join(cacheDir, `.pnp/${Filename.virtual}` as PortablePath));
          } else {
            tmpConfiguration.values.set(`installStatePath`, ppath.join(cacheDir, `${Filename.nodeModules}/.yarn-install-state.gz` as Filename));
            tmpConfiguration.values.set(`cacheFolder`, await xfs.mktempPromise());
          }

          await tmpConfiguration.refreshPackageExtensions();

          const {project: tmpProject, workspace: tmpWorkspace} = await Project.find(tmpConfiguration, cacheDir);

          if (!tmpWorkspace)
            throw new WorkspaceRequiredError(tmpProject.cwd, cacheDir);

          // restore original `workspace:` references stripped by plugin-pack
          tmpWorkspace.manifest.dependencies = workspace.manifest.dependencies;
          tmpWorkspace.manifest.peerDependencies = workspace.manifest.peerDependencies;
          if (this.production)
            workspace.manifest.devDependencies.clear();
          else
            tmpWorkspace.manifest.devDependencies = workspace.manifest.devDependencies;
          tmpWorkspace.manifest.resolutions = project.topLevelWorkspace.manifest.resolutions;

          await tmpProject.restoreInstallState({restoreResolutions: false});
          report.reportInfo(MessageName.UNNAMED, `Linking the exported workspace`);
          await tmpProject.install({
            cache: await ExportCache.find(tmpConfiguration, cache),
            fetcher: makeFetcher(project),
            resolver: makeResolver(project),
            report,
            persistProject: false,
          });
          await baseFs.removePromise(DEFAULT_LOCK_FILENAME);

          if (nodeLinker !== `pnp`) {
            // node-modules linker only monitors workspaces for locator hash changes
            // so we must invalidate the install state after build
            await Promise.all([
              baseFs.removePromise(`${Filename.nodeModules}/.yarn-state.yml` as Filename),
              baseFs.removePromise(`${Filename.nodeModules}/.yarn-install-state.gz` as Filename),
            ]);
          }

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
              throw new ReportError(MessageName.EXCEPTION, `Unsupported output format '.${extname}'`);
          }

          report.reportInfo(MessageName.UNNAMED, `Workspace exported to ${formatUtils.pretty(configuration, target, `magenta`)}`);
          break;
        }
        case `post`:
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

interface PrefixReportOptions extends StreamReportOptions {
  prefix: string;
}

// @ts-expect-error
class PrefixReport extends StreamReport {
  static async start(opts: PrefixReportOptions, cb: (report: StreamReport) => Promise<void>) {
    return super.start(opts, cb);
  }

  private prefix: string;

  constructor({prefix, ...opts}: PrefixReportOptions) {
    super(opts);

    this.prefix = prefix;
  }

  protected formatNameWithHyperlink(name: MessageName | null) {
    // eslint-disable-next-line dot-notation
    const formattedName = super[`formatNameWithHyperlink`](name);
    if (!formattedName)
      return null;

    return `${formattedName}: ${this.prefix}`;
  }
}

type GetPrefixOptions = {
  configuration: Configuration;
  commandIndex: number;
};

function getPrefix(workspace: Workspace, {configuration, commandIndex}: GetPrefixOptions) {
  const ident = structUtils.convertToIdent(workspace.locator);
  const name = structUtils.stringifyIdent(ident);

  const prefix = `[${name}]`;

  const colors = [`#2E86AB`, `#A23B72`, `#F18F01`, `#C73E1D`, `#CCE2A3`];
  const colorName = colors[commandIndex % colors.length];

  return formatUtils.pretty(configuration, prefix, colorName);
}
