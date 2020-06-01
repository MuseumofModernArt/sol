# MoMA Style

# Development
To install, make sure you have homebrew installed, and then run `yarn install-sass` to install Dart Sass.

To build for development, run `yarn run build-dev`. If you want to watch, then run `yarn run watch`.

To make build for distribution, run `yarn run build`. This builds the css and the compressed css.

To link with `moma-go`, in this folder, run `yarn link`. In `moma-go`, run `yarn link moma-style`. This creates a [symlink](https://classic.yarnpkg.com/en/docs/cli/link/) to your local version.

# Releases

Before creating a release, run `yarn build` to build the css files.

Then use either `git` to create a release tag, or GitHub.

To update, `yarn upgrade moma-style`. To update to a specific version, run `yarn upgrade moma-style#[version]`. More on semantic versioning [here](https://classic.yarnpkg.com/en/docs/dependency-versions#toc-semantic-versioning).

# Usage
You should just get `dist/atoms.css` or `dist/atoms.min.css`. Fonts are also provided in the `dist` folder.

To add to your package manager, such as yarn, do `yarn add github:MuseumofModernArt/moma-style`. If you would like to lock to a specific version, append `#v1.0.0` to the end. More on all this [here](http://thecodebarbarian.com/github-is-my-favorite-private-npm-registry.html).

# Roadmap
- v1.0 Initial release with just atoms.
- v1.1 Any atoms changes that make this independent of .org.
- v1.2 Pull in high priority js.
- v1.3 Pull in lower priority js that will need to be rewritten in order to work.
- v1.4 New features such as bad browser banner in js.
