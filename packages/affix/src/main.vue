<template>
  <div :style="wrapStyle">
    <div ref="affix" :class="{'el-affix': affixed}" :style="styles">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { on, off } from 'element-ui/src/utils/dom';
import getScroll from 'element-ui/src/utils/get-scroll';

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
    getTargetRect(target) {
      if (target === window) {
        return {
          top: 0,
          bottom: 0,
          left: 0
        };
      } else {
        return target.getBoundingClientRect();
      }
    },
    getOffset(element, target) {
      const rect = element.getBoundingClientRect();
      const targetRect = this.getTargetRect(target);

      const scrollTop = getScroll(this.el, true);
      const scrollLeft = getScroll(this.el, false);

      const docElem = window.document.body;
      const clientTop = docElem.clientTop || 0;
      const clientLeft = docElem.clientLeft || 0;

      return {
        top: rect.top - targetRect.top + scrollTop - clientTop,
        left: rect.left - targetRect.left + scrollLeft - clientLeft,
        width: rect.width,
        height: rect.height
      };
    },
    handleScroll() {
      const affixed = this.affixed;
      const scrollTop = getScroll(this.el, true);
      const elOffset = this.getOffset(this.$el, this.el);
      const elSize = {
        width: this.$refs.affix.offsetWidth,
        height: this.$refs.affix.offsetHeight
      };
      const targetRect = this.getTargetRect(this.el);
      const targetHeight = this.el.innerHeight || this.el.clientHeight;
      // Fixed Top
      if (
        elOffset.top - this.offsetTop < scrollTop &&
        this.offsetType === 'top' &&
        !affixed
      ) {
        this.affixed = true;
        this.wrapStyle = {
          width: elOffset.width + 'px',
          height: elSize.height + 'px'
        };
        this.styles = {
          top: `${this.offsetTop + targetRect.top}px`,
          left: `${elOffset.left + targetRect.left}px`,
          width: `${elOffset.width}px`
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
        elOffset.top + this.offsetBottom + elSize.height >
          scrollTop + targetHeight &&
        this.offsetType === 'bottom' &&
        !affixed
      ) {
        this.affixed = true;
        const targetBottomOffset = this.el === window ? 0 : (window.innerHeight - targetRect.bottom);
        this.wrapStyle = {
          width: elOffset.width + 'px',
          height: elOffset.height + 'px'
        };
        this.styles = {
          bottom: `${targetBottomOffset + this.offsetBottom}px`,
          left: `${elOffset.left + targetRect.left}px`,
          width: `${elOffset.width}px`
        };
        this.$emit('change', true);
      } else if (
        elOffset.top + this.offsetBottom + elSize.height <
          scrollTop + targetHeight &&
        this.offsetType === 'bottom' &&
        affixed
      ) {
        this.affixed = false;
        this.styles = null;
        this.$emit('change', false);
      }
    },
    handleTargetScroll() {
      const targetRect = this.getTargetRect(this.el);
      const elOffset = this.getOffset(this.$el, this.el);
      const windowHeight = window.innerHeight;
      if (this.offsetType === 'top' && this.styles) {
        this.styles.top = `${targetRect.top + this.offsetTop}px`;
        this.styles.left = `${elOffset.left + targetRect.left}px`;
      } else if (this.offsetType === 'bottom' && this.styles) {
        this.styles.bottom = `${windowHeight - targetRect.bottom + this.offsetBottom}px`;
        this.styles.left = `${elOffset.left + targetRect.left}px`;
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
      return this.target();
    }
  },
  mounted() {
    on(this.el, 'scroll', this.handleScroll);
    on(this.el, 'resize', this.handleScroll);
    if (this.offsetBottom >= 0) {
      this.handleScroll();
    };
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
