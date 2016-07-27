# el-radio
> A el-radio component for Vue.js.

## Demo
http://element-component.github.io/el-radio

## Installation
```shell
npm i el-radio -D
```

## Usage
```javascript
import Vue from 'vue'
import ElRadio from 'el-radio'
import 'element-theme-default/dist/radio.css'

Vue.use(ElRadio)
```

or

```javascript
import Vue from 'vue'
import { ElRadio } from 'el-radio'

Vue.component('el-radio', ElRadio)
```


## Options
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| model     | 绑定值   | string  |               |         |
| value     | 真实值   | string    |               |         |
| label     | 显示值，默认显示 value   | string    |               |         |
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
