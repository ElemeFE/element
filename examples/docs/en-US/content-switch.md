<script>
  module.exports = {
    data () {
      return {
        basic: '2',
      };
    },
  };
</script>

## Content Switch

Content switch

### Basic usage

@todo sobre o component

:::demo Esse componente é bem simples de usar, você precisa fazer o binding usando v-model. O valor da váriavel associadad vai ser igual ao da propriedade Label do component `ElContentSwitch`.

```html
<template>
  <!-- default -->
  <el-content-switch v-model="basic" label="1">OPT 1</el-content-switch>

  <!-- active -->
  <el-content-switch v-model="basic" label="2">OPT 2</el-content-switch>

  <!-- active and disabled -->
  <el-content-switch v-model="basic" label="2" disabled>OPT 2</el-content-switch>

  <!-- disabled -->
  <el-content-switch v-model="basic" label="3" disabled>OPT 3</el-content-switch>
</template>

<script>
  export default {
    data () {
      return {
        basic: '2',
      };
    },
  };
</script>

:::
