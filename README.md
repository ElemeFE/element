# Element
> UI Elements for admin page.

## Docs

Comming soon

## Demo

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

Vue.component(Select.name, ElSelect)
Vue.component(Button.name, Button)
```

(roughly) to

``` javascript
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css';

Vue.use(Element)

// or
import Select from 'element-ui/lib/select';
import Select from 'element-ui/lib/theme-default/select.css';
import Button from 'element-ui/lib/button';
import Button from 'element-ui/lib/theme-default/button.css';

Vue.component(Select.name, ElSelect)
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

### Building Tool Installation

Element UI is built with [cooking](http://cookingjs.github.io/). So before running it you'll need to install [cooking](http://cookingjs.github.io/) globally.

```bash
$ npm install cooking -g
```

### Commands

```bash
$ make install                        ---  install dependencies
$ make dev                            ---  develop mode
$ make dist                           ---  compile the project
$ make dist-all                       ---  compile each component individually
```

## Changelog
Details changes for each release are documented in the [release notes](https://github.com/ElemeFE/element/releases).

## LICENSE
MIT

<!-- [![Build Status](https://api.travis-ci.org/ElemeFE/element-ui.svg)](https://travis-ci.org/ElemeFE/element-ui) [![npm package](https://img.shields.io/npm/v/element-ui.svg)](https://www.npmjs.org/package/element-ui) [![NPM downloads](http://img.shields.io/npm/dm/element-ui.svg)](https://npmjs.org/package/element-ui) -->

