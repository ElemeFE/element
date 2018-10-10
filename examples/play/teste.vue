<template>
  <el-container fluid>
    <el-row type="flex">
      <div class="el-col el-col-md-6 el-col-lg-12">
        <label for="">teste</label>
        <dl><dt>teste</dt></dl>
        <ul><li>aaa</li></ul>
        <a href="">aa</a>
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
        active: false
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