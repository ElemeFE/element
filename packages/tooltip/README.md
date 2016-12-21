# element-tooltip
> A element-tooltip component for Vue.js.

## Demo
http://element-component.github.io/element-tooltip

## Installation
```shell
npm i element-tooltip -D
```

## Usage
```javascript
import Vue from 'vue'
import ElTooltip from 'element-tooltip'
import 'element-theme-default/dist/tooltip.css'

Vue.use(ElTooltip)
```

or

```javascript
import Vue from 'vue'
import ElTooltip from 'element-tooltip'

Vue.component('el-tooltip', ElTooltip)
```

### Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  effect        |  默认提供的主题  | String            | dark/light | dark  |
|  content        |  显示的内容，也可以通过 `slot#content` 传入 DOM  | String            | — | — |
|  placement        |  Tooltip 的出现位置  | String           |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |  bottom |
|  value(v-model) |  状态是否可见  | Boolean           | — |  false |
|  disabled       |  Tooltip 是否可用  | Boolean           | — |  false |
|  offset        |  出现位置的偏移量  | Number           | — |  0 |
|  transition     |  定义渐变动画      | String             | — | `fade-in-linear` |
|  visible-arrow   |  是否显示 Tooltip 箭头，更多参数可见[Vue-popper](https://github.com/element-component/vue-popper) | Boolean | — | true |
|  options        | [popper.js](https://popper.js.org/documentation.html) 的参数 | Object            | 参考 [popper.js](https://popper.js.org/documentation.html) 文档 | `{ boundariesElement: 'body', gpuAcceleration: false }` |
| openDelay | 延迟出现，单位毫秒 | Number | — | 0 |
| manual | 手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效 | Boolean | — | false |

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
