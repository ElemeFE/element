# element-message-box
> A element-message-box component for Vue.js.

## Demo
http://element-component.github.io/element-message-box

## Installation
```shell
npm i element-message-box -D
```

## Usage
```javascript
import Vue from 'vue'
import ElMessageBox from 'element-message-box'
import 'element-theme-default/dist/message.css'

Vue.use(ElMessageBox)
```

### 全局方法

Element 为 Vue.prototype 添加了如下全局方法：$msgbox, $alert, $confirm 和 $prompt。因此在 vue instance 中可以采用本页面中的方式调用 `MessageBox`。

### 单独引用

单独引入 `MessageBox`：

```javascript
import { MessageBox } from 'element-ui';
```

对应于上述四个全局方法的调用方法依次为：MessageBox, MessageBox.alert, MessageBox.confirm 和 MessageBox.prompt。

### Options

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | MessageBox 标题 | string | — | — |
| message | MessageBox 消息正文内容 | string | — | — |
| type | 消息类型，用于显示图标 | string | success/info/warning/error | — |
| customClass | MessageBox 的自定义类名 | string | — | — |
| callback | 若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调 | function(action)，action 的值为'confirm'或'cancel' | — | — |
| lockScroll | 是否在 MessageBox 出现时将 body 滚动锁定 | boolean | — | true |
| showCancelButton | 是否显示取消按钮 | boolean | — | false（以 confirm 和 prompt 方式调用时为 true） |
| showConfirmButton | 是否显示确定按钮 | boolean | — | true |
| cancelButtonText | 取消按钮的文本内容 | string | — | 取消 |
| confirmButtonText | 确定按钮的文本内容 | string | — | 确定 |
| cancelButtonClass | 取消按钮的自定义类名 | string | — | — |
| confirmButtonClass | 确定按钮的自定义类名 | string | — | — |
| closeOnClickModal | 是否可通过点击遮罩关闭 MessageBox | boolean | — | true（以 alert 方式调用时为 false） |
| closeOnPressEscape | 是否可通过按下 ESC 键关闭 MessageBox | boolean | — | false |
| showInput | 是否显示输入框 | boolean | — | false（以 prompt 方式调用时为 true）|
| inputPlaceholder | 输入框的占位符 | string | — | — |
| inputPattern | 输入框的校验表达式 | regexp | — | — |
| inputValidator | 输入框的校验函数。可以返回布尔值或字符串，若返回一个字符串, 则返回结果会被赋值给 inputErrorMessage | function | — | — |
| inputErrorMessage | 校验未通过时的提示文本 | string | — | 输入的数据不合法! |

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
