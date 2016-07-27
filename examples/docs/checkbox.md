<script>
  module.exports = {
    data() {
      return {
        checkList: ['选中且禁用','复选框 A'],
        // checkList2: ['复选框 A'],
        checked: true,
        name: 'Jonny',
        a: 'Jonny',
        b: 'Lara'
      };
    }
  };
</script>


<style>
  .demo-box.demo-checkbox {
    .checkbox {
      margin-right: 5px;

      & + .checkbox {
        margin-left: 10px;
      }
    }
  }
</style>

## 基础用法

### 单个勾选框，逻辑值

<div class="demo-box demo-checkbox">
  <el-checkbox class="checkbox" :value.sync="checked">{{checked | json}}</el-checkbox>
</div>

```html
<el-checkbox class="checkbox" :value.sync="checked">{{checked | json}}</el-checkbox>
```

### 多个勾选框，绑定到同一个数组

<div class="demo-box demo-checkbox">
  <el-checkbox class="checkbox" :value.sync="checkList" label="复选框 A"></el-checkbox>
  <el-checkbox class="checkbox" :value.sync="checkList" label="复选框 B"></el-checkbox>
  <el-checkbox class="checkbox" :value.sync="checkList" label="复选框 C"></el-checkbox>
  <el-checkbox class="checkbox" :value.sync="checkList" label="禁用" disabled></el-checkbox>
  <el-checkbox class="checkbox" :value.sync="checkList" label="选中且禁用" disabled></el-checkbox>
</div>

<p>{{checkList | json}}</p>

```html
<template>
  <el-checkbox class="checkbox" :value.sync="checkList" label="复选框 A"></el-checkbox>
  <el-checkbox class="checkbox" :value.sync="checkList" label="复选框 B"></el-checkbox>
  <el-checkbox class="checkbox" :value.sync="checkList" label="复选框 C"></el-checkbox>
  <el-checkbox class="checkbox" :value.sync="checkList" label="禁用" disabled></el-checkbox>
  <el-checkbox class="checkbox" :value.sync="checkList" label="选中且禁用" disabled></el-checkbox>
</template>

<script>
  export default {
    data () {
      return {
        checkList: ['选中且禁用','复选框 A']
      }
    }
  }
</script>
```

### 绑定 value：

<div class="demo-box demo-checkbox">
  <el-checkbox
    class="checkbox"
    :value.sync="name"
    :true-label="a"
    :false-label="b"
    >
  </el-checkbox>{{name}}
</div>

```html
<el-checkbox
  class="checkbox"
  :value.sync="name"
  :true-label="a"
  :false-label="b"
  >
</el-checkbox>
```

```js
vm.a = 'Jonny';
vm.b = 'Lara';
// 当选中时
vm.name === vm.a
// 当没有选中时
vm.name === vm.b
```

## API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| model     | 绑定值   | string\|string[]\|boolean  |               |         |
| value     | 真实值   | string    |               |         |
| label     | 显示值，不填则显示 value   | string    |               |         |
| disabled  | 禁用    | boolean   | true, false   | false   |
