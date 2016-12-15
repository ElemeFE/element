# element-alert
> A element-alert component for Vue.js.

## Demo
http://element-component.github.io/el-alert

## Installation
```shell
npm i element-alert -D
```

## Usage
```javascript
import Vue from 'vue'
import ElAlert from 'element-alert'
import 'element-theme-default/dist/alert.css'

Vue.use(ElAlert)
```

or

```javascript
import Vue from 'vue'
import ElAlert from 'element-alert'

Vue.component('el-alert', ElAlert)
```

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| **title** | 标题，**必选参数** | string | — | — |
| type | 主题 | string | success/warning/info/error | info |
| description | 辅助性文字 | string | — | — |
| render-content | 内容区域的渲染函数，会覆盖 `description` | function(h) | — | — |
| closable | 是否可关闭 | boolean | — | true |
| close-text | 关闭按钮自定义文本 | string | — | — |
| show-icon | 是否显示图标 | boolean | — | false |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 关闭alert时触发的事件 | — |

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
