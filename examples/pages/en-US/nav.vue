<style scoped>
  h3 {
    margin-bottom: 15px;
  }
  .block {
    margin-bottom: 55px;
  }
  p {
    margin: 0 0 15px;
  }
  .nav-demos {
    p {
      margin-bottom: 50px;
    }
    h5 {
      margin: 0;
    }
    img {
      padding: 15px;
      background-color: #F9FAFC;
      width: 100%;
      margin-bottom: 15px;
      cursor: pointer;
    }
  }
  .dialog-img {
    position: fixed;
    overflow: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    -webkit-overflow-scrolling: touch;
    outline: 0;
  
    .imgWrap {
      margin: 0 auto;
      position: relative;
      top: 100px;
      padding-bottom: 50px;
    }
    img {
      display: block;
      width: 100%;
    }
  }
  .mask {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #373737;
    background-color: rgba(55, 55, 55, 0.6);
    height: 100%;
    z-index: 1000;
  }
  .zoom-enter-active,
  .zoom-leave-active {
    transition: transform .3s cubic-bezier(0.78, 0.14, 0.15, 0.86), opacity .3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .zoom-enter,
  .zoom-leave-active {
    transform: scale(0.3);
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
<template>
  <div>
    <h2>Navigation</h2>
    <div class="block">
      <p>Navigation focuses on solving the users' problems of where to go and how to get there. Generally it can be categorized into 'sidebar navigation' and 'top navigation'.</p>
    </div>
    <div class="block">
      <h3>Choose the right navigation</h3>
      <p>An appropriate navigation gives users a smooth experience, while an inappropriate one leads to confusion. Here are the differences between sidebar navigation and top navigation</p>
    </div>
    <div class="block">
      <h3>Side Navigation</h3>
      <el-row :gutter="20">
        <el-col :span="9">
          <p>Fix the navigation at the left edge, thus improves its visibility, making it easier to switch between pages. In this case, the top area of the page holds commonly used tools, e.g. search bar, help button, notice button, etc. Suitable for background management or utility websites.</p>
        </el-col>
        <el-col :span="15" class="nav-demos">
          <img src="~examples/assets/images/navbar_1.png" alt="Level 1 categories" @click="enlarge(846, $event)">
          <h5>Level 1 categories</h5>
          <p>Suitable for simply structured sites with only one level of pages. No breadcrumb is needed.</p>
          <img src="~examples/assets/images/navbar_2.png" alt="Level 2 categories" @click="enlarge(846, $event)">
          <h5>Level 2 categories</h5>
          <p>Sidebar displays up to two levels of navigation. Breadcrumbs are recommended in combination of second level navigation, making it easier for the users to locate and navigate.</p>
          <img src="~examples/assets/images/navbar_3.png" alt="Level 3 categories" @click="enlarge(846, $event)">
          <h5>Level 3 categories</h5>
          <p>Suitable for complicated utility websites. The left sidebar holds first level navigation, and the middle column displays second level navigation or other utility options.</p>
        </el-col>
      </el-row>
    </div>
    <div class="block">
      <h3>Top Navigation</h3>
      <el-row>
        <el-col :span="10">
          <p>Conforms to the normal browsing order from top to bottom, which makes things more natural. The navigation amount and text length are limited to the width of the top.</p>
        </el-col>
        <el-col :span="14" class="nav-demos">
          <img src="~examples/assets/images/navbar_0.png" alt="" @click="enlarge(846, $event)">
          <p>Suitable for sites with few navigations and large chunks.</p>
        </el-col>
      </el-row>
    </div>
    <transition name="fade">
      <div class="mask" v-show="showDialog" @click="showDialog = false"></div>
    </transition>
    <transition name="zoom">
      <div class="dialog-img" :style='imgWrapStyle' v-show="showDialog" @click="showDialog = false">
        <div class="imgWrap" :style="imgStyle">
          <img :src="imgUrl" alt="">
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imgUrl: '',
        imgBound: {},
        showDialog: false,
        imgStyle: {},
        imgWrapStyle: {}
      };
    },
    watch: {
      showDialog(val) {
        document.body.style.overflow = val ? 'hidden' : '';
      }
    },
    methods: {
      enlarge(imgWidth, ev) {
        var imgNode = ev.target;
        // var bound = imgNode.getBoundingClientRect();
        var offset = {};
        var doc = document;

        offset.left = (doc.body.scrollWidth - imgWidth) / 2;
        offset.top = 100;

        this.imgUrl = imgNode.src;
        this.imgBound = imgNode.getBoundingClientRect();

        this.imgWrapStyle.transformOrigin = `${ev.clientX}px ${ev.clientY}px`;
        // this.imgStyle.transformOrigin = `${ev.clientX}px ${ev.clientY}px`;
        this.imgStyle.width = imgWidth + 'px';
        this.showDialog = true;
      }
    }
  };
</script>
