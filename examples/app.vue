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
    
    @when component {
      .main-cnt {
        padding: 0;
        margin-top: 0;
        min-height: auto;
      }
      .headerWrapper {
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 1000;
        border-bottom: solid 1px #ccc;
      }
    }
  }

  body {
    font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
    overflow: auto;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: #1989FA;
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
        background-color: rgba(255, 255, 255, .7);
        color: #445368;
      }
    }

    .warning {
      border-bottom-right-radius: 4px;
      border-left: 4px solid #f66;
      border-top-right-radius: 4px;
      padding: 12px 24px 12px 30px;
      position: relative;
      background-color: #f8f8f8;
      margin-top: 20px;
      
      &::before {
        background-color: #f66;
        border-radius: 100%;
        color: #fff;
        content: "!";
        font-family: Dosis,Source Sans Pro,Helvetica Neue,Arial,sans-serif;
        font-size: 14px;
        font-weight: 700;
        left: -12px;
        line-height: 20px;
        position: absolute;
        width: 20px;
        height: 20px;
        text-align: center;
        top: 50%;
        transform: translateY(-50%);
      }
  
      code {
        background-color: rgba(255, 255, 255, .7);
        color: #445368;
      }
    }
  }
  .demo {
    margin: 20px 0;
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
  <div id="app" :class="{ 'is-component': isComponent }">
    <main-header v-if="lang !== 'play'"></main-header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
    <main-footer v-if="lang !== 'play' && !isComponent"></main-footer>
  </div>
</template>

<script>
  import { use } from 'main/locale';
  import zhLocale from 'main/locale/lang/zh-CN';
  import enLocale from 'main/locale/lang/en';
  use(location.href.indexOf('zh-CN') > -1 ? zhLocale : enLocale);

  export default {
    name: 'app',

    computed: {
      lang() {
        return this.$route.path.split('/')[1] || 'zh-CN';
      },
      isComponent() {
        return /^component-/.test(this.$route.name || '');
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
      }
    },

    mounted() {
      this.localize();
      this.renderAnchorHref();
      this.goAnchor();
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
