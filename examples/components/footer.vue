<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-main">
        <p class="footer-main-title">Element {{ version }} Beryllium</p>
        <a href="https://github.com/ElemeFE/element/issues" class="footer-main-link" target="_blank">{{ langConfig.feedback }}</a>
        <a :href="`https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.${ lang }.md`" class="footer-main-link" target="_blank">{{ langConfig.contribution }}</a>
        <a :href="`https://eleme.github.io/element-react/#/${ lang }/quick-start`" class="footer-main-link" target="_blank">Element-React</a>
      </div>
      <div class="footer-social">
        <el-popover
          ref="weixin"
          placement="top"
          width="120"
          popper-class="footer-popover"
          trigger="hover">
          <div class="footer-popover-title">{{ langConfig.eleme }} UED</div>
          <img src="../assets/images/qrcode.png" alt="">
        </el-popover>
        <i class="doc-icon-weixin elementdoc" v-popover:weixin></i>
        <a href="//github.com/elemefe" target="_blank">
          <i class="doc-icon-github elementdoc"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<style>
  .footer {
    height: 120px;
    background-color: #324057;
    color: #a4aebd;
    width: 100%;
    z-index: 1000;
    margin-top: -120px;

    * {
      word-spacing: 0;
    }

    .container {
      height: 100%;
      box-sizing: border-box;
    }

    .footer-main {
      font-size: 0;
      padding-top: 40px;
      display: inline-block;

      .footer-main-title {
        line-height: 1;
        font-size: 22px;
        margin: 0;
      }

      .footer-main-link {
        display: inline-block;
        margin: 12px 18px 0 0;
        line-height: 1;
        font-size: 12px;
        color: #768193;

        a {
          color: #768193;
          text-decoration: none;
        }
      }
    }

    .footer-social {
      float: right;
      line-height: 120px;

      .elementdoc {
        transition: .3s;
        display: inline-block;
        line-height: 32px;
        text-align: center;
        color: #8D99AB;
        background-color: transparent;
        size: 32px;
        font-size: 32px;
        vertical-align: middle;
        &:hover {
           transform: scale(1.2);
        }
      }

      .doc-icon-weixin {
        margin-right: 36px;
        &:hover {
          color: #fff;
        }
      }

      .doc-icon-github {
        margin-right: 0;
        &:hover {
           color: #fff;
        }
      }
    }
  }

  .footer-popover {
    padding: 0;
    min-width: 120px;
    line-height: normal;
    box-shadow: 0 0 11px 0 rgba(174, 187, 211, 0.24);

    .footer-popover-title {
      border-bottom: solid 1px #eaeefb;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #99a9bf;
      background-color: #f8f9fe;
    }

    img {
      size: 100px;
      margin: 10px;
    }
  }
  @media (max-width: 768px) {
    .footer {
      .footer-social {
        display: none;
      }
    }
  }
</style>

<script type="text/babel">
  import compoLang from '../i18n/component.json';
  import { version } from 'main/index.js';

  export default {
    data() {
      return {
        version
      };
    },

    computed: {
      lang() {
        return this.$route.path.split('/')[1] || 'zh-CN';
      },

      langConfig() {
        return compoLang.filter(config => config.lang === this.lang)[0]['footer'];
      }
    }
  };
</script>
