import {PortablePath} from '@yarnpkg/fslib';

import {genPackZip}   from './exportUtils';

import {
  Locator,
  Fetcher,
  FetchOptions,
  FetchResult,
  MinimalFetchOptions,
  WorkspaceResolver,
  WorkspaceFetcher,
} from '@yarnpkg/core';

/**
 * Fetcher that packs workspaces as cacheable packages
 */
export class WorkspacePackFetcher extends WorkspaceFetcher implements Fetcher {
  async fetch(locator: Locator, opts: FetchOptions) {
    if (locator.reference.slice(WorkspaceResolver.protocol.length) === `.`)
      return await super.fetch(locator, opts);

    const expectedChecksum = opts.checksums.get(locator.locatorHash) || null;

    const [packageFs, releaseFs] = await opts.cache.fetchPackageFromCache(locator, expectedChecksum, {
      loader: () => this.packWorkspace(locator, opts),
    });

    return {
      packageFs,
      releaseFs,
      localPath: this.getLocalPath(locator, opts),
      prefixPath: PortablePath.dot,
    } as FetchResult as any;
  }

  private async packWorkspace(locator: Locator, opts: MinimalFetchOptions) {
    const workspace = opts.project.getWorkspaceByLocator(locator);
    return await genPackZip(workspace, {
      compressionLevel: opts.project.configuration.get(`compressionLevel`),
      stripComponents: 1,
    });
  }
}
