## Input Number

Only allows input standard numerical value, you can define scope.

### How to use

To use it, you just need to bind a variable to `v-model` in `<el-input-number>` element, and the initial value is default value.

:::demo

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
    },
    methods: {
    	handleChange() {
    		console.log(this.num1)
    	}
    }
  };
</script>
```
:::

### Disabled state

The `disabled` attribute accepts a **boolean** value, and if the value is `true`, the component is totally disabled,but if you just need to control the value within a range, you could add `min` attribute to set minimum value and add `max` to set maximum value. If there no `min` and `max` attribute,the minimum is `0`.

:::demo

```html
<el-input-number v-model="num1" :disabled="true" :max="100"></el-input-number>
```

:::

### Steps

Allows you to define diminishing incremental steps of control.

Add `step` attribute to set the step.

:::demo

```html
<el-input-number v-model="num2" :step="2"></el-input-number>
```
:::

### Attributes

Attribute | Description | Type | Options | Default
----| ----| ---| ----| -----
value | bound value| number | --- | ---
min | the minimum value that is allowed | number | ---| 0
max | the maximum value that is allowed | number | --- | infinity
step | step | number | --- | 1
size | the size of component | string | large/small| ---
disabled| disable the component or not | boolean | ---| false

### Events

event type | explain | callback param
----| ---- | -----
change | trigger when the value is updated | the latest value