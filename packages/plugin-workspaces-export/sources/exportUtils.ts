import {MultiFetcher}                                                       from '@yarnpkg/core/lib/MultiFetcher';
import {MultiResolver}                                                      from '@yarnpkg/core/lib/MultiResolver';
import {ProtocolResolver}                                                   from '@yarnpkg/core/lib/ProtocolResolver';
import {VirtualResolver}                                                    from '@yarnpkg/core/lib/VirtualResolver';
import {Project, VirtualFetcher, Workspace, tgzUtils}                       from '@yarnpkg/core';
import {FakeFS, Filename, JailFS, PortablePath, ppath, xfs, ZipCompression} from '@yarnpkg/fslib';
import {packUtils}                                                          from '@yarnpkg/plugin-pack';
import tar                                                                  from 'tar-stream';
import {createGzip}                                                         from 'zlib';

import {WorkspacePackFetcher}                                               from './WorkspacePackFetcher';
import {WorkspacePackResolver}                                              from './WorkspacePackResolver';

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
    new WorkspacePackFetcher(project),

    ...pluginFetchers,
  ]);
};

/**
 * Make a MultiResolver that resolves workspaces using WorkspacePackResolver
 *
 * @param project The project this resolver should resolve workspace dependencies from
 */
export const makeResolver = (project: Project) => {
  const pluginResolvers = [];

  for (const plugin of project.configuration.plugins.values())
    for (const resolver of plugin.resolvers || [])
      pluginResolvers.push(new resolver());

  return new MultiResolver([
    new VirtualResolver(),
    new WorkspacePackResolver(project),
    new ProtocolResolver(),

    ...pluginResolvers,
  ]);
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

async function walk(cwdFs: FakeFS<PortablePath>) {
  const list: Array<PortablePath> = [];

  const cwdList: Array<PortablePath> = [PortablePath.root];

  while (cwdList.length > 0) {
    const cwd = cwdList.pop()!;
    const stat = await cwdFs.lstatPromise(cwd);

    if (stat.isDirectory()) {
      const entries = await cwdFs.readdirPromise(cwd);

      for (const entry of entries) {
        cwdList.push(ppath.resolve(cwd, entry));
      }
    } else {
      list.push(ppath.relative(PortablePath.root, cwd));
    }
  }

  return list.sort();
}

export const makeGzipFromDirectory = async (directory: PortablePath) => {
  const cwdFs = new JailFS(directory);
  const files = await walk(cwdFs);
  const pack = tar.pack();

  process.nextTick(async () => {
    for (const fileRequest of files) {
      const file = ppath.normalize(fileRequest);

      const stat = await cwdFs.lstatPromise(file);
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
