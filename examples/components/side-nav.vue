<style>
  .side-nav {
    width: 100%;
    box-sizing: border-box;
    padding-right: 30px;
    transition: opacity .3s;
    &.is-fade {
      transition: opacity 3s;
    }

    li {
      list-style: none;
    }

    ul {
      padding: 0;
      margin: 0;
      overflow: hidden;
    }
    
    > ul > .nav-item > a {
      margin-top: 15px;
    }

    > ul > .nav-item:nth-child(-n + 4) > a {
      margin-top: 0;
    }

    .nav-item {
      a {
        font-size: 16px;
        color: #333;
        line-height: 40px;
        height: 40px;
        margin: 0;
        padding: 0;
        text-decoration: none;
        display: block;
        position: relative;
        transition: .15s ease-out;
        font-weight: bold;

        &.active {
          color: #409EFF;
        }
      }

      .nav-item {
        a {
          display: block;
          height: 40px;
          color: #444;
          line-height: 40px;
          font-size: 14px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-weight: normal;

          &:hover,
          &.active {
            color: #409EFF;
          }
        }
      }
  
      &.sponsors {
        & > .sub-nav {
          margin-top: -10px;
        }
        
        & > a {
          color: #777;
          font-weight: 300;
          font-size: 14px;
        }
        
        .nav-item {
          display: inline-block;
        
          a {
            height: auto;
            display: inline-block;
            vertical-align: middle;
            margin: 8px 12px 12px 0;

            img {
              width: 36px;
            }
          }

          &:nth-child(2) a img {
            width: 42px;
          }
        }
      }
    }

    .nav-group__title {
      font-size: 12px;
      color: #999;
      line-height: 26px;
      margin-top: 15px;
    }

    #code-sponsor-widget {
      margin: 0 0 0 -20px;
    }
  }
  .nav-dropdown-list {
    width: 120px;
    margin-top: -8px;
    li {
      font-size: 14px;
    }
  }
</style>
<template>
  <div
    class="side-nav"
    @mouseenter="isFade = false"
    :class="{ 'is-fade': isFade }"
    :style="navStyle">
    <ul>
      <li class="nav-item sponsors">
        <a>Sponsors</a>
        <ul class="pure-menu-list sub-nav">
          <li class="nav-item" v-show="lang !== 'zh-CN'">
            <a href="https://tipe.io/?ref=element" target="_blank">
              <img src="~examples/assets/images/tipe.svg" alt="tipe.io">
            </a>
          </li>
          <li class="nav-item">
            <a class="sponsor" href="https://www.duohui.cn/?utm_source=element&utm_medium=web&utm_campaign=element-index" target="_blank">
              <img src="~examples/assets/images/duohui.svg" alt="tipe.io">
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item" v-for="item in data">
        <a v-if="!item.path && !item.href" @click="expandMenu">{{item.name}}</a>
        <a v-if="item.href" :href="item.href" target="_blank">{{item.name}}</a>
        <router-link
          v-if="item.path"
          active-class="active"
          :to="base + item.path"
          exact
          v-text="item.title || item.name">
        </router-link>
        <ul class="pure-menu-list sub-nav" v-if="item.children">
          <li class="nav-item" v-for="navItem in item.children">
            <router-link
              class=""
              active-class="active"
              :to="base + navItem.path"
              exact
              v-text="navItem.title || navItem.name">
            </router-link>
          </li>
        </ul>
        <template v-if="item.groups">
          <div class="nav-group" v-for="group in item.groups">
            <div class="nav-group__title" @click="expandMenu">{{group.groupName}}</div>
            <ul class="pure-menu-list">
              <li
                class="nav-item"
                v-for="navItem in group.list"
                v-if="!navItem.disabled">
                <router-link
                  active-class="active"
                  :to="base + navItem.path"
                  exact
                  v-text="navItem.title"></router-link>
              </li>
            </ul>
          </div>
        </template>
      </li>
    </ul>
    <!--<div id="code-sponsor-widget"></div>-->
  </div>
</template>
<script>
  import bus from '../bus';
  import compoLang from '../i18n/component.json';

  export default {
    props: {
      data: Array,
      base: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        highlights: [],
        navState: [],
        isSmallScreen: false,
        isFade: false
      };
    },
    watch: {
      '$route.path'() {
        this.handlePathChange();
      },
      isFade(val) {
        bus.$emit('navFade', val);
      }
    },
    computed: {
      navStyle() {
        const style = {};
        if (this.isSmallScreen) {
          style.paddingBottom = '60px';
        }
        style.opacity = this.isFade ? '0.5' : '1';
        return style;
      },
      lang() {
        return this.$route.meta.lang;
      },
      langConfig() {
        return compoLang.filter(config => config.lang === this.lang)[0]['nav'];
      }
    },
    methods: {
      handleResize() {
        this.isSmallScreen = document.documentElement.clientWidth < 768;
        this.handlePathChange();
      },
      handlePathChange() {
        if (!this.isSmallScreen) {
          this.expandAllMenu();
          return;
        }
        this.$nextTick(() => {
          this.hideAllMenu();
          let activeAnchor = this.$el.querySelector('a.active');
          let ul = activeAnchor.parentNode;
          while (ul.tagName !== 'UL') {
            ul = ul.parentNode;
          }
          ul.style.height = 'auto';
        });
      },
      hideAllMenu() {
        [].forEach.call(this.$el.querySelectorAll('.pure-menu-list'), ul => {
          ul.style.height = '0';
        });
      },
      expandAllMenu() {
        [].forEach.call(this.$el.querySelectorAll('.pure-menu-list'), ul => {
          ul.style.height = 'auto';
        });
      },
      expandMenu(event) {
        if (!this.isSmallScreen) return;
        let target = event.currentTarget;
        if (!target.nextElementSibling || target.nextElementSibling.tagName !== 'UL') return;
        this.hideAllMenu();
        event.currentTarget.nextElementSibling.style.height = 'auto';
      }
    },
    created() {
      bus.$on('fadeNav', () => {
        this.isFade = true;
      });
    },
    mounted() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    }
  };
</script>
