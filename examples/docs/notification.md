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

<div class="demo-box demo-notification">
  <el-button :plain="true" v-on:click="open">点击展示 Notification</el-button>
</div>

```html
<template>
  <el-button :plain="true" v-on:click="open">点击展示 Notification</el-button>
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

<div class="demo-box demo-notification">
  <el-button :plain="true" v-on:click="open2">成功</el-button>
  <el-button :plain="true" v-on:click="open3">警告</el-button>
  <el-button :plain="true" v-on:click="open4">消息</el-button>
  <el-button :plain="true" v-on:click="open5">错误</el-button>
</div>

```html
<template>
  <el-button :plain="true" v-on:click="open2">成功</el-button>
  <el-button :plain="true" v-on:click="open3">警告</el-button>
  <el-button :plain="true" v-on:click="open4">消息</el-button>
  <el-button :plain="true" v-on:click="open5">错误</el-button>
</template>

<script>
  export default {
    methods: {
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
      }
    }
  }
</script>
```

## 不会自动关闭
<div class="demo-box demo-notification">
  <el-button :plain="true" v-on:click="open6">不会自动关闭的 Notification</el-button>
</div>

```html
<template>
  <el-button :plain="true" v-on:click="open6">不会自动关闭的 Notification</el-button>
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
<div class="demo-box demo-notification">
  <el-button :plain="true" v-on:click="open7">带有回调函数的 Notification</el-button>
</div>

```html
<template>
  <el-button :plain="true" v-on:click="open7">带有回调函数的 Notification</el-button>
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

element 为 Vue.prototype 添加了全局方法 $notify。因此在 vue instance 中可以采用本页面中的方式调用 `Notification`。

## 单独引用

单独引入 `Notification`：

```javascript
import { Notification } from 'element-ui';
```

此时调用方法为 `Notification(options)`。

## API
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | string | | |
| message | 说明文字 | string | | |
| type | 主题 | string | 'success', 'warning', 'info', 'error' | |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | | 4500 |
| onClose | 关闭时的回调函数 | function | | |
