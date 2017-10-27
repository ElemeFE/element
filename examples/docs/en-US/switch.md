<style>
  .demo-box.demo-switch {
    .el-switch {
      margin: 20px 20px 20px 0;
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true,
        value3: true,
        value4: true,
        value5: '100',
        value6: true,
        value7: false
      }
    }
  };
</script>

## Switch

Switch is used for switching between two opposing states.

### Basic usage
:::demo Bind `v-model` to a `Boolean` typed variable. The `active-color` and `inactive-color` attribute decides the background color in two states.

```html
<el-switch v-model="value1">
</el-switch>
<el-switch
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
</script>
```
:::

### Text description
:::demo You can add `active-text` and `inactive-text` attribute to show texts.

```html
<el-switch
  v-model="value3"
  active-text="Pay by month"
  inactive-text="Pay by year">
</el-switch>
<el-switch
  style="display: block"
  v-model="value4"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="Pay by month"
  inactive-text="Pay by year">
</el-switch>

<script>
  export default {
    data() {
      return {
        value3: true,
        value4: true
      }
    }
  };
</script>
```
:::

### Extended value types

:::demo You can set `active-value` and `inactive-value` attributes. They both receive a `Boolean`, `String` or `Number` typed value.

```html
<el-tooltip :content="'Switch value: ' + value5" placement="top">
  <el-switch
    v-model="value5"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-value="100"
    inactive-value="0">
  </el-switch>
</el-tooltip>

<script>
  export default {
    data() {
      return {
        value5: '100'
      }
    }
  };
</script>
```

:::

### Disabled

:::demo Adding the `disabled` attribute disables Switch.

```html
<el-switch
  v-model="value6"
  disabled>
</el-switch>
<el-switch
  v-model="value7"
  disabled>
</el-switch>

<script>
  export default {
    data() {
      return {
        value6: true,
        value7: false
      }
    }
  };
</script>
```
:::

### Attributes

 Attribute      | Description          | Type      | Accepted Values       | Default
----| ----| ----| ----|----
disabled | whether Switch is disabled | boolean | — | false
width | width of Switch | number | — | 40
active-icon-class | class name of the icon displayed when in `on` state, overrides `active-text` | string | — | —
inactive-icon-class |class name of the icon displayed when in `off` state, overrides `inactive-text`| string | — | —
active-text | text displayed when in `on` state | string | — | —
inactive-text | text displayed when in `off` state | string | — | —
active-value  | switch value when in `on` state | boolean / string / number | — | true
inactive-value  | switch value when in `off` state | boolean / string / number | — | false
active-color | background color when in `on` state | string | — | #409EFF
inactive-color | background color when in `off` state | string | — | #C0CCDA
name| input name of Switch | string | — | —

### Events

 Event Name | Description | Parameters
---- | ----| ----
change | triggers when value changes | value after changing

### Methods
Method | Description | Parameters
------|--------|-------
focus | focus the Switch component | —
