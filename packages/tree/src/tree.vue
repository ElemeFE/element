<template>
  <div class="el-tree">
    <el-tree-node v-for="child in tree.root.children" :node="child"></el-tree-node>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tree from './model/tree';

  export default {
    name: 'el-tree',

    props: {
      data: {
        type: Array
      },
      showCheckbox: {
        type: Boolean,
        default: false
      },
      props: {
        default() {
          return {
            children: 'children',
            label: 'label',
            icon: 'icon'
          };
        }
      },
      lazy: {
        type: Boolean,
        default: false
      },
      load: {
        type: Function
      }
    },

    created() {
      this.$isTree = true;

      this.tree = new Tree({
        data: this.data,
        lazy: this.lazy,
        props: this.props,
        load: this.load
      });
    },

    data() {
      return {
        tree: {}
      };
    },

    components: {
      ElTreeNode: require('./tree-node.vue')
    },

    computed: {
      children: {
        set(value) {
          this.data = value;
        },
        get() {
          return this.data;
        }
      }
    },

    methods: {
      getCheckedNodes(leafOnly) {
        return this.tree.getCheckedNodes(leafOnly);
      }
    }
  };
</script>
