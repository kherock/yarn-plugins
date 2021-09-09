/// <reference types="@yarnpkg/plugin-pnp" />
import {BaseCommand, WorkspaceRequiredError}                                         from "@yarnpkg/cli";
import {getLibzipPromise}                                                            from '@yarnpkg/libzip';
import {packUtils}                                                                   from "@yarnpkg/plugin-pack";
import {Command, Usage, Option}                                                      from "clipanion";

import {ExportCache}                                                                 from '../ExportCache';
import {genPackTgz, makeExportDir, makeFetcher, makeGzipFromDirectory, makeResolver} from '../exportUtils';

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

export default class WorkspacesExportCommand extends BaseCommand {
  workspaces: Array<string> = Option.Rest();

  json: boolean = Option.Boolean(`--json`, false, {description: `Format the output as an NDJSON stream`});

  production: boolean = Option.Boolean(
    `--production`,
    false,
    {description: `Only install regular dependencies by omitting dev dependencies`}
  );

  noCache: boolean = Option.Boolean(
    `--no-cache`,
    false,
    {description: `Do not cache archive contents in the configured \`exportCacheFolder\``}
  );

  installIfNeeded: boolean = Option.Boolean(
    `--install-if-needed`,
    false,
    {description: `Run a preliminary \`yarn install\` if a package contains build scripts`}
  );

  skipPackLifecycle: boolean = Option.Boolean(
    `--skip-pack-lifecycle`,
    false,
    {description: `Skip running \`yarn pack\` lifecycle scripts`}
  );

  nodeLinker?: string = Option.String(
    `--node-linker`,
    {description: `Override the project's nodeLinker option in the exported archive`}
  );

  out?: string = Option.String(`-o,--out`, {description: `Create the archive at the specified path`});

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
      if (!(await packUtils.hasPackScripts(workspace))) {
        requiredWorkspaces.delete(workspace);
      }
    }

    const cache = await Cache.find(configuration, {immutable: true});
    if (requiredWorkspaces.size) {
      if (this.installIfNeeded) {
        await project.install({
          cache,
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
        async () => {
          const exportDir = this.noCache ? await xfs.mktempPromise() : await makeExportDir(workspace);
          report.reportJson({base: workspace.cwd, exportDir});
          const baseFs = new CwdFS(exportDir);

          const tgz = await genPackTgz(workspace);
          await tgzUtils.extractArchiveTo(tgz, baseFs, {stripComponents: 1});
          const lockfilePath = ppath.join(project.cwd, configuration.get(`lockfileFilename`));
          await baseFs.copyPromise(DEFAULT_LOCK_FILENAME, lockfilePath);

          const tmpConfiguration = Configuration.create(exportDir, exportDir, configuration.plugins);

          tmpConfiguration.values.set(`bstatePath`, ppath.join(exportDir, `build-state.yml` as Filename));
          tmpConfiguration.values.set(`enableNetwork`, false);
          tmpConfiguration.values.set(`enableMirror`, false);
          tmpConfiguration.values.set(`globalFolder`, configuration.get(`globalFolder`));
          tmpConfiguration.values.set(`nodeLinker`, nodeLinker);
          tmpConfiguration.values.set(`packageExtensions`, configuration.get(`packageExtensions`));

          // remove references to Yarn in the target archive, PnP's runtime does not depend on Yarn
          tmpConfiguration.values.set(`cacheFolder`, ppath.join(exportDir, `.pnp/packages` as PortablePath));
          tmpConfiguration.values.set(`pnpUnpluggedFolder`, ppath.join(exportDir, `.pnp/unplugged` as PortablePath));
          tmpConfiguration.values.set(`virtualFolder`, ppath.join(exportDir, `.pnp/__virtual__` as PortablePath));

          switch (nodeLinker) {
            case `pnp`:
              break;
            case `node-modules`:
              tmpConfiguration.values.set(`cacheFolder`, await xfs.mktempPromise());
              break;
          }

          await tmpConfiguration.refreshPackageExtensions();

          const {project: tmpProject, workspace: tmpWorkspace} = await Project.find(tmpConfiguration, exportDir);

          if (!tmpWorkspace)
            throw new WorkspaceRequiredError(tmpProject.cwd, exportDir);

          // restore original `workspace:` references stripped by plugin-pack
          tmpWorkspace.manifest.dependencies = workspace.manifest.dependencies;
          tmpWorkspace.manifest.peerDependencies = workspace.manifest.peerDependencies;
          if (this.production)
            workspace.manifest.devDependencies.clear();
          else
            tmpWorkspace.manifest.devDependencies = workspace.manifest.devDependencies;
          tmpWorkspace.manifest.resolutions = project.topLevelWorkspace.manifest.resolutions;

          await tmpProject.install({
            cache: await ExportCache.find(tmpConfiguration, cache),
            fetcher: makeFetcher(project),
            resolver: makeResolver(project),
            report,
            persistProject: false,
          });
          await baseFs.removePromise(DEFAULT_LOCK_FILENAME);
          await baseFs.removePromise(tmpConfiguration.get(`installStatePath`));

          if (target.endsWith(`.zip`)) {
            report.reportJson({output: target, format: `zip`});
            const libzip = await getLibzipPromise();
            const zipFs = new ZipFS(target, {create: true, libzip});

            await zipFs.copyPromise(PortablePath.root, PortablePath.dot, {baseFs, stableTime: true, stableSort: true});
            await zipFs.saveAndClose();
          } else {
            const gzip = await makeGzipFromDirectory(exportDir);
            const write = xfs.createWriteStream(target);

            gzip.pipe(write);

            await new Promise(resolve => {
              write.on(`finish`, resolve);
            });
            report.reportJson({output: target, format: `gzip`});
          }

          report.reportInfo(MessageName.UNNAMED, `Workspace exported to ${formatUtils.pretty(configuration, target, `magenta`)}`);
          report.reportJson({output: target});
        }
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
