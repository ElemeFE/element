# element-rate
> A element-rate component for Vue.js.

## Demo
http://element-component.github.io/element-rate

## Installation
```shell
npm i element-rate -D
```

## Usage
```javascript
import Vue from 'vue'
import ElRate from 'element-rate'
import 'element-theme-default/dist/rate.css'

Vue.use(ElRate)
```

or

```javascript
import Vue from 'vue'
import ElRate from 'element-rate'

Vue.component('el-rate', ElRate)
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| max | 最大分值 | number | — | 5 |
| disabled | 是否为只读 | boolean | — | false |
| allow-half | 是否允许半选 | boolean | — | false |
| low-threshold | 低分和中等分数的界限值，值本身被划分在低分中 | number | — | 2 |
| high-threshold | 高分和中等分数的界限值，值本身被划分在高分中 | number | — | 4 |
| colors | icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色 | array | — | ['#F7BA2A', '#F7BA2A', '#F7BA2A'] |
| void-color | 未选中 icon 的颜色 | string | — | #C6D1DE |
| disabled-void-color | 只读时未选中 icon 的颜色 | string | — | #EFF2F7 |
| icon-classes | icon 的类名数组，共有 3 个元素，为 3 个分段所对应的类名 | array | — | ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'] |
| void-icon-class | 未选中 icon 的类名 | string | — | el-icon-star-off |
| disabled-void-icon-class | 只读时未选中 icon 的类名 | string | — | el-icon-star-on |
| show-text | 是否显示辅助文字 | boolean | — | false |
| text-color | 辅助文字的颜色 | string | — | 1F2D3D |
| texts | 辅助文字数组 | array | — | ['极差', '失望', '一般', '满意', '惊喜'] |
| text-template | 只读时的辅助文字模板 | string | — | {value} |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 分值改变时触发 | 改变后的分值 |


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
