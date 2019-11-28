// reference https://github.com/noeldelgado/gemini-scrollbar/blob/master/index.js

import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event';
import scrollbarWidth from 'element-ui/src/utils/scrollbar-width';
import { toObject } from 'element-ui/src/utils/util';
import Bar from './bar';

/* istanbul ignore next */
export default {
  name: 'ElScrollbar',

  components: { Bar },

  props: {
    native: Boolean,
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div'
    },
    barMoveX: {
      type: Number,
      default: 0
    },
    barMoveY: {
      type: Number,
      default: 0
    },
    scrollLeft: {
      type: Number,
      default: 0
    },
    scrollTop: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      sizeWidth: '0',
      sizeHeight: '0',
      modelBarMoveX: 0,
      modelBarMoveY: 0,
      modelScrollLeft: 0,
      modelScrollTop: 0
    };
  },
  watch: {
    barMoveX: {
      immediate: true,
      handler(val) {
        this.modelBarMoveX = val;
      }
    },
    barMoveY: {
      immediate: true,
      handler(val) {
        this.modelBarMoveY = val;
      }
    },
    scrollLeft: {
      immediate: true,
      handler(val) {
        if (this.modelScrollLeft === val) {
          return;
        }
        this.modelScrollLeft = val;
        if (this.wrap) {
          this.wrap.scrollLeft = val;
        }
      }
    },
    scrollTop: {
      immediate: true,
      handler(val) {
        if (this.modelScrollTop === val) {
          return;
        }
        this.modelScrollTop = val;
        if (this.wrap) {
          this.wrap.scrollTop = val;
        }
      }
    },
    modelBarMoveX(value) {
      this.$emit('update:barMoveX', value);
    },
    modelBarMoveY(value) {
      this.$emit('update:barMoveY', value);
    },
    modelScrollLeft(value) {
      this.$emit('update:scrollLeft', value);
    },
    modelScrollTop(value) {
      this.$emit('update:scrollTop', value);
    }
  },
  computed: {
    wrap() {
      return this.$refs.wrap;
    }
  },

  render(h) {
    let gutter = scrollbarWidth();
    let style = this.wrapStyle;

    if (gutter) {
      const gutterWith = `-${ gutter }px`;
      const gutterStyle = `margin-bottom: ${ gutterWith }; margin-right: ${ gutterWith };`;

      if (Array.isArray(this.wrapStyle)) {
        style = toObject(this.wrapStyle);
        style.marginRight = style.marginBottom = gutterWith;
      } else if (typeof this.wrapStyle === 'string') {
        style += gutterStyle;
      } else {
        style = gutterStyle;
      }
    }
    const view = h(this.tag, {
      class: ['el-scrollbar__view', this.viewClass],
      style: this.viewStyle,
      ref: 'resize'
    }, this.$slots.default);
    const wrap = (
      <div
        ref="wrap"
        style={ style }
        onScroll={ this.handleScroll }
        class={ [this.wrapClass, 'el-scrollbar__wrap', gutter ? '' : 'el-scrollbar__wrap--hidden-default'] }>
        { [view] }
      </div>
    );
    let nodes;

    if (!this.native) {
      nodes = ([
        wrap,
        <Bar
          move={ this.modelBarMoveX }
          size={ this.sizeWidth }></Bar>,
        <Bar
          vertical
          move={ this.modelBarMoveY }
          size={ this.sizeHeight }></Bar>
      ]);
    } else {
      nodes = ([
        <div
          ref="wrap"
          class={ [this.wrapClass, 'el-scrollbar__wrap'] }
          style={ style }>
          { [view] }
        </div>
      ]);
    }
    return h('div', { class: 'el-scrollbar' }, nodes);
  },

  methods: {
    handleScroll() {
      const wrap = this.wrap;

      this.modelBarMoveX = ((wrap.scrollLeft * 100) / wrap.clientWidth);
      this.modelBarMoveY = ((wrap.scrollTop * 100) / wrap.clientHeight);
      this.modelScrollLeft = wrap.scrollLeft;
      this.modelScrollTop = wrap.scrollTop;
    },

    update() {
      let heightPercentage, widthPercentage;
      const wrap = this.wrap;
      if (!wrap) return;

      heightPercentage = (wrap.clientHeight * 100 / wrap.scrollHeight);
      widthPercentage = (wrap.clientWidth * 100 / wrap.scrollWidth);

      this.sizeHeight = (heightPercentage < 100) ? (heightPercentage + '%') : '';
      this.sizeWidth = (widthPercentage < 100) ? (widthPercentage + '%') : '';
    }
  },

  mounted() {
    if (this.native) return;
    this.$nextTick(this.update);
    !this.noresize && addResizeListener(this.$refs.resize, this.update);
  },

  beforeDestroy() {
    if (this.native) return;
    !this.noresize && removeResizeListener(this.$refs.resize, this.update);
  }
};
