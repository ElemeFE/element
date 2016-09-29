<script>
  export default {
    data() {
      return {
        num1: 1,
        num2: 1,
        num3: 5
      }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
<style>
  .demo-box.demo-input-number {
    .el-input-number + .el-input-number {
      margin-left: 10px;
    }
  }
</style>

## Input Number 数字输入框

仅允许输入标准的数字值，可定义范围

### 基础用法

:::demo 要使用它，只需要在`el-input-number`元素中使用`v-model`绑定变量即可，变量的初始值即为默认值。
```html
<template>
  <el-input-number v-model="num1" @change="handleChange"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num1: 1
      };
    }
  };
</script>
```
:::

### 禁用状态

:::demo `disabled`属性接受一个`Boolean`，设置为`true`即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置`min`属性和`max`属性，不设置`min`和`max`时，最小值为 0。

```html
<el-input-number v-model="num1" :disabled="true"></el-input-number>
```
:::

### 步数

允许定义递增递减的步数控制

:::demo 设置`step`属性可以控制步长，接受一个`Number`。

```html
<el-input-number v-model="num2" :step="2"></el-input-number>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|----------|-------------- |----------|--------------------------------  |-------- |
| value    | 绑定值         | number | — | — |
| min      | 设置计数器允许的最小值 | number | — | 0 |
| max      | 设置计数器允许的最大值 | number | — | Infinity |
| step     | 计数器步长           | number   | — | 1 |
| size     | 计数器尺寸           | string   | large, small | — |
| disabled | 是否禁用计数器        | boolean | — | false |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 绑定值被改变时触发 | 最后变更的值 |
