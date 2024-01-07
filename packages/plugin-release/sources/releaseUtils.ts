import {Configuration, execUtils, formatUtils, MessageName, Project, ReportError, structUtils, Workspace} from '@yarnpkg/core';
import {PortablePath, xfs}                                                                                from '@yarnpkg/fslib';
import {getPnpPath}                                                                                       from '@yarnpkg/plugin-pnp';
import calver                                                                                             from 'calver';
import conventionalChangelog                                                                              from 'conventional-changelog-core';
import {createPresetLoader, type PresetModuleLoader}                                                      from 'conventional-changelog-preset-loader';
import conventionalRecommendedBump                                                                        from 'conventional-recommended-bump';
import gitSemverTags                                                                                      from 'git-semver-tags';
import {createRequire}                                                                                    from 'module';
import semver, {SemVer}                                                                                   from 'semver';


const releaseTypes: Record<
  conventionalRecommendedBump.Recommendation.ReleaseType,
  number
> = {patch: 1, minor: 2, major: 3};

export async function changelogStream(
  workspace: Workspace,
  ...args: Parameters<typeof conventionalChangelog>
): Promise<NodeJS.ReadableStream> {
  const {cwd, manifest, project} = workspace;
  const [options = {}, context, gitRawCommitsOpts, parserOpts, writerOpts] = args;
  const require = absoluteRequire(project.cwd);
  const isReleaseable = !manifest.private || Boolean(workspace === project.topLevelWorkspace && project.configuration.get(`releaseCalverFormat`));

  return conventionalChangelog(
    {
      config: await loadConventionalChangelogPreset(require, project.configuration.get(`conventionalChangelogPreset`)),
      pkg: {transform: () => manifest.exportTo({version: manifest.version ?? `0.0.0`})},
      lernaPackage: workspace === project.topLevelWorkspace
        ? undefined
        : structUtils.stringifyIdent(workspace.anchoredLocator),
      tagPrefix: workspace === project.topLevelWorkspace
        ? undefined
        : `${structUtils.stringifyIdent(workspace.anchoredLocator)}@`,
      outputUnreleased: true,
      ...options,
    },
    {
      isPatch: false, // prevent patch release headers from rendering smaller
      version: isReleaseable ? manifest.version ?? `0.0.0` : `Unreleased`,
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

  if (workspace === project.topLevelWorkspace) {
    return releaseCalverFormat
      ? incrementCalendarPatch(releaseCalverFormat, manifest.version ?? ``, {prerelease, preid})
      : undefined;
  } else {
    const config = await loadConventionalChangelogPreset(absoluteRequire(project.cwd), conventionalChangelogPreset);
    const bump = await conventionalRecommendedBump({
      config,
      path: cwd,
      skipUnstable: !prerelease,
      lernaPackage: structUtils.stringifyIdent(workspace.anchoredLocator),
      whatBump: commits => {
        const shouldBump = commits.some(commit => releaseCodeChangeTypes.has(commit.type!));
        return shouldBump && config.recommendedBumpOpts?.whatBump
          ? config.recommendedBumpOpts.whatBump(commits)
          : {};
      },
    });
    if (!prerelease || !bump.releaseType)
      return bump.releaseType;

    const [latestTag] = await gitSemverTags({skipUnstable: false, lernaTags: true, package: structUtils.stringifyIdent(workspace.anchoredLocator)});
    if (!latestTag) return `pre${bump.releaseType}`;
    const [stableTag = `${structUtils.stringifyIdent(workspace.anchoredLocator)}@0.0.0`] = await gitSemverTags({skipUnstable: true, lernaTags: true, package: structUtils.stringifyIdent(workspace.anchoredLocator)});

    const stableVersion = structUtils.parseLocator(stableTag).reference;
    const latestVersion = structUtils.parseLocator(latestTag).reference;
    const unstableDiff = semver.diff(stableVersion, workspace.manifest.version ?? `0.0.0`) ?? semver.diff(stableVersion, latestVersion);
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
  // let semver handle prerelease increments unless the calendar version has elapsed
  if (semver.prerelease(version) && semver.lte(calver.inc(format, ``, `calendar`), semver.inc(version, `patch`)!))
    return semver.inc(version, prerelease ? `prerelease` : `patch`, preid);

  const newVersion = new SemVer(calver.inc(format, version, `calendar.patch`));
  if (prerelease)
    newVersion.prerelease = preid ? [preid, 0] : [0];
  return newVersion.format();
}

async function loadConventionalChangelogPreset(require: PresetModuleLoader, request: string) {
  const loadPreset = createPresetLoader(require);
  try {
    const config = await loadPreset<{ recommendedBumpOpts?: conventionalRecommendedBump.Options }>(request);
    return typeof config === `function` ? await config() : config;
  } catch (err) {
    console.error(err);
    throw new ReportError(MessageName.UNNAMED, `Failed to load the conventional-changelog preset '${request}'. Does your top-level workspace list it as a dependency?`);
  }
}

let lastGitTask: ReturnType<typeof execUtils.execvp> | undefined;

/** lifted from gitUtils in @yarnpkg/plugin-git */
export async function git(message: string, args: Array<string>, opts: Omit<execUtils.ExecvpOptions, 'strict'>, {configuration}: { configuration: Configuration }) {
  // avoid concurrency issues when running with workspaces foreach
  try {
    await lastGitTask;
  } catch {
    // do nothing
  } finally {
    lastGitTask = undefined;
  }
  try {
    lastGitTask = execUtils.execvp(`git`, args, {
      ...opts,
      // The promise won't reject on non-zero exit codes unless we pass the strict option.
      strict: true,
    });
    return await lastGitTask;
  } catch (error) {
    if (!(error instanceof execUtils.ExecError))
      throw error;

    const execErrorReportExtra = error.reportExtra;

    const stderr = error.stderr.toString();

    throw new ReportError(MessageName.EXCEPTION, `Failed ${message}`, report => {
      for (const match of stderr.matchAll(/^(.+?): (.*)$/gm)) {
        let [, errorName, errorMessage] = match;

        errorName = errorName.toLowerCase();

        const label = errorName === `error`
          ? `Error`
          : `${errorName} Error`;

        report.reportError(MessageName.EXCEPTION, `  ${formatUtils.prettyField(configuration, {
          label,
          value: formatUtils.tuple(formatUtils.Type.NO_HINT, errorMessage),
        })}`);
      }

      execErrorReportExtra?.(report);
    });
  }
}
