# Element [![Build Status](https://api.travis-ci.org/ElemeFE/Element.svg)](https://travis-ci.org/ElemeFE/Element) [![npm package](https://img.shields.io/npm/v/element-ui.svg)](https://www.npmjs.org/package/element-ui) [![NPM downloads](http://img.shields.io/npm/dm/element-ui.svg)](https://npmjs.org/package/element-ui)
> Desktop UI elements for Vue.js 2.0.

## Docs

Coming soon

## Demo
Demo will come with the documentation. Here is a preview of what a page based on Element looks like:

<img src="./examples/assets/images/element-demo.jpeg" width = "100%" />

## Usages
```shell
npm install element-ui@next
```

## Quick Start
use [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)

``` javascript
import Vue from 'vue'
import Element from 'element-ui'

Vue.use(Element)

// or
import {
  Select,
  Button
  // ...
} from 'element-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```

(roughly) to

``` javascript
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)

// or
import Select from 'element-ui/lib/select'
import Select from 'element-ui/lib/theme-default/select.css'
import Button from 'element-ui/lib/button'
import Button from 'element-ui/lib/theme-default/button.css'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```

## babel-plugin-component
.babelrc
```json
{
  "plugins": ["xxx", ["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-default"
    }
  ]]]
}
```

## development
```shell
# development => install packages -> build icon etc. -> run webpack
$ npm run dev

# Recommended use `npminstall` to install packages, it is so fast
$ npm i npminstall -g
$ npminstall

# build => build all component
$ npm run dist
```

## Changelog
Details changes for each release are documented in the [release notes](https://github.com/ElemeFE/element/releases).

## Contribution
Please make sure to read the [Contributing Guide](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.md) before making a pull request.

## LICENSE
MIT


