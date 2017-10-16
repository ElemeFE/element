<style scoped>
  .headerWrapper {
    height: 80px;
    transition: transform .3s;
    
    &.is-hidden {
      transform: translateY(-80px);
    }
  }

  .header {
    height: 80px;
    background-color: rgba(32, 160, 255, 1);
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    line-height: @height;
    z-index: 100;
    position: relative;

    .container {
      height: 100%;
      box-sizing: border-box;
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
      @utils-clearfix;
      padding: 0;
      margin: 0;
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

          &:hover {
            opacity: 1;
          }

          &.active {
            font-weight: 700;
            opacity: 1;
            color: #409EFF;
          }
        }
      }

      a {
        text-decoration: none;
        color: #fff;
        display: block;
        padding: 0 22px;
        opacity: .8;

        &.active,
        &:hover {
          opacity: 1;
        }

        &.active::after {
          content: '';
          display: inline-block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background:#99d2fc;
        }
      }
    }
  }

  .header-home {
    position: fixed;
    top: 0;
    background-color: rgba(32, 160, 255, 0);
  }

  .header-light {
    background-color: #fff;

    .nav-lang {
      color: #888;

      &:hover,
      &.acive {
        font-weight: normal;
        opacity: 1;
        color: #409EFF;
      }
    }

    .nav-lang-spe {
      color: #888;
    }

    .nav-item {
      a {
        color: #888;
        opacity: 1;
      }

      a:hover,
      a.active {
        color: #333;
      }

      a.active::after {
        width: 14px;
        left: calc(50% - 7px);
        bottom: 15px;
        background: #409EFF;
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
      transform: scale(.6);
      font-size: 12px;
      color: #979797;
    }

    @when active {
      span, i {
        color: #409EFF;
      }
      i {
        transform: rotateZ(180deg) translateY(2px) scale(.6);
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
      .nav-item a,
      .nav-lang {
        font-size: 12px;
        vertical-align: top;
      }
      .nav-dropdown {
        padding: 0;
      }
      .nav-gap {
        padding: 0 8px;
      }
    }
  }
</style>
<template>
  <div class="headerWrapper">
    <header class="header"
      ref="header"
      :style="headerStyle"
      :class="{
        'header-home': isHome,
        'header-light': !isHome
      }">
      <div class="container">
        <h1><router-link :to="`/${ lang }`">
          <!-- logo -->
          <slot v-if="!isHome">
            <img
              src="../assets/images/element-logo.svg"
              alt="element-logo"
              class="nav-logo">
            <img
              src="../assets/images/element-logo-small.svg"
              alt="element-logo"
              class="nav-logo-small">
          </slot>
          <slot v-if="isHome">
            <img
              src="../assets/images/element-logo-white.svg"
              alt="element-logo"
              class="nav-logo">
            <img
              src="../assets/images/element-logo-small-white.svg"
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
          <li class="nav-item" v-show="isComponentPage">
            <el-dropdown
                trigger="click"
                class="nav-dropdown"
                :class="{ 'is-active': dropdownVisible }">
              <span>
                {{ langConfig.dropdown }}{{ version }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu
                  slot="dropdown"
                  class="nav-dropdown-list"
                  @input="handleDropdownToggle">
                <el-dropdown-item
                    v-for="item in Object.keys(versions)"
                    :key="item"
                    @click.native="switchVersion(item)">
                  {{ item }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>

          <!-- lang -->
          <li class="nav-item lang-item">
            <span
              class="nav-lang"
              :class="{ 'active': lang === 'zh-CN' }"
              @click="switchLang('zh-CN')">
              中文
            </span>
            <span class="nav-lang-spe"> / </span>
            <span
              class="nav-lang"
              :class="{ 'active': lang === 'en-US' }"
              @click="switchLang('en-US')">
              En
            </span>
          </li>
          
          <!--theme picker-->
          <li class="nav-item nav-theme-switch" v-show="isComponentPage">
            <theme-picker></theme-picker>
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
  import { version } from 'main/index.js';

  export default {
    data() {
      return {
        active: '',
        isHome: true,
        headerStyle: {},
        versions: [],
        version,
        dropdownVisible: true
      };
    },

    components: {
      ThemePicker,
      AlgoliaSearch
    },

    watch: {
      '$route.path': {
        immediate: true,
        handler() {
          this.handlePathChange();
        }
      }
    },

    computed: {
      lang() {
        return this.$route.path.split('/')[1] || 'zh-CN';
      },
      langConfig() {
        return compoLang.filter(config => config.lang === this.lang)[0]['header'];
      },
      isComponentPage() {
        return /^component/.test(this.$route.name);
      }
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

      handleDropdownToggle(visible) {
        this.dropdownVisible = visible;
      },

      handlePathChange() {
        const routerName = this.$route.name;
        this.isHome = /^home/.test(routerName);
        if (!this.isHome) {
          this.headerStyle.backgroundColor = '#fff';
          return;
        }
        this.headerStyle.backgroundColor = 'rgba(32, 160, 255, 0)';
      }
    },

    created() {
      this.handlePathChange();

      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = _ => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          this.versions = JSON.parse(xhr.responseText);
        }
      };
      xhr.open('GET', '/versions.json');
      xhr.send();
    },

    mounted() {
      function scroll(fn) {
        window.addEventListener('scroll', fn, false);
      }
      scroll(() => {
        if (this.isHome) {
          const threshold = 200;
          let alpha = Math.min((document.documentElement.scrollTop || document.body.scrollTop), threshold) / threshold;
          this.$refs.header.style.backgroundColor = `rgba(32, 160, 255, ${ alpha })`;
        }
      });
    }
  };
</script>
