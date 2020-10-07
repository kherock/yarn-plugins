import {Plugin}         from '@yarnpkg/core';

import workspacesExport from './commands/export';

const plugin: Plugin = {
  commands: [
    workspacesExport,
  ],
};

// eslint-disable-next-line arca/no-default-export
export default plugin;
