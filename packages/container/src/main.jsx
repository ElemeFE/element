export default {
  functional: true,
  name: 'ElContainer',
  componentName: 'ElContainer',
  props: {
    direction: String
  },
  render(h, { data, props: { direction }, children }) {
    const isVertical = (() => {
      if (direction === 'vertical') {
        return true;
      } else if (direction === 'horizontal') {
        return false;
      }
      return children.some(vnode => {
        const tag = vnode.data && vnode.data.class;
        return tag === 'el-header' || tag === 'el-footer';
      });
    })();

    return <section
      {...data}
      class={{
        'el-container': true,
        'is-vertical': isVertical
      }}>{children}</section>;
  }
};
