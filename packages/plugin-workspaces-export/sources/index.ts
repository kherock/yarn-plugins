import {Plugin, SettingsType} from '@yarnpkg/core';
import {PortablePath}         from '@yarnpkg/fslib';

import workspacesExport       from './commands/export';

declare module '@yarnpkg/core' {
  interface ConfigurationValueMap {
    exportCacheFolder: PortablePath;
    exportedArchitectures: this['supportedArchitectures'];
  }
}

const plugin: Plugin = {
  configuration: {
    exportCacheFolder: {
      description: `Folder where the contents of exported workspace archives are cached`,
      type: SettingsType.ABSOLUTE_PATH,
      default: `./.yarn/export-cache`,
    },
    exportedArchitectures: {
      description: `Architectures that Yarn will fetch and inject into the resolver for exported workspaces`,
      type: SettingsType.SHAPE,
      properties: {
        os: {
          description: `Array of supported process.platform strings, or null to inherit from the current project`,
          type: SettingsType.STRING,
          isArray: true,
          isNullable: true,
          default: null,
        },
        cpu: {
          description: `Array of supported process.arch strings, or null to inherit from the current project`,
          type: SettingsType.STRING,
          isArray: true,
          isNullable: true,
          default: null,
        },
        libc: {
          description: `Array of supported libc libraries, or null to inherit from the current project`,
          type: SettingsType.STRING,
          isArray: true,
          isNullable: true,
          default: null,
        },
      },
    },
  },
  commands: [
    workspacesExport,
  ],
};

export default plugin;
