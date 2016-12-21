# element-checkbox
> A element-checkbox component for Vue.js.

## Demo
http://element-component.github.io/element-checkbox

## Installation
```shell
npm i element-checkbox -D
```

## Usage
```javascript
import Vue from 'vue'
import ElCheckbox from 'element-checkbox'
import 'element-theme-default/dist/checkbox.css'

Vue.use(ElCheckbox)
```

or

```javascript
import Vue from 'vue'
import { ElCheckbox } from 'element-checkbox'
import { ElCheckboxGroup } from 'element-checkbox'

Vue.component('el-checkbox', ElCheckbox)
Vue.component('el-checkbox-group', ElCheckboxGroup)
```

### Checkbox Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效）| string    |       —        |     —    |
| true-label | 选中时的值   | string, number | — |     —    |
| false-label | 没有选中时的值   | string, number    |      —         |     —    |
| name | 原生 name 属性 | string    |      —         |     —    |
| disabled  | 按钮禁用    | boolean   |  — | false   |
| checked  | 当前是否勾选    | boolean   |  — | false   |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制    | boolean   |  — | false   |

### Checkbox-group Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | event 事件对象 |

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
