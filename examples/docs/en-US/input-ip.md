<script>
  export default {
    data() {
      return {
        ip1: '1.1.1.1',
        ip2: '2.2.2.2'
      };
    }
  };
</script>

## InputIp

Input IPv4 string with error checking support

### Basic usage

:::demo To use it, bind a variable to `v-model` in a `el-input-ip` element. Initial value of the variable is default value of the element.
```html
<template>
  <el-input-ip v-model="ip1"></el-input-ip>
</template>
<script>
  export default {
    data() {
      return {
        ip1: '1.1.1.1'
      };
    }
  };
</script>
```
:::

### Disabled

:::demo To disable the entire element, set its Attr `disabled` to `true`.

```html
<template>
  <el-input-ip v-model="ip2" :disabled="true"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        ip2: '1.1.1.1'
      }
    }
  };
</script>
```
:::
