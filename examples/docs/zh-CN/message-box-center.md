## MessageBoxCenter 组件

### 居中消息提示

当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。

:::demo 调用`$alertCenter`方法即可打开消息提示，它模拟了系统的 `alert`，无法通过按下 ESC 或点击框外关闭。此例中接收了两个参数，`message`和`title`。值得一提的是，窗口被关闭后，它默认会返回一个`Promise`对象便于进行后续操作的处理。若不确定浏览器是否支持`Promise`，可自行引入第三方 polyfill 或像本例一样使用回调进行后续处理。
```html
<template>
  <el-button type="text" @click="open">点击打开 Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$alertCenter('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  }
</script>
```
:::

### 确认消息

提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。

:::demo 调用`$confirm`方法即可打开消息提示，它模拟了系统的 `confirm`。Message Box 组件也拥有极高的定制性，我们可以传入`options`作为第三个参数，它是一个字面量对象。`type`字段表明消息类型，可以为`success`，`error`，`info`和`warning`，无效的设置将会被忽略。注意，第二个参数`title`必须定义为`String`类型，如果是`Object`，会被理解为`options`。在这里我们用了 Promise 来处理后续响应。

```html
<template>
  <el-button type="text" @click="open">点击打开 Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$confirmCenter('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    }
  }
</script>
```
:::

### 全局方法

如果你按需引入MessageBoxCenter组件，并且在Vue.prototype中添加了$alert方法，可以用`Vue.prototype.$alert = MessageBoxCenter.alertCenter`来代替`Vue.prototype.$alert = MessageBox.alert`；Vue.prototype中添加了$confirm方法，可以用`Vue.prototype.$confirm = MessageBoxCenter.confirmCenter`来代替`Vue.prototype.$confirm = MessageBox.confirm`。。以上方法调用的参数完全一致，完全兼容。

:::tip
说明：所有参数跟`MessageBox`组件一致
:::