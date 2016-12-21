# element-button
> A element-button component for Vue.js.

## Demo
http://element-component.github.io/element-button

## Installation
```shell
npm i element-button -D
```

## Usage
```javascript
import Vue from 'vue'
import ElButton from 'element-button'
import 'element-theme-default/dist/button.css'

Vue.use(ElButton)
```

or

```javascript
import Vue from 'vue'
import { ElButton } from 'element-button'
import { ElButtonGroup } from 'element-button'

Vue.component('el-button', ElButton)
Vue.component('el-button-group', ElButtonGroup)
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   large,small,mini            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info,text |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| loading     | 是否加载中状态   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button,submit,reset | button |

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
