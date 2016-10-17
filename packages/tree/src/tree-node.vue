<template>
  <div class="el-tree-node"
    @click.stop="handleClick"
    :class="{ expanded: childNodeRendered && expanded, 'is-current': $tree.currentNode === _self }">
    <div class="el-tree-node__content"
      :style="{ 'padding-left': node.level * 16 + 'px' }"
      @click="handleExpandIconClick">
      <span
        class="el-tree-node__expand-icon"
        :class="{ 'is-leaf': node.isLeaf, expanded: !node.isLeaf && expanded }">
      </span>
      <el-checkbox
        v-if="showCheckbox"
        v-model="node.checked"
        :indeterminate="node.indeterminate"
        @change="handleCheckChange"
        @click.native="handleUserClick">
      </el-checkbox>
      <span
        v-if="node.loading"
        class="el-tree-node__icon el-icon-loading">
      </span>
      <node-content :node="node"></node-content>
    </div>
    <collapse-transition>
      <div
        class="el-tree-node__children"
        v-show="expanded">
        <el-tree-node
          :render-content="renderContent"
          v-for="child in node.childNodes"
          :node="child">
        </el-tree-node>
      </div>
    </collapse-transition>
  </div>
</template>

<script type="text/jsx">
  import CollapseTransition from './transition';

  export default {
    name: 'el-tree-node',

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
      CollapseTransition,
      NodeContent: {
        props: {
          node: {
            required: true
          }
        },
        render(h) {
          const parent = this.$parent;
          return (
            parent.renderContent
              ? parent.renderContent.call(parent._renderProxy, h, { _self: parent.$parent.$vnode.context, node: this.node })
              : <span class="el-tree-node__label">{ this.node.label }</span>
          );
        }
      }
    },

    data() {
      return {
        $tree: null,
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
      }
    },

    methods: {
      handleSelectChange(checked, indeterminate) {
        if (this.oldChecked !== checked && this.oldIndeterminate !== indeterminate) {
          this.$tree.$emit('check-change', this.node.data, checked, indeterminate);
        }
        this.oldChecked = checked;
        this.indeterminate = indeterminate;
      },

      handleClick() {
        this.$tree.currentNode = this;
      },

      handleExpandIconClick(event) {
        let target = event.target;
        if (target.tagName.toUpperCase() !== 'DIV' &&
          target.parentNode.nodeName.toUpperCase() !== 'DIV' ||
          target.nodeName.toUpperCase() === 'LABEL') return;
        if (this.expanded) {
          this.node.collapse();
          this.expanded = false;
        } else {
          this.node.expand(() => {
            this.expanded = true;
            this.childNodeRendered = true;
          });
        }
        this.$tree.$emit('node-click', this.node.data, this.node, this);
      },

      handleUserClick() {
        if (this.node.indeterminate) {
          this.node.setChecked(this.node.checked, true);
        }
      },

      handleCheckChange(ev) {
        if (!this.node.indeterminate) {
          this.node.setChecked(ev.target.checked, true);
        }
      }
    },

    created() {
      var parent = this.$parent;

      if (parent.$isTree) {
        this.$tree = parent;
      } else {
        this.$tree = parent.$tree;
      }

      const tree = this.$tree;
      const props = this.props || {};
      const childrenKey = props['children'] || 'children';

      this.$watch(`node.data.${childrenKey}`, () => {
        this.node.updateChildren();
      });

      if (!tree) {
        console.warn('Can not find node\'s tree.');
      }

      this.showCheckbox = tree.showCheckbox;
    }
  };
</script>
