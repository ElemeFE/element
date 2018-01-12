<template>
  <div
    class="el-tree-node"
    @click.stop="handleClick"
    @contextmenu="($event) => this.handleContextMenu($event)"
    v-show="node.visible"
    :class="{
      'is-expanded': expanded,
      'is-current': tree.store.currentNode === node,
      'is-hidden': !node.visible,
      'is-focusable': !node.disabled,
      'is-checked': !node.disabled && node.checked
    }"
    role="treeitem"
    tabindex="-1"
    :aria-expanded="expanded"
    :aria-disabled="node.disabled"
    :aria-checked="node.checked"
    :draggable="tree.draggable"
    @dragstart.stop="handleDragStart"
    @dragenter.stop="handleDragEnter"
    @dragleave.stop="handleDragLeave"
    @dragover.stop="handleDragOver"
    @dragend.stop="handleDragEnd"
    @drop.stop="handleDrop"
    ref="node"
  >
    <div class="el-tree-node__content"
      :style="{ 'padding-left': (node.level - 1) * tree.indent + 'px' }">
      <span
        class="el-tree-node__expand-icon el-icon-caret-right"
        @click.stop="handleExpandIconClick"
        :class="{ 'is-leaf': node.isLeaf, expanded: !node.isLeaf && expanded }">
      </span>
      <el-checkbox
        v-if="showCheckbox"
        v-model="node.checked"
        :indeterminate="node.indeterminate"
        :disabled="!!node.disabled"
        @click.native.stop
        @change="handleCheckChange"
      >
      </el-checkbox>
      <span
        v-if="node.loading"
        class="el-tree-node__loading-icon el-icon-loading">
      </span>
      <node-content :node="node"></node-content>
    </div>
    <el-collapse-transition>
      <div
        class="el-tree-node__children"
        v-if="!renderAfterExpand || childNodeRendered"
        v-show="expanded"
        role="group"
        :aria-expanded="expanded"
      >
        <el-tree-node
          :render-content="renderContent"
          v-for="child in node.childNodes"
          :render-after-expand="renderAfterExpand"
          :key="getNodeKey(child)"
          :node="child"
          @node-expand="handleChildNodeExpand">
        </el-tree-node>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script type="text/jsx">
  import ElCollapseTransition from 'element-ui/src/transitions/collapse-transition';
  import ElCheckbox from 'element-ui/packages/checkbox';
  import emitter from 'element-ui/src/mixins/emitter';
  import { getNodeKey } from './model/util';

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
      renderContent: Function,
      renderAfterExpand: {
        type: Boolean,
        default: true
      }
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
          const tree = parent.tree;
          const node = this.node;
          const { data, store } = node;
          return (
            parent.renderContent
              ? parent.renderContent.call(parent._renderProxy, h, { _self: tree.$vnode.context, node, data, store })
              : tree.$scopedSlots.default
                ? tree.$scopedSlots.default({ node, data })
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
        this.$nextTick(() => this.expanded = val);
        if (val) {
          this.childNodeRendered = true;
        }
      }
    },

    methods: {
      getNodeKey(node) {
        return getNodeKey(this.tree.nodeKey, node.data);
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

      handleContextMenu(event) {
        if (this.tree._events['node-contextmenu'] && this.tree._events['node-contextmenu'].length > 0) {
          event.stopPropagation();
          event.preventDefault();
        }
        this.tree.$emit('node-contextmenu', event, this.node.data, this.node, this);
      },

      handleExpandIconClick() {
        if (this.node.isLeaf) return;
        if (this.expanded) {
          this.tree.$emit('node-collapse', this.node.data, this.node, this);
          this.node.collapse();
        } else {
          this.node.expand();
          this.$emit('node-expand', this.node.data, this.node, this);
        }
      },

      handleCheckChange(value, ev) {
        this.node.setChecked(ev.target.checked, !this.tree.checkStrictly);
        this.$nextTick(() => {
          const store = this.tree.store;
          this.tree.$emit('check', this.node.data, {
            checkedNodes: store.getCheckedNodes(),
            checkedKeys: store.getCheckedKeys(),
            halfCheckedNodes: store.getHalfCheckedNodes(),
            halfCheckedKeys: store.getHalfCheckedKeys(),
          });
        });
      },

      handleChildNodeExpand(nodeData, node, instance) {
        this.broadcast('ElTreeNode', 'tree-node-expand', node);
        this.tree.$emit('node-expand', nodeData, node, instance);
      },

      handleDragStart(ev) {
        if (typeof this.tree.allowDrag === 'function' && !this.tree.allowDrag(this.node)) {
          ev.preventDefault();
          return false;
        }
        ev.dataTransfer.effectAllowed = 'move';
        ev.dataTransfer.setData('text/plain', this.node.label);
        this.node.store.dragSourceNode = this.node;
        this.node.store.dragFromDom = this.$refs.node;
        this.node.store.allowDrop = true;
        this.tree.$emit('node-drag-start', this.node, ev);
      },

      handleDragEnter(ev) {
        ev.preventDefault();
        const store = this.node.store;
        const from = store.dragSourceNode;
        let node = this.node;
        let dom = this.$refs.node;

        if (!from) return;

        while (node.level > from.level && node.level > 1) {
          node = node.parent
          dom = this.$parent.$refs.node;
        }
        store.dragTargetNode = node;
        store.dragTargetDom = dom;

        if (!this.tree.dropAt) {
          ev.dataTransfer.dropEffect = 'none';
          store.allowDrop = false;
        } else {
          ev.dataTransfer.dropEffect = 'move';
          store.allowDrop = true;
        }

        this.tree.$emit('node-drag-enter', this.node, ev);
      },

      handleDragLeave(ev) {
        ev.preventDefault();
        if (!this.node.store.dragSourceNode) return;
        this.tree.$emit('node-drag-leave', this.node, ev);
      },

      handleDragOver(ev) {
        ev.dataTransfer.dropEffect = this.node.store.allowDrop ? 'move' : 'none';
        ev.preventDefault();
      },

      handleDrop(ev) {
        ev.preventDefault();
      },

      handleDragEnd(ev) {
        const from = this.node.store.dragSourceNode;
        const target = this.node.store.dragTargetNode;
        let position = this.tree.dropAt;

        if (!from) return;

        if (typeof this.tree.allowDrop === 'function' && !this.tree.allowDrop(from, target)) {
          position = null;
        }
        ev.preventDefault();
        ev.dataTransfer.dropEffect = 'move';

        if (target && from && from !== target && position) {
          const index = from.parent.childNodes.indexOf(from);
          from.parent.childNodes.splice(index, 1);
          if (from.parent.childNodes.length === 0) {
            from.parent.isLeaf = true;
          }
          position.parent.childNodes.splice(position.index, 0, from);
          from.parent = position.parent;
          from.parent.isLeaf = false;
        }
        this.tree.$emit('node-drag-end', from, target, position, ev);
        this.node.store.dragTargetNode = null;
        this.node.store.dragSourceNode = null;
        this.node.store.dragTargetDom = null;

        return false;
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
