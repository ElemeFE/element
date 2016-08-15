<script>
  module.exports = {
    methods: {
      open() {
        this.$message({
          message: '这是一条消息提示'
        });
      },
      
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },
      
      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },
            
      open4() {
        this.$message({
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      },
                  
      open5() {
        this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息'
        });
      },
      
      open6() {
        this.$message({
          showClose: true,
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },
            
      open7() {
        this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      },
      
      open8() {
        this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      } 
    }
  };
</script>

<style>
  .demo-box.demo-message {
    .el-button + .el-button {
      margin-left: 10px;
    }
  }
</style>

## 基本用法

<div class="demo-box demo-message">
  <el-button :plain="true" v-on:click.native="open">打开消息提示</el-button>
</div>

```html
<template>
  <el-button :plain="true" v-on:click.native="open">打开消息提示</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$message({
          message: '这是一条消息提示'
        });
      }
    }
  }
</script>
```

## 不同状态
<div class="demo-box demo-message">
  <el-button :plain="true" v-on:click.native="open2">成功</el-button>
  <el-button :plain="true" v-on:click.native="open3">警告</el-button>
  <el-button :plain="true" v-on:click.native="open4">错误</el-button>
</div>

```html
<template>
  <el-button :plain="true" v-on:click.native="open2">成功</el-button>
  <el-button :plain="true" v-on:click.native="open3">警告</el-button>
  <el-button :plain="true" v-on:click.native="open4">错误</el-button>
</template>

<script>
  export default {
    methods: {
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },
      
      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },
            
      open4() {
        this.$message({
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      }
    }
  }
</script>
```

## 可关闭
<div class="demo-box demo-message">
  <el-button :plain="true" v-on:click.native="open5">消息</el-button>
  <el-button :plain="true" v-on:click.native="open6">成功</el-button>
  <el-button :plain="true" v-on:click.native="open7">警告</el-button>
  <el-button :plain="true" v-on:click.native="open8">错误</el-button>
</div>

```html
<template>
  <el-button :plain="true" v-on:click.native="open5">消息</el-button>
  <el-button :plain="true" v-on:click.native="open6">成功</el-button>
  <el-button :plain="true" v-on:click.native="open7">警告</el-button>
  <el-button :plain="true" v-on:click.native="open8">错误</el-button>
</template>

<script>
  export default {
    methods: {
      open5() {
        this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息'
        });
      },
      
      open6() {
        this.$message({
          showClose: true,
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },
            
      open7() {
        this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      },
      
      open8() {
        this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      }
    }
  }
</script>
```

## 全局方法

element 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 `Message`。

## 单独引用

单独引入 `Message`：

```javascript
import { Message } from 'element-ui';
```

此时调用方法为 `Message(options)`。

## API
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| message | 消息文字 | string | | |
| type | 主题 | string | 'success', 'warning', 'info', 'error' | 'info' |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | | 3000 |
| showClose | 是否显示关闭按钮 | boolean | | false |
| onClose | 关闭时的回调函数, 参数为被关闭的 message 实例 | function | | |
