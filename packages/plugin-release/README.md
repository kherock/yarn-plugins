# `@yarnpkg/plugin-release`

This plugin adds support for generating changelogs and bumping workspace
versions according to the conventional commits standard.

## Install

```
yarn plugin import https://github.com/kherock/yarn-plugins/releases/download/<release>/plugin-release.js
```

## Commands

- `yarn release`
- `yarn release-commit`

## Configuration

| Property | Description | Default value |
| -------- | ----------- | ------------- |
| calverFormat | A CalVer (calendar version) format to use for monorepo versions. Must include the \<patch> semver level and conform to SemVer (no more than 3 parts). | `YY.MM.patch` |
| releaseCodeChangeTypes | A list of commit types that correlate to code changes. Types outside of this set will not generate new releases. | `feat`, `fix`, `perf`, `refactor` |
| conventionalChangelogPreset | A preset value to pass to conventional-changelog-preset-loader | `conventionalcommits` |
