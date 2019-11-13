<script>
export default {
  name: 'text-ellipsis',
  props: {
    content: {
      type: [String, Number, Object],
      default: ''
    },
    contentRows: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      height: 'auto',
      contentHeight: 'auto',
      tooltipContent: ''
    };
  },
  computed: {
    show() {
      return window.parseInt(this.height) < this.contentHeight;
    }
  },
  render(h) {
    return h(
      'div',
      {
        class: 'text-ellipsis-container',
        style: {
          'max-height': this.height,
          '-webkit-line-clamp': this.contentRows
        }
      },
      [
        h(
          'el-tooltip',
          {
            props: {
              placement: 'top',
              content: `${this.tooltipContent}`,
              disabled: !this.show
            }
          },
          [h('div', [h('span', {class: 'mapper-content'}, [this.content])])]
        )
      ]
    );
  },
  mounted() {
    this.computedEllipsis();
    window.addEventListener('resize', this.computedEllipsis);
  },
  watch: {
    content() {
      this.computedEllipsis();
    }
  },
  methods: {
    computedEllipsis() {
      this.$nextTick(() => {
        this.tooltipContent = typeof this.content === 'object' ? this.content.elm.innerText : this.content;
        const el = this.$el;
        const children = el.children[0].children[0];
        this.height = `${window.parseInt(window.getComputedStyle(el, null).lineHeight) *
          this.contentRows}px`;
        this.contentHeight = children.offsetHeight;
      });
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.computedEllipsis);
  }
};
</script>
