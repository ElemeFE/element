# element-menu
> A element-menu component for Vue.js.

## Demo
http://element-component.github.io/element-menu

## Installation
```shell
npm i element-menu -D
```

## Usage
```javascript
import Vue from 'vue'
import ElMenu from 'element-menu'
import 'element-theme-default/dist/menu.css'

Vue.use(ElMenu)
```

or

```javascript
import Vue from 'vue'
import {
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElMenuItemGroup
} from 'element-menu'

Vue.component('el-menu', ElMenu)
Vue.component('el-menu', ElMenuItem)
Vue.component('el-menu', ElSubmenu)
Vue.component('el-menu', ElMenuItemGroup)
```


### Menu Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| mode     | 模式   | string  |   horizontal,vertical   | vertical |
| theme     | 主题色   | string    | light,dark | light |
| default-active | 当前激活菜单的 index | string    | — | — |
| default-openeds | 当前打开的submenu的 key 数组 | Array    | — | — |
| unique-opened  | 是否只保持一个子菜单的展开 | boolean   | — | false   |
| menu-trigger  | 子菜单打开的触发方式(只在 mode 为 horizontal 时有效) | string   | — | hover   |
| router  | 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 | boolean   | — | false   |

### Menu Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| select  | 菜单激活回调 | index: 选中菜单项的 indexPath: 选中菜单项的 index path  |
| open  | SubMenu 展开的回调 | index: 打开的 subMenu 的 index， indexPath: 打开的 subMenu 的 index path  |
| close  | SubMenu 收起的回调 | index: 收起的 subMenu 的 index， indexPath: 收起的 subMenu 的 index path  |

### SubMenu Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| index     | 唯一标志   | string  | — | — |

### Menu-Item Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| index     | 唯一标志   | string  | — | — |
| route     | Vue Router 路径对象 | Object | — | — |

### Menu-Group Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | 分组标题   | string  | — | — |

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
