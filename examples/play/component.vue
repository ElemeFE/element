<template>
  <div>
    <el-button>Test</el-button>
    <el-date-picker v-model="abc" type="daterange" format="yyyy-MM" @change="eee"></el-date-picker>
  </div>
</template>

<style scoped>
</style>

<script type="text/babel">
  export default {
    methods: {
      eee(a) {
        console.log(a);
      }
    },

    data() {
      return {
        abc: ''
      };
    }
  };
</script>
