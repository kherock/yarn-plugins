## [22.4.0](https://github.com/kherock/yarn-plugins/compare/v22.3.2...v22.4.0) (2022-04-16)


### Features

* **plugin-workspaces-export:** support Yarn 3.2's conditional dependency fetching ([dc77c53](https://github.com/kherock/yarn-plugins/commit/dc77c5314dccfed2830f37df097357af26114e43))


### Bug Fixes

* **plugin-workspaces-export:** clean up logging output when exporting multiple workspaces with inline builds ([df9224f](https://github.com/kherock/yarn-plugins/commit/df9224f1342a6df2369b0c50a2c13cf1d6ac2812))

## [22.3.2](https://github.com/kherock/yarn-plugins/compare/v22.3.1...v22.3.2) (2022-03-11)


### Bug Fixes

* **plugin-workspaces-export:** fix resolved bundled workspace path in exported yarn.lock ([a2ede53](https://github.com/kherock/yarn-plugins/commit/a2ede536b9f86f441498c5487f9febd5c4e89094))

## [22.3.1](https://github.com/kherock/yarn-plugins/compare/v22.3.0...v22.3.1) (2022-03-09)


### Bug Fixes

* **plugin-workspaces-export:** include packageManager field in exported project ([45a232d](https://github.com/kherock/yarn-plugins/commit/45a232d430d0b85cfb787fb58edd6b020c56c3e7))
* **plugin-workspaces-export:** respect publishConfig during export ([2b67654](https://github.com/kherock/yarn-plugins/commit/2b6765499846a8aa22e769c5a15d4fe269f6eb4a))
* **plugin-workspaces-export:** use relative path for cacheFolder in exported .yarnrc.yml ([4b6cce8](https://github.com/kherock/yarn-plugins/commit/4b6cce885e4a93af2312d2ed406fcbf31851de3d))

## [22.3.0](https://github.com/kherock/yarn-plugins/compare/v22.1.1...v22.3.0) (2022-03-09)


### ⚠ BREAKING CHANGES

* **plugin-workspaces-export:** skip build scripts during export and support running yarn commands on the exported project

### Features

* **plugin-workspaces-export:** skip build scripts during export and support running yarn commands on the exported project ([0793282](https://github.com/kherock/yarn-plugins/commit/0793282dcce69b9053e53545af20d69dbf2e5233))
* **plugin-workspaces-export:** support exporting multiple workspaces at once ([0196600](https://github.com/kherock/yarn-plugins/commit/01966000a6969b94044983994f3f4fda81ca0206))

## [22.1.1](https://github.com/kherock/yarn-plugins/compare/v22.1.0...v22.1.1) (2022-01-24)


### Features

* **plugin-esm-loader-typescript:** support resolving .js and .mjs specifiers ([95a72f3](https://github.com/kherock/yarn-plugins/commit/95a72f37c27f17782d6a96a86d9f18200e8c89b8))

## [22.1.0](https://github.com/kherock/yarn-plugins/compare/v21.12.0...v22.1.0) (2022-01-20)


### Features

* **plugin-esm-loader-typescript:** initial experimental version ([ffe88a2](https://github.com/kherock/yarn-plugins/commit/ffe88a210151396decebf7c797323eaa4c834819))

## [21.12.0](https://github.com/kherock/yarn-plugins/compare/v21.9.0...v21.12.0) (2021-12-09)


### Bug Fixes

* **plugin-release:** work around stream.pipeline bug present Node 16.10-16.13.0 ([29f3b28](https://github.com/kherock/yarn-plugins/commit/29f3b2838c63d419b0d269c5b6f1679977252fd5))

## [21.9.0](https://github.com/kherock/yarn-plugins/compare/v21.8.7...v21.9.0) (2021-09-09)


### Bug Fixes

* **plugin-release:** correct the initial prerelease bump for packages without stable tags ([48a93a4](https://github.com/kherock/yarn-plugins/commit/48a93a489e5cf6d68e7660b41128912e58b61c0c))

## [21.8.7](https://github.com/kherock/yarn-plugins/compare/v21.8.6...v21.8.7) (2021-08-24)


### Bug Fixes

* **plugin-release:** remove hyperlink from annotated tag message ([6c9beaa](https://github.com/kherock/yarn-plugins/commit/6c9beaa535d04a11d0a90d3d07ce279d7e96f814))

## [21.8.6](https://github.com/kherock/yarn-plugins/compare/v21.8.5...v21.8.6) (2021-08-23)


### Bug Fixes

* **plugin-release:** compatibility with Node 12, changelogs in stable release tags ([82c5385](https://github.com/kherock/yarn-plugins/commit/82c53850b4ce40e1461344e6388dea34318f61a9))
* **plugin-release:** make --dry-run actually have an effect for release-commit ([ea0555d](https://github.com/kherock/yarn-plugins/commit/ea0555d88a9283c2e09a722f221f4998b5cd3bf3))
* **plugin-release:** only output new changelog text with --dry-run ([1150d53](https://github.com/kherock/yarn-plugins/commit/1150d53c1eceef05f3218d395ef930c04c9e4f14))

## [21.8.5](https://github.com/kherock/yarn-plugins/compare/v21.8.4...v21.8.5) (2021-08-14)


### Features

* **plugin-release:** support configuring commit types that count as code changes ([5d130e1](https://github.com/kherock/yarn-plugins/commit/5d130e1f619f11112fb97caee28c9e60109b9e51))
* **plugin-release:** support rolling up commits with unstable releases in a stable release's changelog ([b8c22fd](https://github.com/kherock/yarn-plugins/commit/b8c22fdf12c91091d7c3a34fb322005097cf1c6f))

### [21.8.4](https://github.com/kherock/yarn-plugins/compare/v21.8.3...v21.8.4) (2021-08-12)


### Bug Fixes

* **plugin-release:** packages would receive an incorrect prerelease bump if they don't yet have a stable release ([06c72ce](https://github.com/kherock/yarn-plugins/commit/06c72cee52f7e85e0a5246bb38ac3662e4b76ecb))

### [21.8.3](https://github.com/kherock/yarn-plugins/compare/v21.8.2...v21.8.3) (2021-08-12)


### Features

* **plugin-release:** skip unstable tags when creating a stable release ([0da6538](https://github.com/kherock/yarn-plugins/commit/0da65388cb0adfbb209741177bf3f7f24312df65))

### [21.8.2](https://github.com/kherock/yarn-plugins/compare/v21.8.1...v21.8.2) (2021-08-12)


### Bug Fixes

* **plugin-release:** add back a default date for changelogs ([f79d01d](https://github.com/kherock/yarn-plugins/commit/f79d01d87e36b4d4645948e169d802bfd4ebd57e))
* **plugin-release:** fix prerelease CalVer logic ([88729af](https://github.com/kherock/yarn-plugins/commit/88729af3210fef0b86e12ba13c2b389cba222e7c))
* **plugin-release:** give the annotated tag a proper subject line ([6034b22](https://github.com/kherock/yarn-plugins/commit/6034b2242e9eeace1fccc7c6d1ecae61dcfb0665))


### Reverts

* Revert "fix(plugin-release): don't return early when there are no workspaces to tag" ([63be8d4](https://github.com/kherock/yarn-plugins/commit/63be8d4e5c63d2f0db88ff9ffc941a6f1331ad0a))

### [21.8.1](https://github.com/kherock/yarn-plugins/compare/v21.8.0...v21.8.1) (2021-08-11)


### Features

* **plugin-release:** improve prerelease flow ([aab08ec](https://github.com/kherock/yarn-plugins/commit/aab08ecff25a9b0dde43a290d5561a126eec75aa))
* **plugin-release:** support overriding the changelog release date ([5191847](https://github.com/kherock/yarn-plugins/commit/5191847b170b2a299a8b7617821421ccbd542432))

## [21.8.0](https://github.com/kherock/yarn-plugins/compare/v21.6.4...v21.8.0) (2021-08-11)


### Features

* **plugin-release:** add args for controlling commit and tagging behavior ([86e2637](https://github.com/kherock/yarn-plugins/commit/86e2637a9ff54042816e57812d94b4ec126ed053))


### Bug Fixes

* **plugin-release:** don't return early when there are no workspaces to tag ([e24c129](https://github.com/kherock/yarn-plugins/commit/e24c1296f7c3bf3fd5136ff5320c0190441809d8))
* **plugin-release:** error message typo ([f687f76](https://github.com/kherock/yarn-plugins/commit/f687f76cd955d71d378848971548bb8330829fb2))

### [21.6.4](https://github.com/kherock/yarn-plugins/compare/v21.6.3...v21.6.4) (2021-06-22)


### Bug Fixes

* **plugin-workspaces-export:** fix exported virtualFolder path ([d59ca83](https://github.com/kherock/yarn-plugins/commit/d59ca83ba096bbc1398f66a559376faacd32134d))

### [21.6.3](https://github.com/kherock/yarn-plugins/compare/v21.6.2...v21.6.3) (2021-06-21)


### Features

* **plugin-release:** support generating changelogs for unversioned private packages ([c03b436](https://github.com/kherock/yarn-plugins/commit/c03b43679edddb3accdb70209bc157fdb0afa771))

### [21.6.2](https://github.com/kherock/yarn-plugins/compare/v21.6.1...v21.6.2) (2021-06-21)


### Features

* **plugin-release:** add postrelease lifecycle script support ([3cba53d](https://github.com/kherock/yarn-plugins/commit/3cba53d179837e632f943749aa7409fe45abaf12))
* **plugin-release:** use annotated tag for monorepo release ([fc3f1fb](https://github.com/kherock/yarn-plugins/commit/fc3f1fbd741c94cc6abaf0ed356bbb1223a7bb23))


### Bug Fixes

* **plugin-release:** avoid race condition created by persisting project on install ([d18d434](https://github.com/kherock/yarn-plugins/commit/d18d434360e29da488912502ad6b7ef377672381))
* **plugin-release:** fix fetching changelog for annotated tag message ([ac6ddb5](https://github.com/kherock/yarn-plugins/commit/ac6ddb5196fbd5d0a624a6b1b527db3aedeac8fb))

### [21.6.1](https://github.com/kherock/yarn-plugins/compare/v21.6.0...71548276a03e03f581d268026e0d4ee9b73a8e08) (2021-06-20)


### Features

* **plugin-release:** initial plugin implementation ([7154827](https://github.com/kherock/yarn-plugins/commit/71548276a03e03f581d268026e0d4ee9b73a8e08))

## [21.6.0](https://github.com/kherock/yarn-plugins/compare/v21.1.0...v21.6.0) (2021-06-16)


### Features

* **plugin-workspaces-export:** upgrade workspaces export plugin with Yarn 3 support ([fd0c808](https://github.com/kherock/yarn-plugins/commit/fd0c8087a5d19fc03ee4d86ee337212ad7524737))

## [21.1.0](https://github.com/kherock/yarn-plugins/compare/v20.12.0...v21.1.0) (2021-01-19)


### Features

* **plugin-workspaces-export:** support persistent caching ([25a1604](https://github.com/kherock/yarn-plugins/commit/25a1604d1d4d88fc9a862b4f5022c535199df3b8))

## [20.12.0](https://github.com/kherock/yarn-plugins/compare/v20.10.1...v20.12.0) (2020-12-22)


### Features

* **plugin-workspaces-export:** remove dependence on global cache for workspaces-export ([ec1dc53](https://github.com/kherock/yarn-plugins/commit/ec1dc536bda03b3e54b553971d1db04436cd2688))


### Bug Fixes

* **plugin-workspaces-export:** do not pack symlinks with absolute paths in tgz archives ([3765403](https://github.com/kherock/yarn-plugins/commit/3765403e36c393455eeaaa04b775d8234610e8b7))

### [20.10.1](https://github.com/kherock/yarn-plugins/compare/v20.10.0...v20.10.1) (2020-10-28)


### Features

* **plugin-dotenv:** initial plugin implementation ([c6a1ca0](https://github.com/kherock/yarn-plugins/commit/c6a1ca0d7ca0c6b6516bb55eb40768aba1da9f8e))

## [20.10.0](https://github.com/kherock/yarn-plugins/compare/edb49e500fe63363600606a98fec3443d71b3d43...v20.10.0) (2020-10-14)


### Features

* **plugin-workspaces-export:** implement using custom fetcher and resolver ([8b97c2c](https://github.com/kherock/yarn-plugins/commit/8b97c2c7cc77523bbc0c6bc60f058e251899c29c))
* **plugin-workspaces-export:** support bundling as gzip based on file ext ([b24a50d](https://github.com/kherock/yarn-plugins/commit/b24a50d195946aad900c2f8a9aaf3815ca1ff9c4))


### Bug Fixes

* **plugin-workspaces-export:** include project package extensions and resolutions in the generated project ([cb5d5c1](https://github.com/kherock/yarn-plugins/commit/cb5d5c1b44ad6d0b952c1bc6d5e3678f9ad32c0f))

