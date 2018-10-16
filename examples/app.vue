<style lang="css">
  @import 'highlight.js/styles/color-brewer.css';
  @import 'assets/styles/common.css';
  @import 'assets/styles/fonts/style.css';

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;

    &.is-component {
      overflow: hidden;
    }
  }

  #app {
    height: 100%;
    
    @when component {
      overflow-y: hidden;

      .main-cnt {
        padding: 0;
        margin-top: 0;
        height: 100%;
        min-height: auto;
      }

      .headerWrapper {
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 1500;
        
        .container {
          padding: 0;
        }
      }
    }
  }

  a {
    color: #409EFF;
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
    background-color: #fafafa;
    border: solid 1px #eaeefb;
    margin-bottom: 25px;
    border-radius: 4px;
    -webkit-font-smoothing: auto;
  }

  .main-cnt {
    margin-top: -80px;
    padding: 80px 0 340px;
    box-sizing: border-box;
    min-height: 100%;
  }

  .container,
  .page-container {
    width: 1140px;
    padding: 0;
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
      margin: 20px 0;

      code {
        background-color: rgba(255, 255, 255, .7);
        color: #445368;
      }
    }

    .warning {
      padding: 8px 16px;
      background-color: #fff6f7;
      border-radius: 4px;
      border-left: #FE6C6F 5px solid;
      margin: 20px 0;

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
  
    #app.is-component .headerWrapper .container {
      padding: 0 12px;
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
  import esLocale from 'main/locale/lang/es';

  const lang = location.hash.replace('#', '').split('/')[1] || 'zh-CN';
  const localize = lang => {
    switch (lang) {
      case 'zh-CN':
        use(zhLocale);
        break;
      case 'es':
        use(esLocale);
        break;
      default:
        use(enLocale);
    }
  };
  localize(lang);

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
      lang(val) {
        if (val === 'zh-CN') {
          this.suggestJump();
        }
        localize(val);
      }
    },

    methods: {
      suggestJump() {
        if (process.env.NODE_ENV !== 'production') return;

        const href = location.href;
        const preferGithub = localStorage.getItem('PREFER_GITHUB');
        if (href.indexOf('element-cn') > -1 || preferGithub) return;
        setTimeout(() => {
          if (this.lang !== 'zh-CN') return;
          this.$confirm('建议大陆用户访问部署在国内的站点，是否跳转？', '提示')
            .then(() => {
              location.href = location.href
                .replace('https:', 'http:')
                .replace('element.', 'element-cn.');
            })
            .catch(() => {
              localStorage.setItem('PREFER_GITHUB', 'true');
            });
        }, 1000);
      }
    },

    mounted() {
      localize(this.lang);
      if (this.lang === 'zh-CN') {
        this.suggestJump();
      }
      // setTimeout(() => {
      //   const notified = localStorage.getItem('ES_NOTIFIED_2');
      //   if (!notified && this.lang !== 'es') {
      //     const title = this.lang === 'zh-CN'
      //       ? '西班牙语文档正式上线'
      //       : 'Spanish docs now available';
      //     const message = this.lang === 'zh-CN'
      //       ? '点击这里进行切换'
      //       : 'Click here to switch';
      //     const self = this;
      //     this.$notify({
      //       title,
      //       duration: 0,
      //       message,
      //       onClick() {
      //         self.$router.push('/es');
      //         localStorage.setItem('ES_NOTIFIED_2', 1);
      //       },
      //       onClose() {
      //         localStorage.setItem('ES_NOTIFIED_2', 1);
      //       }
      //     });
      //   }
      // }, 3500);
    }
  };
</script>
