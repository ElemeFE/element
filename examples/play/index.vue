<template>
<div class="container">
  <el-scrollbar class="wrapper">
    <div class="content1"></div>
  </el-scrollbar>
  <el-scrollbar class="wrapper">
    <div class="content2"></div>
  </el-scrollbar>
  <el-scrollbar class="wrapper">
    <div class="content3"></div>
  </el-scrollbar>
  <el-scrollbar class="wrapper4">
    <div class="content1"></div>
  </el-scrollbar>
  <el-scrollbar class="wrapper4">
    <div class="content3"></div>
  </el-scrollbar>
</div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Element UI!'
      };
    }
  };
</script>
<style lang="scss" scoped>
.container>div {
  float: left;
  margin-right: 20px;
}
.wrapper {
  height: 300px;
  width: 200px;
  border: 1px solid #666;
}
.wrapper4 {
  width: 200px;
  border: 1px solid #666;
  max-height: 300px;
}
.content1 {
    height: 500px;
    width: 400px;
    background-color: #ccc;
  }
  .content2 {
    height: 500px;
    width: 100px;
    background-color: #ccc;
  }
  .content3 {
    height: 200px;
    width: 100px;
    background-color: #ccc;
  }
</style>
