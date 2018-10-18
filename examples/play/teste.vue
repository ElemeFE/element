<template>
  <el-container fluid>
    <el-row type="flex">
      <div class="el-col el-col-md-6 el-col-lg-12">
        <el-checkbox v-model="checked" size="large">Option</el-checkbox>
      </div>
      <div class="el-col el-col-md-6 el-col-lg-12">
        what? are you serious?
      </div>
    </el-row>
  </el-container>
</template>
<script>
	export default {
    data() {
      return {
        checked: false
      }
    }
	}
</script>
<style lang="scss">
  .teste {
    > a {
      background: white;
      padding: 20px;
    }
  }
</style>