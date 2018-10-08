<template>
  <transition name="el-fade-in-linear">
    <div v-if="visible" class="el-back-top" :style="styles" @click="scrollToTop">
      <slot>
        <div class="el-back-top__wrap">
          <i :class="icon"></i>
        </div>
      </slot>
    </div>
  </transition>
</template>

<script>
import { on, off } from 'element-ui/src/utils/dom';
import getScroll from 'element-ui/src/utils/get-scroll';
import ElIcon from 'element-ui/packages/icon';

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
    func =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;
  }
  return func;
}
const reqAnimFrame = getRequestAnimationFrame();

export default {
  name: 'ElBackTop',
  components: {
    ElIcon
  },
  data() {
    return {
      styles: {},
      visible: false
    };
  },
  props: {
    height: {
      type: Number,
      default: 400
    },
    bottom: {
      type: Number,
      default: 50
    },
    right: {
      type: Number,
      default: 100
    },
    target: {
      type: Function,
      default: () => window
    },
    icon: {
      type: String,
      default: 'el-icon-caret-top'
    }
  },
  methods: {
    getTargetRect(target) {
      if (target === window) {
        return {
          top: 0,
          right: 0,
          bottom: 0
        };
      } else {
        return target.getBoundingClientRect();
      }
    },
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
      this.$emit('click');
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
      this.visible = scrollTop > this.height;
      if (this.visible) {
        const targetRect = this.getTargetRect(this.el);
        const right = this.el === window ? 0 : (window.innerWidth - targetRect.right);
        const bottom = this.el === window ? 0 : (window.innerHeight - targetRect.bottom);
        this.styles = {
          right: `${this.right + right}px`,
          bottom: `${this.bottom + bottom}px`
        };
      }
    },
    handleTargetScroll() {
      if (this.visible) {
        const targetRect = this.getTargetRect(this.el);
        const right = this.el === window ? 0 : (window.innerWidth - targetRect.right);
        const bottom = this.el === window ? 0 : (window.innerHeight - targetRect.bottom);
        this.styles = {
          right: `${this.right + right}px`,
          bottom: `${this.bottom + bottom}px`
        };
      }
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
    if (this.el !== window) {
      on(window, 'scroll', this.handleTargetScroll);
      on(window, 'resize', this.handleTargetScroll);
    }
  },
  beforeDestroy() {
    off(this.el, 'scroll', this.handleScroll);
    off(this.el, 'resize', this.handleScroll);
    if (this.el !== window) {
      off(window, 'scroll', this.handleTargetScroll);
      off(window, 'resize', this.handleTargetScroll);
    }
  }
};
</script>