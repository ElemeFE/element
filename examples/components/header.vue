<style lang="scss" scoped>
  .headerWrapper {
    height: 80px;
  }

  #v3-banner {
    background-color: #409EFF;
    min-height: 30px;
    padding: 5px 60px;
    z-index: 19;
    box-sizing: border-box;
    text-align: center;
    color: #eee;
  }

  #v3-banner a {
    color: #FFF;
    font-weight: bold;
  }

  .header {
    height: 80px;
    background-color: #fff;
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 80px;
    z-index: 100;
    position: relative;

    .container {
      height: 100%;
      box-sizing: border-box;
      border-bottom: 1px solid #DCDFE6;
    }

    .nav-lang-spe {
      color: #888;
    }

    h1 {
      margin: 0;
      float: left;
      font-size: 32px;
      font-weight: normal;

      a {
        color: #333;
        text-decoration: none;
        display: block;
      }

      span {
        font-size: 12px;
        display: inline-block;
        width: 34px;
        height: 18px;
        border: 1px solid rgba(255, 255, 255, .5);
        text-align: center;
        line-height: 18px;
        vertical-align: middle;
        margin-left: 10px;
        border-radius: 3px;
      }
    }

    .nav {
      float: right;
      height: 100%;
      line-height: 80px;
      background: transparent;
      padding: 0;
      margin: 0;
      &::before, &::after {
        display: table;
        content: "";
      }
      &::after {
        clear: both;
      }
    }

    .nav-gap {
      position: relative;
      width: 1px;
      height: 80px;
      padding: 0 20px;

      &::before {
        content: '';
        position: absolute;
        top: calc(50% - 8px);
        width: 1px;
        height: 16px;
        background: #ebebeb;
      }
    }

    .nav-logo,
    .nav-logo-small {
      vertical-align: sub;
    }

    .nav-logo-small {
      display: none;
    }

    .nav-item {
      margin: 0;
      float: left;
      list-style: none;
      position: relative;
      cursor: pointer;
    
      &.nav-algolia-search {
        cursor: default;
      }
    
      &.lang-item,
      &:last-child {
        cursor: default;
        margin-left: 34px;

        span {
          opacity: .8;
        }

        .nav-lang {
          cursor: pointer;
          display: inline-block;
          height: 100%;
          color: #888;

          &:hover {
            color: #409EFF;
          }
          &.active {
             font-weight: bold;
             color: #409EFF;
           }
        }
      }

      a {
        text-decoration: none;
        color: #1989FA;
        opacity: 0.5;
        display: block;
        padding: 0 22px;

        &.active,
        &:hover {
          opacity: 1;
        }

        &.active::after {
          content: '';
          display: inline-block;
          position: absolute;
          bottom: 0;
          left: calc(50% - 15px);
          width: 30px;
          height: 2px;
          background: #409EFF;
        }
      }
    }
  }

  .nav-dropdown {
    margin-bottom: 6px;
    padding-left: 18px;
    width: 100%;

    span {
      display: block;
      width: 100%;
      font-size: 16px;
      color: #888;
      line-height: 40px;
      transition: .2s;
      padding-bottom: 6px;
      user-select: none;

      &:hover {
         cursor: pointer;
       }
    }

    i {
      transition: .2s;
      font-size: 12px;
      color: #979797;
      transform: translateY(-2px);
    }

    .is-active {
      span, i {
        color: #409EFF;
      }
      i {
        transform: rotateZ(180deg) translateY(3px);
      }
    }

    &:hover {
      span, i {
        color: #409EFF;
      }
    }
  }
  
  .nav-dropdown-list {
    width: auto;
  }

  @media (max-width: 850px) {
    .header {
      .nav-logo {
        display: none;
      }
      .nav-logo-small {
        display: inline-block;
      }
      .nav-item {
        margin-left: 6px;

        &.lang-item,
        &:last-child {
          margin-left: 10px;
        }
         
        a {
          padding: 0 5px;
        }
      }
      .nav-theme-switch, .nav-algolia-search {
        display: none;
      }
    }
  }

  @media (max-width: 700px) {
    .header {
      .container {
        padding: 0 12px;
      }
      .nav-item {
        a {
          font-size: 12px;
          vertical-align: top;
        }

        &.lang-item {
          height: 100%;
         
          .nav-lang {
            display: flex;
            align-items: center;
            
            span {
              padding-bottom: 0;
            }
          }
        }
      }
      .nav-dropdown {
        padding: 0;
        span {
          font-size: 12px;
        }
      }
      .nav-gap {
        padding: 0 8px;
      }
      .nav-versions {
        display: none;
      }
    }
  }
