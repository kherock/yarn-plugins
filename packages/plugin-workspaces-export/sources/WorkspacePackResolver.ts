import {
  Descriptor,
  LinkType,
  Locator,
  Resolver,
  ResolveOptions,
  WorkspaceResolver,
} from '@yarnpkg/core';

/**
 * Resolver that resolves workspace packages with a hard link reference and without
 * devDependencies
 */
export class WorkspacePackResolver extends WorkspaceResolver implements Resolver {
  async getCandidates(descriptor: Descriptor, dependencies: unknown, opts: ResolveOptions) {
    const {topLevelWorkspace} = opts.project;
    if (topLevelWorkspace.anchoredDescriptor.descriptorHash === descriptor.descriptorHash)
      return [topLevelWorkspace.anchoredLocator];

    return super.getCandidates(descriptor, dependencies, opts);
  }

  async resolve(locator: Locator, opts: ResolveOptions) {
    const workspace = opts.project.getWorkspaceByLocator(locator);

    return {
      ...locator,

      version: workspace.manifest.version || `0.0.0`,

      languageName: `unknown`,
      linkType: workspace === opts.project.topLevelWorkspace ? LinkType.SOFT : LinkType.HARD,

      conditions: null,

      dependencies: workspace.manifest.dependencies,
      peerDependencies: workspace.manifest.peerDependencies,

      dependenciesMeta: workspace.manifest.dependenciesMeta,
      peerDependenciesMeta: workspace.manifest.peerDependenciesMeta,

      bin: workspace.manifest.bin,
    };
  }
}
