<template>
  <div>
    <el-button @click="value = '#fff'">Change Value</el-button>
    <div>Value: {{ value }}</div>
    <el-color-picker v-model="value"></el-color-picker>

    <div>Value2: {{ value2 }}</div>
    <el-color-picker v-model="value2" show-alpha></el-color-picker>
  </div>
</template>

<style scoped>
</style>

<script type="text/ecmascript-6">
  export default {
    methods: {
    },

    data() {
      return {
        value: '#bfcbd9',
        value2: null
      };
    }
  };
</script>
