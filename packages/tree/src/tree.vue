<template>

  <div class="el-tree" :class="{ 'el-tree--highlight-current': highlightCurrent }">
  <div class="el-tree-all" v-if="contianAll && showCheckbox">
    <div class="el-tree-nodes">
      <el-tree-node
              v-for="child in root.childNodes"
              :node="child"
              :props="props"
              :key="getNodeKey(child)"
              :render-content="renderContent"
      @node-expand="handleNodeExpand">
    </el-tree-node>
  </div>
  </div>
  <div class="el-tree-levels" :class="{'el-tree-levels-all':contianAll && showCheckbox}">
    <table>
      <tbody>
      <tr>
              <td v-if="!(contianAll && showCheckbox)">
    <div class="el-tree-nodes">
      <el-tree-node
              v-for="child in root.childNodes"
              :node="child"
              :props="props"
              :key="getNodeKey(child)"
              :render-content="renderContent"
      @node-expand="handleNodeExpand">
    </el-tree-node>
  </div>
              </td>
        <td v-if="expendNodes.length > 0 && expendNode.childNodes.length > 0" v-for="expendNode in expendNodes">
          <div class="el-tree-sub" >
            <el-tree-node
                    v-for="child in expendNode.childNodes"
                    :node="child"
                    :props="props"
                    :key="getNodeKey(child)"
                    :render-content="renderContent"
            @node-expand="handleNodeExpand">
          </el-tree-node>
        </div>
        </td>

      </tr>
      </tbody>
    </table>


  </div>
  <div class="el-tree__empty-block" v-if="!root.childNodes || root.childNodes.length === 0">
    <span class="el-tree__empty-text">{{ emptyText }}</span>
  </div>
  <div style="clear: both"></div>
</div>

</template>
<style>
div{
  box-sizing: border-box;
}
.el-tree{
  height: 256px;
  position: relative;
}
.el-tree .el-tree-node__label{
  font-size: 12px;
  color:#37474f;
}
.el-tree-all{
  position: absolute;
  width: 40px;
  height: 100%;
  padding-top: 110px;
  border-right: 1px solid rgb(209, 219, 229);
}
.el-tree-all .el-tree-node{
  border: none;
}
.el-tree-all .el-tree-node__expand-icon{
  display: none;
}
.el-tree-all .el-tree-node__label{
  display: block;
  width: 20px;
  word-wrap: break-word;
  word-break: normal;
  white-space: pre-wrap;
  line-height: 16px;
  text-align: center;
}
.el-tree-levels-all{
  margin-left: 40px;
}
.el-tree-levels table{
  border-collapse:collapse;
  width:100%;
  height: 100%;
}
.el-tree-levels table tr td{
  width:17%;
  border-right: 1px solid rgb(209, 219, 229);
  vertical-align:top;
  height: 100%;
}
.el-tree-levels table tr td:last-child{
  width: 100%;
}
.el-tree-sub{
  display: table;
  width: 100%;
  height: 100%;
}
</style>
<script>
  import TreeStore from './model/tree-store';
  import {t} from 'my-element-ui/src/locale';
  import emitter from 'my-element-ui/src/mixins/emitter';

  export default {
    name: 'ElTree',

    mixins: [emitter],

    components: {
      ElTreeNode: require('./tree-node.vue')
    },

    data() {
      return {
        store: null,
        root: null,
        currentNode: null,
        expendNodes: []
      };
    },

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
      contianAll: {
          type: Boolean,
          default: false
      },
      nodeKey: {
          type: String,
          default: 'id'
      },
      checkStrictly: Boolean,
      defaultExpandAll: Boolean,
      expandOnClickNode: {
        type: Boolean,
        default: true
      },
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
      currentNodeKey: [String, Number],
      load: Function,
      filterNodeMethod: Function,
      accordion: Boolean,
      indent: {
        type: Number,
        default: 16
      }
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
      defaultCheckedKeys(newVal) {
        this.store.defaultCheckedKeys = newVal;
        this.store.setDefaultCheckedKey(newVal);
      },
      defaultExpandedKeys(newVal) {
        this.store.defaultExpandedKeys = newVal;
        this.expendNodes = this.store.setDefaultExpandedKeys(newVal);
      },
      currentNodeKey(newVal) {
        this.store.setCurrentNodeKey(newVal);
        this.store.currentNodeKey = newVal;
      },
      data(newVal) {
        this.store.setData(newVal);
      },
        expendNodes(newVal) {
            const store = this.store;
            store.setCurrentLink(newVal);
        }
    },

    methods: {
      filter(value) {
        if (!this.filterNodeMethod) throw new Error('[Tree] filterNodeMethod is required when filter');
        this.store.filter(value);
      },
      getNodeKey(node, index) {
        const nodeKey = this.nodeKey;
        if (nodeKey && node) {
          return node.data[nodeKey];
        }
        return index;
      },
      getCheckedNodes(leafOnly) {
        return this.store.getCheckedNodes(leafOnly);
      },
      getCheckedKeys(leafOnly) {
        return this.store.getCheckedKeys(leafOnly);
      },
      setCheckedNodes(nodes, leafOnly) {
        if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedNodes');
        this.store.setCheckedNodes(nodes, leafOnly);
      },
      setCheckedKeys(keys, leafOnly) {
        if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedNodes');
        this.store.setCheckedKeys(keys, leafOnly);
      },
      setChecked(data, checked, deep) {
        this.store.setChecked(data, checked, deep);
      },

      handleNodeExpand(nodeData, node, instance) {
          this.expendNodes[node.level - 1] = node;
          for (let i = 0;i < this.expendNodes.length;i++) {
              if (i > node.level - 1) {
                  this.expendNodes.splice(i, 1);
              }
          }

          this.expendNodes = Object.assign([], this.expendNodes);
          const store = this.store;
          store.setCurrentLink(this.expendNodes);
        this.broadcast('ElTreeNode', 'tree-node-expand', node);
        this.$emit('node-expand', nodeData, node, instance);
      }
    },

    created() {
      this.isTree = true;

      this.store = new TreeStore({
        key: this.nodeKey,
        data: this.data,
        lazy: this.lazy,
        props: this.props,
        load: this.load,
        containAll: this.containAll,
        currentNodeKey: this.currentNodeKey,
        checkStrictly: this.checkStrictly,
        defaultCheckedKeys: this.defaultCheckedKeys,
        defaultExpandedKeys: this.defaultExpandedKeys,
        autoExpandParent: this.autoExpandParent,
        defaultExpandAll: this.defaultExpandAll,
        filterNodeMethod: this.filterNodeMethod
      });
      this.root = this.store.root;
      this.expendNodes = this.store.setDefaultExpandedKeys(this.defaultExpandedKeys);
    }
  };
</script>
