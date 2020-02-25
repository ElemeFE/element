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
    <h2>导航</h2>
    <div class="block">
      <p>导航可以解决用户在访问页面时：在哪里，去哪里，怎样去的问题。一般导航会有「侧栏导航」和「顶部导航」2 种类型。</p>
    </div>
    <div class="block">
      <h3>选择合适的导航</h3>
      <p>选择合适的导航可以让用户在产品的使用过程中非常流畅，相反若是不合适就会引起用户操作不适（方向不明确），以下是「侧栏导航」和 「顶部导航」的区别。</p>
    </div>
    <div class="block">
      <h3>侧栏导航</h3>
      <el-row :gutter="20">
        <el-col :span="9">
          <p>可将导航栏固定在左侧，提高导航可见性，方便页面之间切换；顶部可放置常用工具，如搜索条、帮助按钮、通知按钮等。适用于中后台的管理型、工具型网站。</p>
        </el-col>
        <el-col :span="15" class="nav-demos">
          <img src="~examples/assets/images/navbar_1.png" alt="一级类目" @click="enlarge(846, $event)">
          <h5>一级类目</h5>
          <p>适用于结构简单的网站：只有一级页面时，不需要使用面包屑。</p>
          <img src="~examples/assets/images/navbar_2.png" alt="二级类目" @click="enlarge(846, $event)">
          <h5>二级类目</h5>
          <p>侧栏中最多可显示两级导航；当使用二级导航时，我们建议搭配使用面包屑，方便用户定位自己的位置和快速返回。</p>
          <img src="~examples/assets/images/navbar_3.png" alt="三级类目" @click="enlarge(846, $event)">
          <h5>三级类目</h5>
          <p>适用于较复杂的工具型后台，左侧栏为一级导航，中间栏可显示其对应的二级导航，也可放置其他的工具型选项。</p>
        </el-col>
      </el-row>
    </div>
    <div class="block">
      <h3>顶部导航</h3>
      <el-row>
        <el-col :span="10">
          <p>顺应了从上至下的正常浏览顺序，方便浏览信息；顶部宽度限制了导航的数量和文本长度。</p>
        </el-col>
        <el-col :span="14" class="nav-demos">
          <img src="~examples/assets/images/navbar_0.png" alt="" @click="enlarge(846, $event)">
          <p>适用于导航较少，页面篇幅较长的网站。</p>
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
