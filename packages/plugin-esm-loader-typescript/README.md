# `@yarnpkg/plugin-esm-loader-typescript`

This plugin extends Yarn's PnP ESM loader hooks with support for loading
TypeScript files. It's like `esbuild-register` for ESM.

After each `yarn install`, a replacement ESM loader hook is installed which, at
runtime, transforms TypeScript modules with the `esbuild` installed at the
project root.

Please note that this plugin is *very* experimental and will likely break as
Node's ESM loader hooks continue to evolve.

## Install

```console
yarn plugin import https://github.com/kherock/yarn-plugins/releases/download/<release>/plugin-release.js
yarn add -D esbuild
```

Typically, esbuild only functions as an unplugged dependency. For a Zero-install
compatible setup, alias the package to the WebAssembly version:

```console
yarn add -D "esbuild@npm:esbuild-wasm@^0.14.12"
```
