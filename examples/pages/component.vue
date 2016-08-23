<template>
  <div class="container">
    <el-col :span="5">
      <side-nav :data="navsData"></side-nav>
    </el-col>
    <el-col :span="19">
      <div class="content">
        <router-view></router-view>
      </div>
    </el-col>
  </div>
</template>
<script>
  import { navs } from '../route.config';
  export default {
    data() {
      return {
        navsData: [{
          name: '组件',
          children: []
        }, {
          name: '安装指南',
          children: [{
            path: '/component/quickstart',
            name: '快速上手'
          }, {
            path: '/component/dev',
            name: '开发指南'
          }]
        }]
      };
    },
    created() {
      this.navsData[0].children = navs;
    }
  }
</script>
