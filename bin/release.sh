#!/bin/bash
set -e

# This follows the jQuery release technique. Derived from: https://stackoverflow.com/a/50974956
# Temporary until migrating to the MuseumofModernArt GH org and using npm registries

# Check if the dry-run flag is set
DRY_RUN=false
if [[ "$1" == "--dry-run" ]]; then
  DRY_RUN=true
  echo "Dry-run mode: No changes will be made."
  shift  # Remove the --dry-run flag from the arguments
fi

# Check if a version argument is passed, it should be the second argument
VERSION=$1

if [ -z "$VERSION" ]; then
  echo "Usage: $0 [--dry-run] <version>"
  exit 1
fi

# Fetch the current local branch
CURRENT_BRANCH=$(git branch --show-current)

# Check if the current branch is valid (either 'main' or 'staging')
VALID_BRANCHES=("main" "staging")
if [[ ! " ${VALID_BRANCHES[@]} " =~ " ${CURRENT_BRANCH} " ]]; then
  echo "Error: Invalid branch '$CURRENT_BRANCH'. Only the following branches are allowed: ${VALID_BRANCHES[*]}"
  exit 1
fi

# Check if the webpack binary exists, if not, install dependencies
if [ ! -f "./node_modules/.bin/webpack" ]; then
  echo "Running yarn install..."
  yarn install
fi

# Checkout the specified branch (default is 'main')
echo "Checking out branch '$CURRENT_BRANCH'..."
if ! $DRY_RUN; then
  git checkout "$CURRENT_BRANCH"
fi
echo -e "\tgit checkout $CURRENT_BRANCH"

if ! $DRY_RUN; then
  git checkout --detach
fi
echo -e "\tcheckout --detach"

# Build the project
echo "Building the project..."
if ! $DRY_RUN; then
  yarn build
fi
echo -e "\tyarn build"

# Add all files in the dist/ directory
echo "Force adding dist files..."
if ! $DRY_RUN; then
  git add -f dist/*
fi
echo -e "\tgit add -f dist/*"

# Version bump based on the argument passed (second argument)
echo "Bumping version to $VERSION..."
if ! $DRY_RUN; then
  yarn version --no-git-tag-version --no-commit-hooks --new-version "$VERSION"
fi
echo -e "\tyarn version --no-git-tag-version --no-commit-hooks --new-version $VERSION"

# Add package.json changes
echo "Adding package.json changes..."
if ! $DRY_RUN; then
  git add package.json
fi
echo -e "\tgit add package.json"

# Commit with the version as the message
echo "Committing changes..."
if ! $DRY_RUN; then
  git commit -m "Release version $VERSION"
fi
echo -e "\tgit commit -m 'Release version $VERSION'"

# Tag the commit with version, add '-beta' if the branch is 'staging'
TAG_VERSION="$VERSION"
if [[ "$CURRENT_BRANCH" == "staging" ]]; then
  TAG_VERSION="${VERSION}-beta"
  echo -e "\tAdding '-beta' suffix to the version for staging branch"
fi

# Tag the commit with the version number
echo "Tagging commit with version $TAG_VERSION..."
if ! $DRY_RUN; then
  git tag "v$TAG_VERSION"
fi
echo -e "\tgit tag $TAG_VERSION"

# Push the tags to the remote
echo "Pushing tags to remote..."
if ! $DRY_RUN; then
  git push --tags
fi
echo -e "\tgit push --tags"

# Checkout the original branch (to return to the specified branch)
echo "Checking out branch '$CURRENT_BRANCH' again..."
if ! $DRY_RUN; then
  git checkout "$CURRENT_BRANCH"
fi
echo -e "\tgit checkout $CURRENT_BRANCH"

echo "sol: Release v$TAG_VERSION created!"
