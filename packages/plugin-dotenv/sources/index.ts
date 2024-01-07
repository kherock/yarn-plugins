import {Hooks as CoreHooks, Plugin} from '@yarnpkg/core';
import dotenv                       from 'dotenv-flow';
import fs                           from 'fs';

const plugin: Plugin<CoreHooks> = {
  hooks: {
    setupScriptEnvironment: async (project, env) => {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const files = dotenv.listFiles({path: project.cwd, node_env: env.NODE_ENV})
        .filter(filename => fs.existsSync(filename));
      const parsed = dotenv.parse(files);

      for (const [key, value] of Object.entries(parsed)) {
        if (!Object.hasOwn(env, key)) {
          env[key] = value;
        }
      }
    },
  },
};

export default plugin;
