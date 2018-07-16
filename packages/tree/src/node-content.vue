<script>
  export default {
    name: 'NodeContent',
    inject: ['tree'],
    props: {
      node: {
        required: true,
        type: Object
      }
    },
    render(h) {
      const { tree, node, tree: { renderContent }, node: { data, store } } = this;
      if (renderContent) {
        return renderContent.call(tree, h, { node, data, store });
      } else if (tree.$scopedSlots.default) {
        return tree.$scopedSlots.default({ node, data });
      } else {
        return <span class="el-tree-node__label">{ node.label }</span>;
      }
    }
  };
</script>
