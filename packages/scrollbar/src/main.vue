<script>
  // reference https://github.com/noeldelgado/gemini-scrollbar/blob/master/index.js

  import { addResizeListener, removeResizeListener } from 'tmconsulting-ui/src/utils/resize-event';
  import scrollbarWidth from 'tmconsulting-ui/src/utils/scrollbar-width';
  import { toObject } from 'tmconsulting-ui/src/utils/util';
  import Bar from './bar';

  /* istanbul ignore next */
  export default {
    name: 'TmScrollbar',

    componentName: 'TmScrollbar',

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
      let gutter = scrollbarWidth();
      let style = this.wrapStyle;

      if (gutter) {
        const gutterWith = `-${gutter}px`;
        const gutterStyle = `margin-bottom: ${gutterWith}; margin-right: ${gutterWith};`;

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
        class: ['tm-scrollbar__view', this.viewClass],
        style: this.viewStyle,
        ref: 'resize'
      }, this.$slots.default);
      const wrap = h(
        'div',
        {
          ref: 'wrap',
          style: style,
          class: [this.wrapClass, 'tm-scrollbar__wrap', gutter ? '' : 'tm-scrollbar__wrap--hidden-default'],
          on: {
            scroll: this.handleScroll
          }
        },
        [ view ]
      );

      let nodes;
      if (!this.native) {
        nodes = ([
          wrap,
          h(
            Bar,
            {
              attrs: {
                move: this.moveX,
                size: this.sizeWidth
              }
            }
          ),
          h(
            Bar,
            {
              attrs: {
                vertical: true,
                move: this.moveY,
                size: this.sizeHeight
              }
            }
          )
        ]);
      } else {
        nodes = ([
          h(
            'div',
            {
              ref: 'wrap',
              class: [this.wrapClass, 'tm-scrollbar__wrap'],
              style: style
            },
            [ view ]
          )
        ]);
      }
      return h('div', { class: 'tm-scrollbar' }, nodes);
    },

    methods: {
      handleScroll() {
        const wrap = this.wrap;

        this.moveY = ((wrap.scrollTop * 100) / wrap.clientHeight);
        this.moveX = ((wrap.scrollLeft * 100) / wrap.clientWidth);
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
</script>
