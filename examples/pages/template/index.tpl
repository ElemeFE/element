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
    margin: 30px auto;
    position: relative;
    img {
      width: 100%;
    }
    .jumbotron-red {
      transition: height .1s;
      background: #FFF;
      position: absolute;
      left: 0;
      top:0;
      overflow: hidden;
    }
  }
  .cards {
    margin: 0 auto 110px;
    width: 1140px;

    .container {
      padding: 0;
      margin: 0 -11px;
      width: auto;
      &::before, &::after {
        display: table;
        content: "";
      }
      &::after {
        clear: both;
      }
    }


    li {
      width: 25%;
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
  .theme-intro-b {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 200;
    .intro-banner {
      position: absolute
    }
    img {
      width: 300px;
    }
    .title {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      color: #FFF;
      text-align: center;
      font-weight: bold;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        padding: 0;
        margin: 10px 0;
      }
    }
  }
  .theme-intro-a {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 200;
    .mask{
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: #000;
      opacity: .5;
    }
    .intro-banner {
      top: 50%;
      left: 50%;
      position: fixed;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      box-sizing: border-box;
      text-align: center;
      z-index: 100;
      img {
        width: 100%;
      }
      .intro-text {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        p {
          padding: 0;
          margin: 0;
          font-size: 48px;
          font-weight: bold;
          color: #FFF;
        }
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
    <div class="jumbotron" ref="indexMainImg">
      <img src="~examples/assets/images/theme-index-blue.png" alt="">
      <div class="jumbotron-red" :style="{
           height: mainImgOffset + 'px'
         }">
        <img src="~examples/assets/images/theme-index-red.png" alt="">
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
        <img width="45px" src="~examples/assets/images/duohui.svg" alt="duohui">
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
            <img src="~examples/assets/images/theme-index-icon.svg" alt="">
            <h3><%= 10 ></h3>
            <p><%= 11 ></p>
            <router-link
              active-class="active"
              to="/<%= lang >/theme"
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
    <div class="theme-intro-a" v-if="showIntroA" @click="hideIntroA">
      <div class="intro-banner">
        <img src="~examples/assets/images/theme-intro.png" alt="">
        <div class="intro-text">
          <p><%= 12 ></p>
        </div>
      </div>
      <div class="mask"></div>
    </div>
    <div 
      class="theme-intro-b"
      @click="hideIntroB"
      v-if="showIntroB"
    >
      <div class="intro-banner"
      :style="{
        left: introBX + 'px',
        top: introBY + 'px'
      }"
      >
        <img src="~examples/assets/images/intro-theme-b.png" alt="">
          <div class="title">
            <div>
              <p><%= 13 ></p>
              <p><%= 14 ></p>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
  import throttle from 'throttle-debounce/throttle';
  import { addClass, removeClass } from 'element-ui/src/utils/dom';
  
  export default {
    created() {
      this.throttledHandleScroll = throttle(10, true, index => {
        this.handleScroll(index);
      });
    },
    methods: {
      handleScroll(index) {
        const ele = this.$refs.indexMainImg;
        const rect = ele.getBoundingClientRect();
        const eleHeight = ele.clientHeight + 55;
        let calHeight = (180 - rect.top) * 2;
        if (calHeight < 0) calHeight = 0;
        if (calHeight > eleHeight) calHeight = eleHeight;
        this.mainImgOffset = calHeight;
      },
      hideIntroB() {
        removeClass(document.body, 'el-loading-parent--hidden');
        localStorage.setItem('KNOW_THEME', 'true');
        this.showIntroB = false;
      },
      hideIntroA() {
        this.showIntroA = false;
        this.showIntroB = true;
      }
    },
    data() {
      return {
        lang: this.$route.meta.lang,
        mainImgOffset: 0,
        showIntroA: false,
        showIntroB: false,
        introBY: 0,
        introBX: 0
      };
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.throttledHandleScroll);
    },
    mounted() {
      window.addEventListener('scroll', this.throttledHandleScroll);
      if (localStorage.getItem('KNOW_THEME')) return;
      const themeTab = document.querySelector('.nav-item-theme');
      this.introBX = themeTab.offsetLeft + (themeTab.clientWidth * 0.5) - (300 / 2);
      this.introBY = themeTab.offsetTop + 40;
      this.showIntroA = true;
      addClass(document.body, 'el-loading-parent--hidden');
    }
  };
</script>
