<style scoped>
  .banner {
    height: 420px;
    background-color: #20a0ff;
    color: #fff;
    margin-bottom: 130px;

    .container {
      position: relative;
    }

    img {
      position: absolute;
      top: 15px;
      right: -105px;
    }
  }
  .banner-desc {
    padding-top: 80px;
    font-size: 46px;
    position: relative;
    z-index: 10;

    h2 {
      font-size: 80px;
      margin: 0;
    }
  }
  .cards {
    margin: 0 auto 110px;
    width: 960px;

    .container {
      @utils-clearfix;
      padding: 0;
      margin: 0 -11px;
      width: auto;
    }

    li {
      width: 33.33333%;
      padding: 0 11px;
      box-sizing: border-box;
      float: left;
      list-style: none;
    }
  }
  .card {
    height: 430px;
    width: 100%;
    background:#ffffff;
    border:1px solid #eaeefb;
    border-radius:5px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    transition: bottom .3s;
    bottom: 0;

    img {
      margin: 66px auto 60px;
    }
    h3 {
      margin: 0;
      font-size: 18px;
      color: #1f2f3d;
      font-weight: normal;
    }
    p {
      font-size: 14px;
      color: #99a9bf;
      padding: 0 25px;
    }
    a {
      height: 53px;
      line-height: 52px;
      font-size: 14px;
      color: #20a0ff;
      text-align: center;
      border: 0;
      border-top: 1px solid #eaeefb;
      padding: 0;
      cursor: pointer;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #fff;
      border-radius: 0 0 5px 5px;
      transition: all .3s;
      text-decoration: none;
      display: block;

      &:hover {
        background-color: #20a0ff;
        color: #fff;
        background: #20a0ff;
      }
    }
    &:hover {
      bottom: 6px;
      box-shadow: 0px 6px 18px 0px rgba(232,237,250,0.50);
    }
  }
</style>
<template>
  <div>
    <div class="banner">
      <div class="container">
        <div class="banner-desc">
          <h2>Element</h2>
          <div id="source" style="display: none;" ref="type-source">
            快速搭建页面<br/>只为这样的你: <span data-type="back" ref="type-job">设计师</span>
          </div>
          <div id="output-wrap">
            <span id="output" ref="type-output"></span>
            <span class="typing-cursor typing-cursor-white">|</span>
          </div>
        </div>
        <img src="~examples/assets/images/banner-bg.svg" alt="Element">
      </div>
    </div>
    <div class="cards">
      <ul class="container">
        <li>
          <div class="card">
            <img src="~examples/assets/images/zujian.svg" alt="">
            <h3>指南</h3>
            <p>了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。</p>
            <router-link
              active-class="active"
              to="/guide/design"
              exact>查看详情
            </router-link>
          </div>
        </li>
        <li>
          <div class="card">
            <img src="~examples/assets/images/zhinan.svg" alt="">
            <h3>组件</h3>
            <p>使用组件 Demo 快速体验交互细节;使用前端框架封装的代码帮助工程师快速开发。</p>
            <router-link
              active-class="active"
              to="/component/layout"
              exact>查看详情
            </router-link>
          </div>
        </li>
        <li>
          <div class="card">
            <img src="~examples/assets/images/ziyuan.svg" alt="">
            <h3>资源</h3>
            <p>下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。</p>
            <router-link
              active-class="active" 
              to="/resource"
              exact>查看详情
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Typing from 'typing.js';
  require('typing.js/typing.css');

  export default {
    mounted() {
      var typing = new Typing({
        source: this.$refs['type-source'],
        output: this.$refs['type-output'],
        delay: 80,
        done: function() {}
      });
      typing.start();
    }
  };
</script>
