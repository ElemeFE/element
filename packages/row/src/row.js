export default {
  name: 'ElRow',

  componentName: 'ElRow',

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },

  provide() {
    return {
      elRow: this
    };
  },

  render(h) {
    const margin = this.gutter ? `-${this.gutter / 2}px` : null;

    return <this.tag
      staticClass="el-row"
      class={{
        [`is-justify-${this.justify}`]: this.justify !== 'start',
        [`is-align-${this.align}`]: this.align !== 'top',
        'el-row--flex': this.type === 'flex'
      }}
      style={margin && { marginLeft: margin, marginRight: margin }}
    >{this.$slots.default}</this.tag>;
  }
};
