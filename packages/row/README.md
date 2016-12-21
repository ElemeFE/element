# element-row
> A element-row component for Vue.js.

## Demo
http://element-component.github.io/element-row

## Installation
```shell
npm i element-row -D
```

## Usage
```javascript
import Vue from 'vue'
import ElRow from 'element-row'
import 'element-theme-default/dist/row.css'

Vue.use(ElRow)
```

or

```javascript
import Vue from 'vue'
import ElRow from 'element-row'

Vue.component('el-row', ElRow)
```

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| gutter | 栅格间隔 | number | — | 0 |
| type | 布局模式，可选 flex，现代浏览器下有效 | string | — | — |
| justify | flex 布局下的水平排列方式 | string | start/end/center/space-around/space-between | start |
| align | flex 布局下的垂直排列方式 | string | top/middle/bottom | top |

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
