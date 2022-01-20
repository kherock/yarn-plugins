import {getESMLoaderTemplate}       from '@kherock/pnp-esm-loader-typescript';
import {Hooks as CoreHooks, Plugin} from '@yarnpkg/core';
import {xfs}                        from '@yarnpkg/fslib';
import {getPnpPath}                 from '@yarnpkg/plugin-pnp';

const plugin: Plugin<CoreHooks> = {
  hooks: {
    async afterAllInstalled(project, options) {
      const {esmLoader} = getPnpPath(project);
      if (await xfs.existsPromise(esmLoader)) {
        await xfs.changeFilePromise(esmLoader, getESMLoaderTemplate(), {
          automaticNewlines: true,
          mode: 0o644,
        });
      }
    },
  },
};

export default plugin;
