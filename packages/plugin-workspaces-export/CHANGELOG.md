## [3.2.0](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-workspaces-export@3.1.1...@kherock/yarn-plugin-workspaces-export@3.2.0) (2022-08-12)


### Features

* **plugin-workspaces-export:** support interlaced output ([9afd062](https://github.com/kherock/yarn-plugins/commit/9afd062855681c557ee2c466031d7730e661bc80))

## [3.1.1](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-workspaces-export@3.1.0...@kherock/yarn-plugin-workspaces-export@3.1.1) (2022-04-18)


### Performance Improvements

* **plugin-workspaces-export:** share parsed project context for all exported workspaces ([26310dd](https://github.com/kherock/yarn-plugins/commit/26310ddac9f8c5037716305fe1c9c9418beb41dc))
* **plugin-workspaces-export:** support skipping the cache when the output is a folder ([715fca0](https://github.com/kherock/yarn-plugins/commit/715fca02cb3372ccfd3bc039c027ac7030a1f847))

## [3.1.0](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-workspaces-export@3.0.2...@kherock/yarn-plugin-workspaces-export@3.1.0) (2022-04-16)


### Features

* **plugin-workspaces-export:** support Yarn 3.2's conditional dependency fetching ([dc77c53](https://github.com/kherock/yarn-plugins/commit/dc77c5314dccfed2830f37df097357af26114e43))


### Bug Fixes

* **plugin-workspaces-export:** clean up logging output when exporting multiple workspaces with inline builds ([df9224f](https://github.com/kherock/yarn-plugins/commit/df9224f1342a6df2369b0c50a2c13cf1d6ac2812))

## [3.0.2](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-workspaces-export@3.0.1...@kherock/yarn-plugin-workspaces-export@3.0.2) (2022-03-11)


### Bug Fixes

* **plugin-workspaces-export:** fix resolved bundled workspace path in exported yarn.lock ([a2ede53](https://github.com/kherock/yarn-plugins/commit/a2ede536b9f86f441498c5487f9febd5c4e89094))

## [3.0.1](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-workspaces-export@3.0.0...@kherock/yarn-plugin-workspaces-export@3.0.1) (2022-03-09)


### Bug Fixes

* **plugin-workspaces-export:** include packageManager field in exported project ([45a232d](https://github.com/kherock/yarn-plugins/commit/45a232d430d0b85cfb787fb58edd6b020c56c3e7))
* **plugin-workspaces-export:** respect publishConfig during export ([2b67654](https://github.com/kherock/yarn-plugins/commit/2b6765499846a8aa22e769c5a15d4fe269f6eb4a))
* **plugin-workspaces-export:** use relative path for cacheFolder in exported .yarnrc.yml ([4b6cce8](https://github.com/kherock/yarn-plugins/commit/4b6cce885e4a93af2312d2ed406fcbf31851de3d))

## [3.0.0](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-workspaces-export@2.0.1...@kherock/yarn-plugin-workspaces-export@3.0.0) (2022-03-09)


### ⚠ BREAKING CHANGES

* **plugin-workspaces-export:** skip build scripts during export and support running yarn commands on the exported project

### Features

* **plugin-workspaces-export:** skip build scripts during export and support running yarn commands on the exported project ([0793282](https://github.com/kherock/yarn-plugins/commit/0793282dcce69b9053e53545af20d69dbf2e5233))
* **plugin-workspaces-export:** support exporting multiple workspaces at once ([0196600](https://github.com/kherock/yarn-plugins/commit/01966000a6969b94044983994f3f4fda81ca0206))

### [2.0.1](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-workspaces-export@2.0.0...@kherock/yarn-plugin-workspaces-export@2.0.1) (2021-06-22)


### Bug Fixes

* **plugin-workspaces-export:** fix exported virtualFolder path ([d59ca83](https://github.com/kherock/yarn-plugins/commit/d59ca83ba096bbc1398f66a559376faacd32134d))

## [2.0.0](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-workspaces-export@1.2.0...@kherock/yarn-plugin-workspaces-export@2.0.0) (2021-06-16)


### Features

* **plugin-workspaces-export:** upgrade workspaces export plugin with Yarn 3 support ([fd0c808](https://github.com/kherock/yarn-plugins/commit/fd0c8087a5d19fc03ee4d86ee337212ad7524737))

## 1.2.0 (2021-01-19)


### Features

* **plugin-workspaces-export:** support persistent caching ([25a1604](https://github.com/kherock/yarn-plugins/commit/25a1604d1d4d88fc9a862b4f5022c535199df3b8))

## 1.1.0 (2020-12-22)


### Features

* **plugin-workspaces-export:** remove dependence on global cache for workspaces-export ([ec1dc53](https://github.com/kherock/yarn-plugins/commit/ec1dc536bda03b3e54b553971d1db04436cd2688))


### Bug Fixes

* **plugin-workspaces-export:** do not pack symlinks with absolute paths in tgz archives ([3765403](https://github.com/kherock/yarn-plugins/commit/3765403e36c393455eeaaa04b775d8234610e8b7))

## 1.0.0 (2020-10-14)


### Features

* **plugin-workspaces-export:** implement using custom fetcher and resolver ([8b97c2c](https://github.com/kherock/yarn-plugins/commit/8b97c2c7cc77523bbc0c6bc60f058e251899c29c))
* **plugin-workspaces-export:** support bundling as gzip based on file ext ([b24a50d](https://github.com/kherock/yarn-plugins/commit/b24a50d195946aad900c2f8a9aaf3815ca1ff9c4))


### Bug Fixes

* **plugin-workspaces-export:** include project package extensions and resolutions in the generated project ([cb5d5c1](https://github.com/kherock/yarn-plugins/commit/cb5d5c1b44ad6d0b952c1bc6d5e3678f9ad32c0f))

