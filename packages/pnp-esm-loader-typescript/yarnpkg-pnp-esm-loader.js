/* global child_process,execEnv,fs,path */
const {execFileSync} = child_process;
const {readFileSync, writeFileSync} = fs;
const {buildDir, tempDir} = execEnv;

const ident = `@yarnpkg/pnp`;
const pnpVersion = `4.0.8`;

const repoDir = path.join(tempDir, `berry`);

const rollupConfig = `\
import cjs            from '@rollup/plugin-commonjs';
import resolve        from '@rollup/plugin-node-resolve';
import path           from 'path';
import esbuild        from 'rollup-plugin-esbuild';
import {defineConfig} from 'rollup';
import semver               from 'semver';

import pkg            from './package.json';

export default defineConfig(
  {
    input: \`./sources/esm-loader/loader.ts\`,
    output: {
      dir: \`lib\`,
      format: \`esm\`,
      preserveModules: true,
      preserveModulesRoot: path.join(__dirname, \`sources\`),
      generatedCode: \`es2015\`,
    },
    external: [
      \`../.pnp.cjs\`,
    ],
    plugins: [
      resolve({
        extensions: [\`.mjs\`, \`.js\`, \`.ts\`, \`.tsx\`, \`.json\`],
        rootDir: path.join(__dirname, \`../../\`),
        jail: path.join(__dirname, \`../../\`),
        preferBuiltins: true,
      }),
      esbuild({
        tsconfig: false,
        target: \`node\${semver.minVersion(pkg.engines.node).version}\`,
        define: {
          document: \`undefined\`,
          XMLHttpRequest: \`undefined\`,
          crypto: \`undefined\`,
        },
      }),
      cjs({requireReturnsDefault: \`preferred\`}),
    ],
  }
);
`;

// Clone the repository
execFileSync(`git`, [`clone`, `--depth`, `1`, `git@github.com:yarnpkg/berry`, `--branch`, `${ident}/${pnpVersion}`, repoDir]);

const workspaceDir = execFileSync(`yarn`, [`workspace`, ident, `exec`, `pwd`], {cwd: repoDir})
  .slice(0, -1)
  .toString();

const pkgJson = JSON.parse(readFileSync(path.join(workspaceDir, `package.json`), `utf8`));
pkgJson.publishConfig.exports[`./lib/*`] = `./lib/*`;
writeFileSync(path.join(workspaceDir, `package.json`), JSON.stringify(pkgJson, null, 2));

writeFileSync(path.join(workspaceDir, `rollup.config.js`), rollupConfig);
const pkgArchive = path.join(tempDir, `archive.tgz`);
execFileSync(`yarn`, [`pack`, `--out`, pkgArchive], {cwd: workspaceDir});
execFileSync(`tar`, [`-x`, `-z`, `--strip-components=1`, `-f`, pkgArchive, `-C`, buildDir]);
