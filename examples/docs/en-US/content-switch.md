<script>
  module.exports = {
    data () {
      return {
        left: '1',
        poli: '3',
        basic: '2',
        right: '3',
        center: '2',
        couple: '1',
        disabled: '1',
      };
    },
  };
</script>

## Content Switch

Content switch

### Basic usage

@todo sobre o component

:::demo Esse componente é bem simples de usar, você precisa fazer o binding usando v-model. O valor da váriavel associada vai ser igual ao da propriedade Label do component `ElContentSwitch`.

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


### Group

@todo Content switch em grupo. A unica diferença é que os bindings são feitos no `ElContentSwitchGroup` em vez de diretamente no componente `ElContentSwitch`

:::demo 

```html
<template>
  <div>
    <el-content-switch-group v-model="left">
      <el-content-switch label="1">OPT 1</el-content-switch>
      <el-content-switch label="2">OPT 2</el-content-switch>
      <el-content-switch label="3">OPT 3</el-content-switch>
    </el-content-switch-group>
  </div>

  <div style="margin-top: 20px">
    <el-content-switch-group v-model="center">
      <el-content-switch label="1">OPT 1</el-content-switch>
      <el-content-switch label="2">OPT 2</el-content-switch>
      <el-content-switch label="3">OPT 3</el-content-switch>
    </el-content-switch-group>
  </div>

  <div style="margin-top: 20px">
    <el-content-switch-group v-model="right">
      <el-content-switch label="1">OPT 1</el-content-switch>
      <el-content-switch label="2">OPT 2</el-content-switch>
      <el-content-switch label="3">OPT 3</el-content-switch>
    </el-content-switch-group>
  </div>

  <div style="margin-top: 20px">
    <el-content-switch-group v-model="disabled" disabled>
      <el-content-switch label="1">OPT 1</el-content-switch>
      <el-content-switch label="2">OPT 2</el-content-switch>
      <el-content-switch label="3">OPT 3</el-content-switch>
    </el-content-switch-group>
  </div>

  <div style="margin-top: 20px">
    <el-content-switch-group v-model="couple">
      <el-content-switch label="1">OPT 1</el-content-switch>
      <el-content-switch label="2">OPT 2</el-content-switch>
    </el-content-switch-group>
  </div>

  <div style="margin-top: 20px">
    <el-content-switch-group v-model="poli">
      <el-content-switch label="1">OPT 1</el-content-switch>
      <el-content-switch label="2">OPT 2</el-content-switch>
      <el-content-switch label="3">OPT 3</el-content-switch>
      <el-content-switch label="4">OPT 4</el-content-switch>
      <el-content-switch label="5">OPT 5</el-content-switch>
    </el-content-switch-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        left: '1',
        poli: '3',
        right: '3',
        center: '2',
        couple: '1',
        disabled: '1',
      };
    },
  };
</script>

:::
