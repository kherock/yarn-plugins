import {BaseCommand, WorkspaceRequiredError}                                                                        from "@yarnpkg/cli";
import {Cache, Configuration, execUtils, MessageName, Project, scriptUtils, StreamReport, structUtils, ThrowReport} from "@yarnpkg/core";
import {Filename, ppath, xfs}                                                                                       from "@yarnpkg/fslib";
import {Command, Option, UsageError}                                                                                from "clipanion";
import MultiStream                                                                                                  from "multistream";
import semver, {SemVer, ReleaseType}                                                                                from "semver";
import {Transform, pipeline, PassThrough}                                                                           from "stream";
import {promisify}                                                                                                  from "util";

import {changelogStream, recommendedBump}                                                                           from "../releaseUtils";

export const CHANGELOG = `CHANGELOG.md` as Filename;

// eslint-disable-next-line arca/no-default-export
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
    ],
  });

  static paths = [[`release`]];

  json = Option.Boolean(`--json`, false, {description: `Format the output as an NDJSON stream`});

  dryRun = Option.Boolean(`--dry-run`, false, {
    description: `Prints the recommended version bump to stdout`,
  });

  firstRelease = Option.Boolean(`--first-release`, false, {
    description: `Skips bumping the version`,
  });

  prerelease = Option.Boolean(`--prerelease`, false, {
    description: `Add a prerelease identifier to new versions`,
  });

  prereleaseId = Option.String(`--preid`, {
    description: `Add a prerelease identifier to new versions`,
  });

  async execute() {
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
      if (!workspace.manifest.version)
        throw new UsageError(`Can't bump the version if there wasn't a version to begin with - use 0.0.0 as initial version then run the command again.`);

      if (!this.firstRelease) {
        const recommendedStrategy = await recommendedBump(workspace);
        if (!recommendedStrategy) {
          report.reportWarning(MessageName.UNNAMED, `No commits since last release`);
          return;
        }
        let version = new SemVer(workspace.manifest.version);
        if (semver.valid(recommendedStrategy)) {
          version = new SemVer(recommendedStrategy);
          if (this.prerelease || this.prereleaseId)
            version.prerelease = this.prereleaseId ? [this.prereleaseId, 0] : [0];
          workspace.manifest.version = version.format();
          report.reportJson({ident, newVersion: workspace.manifest.version});
        } else {
          const strategy = (this.prerelease
            ? `prerelease`
            : this.prereleaseId
              ? `pre${recommendedStrategy}`
              : recommendedStrategy) as ReleaseType;
          version.inc(strategy, this.prereleaseId);
          version.format();
          workspace.manifest.version = version.format();
          report.reportJson({ident, strategy, newVersion: workspace.manifest.version});
        }
        report.reportInfo(MessageName.UNNAMED, `Recommended version bump: ${recommendedStrategy}`);
        if (!this.dryRun) {
          await workspace.persistManifest();
        }
      }

      const changelogPath = ppath.join(workspace.cwd, CHANGELOG);
      const existingChangelog = xfs.createReadStream(changelogPath)
        .on(`error`, function (this: NodeJS.ReadableStream, err: NodeJS.ErrnoException) {
          if (err.code !== `ENOENT`) throw err;
          this.unpipe(existingChangelog);
          existingChangelog.push(null);
        })
        .pipe(new PassThrough());

      const changelog = new MultiStream([
        await changelogStream(workspace, {
          releaseCount: this.firstRelease ? 0 : 1,
        }),
        existingChangelog,
      ]);
      let text = ``;
      const getText = new Transform({
        transform(chunk, encoding, callback) {
          text += chunk.toString();
          callback(null, chunk);
        },
      });

      const streams: Array<NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream> = [changelog, getText];
      if (this.dryRun) {
        streams.push(report.createStreamReporter());
        await promisify(pipeline)(streams);
      } else {
        const outPath = ppath.join(await xfs.mktempPromise(), CHANGELOG);
        streams.push(xfs.createWriteStream(outPath));
        await promisify(pipeline)(streams);
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
      report.reportInfo(MessageName.UNNAMED, `Released v${workspace.manifest.version}`);
    });
    return report.exitCode();
  }
}
