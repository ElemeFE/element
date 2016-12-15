# element-card
> A element-card component for Vue.js.

## Demo
http://element-component.github.io/element-card

## Installation
```shell
npm i element-card -D
```

## Usage
```javascript
import Vue from 'vue'
import ElCard from 'element-card'
import 'element-theme-default/dist/card.css'

Vue.use(ElCard)
```

or

```javascript
import Vue from 'vue'
import ElCard from 'element-card'

Vue.component('el-card', ElCard)
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| header | 设置 header，也可以通过 `slot#header` 传入 DOM | string| — | — |
| body-style | 设置 body 的样式| object| — | { padding: '20px' } |

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
