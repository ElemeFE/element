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
:::demo Bind `v-model` to a `Boolean` typed variable. The `on-color` and `off-color` attribute decides the background color in two states.

```html
<el-switch v-model="value1">
</el-switch>
<el-switch
  v-model="value2"
  on-color="#13ce66"
  off-color="#ff4949">
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
:::demo You can add `on-text` and `off-text` attribute to show texts.

```html
<el-switch
  v-model="value3"
  on-text="Pay by month"
  off-text="Pay by year">
</el-switch>
<el-switch
  style="display: block"
  v-model="value4"
  on-color="#13ce66"
  off-color="#ff4949"
  on-text="Pay by month"
  off-text="Pay by year">
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

:::demo You can set `on-value` and `off-value` attributes. They both receive a `Boolean`, `String` or `Number` typed value.

```html
<el-tooltip :content="'Switch value: ' + value5" placement="top">
  <el-switch
    v-model="value5"
    on-color="#13ce66"
    off-color="#ff4949"
    on-value="100"
    off-value="0">
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
on-close-icon | class name of the icon displayed when in `on` state, overrides `on-text` | string | — | —
off-close-icon |class name of the icon displayed when in `off` state, overrides `off-text`| string | — | —
on-text | text displayed when in `on` state | string | — | —
off-text | text displayed when in `off` state | string | — | —
on-value  | switch value when in `on` state | boolean / string / number | — | true
off-value  | switch value when in `off` state | boolean / string / number | — | false
on-color | background color when in `on` state | string | — | #409EFF
off-color | background color when in `off` state | string | — | #C0CCDA
name| input name of Switch | string | — | —

### Events

 Event Name | Description | Parameters
---- | ----| ----
change | triggers when value changes | value after changing

### Methods
Method | Description | Parameters
------|--------|-------
focus | focus the Switch component | —
