# element-switch
> A element-switch component for Vue.js.

## Installation
```shell
npm i element-switch -D
```

## Usage
```javascript
import Vue from 'vue'
import ElSwitch from 'element-switch'
import 'element-theme-default'

Vue.use(ElSwitch)
```

or

```javascript
import Vue from 'vue'
import ElSwitch from 'element-switch'

Vue.component('el-switch', ElSwitch)
```

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| disabled  | 是否禁用    | boolean   | — | false   |
| width  | switch 的宽度（像素）    | number   | — | 58（有文字）/ 46（无文字） |
| on-icon-class  | switch 打开时所显示图标的类名，设置此项会忽略 `on-text`    | string   | — | — |
| off-icon-class  | switch 关闭时所显示图标的类名，设置此项会忽略 `off-text`    | string   | — | — |
| on-text  | switch 打开时的文字    | string   | — | ON |
| off-text  | switch 关闭时的文字    | string   | — | OFF |
| on-color  | switch 打开时的背景色    | string   | — | #20A0FF |
| off-color  | switch 关闭时的背景色    | string   | — | #C0CCDA |
| name  | switch 对应的 name 属性    | string   | — | — |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | switch 状态发生变化时的回调函数    | 新状态的布尔值 |

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
