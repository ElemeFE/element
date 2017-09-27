<style lang="css">
  @import 'highlight.js/styles/color-brewer.css';
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
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: #4078c0;
    text-decoration: none;
  }

  code {
    background-color: #f9fafc;
    padding: 0 4px;
    border: 1px solid #eaeefb;
    border-radius: 4px;
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }

  .hljs {
    line-height: 1.8;
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
    font-size: 12px;
    padding: 18px 24px;
    background-color: #f9fafc;
    border: solid 1px #eaeefb;
    margin-bottom: 25px;
    border-radius: 4px;
    -webkit-font-smoothing: auto;
  }

  .main-cnt {
    margin-top: -80px;
    padding: 80px 0 120px;
    box-sizing: border-box;
    min-height: 100%;
  }

  .container,
  .page-container {
    width: 1140px;
    padding: 0 30px;
    margin: 0 auto;
  }

  .page-container {
    padding-top: 55px;

    h2 {
      font-size: 28px;
      color: #1f2d3d;
      margin: 0;
    }
    h3 {
      font-size: 22px;
    }
    h2, h3, h4, h5 {
      font-weight: normal;
      color: #1f2f3d;

      &:hover a {
        opacity: .4;
      }

      a {
        float: left;
        margin-left: -20px;
        opacity: 0;
        cursor: pointer;

        &:hover {
          opacity: .4;
        }
      }
    }

    p {
      font-size: 14px;
      color: #5e6d82;
      line-height: 1.5em;
    }

    .tip {
      padding: 8px 16px;
      background-color: #ECF8FF;
      border-radius: 4px;
      border-left: #50bfff 5px solid;
      margin-top: 20px;

      code {
        background-color: rgba(#fff, .7);
        color: #445368;
      }
    }
  }
  .demo {
    margin: 20px 0;
  }
  
  .carbon-teaser {
    border-radius: 0;
    overflow: hidden;

    .el-dialog__header {
      display: none;
    }

    .el-dialog__body {
      padding: 0;
      display: flex;
      justify-content: center;
      position: relative;
      background: #000;
    }

    .carbon-teaser__main {
      height: 100vh;
      min-height: 600px;
    }

    .carbon-teaser__close {
      position: absolute;
      width: 40px;
      height: 40px;
      top: 25px;
      right: 45px;
      text-align: center;
      cursor: pointer;
      opacity: .8;
      transition: .2s ease-out;

      &::after,
      &::before {
         position: absolute;
         content: '';
         display: inline-block;
         width: 4px;
         border-radius: 1px;
         height: 40px;
         background: #ff3737;
         box-shadow: 1px 0 1px 0 rgba(255, 255, 255, .3) inset, -2px 0 1px 0 rgba(0, 0, 0, .1) inset;
         transition: .2s ease-out;
      }

      &::after {
        transform: rotate(45deg);
      }

      &::before {
        transform: rotate(-45deg);
      }

      &:hover {
         opacity: 1;

         &::after,
         &::before {
            box-shadow: 2px 0 1px 0 rgba(255, 255, 255, .4) inset, -2px 0 1px 0 rgba(0, 0, 0, .1) inset, 0 0 10px 3px #ff1616;
         }
      }

    }

    .carbon-teaser__button {
      position: absolute;
      bottom: 12%;
      display: block;
      width: 400px;
      height: 19.11%;

      [class*=carbon-teaser__more] {
        position: absolute;
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
        cursor: pointer;
        background-repeat: no-repeat;
        background-position: center;
        background-size: auto 80%;
        transition: .2s ease-in;
      }

      [class*=dark] {
        background-image: url(~examples/assets/images/button-d-cn.png);
        &.is-en {
          background-image: url(~examples/assets/images/button-d-en.png);
        }
      }

      [class*=light] {
        opacity: 0;
        background-image: url(~examples/assets/images/button-l-cn.png);
        &.is-en {
          background-image: url(~examples/assets/images/button-l-en.png);
        }
      }

      &:hover {
        [class*=light] {
          opacity: 1;
        }

        [class*=dark] {
          opacity: 0;
        }
      }
    }
  }
  
  @media (max-width: 1140px) {
    .container,
    .page-container {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .container,
    .page-container {
      padding: 0 20px;
    }
  }
</style>

<template>
  <div id="app">
    <main-header v-if="lang !== 'play'"></main-header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
    <main-footer v-if="lang !== 'play'"></main-footer>
    <el-dialog
      :visible.sync="dialogVisible"
      size="full"
      custom-class="carbon-teaser"
      @close="handleDialogClose"
      :close-on-press-escape="false"
      :close-on-click-modal="false">
      <img
        src="https://i.loli.net/2017/09/27/59cb11edaa26d.jpg"
        class="carbon-teaser__main">
      <a :href="hrefOfCarbonLearnMore" target="_blank" class="carbon-teaser__button">
        <span class="carbon-teaser__more-dark" :class="lang !== 'zh-CN' && 'is-en'"></span>
        <span class="carbon-teaser__more-light" :class="lang !== 'zh-CN' && 'is-en'"></span>
      </a>

      <div class="carbon-teaser__close" @click="dialogVisible = false"></div>
    </el-dialog>
  </div>
</template>

<script>
  import { use } from 'main/locale';
  import zhLocale from 'main/locale/lang/zh-CN';
  import enLocale from 'main/locale/lang/en';
  use(location.href.indexOf('zh-CN') > -1 ? zhLocale : enLocale);

  export default {
    name: 'app',

    data() {
      return {
        dialogVisible: false
      };
    },

    computed: {
      lang() {
        return this.$route.path.split('/')[1] || 'zh-CN';
      },

      hrefOfCarbonLearnMore() {
        return this.lang === 'zh-CN' ? 'https://github.com/ElemeFE/element/issues/7236' : 'https://github.com/ElemeFE/element/issues/7237';
      }
    },

    watch: {
      lang() {
        this.localize();
      }
    },

    methods: {
      localize() {
        use(this.lang === 'zh-CN' ? zhLocale : enLocale);
      },

      renderAnchorHref() {
        if (/changelog/g.test(location.href)) return;
        const anchors = document.querySelectorAll('h2 a,h3 a');
        const basePath = location.href.split('#').splice(0, 2).join('#');

        [].slice.call(anchors).forEach(a => {
          const href = a.getAttribute('href');
          a.href = basePath + href;
        });
      },

      goAnchor() {
        if (location.href.match(/#/g).length > 1) {
          const anchor = location.href.match(/#[^#]+$/g);
          if (!anchor) return;
          const elm = document.querySelector(anchor[0]);
          if (!elm) return;

          setTimeout(_ => {
            document.documentElement.scrollTop = document.body.scrollTop = elm.offsetTop + 120;
          }, 50);
        }
      },

      handleDialogClose() {
        localStorage.setItem('CARBON_TEASER_V2', 1);
      }
    },

    mounted() {
      this.localize();
      this.renderAnchorHref();
      this.goAnchor();

      const intrigued = localStorage.getItem('CARBON_TEASER');
      if (!intrigued) {
        const img = new Image();
        img.onload = () => {
          this.dialogVisible = true;
        };
        img.src = 'https://i.loli.net/2017/09/27/59cb11edaa26d.jpg';
      }
    },

    created() {
      window.addEventListener('hashchange', () => {
        if (location.href.match(/#/g).length < 2) {
          document.documentElement.scrollTop = document.body.scrollTop = 0;
          this.renderAnchorHref();
        } else {
          this.goAnchor();
        }
      });
    }
  };
</script>