</style>
<template>
  <div class="headerWrapper">
    <div id="v3-banner" v-if="isHome">
      <template v-if="lang === 'zh-CN'">
        您正在浏览基于 Vue 2.x 的 Element UI 文档;
        <a href="https://element-plus.org/#/zh-CN">点击这里</a> 查看 Vue 3.x 的升级版本
      </template>
      <template v-else>
        You’re browsing the documentation of Element UI for Vue 2.x version.
        <a href="https://element-plus.org">Click here</a> for Vue 3.x version
      </template>
    </div>
    <header class="header" ref="header">
      <div class="container">
        <h1><router-link :to="`/${ lang }`">
          <!-- logo -->
          <slot>
            <img
              src="../assets/images/element-logo.svg"
              alt="element-logo"
              class="nav-logo">
            <img
              src="../assets/images/element-logo-small.svg"
              alt="element-logo"
              class="nav-logo-small">
          </slot>

        </router-link></h1>

        <!-- nav -->
        <ul class="nav">
          <li class="nav-item nav-algolia-search" v-show="isComponentPage">
            <algolia-search></algolia-search>
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              :to="`/${ lang }/guide`">{{ langConfig.guide }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              :to="`/${ lang }/component`">{{ langConfig.components }}
            </router-link>
          </li>
          <li 
            class="nav-item nav-item-theme"
          >
            <router-link
              active-class="active"
              :to="`/${ lang }/theme`">{{ langConfig.theme }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              :to="`/${ lang }/resource`"
              exact>{{ langConfig.resource }}
            </router-link>
          </li>

          <!-- gap -->
          <li class="nav-item" v-show="isComponentPage">
            <div class="nav-gap"></div>
          </li>

          <!-- 版本选择器 -->
          <li class="nav-item nav-versions" v-show="isComponentPage">
            <el-dropdown
              trigger="click"
              class="nav-dropdown"
              :class="{ 'is-active': verDropdownVisible }">
              <span>
                {{ version }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu
                slot="dropdown"
                class="nav-dropdown-list"
                @input="handleVerDropdownToggle">
                <el-dropdown-item
                  v-for="item in Object.keys(versions)"
                  :key="item"
                  @click.native="switchVersion(item)">
                  {{ item }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>

          <!-- 语言选择器 -->
          <li class="nav-item lang-item">
            <el-dropdown
              trigger="click"
              class="nav-dropdown nav-lang"
              :class="{ 'is-active': langDropdownVisible }">
              <span>
                {{ displayedLang }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu
                slot="dropdown"
                class="nav-dropdown-list"
                @input="handleLangDropdownToggle">
                <el-dropdown-item
                  v-for="(value, key) in langs"
                  :key="key"
                  @click.native="switchLang(key)">
                  {{ value }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>
<script>
  import ThemePicker from './theme-picker.vue';
  import AlgoliaSearch from './search.vue';
  import compoLang from '../i18n/component.json';
  import Element from 'main/index.js';
  import themeLoader from './theme/loader';
  import bus from '../bus';
  import { ACTION_USER_CONFIG_UPDATE } from './theme/constant.js';

  const { version } = Element;

  export default {
    data() {
      return {
        active: '',
        versions: [],
        version,
        verDropdownVisible: true,
        langDropdownVisible: true,
        langs: {
          'zh-CN': '中文',
          'en-US': 'English',
          'es': 'Español',
          'fr-FR': 'Français'
        }
      };
    },

    mixins: [themeLoader],

    components: {
      ThemePicker,
      AlgoliaSearch
    },

    computed: {
      lang() {
        return this.$route.path.split('/')[1] || 'zh-CN';
      },
      displayedLang() {
        return this.langs[this.lang] || '中文';
      },
      langConfig() {
        return compoLang.filter(config => config.lang === this.lang)[0]['header'];
      },
      isComponentPage() {
        return /^component/.test(this.$route.name);
      },
      isHome() {
        return /^home/.test(this.$route.name);
      }
    },
    mounted() {
      const testInnerImg = new Image();
      testInnerImg.onload = () => {
        this.$isEle = true;
        ga('send', 'event', 'DocView', 'Ali', 'Inner');
      };
      testInnerImg.onerror = (err) => {
        ga('send', 'event', 'DocView', 'Ali', 'Outer');
        console.error(err);
      };
      testInnerImg.src = `https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/VmvVUItLdPNqKlNGuRHi.png?t=${Date.now()}`;
    },
    methods: {
      switchVersion(version) {
        if (version === this.version) return;
        location.href = `${ location.origin }/${ this.versions[version] }/${ location.hash } `;
      },

      switchLang(targetLang) {
        if (this.lang === targetLang) return;
        localStorage.setItem('ELEMENT_LANGUAGE', targetLang);
        this.$router.push(this.$route.path.replace(this.lang, targetLang));
      },

      handleVerDropdownToggle(visible) {
        this.verDropdownVisible = visible;
      },

      handleLangDropdownToggle(visible) {
        this.langDropdownVisible = visible;
      }
    },

    created() {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = _ => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const versions = JSON.parse(xhr.responseText);
          this.versions = Object.keys(versions).reduce((prev, next) => {
            prev[next] = versions[next];
            return prev;
          }, {});
        }
      };
      xhr.open('GET', '/versions.json');
      xhr.send();
      let primaryLast = '#409EFF';
      bus.$on(ACTION_USER_CONFIG_UPDATE, (val) => {
        let primaryColor = val.global['$--color-primary'];
        if (!primaryColor) primaryColor = '#409EFF';
        const base64svg = 'data:image/svg+xml;base64,';
        const imgSet = document.querySelectorAll('h1 img');
        imgSet.forEach((img) => {
          img.src = `${base64svg}${window.btoa(window.atob(img.src.replace(base64svg, '')).replace(primaryLast, primaryColor))}`;
        });
        primaryLast = primaryColor;
      });
    }
  };
</script>
