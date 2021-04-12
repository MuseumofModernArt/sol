#!/bin/bash
set -e

if [ ! -f "./node_modules/.bin/webpack" ]; then
  yarn install
fi

# this follows the jQuery release technique. derived from: https://stackoverflow.com/a/50974956
# this is temporary until we migrate to the MuseumofModernArt GH org, and can make use of npm registries

# GH releases
git checkout master
git checkout --detach
yarn build
git add -f dist/*
yarn version --no-git-tag-version --no-commit-hooks --new-version $1
git add package.json
git commit -m $1
git tag v$1
git push --tags
git checkout master

# NPM releases
yarn version --no-git-tag-version --no-commit-hooks --new-version $1
git add package.json
git commit -m $1
git push
npm publish
