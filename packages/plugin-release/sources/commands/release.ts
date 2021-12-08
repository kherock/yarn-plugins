import {BaseCommand, WorkspaceRequiredError}                                                                        from "@yarnpkg/cli";
import {Cache, Configuration, execUtils, MessageName, Project, scriptUtils, StreamReport, structUtils, ThrowReport} from "@yarnpkg/core";
import {Filename, ppath, xfs}                                                                                       from "@yarnpkg/fslib";
import {Command, Option}                                                                                            from "clipanion";
import MultiStream                                                                                                  from "multistream";
import semver, {SemVer, ReleaseType}                                                                                from "semver";
import {Transform, pipeline, PassThrough}                                                                           from "stream";
import {promisify}                                                                                                  from "util";

import {changelogStream, recommendedBump}                                                                           from "../releaseUtils";

export const CHANGELOG = `CHANGELOG.md` as Filename;

export default class ReleaseCommand extends BaseCommand {
  static usage = Command.Usage({
    category: `Release-related commands`,
    description: `Bumps version and generates a changelog for the active workspace`,
    details: `
      This command will prepare the current workspace for a new release.
    `,
    examples: [
      [
        `Creates a release for the current workspace`,
        `yarn release`,
      ],
      [
        `Creates a release candidate for the current workspace`,
        `yarn release --prerelease=rc`,
      ],
    ],
  });

  static paths = [[`release`]];

  json = Option.Boolean(`--json`, false, {description: `Format the output as an NDJSON stream`});

  dryRun = Option.Boolean(`--dry-run`, false, {
    description: `Prints the recommended version bump to stdout`,
  });

  firstRelease = Option.Boolean(`--first-release`, false, {
    description: `Skips bumping the version and regenerates the changelog from scratch`,
  });

  date = Option.String(`--date`, {
    description: `Override the release date in the changelog with the provided string`,
  });

  prerelease = Option.String(`--prerelease`, false, {
    description: `Add a prerelease identifier to new versions`,
    tolerateBoolean: true,
  });

  includeUnstable = Option.Boolean(`--include-unstable`, false, {
    description: `Create sections for unstable tags in the generated changelog. Implied by the --prerelease option`,
  });

  async execute() {
    this.includeUnstable ||= this.prerelease !== false;
    const configuration = await Configuration.find(this.context.cwd, this.context.plugins);
    const {project, workspace} = await Project.find(configuration, this.context.cwd);

    if (!workspace)
      throw new WorkspaceRequiredError(project.cwd, this.context.cwd);

    const ident = structUtils.stringifyIdent(workspace.locator);

    const report = await StreamReport.start({
      configuration,
      stdout: this.context.stdout,
      json: this.json,
    }, async report => {
      const requiresVersion = workspace === project.topLevelWorkspace || !workspace.manifest.private;
      const preid = typeof this.prerelease === `string`
        ? this.prerelease
        : undefined;

      if (requiresVersion && !this.firstRelease) {
        const recommendedStrategy = await recommendedBump(workspace, {prerelease: this.prerelease !== false, preid});
        if (!recommendedStrategy) {
          report.reportWarning(MessageName.UNNAMED, `No code changes since last release`);
          return;
        }
        const version = new SemVer(workspace.locator.reference);
        if (semver.valid(recommendedStrategy)) {
          workspace.manifest.version = recommendedStrategy;
          report.reportJson({ident, newVersion: workspace.manifest.version});
        } else {
          version.inc(recommendedStrategy as ReleaseType, preid);
          version.format();
          workspace.manifest.version = version.format();
          report.reportJson({ident, strategy: recommendedStrategy, newVersion: workspace.manifest.version});
        }
        report.reportInfo(MessageName.UNNAMED, `Recommended version bump: ${recommendedStrategy}`);
        if (!this.dryRun) {
          await workspace.persistManifest();
        }
      }

      const changelogPath = ppath.join(workspace.cwd, CHANGELOG);

      let text = ``;
      const getText = new Transform({
        transform(chunk, encoding, callback) {
          text += chunk.toString();
          callback(null, chunk);
        },
      });

      const changelog = await changelogStream(
        workspace,
        {
          releaseCount: this.firstRelease ? 0 : 1,
          skipUnstable: !this.includeUnstable,
        },
        this.date == null ? undefined : {date: this.date},
      );

      const additionalStreams: Array<NodeJS.ReadWriteStream | NodeJS.WritableStream> = [];
      if (this.dryRun) {
        additionalStreams.push(report.createStreamReporter());
        await promisify(pipeline)(changelog, getText, ...additionalStreams);
      } else {
        const outPath = ppath.join(await xfs.mktempPromise(), CHANGELOG);
        const existingChangelog = new PassThrough();
        if (requiresVersion && !this.firstRelease) {
          xfs.createReadStream(changelogPath)
            .on(`error`, function (this: NodeJS.ReadableStream, err: NodeJS.ErrnoException) {
              if (err.code !== `ENOENT`) throw err;
              this.unpipe(existingChangelog);
              existingChangelog.push(null);
            })
            .pipe(existingChangelog);
        } else {
          existingChangelog.push(null);
        }

        const newChangelog = new PassThrough();
        additionalStreams.push(newChangelog);
        await Promise.all([
          promisify(pipeline)(
            new MultiStream([
              newChangelog,
              existingChangelog,
            ]),
            xfs.createWriteStream(outPath),
          ),
          promisify(pipeline)(changelog, getText, ...additionalStreams),
        ]);
        await xfs.copyFilePromise(outPath, changelogPath);
      }
      report.reportJson({ident, changelogPath, changelog: text});

      if (!this.dryRun) {
        await execUtils.execvp(`git`, [`add`, Filename.manifest, CHANGELOG], {
          cwd: workspace.cwd,
          strict: true,
        });
        await project.install({
          cache: await Cache.find(configuration),
          report: new ThrowReport(),
          persistProject: false,
        });
        await scriptUtils.maybeExecuteWorkspaceLifecycleScript(workspace, `postrelease`, {report});
      }
      if (requiresVersion) {
        report.reportInfo(MessageName.UNNAMED, `Released v${workspace.manifest.version}`);
      }
    });
    return report.exitCode();
  }
}
