<template>
  <div ref="affix" :style="wrapStyle">
    <div :class="{'el-affix': affixed}" :style="styles">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { on, off } from 'element-ui/src/utils/dom';

export default {
  name: 'ElAffix',
  props: {
    offsetTop: {
      type: Number,
      default: 0
    },
    offsetBottom: {
      type: Number
    },
    target: {
      type: Function,
      default: () => window
    }
  },
  data() {
    return {
      affixed: false,
      wrapStyle: {},
      slot: false,
      styles: {}
    };
  },
  methods: {
    getScroll(target, top) {
      const prop = top ? 'pageYOffset' : 'pageXOffset';
      const method = top ? 'scrollTop' : 'scrollLeft';
      let ret = target[prop] || target[method];
      return ret;
    },
    getOffset(element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = this.getScroll(this.el, true);
      const scrollLeft = this.getScroll(this.el);
      const docEl = window.document.body;
      const clientTop = docEl.clientTop || 0;
      const clientLeft = docEl.clientLeft || 0;
      return {
        top: rect.top + scrollTop - clientTop,
        left: rect.left + scrollLeft - clientLeft
      };
    },
    handleScroll() {
      const affixed = this.affixed;
      const scrollTop = this.getScroll(this.el, true);
      const elOffset = this.getOffset(this.$el);
      const windowHeight = window.innerHeight;
      const elHeight = this.$el.getElementsByTagName('div')[0].offsetHeight;
      // Fixed Top
      if (
        elOffset.top - this.offsetTop < scrollTop &&
        this.offsetType === 'top' &&
        !affixed
      ) {
        this.affixed = true;
        this.wrapStyle = {
          width: this.$refs.affix.clientWidth + 'px',
          height: this.$refs.affix.clientHeight + 'px'
        };
        this.styles = {
          top: `${this.offsetTop}px`,
          left: `${elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`
        };
        this.$emit('change', true);
      } else if (
        elOffset.top - this.offsetTop > scrollTop &&
        this.offsetType === 'top' &&
        affixed
      ) {
        this.wrapStyle = {};
        this.affixed = false;
        this.styles = null;
        this.$emit('change', false);
      }
      // Fixed Bottom
      if (
        elOffset.top + this.offsetBottom + elHeight >
          scrollTop + windowHeight &&
        this.offsetType === 'bottom' &&
        !affixed
      ) {
        this.affixed = true;
        this.styles = {
          bottom: `${this.offsetBottom}px`,
          left: `${elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`
        };
        this.$emit('change', true);
      } else if (
        elOffset.top + this.offsetBottom + elHeight <
          scrollTop + windowHeight &&
        this.offsetType === 'bottom' &&
        affixed
      ) {
        this.affixed = false;
        this.styles = null;
        this.$emit('change', false);
      }
    }
  },
  computed: {
    offsetType() {
      let type = 'top';
      if (this.offsetBottom >= 0) {
        type = 'bottom';
      }
      return type;
    },
    el() {
      console.log(this.target());
      return this.target();
    }
  },
  mounted() {
    console.log(this.el);
    on(this.el, 'scroll', this.handleScroll);
    on(this.el, 'resize', this.handleScroll);
    if (this.offsetBottom >= 0) {
      this.handleScroll();
    };
  },
  beforeDestroy() {
    off(this.el, 'scroll', this.handleScroll);
    off(this.el, 'resize', this.handleScroll);
  }
};
</script>