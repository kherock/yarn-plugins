# `@yarnpkg/plugin-workspaces-export`

This plugin adds support for exporting workspaces into a deployable archive with
a PnP runtime.

## Install

```
yarn plugin import https://github.com/kherock/yarn-plugins/releases/download/<release>/plugin-workspaces-export.js
```

## Commands

- `yarn workspaces export`

## Configuration

| Property | Description | Default value |
| -------- | ----------- | ------------- |
| exportCacheFolder | Folder where the contents of exported workspace archives are cached | `./.yarn/export-cache` |
| exportedArchitectures | Architectures that Yarn will fetch and inject into the resolver for exported workspaces | (inherited from project) |
