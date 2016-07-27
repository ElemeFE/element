# el-checkbox
> A el-checkbox component for Vue.js.

## Demo
http://element-component.github.io/el-checkbox

## Installation
```shell
npm i el-checkbox -D
```

## Usage
```javascript
import Vue from 'vue'
import ElCheckbox from 'el-checkbox'
import 'element-theme-default/dist/checkbox.css'

Vue.use(ElCheckbox)
```

or

```javascript
import Vue from 'vue'
import { ElCheckbox } from 'el-checkbox'

Vue.component('el-checkbox', ElCheckbox)
```


## Options
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| model     | 绑定值   | string[]  |               |         |
| value     | 真实值   | string    |               |         |
| label     | 显示值，不填则显示 value   | string    |               |         |
| disabled  | 禁用    | boolean   | true, false   | false   |

## Development
```shell
make dev

## test
make test

## build
make build
```

# License
[MIT](https://opensource.org/licenses/MIT)
