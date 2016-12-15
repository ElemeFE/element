# el-autocomplete
> A element-autocomplete component for Vue.js.

## Demo
http://element-component.github.io/element-autocomplete

## Installation
```shell
npm i element-autocomplete -D
```

## Usage
```javascript
import Vue from 'vue'
import ElAutocomplete from 'element-autocomplete'
import 'element-theme-default/dist/autocomplete.css'

Vue.use(ElAutocomplete)
```

or

```javascript
import Vue from 'vue'
import ElAutocomplete from 'element-autocomplete'

Vue.component('el-autocomplete', ElAutocomplete)
```

### Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| placeholder   | 输入框占位文本   | string          | — | — |
| disabled      | 禁用            | boolean         | — | false   |
| value         | 必填值输入绑定值   | string  | — | — |
| custom-item  | 通过该参数指定自定义的输入建议列表项的组件名 | string  | — | — |
| fetch-suggestions | 返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它  | Function(queryString, callback)  | — | — |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| select | 点击选中建议项时触发 | 选中建议项 |

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
