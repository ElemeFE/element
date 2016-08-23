<style lang="css">
  @import '../node_modules/purecss/build/grids-core.css';
  @import '../node_modules/purecss/build/grids-units.css';
  @import '../node_modules/purecss/build/menus.css';
  @import '../node_modules/highlight.js/styles/color-brewer.css';
  @import 'assets/styles/common.css';
  @import 'assets/styles/fonts/style.css';

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
    overflow: auto;
  }

  .pure-g {
    font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
  }

  .pure-g [class *= "pure-u"] {
    font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
  }

  .app__sidebar {
    width: 230px;
    display: block;
  }

  .app__content {
    margin-left: 230px;
    display: block;
  }

  .app__menu {
    bottom: 0;
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: #f8f8f9;
    color: #20293b;

    .app__brand {
      color: #20293b;
      font-size: 24px;
      margin: 10px 0 40px;
      text-align: center;

      .app__eleme {
        font-weight: 900;
      }
    }

    .app__menu__label {
      color: #20293b;
      font-weight: bold;
      font-size: 14px;
      padding: 10px 0 10px 36px;
      position: relative;

      &::after {
        border-color: transparent transparent transparent rgba(170, 170, 170, .5);
        border-style: solid;
        border-width: 5px 0 5px 7px;
        content: " ";
        display: block;
        height: 0;
        position: absolute;
        right: 22px;
        top: 14px;
        transition-delay: .1s;
        transition: transform .3s;
        width: 0;
      }

      &.unfold::after {
        transform: rotate(90deg);
      }
    }

    .app__menu__link {
      padding: 12px 0 12px 50px;
      font-size: 14px;
      color: #20293b;
      transition: color, background-color .3s;

      &:focus {
        background-color: transparent;
      }

      &.active {
        border-left: 3px solid #2675c3;
        color: #2675c3;
        padding-left: 47px;
      }
    }

  }

  .app__main {
    .app__description {
      font-size: 14px;
      margin: 0;
      color: #666;
      padding-bottom: 36px;
      margin-bottom: 36px;
      border-bottom: 1px solid #e4e4e4;

      &:empty {
        display: none;
      }
    }

    a {
      color: #216fc1;
    }

    h2 {
      color: #333;
      font-size: 20px;
      font-weight: bold;
      margin: 60px 0 16px;
      line-height: 1;

      &:first-of-type {
        margin-top: 36px;
      }
    }

    h3 {
      color: #333;
      font-size: 16px;
      font-weight: normal;
      line-height: 1;
      margin: 36px 0 16px;
    }

    p, h2, h3 {
      +div, +span {
        margin: 10px 0 24px;
      }

      +span {
        margin-right: 8px;
      }
    }

    p {
      color: #666;
      font-size: 14px;
      margin: 0 0 16px;
      line-height: 1.5;
    }

    section > table {
      border-collapse: collapse;
      border-style: hidden;
      box-shadow: 0 0 0 1px #e1e1e1;
      border-radius: 5px;
      overflow: hidden;
      width: 100%;

      thead {
        background-color: #f8f8f8;
        font-size: 14px;

        th {
          color: #666;
        }
      }

      th, td {
        border: 1px solid #e1e1e1;
        padding: 10px 16px;
        text-align: left;
        font-size: 14px;
        color: #999;
      }
    }

    .hljs {
      border-radius: 5px;
      border: 1px solid #e1e1e1;
      font-size: 14px;
      max-height: 90px;
      overflow-y: hidden;
      position: relative;
      margin-bottom: 40px;
      margin-top: 0;

      &::before {
        background: linear-gradient(0deg, #fff 0, rgba(255, 255, 255, 0) 80%);
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        content: "";
      }

      &.open {
        max-height: 100%;

        &::before {
          content: none;
        }

        .hljs__button::before {
          margin-bottom: 0;
          margin-top: 9px;
          transform: rotate(45deg);
        }
      }
    }

    .hljs__button {
      background-color: #fff;
      border-radius: 4px;
      border: 1px solid #ccc;
      outline: 0;
      position: absolute;
      right: 10px;
      top: 10px;
      height: 28px;
      width: 28px;

      &::before {
        margin-bottom: 2px;
        margin-top: 0;
        transform: rotate(-135deg);
        border-left: 1px solid #ccc;
        border-top: 1px solid #ccc;
        content: "";
        display: inline-block;
        height: 10px;
        width: 10px;
      }
    }
  }

  .app__header {
    background-color: #2c7dc7;
    color: #fff;
    padding: 42px;
    height: 120px;
    box-sizing: border-box;

    .app__headline {
      font-size: 36px;
      font-weight: normal;
      line-height: 1;
      margin: 0 0 10px 0;
    }
  }

  .slidedown-transition {
    transition: all .3s ease-in-out;
    overflow: hidden;
  }

  .slidedown-enter, .slidedown-leave {
    max-height: 0 !important;
  }
  .demo {
    margin: 20px 0;
  }
</style>

<template>
  <div id="app">
    <main-header></main-header>
    <router-view></router-view>
  </div>
</template>

<script>
  // import { navs } from './route.config';
  // import E from 'oui-dom-events';
  // import { toggleClass, addClass, removeClass } from './dom/class';
  import MainHeader from './components/header';

  export default {
    name: 'app',

    components: {
      MainHeader
    }

    // data() {
    //   return {
    //     highlights: [],
    //     navState: []
    //   };
    // },

    // methods: {
    //   findAllHighlight() {
    //     return Array.prototype.slice.call(document.querySelectorAll('.hljs'));
    //   }
    // },

    // created() {
    //   this.navs = navs;
    // },

    // mounted() {
    //   this.mainContent = document.querySelector('.app__content');

    //   E.delegate(this.$refs.main, '.hljs__button', 'click.highlight', e => {
    //     const parent = e.target.parentNode;

    //     toggleClass(parent, 'open');
    //   });
    // },

    // beforeDestroy() {
    //   E.undelegate(this.$refs.main, '.hljs', 'click.highlight');
    // },

    // watch: {
    //   highlights(list) {
    //     list.map(item => {
    //       if (item.offsetHeight <= 100) {
    //         toggleClass(item, 'open');
    //       } else {
    //         item.appendChild(this.$els.button.cloneNode(true));
    //       }
    //     });
    //   }
    // },

    // events: {
    //   ['element.example.reload']() {
    //     this.$nextTick(() => {
    //       if (this.mainContent.querySelector('.no-toc')) {
    //         addClass(this.mainContent, 'no-toc');
    //       } else {
    //         removeClass(this.mainContent, 'no-toc');
    //       }

    //       this.highlights = this.findAllHighlight();
    //     });
    //     this.mainContent.scrollTop = 0;
    //     return true;
    //   }
    // }
  };
</script>
