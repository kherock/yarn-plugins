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

