# element-badge
> A element-badge component for Vue.js.

## Demo
http://element-component.github.io/element-badge

## Installation
```shell
npm i element-badge -D
```

## Usage
```javascript
import Vue from 'vue'
import ElBadge from 'element-badge'
import 'element-theme-default/dist/badge.css'

Vue.use(ElBadge)
```

or

```javascript
import Vue from 'vue'
import ElBadge from 'element-badge'

Vue.component('el-badge', ElBadge)
```

### Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value          | 显示值      | string, number          |          —             |    —     |
| max          |  最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型    | number  |         —              |     —    |
| is-dot       | 小圆点    | boolean  |  —  |  false |

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
