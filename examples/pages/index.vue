<style scoped>
  .actor {
    &.typing:after {
      content: '|';
      animation: blink 500ms infinite;
    }
  }
  .banner {
    position: relative;
    height: 420px;
    color: #fff;
    margin-bottom: 130px;

    .container {
      position: relative;
    }

    img {
      position: absolute;
      top: 15px;
      right: -10px;
    }
  }
  .banner-sky {
    position: absolute;
    top: -150px;
    bottom: -15px;
    width: 100%;
    margin-top: -140px;
    transform: skewY(-5deg);
    transform-origin: center;
    background-image: linear-gradient(180deg, #0d1a44 13%, #3c4f91 56%, #5fc1e4 100%);
  }
  img.banner-stars {
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
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
  @keyframes blink {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
<template>
  <div>
    <div class="banner">
      <div class="banner-sky"></div>
      <img class="banner-stars" src="~examples/assets/images/stars.png" alt="Element">
      <div class="container">
        <div class="banner-desc">
          <h2>Element</h2>
          <div id="line1" class="actor"></div>
          <div id="line2" class="actor"></div>
        </div>
        <img src="~examples/assets/images/banner-bg.svg" alt="Element">
      </div>
    </div>
    <div class="cards">
      <ul class="container">
        <li>
          <div class="card">
            <img src="~examples/assets/images/zhinan.png" alt="">
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
            <img src="~examples/assets/images/zujian.png" alt="">
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
  import theaterJS from 'theaterjs';

  export default {
    mounted() {
      function typing(theater) {
        theater
          .addScene('产品设计师', 600, -5, 800)
          .addScene('交互设计师', 600, -5, 500)
          .addScene('视觉设计师', 600, -5, 700)
          .addScene('产品经理', 600, -4, 600)
          .addScene('前端工程师', 600, -5, 800)
          .addScene((done) => {
            typing(theater);
            done();
          });
      }
      var theater = theaterJS();
      theater
        .on('type:start, erase:start', function() {
          theater.getCurrentActor().$element.classList.add('typing');
        })
        .on('type:end, erase:end', function() {
          theater.getCurrentActor().$element.classList.remove('typing');
        });
      theater
        .addActor('line1', { speed: 0.8, accuracy: 0.6 })
        .addActor('line2')
        .addScene(400)
        .addScene('line1:快速搭建页面', 600)
        .addScene('line2:只为守护世界和平', 800, -6, '让你少加班', 1000)
        .addScene('line2:只为这样的你: ', 600)
        .addScene((done) => {
          typing(theater);
          done();
        });
    }
  };
</script>
