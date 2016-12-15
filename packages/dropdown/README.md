# element-dropdown
> A element-dropdown component for Vue.js.

## Demo
http://element-component.github.io/element-dropdown

## Installation
```shell
npm i element-dropdown -D
```

## Usage
```javascript
import Vue from 'vue'
import ElDropdown from 'element-dropdown'
import 'element-theme-default/dist/dropdown.css'

Vue.use(ElDropdown)
```

or

```javascript
import Vue from 'vue'
import { ElDropdown } from 'element-dropdown'
import { ElDropdownMenu } from 'element-dropdown'
import { ElDropdownItem } from 'element-dropdown'

Vue.component('el-dropdown', ElDropdown)
Vue.component('el-dropdown-menu', ElDropdownMenu)
Vue.component('el-dropdown-item', ElDropdownItem)
```

### Dropdown Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type          | 菜单按钮类型，同 Button 组件(只在`split-button`为 true 的情况下有效)   | string  |          —             |    —     |
| size          | 菜单按钮尺寸，同 Button 组件(只在`split-button`为 true 的情况下有效)     | string          | — | — |
| split-button  | 下拉触发元素呈现为按钮组    | boolean  |    —  |  false |
| menu-align    | 菜单水平对齐方向     | string          | start, end  | end |
| trigger       | 触发下拉的行为     | string          | hover, click  | hover |

### Dropdown Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click  | `split-button` 为 true 时，点击左侧按钮的回调 | — |
| command  | 点击菜单项触发的事件回调 | dropdown-item 的指令 |

### Dropdown Menu Item Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| command       | 指令     | string          | — | — |
| disabled      | 禁用     | boolean          | — | false |
| divided       | 显示分割线     | boolean          | — | false |

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
