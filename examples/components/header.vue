<style>
  .header {
    height: 80px;
    background-color: #20a0ff;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    line-height: @height;

    .container {
      height: 100%;
    }

    h1 {
      margin: 0;
      float: left;
      font-size: 32px;
      font-weight: normal;

      span {
        font-size: 12px;
        display: inline-block;
        width: 34px;
        height: 18px;
        border: 1px solid #fff;
        text-align: center;
        line-height: 18px;
        vertical-align: middle;
        margin-left: 10px;
        border-radius: 3px;
      }
    }
    .el-menu {
      float: right;
      height: 100%;
      line-height: 80px;
      background: transparent;
    }
    .el-menu-item {
      color: #fff;
      margin: 0;
      padding: 0 20px;
    }
    .el-menu-item__bar {
      background-color: #99d2fc;
    }
  }
</style>
<template>
  <header class="header">
    <div class="container">
      <h1>Element<span>Beta</span></h1>
      <el-menu default-active="1">
        <el-menu-item index="1">指南</el-menu-item>
        <el-menu-item index="2">组件</el-menu-item>
        <el-menu-item index="3">资源</el-menu-item>
      </el-menu>
    </div>
  </header>
</template>
<script>
  export default {
  };
</script>
