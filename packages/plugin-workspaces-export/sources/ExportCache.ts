import {Cache, Configuration, Locator, LocatorHash, structUtils, WorkspaceResolver} from '@yarnpkg/core';
import {FakeFS, JailFS, NodeFS, PortablePath, ppath, xfs, ZipFS}                    from '@yarnpkg/fslib';

export class ExportCache extends Cache {
  private parentCache: Cache;
  private parentMirror: Map<string, PortablePath> = new Map();
  private workspaceMutexes: Map<LocatorHash, Promise<PortablePath>> = new Map();

  static async find(configuration: Configuration, parentCache: Cache) {
    const cache = new ExportCache(configuration.get(`cacheFolder`), {configuration, parentCache});
    await cache.setup();

    return cache;
  }

  constructor(cacheCwd: PortablePath, {configuration, parentCache}: {
    configuration: Configuration;
    parentCache: Cache;
  }) {
    super(cacheCwd, {configuration});
    this.parentCache = parentCache;
  }

  getLocatorMirrorPath(locator: Locator) {
    return this.parentMirror.get(structUtils.slugifyLocator(locator)) ?? null;
  }

  async setup() {
    await super.setup();
    const directoryListing = await xfs.readdirPromise(this.parentCache.cwd, {withFileTypes: true});
    for (const entry of directoryListing) {
      let match: RegExpMatchArray | null;
      if (entry.isDirectory() || !(match = entry.name.match(/^(.*)-[a-f\d]+\.zip$/i)))
        continue;
      this.parentMirror.set(match[1], ppath.join(this.parentCache.cwd, entry.name));
    }
  }

  async fetchPackageFromCache(locator: Locator, expectedChecksum: string | null, {loader}: {loader?: () => Promise<ZipFS>}): Promise<[FakeFS<PortablePath>, () => void, string | null]> {
    const baseFs = new NodeFS();

    const loadWorkspaceThroughMutex = async () => {
      const cachePath = ppath.resolve(this.cwd, `../bundled` as PortablePath, structUtils.slugifyLocator(locator) as PortablePath);

      const mutexedLoad = async () => {
        const cacheExists = await baseFs.existsPromise(cachePath);

        if (!cacheExists) {
          const zipFs = await loader!();
          await baseFs.copyPromise(cachePath, PortablePath.root, {baseFs: zipFs});
          zipFs.discardAndClose();
        }
        return cachePath;
      };

      const mutex = mutexedLoad();
      this.workspaceMutexes.set(locator.locatorHash, mutex);

      try {
        return await mutex;
      } finally {
        this.workspaceMutexes.delete(locator.locatorHash);
      }
    };

    if (!locator.reference.startsWith(WorkspaceResolver.protocol))
      return await super.fetchPackageFromCache(locator, expectedChecksum, {loader});

    for (let mutex; (mutex = this.workspaceMutexes.get(locator.locatorHash));)
      await mutex;

    const cachePath = await loadWorkspaceThroughMutex();

    return [new JailFS(cachePath, {baseFs}), () => {}, null as unknown as string];
  }
}
