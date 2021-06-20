import {PortablePath} from '@yarnpkg/fslib';

import {
  Descriptor,
  LinkType,
  Locator,
  MinimalResolveOptions,
  Project,
  Resolver,
  ResolveOptions,
  WorkspaceResolver,
} from '@yarnpkg/core';

/**
 * Resolver that resolves workspace packages with a hard link reference and without
 * devDependencies
 */
export class WorkspacePackResolver extends WorkspaceResolver implements Resolver {
  constructor(private originalProject: Project) {
    super();
  }

  supportsDescriptor(descriptor: Descriptor, opts: MinimalResolveOptions) {
    return super.supportsDescriptor(descriptor, this.rewriteOpts(descriptor, opts));
  }

  supportsLocator(locator: Locator, opts: MinimalResolveOptions) {
    return super.supportsLocator(locator, this.rewriteOpts(locator, opts));
  }

  shouldPersistResolution(locator: Locator, opts: MinimalResolveOptions) {
    return super.shouldPersistResolution(locator, this.rewriteOpts(locator, opts));
  }

  bindDescriptor(descriptor: Descriptor, fromLocator: Locator, opts: MinimalResolveOptions) {
    return super.bindDescriptor(descriptor, fromLocator, this.rewriteOpts(descriptor, opts));
  }

  getResolutionDependencies(descriptor: Descriptor, opts: MinimalResolveOptions) {
    return super.getResolutionDependencies(descriptor, this.rewriteOpts(descriptor, opts));
  }

  async getCandidates(descriptor: Descriptor, dependencies: unknown, opts: ResolveOptions) {
    return await super.getCandidates(descriptor, dependencies, this.rewriteOpts(descriptor, opts));
  }

  async getSatisfying(descriptor: Descriptor, references: Array<string>, opts: ResolveOptions) {
    return await super.getSatisfying(descriptor, references, this.rewriteOpts(descriptor, opts));
  }

  async resolve(locator: Locator, opts: ResolveOptions) {
    const path = locator.reference.slice(WorkspaceResolver.protocol.length) as PortablePath;

    const {project} = this.rewriteOpts(locator, opts);
    const workspace = project.getWorkspaceByCwd(path);

    return {
      ...locator,

      version: workspace.manifest.version || `0.0.0`,

      languageName: `unknown`,
      linkType: path === `.` ? LinkType.SOFT : LinkType.HARD,

      dependencies: workspace.manifest.dependencies,
      peerDependencies: workspace.manifest.peerDependencies,

      dependenciesMeta: workspace.manifest.dependenciesMeta,
      peerDependenciesMeta: workspace.manifest.peerDependenciesMeta,

      bin: workspace.manifest.bin,
    };
  }

  private rewriteOpts<T extends MinimalResolveOptions>(descriptorOrLocator: Descriptor | Locator, opts: T): T {
    const val = `descriptorHash` in descriptorOrLocator
      ? descriptorOrLocator.range
      : descriptorOrLocator.reference;
    // The root workspace should be resolved by the original project
    return val.slice(WorkspaceResolver.protocol.length) === `.`
      ? opts
      : {...opts, project: this.originalProject};
  }
}
