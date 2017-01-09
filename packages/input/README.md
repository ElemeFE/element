# element-input
> A element-input component for Vue.js.

# Demo
http://element-component.github.io/element-input

# Installation
```shell
npm i element-input -D
```

# Usage
```javascript
import Vue from 'vue'
import ElInput from 'element-input'
import 'element-theme-default/dist/input.css'

Vue.use(ElInput)
```

or

```javascript
import Vue from 'vue'
import ElInput from 'element-input'

Vue.component('el-input', ElInput)
```

### Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type         | 类型   | string  | text/textarea | text |
| value         | 绑定值           | string, number  | — | — |
| maxlength     | 最大输入长度      | number          |  —  | — |
| minlength     | 最小输入长度      | number          | — | — |
| placeholder   | 输入框占位文本    | string          | — | — |
| disabled      | 禁用            | boolean         | — | false   |
| size          | 输入框尺寸，只在 `type!="textarea"` 时有效      | string          | large, small, mini  | — |
| icon          | 输入框尾部图标    | string          | — | — |
| rows          | 输入框行数，只对 `type="textarea"` 有效  |  number | — |  2   |
| autosize      | 自适应内容高度，只对 `type="textarea"` 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }  |  boolean/object | — |  false   |
| auto-complete | 原生属性，自动补全 | string | on, off | off |
| name | 原生属性 | string | - | -|
| max | 原生属性，设置最大值 | * | - | - |
| min | 原生属性，设置最小值 | * | - | - |
| autofocus | 原生属性，自动获取焦点 | boolean | true, false | false |
| form | 原生属性 | string | - | - |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| click | 点击 Input 内的图标时触发 | event |
| blur | 在 Input 失去焦点时触发 | event |
| focus | 在 Input 或得焦点时触发 | event |

# Development
```shell
make dev

# test
make test

# build
make build
```

# License
[MIT](https://opensource.org/licenses/MIT)
