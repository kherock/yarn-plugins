/// <reference types="@yarnpkg/plugin-pnp" />
import {BaseCommand, WorkspaceRequiredError} from "@yarnpkg/cli";
import {
  DEFAULT_LOCK_FILENAME,
  Cache,
  Configuration,
  Manifest,
  MessageName,
  Project,
  StreamReport,
  ThrowReport,
  Workspace,
  formatUtils,
  structUtils,
  tgzUtils,
} from "@yarnpkg/core";
import {
  CwdFS,
  Filename,
  PortablePath,
  ZipFS,
  npath,
  ppath,
  xfs,
} from "@yarnpkg/fslib";
import {getLibzipPromise}                                             from '@yarnpkg/libzip';
import {packUtils}                                                    from "@yarnpkg/plugin-pack";
import {Command, Usage}                                               from "clipanion";

import {genPackTgz, makeFetcher, makeGzipFromDirectory, makeResolver} from '../exportUtils';

// eslint-disable-next-line arca/no-default-export
export default class WorkspacesExportCommand extends BaseCommand {
  @Command.Rest()
  workspaces: Array<string> = [];

  @Command.Boolean(`--json`, {description: `Format the output as an NDJSON stream`})
  json: boolean = false;

  @Command.Boolean(`--production`, {description: `Only install regular dependencies by omitting dev dependencies`})
  production: boolean = false;

  @Command.Boolean(`--install-if-needed`, {description: `Run a preliminary \`yarn install\` if a package contains build scripts`})
  installIfNeeded: boolean = false;

  @Command.Boolean(`--skip-pack-lifecycle`, {description: `Skip running \`yarn pack\` lifecycle scripts`})
  skipPackLifecycle: boolean = false;

  @Command.String(`--node-linker`, {description: `Override the project's nodeLinker option in the exported archive`})
  nodeLinker?: string;

  @Command.String(`-o,--out`, {description: `Create the archive at the specified path`})
  out?: string;

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

