## element-input-number
> A element-input-number component for Vue.js.

## Demo
http://element-component.github.io/element-input-number

## Installation
```shell
npm i element-input-number -D
```

## Usage
```javascript
import Vue from 'vue'
import ElInputNumber from 'element-input-number'
import 'element-theme-default/dist/input-number.css'

Vue.use(ElInputNumber)
```

or

```javascript
import Vue from 'vue'
import ElInputNumber from 'element-input-number'

Vue.component('el-input-number', ElInputNumber)
```

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|----------|-------------- |----------|--------------------------------  |-------- |
| value    | 绑定值         | number | — | — |
| min      | 设置计数器允许的最小值 | number | — | 0 |
| max      | 设置计数器允许的最大值 | number | — | Infinity |
| step     | 计数器步长           | number   | — | 1 |
| size     | 计数器尺寸           | string   | large, small | — |
| disabled | 是否禁用计数器        | boolean | — | false |
| controls | 是否使用控制按钮        | boolean | — | true |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 绑定值被改变时触发 | 最后变更的值 |

## Development
```shell
make dev

## test
make test

## build
make build
```

## License
[MIT](https://opensource.org/licenses/MIT)
