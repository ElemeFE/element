# Element UI Contributing Guide

First of all, it is so grateful for your usage of Element UI.

Element UI is a Vue 2.0 based component library for developers, designers and product managers, with a set of design resources.

When contributing to this repository, please read guides below.

## Issue Guide

- Issue is only used for bug, feature, and things about design, otherwise it will be closed directly. Any questions during your usage can be asked in Slack or [Gitter](https://gitter.im/ElemeFE/element).

- You should search related contents before commit one new issue to reduce duplicated issues.

- Please provide the versions of `Element UI` and `Vue` you are using, infos about os and browsers are required too. It is better for you to reproduce your situations in [JSFiddle](https://jsfiddle.net/).

## Pull Request Guide

- Please create your own fork, instead of creating branch in the repository directly.

- Information about commits should format like `[Component Name]: Info about commit.` (e.g. `Button: Fix bug xxx`)

- **DO NOT** commit files inside `lib`.

- Make sure `npm run dist` can output the correct files.

- Considering that the need of compatibility and file size, we only include `preset-2015` in `babel`. Things like `Array.prototype.find` and `Object.assign` in `ES2015` are not recommended. You can import 3rd `polyfill` if needed.

- Use `reabse` before `pull request` to make sure a clean `commit`.

- Make sure `pull request` to `dev` branch, instead of `master` branch.

- You should write descriptions in `pull request` when fixing bugs.

- Two members are required when merging codes: The first one review codes and approve the merge, then the second one review codes again and merge it.

## Prerequisites
`Node.js 4+` and `NPM 3+` are required.
```shell
git clone git@github.com:ElemeFE/element.git
npm run dev

# open http://localhost:8085
```

For popele in China, it is a better choice to use [yarn](https://github.com/yarnpkg/yarn) with taobao registry.
```shell
npm i yarn -g
yarn config set registry https://registry.npm.taobao.org
yarn
npm run dev

# open http://localhost:8085
```

To build:

```shell
npm run dist
```

## Component Develop Guide
- Use `make new` to create project directory about component, which include test codes, entry file, config of cooking, documentation and `package.json`.
- Refer to `Button` to create nested component.
- Refer to `Select` to create component depends on other coponents.

## Style Guide
All JavaScript must adhere to  [ESLint](https://github.com/ElemeFE/eslint-config-elemefe).
