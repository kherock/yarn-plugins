import {MessageName, Project, ReportError, structUtils, Workspace} from '@yarnpkg/core';
import {PortablePath, xfs}                                         from '@yarnpkg/fslib';
import {getPnpPath}                                                from '@yarnpkg/plugin-pnp';
import calver                                                      from 'calver';
import conventionalChangelog                                       from 'conventional-changelog-core';
import {presetLoader}                                              from 'conventional-changelog-preset-loader';
import conventionalRecommendedBump                                 from 'conventional-recommended-bump';
import gitSemverTags                                               from 'git-semver-tags';
import {createRequire}                                             from 'module';
import semver, {SemVer}                                            from 'semver';
import {promisify}                                                 from 'util';

const releaseTypes: Record<
  conventionalRecommendedBump.Callback.Recommendation.ReleaseType,
  number
> = {patch: 1, minor: 2, major: 3};

const gitSemverTagsPromise = promisify<gitSemverTags.Options, Array<string>>(gitSemverTags);

export async function changelogStream(
  workspace: Workspace,
  ...args: Parameters<typeof conventionalChangelog>
): Promise<NodeJS.ReadableStream> {
  const {cwd, locator, manifest, project} = workspace;
  const [options = {}, context, gitRawCommitsOpts, parserOpts, writerOpts] = args;
  const require = absoluteRequire(project.cwd);
  const isReleaseable = workspace === project.topLevelWorkspace || !manifest.private;

  return conventionalChangelog(
    {
      config: await loadConventionalChangelogPreset(require, project.configuration.get(`conventionalChangelogPreset`)),
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
      isPatch: false, // prevent patch release headers from rendering smaller
      version: isReleaseable ? undefined : `Unreleased`,
      ...context,
      date: isReleaseable
        ? context?.date ?? new Date().toISOString().split(`T`)[0]
        : undefined,
    },
    {path: cwd, ...gitRawCommitsOpts},
    parserOpts,
    {
      generateOn: commit => {
        const version = semver.valid(commit.version);
        return version && (!options.skipUnstable || !semver.prerelease(version));
      },
      ...writerOpts,
    },
  );
}

export async function recommendedBump(workspace: Workspace, {prerelease, preid}: {prerelease?: boolean, preid?: string} = {}) {
  const {cwd, manifest, project} = workspace;

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
    const config = await loadConventionalChangelogPreset(absoluteRequire(project.cwd), conventionalChangelogPreset);
    const bump = await conventionalRecommendedBumpPromise({
      config,
      path: cwd,
      skipUnstable: !prerelease,
      lernaPackage: structUtils.stringifyIdent(workspace.locator),
      whatBump: commits => {
        const shouldBump = commits.some(commit => releaseCodeChangeTypes.has(commit.type!));
        return shouldBump && config.recommendedBumpOpts?.whatBump
          ? config.recommendedBumpOpts.whatBump(commits)
          : {};
      },
    });
    if (!prerelease || !bump.releaseType)
      return bump.releaseType;

    const [latestTag] = await gitSemverTagsPromise({skipUnstable: false, lernaTags: true, package: structUtils.stringifyIdent(workspace.locator)});
    if (!latestTag) return `pre${bump.releaseType}`;
    const [stableTag = `${structUtils.stringifyIdent(workspace.locator)}@0.0.0`] = await gitSemverTagsPromise({skipUnstable: true, lernaTags: true, package: structUtils.stringifyIdent(workspace.locator)});

    const stableVersion = structUtils.parseLocator(stableTag).reference;
    const latestVersion = structUtils.parseLocator(latestTag).reference;
    const unstableDiff = semver.diff(stableVersion, workspace.locator.reference) ?? semver.diff(stableVersion, latestVersion);
    if (!unstableDiff) return `pre${bump.releaseType}`;
    // this should only happen when a workspace's version was manually incremented to a prerelease
    if (unstableDiff === `prerelease`) return `prerelease`;

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

async function loadConventionalChangelogPreset(require: presetLoader.RequireMethod, request: string) {
  try {
    const config = await presetLoader(require)(request);
    return typeof config === `function` ? await promisify(config)() : config;
  } catch (err) {
    throw new ReportError(MessageName.UNNAMED, `Failed to load the conventional-changelog preset '${request}'. Does your top-level workspace list it as a dependency?`);
  }
}
