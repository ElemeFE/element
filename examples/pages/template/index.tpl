<style scoped>
  .home {
    background: #F8F9FC;
  }
  .container {
    box-sizing: border-box;
  }
  .banner {
    /* text-align: center; */
    background: url('../../assets/images/banner-bg-1.svg') top left no-repeat;
    padding-top: 160px;
    &-title {
      color: #0F2645;
      font-weight: 700;
      font-size: 80px;
      margin: 0;
    }
    &-description {
      line-height: 26px;
      font-size: 22px;
      color: #5A6A7F;
      margin-bottom: 40px;
    }
    &-image {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 94.6575342%;
      background: url('../../assets/images/banner-image-bottom.png') 0 / 100% no-repeat;
      transition: background-image 1s;
      &-top {
        position: absolute;
        width: 38.630137%;
        height: 0;
        padding-bottom: 38.630137%;
        background: url('../../assets/images/banner-image-top.png') 0 / 100% no-repeat;
        left: 50%;
        transform: translateX(-50%);
        top: 13%;
        transition: all 1s;
      }
      &-top-1 {
        position: absolute;
        width: 38.630137%;
        height: 0;
        padding-bottom: 38.630137%;
        background: url('../../assets/images/banner-image-top-1.png') 0 / 100% no-repeat;
        right: 50%;
        transform: translateX(100%);
        opacity: 0;
        top: 13%;
        transition: all 1s;
      }
      &:hover {
        background-image: url('../../assets/images/banner-image-bottom-1.png');
        .banner-image-top {
          transform: translateX(-100%);
          opacity: 0;
        }
        .banner-image-top-1 {
          transform: translateX(50%);
          opacity: 1;
        }
      }
    }
  }
  .banner-desc {
    padding-top: 50px;

    h1 {
      font-size: 34px;
      margin: 0;
      line-height: 48px;
      color: #555;
    }

    p {
      font-size: 18px;
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
  .section {
    padding-bottom: 240px;
    &-head {
      text-align: center;
      color: #333;
      font-size: 40px;
      font-weight: 600;
      line-height: 56px;
      margin: 0;
    }
    &-subhead {
      font-size: 32px;
      line-height: 38px;
      color: rgba(51,51,51,.06);
      font-weight: 700;
      text-align: center;
      margin: 0 0 40px;
    }
  }
  @keyframes  animate-frame {
    from { 
      background-position: 0 0;
    }
    to { 
      background-position: 0 62.0253165%;
    }
  }
  @keyframes  animate-frame-loop {
    from { 
      background-position: 0 63.2911392%;
    }
    to { 
      background-position: 0 100%;
    }
  }

  .card {
    background: #fff;
    transition: box-shadow .3s,border-color .3s;
    &:hover {
      box-shadow: 0 8px 16px 0 rgba(80,101,161,0.10);
    }
    &-thin {
      text-align: center;
      background: #F8F9FC;
      border-radius: 12px;
      .card-footer {
        padding: 32px;
      }
      &:hover {
        background: #fff;
        .card-image-cover {
          animation: 
            animate-frame 1s steps(49),
            animate-frame-loop 1s steps(29) 1s infinite;
        }
      }
    }

    &-product {
      display: flex;
      align-items: end;
      background-image: linear-gradient(90deg, #FDFEFF 0%, #ECF1F8 99%);
      border-radius: 12px;
      .card-image {
        width: auto;
      }
      .card-footer {
        min-height: 84px;
      }
      .card-title {
        font-weight: 500;
        font-size: 22px;
      }

      .card-description {
        color: #333;
      }
    }

    &-image {
      width: 100%;
    }
    &-image-cover {
      width: 100%;
      padding-bottom: 100%;
      background: url('../../assets/images/xt.png') 0 0 / 100% auto no-repeat;
      overflow: hidden;
      &-1 {
        background-image: url('../../assets/images/br.png');
      }
      &-2 {
        background-image: url('../../assets/images/bz.png');
      }
      &-3 {
        background-image: url('../../assets/images/xl.png');
      }
    }
    &-footer {
      padding: 16px;
    }
    &-title {
      margin: 0 0 7px;
      font-size: 20px;
      font-weight: 600;
      color: #333;
      line-height: 28px;
    }
    &-description {
      font-size: 14px;
      color: #999;
      margin: 0;
    }
  }
  .partner {
    /* background: url('../../assets/images/partner-bg.png') center / 100% no-repeat; */
    background: 
            linear-gradient(to bottom, #F8F9FC, #E5E5E5, #F8F9FC) 25% 0/1px no-repeat,
            linear-gradient(to bottom, #F8F9FC, #E5E5E5, #F8F9FC) 50% 0/1px no-repeat,
            linear-gradient(to bottom, #F8F9FC, #E5E5E5, #F8F9FC) 75% 0/1px no-repeat,
            linear-gradient(to right, #F8F9FC, #E5E5E5, #F8F9FC) 0 50%/100% 1px no-repeat;
    .el-col {
      padding: 14px 30px;
    }
    &-item {
      font-family: "elementdoc" !important;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      text-align: center;
      font-size: 60px;
      color: #D2D7E3;
      &:hover {
        color: #1778FF;
        transition: 0.5s background;
      }
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
    .banner {
      padding-top: 120px;
      background: transparent;
      &-image {
        display: none;
      }
      
    }
    .section {
      padding-bottom: 120px;
    }
    .card {
      margin-bottom: 16px;
    }
    .partner {
      background: none;
      &-item {
        font-size: 40px;
      }
    }
  }
</style>
<style>
@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
  animation-play-state: paused;
}
.animate__animated {
  .animate__fadeInUp {
    animation-duration: 1s;
    animation-fill-mode: both; 
    animation-play-state: running;
  }
}
</style>
<template>
  <div class="home">
    <section class="section banner animate__animated">
      <div class="container">
        <el-row type="flex" align="middle">
          <el-col :xs="24" :sm="13">
            <h1 class="banner-title animate__fadeInUp">Element Design</h1>
            <p class="banner-description animate__fadeInUp"><%= 1 ></p>
            <el-button @click="$router.push(`${lang}/component`)" round type="primary" class="animate__fadeInUp"><%= 2 ></el-button>
            <el-button @click="$router.push(`${lang}/guide/design`)" round plain type="default" class="animate__fadeInUp"><%= 3 ></el-button>
          </el-col>
          <el-col :xs="24" :sm="11">
            <div class="banner-image">
              <div  class="banner-image-top"></div>
              <div  class="banner-image-top-1"></div>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>
    <section class="section container">
      <h2 class="section-head animate__fadeInUp"><%= 4 ></h2>
      <h3 class="section-subhead animate__fadeInUp">OPEN SOURCE COMPONENT LIBRARY</h3>
      <el-row :gutter="40" class="animate__fadeInUp">
        <el-col :xs="24" :sm="8">
          <a class="card card-product" :href="`/#/${lang}/component`">
            <div class="card-footer">
              <h3 class="card-title">Element UI</h3>
              <p class="card-description">
                <%= 5 >
              </p>
            </div>
            <img src="../../assets/images/element-ui.png" class="card-image">
          </a>
        </el-col>
        <el-col :xs="24" :sm="8">
          <a class="card card-product" href="https://element-plus.org">
            <div class="card-footer">
              <h3 class="card-title">Element Plus</h3>
              <p class="card-description">
                <%= 6 >
              </p>
            </div>
            <img src="../../assets/images/element-plus.png" class="card-image">
          </a>
        </el-col>
        <el-col :xs="24" :sm="8">
          <div class="card card-product">
            <div class="card-footer">
              <h3 class="card-title">Element Mobile</h3>
              <p class="card-description">
                <%= 7 >
              </p>
            </div>
            <img src="../../assets/images/element-mobile.png" class="card-image">
          </div>
        </el-col>
      </el-row>
    </section>
    <section class="section container">
      <div class="animate__fadeInUp">
        <h2 class="section-head"><%= 8 ></h2>
        <h3 class="section-subhead">COMPONENT LIBRARY ADVANTAGE</h3>
      </div>
      <el-row :gutter="40" class="animate__fadeInUp">
        <el-col :sx="24" :sm="6">
          <div class="card card-thin">
            <div class="card-image-cover">
            </div>
            <div class="card-footer">
              <h3 class="card-title"><%= 9 ></h3>
              <p class="card-description">
                <%= 10 >
              </p>
            </div>
          </div>
        </el-col>
        <el-col :sx="24" :sm="6">
          <div class="card card-thin">
            <div class="card-image-cover card-image-cover-1">
            </div>
            <div class="card-footer">
              <h3 class="card-title"><%= 11 ></h3>
              <p class="card-description">
                <%= 12 >
              </p>
            </div>
          </div>
        </el-col>
        <el-col :sx="24" :sm="6">
          <div class="card card-thin">
            <div class="card-image-cover card-image-cover-2">
            </div>
            <div class="card-footer">
              <h3 class="card-title"><%= 13 ></h3>
              <p class="card-description">
                <%= 14 >
              </p>
            </div>
          </div>
        </el-col>
        <el-col :sx="24" :sm="6">
          <div class="card card-thin">
            <div class="card-image-cover card-image-cover-3">
            </div>
            <div class="card-footer">
              <h3 class="card-title"><%= 15 ></h3>
              <p class="card-description">
                <%= 16 >
              </p>
            </div>
          </div>
        </el-col>
      </el-row>
    </section>
    <section class="section container">
      <div class="animate__fadeInUp">
        <h2 class="section-head"><%= 17 ></h2>
        <h3 class="section-subhead">Partner</h3>
      </div>
      <el-row class="partner animate__fadeInUp">
        <el-col :xs="12 ":sm="6">
          <div class="partner-item doc-icon-eleme"></div>
        </el-col>
        <el-col :xs="12 ":sm="6">
          <div class="partner-item doc-icon-koubei"></div>
        </el-col>
        <el-col :xs="12 ":sm="6">
          <div class="partner-item doc-icon-fengniaojipei"></div>
        </el-col>
        <el-col :xs="12 ":sm="6">
          <div class="partner-item doc-icon-keruyun"></div>
        </el-col>
        <el-col :xs="12 ":sm="6">
          <div class="partner-item doc-icon-xuanyuan"></div>
        </el-col>
        <el-col :xs="12 ":sm="6">
          <div class="partner-item doc-icon-chensen"></div>
        </el-col>
        <el-col :xs="12 ":sm="6">
          <div class="partner-item doc-icon-koubeizhanggui"></div>
        </el-col>
        <el-col :xs="12 ":sm="6">
          <div class="partner-item doc-icon-crm"></div>
        </el-col>
      </el-row>
    </section>
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
      isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const viewportHeight =
            window.innerHeight || document.documentElement.clientHeight;
        return (
          viewportHeight - rect.top >= 0
        );
      },
      handleScroll(index) {
        const els = document.querySelectorAll('.section');
        els.forEach((item) => {
          if (this.isElementInViewport(item)) {
            item.classList.add('animate__animated');
          }
        });
      }
    },
    data() {
      return {
        active: null,
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
