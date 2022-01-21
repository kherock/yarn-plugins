<p align="center">
  <a href="https://yarnpkg.com/">
    <img alt="Yarn" src="https://github.com/yarnpkg/assets/blob/master/yarn-kitten-full.png?raw=true" width="546">
  </a>
</p>

---

## Yarn plugins

- [plugin-dotenv](packages/plugin-dotenv) adds support for loading
environment variables from .env files at the project root
- [plugin-esm-loader-typescript](packages/plugin-esm-loader-typescript) extends
Yarn's PnP ESM loader hooks with support for loading TypeScript files. It's like
`esbuild-register` for ESM.
- [plugin-release](packages/plugin-release) adds support for generating
changelogs and bumping workspace versions according to the conventional commits
standard
- [plugin-workspaces-export](packages/plugin-workspaces-export) adds support for
exporting workspaces into a deployable archive with a PnP runtime
