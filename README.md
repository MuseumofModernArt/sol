# Sol

## Development
1. To install, make sure you have homebrew installed, and then run this install Dart Sass<br>
`yarn install-sass`

2. To build for development, run the first command. Or if you want to build and watch, use the second command<br>
`yarn run build-dev` or `yarn run watch`

3. To make build for distribution, run the following. This builds the css and the compressed css
`yarn run build`

To link with `moma-go`, in the project folder, run `yarn link`.
In `moma-go`, run `yarn link sol`. This creates a [symlink](https://classic.yarnpkg.com/en/docs/cli/link/) to your local version.

## Releases

To create a release, merge all PRs that will be part of it into `master`.

Then with `master` checked out, run `yarn release 1.0.0`, replacing 1.0.0 with the release version number.

Once the artifact files have been generated and the release has been tagged, go to Github and draft a new release, using the tag version that was created.

More on semantic versioning [here](https://classic.yarnpkg.com/en/docs/dependency-versions#toc-semantic-versioning).

## Usage
You should just get `dist/sol.css` or `dist/sol.min.css`. Fonts are also provided in the `dist` folder.

To add to your package manager, such as yarn, do `yarn add github:MuseumofModernArt/sol`. If you would like to lock to a specific version, append `#v1.0.0` to the end. More on all this [here](http://thecodebarbarian.com/github-is-my-favorite-private-npm-registry.html).

To update your version of the MoMA Style to the latest release, `yarn upgrade sol`. To update to a specific version, run `yarn upgrade sol#[version]`.
