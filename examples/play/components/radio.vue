<template>
  <el-radio v-model="radio" label="1111" @change="testChange">备选项</el-radio>
  <el-radio v-model="radio" label="2"  @change="testChange">备选项</el-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1111'
      };
    },
    methods: {
      testChange (val) {
        console.log(val);
      }
    }
  }
</script>