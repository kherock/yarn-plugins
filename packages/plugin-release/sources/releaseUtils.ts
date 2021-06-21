import {Project, structUtils, Workspace}         from "@yarnpkg/core";
import {PortablePath, xfs}                       from "@yarnpkg/fslib";
import {getPnpPath}                              from "@yarnpkg/plugin-pnp";
import calver                                    from "calver";
import {Options as ConventionalChangelogOptions} from "conventional-changelog";
import {createRequire}                           from "module";
import {promisify}                               from "util";

import type {
  Callback as ConventionalRecommendedBumpCallback,
  Options as ConventionalRecommendedBumpOptions,
} from 'conventional-recommended-bump';

export async function changelogStream(workspace: Workspace, options?: ConventionalChangelogOptions): Promise<NodeJS.ReadableStream> {
  const {cwd, manifest, project} = workspace;
  const require = absoluteRequire(project.cwd);
  const conventionalChangelog = require(`conventional-changelog`) as typeof import("conventional-changelog");

  return conventionalChangelog(
    {
      preset: project.configuration.get(`conventionalChangelogPreset`),
      pkg: {transform: () => manifest.exportTo({})},
      lernaPackage: workspace === project.topLevelWorkspace
        ? undefined
        : structUtils.stringifyIdent(workspace.locator),
      tagPrefix: workspace === project.topLevelWorkspace
        ? undefined
        : `${structUtils.stringifyIdent(workspace.locator)}@`,
      outputUnreleased: true,
      ...options,
    },
    undefined,
    {path: cwd},
  );
}

export async function recommendedBump(workspace: Workspace) {
  const {cwd, manifest, project} = workspace;
  const require = absoluteRequire(project.cwd);
  const conventionalRecommendedBump = require(`conventional-recommended-bump`) as typeof import("conventional-recommended-bump");
  const conventionalChangelogPresetLoader = require(`conventional-changelog-preset-loader`) as typeof import("conventional-changelog-preset-loader");

  const conventionalChangelogPreset = project.configuration.get(`conventionalChangelogPreset`);
  const releaseCalverFormat = project.configuration.get(`releaseCalverFormat`);

  const conventionalRecommendedBumpPromise = promisify<
    ConventionalRecommendedBumpOptions & { path?: string },
    ConventionalRecommendedBumpCallback.Recommendation
  >(conventionalRecommendedBump);

  if (workspace === project.topLevelWorkspace) {
    return manifest.version
      ? incrementCalendarPatch(releaseCalverFormat, manifest.version)
      : undefined;
  } else {
    const config = await conventionalChangelogPresetLoader(conventionalChangelogPreset);
    const {recommendedBumpOpts} = typeof config === `function` ? await promisify(config)() : config;
    const bump = await conventionalRecommendedBumpPromise({
      config,
      path: cwd,
      lernaPackage: structUtils.stringifyIdent(workspace.locator),
      whatBump: commits => {
        const codeChanges = new Set([`feat`, `fix`, `perf`, `refactor`, `revert`]);
        const shouldBump = commits.some(commit => codeChanges.has(commit.type!));
        return recommendedBumpOpts?.whatBump && shouldBump
          ? recommendedBumpOpts.whatBump(commits)
          : {};
      },
    });
    return bump.releaseType;
  }
}

function absoluteRequire(cwd: PortablePath) {
  const pnpPath = getPnpPath({cwd} as Project).cjs;
  const absRequire = createRequire(pnpPath);
  if (!process.versions.pnp && xfs.existsSync(pnpPath))
    absRequire(pnpPath).setup();

  return absRequire;
}

function incrementCalendarPatch(format: string, version: string) {
  try {
    return calver.inc(format, version, `calendar`);
  } catch (err) {
    if (!err.message.startsWith(`There is no change in the version`)) throw err;
    return `patch`;
  }
}
