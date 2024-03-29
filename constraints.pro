constraints_min_version(1).

% This file is written in Prolog
% It contains rules that the project must respect.
% In order to see them in action, run `yarn constraints detail`

% This rule will enforce that a workspace MUST depend on the same version of a dependency as the one used by the other workspaces
gen_enforced_dependency(WorkspaceCwd, DependencyIdent, DependencyRange2, DependencyType) :-
  % Iterates over all dependencies from all workspaces
    workspace_has_dependency(WorkspaceCwd, DependencyIdent, DependencyRange, DependencyType),
  % Iterates over similarly-named dependencies from all workspaces (again)
    workspace_has_dependency(OtherWorkspaceCwd, DependencyIdent, DependencyRange2, DependencyType2),
  % Ignore peer dependencies
    DependencyType \= 'peerDependencies',
    DependencyType2 \= 'peerDependencies',
  % Ignore exec dependencies
    \+ atom_concat('exec:', _, DependencyRange),
    \+ atom_concat('exec:', _, DependencyRange2).

% This rule will prevent workspaces from depending on non-workspace versions of available workspaces
gen_enforced_dependency(WorkspaceCwd, DependencyIdent, WorkspaceRange, DependencyType) :-
  % Iterates over all dependencies from all workspaces
    workspace_has_dependency(WorkspaceCwd, DependencyIdent, DependencyRange, DependencyType),
  % Only consider those that target something that could be a workspace
    workspace_ident(DependencyCwd, DependencyIdent),
  % Obtain the version from the dependency
    workspace_field(DependencyCwd, 'version', DependencyVersion),
  % Quirk: we must discard the workspaces that don't declare a version
    atom(DependencyVersion),
  % Only proceed if the dependency isn't satisfied by a workspace
    \+ project_workspaces_by_descriptor(DependencyIdent, DependencyRange, DependencyCwd),
  % Derive the expected range from the version
    (
      DependencyType \= 'peerDependencies' ->
        atom_concat('workspace:^', DependencyVersion, WorkspaceRange)
      ;
        atom_concat('^', DependencyVersion, WorkspaceRange)
    ).

% This rule enforces that all packages that depend on TypeScript must also depend on tslib
gen_enforced_dependency(WorkspaceCwd, 'tslib', 'range', 'dependencies') :-
  % Iterates over all TypeScript dependencies from all workspaces
    workspace_has_dependency(WorkspaceCwd, 'typescript', _, DependencyType),
  % Ignores the case when TypeScript is a peer dependency
    DependencyType \= 'peerDependencies',
  % Only proceed if the workspace doesn't already depend on tslib
    \+ workspace_has_dependency(WorkspaceCwd, 'tslib', _, _).

% This rule will enforce that all packages must have a license field
gen_enforced_field(WorkspaceCwd, 'license', 'BSD-2-Clause') :-
  % Private packages aren't covered
  \+ workspace_field_test(WorkspaceCwd, 'private', 'true').

% This rule will enforce that all packages must have a engines.node field of >=18.12.0
gen_enforced_field(WorkspaceCwd, 'engines.node', '>=18.12.0').

% Required to make the package work with the GitHub Package Registry
gen_enforced_field(WorkspaceCwd, 'repository.type', 'git') :-
  % Exclude example packages
    \+ atom_concat('examples/', _, WorkspaceCwd).
gen_enforced_field(WorkspaceCwd, 'repository.url', 'git+ssh://git@github.com/kherock/yarn-plugins.git') :-
  % Exclude example packages
    \+ atom_concat('examples/', _, WorkspaceCwd).
gen_enforced_field(WorkspaceCwd, 'repository.directory', WorkspaceCwd) :-
  % Exclude example packages
    \+ atom_concat('examples/', _, WorkspaceCwd),
  % Exclude root
    WorkspaceCwd \= '.'.

% This rule will require that the plugins that aren't embed in the CLI list a specific script that'll
% be called as part of our release process (to rebuild them in the context of our repository)
gen_enforced_field(WorkspaceCwd, 'scripts.update-local', '<any value>') :-
  % Iterates over all workspaces whose name is prefixed with "@kherock/yarn-plugin-"
    workspace_ident(WorkspaceCwd, WorkspaceIdent),
    atom_concat('@kherock/yarn-plugin-', _, WorkspaceIdent),
  % Only if they don't have a script set
    \+ workspace_field(WorkspaceCwd, 'scripts.update-local', _).

gen_enforced_field(WorkspaceCwd, 'scripts.prepack', 'run build:compile') :-
  workspace(WorkspaceCwd),
  % Private packages aren't covered
    \+ workspace_field_test(WorkspaceCwd, 'private', 'true').

gen_enforced_field(WorkspaceCwd, 'scripts.postpack', 'rm -rf lib') :-
  workspace(WorkspaceCwd),
  % Private packages aren't covered
    \+ workspace_field_test(WorkspaceCwd, 'private', 'true').
