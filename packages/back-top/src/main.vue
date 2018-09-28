<template>
  <div :class="classes" :style="styles" @click="scrollToTop">
    <slot>
      <div :class="innerClasses">
        <i class="ivu-icon ivu-icon-ios-arrow-up"></i>
      </div>
    </slot>
  </div>
</template>

<script>
import { on, off } from 'element-ui/src/utils/dom';
import getScroll from 'element-ui/src/utils/get-scroll';

const easeInOutCubic = (t, b, c, d) => {
  const cc = c - b;
  let tt = t / (d / 2);
  let result = 0;
  if (tt < 1) {
    result = (cc / 2) * tt * tt * tt + b;
  } else {
    result = (cc / 2) * ((tt -= 2) * tt * tt + 2) + b;
  }
  return result;
};
function getRequestAnimationFrame() {
  let func = () => {};
  if (typeof window !== 'undefined') {
    func = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;
  }
  return func;
}
const reqAnimFrame = getRequestAnimationFrame();

export default {
  name: 'ElBackTop',
  props: {
    height: {
      type: Number,
      default: 400
    },
    target: {
      type: Function,
      default: () => window
    }
  },
  methods: {
    getCurrentScrollTop() {
      if (this.el === window) {
        return (
          window.pageYOffset ||
          document.body.scrollTop ||
          document.documentElement.scrollTop
        );
      }
      return this.el.scrollTop;
    },
    scrollToTop() {
      const scrollTop = this.getCurrentScrollTop();
      const startTime = Date.now();
      const frameFunc = () => {
        const timestamp = Date.now();
        const time = timestamp - startTime;
        this.setScrollTop(easeInOutCubic(time, scrollTop, 0, 450));
        if (time < 450) {
          reqAnimFrame(frameFunc);
        } else {
          this.setScrollTop(0);
        }
      };
      reqAnimFrame(frameFunc);
    },
    setScrollTop(value) {
      if (this.el === window) {
        document.body.scrollTop = value;
        document.documentElement.scrollTop = value;
      } else {
        this.el.scrollTop = value;
      }
    },
    handleScroll() {
      const scrollTop = getScroll(this.el, true);
      this.setState({
        visible: scrollTop > this.height
      });
    }
  },
  computed: {
    el() {
      return this.target();
    }
  },

  mounted() {
    on(this.el, 'scroll', this.handleScroll);
    on(this.el, 'resize', this.handleScroll);
  },
  beforeDestroy() {
    off(this.el, 'scroll', this.handleScroll);
    off(this.el, 'resize', this.handleScroll);
  }
};
</script>