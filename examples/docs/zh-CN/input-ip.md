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

用于输入 IPv4 字符串，增加错误检测功能

### 基础用法

:::demo 要使用它，只需要在`el-input-ip`元素中使用`v-model`绑定变量即可，变量的初始值即为默认值。
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

### 禁用状态

:::demo `disabled`属性接受一个`Boolean`，设置为`true`即可禁用整个组件。

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
