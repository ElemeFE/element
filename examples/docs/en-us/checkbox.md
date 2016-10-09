<script>
  module.exports = {
    data() {
      return {
        checkList: ['selected and disabled','Option A'],
        // checkList2: ['Option A'],
        checked: true,
        checked1: false,
        checked2: true,
        isValid: 'valid'
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
## Checkbox

A group of options for multiple choices.

### How to use

Checkbox can be used alone to switch between two states.

:::demo Define `v-model`(bind variable) in `el-checkbox` element. Default value is  `Boolean` for single `checkbox`. It becomes `true` when selected.

```html
<template>
  <!-- `checked` should be true or false -->
  <el-checkbox class="checkbox" v-model="checked">Option</el-checkbox>
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

## Disabled State

Disabled state for checkbox.

::: demo Set checkbox `disabled`.

```html
<template>
  <el-checkbox class="checkbox" v-model="checked1" disabled>Option</el-checkbox>
  <el-checkbox class="checkbox" v-model="checked2" disabled>Option</el-checkbox>
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

### Multiple Choices

It is used for multiple checkboxes which are bound in one group, and indicating whether one option is selected by checking if it is checked.

:::demo `checkbox-group` element can manage multiple checkboxes in one group by using `v-model` which is bound as `Array` type in Group. `label` can modify the description following the button of the checkbox. It is also the value of the checkbox. `label` corresponds to the element values in the array. It is selected if the specified value exists in the array, or it is unselected.

```html
<template>
  <el-checkbox-group v-model="checkList">
    <el-checkbox class="checkbox" label="Option A"></el-checkbox>
    <el-checkbox class="checkbox" label="Option B"></el-checkbox>
    <el-checkbox class="checkbox" label="Option C"></el-checkbox>
    <el-checkbox class="checkbox" label="disabled" disabled></el-checkbox>
    <el-checkbox class="checkbox" label="selected and disabled" disabled></el-checkbox>
  </el-checkbox-group>
</template>

<script>
  export default {
    data () {
      return {
        checkList: ['selected and disabled','Option A']
      };
    }
  };
</script>
```
:::

### Value-switchable Checkbox

Not only checkbox can indicate if it is a selected logical value, but also can be set the selected and unselected values when used alone.

:::demo Customize the selected and unselected values using `true-label` or `false-label`. It can be `String` or `Number` type.

```html
<template>
  <el-checkbox
    class="checkbox"
    v-model="isValid"
    true-label="available"
    false-label="unavailable">
    {{isValid}}
  </el-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        isValid: 'available'
      };
    }
  };
</script>
```
:::

### Checkbox Attributes
| Attribute      | Description         | Type    | Options                         | Default|
|---------- |-------- |---------- |-------------  |-------- |
| label     | value in selected state（meaningful only when used in `checkbox-group`）   | string    |       —        |     —    |
| true-label | selected value   | string, number    |       —        |     —    |
| false-label | unselected value   | string, number    |      —         |     —    |
| disabled  | button disabled   | boolean   |  — | false   |

### Checkbox-group Events
| Event | Description | Callback |
|---------- |-------- |---------- |
| change  | triggered when the binding value changes | selected Checkbox Label value |

