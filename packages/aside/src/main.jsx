export default {
  functional: true,
  name: 'ElAside',
  componentName: 'ElAside',
  props: {
    width: {
      type: String,
      default: '300px'
    }
  },
  render(h, { props, children, data }) {
    return <aside
      {...data}
      class="el-aside"
      style={props}
    >{children}</aside>;
  }
};
