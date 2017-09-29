<style>
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
      overflow: auto;
      padding-top: 80px;
      transition: padding-top .3s;
      
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
    }
    
    .content {
      padding-top: 130px;
      > {
        h3 {
          margin: 45px 0 20px;
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
            border-bottom: 1px solid #eaeefb;
            padding: 15px;
            max-width: 250px;
          }

          th {
            text-align: left;
            white-space: nowrap;
            color: #666;
            font-weight: normal;
          }

          td {
            color: #333;
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
    .page-component-up {
      background-color: #58b7ff;
      position: fixed;
      right: 100px;
      bottom: 150px;
      size: 50px;
      border-radius: 25px;
      cursor: pointer;
      opacity: 0.4;
      transition: .3s;
      i {
        color: #fff;
        display: block;
        line-height: 50px;
        text-align: center;
        font-size: 22px;
      }
      &.hover {
        opacity: 1;
      }
    }
    .back-top-fade-enter,
    .back-top-fade-leave-active {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
<template>
  <div class="page-container page-component">
    <div
      class="page-component__nav"
      :class="{ 'is-extended': !showHeader }">
      <side-nav :data="navsData[lang]" :base="`/${ lang }/component`"></side-nav>
    </div>
    <div class="page-component__content">
      <router-view class="content"></router-view>
      <footer-nav></footer-nav>
    </div>
    <transition name="back-top-fade">
      <div
        class="page-component-up"
        :class="{ 'hover': hover }"
        v-show="showBackToTop"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
        @click="toTop">
        <i class="el-icon-caret-top"></i>
      </div>
    </transition>
  </div>
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
        hover: false,
        showBackToTop: false,
        scrollTop: 0,
        showHeader: true
      };
    },
    methods: {
      toTop() {
        this.hover = false;
        this.showBackToTop = false;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      },
      handleScroll() {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        this.showBackToTop = scrollTop >= 0.5 * document.body.clientHeight;
        if (this.showHeader !== this.scrollTop > scrollTop) {
          this.showHeader = this.scrollTop > scrollTop;
          bus.$emit('toggleHeader', this.showHeader);
        }
        if (scrollTop === 0) {
          this.showHeader = true;
          bus.$emit('toggleHeader', this.showHeader);
        }
        this.scrollTop = scrollTop;
      }
    },
    mounted() {
      this.throttledScrollHandler = throttle(300, this.handleScroll);
      document.addEventListener('scroll', this.throttledScrollHandler);
    },
    beforeDestroy() {
      document.removeEventListener('scroll', this.throttledScrollHandler);
    }
  };
</script>
