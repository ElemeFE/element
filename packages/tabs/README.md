# element-tabs
> A element-tabs component for Vue.js.

## Demo
http://element-component.github.io/element-tabs

## Installation
```shell
npm i element-tabs -D
```

## Usage
```javascript
import Vue from 'vue'
import ElTabs from 'element-tabs'
import 'element-theme-default/dist/tabs.css'

Vue.use(ElTabs)
```

or

```javascript
import Vue from 'vue'
import { ElTabs } from 'element-tabs'
import { ElTabPane } from 'element-tabs'

Vue.component('el-tabs', ElTabs)
Vue.component('el-tab', ElTab)
```

### Tabs Attributes
| 参数       | 说明     | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 风格类型   | string   | card/border-card  |     —    |
| closable  | 标签是否可关闭   | boolean   | — |  false  |
| active-name  | 选中选项卡的 name  | string   |  —  |  第一个选项卡的 name |

### Tabs Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| tab-click  | tab 被选中的钩子 | 被选中的标签 tab 实例 |
| tab-remove  | tab 被删除的钩子  | 被删除的标签 tab 实例 |

### Tab-pane Attributes
| 参数       | 说明     | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 选项卡标题   | string   | — |    —     |
| label-content | 选项卡的标题的渲染 Function | Function(h) | - | - |
| disabled | 是否禁用 | boolean | - | false |
| name      | 与选项卡 activeName 对应的标识符，表示选项卡别名 | string | — | 该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1' |

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
