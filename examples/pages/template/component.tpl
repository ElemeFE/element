<style>
  .page-component__scroll {
    height: calc(100% - 80px);
    margin-top: 80px;

    > .el-scrollbar__wrap {
      overflow-x: auto;
    }
  }

  .page-component {
    box-sizing: border-box;
    height: 100%;
  
    &.page-container {
      padding: 0;
    }

    .page-component__nav {
      width: 240px;
      position: fixed;
      top: 0;
      bottom: 0;
      margin-top: 80px;
      transition: padding-top .3s;

      > .el-scrollbar__wrap {
        height: 100%;
        overflow-x: auto;
      }

      &.is-extended {
        padding-top: 0;
      }
    }

    .side-nav {
      height: 100%;
      padding-top: 50px;
      padding-bottom: 50px;
      padding-right: 0;

      & > ul {
        padding-bottom: 50px;
      }
    }

    .page-component__content {
      padding-left: 270px;
      padding-bottom: 100px;
      box-sizing: border-box;
    }

    .content {
      padding-top: 50px;

      > {
        h3 {
          margin: 55px 0 20px;
        }

        table {
          border-collapse: collapse;
          width: 100%;
          background-color: #fff;
          font-size: 14px;
          margin-bottom: 45px;
          line-height: 1.5em;

          strong {
            font-weight: normal;
          }

          td, th {
            border-bottom: 1px solid #dcdfe6;
            padding: 15px;
            max-width: 250px;
          }

          th {
            text-align: left;
            white-space: nowrap;
            color: #909399;
            font-weight: normal;
          }

          td {
            color: #606266;
          }

          th:first-child, td:first-child {
            padding-left: 10px;
          }
        }

        ul:not(.timeline) {
          margin: 10px 0;
          padding: 0 0 0 20px;
          font-size: 14px;
          color: #5e6d82;
          line-height: 2em;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .page-component {
      .page-component__nav {
        width: 100%;
        position: static;
        margin-top: 0;
      }
      .side-nav {
        padding-top: 0;
        padding-left: 50px;
      }
      .page-component__content {
        padding-left: 10px;
        padding-right: 10px;
      }
      .content {
        padding-top: 0;
      }
      .content > table {
        overflow: auto;
        display: block;
      }
    }
  }
  .toc {
    position: fixed;
    top: 105px;
    right: 25px;
    width: 25px;
    height: 25px;
    color: #fff;
    background-color: #fff;
    z-index: 999;
    border-radius: 4px;
    overflow: hidden;
    font-size: 12px;
    transition: width 0.5s, height 0.5s;
  }
  .toc.active {
    width: fit-content;
    height: fit-content;
  }
  .toc .toggle {
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: #409EFF;
    transition: 0.5s;
  }
  .toc.active .toggle {
    cursor: move;
  }
  .toc .toggle::before {
    content: "+";
    position: absolute;
    top: 0;
    width: 25px;
    height: 25px;
    line-height: 20px;
    font-size: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 400;
    transition: 0.5s;
    cursor: pointer;
  }
  .toc .toggle.active::before {
    transform: rotate(45deg);
  }
  .toc ul,
  .toc li {
    margin: 0;
    padding: 0;
  }
  .toc ul {
    padding-top: 4px;
  }
  .toc li {
    list-style: none;
    padding: 0 20px;
    line-height: 24px;
  }
  .toc li a {
    cursor: pointer;
    color: #444;
  }
  .toc li.active a {
    color: #409EFF;
  }
</style>
<template>
  <el-scrollbar class="page-component__scroll" ref="componentScrollBar">
  <div class="page-container page-component">
    <el-scrollbar class="page-component__nav">
      <side-nav :data="navsData[lang]" :base="`/${ lang }/component`"></side-nav>
    </el-scrollbar>
    <div class="page-component__content">
      <router-view class="content"></router-view>
      <footer-nav></footer-nav>
    </div>
    <div v-if="anchors && anchors.length > 0" class="toc" :class="{active: expand}">
      <div class="toggle" :class="{active: expand}" @mousedown="e => handleMouseDown(e)"></div>
      <ul>
        <li v-for="(item, idx) in anchors" :key="item.id" :class="{active: item.active}" @click="handleAnchorClick(idx)"><a :href="item.href">{{ item.title }}</a></li>
      </ul>
    </div>
    <el-backtop 
      v-if="showBackToTop"
      target=".page-component__scroll .el-scrollbar__wrap"
      :right="100"
      :bottom="150"
    ></el-backtop>
  </div>
  </el-scrollbar>
</template>
<script>
  import bus from '../../bus';
  import navsData from '../../nav.config.json';
  import throttle from 'throttle-debounce/throttle';

  export default {
    data() {
      return {
        lang: this.$route.meta.lang,
        navsData,
        scrollTop: 0,
        showHeader: true,
        componentScrollBar: null,
        componentScrollBoxElement: null,
        expand: false,
        anchors: [],
        dragged: false,
        tocStartPos: {
          x: 0,
          y: 0
        },
        tocMovePos: {
          x: 0,
          y: 0
        }
      };
    },
    watch: {
      '$route.path'() {
        // 触发伪滚动条更新
        this.componentScrollBox.scrollTop = 0;
        this.$nextTick(() => {
          this.componentScrollBar.update();
        });
      }
    },
    methods: {
      renderAnchorHref() {
        if (/changelog/g.test(location.href)) return;
        const anchors = document.querySelectorAll('h2 a,h3 a,h4 a,h5 a');
        const basePath = location.href.split('#').splice(0, 2).join('#');

        [].slice.call(anchors).forEach(a => {
          const href = a.getAttribute('href');
          a.href = basePath + href;
        });
      },

      getAnchor() {
        const h3s = document.querySelectorAll('.element-doc>h3');
        const els = Array.from(h3s);

        els.forEach(el => {
          this.anchors.push({
            active: false,
            id: el.id,
            title: el.textContent.substring(2),
            href: el.querySelector('a').href
          });
        });
      },

      handleMouseDown(e){
        this.tocStartPos = {
          x: e.clientX,
          y: e.clientY
        }

        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);

        this.dragged = false;

        e.stopPropagation();
        e.preventDefault();
      },

      handleMouseMove(e){
        this.tocMovePos = {
          x: this.tocMovePos.x + e.clientX - this.tocStartPos.x,
          y: this.tocMovePos.y + e.clientY - this.tocStartPos.y
        }

        document.querySelector('.toc').style.transform = `translate(${this.tocMovePos.x}px, ${this.tocMovePos.y}px)`;
        this.tocStartPos = {
          x: e.clientX,
          y: e.clientY
        }
        
        this.dragged = true
      },

      handleMouseUp(){
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);

        if(!this.dragged){
          this.expand = !this.expand
        }
      },

      goAnchor() {
        if (location.href.match(/#/g).length > 1) {
          const anchor = location.href.match(/#[^#]+$/g);
          if (!anchor) return;
          const elm = document.querySelector(anchor[0]);
          if (!elm) return;

          setTimeout(_ => {
            this.componentScrollBox.scrollTop = elm.offsetTop;
          }, 50);
        }
      },

      handleScroll() {
        const scrollTop = this.componentScrollBox.scrollTop;
        if (this.showHeader !== this.scrollTop > scrollTop) {
          this.showHeader = this.scrollTop > scrollTop;
        }
        if (scrollTop === 0) {
          this.showHeader = true;
        }
        if (!this.navFaded) {
          bus.$emit('fadeNav');
        }
        this.scrollTop = scrollTop;
      },

      handleAnchorClick(idx) {
        this.anchors.map((anchor, index) => {
          anchor.active = false;
          if (idx === index) {
            anchor.active = true;
          }
          return anchor;
        });
      }
    },
    computed: {
      showBackToTop() {
        return !this.$route.path.match(/backtop/);
      }
    },
    created() {
      bus.$on('navFade', val => {
        this.navFaded = val;
      });
    },
    mounted() {
      this.componentScrollBar = this.$refs.componentScrollBar;
      this.componentScrollBox = this.componentScrollBar.$el.querySelector('.el-scrollbar__wrap');
      this.throttledScrollHandler = throttle(300, this.handleScroll);
      this.componentScrollBox.addEventListener('scroll', this.throttledScrollHandler);
      this.renderAnchorHref();
      this.goAnchor();
      this.getAnchor();
      document.body.classList.add('is-component');
    },
    destroyed() {
      document.body.classList.remove('is-component');
    },
    beforeDestroy() {
      this.componentScrollBox.removeEventListener('scroll', this.throttledScrollHandler);
    },
    beforeRouteUpdate(to, from, next) {
      next();
      setTimeout(() => {
        const toPath = to.path;
        const fromPath = from.path;
        if (toPath === fromPath && to.hash) {
          this.goAnchor();
        }
        if (toPath !== fromPath) {
          document.documentElement.scrollTop = document.body.scrollTop = 0;
          this.renderAnchorHref();
          this.anchors = [];
          this.getAnchor();
        }
      }, 100);
    }
  };
</script>
