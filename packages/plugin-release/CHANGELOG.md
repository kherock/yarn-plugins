### [1.5.1](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-release@1.5.0...@kherock/yarn-plugin-release@1.5.1) (2021-08-12)


### Bug Fixes

* **plugin-release:** packages would receive an incorrect prerelease bump if they don't yet have a stable release ([06c72ce](https://github.com/kherock/yarn-plugins/commit/06c72cee52f7e85e0a5246bb38ac3662e4b76ecb))

## [1.5.0](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-release@1.4.1...@kherock/yarn-plugin-release@1.5.0) (2021-08-12)


### Features

* **plugin-release:** skip unstable tags when creating a stable release ([0da6538](https://github.com/kherock/yarn-plugins/commit/0da65388cb0adfbb209741177bf3f7f24312df65))

### [1.4.1](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-release@1.4.0...@kherock/yarn-plugin-release@1.4.1) (2021-08-12)


### Bug Fixes

* **plugin-release:** add back a default date for changelogs ([f79d01d](https://github.com/kherock/yarn-plugins/commit/f79d01d87e36b4d4645948e169d802bfd4ebd57e))
* **plugin-release:** fix prerelease CalVer logic ([88729af](https://github.com/kherock/yarn-plugins/commit/88729af3210fef0b86e12ba13c2b389cba222e7c))
* **plugin-release:** give the annotated tag a proper subject line ([6034b22](https://github.com/kherock/yarn-plugins/commit/6034b2242e9eeace1fccc7c6d1ecae61dcfb0665))


### Reverts

* Revert "fix(plugin-release): don't return early when there are no workspaces to tag" ([63be8d4](https://github.com/kherock/yarn-plugins/commit/63be8d4e5c63d2f0db88ff9ffc941a6f1331ad0a))

## [1.4.0](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-release@1.3.0...@kherock/yarn-plugin-release@1.4.0) (2021-08-11)


### Features

* **plugin-release:** improve prerelease flow ([aab08ec](https://github.com/kherock/yarn-plugins/commit/aab08ecff25a9b0dde43a290d5561a126eec75aa))
* **plugin-release:** support overriding the changelog release date ([5191847](https://github.com/kherock/yarn-plugins/commit/5191847b170b2a299a8b7617821421ccbd542432))

## [1.3.0](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-release@1.2.0...@kherock/yarn-plugin-release@1.3.0) (2021-08-11)


### Features

* **plugin-release:** add args for controlling commit and tagging behavior ([86e2637](https://github.com/kherock/yarn-plugins/commit/86e2637a9ff54042816e57812d94b4ec126ed053))


### Bug Fixes

* **plugin-release:** don't return early when there are no workspaces to tag ([e24c129](https://github.com/kherock/yarn-plugins/commit/e24c1296f7c3bf3fd5136ff5320c0190441809d8))
* **plugin-release:** error message typo ([f687f76](https://github.com/kherock/yarn-plugins/commit/f687f76cd955d71d378848971548bb8330829fb2))

## [1.2.0](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-release@1.1.0...@kherock/yarn-plugin-release@1.2.0) (2021-06-21)


### Features

* **plugin-release:** support generating changelogs for unversioned private packages ([c03b436](https://github.com/kherock/yarn-plugins/commit/c03b43679edddb3accdb70209bc157fdb0afa771))

## [1.1.0](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-release@1.0.0...@kherock/yarn-plugin-release@1.1.0) (2021-06-21)


### Features

* **plugin-release:** add postrelease lifecycle script support ([3cba53d](https://github.com/kherock/yarn-plugins/commit/3cba53d179837e632f943749aa7409fe45abaf12))
* **plugin-release:** use annotated tag for monorepo release ([fc3f1fb](https://github.com/kherock/yarn-plugins/commit/fc3f1fbd741c94cc6abaf0ed356bbb1223a7bb23))


### Bug Fixes

* **plugin-release:** avoid race condition created by persisting project on install ([d18d434](https://github.com/kherock/yarn-plugins/commit/d18d434360e29da488912502ad6b7ef377672381))
* **plugin-release:** fix fetching changelog for annotated tag message ([ac6ddb5](https://github.com/kherock/yarn-plugins/commit/ac6ddb5196fbd5d0a624a6b1b527db3aedeac8fb))

## 1.0.0 (2021-06-20)


### Features

* **plugin-release:** initial plugin implementation ([7154827](https://github.com/kherock/yarn-plugins/commit/71548276a03e03f581d268026e0d4ee9b73a8e08))

