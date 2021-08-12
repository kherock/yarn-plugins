import {BaseCommand}                                                               from "@yarnpkg/cli";
import {Configuration, execUtils, MessageName, Project, StreamReport, structUtils} from "@yarnpkg/core";
import {Command, Option, UsageError}                                               from "clipanion";

import {changelogStream}                                                           from "../releaseUtils";

// eslint-disable-next-line arca/no-default-export
export default class ReleaseCommand extends BaseCommand {
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

      const commitArgs = [`commit`, `-m`, `chore: release ${projectTagName}\n\n${newWorkspaceVersions}`];
      if (this.amend)
        commitArgs.push(`--amend`);
      await execUtils.execvp(`git`, commitArgs, {
        cwd: project.cwd,
        strict: true,
      });

      for (const {locator} of taggableWorkspaces) {
        const tagName = structUtils.stringifyLocator(locator);
        await execUtils.execvp(`git`, [`tag`, tagName, this.tagHead], {
          cwd: project.cwd,
          strict: true,
        });
        report.reportJson({ident: structUtils.stringifyIdent(locator), tagName});
      }

      let changelogText = ``;
      for await (const chunk of await changelogStream(project.topLevelWorkspace))
        changelogText += chunk.toString();
      changelogText = changelogText.split(`\n`).slice(2).join(`\n`);

      report.reportJson({ident: structUtils.stringifyIdent(project.topLevelWorkspace.locator), tagName: projectTagName});
      await execUtils.execvp(`git`, [`tag`, `-a`, projectTagName, `-m`, `${projectTagName}\n${changelogText}`, `--cleanup=verbatim`, this.tagHead], {
        cwd: project.cwd,
        strict: true,
      });
    });
    return report.exitCode();
  }
}
