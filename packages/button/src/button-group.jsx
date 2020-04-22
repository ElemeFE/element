export default {
  functional: true,
  name: 'ElButtonGroup',
  render(h, { data, children }) {
    return <div {...data} class="el-button-group">{children}</div>;
  }
};
