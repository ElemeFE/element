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
        value3: '100',
        value4: true
      }
    }
  };
</script>

## Switch

Switch is used for switching between two opposing states.

### Basic usage

:::demo Bind `v-model` to a `Boolean` typed variable. You can add `on-text` or `off-text` attribute to show texts when the component is `on` or `off`, respectively. The `on-color` and `off-color` attribute decides the background color in two states.

```html
<el-switch
  v-model="value1"
  on-text=""
  off-text="">
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

### Extended value types

:::demo You can set `on-value` and `off-value` attributes. They both receive a `Boolean`, `String` or `Number` typed value.

```html
<el-tooltip :content="'Switch value: ' + value3" placement="top">
  <el-switch
    v-model="value3"
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
        value3: '100'
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
  v-model="value4"
  on-text=""
  off-text=""
  disabled>
</el-switch>
<el-switch
  v-model="value4"
  disabled>
</el-switch>

<script>
  export default {
    data() {
      return {
        value4: true
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
width | width of Switch | number | — | 58 (with text) / 46 (no text)
on-close-icon | class name of the icon displayed when in `on` state, overrides `on-text` | string | — | —
off-close-icon |class name of the icon displayed when in `off` state, overrides `off-text`| string | — | —
on-text | text displayed when in `on` state | string | — | ON
off-text | text displayed when in `off` state | string | — | OFF
on-value  | switch value when in `on` state | boolean / string / number | — | true
off-value  | switch value when in `off` state | boolean / string / number | — | false
on-color | background color when in `on` state | string | — | #20A0FF
off-color | background color when in `off` state | string | — | #C0CCDA
name| input name of Switch | string | — | —

### Events

 Event Name | Description | Parameters
---- | ----| ----
change | triggers when value changes | value after changing
