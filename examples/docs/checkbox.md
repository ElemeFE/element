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
  <el-checkbox class="checkbox" v-model="checked">{{ checked }}</el-checkbox>
</div>

```html
<el-checkbox class="checkbox" v-model="checked">{{ checked }}</el-checkbox>
```

### 多个勾选框，绑定到同一个数组

<div class="demo-box demo-checkbox">
<el-checkbox-group v-model="checkList">
  <el-checkbox class="checkbox" label="复选框 A"></el-checkbox>
  <el-checkbox class="checkbox" label="复选框 B"></el-checkbox>
  <el-checkbox class="checkbox" label="复选框 C"></el-checkbox>
  <el-checkbox class="checkbox" label="禁用" disabled></el-checkbox>
  <el-checkbox class="checkbox" label="选中且禁用" disabled></el-checkbox>
</el-checkbox-group>
</div>

<p>{{ checkList }}</p>

```html
<template>
  <el-checkbox-group v-model="checkList">
    <el-checkbox class="checkbox" label="复选框 A"></el-checkbox>
    <el-checkbox class="checkbox" label="复选框 B"></el-checkbox>
    <el-checkbox class="checkbox" label="复选框 C"></el-checkbox>
    <el-checkbox class="checkbox" label="禁用" disabled></el-checkbox>
    <el-checkbox class="checkbox" label="选中且禁用" disabled></el-checkbox>
  </el-checkbox-group>
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
    v-model="name"
    :true-label="a"
    :false-label="b">
    {{name}}
  </el-checkbox>
</div>

```html
<el-checkbox
  class="checkbox"
  v-model="name"
  :true-label="a"
  :false-label="b">
  {{name}}
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

## checkbox API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 绑定值   | string\|string[]\|boolean  |    |    |
| label     | 真实值   | string    |               |         |
| true-label | 选中时的真实值   | string    |               |         |
| true-label | 没有选中时的真实值   | string    |               |         |
| disabled  | 禁用    | boolean   | true, false   | false   |

## checkbox group API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 绑定值   | string\|string[]\|boolean    |               |         |

## checkbox group 事件
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | (value: string) |
