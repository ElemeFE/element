<script>
  module.exports = {
    data() {
      return {
        checkList: ['选中且禁用','复选框 A'],
        // checkList2: ['复选框 A'],
        checked: true,
        checked1: false,
        checked2: true,
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
## Checkbox 多选框
一组备选项中进行多选

### 基础用法

适用广泛的基础用法。

:::demo 在`el-checkbox`元素中定义`v-model`绑定变量，单一的`checkbox`中，默认绑定变量的值会是`Boolean`，选中为`true`。

```html
<template>
  <el-checkbox class="checkbox" v-model="checked">{{ checked }}</el-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
</script>
```
:::

## 禁用状态

多选框不可用状态。

::: demo 设置`disabled`属性即可。

```html
<template>
  <el-checkbox class="checkbox" v-model="checked1" disabled>备选项</el-checkbox>
  <el-checkbox class="checkbox" v-model="checked2" disabled>备选项</el-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
</script>
```
:::

### 多选框组

:::demo `checkbox-group`元素能把多个 checkbox 管理为一组，只需要在 Group 中使用`v-model`绑定`Array`类型的变量即可，`label`属性除了改变 checkbox 按钮后的介绍外，同时也是该 checkbox 对应的值，`label`与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。

```html
<template>
  <el-checkbox-group v-model="checkList">
    <el-checkbox class="checkbox" label="复选框 A"></el-checkbox>
    <el-checkbox class="checkbox" label="复选框 B"></el-checkbox>
    <el-checkbox class="checkbox" label="复选框 C"></el-checkbox>
    <el-checkbox class="checkbox" label="禁用" disabled></el-checkbox>
    <el-checkbox class="checkbox" label="选中且禁用" disabled></el-checkbox>
  </el-checkbox-group>

  <p>{{ checkList }}</p>

</template>

<script>
  export default {
    data () {
      return {
        checkList: ['选中且禁用','复选框 A']
      };
    }
  };
</script>
```
:::

### 绑定 value 的多选框

:::demo 使用`true-label`和`false-label`可以自定义选中时和未选中时的值，可以为`String`或`Number`类型。

```html
<template>
  <el-checkbox
    class="checkbox"
    v-model="name"
    :true-label="a"
    :false-label="b">
    {{name}}
  </el-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        name: 'Jonny',
        a: 'Jonny',
        b: 'Lara'
      };
    }
  };
</script>
```
:::

### Checkbox Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 选中状态的值（只有在`checkbox-group`下有意义）   | string    |               |         |
| true-label | 选中时的值   | string, number    |               |         |
| false-label | 没有选中时的值   | string, number    |               |         |
| disabled  | 按钮禁用    | boolean   |    | false   |

### Checkbox-group Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 选中的 Checkbox Label 值 |
