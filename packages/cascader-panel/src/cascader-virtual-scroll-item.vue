<script>
  import CascaderNode from './cascader-node.vue';

  export default {
    name: 'ElCascaderVirtualScrollItem',
    components: {CascaderNode},
    props: {
      index: { // index of current item
        type: Number
      },
      source: { // here is: {uid: 'unique_1', text: 'abc'}
        type: Object,
        default() {
          return {};
        }
      },
      menuId: {
        type: String,
        default() {
          return '';
        }
      }
    },

    render(h) {
      const { source, menuId, index } = this;
      return (
        <cascader-node
          key={ source.id }
          node={ source }
          node-id={ `${menuId}-${index}` }
          aria-haspopup={source.hasChildren }
          aria-owns={source.hasChildren ? menuId : null }
        ></cascader-node>
      );
    }
  };
</script>