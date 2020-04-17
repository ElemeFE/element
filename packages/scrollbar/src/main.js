// reference https://github.com/noeldelgado/gemini-scrollbar/blob/master/index.js

import { isChromeLike } from 'element-ui/src/utils/util';
import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event';
import scrollbarWidth from 'element-ui/src/utils/scrollbar-width';
import Bar from './bar';

/* istanbul ignore next */
export default {
  name: 'ElScrollbar',

  components: { Bar },

  props: {
    native: {
      type: Boolean,
      default() {
        return isChromeLike() &&
          !!(window.CSS && window.CSS.supports && window.CSS.supports('overflow: overlay'));
      }
    },
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div'
    },
    orientation: {
      type: String,
      validator(value) {
        return ['vertical', 'horizontal', 'both'].indexOf(value) >= 0;
      },
      default: 'vertical'
    }
  },

  data() {
    return {
      sizeWidth: '0',
      sizeHeight: '0',
      moveX: 0,
      moveY: 0
    };
  },

  computed: {
    wrap() {
      return this.$refs.wrap;
    }
  },

  render(h) {
    const gutter = this.native ? 0 : scrollbarWidth();
    const staticStyle = {
      overflowX: this.orientation === 'vertical' ? 'hidden' : '',
      overflowY: this.orientation === 'horizontal' ? 'hidden' : ''
    };

    if (!this.native && gutter) {
      staticStyle.marginRight = staticStyle.marginBottom = `-${gutter}px`;

      if (this.orientation === 'vertical') {
        staticStyle.marginBottom = '';
      } else if (this.orientation === 'horizontal') {
        staticStyle.marginRight = '';
      }
    }

    const view = <this.tag
      staticClass="el-scrollbar__view"
      class={ this.viewClass }
      style={ this.viewStyle }
      ref="resize"
    >{this.$slots.default}</this.tag>;

    h('div', {
      staticStyle, // JSX 不支持 staticStyle
      ref: 'wrap',
      style: this.wrapStyle,
      staticClass: 'el-scrollbar__wrap' + (gutter ? '' : ' el-scrollbar__wrap--hidden-default'),
      class: this.wrapClass,
      on: { scroll: this.handleScroll }
    }, [view]);

    return <div
      staticClass="el-scrollbar"
      class={!this.native ? 'is-simulated' : 'is-native'}
    >
      {!this.native
        ? [
          h('div', {
            staticStyle, // 见上
            ref: 'wrap',
            style: this.wrapStyle,
            staticClass: 'el-scrollbar__wrap' + (gutter ? '' : ' el-scrollbar__wrap--hidden-default'),
            class: this.wrapClass,
            on: { scroll: this.handleScroll }
          }, [view]),
          this.orientation !== 'vertical' && <Bar
            move={ this.moveX }
            size={ this.sizeWidth } />,
          this.orientation !== 'horizontal' && <Bar
            vertical
            move={ this.moveY }
            size={ this.sizeHeight } />
        ]
        : h('div', {
          ref: 'wrap',
          staticStyle,
          style: this.wrapStyle,
          staticClass: 'el-scrollbar__wrap',
          class: this.wrapClass,
          on: { scroll: this.handleScroll }
        }, [view])
      }
    </div>;
  },

  methods: {
    handleScroll() {
      const wrap = this.wrap;

      this.moveY = wrap.scrollTop * 100 / wrap.clientHeight;
      this.moveX = wrap.scrollLeft * 100 / wrap.clientWidth;
    },

    update() {
      const wrap = this.wrap;
      if (!wrap) return;

      const heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
      const widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;

      this.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
      this.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';
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
