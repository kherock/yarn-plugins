## [3.0.0](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-release@2.0.2...@kherock/yarn-plugin-release@3.0.0) (2024-01-07)


### ⚠ BREAKING CHANGES

* support for Yarn 4 and Conventional Changelog 7

### Features

* support for Yarn 4 and Conventional Changelog 7 ([f74ee7d](https://github.com/kherock/yarn-plugins/commit/f74ee7dbdc8d6cab16b562fb56ab3af73923b74f))

## [2.0.2](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-release@2.0.1...@kherock/yarn-plugin-release@2.0.2) (2023-07-27)


### Bug Fixes

* **plugin-release:** avoid git concurrency issues when running with workspaces foreach ([5b8c6fb](https://github.com/kherock/yarn-plugins/commit/5b8c6fb4ee50a5ebbeaa86fa7121312e254ccd42))

## [2.0.1](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-release@2.0.0...@kherock/yarn-plugin-release@2.0.1) (2023-07-27)


### Bug Fixes

* **plugin-release:** render more error details when git operations fail ([9ab7d47](https://github.com/kherock/yarn-plugins/commit/9ab7d47632791ab914220bfdea0828629fff086b))

## [2.0.0](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-release@1.8.0...@kherock/yarn-plugin-release@2.0.0) (2022-08-19)


### ⚠ BREAKING CHANGES

* **plugin-release:** make project-level CalVer tag optional and disabled by default

### Features

* **plugin-release:** make project-level CalVer tag optional and disabled by default ([63af7b4](https://github.com/kherock/yarn-plugins/commit/63af7b4c933a3f7ab0914db67656b15de3043bbf))


### Bug Fixes

* **plugin-release:** reset prerelease level when the calendar version changes ([7c03312](https://github.com/kherock/yarn-plugins/commit/7c03312338e000c52e2b3b4410565fe952da3d43))

## [1.8.0](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-release@1.7.0...@kherock/yarn-plugin-release@1.8.0) (2022-08-18)


### Features

* **plugin-release:** support manually bumping to prerelease versions ([d6cd5d1](https://github.com/kherock/yarn-plugins/commit/d6cd5d1050c93a74e2ed196b1536675a2f59536c))

## [1.7.0](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-release@1.7.0...@kherock/yarn-plugin-release@1.7.0) (2022-08-12)


### Features

* **plugin-release:** support manually bumping to prerelease versions ([d6cd5d1](https://github.com/kherock/yarn-plugins/commit/d6cd5d1050c93a74e2ed196b1536675a2f59536c))

## [1.7.0](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-release@1.6.4...@kherock/yarn-plugin-release@1.7.0) (2022-01-20)


### Features

* **plugin-esm-loader-typescript:** initial experimental version ([ffe88a2](https://github.com/kherock/yarn-plugins/commit/ffe88a210151396decebf7c797323eaa4c834819))

## [1.6.4](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-release@1.6.3...@kherock/yarn-plugin-release@1.6.4) (2021-12-09)


### Bug Fixes

* **plugin-release:** work around stream.pipeline bug present Node 16.10-16.13.0 ([29f3b28](https://github.com/kherock/yarn-plugins/commit/29f3b2838c63d419b0d269c5b6f1679977252fd5))

## [1.6.3](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-release@1.6.2...@kherock/yarn-plugin-release@1.6.3) (2021-09-09)


### Bug Fixes

* **plugin-release:** correct the initial prerelease bump for packages without stable tags ([48a93a4](https://github.com/kherock/yarn-plugins/commit/48a93a489e5cf6d68e7660b41128912e58b61c0c))

## [1.6.2](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-release@1.6.1...@kherock/yarn-plugin-release@1.6.2) (2021-08-24)


### Bug Fixes

* **plugin-release:** remove hyperlink from annotated tag message ([6c9beaa](https://github.com/kherock/yarn-plugins/commit/6c9beaa535d04a11d0a90d3d07ce279d7e96f814))

## [1.6.1](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-release@1.6.0...@kherock/yarn-plugin-release@1.6.1) (2021-08-23)


### Bug Fixes

* **plugin-release:** compatibility with Node 12, changelogs in stable release tags ([82c5385](https://github.com/kherock/yarn-plugins/commit/82c53850b4ce40e1461344e6388dea34318f61a9))
* **plugin-release:** make --dry-run actually have an effect for release-commit ([ea0555d](https://github.com/kherock/yarn-plugins/commit/ea0555d88a9283c2e09a722f221f4998b5cd3bf3))
* **plugin-release:** only output new changelog text with --dry-run ([1150d53](https://github.com/kherock/yarn-plugins/commit/1150d53c1eceef05f3218d395ef930c04c9e4f14))

## [1.6.0](https://github.com/kherock/yarn-plugins/compare/@kherock/yarn-plugin-release@1.5.1...@kherock/yarn-plugin-release@1.6.0) (2021-08-14)


### Features

* **plugin-release:** support configuring commit types that count as code changes ([5d130e1](https://github.com/kherock/yarn-plugins/commit/5d130e1f619f11112fb97caee28c9e60109b9e51))
* **plugin-release:** support rolling up commits with unstable releases in a stable release's changelog ([b8c22fd](https://github.com/kherock/yarn-plugins/commit/b8c22fdf12c91091d7c3a34fb322005097cf1c6f))

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

