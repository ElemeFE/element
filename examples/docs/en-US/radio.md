<script>
  module.exports = {
    data() {
      return {
        radio: '1',
        radio1: 'selected and disabled',
        radio2: 3,
        radio3: 'New York',
        radio4: 'New York',
        radio5: 'New York'
      };
    }
  };
</script>

## Radio

Single selection among multiple options.

### Basic usage

Radio should not have too many options. Otherwise, use the Select component instead.

:::demo Creating a radio component is easy, you just need to bind a variable to Radio's `v-model`. It equals to the value of `label` of the chosen radio. The type of `label` is `String` or `Number`.
```html
<template>
  <el-radio class="radio" v-model="radio" label="1">optionA</el-radio>
  <el-radio class="radio" v-model="radio" label="2">optionB</el-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```
:::

### Disabled

`disabled` attribute is used to disable the radio.

:::demo You just need to add the `disabled` attribute.
```html
<template>
  <el-radio disabled v-model="radio1" label="disabled">optionA</el-radio>
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

Suitable for choosing from some mutually exclusive options.

:::demo Combine `<el-radio-group>` with `<el-radio>` to display a radio group. Bind a variable with `v-model` of `<el-radio-group>` element and set label value in `<el-radio>`. It also provides `change` event with the current value as its parameter.

```html
<el-radio-group v-model="radio2">
  <el-radio :label="3">optionA</el-radio>
  <el-radio :label="6">optionB</el-radio>
  <el-radio :label="9">optionC</el-radio>
</el-radio-group>

<script>
  export default {
    data () {
      return {
        radio2: 3
      };
    }
  }
</script>
```
:::

### Button style

Radio with button styles.

:::demo You just need to change `<el-radio>` element into `<el-radio-button>` element. We also provide `size` attribute for these buttons: `large` and `small`.
```html
<el-radio-group v-model="radio3">
  <el-radio-button label="New York"></el-radio-button>
  <el-radio-button label="Washington"></el-radio-button>
  <el-radio-button label="Los Angeles"></el-radio-button>
  <el-radio-button label="Chicago"></el-radio-button>
</el-radio-group>
<div style="margin: 15px 0;"></div>
<el-radio-group v-model="radio4">
  <el-radio-button label="New York"></el-radio-button>
  <el-radio-button label="Washington" :disabled="true"></el-radio-button>
  <el-radio-button label="Los Angeles"></el-radio-button>
  <el-radio-button label="Chicago"></el-radio-button>
</el-radio-group>
<div style="margin: 15px 0;"></div>
<el-radio-group v-model="radio5" :disabled="true">
  <el-radio-button label="New York"></el-radio-button>
  <el-radio-button label="Washington"></el-radio-button>
  <el-radio-button label="Los Angeles"></el-radio-button>
  <el-radio-button label="Chicago"></el-radio-button>
</el-radio-group>

<script>
  export default {
    data () {
      return {
        radio3: 'New York',
        radio4: 'New York',
        radio5: 'New York'
      };
    }
  }
</script>
```
:::

### Radio Attributes

 Attribute      | Description          | Type      | Accepted Values       | Default
---- | ---- | ---- | ---- | ----
label | the value of radio | string/number/boolean | — | —
disabled | whether radio is disabled | boolean | — | false
name | native 'name' attribute | string    |      —         |     —

### Radio-group Attributes

 Attribute      | Description          | Type      | Accepted Values       | Default
---- | ---- | ---- | ---- | ----
size | the size of radio buttons | string | large/small | —
fill  | border and background color when button is active | string   | — | #20a0ff   |
text-color | font color when button is active | string   | — | #ffffff   |

### Radio-group Events

| Event Name | Description | Parameters |
--- | --- | ---
change | triggers when the bound value changes | the label value of the chosen radio

### Radio-button Attributes

 Attribute      | Description          | Type      | Accepted Values       | Default
---- | ---- | ---- | ---- | ----
label | the value of radio | string/number | — | —
disabled | whether radio is disabled | boolean | — | false


