export default {
  functional: true,
  name: 'ElMain',
  componentName: 'ElMain',
  render(h, { data, children }) {
    return <main
      {...data}
      class="el-main"
    >{children}</main>;
  }
};
