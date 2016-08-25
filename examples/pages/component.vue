<style>
  .page-component {
    padding: 50px 0 95px;
  }
  .el-col {
    box-sizing: border-box;
  }
  .page-component .content > {
    h2, h3, h4, h5 {
      font-weight: normal;
      color: #1f2f3d;
    }
    h2 {
      margin: 0;
      font-size: 28px;
    }
    h3 {
      margin: 45px 0 15px;
      font-size: 22px;
    }
    p {
      font-size: 14px;
      color: #5e6d82;
    }
    table {
      width: 100%;
      background-color: #fff;
      color: #5e6d82;
      font-size: 14px;
      
      strong {
        font-weight: normal;
      }
      th {
        text-align: left;
      }
      td, th {
        border-bottom: 1px solid #eaeefb;
        padding: 10px 0;
      }
    }
  }
</style>
<template>
  <div class="page-component container">
    <el-row :gutter="25">
      <el-col :span="6">
        <side-nav :data="navsData" base="/component"></side-nav>
      </el-col>
      <el-col :span="18">
        <router-view class="content"></router-view>
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
