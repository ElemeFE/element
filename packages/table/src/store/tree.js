// import { getKeysMap, getRowIdentity, walkTreeNode } from '../util';

export default {
  data() {
    return {
      states: {
        // defaultExpandAll 存在于 expand.js 中，在这里只是注释掉。
        // TODO：拆分为独立的 TreeTale
        // defaultExpandAll: false,
        treeData: {},
        indent: 16,
        lazy: false,
        lazyTreeNodeMap: {},
        childrenColumnName: 'children'
      }
    };
  },

  methods: {
    updateTreeData() {
      // 这里要处理一下数据合并的情形
      this.assertRowKey();

      // const { states, table } = this;
      // const { data = [], rowKey } = states;
      // const newTreeData = {};
      // const oldTreeData = states.treeData;
      // walkTreeNode(data, (parent, children, level) => {
      // }, this.childrenColumnName);
    },

    updateTreeExpansion() {

    },

    toggleTreeExpansion() {

    },

    loadData() {

    }
  }
};
