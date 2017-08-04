<template>
  <div class="el-tree-node"
    @click.stop="handleClick"
    v-show="node.visible"
    :class="{
      'is-expanded': childNodeRendered && expanded,
      'is-current': tree.store.currentNode === node,
      'is-hidden': !node.visible,
      'is-curlink':node.currentLink,
      'is-checked':node.checked
    }">
    <div class="el-tree-node__content">
      <span
        class="el-tree-node__expand-icon"
        @click.stop="handleExpandIconClick"
        :class="{ 'is-leaf': node.isLeaf}">
      </span>
      <el-checkbox
        v-if="showCheckbox"
        v-model="node.checked"
        :indeterminate="node.indeterminate"
        @change="handleCheckChange"
        @click.native.stop="handleUserClick">
      </el-checkbox>
      <span
        v-if="node.loading && !node.isMore"
        class="el-tree-node__loading-icon el-icon-loading">
      </span>
      <node-content :node="node"></node-content>
    </div>

  </div>
</template>
<style>
.el-tree-node__content > .el-checkbox{
  vertical-align: inherit;
}
.el-tree-node{
  border-bottom: #e5e5e5 1px solid;
  position: relative;
}
.el-tree-node__content{
  padding-left: 10px;
}
.el-tree-node__expand-icon{
  position: absolute;
  right: 0px;
  top:12px;
}
.is-curlink{
  background: #ebfcff;
}
.el-checkbox__inner{
  width: 14px;
  height: 14px;
  border-radius:2px;
}
.el-checkbox__inner::after{
  height: 6px;
  width: 3px;
  left: 4px;
}
.el-checkbox__input.is-checked .el-checkbox__inner{
  background: #0dcfff;
  border-color: #0dcfff;
}
.el-checkbox__input.is-indeterminate .el-checkbox__inner{
  background: #0dcfff;
  border-color: #0dcfff;
}
.el-tree-node__expand-icon{
  border: 5px solid transparent;
  border-left-width: 6px;
  border-left-color: #dfdfdf;
}
.is-checked .el-tree-node__label{
  color:#0dcfff;
}
</style>
<script type="text/jsx">
  import ElCollapseTransition from 'my-element-ui/src/transitions/collapse-transition';
  import ElCheckbox from 'my-element-ui/packages/checkbox';
  import emitter from 'my-element-ui/src/mixins/emitter';

  export default {
    name: 'ElTreeNode',

    componentName: 'ElTreeNode',

    mixins: [emitter],

    props: {
      node: {
        default() {
          return {};
        }
      },
      props: {},
      renderContent: Function
    },

    components: {
      ElCollapseTransition,
      ElCheckbox,
      NodeContent: {
        props: {
          node: {
            required: true
          }
        },
        render(h) {
          const parent = this.$parent;
          const node = this.node;
          const data = node.data;
          const store = node.store;
          return (
            parent.renderContent
              ? parent.renderContent.call(parent._renderProxy, h, { _self: parent.tree.$vnode.context, node, data, store })
              : <span class="el-tree-node__label">{ this.node.label }</span>
          );
        }
      }
    },

    data() {
      return {
        tree: null,
        expanded: false,
        childNodeRendered: false,
        showCheckbox: false,
        showAggName: false,
        oldChecked: null,
        oldIndeterminate: null
      };
    },

    watch: {
      'node.indeterminate'(val) {
        this.handleSelectChange(this.node.checked, val);
      },

      'node.checked'(val) {
        this.handleSelectChange(val, this.node.indeterminate);
      },

      'node.expanded'(val) {
        this.expanded = val;
        if (val) {
          this.childNodeRendered = true;
        }
      }
    },

    methods: {
      getNodeKey(node, index) {
        const nodeKey = this.tree.nodeKey;
        if (nodeKey && node) {
          return node.data[nodeKey];
        }
        return index;
      },

      handleSelectChange(checked, indeterminate) {
        if (this.oldChecked !== checked && this.oldIndeterminate !== indeterminate) {
          this.tree.$emit('check-change', this.node.data, checked, indeterminate);
        }
        this.oldChecked = checked;
        this.indeterminate = indeterminate;
      },

      handleClick() {
        const store = this.tree.store;
        store.setCurrentNode(this.node);
        this.tree.$emit('current-change', store.currentNode ? store.currentNode.data : null, store.currentNode);
        this.tree.currentNode = this;
        if (this.tree.expandOnClickNode) {
          this.handleExpandIconClick();
        }
        this.tree.$emit('node-click', this.node.data, this.node, this);
      },

      handleExpandIconClick() {
        //if (this.node.isLeaf) return;
//        if (this.expanded) {
//          this.tree.$emit('node-collapse', this.node.data, this.node, this);
//          this.node.collapse();
//        }
//        else {
          this.node.expand();
          this.$emit('node-expand', this.node.data, this.node, this);
       // }
      },

      handleUserClick() {
        if (this.node.indeterminate) {
          this.node.setChecked(this.node.checked, !this.tree.checkStrictly);
        }
      },

      handleCheckChange(ev) {
        if (!this.node.indeterminate) {
          this.node.setChecked(ev.target.checked, !this.tree.checkStrictly);
        }
      },

      handleChildNodeExpand(nodeData, node, instance) {
        this.broadcast('ElTreeNode', 'tree-node-expand', node);
        this.tree.$emit('node-expand', nodeData, node, instance);
      }
    },

    created() {
      const parent = this.$parent;

      if (parent.isTree) {
        this.tree = parent;
      } else {
        this.tree = parent.tree;
      }

      const tree = this.tree;
      if (!tree) {
        console.warn('Can not find node\'s tree.');
      }

      const props = tree.props || {};
      const childrenKey = props['children'] || 'children';

      this.$watch(`node.data.${childrenKey}`, () => {
        this.node.updateChildren();
      });

      this.showCheckbox = tree.showCheckbox;

      if (this.node.expanded) {
        this.expanded = true;
        this.childNodeRendered = true;
      }

      if(this.tree.accordion) {
        this.$on('tree-node-expand', node => {
          if(this.node !== node) {
            this.node.collapse();
          }
        });
      }
    }
  };
</script>
