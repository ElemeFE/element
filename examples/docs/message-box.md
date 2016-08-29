<script>
  export default {
    methods: {
      open() {
        this.$alert('这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容', '消息');
      },

      open2() {
        this.$alert('操作失败, 请稍后重试', '提示', {
          type: 'error'
        });
      },

      open3() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          type: 'warning'
        }).then(() => {
          this.$notify({
            message: '删除成功!',
            type: 'success'
          });
        }).catch(() => {
          this.$notify({
            message: '已取消删除',
            type: 'info'
          });          
        });
      },

      open4() {
        this.$prompt('请输入邮箱', '提示', {
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$notify({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$notify({
            type: 'info',
            messgae: '取消输入'
          });       
        });
      },


      open5() {
        this.$msgbox({
          title: '消息',
          message: '这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容',
          showCancelButton: true
        }).then(action => {
          this.$notify({
            type: 'info',
            message: 'action: ' + action
          });
        });
      }

    }
  };
</script>
## Message box 信息提示
模拟系统的消息提示框而实现的一套摸态对话框组件，用于消息提示、成功提示、错误提示、询问信息

### 基础用法

MessageBox 组件提供了四种不同的样式来替代浏览器提供的`alert`等功能：`$msgbox`，`$alert`，`$confirm`以及`$prompt`。

在本页文档中一一介绍它们，首先看最简单的示例，我们使用`$alert`。

:::demo 它接收了两个参数，`message`和`title`。值得一提的是，窗口被关闭后，它会返回一个`Promise`对象便于进行后续操作的处理。

```html
<template>
  <el-button type="text" @click.native="open">打开 Alert</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$alert('这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容', '消息');
      }
    }
  }
</script>
```
:::

### 配置项

MessageBox 组件也拥有极高的定制性，我们可以传入`options`作为第三个参数，它是一个字面量对象。

:::demo 第二个参数`title`必须定义为`String`类型，如果是`Object`，会被理解为`options`。`type`字段表明消息类型，可以为`success`，`error`，`info`和`warning`，无效的设置将会被忽略。

```html
<template>
  <el-button type="text" @click.native="open2">打开 alert</el-button>
</template>

<script>
  export default {
    methods: {
      open2() {
        this.$alert('操作失败, 请稍后重试', '提示', {
          type: 'error'
        });
      },
    }
  }
</script>
```
:::

下面是一个 confirm 框。

:::demo 在这里我们用了`Promise`来处理后续响应。

```html
<template>
  <el-button type="text" @click.native="open3">打开 confirm</el-button>
</template>

<script>
  export default {
    methods: {
      open3() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          type: 'warning'
        }).then(() => {
          this.$notify({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$notify({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
    }
  }
</script>
```
:::

Prompt 框功能强大，可以处理简单的输入。

:::demo 可以用`inputPattern`字段自己规定匹配模式，或者用`inputValidator`规定校验函数，可以返回`Boolean`或`String`，`Boolean`为`false`或字符串时均表示校验为通过，`String`相当于定义了`inputErrorMessage`字段。此外，可以用`inputPlaceholder`字段来定义输入框的占位符。

```html
<template>
  <el-button type="text" @click.native="open4">打开 prompt</el-button>
</template>

<script>
  export default {
    methods: {
      open4() {
        this.$prompt('请输入邮箱', '提示', {
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(value => {
          this.$notify({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$notify({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
    }
  }
</script>
```
:::

Msgbox 框是最基本的弹框，与 Alert 的区别在于 Alert 无法通过 ESC 和 点击框外关闭。

:::demo 使用了`showCancelButton`字段，用于显示取消按钮，同时使用`cancelButtonClass`可以自定义样式，`cancelButtonText`来自定义按钮文本，Confirm 按钮也具有相同的字段，在文末的字段说明中有完整的字段列表。

```html
<template>
  <el-button type="text" @click.native="open5">打开 Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open5() {
        this.$msgbox({
          title: '消息',
          message: '这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容',
          showCancelButton: true
        }).then(action => {
          this.$notify({
            type: 'info',
            message: 'action: ' + action
          });
        });
      },
    }
  }
</script>
```
:::

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
| title | MessageBox标题 | string | - | - |
| message | MessageBox消息正文内容 | string | - | - |
| type | 消息类型，用于显示图标 | string | success/info/<br>warning/error | - |
| show-cancel-button | 是否显示取消按钮 | boolean | - | false（以 confirm 和 prompt 方式调用时为 true） |
| show-confirm-button | 是否显示确定按钮 | boolean | - | true |
| cancel-button-text | 取消按钮的文本内容 | string | - | 取消 |
| confirm-button-text | 确定按钮的文本内容 | string | - | 确定 |
| cancel-button-class | 取消按钮的自定义类名 | string | - | - |
| confirm-button-class | 确定按钮的自定义类名 | string | - | - |
| show-input | 是否显示输入框 | boolean | - | false（以 prompt 方式调用时为 true）|
| input-placeholder | 输入框的占位符 | string | - | - |
| input-pattern | 输入框的校验表达式 | regexp | - | - |
| input-validator | 输入框的校验函数。可以返回布尔值或字符串，若返回一个字符串, 则返回结果会被赋值给 inputErrorMessage | function | - | - |
| input-error-message | 校验未通过时的提示文本 | string | - | 输入的数据不合法! |
