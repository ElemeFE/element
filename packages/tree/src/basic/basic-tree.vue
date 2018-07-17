<template>
  <div
    class="el-tree"
    :class="{
      'el-tree--highlight-current': highlightCurrent,
      'is-dragging': !!dragState.draggingNode,
      'is-drop-not-allow': !dragState.allowDrop,
      'is-drop-inner': dragState.dropType === 'inner'
    }"
    role="tree"
  >
    <el-tree-node
      v-for="child in root.childNodes"
      :node="child"
      :key="getNodeKey(child)"
      @node-expand="handleNodeExpand">
    </el-tree-node>
    <div class="el-tree__empty-block" v-if="isEmpty">
      <span class="el-tree__empty-text">{{ emptyText }}</span>
    </div>
    <div
      v-show="dragState.showDropIndicator"
      class="el-tree__drop-indicator"
      ref="dropIndicator">
    </div>
  </div>
</template>

<script>
  import TreeStore from '../model/tree-store';
  import { getNodeKey } from '../model/util';
  import ElTreeNode from './tree-node.vue';
  import {t} from 'element-ui/src/locale';
  import emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElTree',

    mixins: [emitter],

    components: {
      ElTreeNode
    },

    provide() {
      return {
        tree: this
      };
    },

    data() {
      return {
        store: null,
        root: null,
        treeItems: null,
        checkboxItems: [],
        dragState: {
          showDropIndicator: false,
          draggingNode: null,
          dropNode: null,
          allowDrop: true
        }
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
      renderAfterExpand: {
        type: Boolean,
        default: true
      },
      nodeKey: String,
      checkStrictly: Boolean,
      defaultExpandAll: Boolean,
      expandOnClickNode: {
        type: Boolean,
        default: true
      },
      checkOnClickNode: Boolean,
      checkDescendants: {
        type: Boolean,
        default: false
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
      draggable: {
        type: Boolean,
        default: false
      },
      allowDrag: Function,
      allowDrop: Function,
      props: {
        default() {
          return {
            children: 'children',
            label: 'label',
            icon: 'icon',
            disabled: 'disabled'
          };
        }
      },
      lazy: {
        type: Boolean,
        default: false
      },
      highlightCurrent: Boolean,
      load: Function,
      filterNodeMethod: Function,
      accordion: Boolean,
      indent: {
        type: Number,
        default: 18
      }
    },

    computed: {

      treeItemArray() {
        return Array.prototype.slice.call(this.treeItems);
      },

      isEmpty() {
        const { childNodes } = this.root;
        return !childNodes || childNodes.length === 0 || childNodes.every(({visible}) => !visible);
      }
    },

    watch: {
      defaultCheckedKeys(newVal) {
        this.store.setDefaultCheckedKey(newVal);
      },

      defaultExpandedKeys(newVal) {
        this.store.defaultExpandedKeys = newVal;
        this.store.setDefaultExpandedKeys(newVal);
      },

      data(newVal) {
        this.store.setData(newVal);
      },

      checkboxItems(val) {
        Array.prototype.forEach.call(val, (checkbox) => {
          checkbox.setAttribute('tabindex', -1);
        });
      },

      checkStrictly(newVal) {
        this.store.checkStrictly = newVal;
      }
    },

    methods: {
      filter(value) {
        if (!this.filterNodeMethod) throw new Error('[Tree] filterNodeMethod is required when filter');
        this.store.filter(value);
      },

      getNodeKey(node) {
        return getNodeKey(this.nodeKey, node.data);
      },

      getCheckedNodes(leafOnly) {
        return this.store.getCheckedNodes(leafOnly);
      },

      getCheckedKeys(leafOnly) {
        return this.store.getCheckedKeys(leafOnly);
      },

      getCurrentNode() {
        const currentNode = this.store.getCurrentNode();
        return currentNode ? currentNode.data : null;
      },

      getCurrentKey() {
        if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in getCurrentKey');
        const currentNode = this.getCurrentNode();
        return currentNode ? currentNode[this.nodeKey] : null;
      },

      setCheckedNodes(nodes, leafOnly) {
        if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedNodes');
        this.store.setCheckedNodes(nodes, leafOnly);
      },

      setCheckedKeys(keys, leafOnly) {
        if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedKeys');
        this.store.setCheckedKeys(keys, leafOnly);
      },

      setChecked(data, checked, deep) {
        this.store.setChecked(data, checked, deep);
      },

      getHalfCheckedNodes() {
        return this.store.getHalfCheckedNodes();
      },

      getHalfCheckedKeys() {
        return this.store.getHalfCheckedKeys();
      },

      setCurrentNode(node) {
        if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCurrentNode');
        this.store.setUserCurrentNode(node);
      },

      setCurrentKey(key) {
        if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCurrentKey');
        this.store.setCurrentNodeKey(key);
      },

      getNode(data) {
        return this.store.getNode(data);
      },

      remove(data) {
        this.store.remove(data);
      },

      append(data, parentNode) {
        this.store.append(data, parentNode);
      },

      insertBefore(data, refNode) {
        this.store.insertBefore(data, refNode);
      },

      insertAfter(data, refNode) {
        this.store.insertAfter(data, refNode);
      },

      handleNodeExpand(nodeData, node, instance) {
        this.broadcast('ElTreeNode', 'tree-node-expand', node);
        this.$emit('node-expand', nodeData, node, instance);
      },

      updateKeyChildren(key, data) {
        if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in updateKeyChild');
        this.store.updateChildren(key, data);
      },

      initTabIndex() {
        this.treeItems = this.$el.querySelectorAll('.is-focusable[role=treeitem]');
        this.checkboxItems = this.$el.querySelectorAll('input[type=checkbox]');
        const checkedItem = this.$el.querySelectorAll('.is-checked[role=treeitem]');
        if (checkedItem.length) {
          checkedItem[0].setAttribute('tabindex', 0);
          return;
        }
        this.treeItems[0] && this.treeItems[0].setAttribute('tabindex', 0);
      },

      handleKeydown(ev) {
        const currentItem = ev.target;
        if (currentItem.className.indexOf('el-tree-node') === -1) return;
        const keyCode = ev.keyCode;
        this.treeItems = this.$el.querySelectorAll('.is-focusable[role=treeitem]');
        const currentIndex = this.treeItemArray.indexOf(currentItem);
        let nextIndex;
        if ([38, 40].indexOf(keyCode) > -1) { // up、down
          ev.preventDefault();
          if (keyCode === 38) { // up
            nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0;
          } else {
            nextIndex = (currentIndex < this.treeItemArray.length - 1) ? currentIndex + 1 : 0;
          }
          this.treeItemArray[nextIndex].focus(); // 选中
        }
        if ([37, 39].indexOf(keyCode) > -1) { // left、right 展开
          ev.preventDefault();
          currentItem.click(); // 选中
        }
        const hasInput = currentItem.querySelector('[type="checkbox"]');
        if ([13, 32].indexOf(keyCode) > -1 && hasInput) { // space enter选中checkbox
          ev.preventDefault();
          hasInput.click();
        }
      }
    },

    created() {
      this.store = new TreeStore({
        key: this.nodeKey,
        data: this.data,
        lazy: this.lazy,
        props: this.props,
        load: this.load,
        currentNodeKey: this.currentNodeKey,
        checkStrictly: this.checkStrictly,
        checkDescendants: this.checkDescendants,
        defaultCheckedKeys: this.defaultCheckedKeys,
        defaultExpandedKeys: this.defaultExpandedKeys,
        autoExpandParent: this.autoExpandParent,
        defaultExpandAll: this.defaultExpandAll,
        filterNodeMethod: this.filterNodeMethod
      });
      this.root = this.store.root;
    },

    mounted() {
      this.initTabIndex();
      this.$el.addEventListener('keydown', this.handleKeydown);
    },

    updated() {
      this.treeItems = this.$el.querySelectorAll('[role=treeitem]');
      this.checkboxItems = this.$el.querySelectorAll('input[type=checkbox]');
    }
  };
</script>
