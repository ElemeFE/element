export default {
  functional: true,
  name: 'ElHeader',
  componentName: 'ElHeader',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  },
  render(h, { props, children, data }) {
    return <header
      {...data}
      class="el-header"
      style={props}
    >{children}</header>;
  }
};
