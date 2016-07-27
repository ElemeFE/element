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
          this.$msgbox({
            message: '删除成功!',
            type: 'success'
          });
        }).catch(() => {
          this.$msgbox({
            message: '已取消删除',
            type: 'info'
          });          
        });
      },
      
      open4() {
        this.$prompt('请输入邮箱', '提示', {
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value, action }) => {
          console.log('action: ', action);
          this.$msgbox('', '你的邮箱是: ' + value);
        }).catch(() => {
          this.$msgbox('', '取消输入');       
        });
      },
      
           
      open5() {
        this.$msgbox({
          title: '消息',
          message: '这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容',
          showCancelButton: true
        }).then(action => {
          this.$msgbox('', 'action: ' + action);
        });
      },
      
      open6() {
        this.$msgbox({
          title: '消息',
          message: '这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容',
          showCancelButton: true,
          showClose: false,
          confirmButtonText: '知道了',
          type: 'success'
        });
      }
    }
  };
</script>

## 基本用法
<el-button @click="open">打开 Alert</el-button>

```html
<template>
  <el-button @click="open">打开 Message Box</el-button>
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

## 返回 Promise

<el-button @click="open2">打开 alert</el-button>

```html
<template>
  <el-button @click="open4">打开 alert</el-button>
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

<el-button @click="open3">打开 confirm</el-button>

```html
<template>
  <el-button @click="open5">打开 confirm</el-button>
</template>

<script>
  export default {
    methods: {
      open3() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          type: 'warning'
        }).then(() => {
          this.$alert('删除成功!',{
            type: 'success'
          });
        }).catch(() => {
          this.$alert('已取消删除', {
            type: 'info'
          });          
        });
      },
    }
  }
</script>
```
<el-button @click="open4">打开 prompt</el-button>

```html
<template>
  <el-button @click="open6">打开 prompt</el-button>
</template>

<script>
  export default {
    methods: {
      open4() {
        this.$prompt('请输入邮箱', '提示', {
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(value => {
          this.$alert('你的邮箱是: ' + value);
        }).catch(() => {
          this.$alert('取消输入');       
        });
      }
    }
  }
</script>
```

<el-button @click="open5">打开 Message Box</el-button>

```html
<template>
  <el-button @click="open3">打开 Message Box</el-button>
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
          this.$alert('action: ' + action);
        });
      },
    }
  }
</script>
```

## 更多配置项

<el-button @click="open6">打开 Message Box</el-button>

```html
<template>
  <el-button @click="open2">打开 Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open6() {
        this.$msgbox({
          title: '消息',
          message: '这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容',
          showCancelButton: true,
          confirmButtonText: '知道了',
          type: 'success'
        });
      }
    }
  }
</script>
```

## 全局方法

element 为 Vue.prototype 添加了如下全局方法：$msgbox, $alert, $confirm 和 $prompt。因此在 vue instance 中可以采用本页面中的方式调用 `MessageBox`。

## 单独引用

单独引入 `MessageBox`：

```javascript
import { MessageBox } from 'element-ui';
```

对应于上述四个全局方法的调用方法依次为：MessageBox, MessageBox.alert, MessageBox.confirm 和 MessageBox.prompt。

## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | string | | |
| message | 消息内容 | string | | |
| type | 消息类型 | string | 'success', 'info', 'warning', 'error' | |
| showCancelButton | 是否显示取消按钮 | boolean | | false（以 confirm 和 prompt 方式调用时为 true） |
| showConfirmButton | 是否显示确定按钮 | boolean | | true |
| cancelButtonText | 取消按钮的文本内容 | string | | '取消' |
| confirmButtonText | 确定按钮的文本内容 | string | | '确定' |
| cancelButtonClass | 取消按钮的自定义类名 | string | | |
| confirmButtonClass | 确定按钮的自定义类名 | string | | |
| showInput | 是否显示输入框 | boolean | | false（以 prompt 方式调用时为 true）|
| inputValue | 输入框的值 | string | | |
| inputPlaceholder | 输入框的占位符 | string | | |
| inputPattern | 输入框的校验表达式 | regexp | | |
| inputValidator | 输入框的校验函数。若返回一个字符串, 则返回结果会被赋值给 inputErrorMessage | function | | |
| inputErrorMessage | 校验未通过时的提示文本 | string | | '输入的数据不合法!' |
