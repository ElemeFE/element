<style scoped>
  .banner {
    text-align: center;
  }
  .banner-desc {
    padding-top: 20px;

    h1 {
      font-size: <%= titleSize >px;
      margin: 0;
      line-height: 48px;
      color: #555;
    }

    p {
      font-size: <%= paraSize >px;
      line-height: 28px;
      color: #888;
      margin: 10px 0 5px;
    }
  }
  .sponsors {
    display: flex;
    justify-content: center;
  }
  .sponsor {
    margin: 0 20px 50px;
    display: inline-flex;
    width: 300px;
    height: 100px;
    justify-content: center;

    img {
      margin-right: 20px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    p {
      margin: 0;
      line-height: 1.8;
      color: #999;
      font-size: 14px;
    }
  }
  .jumbotron {
    width: 890px;
    height: 465px;
    margin: 30px auto;
    position: relative;

    div {
      width: 100%;
      height: 100%;
      background-color: transparent;
      position: absolute;
      top: 0;
      left: 0;
    }

    img {
      position: absolute;
    }

    .jumbotron-cloud-1 {
      right: 0;
      top: 0;
      height: 55px;
    }

    .jumbotron-plant-2 {
      left: 60px;
      top: 200px;
    }

    .jumbotron-web {
      height: 385px;
      top: 35px;
      left: 110px;
    }

    .jumbotron-cloud-2 {
      left: 0;
      top: 50px;
      height: 55px;
    }

    .jumbotron-compo-1 {
      left: 94px;
      height: 90px;
      top: 220px;
    }

    .jumbotron-compo-2 {
      right: 73px;
      top: 60px;
      height: 124px;
    }

    .jumbotron-compo-3 {
      right: 42px;
      top: 200px;
      height: 120px;
    }

    .jumbotron-plant-1 {
      bottom: 0;
      left: 30px;
      height: 185px;
    }

    .jumbotron-figure-1 {
      bottom: 0;
      right: 180px;
      height: 140px;
    }

    .jumbotron-figure-2 {
      bottom: 0;
      right: 10px;
      height: 68px;
    }
  }
  .cards {
    margin: 0 auto 110px;
    width: 1140px;

    .container {
      @utils-clearfix;
      padding: 0;
      margin: 0 -11px;
      width: auto;
    }

    li {
      width: 33.33333%;
      padding: 0 19px;
      box-sizing: border-box;
      float: left;
      list-style: none;
    }

    img {
      width: 160px;
      height: 120px;
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
    transition: all .3s ease-in-out;
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
      line-height: 20px;
    }
    a {
      height: 53px;
      line-height: 52px;
      font-size: 14px;
      color: #409EFF;
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
        color: #fff;
        background: #409EFF;
      }
    }
    &:hover {
      bottom: 6px;
      box-shadow: 0 6px 18px 0 rgba(232,237,250,0.50);
    }
  }
  @media (max-width: 1140px) {
    .cards {
      width: 100%;
      .container {
        width: 100%;
        margin: 0;
      }
    }
    .banner .container {
      width: 100%;
      box-sizing: border-box;
    }
    .banner img {
      right: 0;
    }
  }

  @media (max-width: 1000px) {
    .banner .container {
      img {
        display: none;
      }
    }
    .jumbotron {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .cards {
      li {
        width: 80%;
        margin: 0 auto 20px;
        float: none;
      }
      .card {
        height: auto;
        padding-bottom: 54px;
      }
    }
    .banner-stars {
      display: none;
    }
    .banner-desc {
      #line2 {
        display: none;
      }
      h2 {
        font-size: 32px;
      }
      p {
        width: auto;
      }
    }
  }
</style>
<template>
  <div>
    <div class="banner">
      <div class="banner-desc">
        <h1><%= 1 ></h1>
        <p><%= 2 ></p>
      </div>
    </div>
    <div class="jumbotron">
      <div>
        <img class="jumbotron-plant-2" src="~examples/assets/images/plant-2.png" alt="">
        <img class="jumbotron-web" src="~examples/assets/images/web.png" alt="">
        <img class="jumbotron-plant-1" src="~examples/assets/images/plant-1.png" alt="">
        <img class="jumbotron-figure-1" src="~examples/assets/images/figure-1.png" alt="">
        <img class="jumbotron-figure-2" src="~examples/assets/images/figure-2.png" alt="">
      </div>
      <div data-hover-layer="0">
        <img class="jumbotron-cloud-1" src="~examples/assets/images/cloud-1.png" alt="">
        <img class="jumbotron-cloud-2" src="~examples/assets/images/cloud-2.png" alt="">
      </div>
      <div data-hover-layer="1">
        <img class="jumbotron-compo-1" src="~examples/assets/images/compo-1.png" alt="">
        <img class="jumbotron-compo-2" src="~examples/assets/images/compo-2.png" alt="">
        <img class="jumbotron-compo-3" src="~examples/assets/images/compo-3.png" alt="">
      </div>
    </div>
    <div class="sponsors">
      <a class="sponsor" href="https://tipe.io/?ref=element" target="_blank" v-show="lang !== 'zh-CN'">
        <img width="35px" src="~examples/assets/images/tipe.svg" alt="tipe.io">
        <div>
          <p>Sponsored by Tipe.io</p>
          <p>Next Generation API-first CMS</p>
        </div>
      </a>
      <a class="sponsor" href="https://www.duohui.cn/?utm_source=element&utm_medium=web&utm_campaign=element-index" target="_blank">
        <img width="45px" src="~examples/assets/images/duohui.svg" alt="tipe.io">
        <div>
          <p>Sponsored by 多会</p>
          <p>炫酷的新一代活动票务系统</p>
        </div>
      </a>
    </div>
    <div class="cards">
      <ul class="container">
        <li>
          <div class="card">
            <img src="~examples/assets/images/guide.png" alt="">
            <h3><%= 3 ></h3>
            <p><%= 4 ></p>
            <router-link
              active-class="active"
              to="/<%= lang >/guide/design"
              exact><%= 5 >
            </router-link>
          </div>
        </li>
        <li>
          <div class="card">
            <img src="~examples/assets/images/component.png" alt="">
            <h3><%= 6 ></h3>
            <p><%= 7 ></p>
            <router-link
              active-class="active"
              to="/<%= lang >/component/layout"
              exact><%= 5 >
            </router-link>
          </div>
        </li>
        <li>
          <div class="card">
            <img src="~examples/assets/images/resource.png" alt="">
            <h3><%= 8 ></h3>
            <p><%= 9 ></p>
            <router-link
              active-class="active"
              to="/<%= lang >/resource"
              exact><%= 5 >
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { Hover } from 'perspective.js';

  export default {
    data() {
      return {
        lang: this.$route.meta.lang
      };
    },
    mounted() {
      new Hover('.jumbotron', { // eslint-disable-line
        max: 3,
        scale: 1,
        perspective: 700,
        layers: [{
          multiple: 0.01,
          reverseTranslate: true
        }, {
          multiple: 0.02,
          reverseTranslate: true
        }]
      });
    }
  };
</script>
