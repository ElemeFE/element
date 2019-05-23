import { walkTreeNode, getRowIdentity } from '../util';

export default {
  data() {
    return {
      states: {
        // defaultExpandAll 存在于 expand.js 中，在这里只是注释掉。
        // defaultExpandAll: false,
        // TODO: 拆分为独立的 TreeTale
        // TODO: 在 expand 中，展开行的记录是放在 expandRows 中，统一用法
        expandRowKeys: [],
        treeData: {},
        indent: 16,
        lazy: false,
        lazyTreeNodeMap: {},
        lazyColumnIndentifier: 'hasChildren',
        childrenColumnName: 'children'
      }
    };
  },

  computed: {
    // 这里的计算属性是私有的
    // 嵌入型的数据，watch 无法是检测到变化 https://github.com/ElemeFE/element/issues/14998
    // TODO: 使用 computed 解决该问题，是否会造成性能问题？
    simpleNestedData() {
      const { childrenColumnName, lazyColumnIndentifier, rowKey, lazy } = this.states;
      if (!rowKey) {
        return {};
      }
      const data = this.states.data || [];
      const res = {};
      // Vue 对 computed 做了一层 try...catch，在这里不调用 assertRowKey 方法
      let invalid = false;
      const assert = id => {
        if (id === null || id === undefined) {
          invalid = true;
        }
      };
      walkTreeNode(data, (parent, children, level) => {
        if (invalid) return;
        const parentId = getRowIdentity(parent, rowKey);
        assert(parentId);
        const childrenIdArr = [];
        children.forEach(row => {
          const id = getRowIdentity(row, rowKey);
          assert(id);
          childrenIdArr.push(id);
        });
        res[parentId] = {
          children: childrenIdArr,
          level
        };
        // 当 childrenIdArr 为空时标明该 row 需要加载数据
        if (lazy) {
          res[parentId] = {
            ...res[parentId],
            loaded: false,
            loading: false
          };
        }
      }, childrenColumnName, lazyColumnIndentifier);
      if (invalid) {
        console.warn('[Element Warn]for nested data, rowKey of every row should be specified.');
        return {};
      } else {
        return res;
      }
    }
  },

  watch: {
    simpleNestedData: 'updateTreeData',
    // 当 expandRowKeys 发生变化时，也许要更新 treeData
    expandRowKeys: 'updateTreeData'
  },

  methods: {
    updateTreeData() {
      const nested = this.simpleNestedData;
      const keys = Object.keys(nested);
      if (!keys.length) return;
      const { treeData: oldTreeData, defaultExpandAll, expandRowKeys } = this.states;
      const newTreeData = {};
      // 合并 expanded 与 display，确保数据刷新后，状态不变
      keys.forEach(key => {
        const newValue = { ...nested[key] };
        const oldValue = oldTreeData[key];
        if (newValue.children) {
          const included = defaultExpandAll || (expandRowKeys && expandRowKeys.indexOf(key) !== -1);
          newValue.expanded = (oldValue && oldValue.expanded) || included;
        }
        newTreeData[key] = newValue;
      });
      this.states.treeData = newTreeData;
    },

    updateTreeExpandKeys(value) {
      // 仅仅在包含嵌套数据时才去更新
      if (Object.keys(this.simpleNestedData).length) {
        this.states.expandRowKeys = value;
        this.updateTreeData();
      }
    },

    toggleTreeExpansion(row, expanded) {
      this.assertRowKey();

      const { rowKey, treeData } = this.states;
      const id = getRowIdentity(row, rowKey);
      const data = id && treeData[id];
      const oldExpanded = treeData[id].expanded;
      if (id && data && ('expanded' in data)) {
        expanded = typeof expanded === 'undefined' ? !data.expanded : expanded;
        treeData[id].expanded = expanded;
        if (oldExpanded !== expanded) {
          this.table.$emit('expand-change', row);
        }
      }
    },

    loadOrToggle(row) {
      this.assertRowKey();
      const { lazy, treeData, rowKey } = this.states;
      const id = getRowIdentity(row, rowKey);
      const data = treeData[id];
      if (lazy && data && !data.loaded) {
        this.loadData(row, data);
      } else {
        this.toggleTreeExpansion(row);
      }
    },

    loadData(row, loadData) {
      console.log('todo ==>');
    }
  }
};
