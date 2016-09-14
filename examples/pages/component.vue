<style>
  .page-component {
    padding-bottom: 95px;
  }
  .el-col {
    box-sizing: border-box;
  }
  .page-component {
    .content {
      margin-left: -1px;
      
      > {
        h3 {
          margin: 45px 0 15px;
        }
        table {
          width: 100%;
          background-color: #fff;
          color: #5e6d82;
          font-size: 14px;
          margin-bottom: 45px;
          
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
    }
  }
</style>
<template>
  <div class="page-container page-component">
    <el-row>
      <el-col :span="6">
        <side-nav :data="navsData" base="/component"></side-nav>
      </el-col>
      <el-col :span="18">
        <router-view class="content"></router-view>
        <footer-nav></footer-nav>
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
