import {Plugin, SettingsType} from '@yarnpkg/core';
import {PortablePath}         from '@yarnpkg/fslib';

import workspacesExport       from './commands/export';

declare module '@yarnpkg/core' {
  interface ConfigurationValueMap {
    exportCacheFolder: PortablePath;
  }
}

const plugin: Plugin = {
  configuration: {
    exportCacheFolder: {
      description: `Folder where the contents of exported workspace archives are cached`,
      type: SettingsType.ABSOLUTE_PATH,
      default: `./.yarn/export-cache`,
    },
  },
  commands: [
    workspacesExport,
  ],
};

// eslint-disable-next-line arca/no-default-export
export default plugin;
