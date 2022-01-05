<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-main">
        <h4>{{ langConfig.components }}</h4>
        <a href="/" class="footer-main-link">Element UI</a>
        <a href="https://element-plus.org/" class="footer-main-link" target="_blank">Element Plus</a>
      </div>
      <div class="footer-main">
        <h4>{{ langConfig.links}}</h4>
        <a href="https://ant.design/" class="footer-main-link" target="_blank">Ant Design</a>
        <a href="https://fusion.design/" class="footer-main-link" target="_blank">Fusion Design</a>
      </div>
      <div class="footer-main">
        <h4>{{ langConfig.community }}</h4>
        <a :href="gitterLink" class="footer-main-link" target="_blank">{{ langConfig.gitter }}</a>
        <a href="https://github.com/ElemeFE/element/issues" class="footer-main-link" target="_blank">{{ langConfig.feedback }}</a>
        <a :href="`https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.${ lang }.md`" class="footer-main-link" target="_blank">{{ langConfig.contribution }}</a>
        <a href="https://segmentfault.com/t/element-ui" class="footer-main-link" target="_blank">SegmentFault</a>
        <a href="https://github.com/ElementUI/awesome-element" class="footer-main-link" target="_blank">Awesome Element</a>
      </div>
      <div class="footer-main footer-social">
        <h4>{{ langConfig.help}}</h4>
        <el-popover
          ref="dingtalk"
          placement="top"
          width="120"
          popper-class="footer-popover"
          trigger="hover">
          <img src="../assets/images/qrcode.png" alt="">
          <div class="footer-popover-desc">{{langConfig.dingtalkGroup}}</div>
        </el-popover>
        <i class="doc-icon-dingtalk elementdoc" v-popover:dingtalk></i>
        <a href="https://github.com/elemefe" target="_blank">
          <i class="doc-icon-github elementdoc"></i>
        </a>
        <a :href="gitterLink" target="_blank">
          <i class="doc-icon-gitter elementdoc"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  .footer {
    background-color: #F8F9FC;
    width: 100%;
    padding-top: 40px;
    padding-bottom: 120px;
    margin-top: -340px;
    box-sizing: border-box;

    .container {
      box-sizing: border-box;
      width: 1200px;
      padding: 0 150px;
      margin-bottom: 36px;
    }

    .footer-main {
      font-size: 0;
      display: inline-block;
      vertical-align: top;
      &:not(:last-child) {
        margin-right: 100px;
      }

      h4 {
        font-size: 24px;
        line-height: 33px;
        margin: 0 0 24px 0;
        color: #333;
      }

      p {
        color: #666;
        font-size: 14px;
        line-height: 20px;
      }

      .figure {
        display: inline-block;
        margin: 0;
        &:first-child {
          margin-right: 20px;
        }

        &-img {
          width: 120px;
          height: 120px;
          margin-bottom: 10px;
        }
        &-caption {
          color: #fff;
          font-size: 12px;
          text-align: center;
        }
      }

      .footer-main-link {
        display: block;
        margin: 0;
        line-height: 2;
        font-size: 14px;
        color: #666;

        &:hover {
          // color: #333;
        }
      }
    }

    .footer-social {
      .elementdoc {
        transition: .3s;
        display: inline-block;
        line-height: 32px;
        text-align: center;
        color: #9AA6C3;
        background-color: transparent;
        size: 32px;
        font-size: 32px;
        vertical-align: middle;
        margin-right: 20px;
        &:hover {
          transform: scale(1.2);
          color: #3595FC;
        }
      }

      .doc-icon-gitter {
        margin-right: 0;
      }
    }
  }

  .el-popover.footer-popover {
    padding: 0;
    min-width: 120px;
    line-height: normal;
    box-shadow: 0 0 11px 0 rgba(174, 187, 211, 0.24);

    .footer-popover-desc {
      height: 24px;
      line-height: 24px;
      text-align: center;
      color: #333;
      font-size: 12px;
    }

    img {
      size: 100px;
      margin: 10px 10px 0 10px;
    }
  }
  @media (max-width: 1140px) {
    .footer {
      height: auto;
    }
  }

  @media (max-width: 1000px) {
    .footer-social {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .footer {
      .container {
        width: 100%;
        padding: 0 20px;
      }
      .footer-main {
        margin-bottom: 30px;
      }
    }
  }
</style>

<script type="text/babel">
  import compoLang from '../i18n/component.json';
  import Element from 'main/index.js';
  const { version } = Element;

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
      },

      gitterLink() {
        return this.lang === 'zh-CN' ? 'https://gitter.im/ElemeFE/element' : 'https://gitter.im/element-en/Lobby';
      }
    }
  };
</script>
