#!/bin/bash
set -e

if [ ! -f "./node_modules/.bin/webpack" ]; then
  yarn install
fi

# this follows the jQuery release technique. derived from: https://stackoverflow.com/a/50974956
# this is temporary until we migrate to the MuseumofModernArt GH org, and can make use of npm registries

git checkout master
git checkout --detach
yarn build
git add -f dist/*
git commit -m $1
git tag v$1
git push --tags
git checkout master
