<template>
  <div class="el-tree" :class="{ 'el-tree--highlight-current': highlightCurrent }">
    <el-tree-node
      v-for="child in tree.root.childNodes"
      :node="child"
      :props="props"
      :render-content="renderContent">
    </el-tree-node>
    <div class="el-tree__empty-block" v-if="!tree.root.childNodes || tree.root.childNodes.length === 0">
      <span class="el-tree__empty-text">{{ emptyText }}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tree from './model/tree';
  import { t } from 'element-ui/src/locale';

  export default {
    name: 'el-tree',

    props: {
      data: {
        type: Array
      },
      emptyText: {
        type: String,
        default() {
          return t('el.tree.emptyText');
        }
      },
      nodeKey: String,
      checkStrictly: Boolean,
      defaultExpandAll: Boolean,
      autoExpandParent: {
        type: Boolean,
        default: true
      },
      defaultCheckedKeys: Array,
      defaultExpandedKeys: Array,
      renderContent: Function,
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
      highlightCurrent: Boolean,
      load: Function,
      filterNodeMethod: Function
    },

    created() {
      this.$isTree = true;

      this.tree = new Tree({
        key: this.nodeKey,
        data: this.data,
        lazy: this.lazy,
        props: this.props,
        load: this.load,
        checkStrictly: this.checkStrictly,
        defaultCheckedKeys: this.defaultCheckedKeys,
        defaultExpandedKeys: this.defaultExpandedKeys,
        autoExpandParent: this.autoExpandParent,
        defaultExpandAll: this.defaultExpandAll,
        filterNodeMethod: this.filterNodeMethod
      });
    },

    data() {
      return {
        tree: {},
        currentNode: null
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

    watch: {
      data(newVal) {
        this.tree.setData(newVal);
      },
      defaultCheckedKeys(newVal) {
        this.tree.setDefaultCheckedKey(newVal);
      }
    },

    methods: {
      filter(value) {
        if (!this.filterNodeMethod) throw new Error('[Tree] filterNodeMethod is required when filter');
        this.tree.filter(value);
      },
      getCheckedNodes(leafOnly) {
        return this.tree.getCheckedNodes(leafOnly);
      },
      getCheckedKeys(leafOnly) {
        return this.tree.getCheckedKeys(leafOnly);
      },
      setCheckedNodes(nodes, leafOnly) {
        if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedNodes');
        this.tree.setCheckedNodes(nodes, leafOnly);
      },
      setCheckedKeys(keys, leafOnly) {
        if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedNodes');
        this.tree.setCheckedKeys(keys, leafOnly);
      }
    }
  };
</script>
