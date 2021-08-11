import {Project, structUtils, Workspace} from "@yarnpkg/core";
import {PortablePath, xfs}               from "@yarnpkg/fslib";
import {getPnpPath}                      from "@yarnpkg/plugin-pnp";
import calver                            from "calver";
import type conventionalRecommendedBump  from "conventional-recommended-bump";
import gitSemverTags                     from "git-semver-tags";
import {createRequire}                   from "module";
import semver, {SemVer}                  from "semver";
import {promisify}                       from "util";

const releaseTypes: Record<
  conventionalRecommendedBump.Callback.Recommendation.ReleaseType,
  number
> = {patch: 1, minor: 2, major: 3};

const gitSemverTagsPromise = promisify<gitSemverTags.Options, Array<string>>(gitSemverTags);

export async function changelogStream(workspace: Workspace, ...args: Parameters<typeof import("conventional-changelog")>): Promise<NodeJS.ReadableStream> {
  const {cwd, locator, manifest, project} = workspace;
  const [options, context, gitRawCommitsOpts] = args;
  const require = absoluteRequire(project.cwd);
  const conventionalChangelog = require(`conventional-changelog`) as typeof import("conventional-changelog");

  return conventionalChangelog(
    {
      preset: project.configuration.get(`conventionalChangelogPreset`),
      pkg: {transform: () => manifest.exportTo({version: locator.reference})},
      lernaPackage: workspace === project.topLevelWorkspace
        ? undefined
        : structUtils.stringifyIdent(workspace.locator),
      tagPrefix: workspace === project.topLevelWorkspace
        ? undefined
        : `${structUtils.stringifyIdent(workspace.locator)}@`,
      outputUnreleased: true,
      ...options,
    },
    {version: workspace === project.topLevelWorkspace || !manifest.private ? undefined : `Unreleased`, ...context},
    {path: cwd, ...gitRawCommitsOpts},
  );
}

export async function recommendedBump(workspace: Workspace, {prerelease}: {prerelease?: boolean | string} = {}) {
  const {cwd, manifest, project} = workspace;
  const require = absoluteRequire(project.cwd);
  const conventionalRecommendedBump = require(`conventional-recommended-bump`) as typeof import("conventional-recommended-bump");
  const conventionalChangelogPresetLoader = require(`conventional-changelog-preset-loader`) as typeof import("conventional-changelog-preset-loader");

  const conventionalChangelogPreset = project.configuration.get(`conventionalChangelogPreset`);
  const releaseCalverFormat = project.configuration.get(`releaseCalverFormat`);

  const conventionalRecommendedBumpPromise = promisify<
    conventionalRecommendedBump.Options & { path?: string, skipUnstable?: boolean },
    conventionalRecommendedBump.Callback.Recommendation
  >(conventionalRecommendedBump);

  if (workspace === project.topLevelWorkspace) {
    return manifest.version
      ? incrementCalendarPatch(releaseCalverFormat, manifest.version, {prerelease})
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
    if (!prerelease || !bump.releaseType)
      return bump.releaseType;

    const [stableTag] = await gitSemverTagsPromise({skipUnstable: true});
    const [unstableTag] = await gitSemverTagsPromise({skipUnstable: false});
    const unstableDiff = semver.diff(stableTag, unstableTag);
    if (!unstableDiff?.startsWith(`pre`)) return prerelease ? `pre${bump.releaseType}` : bump.releaseType;

    // check if the release scope has widened since the last prerelease
    const previousStableBump = unstableDiff.slice(`pre`.length) as keyof typeof releaseTypes;
    return releaseTypes[previousStableBump] < releaseTypes[bump.releaseType] ? `pre${bump.releaseType}` : `prerelease`;
  }
}

function absoluteRequire(cwd: PortablePath) {
  const pnpPath = getPnpPath({cwd} as Project).cjs;
  const absRequire = createRequire(pnpPath);
  if (!process.versions.pnp && xfs.existsSync(pnpPath))
    absRequire(pnpPath).setup();

  return absRequire;
}

function incrementCalendarPatch(format: string, version: string, {prerelease}: {prerelease?: boolean | string} = {}) {
  const newVersion = new SemVer(calver.inc(format, version, `calendar.micro`));
  if (prerelease)
    newVersion.prerelease = typeof prerelease === `string` ? [prerelease, 0] : [0];
  return newVersion.format();
}
