<p align="center">
  <img src="https://cdn.rawgit.com/ElemeFE/element/dev/element_logo.svg">
</p>

[![Build Status](https://badgen.net/travis/FEMessage/element/master)](https://travis-ci.com/FEMessage/element)
[![NPM Download](https://badgen.net/npm/dm/@femessage/element-ui)](https://www.npmjs.com/package/@femessage/element-ui)
[![NPM Version](https://badgen.net/npm/v/@femessage/element-ui)](https://www.npmjs.com/package/@femessage/element-ui)
[![NPM License](https://badgen.net/npm/license/@femessage/element-ui)](https://github.com/FEMessage/element/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/FEMessage/element/pulls)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

---

## Install
```shell
npm install @femessage/element-ui -S

#or
yarn add @femessage/element-ui
```

## Quick Start
``` javascript
import Vue from 'vue'
import Element from '@femessage/element-ui'

Vue.use(Element)

// or
import {
  Select,
  Button
  // ...
} from '@femessage/element-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```
For more information, please refer to [Quick Start](http://femessgae.github.io/#/zh-CN/component/quickstart) in our documentation.

## Generate Theme
```sh
# fork this repository

git clone https://github/{ user || owner }/element.git

# remember: if want to update your component and its css, must merge latest only-component branch into your repository
git checkout -b only-component new-theme

# modify packages/theme-chalk/src/common/var.scss

# modify package name in packages/theme-chalk/package.json

sh ./publish-theme.sh

# now a new theme publish to npm for your own
```

The reason to checkout from branch `only-component`, can be found in [Contributing Guide](https://github.com/femessage/element/blob/master/.github/CONTRIBUTING.zh-CN.md)

## Development
```sh
# install dependence
yarn bootstrap

# generate files for examples site
yarn build:file

# generate theme files
yarn build:theme

# generate utils files
yarn build:utils

# generate files about locale
yarn build:umd

# clean files from yarn dist
yarn clean

# bundle examples site
yarn deploy:build

# bundle extension files
yarn deploy:extension

# extension local dev
yarn dev:extension

# local dev and preview examples site
yarn dev

# local dev single component
yarn dev:play

# bundle all lib
yarn dist

# generate i18n files
yarn i18n

# using eslint to check code style
yarn lint

# run unit test
yarn test
```

## Contribution
Please make sure to read the [Contributing Guide](https://github.com/femessage/element/blob/master/.github/CONTRIBUTING.zh-CN.md) before making a pull request.

## Browser Support
Modern browsers and Internet Explorer 10+.

## Links
- [Documentation](https://femessage.github.io/element)
- [ChangeLog](https://github.com/FEMessage/element/releases)

## LICENSE
[MIT](LICENSE)
