<script>
  module.exports = {
    data () {
      return {
        basic: '1',
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
  <el-content-switch v-model="basic" label="1">Opção A</el-content-switch>
  <el-content-switch v-model="basic" label="2">Opção B</el-content-switch>
  <el-content-switch v-model="basic" label="3">Opção C</el-content-switch>
</template>

<script>
  export default {
    data () {
      return {
        basic: '1',
      };
    },
  };
</script>

:::
