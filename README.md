# Element
[![Build Status](https://travis-ci.org/ElemeFE/element.svg?branch=master)](https://travis-ci.org/ElemeFE/element)
[![Coverage Status](https://coveralls.io/repos/github/ElemeFE/element/badge.svg?branch=master)](https://coveralls.io/github/ElemeFE/element?branch=master)
[![npm package](https://img.shields.io/npm/v/element-ui.svg)](https://www.npmjs.org/package/element-ui)
[![NPM downloads](http://img.shields.io/npm/dm/element-ui.svg)](https://npmjs.org/package/element-ui)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/element-ui@next/lib/index.js?compression=gzip&label=gzip%20size:%20JS)
![CSS gzip size](http://img.badgesize.io/https://unpkg.com/element-ui@next/lib/theme-default/index.css?compression=gzip&label=gzip%20size:%20CSS)
[![Join the chat at https://gitter.im/ElemeFE/element](https://badges.gitter.im/ElemeFE/element.svg)](https://gitter.im/ElemeFE/element?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Desktop UI elements for Vue.js 2.0.

## Links
- [Home Page](http://element.eleme.io/)
- [Docs](http://element.eleme.io/#/component)

## Install
```shell
npm install element-ui@next -S
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
import 'element-ui/lib/theme-default/select.css'
import Button from 'element-ui/lib/button'
import 'element-ui/lib/theme-default/button.css'

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

## Browser Support
Modern browsers and Internet Explorer 9+.

## Development
Skip this part if you just want to use Element.

For those who are interested in contributing to Element, please refer to our [contributing guide](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.md) to see how to run this project.

## Other links
- Starter Kit
 - [element-starter](https://github.com/ElementUI/element-starter)
 - [element-cooking-starter](https://github.com/ElementUI/element-cooking-starter)
 - [element-in-laravel-starter](https://github.com/ElementUI/element-in-laravel-starter)
- [Design resources](https://github.com/ElementUI/Resources)
- Boilerplate for bug reports
 - [CodePen](https://codepen.io/anon/pen/ozYpNA)
 - [JSFiddle](https://jsfiddle.net/gmve9d3p/)
- [Mint UI](https://github.com/ElemeFE/mint-ui) - Mobile UI elements for Vue.js

## Changelog
Detailed changes for each release are documented in the [release notes](https://github.com/ElemeFE/element/releases).

## FAQ
We have collected some [frequently asked questions](https://github.com/ElemeFE/element/blob/master/FAQ.md). Before reporting an issue, please search if the FAQ has the answer to your problem.

## Contribution
Please make sure to read the [Contributing Guide](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.md) before making a pull request.

## LICENSE
MIT
