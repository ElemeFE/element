<template>
  <el-switch
  v-model="value1"
  active-text="按月付费"
  inactive-text="按年付费">
</el-switch>
<el-switch
  style="display: block"
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="按月付费"
  inactive-text="按年付费">
</el-switch>
</template>

<script>
export default {
  data () {
    return {
      value1: true,
      value2: false
    };
  },
  methods: {
    change(val) {
      console.log('我是change' + val)
    },
    input(val) {
      console.log('我是input' + val)
    }
  }
}
</script>

<style>

</style>