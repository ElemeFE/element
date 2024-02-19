<style scoped>
  .banner {
    text-align: center;
  }
  .banner-desc {
    padding-top: 50px;

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
      font-size: 20px;
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
  </div>
</template>
<script>
  import throttle from 'throttle-debounce/throttle';
  
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
      }
    },
    data() {
      return {
        lang: this.$route.meta.lang,
        mainImgOffset: 0
      };
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.throttledHandleScroll);
    },
    mounted() {
      window.addEventListener('scroll', this.throttledHandleScroll);
    }
  };
</script>
