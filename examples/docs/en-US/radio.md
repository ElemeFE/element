<script>
  module.exports = {
    data() {
      return {
        radio: '1',
        radio1: 'selected and disabled',
        radio2: 3,
        radio3: ''
      };
    }
  };
</script>

## Radio

A single selection is made in a set of alternatives.

### How to use

As the option is visible by default, there should not be too many options. If too many options, the Select component is recommended.

Creating a radio component is easy, you just need to bind a variable by `v-bind` directive, and it means that the value of bound variable is equals to the value of `label` of which the `radio` you select. The type of `label` is `String` or `Number`.

:::demo

```html
<template>
  <el-radio class="radio" v-model="radio" label="1">optionA</el-radio>
  <el-radio class="radio" v-model="radio" label="2">optionB</el-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: ''
      };
    }
  }
</script>
```
:::

### Disabled

`disabled` attribute is used to disable radio button. You just need to add `disabled` attribute, and default value is `true`.

:::demo

```html
<template>
  <el-radio disabled v-model="radio1" label="diabaled">optionA</el-radio>
  <el-radio disabled v-model="radio1" label="selected and disabled">optionB</el-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio1: 'selected and disabled'
      };
    }
  }
</script>
```
:::

### Radio button group

Applicable to scenes selecting from multiple mutex options. 

Combine `<el-radio-group>` with `<el-radio>` to display a radio group. Bind a variable in `<el-radio-group>` element and set label value in `<el-radio>`. It also provides `change` event to respond to the change of bound value.

:::demo

```html
<el-radio-group v-model="radio2">
  <el-radio :label="3">optionA</el-radio>
  <el-radio :label="6">optionB</el-radio>
  <el-radio :label="9">optionC</el-radio>
</el-radio-group>
```

:::

### Button style

Radio with button styles.

You just need to change `<el-radio>` element into `<el-radio-button>` element. Element also provides `size` attribute for the buttons array. There are two options: `large` and `small` if not default.

:::demo

```html
<el-radio-group v-model="radio3">
  <el-radio-button label="New York" size="small"></el-radio-button>
  <el-radio-button label="Washington" size="large"></el-radio-button>
  <el-radio-button label="Los Angeles" :disabled="true"></el-radio-button>
  <el-radio-button label="Chicago"></el-radio-button>
</el-radio-group>
```

:::

### Radio Attributes

Attribute | Description | Type | options | Default 
---- | ---- | ---- | ---- | ----
label | the value of radio | string, number | --- | ---
disabled | whether disabled or not | boolean | --- | false

### Radio-group Attributes

Attribute | Description | Type | options | Default 
---- | ---- | ---- | ---- | ----
size | the size of radio button | string | large, small | ---

### Radio-group Events

Event | Description | callback parameters 
--- | --- | ---
change | event triggered when the bound variable changes | the label value of the radio which you select

### Radio-button Attributes

Attribute | Description | Type | options | Default 
---- | ---- | ---- | ---- | ----
label | the value of radio | string, number | --- | ---
disabled | whether disabled or not | boolean | --- | false


