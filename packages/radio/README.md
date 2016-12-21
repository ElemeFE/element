# element-radio
> A element-radio component for Vue.js.

## Demo
http://element-component.github.io/element-radio

## Installation
```shell
npm i element-radio -D
```

## Usage
```javascript
import Vue from 'vue'
import ElRadio from 'element-radio'
import 'element-theme-default/dist/radio.css'

Vue.use(ElRadio)
```

or

```javascript
import Vue from 'vue'
import { ElRadio } from 'element-radio'
import { RadioButton } from 'element-radio'
import { RadioGroup } from 'element-radio'

Vue.component('el-radio', ElRadio)
Vue.component('el-radio-button', RadioButton)
Vue.component('el-radio-group', RadioGroup)
```


## Radio Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | Radio 的 value   | string,number    |       —        |      —   |
| disabled  | 是否禁用    | boolean   | — | false   |
| name | 原生 name 属性 | string    |      —         |     —    |

## Radio-group Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | Radio 按钮组尺寸   | string  | large, small  |    —     |

## Radio-group Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |

## Radio-button Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | Radio 的 value  | string,number  |        —       |     —    |
| disabled  | 是否禁用    | boolean   | — | false   |
| fill  | 按钮激活时的填充色和边框色    | string   | — | #20a0ff   |
| text-color  | 按钮激活时的文本颜色    | string   | — | #ffffff   |

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
