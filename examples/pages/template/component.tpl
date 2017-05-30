<style>
  .page-component {
    padding-bottom: 95px;
    box-sizing: border-box;
    .content {
      margin-left: -1px;

      > {
        h3 {
          margin: 45px 0 15px;
        }
        table {
          border-collapse: collapse;
          width: 100%;
          background-color: #fff;
          color: #5e6d82;
          font-size: 14px;
          margin-bottom: 45px;
          line-height: 1.5em;

          strong {
            font-weight: normal;
          }
          th {
            text-align: left;
            border-top: 1px solid #eaeefb;
            background-color: #EFF2F7;
            white-space: nowrap;
          }
          td, th {
            border-bottom: 1px solid #eaeefb;
            padding: 10px;
            max-width: 250px;
          }
          th:first-child, td:first-child {
            padding-left: 10px;
          }
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
    <el-row>
      <el-col :xs="24" :sm="6">
        <side-nav :data="navsData[lang]" :base="`/${ lang }/component`"></side-nav>
      </el-col>
      <el-col :xs="24" :sm="18">
        <router-view class="content"></router-view>
        <footer-nav></footer-nav>
      </el-col>
    </el-row>
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
  import navsData from '../../nav.config.json';
  import throttle from 'throttle-debounce/throttle';
  export default {
    data() {
      return {
        lang: this.$route.meta.lang,
        navsData,
        hover: false,
        showBackToTop: false
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
        this.showBackToTop = (document.body.scrollTop || document.documentElement.scrollTop) >= 0.5 * document.body.clientHeight;
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
