import {Plugin, SettingsType} from '@yarnpkg/core';

import releaseCommit          from './commands/releaseCommit';
import release                from './commands/release';
import * as releaseUtils      from './releaseUtils';

export {releaseUtils};

declare module "@yarnpkg/core" {
  interface ConfigurationValueMap {
    releaseCalverFormat: string | null;
    releaseCodeChangeTypes: Array<string>;
    conventionalChangelogPreset: string;
  }
}

const plugin: Plugin = {
  configuration: {
    releaseCalverFormat: {
      description: `A CalVer (calendar version) format to use for monorepo versions. Must include the <patch> semver level and conform to SemVer (no more than 3 parts).`,
      isNullable: true,
      type: SettingsType.STRING,
      default: null,
    },
    releaseCodeChangeTypes: {
      description: `A list of commit types that correlate to code changes. Types outside of this set will not generate new releases.`,
      isArray: true,
      type: SettingsType.STRING,
      default: [`feat`, `fix`, `perf`, `refactor`],
    },
    conventionalChangelogPreset: {
      description: `A preset value to pass to conventional-changelog-preset-loader`,
      type: SettingsType.STRING,
      default: `conventionalcommits`,
    },
  },
  commands: [
    release,
    releaseCommit,
  ],
};

export default plugin;
