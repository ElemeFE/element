<style>
  .el-col {
    box-sizing: border-box;
  }
</style>
<template>
  <div class="container">
    <el-row :gutter="25">
      <el-col :span="6">
        <side-nav :data="navsData"></side-nav>
      </el-col>
      <el-col :span="18">
        <div class="content">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import { navs } from '../route.config';
  export default {
    data() {
      return {
        navsData: navs
      };
    }
  };
</script>
