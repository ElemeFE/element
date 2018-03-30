# Element UI Contributing Guide

Hi! Thank you for choosing Element UI.

Element UI is a Vue 2.0 based component library for developers, designers and product managers.

We are excited that you are interested in contributing to Element. Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.

## Issue Guidelines

- Issues are exclusively for bug reports, feature requests and design-related topics. Other questions may be closed directly. If any questions come up when you are using Element, please hit [Gitter](https://gitter.im/element-en/Lobby) for help.

- Before submitting an issue, please check if similar problems have already been issued.

- Please specify which version of `Element` and `Vue` you are using, and provide OS and browser information. [JSFiddle](https://jsfiddle.net/) is recommended to build a live demo so that your issue can be reproduced clearly.

## Pull Request Guidelines

- Fork this repository to your own account. Do not create branches here.

- Commit info should be formatted as `[Component Name]: Info about commit.` (e.g. `Button: Fix xxx bug`)

- **DO NOT** include files inside `lib` directory.

- Make sure that running `npm run dist` outputs the correct files.

- For the sake of compatibility and file size, our babel configuration only imported `preset-2015`, so APIs like `Array.prototype.find` and `Object.assign` in `ES2015` are not recommended. You can import third party polyfills if necessary.

- Rebase before creating a PR to keep commit history clear.

- Make sure PRs are created to `dev` branch instead of `master` branch.

- If your PR fixes a bug, please provide a description about the related bug.

- Merging a PR takes two maintainers: one approves the changes after reviewing, and then the other reviews and merges.

## Prerequisites
`Node.js 4+`, `yarn` and `npm 3+` are required. Note: we use yarn to lock dependency versions, so you should install dependencies using `yarn` instead of `npm install`.
```shell
git clone git@github.com:ElemeFE/element.git
npm run dev

# open http://localhost:8085
```

To build:

```shell
npm run dist
```

## Component Developing Guidelines
- Run `make new <component-name>` to create project directory for a new component. Test codes, entry file, cooking config, documentation and `package.json` are included.
- Refer to `Button` for nested components.
- Refer to `Select` for components that depend on other components.

## Code Style
Just comply with the [ESLint](https://github.com/ElemeFE/eslint-config-elemefe) configuration of [ElemeFE](https://github.com/elemefe).
