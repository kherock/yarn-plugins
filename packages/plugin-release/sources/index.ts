import {Plugin, SettingsType} from "@yarnpkg/core";

import releaseCommit          from "./commands/releaseCommit";
import release                from "./commands/release";
import * as releaseUtils      from "./releaseUtils";

export {releaseUtils};

declare module "@yarnpkg/core" {
  interface ConfigurationValueMap {
    releaseCalverFormat: string;
    conventionalChangelogPreset: string;
  }
}

const plugin: Plugin = {
  configuration: {
    releaseCalverFormat: {
      description: `A CalVer (calendar version) format to use for monorepo versions. Must include the <micro> semver level.`,
      type: SettingsType.STRING,
      default: `YY.MM.micro`,
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

// eslint-disable-next-line arca/no-default-export
export default plugin;
