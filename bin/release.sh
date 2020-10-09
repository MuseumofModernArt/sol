#!/bin/bash
set -e

if [ ! -f "./node_modules/.bin/webpack" ]; then
  yarn install
fi

git checkout --detach
yarn build
git commit -m $1
git tag v$1
git push --tags
git checkout master
# continue development
