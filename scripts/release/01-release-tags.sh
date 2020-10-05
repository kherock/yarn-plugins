#!/usr/bin/env bash

set -ex

THIS_DIR=$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)
REPO_DIR="$THIS_DIR/../.."

if ! [[ -z $(git status --porcelain) ]]; then
  echo 'This command must be executed on a clean repository'
  exit 1
fi

# Bump the packages, and store which ones have been bumped (and thus need to be re-released)
RELEASE_DETAILS=$(GITHUB_ACTIONS= yarn version apply --all --json)
RELEASE_SIZE=$(jq -r -s length <<< "$RELEASE_DETAILS")

if [[ $RELEASE_SIZE -eq 0 ]]; then
  echo "No package to release"
  exit 1
elif [[ $RELEASE_SIZE -eq 1 ]]; then
  COMMIT_MESSAGE="Releasing one new package"
else
  COMMIT_MESSAGE="Releasing ${RELEASE_SIZE} new packages"
fi

NL=$'\n'

COMMIT_MESSAGE="$COMMIT_MESSAGE$NL$NL| Package name | Version |$NL"
COMMIT_MESSAGE="$COMMIT_MESSAGE| --- | --- |$NL"

UPDATE_ARGUMENTS=()

while read line; do
  echo $line

  IDENT=$(jq -r .ident <<< "$line")
  VERSION=$(jq -r .newVersion <<< "$line")

  COMMIT_MESSAGE="$COMMIT_MESSAGE| \`$IDENT\` | \`$VERSION\` |$NL"
  UPDATE_ARGUMENTS+=(--include "$IDENT")

  yarn workspace "$IDENT" pack --dry-run >& /dev/null || (
    echo "Couldn't run prepack on $IDENT"
    exit 1
  )
done <<< "$RELEASE_DETAILS"

echo

git add "$REPO_DIR"
git commit -m "$COMMIT_MESSAGE"

while read line; do
  IDENT=$(jq -r .ident <<< "$line")
  VERSION=$(jq -r .newVersion <<< "$line")
  TAG="$IDENT/$VERSION"

  if ! [[ -z $(git tag -l "$TAG") ]]; then
    git tag --delete "$TAG"
  fi

  git tag -a "$TAG" -m "$IDENT"
done <<< "$RELEASE_DETAILS"

BASE_TAG=$(date +%Y-%m-%d)
TAG_PREFIX=release/
for TAG_SUFFIX in '' {a..z}; do
    TAG="$TAG_PREFIX$BASE_TAG$TAG_SUFFIX"

    if ! [[ -z $(git tag -l "$TAG") ]]; then
        if git merge-base --is-ancestor tags/"$TAG" HEAD; then
            continue
        else
            git tag --delete "$TAG"
        fi
    fi

    git tag -a "$TAG" -m "$BASE_TAG$TAG_SUFFIX"
    break
done

printf "%s" "$COMMIT_MESSAGE"
