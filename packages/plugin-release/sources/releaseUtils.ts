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
  const [options, context, gitRawCommitsOpts, parserOpts, writerOpts] = args;
  const require = absoluteRequire(project.cwd);
  const conventionalChangelog = require(`conventional-changelog`) as typeof import("conventional-changelog");
  const isReleaseable = workspace === project.topLevelWorkspace || !manifest.private;

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
    {
      isPatch: false,
      version: isReleaseable ? undefined : `Unreleased`,
      ...context,
      date: isReleaseable
        ? context?.date ?? new Date().toISOString().split(`T`)[0]
        : undefined,
    },
    {path: cwd, ...gitRawCommitsOpts},
    parserOpts,
    writerOpts,
  );
}

export async function recommendedBump(workspace: Workspace, {prerelease, preid}: {prerelease?: boolean, preid?: string} = {}) {
  const {cwd, manifest, project} = workspace;
  const require = absoluteRequire(project.cwd);
  const conventionalRecommendedBump = require(`conventional-recommended-bump`) as typeof import("conventional-recommended-bump");
  const conventionalChangelogPresetLoader = require(`conventional-changelog-preset-loader`) as typeof import("conventional-changelog-preset-loader");

  const conventionalChangelogPreset = project.configuration.get(`conventionalChangelogPreset`);
  const releaseCalverFormat = project.configuration.get(`releaseCalverFormat`);
  const releaseCodeChangeTypes = new Set(project.configuration.get(`releaseCodeChangeTypes`));

  const conventionalRecommendedBumpPromise = promisify<
    conventionalRecommendedBump.Options,
    conventionalRecommendedBump.Callback.Recommendation
  >(conventionalRecommendedBump);

  if (workspace === project.topLevelWorkspace) {
    return manifest.version
      ? incrementCalendarPatch(releaseCalverFormat, manifest.version, {prerelease, preid})
      : undefined;
  } else {
    const config = await conventionalChangelogPresetLoader(conventionalChangelogPreset);
    const {recommendedBumpOpts} = typeof config === `function` ? await promisify(config)() : config;
    const bump = await conventionalRecommendedBumpPromise({
      config,
      // @ts-expect-error
      path: cwd,
      skipUnstable: !prerelease,
      lernaPackage: structUtils.stringifyIdent(workspace.locator),
      whatBump: commits => {
        const shouldBump = commits.some(commit => releaseCodeChangeTypes.has(commit.type!));
        return recommendedBumpOpts?.whatBump && shouldBump
          ? recommendedBumpOpts.whatBump(commits)
          : {};
      },
    });
    if (!prerelease || !bump.releaseType)
      return bump.releaseType;

    const [stableTag] = await gitSemverTagsPromise({skipUnstable: true, lernaTags: true, package: structUtils.stringifyIdent(workspace.locator)});
    const [unstableTag] = await gitSemverTagsPromise({skipUnstable: false, lernaTags: true, package: structUtils.stringifyIdent(workspace.locator)});
    if (!stableTag) return `prerelease`;
    if (!unstableTag) return `pre${bump.releaseType}`;

    const stableVersion = structUtils.parseLocator(stableTag).reference;
    const unstableVersion = structUtils.parseLocator(unstableTag).reference;
    const unstableDiff = semver.diff(stableVersion, unstableVersion);
    if (!unstableDiff?.startsWith(`pre`)) return `pre${bump.releaseType}`;

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

function incrementCalendarPatch(format: string, version: string, {prerelease, preid}: { prerelease?: boolean, preid?: string } = {}) {
  // let semver handle prerelease increments
  if (semver.prerelease(version))
    return semver.inc(version, prerelease ? `prerelease` : `patch`, preid);

  const newVersion = new SemVer(calver.inc(format, version, `calendar.micro`));
  if (prerelease)
    newVersion.prerelease = preid ? [preid, 0] : [0];
  return newVersion.format();
}
