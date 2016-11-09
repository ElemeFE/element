<style>
  .page-guide {
    padding: 55px 0 95px;

    .content {
      padding-left: 25px;
      margin-left: -1px;
      h2 {
        margin-bottom: 10px;
      }

      h3 {
        font-size: 22px;
        font-weight: normal;
        margin: 0 0 30px;
        color: #1f2d3d;
      }
      p {
        line-height: 1.6;
        font-size: 14px;
        color: #5e6d82;
      }
      ul {
        margin-bottom: 50px;
        padding-left: 0;
      }
      li {
        font-size: 14px;
        margin-bottom: 10px;
        color: #99a9bf;
        list-style: none;

        &:before {
          content: '';
          display: inline-block;
          width: 4px;
          height: @width;
          border-radius: 50%;
          vertical-align: middle;
          background-color: #5e6d82;
          margin-right: 5px;
        }

        strong {
          color: #5e6d82;
          font-weight: 400;
        }
      }
    }
  }
</style>
<template>
  <div class="page-container page-guide">
    <el-row>
      <el-col :span="5">
        <side-nav :data="navsData" :base="`/${ lang }/guide`"></side-nav>
      </el-col>
      <el-col :span="19">
        <router-view class="content"></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        lang: this.$route.meta.lang,
        navsData: [
          {
            path: '/design',
            name: 'Design Disciplines'
          },
          {
            path: '/nav',
            name: 'Navigation'
          }
        ]
      };
    }
  };
</script>