  @Command.Path(`workspaces`, `export`)
  async execute() {
    const configuration = await Configuration.find(this.context.cwd, this.context.plugins);
    const {project, workspace} = await Project.find(configuration, this.context.cwd);

    if (!workspace)
      throw new WorkspaceRequiredError(project.cwd, this.context.cwd);

    const nodeLinker = this.nodeLinker ?? configuration.get(`nodeLinker`) ?? `pnp`;

    const target = typeof this.out !== `undefined`
      ? ppath.resolve(this.context.cwd, interpolateOutputName(this.out, {workspace}))
      : ppath.resolve(workspace.cwd, `workspace.zip` as Filename);

    const requiredWorkspaces = new Set([workspace]);

    if (this.skipPackLifecycle)
      requiredWorkspaces.delete(workspace);

    for (const workspace of requiredWorkspaces) {
      for (const dependencyType of Manifest.hardDependencies) {
        for (const descriptor of workspace.manifest.getForScope(dependencyType).values()) {
          const matchingWorkspace = project.tryWorkspaceByDescriptor(descriptor);

          if (matchingWorkspace === null)
            continue;

          // ensure dependencies always come after the workspaces that depend on them
          requiredWorkspaces.delete(matchingWorkspace);
          requiredWorkspaces.add(matchingWorkspace);
        }
      }
      if (!await packUtils.hasPackScripts(workspace)) {
        requiredWorkspaces.delete(workspace);
      }
    }

    if (requiredWorkspaces.size) {
      if (this.installIfNeeded) {
        await project.install({
          cache: await Cache.find(configuration),
          report: new ThrowReport(),
        });
      } else {
        await project.restoreInstallState();
      }
    }

    const report = await StreamReport.start({
      configuration,
      stdout: this.context.stdout,
      json: this.json,
    }, async report => {
      const cb = [...requiredWorkspaces].reduce(
        (cb, workspace) => async () => await packUtils.prepareForPack(workspace, {report}, cb),
        async () => await xfs.mktempPromise(async tmpDir => {
          report.reportJson({base: workspace.cwd, tmpDir});
          const baseFs = new CwdFS(tmpDir);

          const tgz = await genPackTgz(workspace);
          await tgzUtils.extractArchiveTo(tgz, baseFs, {stripComponents: 1});
          const lockfilePath = ppath.join(project.cwd, configuration.get(`lockfileFilename`));
          await baseFs.copyPromise(DEFAULT_LOCK_FILENAME, lockfilePath);

          const tmpConfiguration = Configuration.create(tmpDir, tmpDir, configuration.plugins);

          tmpConfiguration.values.set(`bstatePath`, ppath.join(tmpDir, `build-state.yml` as Filename));
          tmpConfiguration.values.set(`enableNetwork`, false);
          tmpConfiguration.values.set(`enableMirror`, true);
          tmpConfiguration.values.set(`globalFolder`, configuration.get(`globalFolder`));
          tmpConfiguration.values.set(`nodeLinker`, nodeLinker);
          tmpConfiguration.values.set(`packageExtensions`, configuration.get(`packageExtensions`));

          switch (nodeLinker) {
            case `pnp`:
              // remove references to Yarn in the target archive, PnP's runtime does not depend on Yarn
              tmpConfiguration.values.set(`cacheFolder`, ppath.join(tmpDir, `.pnp/packages` as PortablePath));
              tmpConfiguration.values.set(`pnpUnpluggedFolder`, ppath.join(tmpDir, `.pnp/unplugged` as PortablePath));
              tmpConfiguration.values.set(`virtualFolder`, ppath.join(tmpDir, `.pnp/$$virtual` as PortablePath));
              break;
            case `node-modules`:
              tmpConfiguration.values.set(`cacheFolder`, await xfs.mktempPromise());
              break;
          }

          await tmpConfiguration.refreshPackageExtensions();

          const {project: tmpProject, workspace: tmpWorkspace} = await Project.find(tmpConfiguration, tmpDir);

          if (!tmpWorkspace)
            throw new WorkspaceRequiredError(tmpProject.cwd, tmpDir);

          // TODO: customize cache instance to use current project as mirror
          const cache = await Cache.find(tmpConfiguration);

          // restore original `workspace:` references stripped by plugin-pack
          tmpWorkspace.manifest.dependencies = workspace.manifest.dependencies;
          tmpWorkspace.manifest.peerDependencies = workspace.manifest.peerDependencies;
          if (this.production)
            workspace.manifest.devDependencies.clear();
          else
            tmpWorkspace.manifest.devDependencies = workspace.manifest.devDependencies;
          tmpWorkspace.manifest.resolutions = project.topLevelWorkspace.manifest.resolutions;

          await tmpProject.install({
            cache,
            fetcher: makeFetcher(project),
            resolver: makeResolver(project),
            report,
            persistProject: false,
          });
          await baseFs.removePromise(DEFAULT_LOCK_FILENAME);
          await baseFs.removePromise(tmpConfiguration.get(`bstatePath`));

          if (target.endsWith(`.zip`)) {
            report.reportJson({output: target, format: `zip`});
            const libzip = await getLibzipPromise();
            const zipFs = new ZipFS(target, {create: true, libzip});

            await zipFs.copyPromise(PortablePath.root, PortablePath.dot, {baseFs, stableTime: true, stableSort: true});
            await zipFs.saveAndClose();
          } else {
            const gzip = await makeGzipFromDirectory(tmpDir);
            const write = xfs.createWriteStream(target);

            gzip.pipe(write);

            await new Promise(resolve => {
              write.on(`finish`, resolve);
            });
            report.reportJson({output: target, format: `gzip`});
          }

          report.reportInfo(MessageName.UNNAMED, `Workspace exported to ${formatUtils.pretty(configuration, target, `magenta`)}`);
          report.reportJson({output: target});
        })
      );
      await cb();
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
