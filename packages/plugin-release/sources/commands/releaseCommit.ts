import {BaseCommand}                                                                            from "@yarnpkg/cli";
import {Configuration, execUtils, MessageName, Project, scriptUtils, StreamReport, structUtils} from "@yarnpkg/core";
import {Command, Option, UsageError}                                                            from "clipanion";

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
    const {project} = await Project.find(configuration, this.context.cwd);

    const {stdout: tagListOut} = await execUtils.execvp(`git`, [`tag`, `--list`], {cwd: project.cwd, strict: true});
    const tagList = new Set(tagListOut.trim().split(/\s+/));

    const projectTagName = `v${project.topLevelWorkspace.locator.reference}`;
    if (tagList.has(projectTagName))
      throw new UsageError(`${projectTagName} has already been releeased`);

    const report = await StreamReport.start({
      configuration,
      stdout: this.context.stdout,
      json: this.json,
    }, async report => {
      const taggableWorkspaces = project.topLevelWorkspace.getRecursiveWorkspaceChildren()
        .filter(workspace => !workspace.manifest.private && !tagList.has(structUtils.stringifyLocator(workspace.locator)));

      if (!taggableWorkspaces.length) {
        report.reportWarning(MessageName.UNNAMED, `There are no releases to tag`);
        return;
      }

      const newWorkspaceVersions = taggableWorkspaces
        .map(({locator, manifest}) => `${structUtils.stringifyIdent(locator)}: v${manifest.version}`)
        .join(`\n`);

      await execUtils.execvp(`git`, [`commit`, `-m`, `chore: release ${projectTagName}\n\n${newWorkspaceVersions}`], {
        cwd: project.cwd,
        strict: true,
      });

      for (const {locator} of taggableWorkspaces) {
        const tagName = structUtils.stringifyLocator(locator);
        await execUtils.execvp(`git`, [`tag`, tagName], {
          cwd: project.cwd,
          strict: true,
        });
        report.reportJson({ident: structUtils.stringifyIdent(locator), tagName});
      }

      report.reportJson({ident: structUtils.stringifyIdent(project.topLevelWorkspace.locator), tagName: projectTagName});
      await execUtils.execvp(`git`, [`tag`, `-a`, projectTagName, `-m`, newWorkspaceVersions], {
        cwd: project.cwd,
        strict: true,
      });
    });
    return report.exitCode();
  }
}
