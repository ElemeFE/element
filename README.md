# TM-Ui - Tm-consulting VueJs components

[![CircleCI](https://circleci.com/gh/tmconsulting/tmc24-components/tree/dev.svg?style=svg)](https://circleci.com/gh/tmconsulting/tmc24-components/tree/dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
> A Vue.js 2.0 UI Toolkit for Tm-consulting.

## Special Thanks
TM-Ui is a based on [ElementUI](https://github.com/ElemeFE/element) UI Toolkit. Special thanks to our mastermind!

## Links
- [Homepage and documentation](http://element.eleme.io/#/en-US)
- [FAQ](./FAQ.md)
- [Customize theme](http://element.eleme.io/#/en-US/component/custom-theme)
- [Preview and generate theme online](https://elementui.github.io/theme-chalk-preview)
- [Atom helper](https://github.com/ElemeFE/element-helper)
- Starter kit
  - [element-starter](https://github.com/ElementUI/element-starter)
  - [element-in-laravel-starter](https://github.com/ElementUI/element-in-laravel-starter)

## Install
```shell
npm install tmconsulting-ui -S
```

## Quick Start
``` javascript
import Vue from 'vue'
import TMui from 'tmconsulting-ui'

Vue.use(TMui)

// or
import {
  Select,
  Button
  // ...
} from 'tmconsulting-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```
For more information, please refer to [Quick Start](http://element.eleme.io/#/en-US/component/quickstart) in our documentation.

## Browser Support
Modern browsers and Internet Explorer 10+.

## Changelog
Detailed changes for each release are documented in the [release notes](https://github.com/tmconsulting/tmc24-components/releases).

## FAQ
We have collected some [frequently asked questions](https://github.com/tmconsulting/tmc24-components/blob/dev/FAQ.md). Before reporting an issue, please search if the FAQ has the answer to your problem.

## Contribution
Please make sure to read the contributing [guide](https://github.com/tmconsulting/tmc24-components/blob/dev/.github/CONTRIBUTING.en-US.md) before making a pull request.

## LICENSE
[MIT](LICENSE)
