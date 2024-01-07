import {MessageName, MultiFetcher, Project, Report, ReportError, Resolver, structUtils, tgzUtils, VirtualFetcher, Workspace, WorkspaceResolver} from '@yarnpkg/core';
import {CwdFS, Filename, PortablePath, ppath, xfs}                                                                                              from '@yarnpkg/fslib';
import {ZipCompression, ZipFS}                                                                                                                  from '@yarnpkg/libzip';
import {packUtils}                                                                                                                              from '@yarnpkg/plugin-pack';
import tar                                                                                                                                      from 'tar-stream';
import {createGzip}                                                                                                                             from 'zlib';

import {WorkspacePackFetcher}                                                                                                                   from './WorkspacePackFetcher';
import {WorkspacePackResolver}                                                                                                                  from './WorkspacePackResolver';

/**
 * Make a MultiFetcher that resolves workspaces using WorkspacePackFetcher
 *
 * @param project The project this resolver should resolve workspace dependencies from
 */
export const makeFetcher = (project: Project) => {
  const pluginFetchers = [];

  for (const plugin of project.configuration.plugins.values())
    for (const fetcher of plugin.fetchers || [])
      pluginFetchers.push(new fetcher());

  return new MultiFetcher([
    new VirtualFetcher(),
    new WorkspacePackFetcher(),

    ...pluginFetchers,
  ]);
};

/**
 * Make a MultiResolver that resolves workspaces using WorkspacePackResolver
 *
 * @param project The project this resolver should resolve workspace dependencies from
 */
export const makeResolver = (project: Project): Resolver => {
  const resolver = project.configuration.makeResolver();
  const {resolvers} = resolver as unknown as { resolvers: Array<Resolver> };

  const workspaceResolverIdx = resolvers.findIndex(resolver => resolver instanceof WorkspaceResolver);
  resolvers.splice(workspaceResolverIdx, 1, new WorkspacePackResolver());
  return resolver;
};

export const makeExportFs = async (workspace: Workspace, {format, noCache, report, target}: { format: string, noCache: boolean, report: Report, target: PortablePath }) => {
  if (noCache) {
    if (format !== `dir`)
      throw new Error(`Only directory exports may be built without an intermediate cache`);

    await xfs.mkdirpPromise(target);
    const existing = await xfs.readdirPromise(target);
    if (existing.length) throw new ReportError(MessageName.EXCEPTION, `Output directory must be empty: ${target}`);

    return {baseFs: new CwdFS(target), finalize: () => { }};
  }
  const exportCacheFolder = workspace.project.configuration.get(`exportCacheFolder`);
  const exportDir = ppath.resolve(exportCacheFolder, structUtils.slugifyIdent(workspace.anchoredLocator) as PortablePath);
  await xfs.mkdirPromise(exportDir, {recursive: true});
  const baseFs = new CwdFS(exportDir);
  switch (format) {
    case `zip`:
      return {
        baseFs,
        async finalize() {
          report.reportInfo(MessageName.UNNAMED, `Zipping archive`);
          const zipFs = new ZipFS(target, {create: true});

          await zipFs.copyPromise(PortablePath.root, PortablePath.dot, {baseFs, stableTime: true, stableSort: true});
          await zipFs.saveAndClose();
        },
      };
    case `tarball`: {
      return {
        baseFs,
        async finalize() {
          report.reportInfo(MessageName.UNNAMED, `Gzipping archive`);
          const gzip = await makeGzipFromDirectory(exportDir);
          const write = xfs.createWriteStream(target);

          gzip.pipe(write);

          await new Promise(resolve => {
            write.on(`finish`, resolve);
          });
        },
      };
    }
    default:
      return {
        baseFs,
        async finalize() {
          report.reportInfo(MessageName.UNNAMED, `Copying output`);
          await xfs.mkdirpPromise(target);
          const existing = await xfs.readdirPromise(target);
          if (existing.length) throw new ReportError(MessageName.EXCEPTION, `Output directory must be empty: ${target}`);

          await xfs.copyPromise(target, PortablePath.dot, {baseFs});
        },
      };
  }
};

export const genPackTgz = async (workspace: Workspace) => {
  const packDir = await xfs.mktempPromise();
  const pack = await packUtils.genPackStream(workspace);
  const target = ppath.join(packDir, `package.tgz` as Filename);
  const write = xfs.createWriteStream(target);

  pack.pipe(write);

  await new Promise(resolve => {
    write.on(`finish`, resolve);
  });
  return xfs.readFilePromise(target);
};

export const genPackZip = async (workspace: Workspace, opts: {
  compressionLevel?: ZipCompression;
  prefixPath?: PortablePath;
  stripComponents?: number;
}) => {
  return await xfs.mktempPromise(async packDir => {
    const pack = await packUtils.genPackStream(workspace);
    const target = ppath.join(packDir, `package.tgz` as Filename);
    const write = xfs.createWriteStream(target);

    pack.pipe(write);

    await new Promise(resolve => {
      write.on(`finish`, resolve);
    });

    const buffer = await xfs.readFilePromise(target);
    return await tgzUtils.convertToZip(buffer, opts);
  });
};

export const makeGzipFromDirectory = async (directory: PortablePath) => {
  const cwdFs = new CwdFS(directory);
  const files: Array<PortablePath> = [];
  for await (const p of cwdFs.genTraversePromise(directory, {stableSort: true})) files.push(p);
  const pack = tar.pack();

  process.nextTick(async () => {
    for (const fileRequest of files) {
      const file = ppath.relative(directory, fileRequest);

      const stat = await cwdFs.lstatPromise(fileRequest);
      const opts = {name: file, mtime: new Date(315532800000), mode: stat.mode};

      let resolveFn: Function;
      let rejectFn: Function;

      const awaitTarget = new Promise((resolve, reject) => {
        resolveFn = resolve;
        rejectFn = reject;
      });

      const cb = (error: any) => {
        if (error) {
          rejectFn(error);
        } else {
          resolveFn();
        }
      };

      if (stat.isFile())
        pack.entry({...opts, type: `file`}, await cwdFs.readFilePromise(file), cb);
      else if (stat.isSymbolicLink())
        pack.entry({...opts, type: `symlink`, linkname: await cwdFs.readlinkPromise(file)}, cb);

      await awaitTarget;
    }
    pack.finalize();
  });

  const tgz = createGzip();
  pack.pipe(tgz);

  return tgz;
};
