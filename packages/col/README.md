# element-col
> A element-col component for Vue.js.

## Demo
http://element-component.github.io/element-col

## Installation
```shell
npm i element-col -D
```

## Usage
```javascript
import Vue from 'vue'
import ElCol from 'element-col'
import 'element-theme-default/dist/col.css'

Vue.use(ElCol)
```

or

```javascript
import Vue from 'vue'
import ElCol from 'element-col'

Vue.component('el-col', ElCol)
```

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| span | 栅格占据的列数 | number | — | — |
| offset | 栅格左侧的间隔格数 | number | — | 0 |
| push |  栅格向右移动格数 | number | — | 0 |
| pull |  栅格向左移动格数 | number | — | 0 |
| xs | `<768px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| sm | `≥768px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| md | `≥992` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| lg | `≥1200` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |

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
