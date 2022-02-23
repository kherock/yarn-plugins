/* global child_process,execEnv,fs,path */
const {execFileSync} = child_process;
const {writeFileSync} = fs;
const {buildDir, tempDir} = execEnv;

const [ident] = process.argv.slice(2);

const pnpVersion = `3.2.0`;

const repoDir = path.join(tempDir, `berry`);

const rollupConfig = `
import cjs            from '@rollup/plugin-commonjs';
import resolve        from '@rollup/plugin-node-resolve';
import path           from 'path';
import esbuild        from 'rollup-plugin-esbuild';
import {defineConfig} from 'rollup';

export default defineConfig({
  input: './sources/esm-loader/loader.ts',
  output: {
    dir: 'lib',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: path.join(__dirname, 'sources'),
    generatedCode: 'es2015',
  },
  plugins: [
    resolve({
      extensions: ['.mjs', '.js', '.ts', '.tsx', '.json'],
      rootDir: path.join(__dirname, '../../'),
      jail: path.join(__dirname, '../../'),
      preferBuiltins: true,
    }),
    esbuild({
      tsconfig: false,
      target: 'node12',
      define: {
        document: 'undefined',
        XMLHttpRequest: 'undefined',
        crypto: 'undefined',
      },
    }),
    cjs({requireReturnsDefault: 'preferred'}),
  ],
});
`;

// Clone the repository
execFileSync(`git`, [`clone`, `--depth`, `1`, `git@github.com:yarnpkg/berry`, `--branch`, `${ident}/${pnpVersion}`, repoDir]);

const workspaceDir = execFileSync(`yarn`, [`workspace`, ident, `exec`, `pwd`], {cwd: repoDir})
  .slice(0, -1)
  .toString();

writeFileSync(path.join(workspaceDir, `rollup.config.js`), rollupConfig);
const pkgArchive = path.join(tempDir, `archive.tgz`);
execFileSync(`yarn`, [`pack`, `--out`, pkgArchive], {cwd: workspaceDir});
execFileSync(`tar`, [`-x`, `-z`, `--strip-components=1`, `-f`, pkgArchive, `-C`, buildDir]);
