#!/usr/bin/env bash

set -ex

THIS_DIR=$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)
REPO_DIR="$THIS_DIR/../.."

if ! [[ -z $(git status --porcelain) ]]; then
  echo 'This command must be executed on a clean repository'
  exit 1
fi

RELEASE_ARGUMENTS=()
RELEASE_LOCATIONS=()

maybe_release_package() {
  if git describe --match "$1/*" HEAD >& /dev/null; then
    RELEASE_ARGUMENTS+=(--include "$1")
    RELEASE_LOCATIONS+=("$(yarn constraints query --json "workspace_ident(Cwd, '$1')" | jq -r .Cwd)/bundles")
  fi
}

while read ident; do
  maybe_release_package "$ident"
done < <(yarn constraints query --json "workspace_ident(Cwd, Ident), \+ workspace_field(Cwd, 'private', 'true')" | jq -r .Ident)

if [[ ${#RELEASE_ARGUMENTS[@]} -eq 0 ]]; then
  exit 0
fi

# Regenerate the local versions for the elements that get released
yarn workspaces foreach \
  --verbose --topological --no-private "${RELEASE_ARGUMENTS[@]}" \
  run update-local

# Create the GitHub release
TAG=$(git describe --match "release/*" HEAD)
gh release create "$TAG" "$(find ${RELEASE_LOCATIONS[@]} -type f)" \
  --title "$(git tag --list --format='%(contents)' "$TAG")" \
  --notes "$(git show -s --format=%B HEAD)"
