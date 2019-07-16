import { walkTreeNode, getRowIdentity } from '../util';

export default {
  data() {
    return {
      states: {
        // defaultExpandAll 存在于 expand.js 中，这里不重复添加
        // TODO: 拆分为独立的 TreeTale，在 expand 中，展开行的记录是放在 expandRows 中，统一用法
        expandRowKeys: [],
        treeData: {},
        indent: 16,
        lazy: false,
        lazyTreeNodeMap: {},
        lazyColumnIdentifier: 'hasChildren',
        childrenColumnName: 'children'
      }
    };
  },

  computed: {
    // 嵌入型的数据，watch 无法是检测到变化 https://github.com/ElemeFE/element/issues/14998
    // TODO: 使用 computed 解决该问题，是否会造成性能问题？
    // @return { id: { level, children } }
    normalizedData() {
      if (!this.states.rowKey) return {};
      const data = this.states.data || [];
      return this.normalize(data);
    },
    // @return { id: { children } }
    // 针对懒加载的情形，不处理嵌套数据
    normalizedLazyNode() {
      const { rowKey, lazyTreeNodeMap, lazyColumnIdentifier } = this.states;
      const keys = Object.keys(lazyTreeNodeMap);
      const res = {};
      if (!keys.length) return res;
      keys.forEach(key => {
        if (lazyTreeNodeMap[key].length) {
          const item = { children: [] };
          lazyTreeNodeMap[key].forEach(row => {
            const currentRowKey = getRowIdentity(row, rowKey);
            item.children.push(currentRowKey);
            if (row[lazyColumnIdentifier] && !res[currentRowKey]) {
              res[currentRowKey] = { children: [] };
            }
          });
          res[key] = item;
        }
      });
      return res;
    }
  },

  watch: {
    normalizedData: 'updateTreeData',
    // expandRowKeys 在 TreeTable 中也有使用
    expandRowKeys: 'updateTreeData',
    normalizedLazyNode: 'updateTreeData'
  },

  methods: {
    normalize(data) {
      const {
        childrenColumnName,
        lazyColumnIdentifier,
        rowKey,
        lazy
      } = this.states;
      const res = {};
      walkTreeNode(
        data,
        (parent, children, level) => {
          const parentId = getRowIdentity(parent, rowKey);
          if (Array.isArray(children)) {
            res[parentId] = {
              children: children.map(row => getRowIdentity(row, rowKey)),
              level
            };
          } else if (lazy) {
            // 当 children 不存在且 lazy 为 true，该节点即为懒加载的节点
            res[parentId] = {
              children: [],
              lazy: true,
              level
            };
          }
        },
        childrenColumnName,
        lazyColumnIdentifier
      );
      return res;
    },

    updateTreeData() {
      const nested = this.normalizedData;
      const normalizedLazyNode = this.normalizedLazyNode;
      const keys = Object.keys(nested);
      const newTreeData = {};
      if (keys.length) {
        const {
          treeData: oldTreeData,
          defaultExpandAll,
          expandRowKeys,
          lazy
        } = this.states;
        const rootLazyRowKeys = [];
        const getExpanded = (oldValue, key) => {
          const included =
            defaultExpandAll ||
            (expandRowKeys && expandRowKeys.indexOf(key) !== -1);
          return !!((oldValue && oldValue.expanded) || included);
        };
        // 合并 expanded 与 display，确保数据刷新后，状态不变
        keys.forEach(key => {
          const oldValue = oldTreeData[key];
          const newValue = { ...nested[key] };
          newValue.expanded = getExpanded(oldValue, key);
          if (newValue.lazy) {
            const { loaded = false, loading = false } = oldValue || {};
            newValue.loaded = !!loaded;
            newValue.loading = !!loading;
            rootLazyRowKeys.push(key);
          }
          newTreeData[key] = newValue;
        });
        // 根据懒加载数据更新 treeData
        const lazyKeys = Object.keys(normalizedLazyNode);
        if (lazy && lazyKeys.length && rootLazyRowKeys.length) {
          lazyKeys.forEach(key => {
            const oldValue = oldTreeData[key];
            const lazyNodeChildren = normalizedLazyNode[key].children;
            if (rootLazyRowKeys.indexOf(key) !== -1) {
              // 懒加载的 root 节点，更新一下原有的数据，原来的 children 一定是空数组
              if (newTreeData[key].children.length !== 0) {
                throw new Error('[ElTable]children must be an empty array.');
              }
              newTreeData[key].children = lazyNodeChildren;
            } else {
              const { loaded = false, loading = false } = oldValue || {};
              newTreeData[key] = {
                lazy: true,
                loaded: !!loaded,
                loading: !!loading,
                expanded: getExpanded(oldValue, key),
                children: lazyNodeChildren,
                level: ''
              };
            }
          });
        }
      }
      this.states.treeData = newTreeData;
      this.updateTableScrollY();
    },

    updateTreeExpandKeys(value) {
      // 仅仅在包含嵌套数据时才去更新
      if (Object.keys(this.normalizedData).length) {
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
      if (id && data && 'expanded' in data) {
        expanded = typeof expanded === 'undefined' ? !data.expanded : expanded;
        treeData[id].expanded = expanded;
        if (oldExpanded !== expanded) {
          this.table.$emit('expand-change', row, expanded);
        }
        this.updateTableScrollY();
      }
    },

    loadOrToggle(row) {
      this.assertRowKey();
      const { lazy, treeData, rowKey } = this.states;
      const id = getRowIdentity(row, rowKey);
      const data = treeData[id];
      if (lazy && data && 'loaded' in data && !data.loaded) {
        this.loadData(row, id, data);
      } else {
        this.toggleTreeExpansion(row);
      }
    },

    loadData(row, key, treeNode) {
      const { load } = this.table;
      const { lazyTreeNodeMap, treeData } = this.states;
      if (load && !treeData[key].loaded) {
        treeData[key].loading = true;
        load(row, treeNode, data => {
          if (!Array.isArray(data)) {
            throw new Error('[ElTable] data must be an array');
          }
          treeData[key].loading = false;
          treeData[key].loaded = true;
          treeData[key].expanded = true;
          if (data.length) {
            this.$set(lazyTreeNodeMap, key, data);
          }
          this.table.$emit('expand-change', row, true);
        });
      }
    }
  }
};
