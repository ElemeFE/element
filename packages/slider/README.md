# element-slider
> A element-slider component for Vue.js.

## Demo
http://element-component.github.io/element-slider

## Installation
```shell
npm i element-slider -D
```

## Usage
```javascript
import Vue from 'vue'
import ElSlider from 'element-slider'
import 'element-theme-default/dist/slider.css'

Vue.use(ElSlider)
```

or

```javascript
import Vue from 'vue'
import ElSlider from 'element-slider'

Vue.component('el-slider', ElSlider)
```

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| min | 最小值 | number | — | 0 |
| max | 最大值 | number | — | 100 |
| disabled | 是否禁用 | boolean | — | false |
| step | 步长 | number | — | 1 |
| show-input | 是否显示输入框 | boolean | — | false |
| show-stops | 是否显示间断点 | boolean | — | false |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 值改变时触发 | 改变后的值 |

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
