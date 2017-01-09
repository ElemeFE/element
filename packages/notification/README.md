# element-notification
> A element-notification component for Vue.js.

## Demo
http://element-component.github.io/element-notification

## Installation
```shell
npm i element-notification -D
```

## Usage
```javascript
import Vue from 'vue'
import ElNotification from 'element-notification'
import 'element-theme-default/dist/notification.css'

Vue.use(ElNotification)
```

### 全局方法

Element 为 `Vue.prototype` 添加了全局方法 `$notify`。因此在 vue instance 中可以采用本页面中的方式调用 Notification。

### 单独引用

单独引入 Notification：

```javascript
import { Notification } from 'element-ui';
```

此时调用方法为 `Notification(options)`。我们也为每个 type 定义了各自的方法，如 `Notification.success(options)`。

### Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | string | — | — |
| message | 说明文字 | string | — | — |
| type | 主题样式，如果不在可选值内将被忽略 | string | success/warning/info/error | — |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | — | 4500 |
| onClose | 关闭时的回调函数 | function | — | — |
| offset | 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量 | number | — | 0 |

### 方法
调用 `Notification` 或 `this.$notify` 会返回当前 Notification 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。
| 方法名 | 说明 |
| ---- | ---- |
| close | 关闭当前的 Notification |

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
