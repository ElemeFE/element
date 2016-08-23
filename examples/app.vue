<style lang="css">
  @import '../node_modules/highlight.js/styles/color-brewer.css';
  @import 'assets/styles/common.css';
  @import 'assets/styles/fonts/style.css';

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #app {
    height: 100%;
  }

  body {
    font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
    overflow: auto;
    font-weight: 300;
  }

  .main-cnt {
    margin-top: -80px;
    padding: 80px 0 120px;
    box-sizing: border-box;
    min-height: 100%;
  }

  .page-cnt {
  }
  .demo {
    margin: 20px 0;
  }
</style>

<template>
  <div id="app">
    <main-header></main-header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
  export default {
    name: 'app'
  };
</script>
