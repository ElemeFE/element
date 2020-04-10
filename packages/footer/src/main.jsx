export default {
  functional: true,
  name: 'ElFooter',
  componentName: 'ElFooter',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  },
  render(h, { props, children, data }) {
    return <header
      {...data}
      class="el-footer"
      style={props}
    >{children}</header>;
  }
};
