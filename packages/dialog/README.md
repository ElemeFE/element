# element-dialog
> A element-dialog component for Vue.js.

## Demo
http://element-component.github.io/element-dialog

## Installation
```shell
npm i element-dialog -D
```

## Usage
```javascript
import Vue from 'vue'
import ElDialog from 'element-dialog'
import 'element-theme-default'

Vue.use(ElDialog)
```

or

```javascript
import Vue from 'vue'
import ElDialog from 'element-dialog'

Vue.component('el-dialog', ElDialog)
```

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title     | Dialog 的标题 | string    | —                               | —      |
| size      | Dialog 的大小 | string    | tiny/small/large/full | small |
| top       | Dialog CSS 中的 top 值（仅在 size 不为 full 时有效） | string    | —                       | 15%     |
| modal     | 是否需要遮罩层   | boolean   | — | true |
| lock-scroll | 是否在 Dialog 出现时将 body 滚动锁定 | boolean | — | true |
| custom-class      | Dialog 的自定义类名 | string    | — | — |
| close-on-click-modal | 是否可以通过点击 modal 关闭 Dialog | boolean    | — | true |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog | boolean    | — | true |
| show-close | 是否显示关闭按钮 | boolean    | — | true |

### Slot
| name | 说明 |
|------|--------|
| — | Dialog 的内容 |
| footer | Dialog 按钮操作区的内容 |

### 方法
每个 `el-dialog` 实例都暴露了如下方法，用于在不显式改变 `v-model` 值的情况下打开 / 关闭实例：
| 方法名 | 说明 |
|------|--------|
| open | 打开当前实例 |
| close | 关闭当前实例 |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| close  | Dialog 关闭的回调 | — |
| open  | Dialog 打开的回调 | — |

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
