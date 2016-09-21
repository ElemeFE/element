<style scoped>
  .actor {
    min-height: 65px;

    &:after {
      content: '';
      width: 6px;
      height: 50px;
      vertical-align: -8px;
      margin-left: 5px;
      background-color: #fff;
      display: inline-block;
      animation: blink 400ms infinite alternate;
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
    padding-top: 110px;
    padding-left: 30px;
    font-size: 46px;
    position: relative;
    z-index: 10;

    h2 {
      font-size: 46px;
      margin: 0;
    }
    
    p {
      font-size: 14px;
      opacity: .8;
      width: 420px;
      line-height: 1.8;
      padding-left: 3px;
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
      width: 120px;
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
      line-height: 1.8;
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
  @media (max-width: 1140px) {
    .cards {
      width: 100%;
    }
  }
</style>
<template>
  <div>
    <div class="banner">
      <div class="banner-sky"></div>
      <img class="banner-stars" src="~examples/assets/images/stars.png" alt="Element">
      <div class="container">
        <div class="banner-desc">
          <h2>网站快速成型工具</h2>
          <div id="line2" class="actor"></div>
          <p>Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。</p>
        </div>
        <img src="~examples/assets/images/banner-bg.svg" alt="Element">
      </div>
    </div>
    <div class="cards">
      <ul class="container">
        <li>
          <div class="card">
            <img src="~examples/assets/images/guide.png" alt="">
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
            <img src="~examples/assets/images/component.png" alt="">
            <h3>组件</h3>
            <p>使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。</p>
            <router-link
              active-class="active"
              to="/component/layout"
              exact>查看详情
            </router-link>
          </div>
        </li>
        <li>
          <div class="card">
            <img src="~examples/assets/images/resource.png" alt="">
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
          .addScene('产品设计师', 1800, -5, 800)
          .addScene('交互设计师', 1800, -5, 500)
          .addScene('视觉设计师', 1800, -5, 700)
          .addScene('产品经理', 1800, -4, 600)
          .addScene('前端工程师', 1800, -5, 800)
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
        .addActor('line2', { speed: 0.5, accuracy: 1 })
        .addScene(2600)
        .addScene('line2:只为守护世界和平', 300, -6, 1000)
        .addScene('让你少加班', 300, -5)
        .addScene('line2:只为这样的你: ', 400)
        .addScene((done) => {
          typing(theater);
          done();
        });
    }
  };
</script>
