export default {
  name: 'ElCol',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: 24
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    style() {
      let padding = 0;
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== 'ElRow') {
        parent = parent.$parent;
      }
      if (parent) {
        padding = parent.gutter / 2 + 'px'
      }
      let style = {};
      style.paddingLeft = padding
      style.paddingRight = padding
      return style
    }
  },
  render(h) {
    let classList = [];
    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      classList.push(
        prop !== 'span'
          ? `el-col-${prop}-${this[prop]}`
          : `el-col-${this[prop]}`
      );
    });
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`el-col-${size}-${this[size]}`);
      }
      else if (typeof this[size] === 'object') {
        let props = this[size];
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== 'span'
              ? `el-col-${size}-${prop}-${props[prop]}`
              : `el-col-${size}-${props[prop]}`
          );
        });
      }
    });
    return h(this.tag, {
      class: ['el-col', classList],
      style: this.style
    }, this.$slots.default);
  }
};
