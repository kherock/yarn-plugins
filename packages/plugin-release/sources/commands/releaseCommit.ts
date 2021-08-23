import {BaseCommand}                                                               from "@yarnpkg/cli";
import {Configuration, execUtils, MessageName, Project, StreamReport, structUtils} from "@yarnpkg/core";
import {Command, Option, UsageError}                                               from "clipanion";
import semver                                                                      from 'semver';
import {pipeline, Transform}                                                       from "stream";
import {promisify}                                                                 from "util";

import {changelogStream}                                                           from "../releaseUtils";

const cliEscape = (str: string): string => {
  const specialChars = ` \t\n$|&><\`"'`;
  return specialChars.split(``).some(char => str.includes(char))
    ? `'${str.replace(/'/g, `\\'`)}'`
    : str;
};

// eslint-disable-next-line arca/no-default-export
export default class ReleaseCommitCommand extends BaseCommand {
  static usage = Command.Usage({
    category: `Release-related commands`,
    description: `Commits and tags releases`,
    details: `
      This command will create a release for the current git project.
    `,
    examples: [
      [
        `Commits and tags a release for this project's workspaces`,
        `yarn release-commit`,
      ],
    ],
  });

  static paths = [[`release-commit`]];

  json = Option.Boolean(`--json`, false, {description: `Format the output as an NDJSON stream`});

  dryRun = Option.Boolean(`--dry-run`, false, {
    description: `Prints the recommended version bump to stdout`,
  });

  amend = Option.Boolean(`--amend`, false, {description: `Amend the previous commit instead of creating a new one`});

  tagHead = Option.String(`--tag-head`, `HEAD`, {description: `Specify an alternative commit-ish to tag`});

  async execute() {
    const configuration = await Configuration.find(this.context.cwd, this.context.plugins);
    const {project} = await Project.find(configuration, this.context.cwd);

    const {stdout: tagListOut} = await execUtils.execvp(`git`, [`tag`, `--list`], {cwd: project.cwd, strict: true});
    const tagList = new Set(tagListOut.trim().split(/\s+/));

    const projectTagName = `v${project.topLevelWorkspace.locator.reference}`;
    if (tagList.has(projectTagName))
      throw new UsageError(`${projectTagName} has already been released`);

    const prerelease = semver.prerelease(project.topLevelWorkspace.locator.reference);

    const report = await StreamReport.start({
      configuration,
      stdout: this.context.stdout,
      json: this.json,
    }, async report => {
      const taggableWorkspaces = project.topLevelWorkspace.getRecursiveWorkspaceChildren()
        .filter(workspace => !workspace.manifest.private && !tagList.has(structUtils.stringifyLocator(workspace.locator)));

      if (!taggableWorkspaces.length) {
        report.reportWarning(MessageName.UNNAMED, `There are no workspaces to tag`);
        return;
      }

      const newWorkspaceVersions = taggableWorkspaces
        .map(({locator, manifest}) => `${structUtils.stringifyIdent(locator)}: v${manifest.version}`)
        .join(`\n`);

      const commitMessage = `chore: release ${projectTagName}\n\n${newWorkspaceVersions}`;
      const commitArgs = [`commit`, `-m`, commitMessage];
      if (this.amend)
        commitArgs.push(`--amend`);
      report.reportJson({
        gitOpt: `commit`,
        commitMessage,
      });
      if (this.dryRun) {
        report.reportInfo(MessageName.UNNAMED, `git ${commitArgs.map(cliEscape).join(` `)}`);
      } else {
        await execUtils.execvp(`git`, commitArgs, {
          cwd: project.cwd,
          strict: true,
        });
      }

      for (const {locator} of taggableWorkspaces) {
        const tagName = structUtils.stringifyLocator(locator);
        const tagArgs = [`tag`, tagName, this.tagHead];
        report.reportJson({
          gitOp: `tag`,
          tagName,
        });
        if (this.dryRun) {
          report.reportInfo(MessageName.UNNAMED, `git ${tagArgs.map(cliEscape).join(` `)}`);
        } else {
          await execUtils.execvp(`git`, tagArgs, {
            cwd: project.cwd,
            strict: true,
          });
        }
      }

      let text = ``;
      const getText = new Transform({
        transform(chunk, encoding, callback) {
          text += chunk.toString();
          callback(null, chunk);
        },
      });
      await promisify(pipeline)([
        await changelogStream(project.topLevelWorkspace, {
          releaseCount: 1,
          // @ts-expect-error
          skipUnstable: !prerelease,
        }),
        getText,
      ]);
      const tagArgs = [`tag`, `-a`, `-m`, `${projectTagName}\n${text}`, `--cleanup=verbatim`, projectTagName, this.tagHead];
      report.reportJson({
        tagName: projectTagName,
        tagMessage: text,
      });
      if (this.dryRun) {
        report.reportInfo(MessageName.UNNAMED, `git ${tagArgs.map(cliEscape).join(` `)}`);
      } else {
        await execUtils.execvp(`git`, tagArgs, {
          cwd: project.cwd,
          strict: true,
        });
      }
    });
    return report.exitCode();
  }
}
