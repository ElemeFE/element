<style lang="scss">
  .side-nav {
    width: 100%;
    box-sizing: border-box;
    padding-right: 30px;
    transition: opacity .3s;
    // box-shadow: 1px 0 0 0 #F1F1F1;
    box-shadow: 1px 0 0 0 #ebebeb;
    border-right: 1px solid #ebebeb;
    background: #fff;
    &.is-fade {
      transition: opacity 3s;
    }
    .version-wrap {
      padding: 0 16px;
      margin-bottom: 20px;
    }
    .version{
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #333333;
      border-bottom: 1px solid #e5e5e5;
      padding: 16px 0;
      .select-version {
        flex: 1;
      }
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

        padding-left: 16px;

        &.active {
          // color: #409EFF;
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

          padding-left: 30px;
          border-left: 6px solid transparent;

          &:hover,
          &.active {
            // color: #409EFF;
            background-image: linear-gradient(270deg, rgba(0,109,255,0.00) 1%, rgba(0,109,255,0.06) 100%);
            border-left: 6px solid #006DFF;
            color: #333;
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
              width: 42px;
            }
          }

          &:first-child a img {
            width: 36px;
          }
        }
      }
    }

    .nav-group__title {
      font-size: 14px;
      color: #333;
      line-height: 20px;
      padding: 5px 16px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
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
    <div class="version-wrap" v-if="isComponent">
      <div class="version">
        {{langConfig.dropdown}} <select-version></select-version>
      </div>
    </div>
    <ul>
      <li
        class="nav-item"
        v-for="(item, key) in data"
        :key="key">
        <a v-if="!item.path && !item.href">{{item.name}}</a>
        <!-- <a v-if="!item.path && !item.href" @click="$set(item, 'isClose', !item.isClose)">{{item.name}}  
          <i class="el-icon-arrow-down" v-show="item.isClose"></i>
          <i class="el-icon-arrow-up" v-show="!item.isClose"></i>
        </a> -->
        <a v-if="item.href" :href="item.href" target="_blank">{{item.name}}</a>
        <router-link
          v-if="item.path"
          active-class="active"
          :to="base + item.path"
          exact
          v-text="item.title || item.name">
        </router-link>
        <el-collapse-transition>
        <ul class="pure-menu-list sub-nav" v-if="item.children" v-show="!item.isClose">
          <li
            class="nav-item"
            v-for="(navItem, key) in item.children"
            :key="key">
            <router-link
              class=""
              active-class="active"
              :to="base + navItem.path"
              exact
              v-text="navItem.title || navItem.name">
            </router-link>
          </li>
        </ul>
        </el-collapse-transition>
        <template v-if="item.groups">
          <div
            class="nav-group"
            v-for="(group, key) in item.groups"
            :key="key"
            >
            <div class="nav-group__title" @click="$set(group, 'isClose', !group.isClose)">{{group.groupName}}
              <i class="el-icon-arrow-down" v-show="group.isClose"></i>
              <i class="el-icon-arrow-up" v-show="!group.isClose"></i>
            </div>
            <el-collapse-transition>
            <ul class="pure-menu-list" v-show="!group.isClose">
              <li
                class="nav-item"
                v-for="(navItem, key) in group.list"
                v-show="!navItem.disabled"
                :key="key">
                <router-link
                  active-class="active"
                  :to="base + navItem.path"
                  exact
                  v-text="navItem.title"></router-link>
              </li>
            </ul>
            </el-collapse-transition>
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
  import SelectVersion from './select-version';

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
    components: {
      SelectVersion
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
      isComponent() {
        return /^component-/.test(this.$route.name || '');
      },
      navStyle() {
        const style = {};
        if (this.isSmallScreen) {
          style.paddingBottom = '60px';
        }
        // style.opacity = this.isFade ? '0.5' : '1';
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
        // this.handlePathChange();
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
        // if (!this.isSmallScreen) return;
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
