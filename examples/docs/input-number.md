<script>
  export default {
    data() {
      return {
        num1: 1,
        num2: 1,
        num3: 5
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
通过鼠标或键盘输入字符

### 基础使用

需要标准的数字值时可以用到 Input Number 组件，你提供了数值输入提供了范围控制和递增递减的步数控制。

值得一提的是，你可以不用通过连续点击增减，可以直接输入数字或者长按按钮进行数字的改变。


:::demo 要使用它，只需要在`el-input-number`元素中使用`v-model`绑定变量即可，变量的初始值即为默认值。
```html
<template>
  <el-input-number v-model="num1"></el-input-number>
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
<el-input-number v-model="num3" :min="5" :max="10"></el-input-number>
```
:::

### 步长

让组件按照步长来增减。

:::demo 设置`step`属性可以控制步长，接受一个`Number`。

```html
<el-input-number v-model="num2" :step="2"></el-input-number>
```
:::

### 尺寸

和其他组件一样，Input Number 同样具有不同的尺寸。

:::demo 三种尺寸：`large`，`small`以及默认，只需要设置`size`属性即可。

```html
<el-input-number v-model="num1" size="large"></el-input-number>
<el-input-number v-model="num1"></el-input-number>
<el-input-number v-model="num1" size="small"></el-input-number>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|----------|-------------- |----------|--------------------------------  |-------- |
| min      | 设置计数器允许的最小值 | number |   | 0 |
| max      | 设置计数器允许的最大值 | number |   | Infinity |
| step     | 计数器步长           | number   |      | 1 |
| size     | 计数器尺寸           | string   | large, small | |
| disabled | 是否禁用计数器        | boolean |  | false |
