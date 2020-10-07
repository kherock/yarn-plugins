import {MultiFetcher}                                       from '@yarnpkg/core/lib/MultiFetcher';
import {MultiResolver}                                      from '@yarnpkg/core/lib/MultiResolver';
import {ProtocolResolver}                                   from '@yarnpkg/core/lib/ProtocolResolver';
import {VirtualResolver}                                    from '@yarnpkg/core/lib/VirtualResolver';
import {Project, VirtualFetcher, Workspace, tgzUtils}       from '@yarnpkg/core';
import {Filename, PortablePath, ppath, xfs, ZipCompression} from '@yarnpkg/fslib';
import {packUtils}                                          from '@yarnpkg/plugin-pack';

import {WorkspacePackFetcher}                               from './WorkspacePackFetcher';
import {WorkspacePackResolver}                              from './WorkspacePackResolver';

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
