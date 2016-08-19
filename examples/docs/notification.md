<script>
  module.exports = {
    methods: {
      open() {
        this.$notify({
          title: '标题名称',
          message: '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'
        });
      },

      open2() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },

      open3() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },

      open4() {
        this.$notify({
          title: '消息',
          message: '这是一条消息的提示消息',
          type: 'info'
        });
      },

      open5() {
        this.$notify({
          title: '错误',
          message: '这是一条错误的提示消息',
          type: 'error'
        });
      },

      open6() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      },

      open7() {
        this.$notify({
          title: '提示',
          message: '这是一条带有回调函数的消息',
          onClose: this.onClose
        });
      },

      onClose() {
        console.log('Notification 已关闭');
      }
    }
  };
</script>

<style>
  .demo-box.demo-notification {
    .el-button + .el-button {
      margin-left: 10px;
    }
  }
</style>

## 基本用法

Notification 组件提供通知功能，Element 注册了`$notify`方法，接收一个`options`字面量参数，最简单的条件下，你可以设置`title`字段和`message`字段，用于设置通知的标题和正文，下面是一个最简单的情况的样例：

<div class="demo-box demo-notification">
  <el-button :plain="true" @click.native="open">点击展示 Notification</el-button>
</div>

```html
<template>
  <el-button :plain="true" @click.native="open">点击展示 Notification</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$notify({
          title: '标题名称',
          message: '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'
        });
      }
    }
  }
</script>
```

## 带有 icon

Element 也为 Notification 组件准备了四种通知类型：`success`, `warning`, `info`, `error`。

通过`type`字段来设置，除此以外的值将被忽略，下面是四种类型的样例：

<div class="demo-box demo-notification">
  <el-button :plain="true" @click.native="open2">成功</el-button>
  <el-button :plain="true" @click.native="open3">警告</el-button>
  <el-button :plain="true" @click.native="open4">消息</el-button>
  <el-button :plain="true" @click.native="open5">错误</el-button>
</div>

```html
<template>
  <el-button :plain="true" @click.native="open2">成功</el-button>
  <el-button :plain="true" @click.native="open3">警告</el-button>
  <el-button :plain="true" @click.native="open4">消息</el-button>
  <el-button :plain="true" @click.native="open5">错误</el-button>
</template>

<script>
  export default {
    methods: {
      open2() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success',
        });
      },

      open3() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },

      open4() {
        this.$notify({
          title: '消息',
          message: '这是一条消息的提示消息',
          type: 'info'
        });
      },

      open5() {
        this.$notify({
          title: '错误',
          message: '这是一条错误的提示消息',
          type: 'error'
        });
      }
    }
  }
</script>
```

## 不会自动关闭

默认情况下，经过一段时间后 Notification 组件会自动关闭，但是通过设置 `duration`，可以控制关闭的时间间隔，特别的是，如果设置为`0`，则不会自动关闭，下面是一个不会自动关闭的样例：

注意：`duration`接收一个`Number`，单位为毫秒，默认为`4500`。

<div class="demo-box demo-notification">
  <el-button :plain="true" @click.native="open6">不会自动关闭的 Notification</el-button>
</div>

```html
<template>
  <el-button :plain="true" @click.native="open6">不会自动关闭的 Notification</el-button>
</template>

<script>
  export default {
    methods: {
      open6() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      }
    }
  }
</script>
```

## 回调函数

Element 为关闭操作设置了回调函数，在关闭时会触发`onClose`，你可以通过设置`onClose`参数来处理后续操作，它是一个`Function`，下面是一个样例，会在控制台输出：Notification 已关闭。

<div class="demo-box demo-notification">
  <el-button :plain="true" @click.native="open7">带有回调函数的 Notification</el-button>
</div>

```html
<template>
  <el-button :plain="true" @click.native="open7">带有回调函数的 Notification</el-button>
</template>

<script>
  export default {
    methods: {
      open7() {
        this.$notify({
          title: '提示',
          message: '这是一条带有回调函数的消息',
          onClose: this.onClose
        });
      },

      onClose() {
        console.log('Notification 已关闭');
      }
    }
  }
</script>
```

## 全局方法

Element 为 Vue.prototype 添加了全局方法 $notify。因此在 vue instance 中可以采用本页面中的方式调用 `Notification`。

## 单独引用

单独引入 `Notification`：

```javascript
import { Notification } from 'element-ui';
```

此时调用方法为 `Notification(options)`。

## Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | string | | |
| message | 说明文字 | string | | |
| type | 主题样式，如果不在可选值内将被忽略 | string | 'success', 'warning', 'info', 'error' | |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | | 4500 |
| onClose | 关闭时的回调函数 | function | | |
