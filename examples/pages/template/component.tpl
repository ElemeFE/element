<style>
  .page-component {
    padding-bottom: 95px;
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
          border-collapse: collapse;
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
            border-top: 1px solid #eaeefb;
            background-color: #EFF2F7;
          }
          td, th {
            border-bottom: 1px solid #eaeefb;
            padding: 10px;
          }
          th:first-child, td:first-child {
            padding-left: 10px;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="page-container page-component">
    <el-row>
      <el-col :xs="24" :sm="6">
        <side-nav :data="navsData[lang]" :base="`/${ lang }/component`"></side-nav>
      </el-col>
      <el-col :xs="24" :sm="18">
        <router-view class="content"></router-view>
        <footer-nav></footer-nav>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import navsData from '../../nav.config.json';
  export default {
    data() {
      return {
        lang: this.$route.meta.lang,
        navsData
      };
    }
  };
</script>
