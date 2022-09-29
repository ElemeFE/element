import { on, off } from 'element-ui/src/utils/dom';

export default {
  name: 'ElAffix',
  props: {
    offsetTop: {
      type: Number
    },
    offsetBottom: {
      type: Number
    },
    useCapture: {
      type: Boolean,
      default: false
    },
    target: {
      type: Function,
      default: () => window
    },
    scrolltargets: {
      type: Function,
      default: () => null
    }
  },
  data() {
    return {
      styles: {},
      affix: false,
      slot: false,
      slotStyle: {}
    };
  },
  computed: {
    el() {
      return this.target();
    },
    els() {
      return this.scrolltargets();
    }
  },
  render(h) {

    return h('div', [
      h('div', { class: this.affix ? 'el-affix' : '', style: this.styles }, [this.$slots.default]),
      this.affix ? h('div', { style: this.slotStyle }) : ''
    ]);
  },
  mounted() {
    on(window, 'resize', this.handleScroll, this.useCapture);
    on(this.el, 'scroll', this.handleScroll, this.useCapture);

    if (Array.isArray(this.els)) {
      for (let i = 0; i < this.els.length; i++) {
        on(this.els[i], 'scroll', this.handleScroll, this.useCapture);
      }
    }

    this.$nextTick(() => {
      this.handleScroll();
    });
  },
  beforeDestroy() {
    off(window, 'resize', this.handleScroll, this.useCapture);
    off(this.el, 'scroll', this.handleScroll, this.useCapture);
    if (Array.isArray(this.els)) {
      for (let i = 0; i < this.els.length; i++) {
        off(this.els[i], 'scroll', this.handleScroll, this.useCapture);
      }
    }
  },
  methods: {
    handleScroll() {
      if (!this.el || !this.$el) {
        return;
      }
      const offsetTop = this.getOffsetTop();
      const offsetBottom = this.getOffsetBottom();

      const rect = this.$el.getBoundingClientRect();
      const targetRect = this.getTargetRect(this.el);

      const fixedTop = this.getFixedTop(rect, targetRect, offsetTop);
      const fixedBottom = this.getFixedBottom(rect, targetRect, offsetBottom);

      if (fixedTop === undefined && fixedBottom === undefined) {
        if (this.affix) {
          this.slot = false;
          this.slotStyle = {};
          this.affix = false;
          this.styles = null;

          this.$emit('change', false);
        }
        return;
      }
      if (fixedTop !== undefined) {
        // Fixed Top
        if ((this.affix && this.styles.top !== `${fixedTop}px`) || !this.affix) {
          this.slotStyle = {
            width: rect.width + 'px',
            height: rect.height + 'px'
          };
          this.styles = {
            position: 'fixed',
            top: `${fixedTop}px`,
            width: rect.width + 'px',
            height: rect.height + 'px'
          };
        }
      } else if (fixedBottom !== undefined) {
        // Fixed Bottom
        if ((this.affix && this.styles.bottom !== `${fixedBottom}px`) || !this.affix) {
          this.slotStyle = {
            width: rect.width + 'px',
            height: rect.height + 'px'
          };
          this.styles = {
            position: 'fixed',
            bottom: `${fixedBottom}px`,
            width: rect.width + 'px',
            height: rect.height + 'px'
          };
        }
      }
      if (!this.affix) {
        this.slot = true;
        this.affix = true;
        this.$emit('change', true);
      }
    },
    getTargetRect(target) {
      return target !== window ? target.getBoundingClientRect() : ({ top: 0, bottom: target.innerHeight, left: 0 });
    },
    getOffsetTop() {
      return this.offsetBottom === undefined && this.offsetTop === undefined ? 0 : this.offsetTop;
    },
    getOffsetBottom() {
      return this.offsetBottom;
    },
    getFixedTop(rect, targetRect, offsetTop) {
      if (offsetTop !== undefined && targetRect.top > rect.top - offsetTop) {
        return offsetTop + targetRect.top;
      }
      return undefined;
    },
    getFixedBottom(rect, targetRect, offsetBottom) {
      if (offsetBottom !== undefined && targetRect.bottom < rect.bottom + offsetBottom) {
        const targetBottomOffset = window.innerHeight - targetRect.bottom;
        return offsetBottom + targetBottomOffset;
      }
      return undefined;
    }
  }
};

