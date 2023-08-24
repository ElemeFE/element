<template>
  <div
    class="el-tree-select"
    v-clickoutside="handleClose"
    @click.stop="toggleMenu"
  >
    <div
      class="el-tree-select__tags"
      v-if="multiple"
      ref="tags"
      :style="{ 'max-width': inputWidth - 32 + 'px', width: '100%' }"
    >
      <span v-if="collapseTags && selected.length">
        <el-tag
          :closable="!selectDisabled"
          :size="collapseTagSize"
          :hit="selected[0].hitState"
          type="info"
          @close="deleteTag($event, selected[0])"
          disable-transitions
          >{{ selected[0].label }}</el-tag
        >
        <el-tag
          v-if="selected.length > 1"
          :closable="false"
          :size="collapseTagSize"
          type="info"
          disable-transitions
        >
          + {{ selected.length - 1 }}
        </el-tag>
      </span>

      <transition-group
        v-if="!collapseTags"
        name="el-popper-in-center"
        @after-leave="resetInputHeight"
      >
        <el-tag
          v-for="item in selected"
          :key="item.data.value"
          :closable="!selectDisabled"
          :size="collapseTagSize"
          :hit="item.hitState"
          type="info"
          @close="deleteTag($event, item)"
          disable-transitions
        >
          {{ item.data.label }}
        </el-tag>
      </transition-group>

      <input
        v-if="filterable"
        v-model="query"
        ref="input"
        type="text"
        class="el-tree-select__input"
        :disabled="disabled"
        @focus="handleFocus"
        @blur="softFocus = false"
        @keyup="managePlaceholder"
        @keydown="resetInputState"
        @keydown.down.prevent="handleNavigate('next')"
        @keydown.up.prevent="handleNavigate('prev')"
        @keydown.esc.stop.prevent="visible = false"
        @keydown.delete="deletePrevTag"
        @keydown.tab="visible = false"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
        @input="debouncedQueryChange"
        :style="{
          'flex-grow': '1',
          width: inputLength / (inputWidth - 32) + '%',
          'max-width': inputWidth - 42 + 'px',
        }"
      />
    </div>
    <el-input
      :class="{ 'is-focus': visible }"
      ref="reference"
      type="text"
      v-model="selectedLabel"
      :name="name"
      :id="id"
      :placeholder="currentPlaceholder"
      :disabled="disabled"
      :readonly="readonly"
      :size="treeSelectSize"
      :validate-event="false"
      :tabindex="multiple && filterable ? '-1' : null"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="debouncedOnInputChange"
      @keydown.native.down.stop.prevent="handleNavigate('next')"
      @keydown.native.up.stop.prevent="handleNavigate('prev')"
      @keydown.native.esc.stop.prevent="visible = false"
      @keydown.native.tab="visible = false"
      @compositionstart="handleComposition"
      @compositionupdate="handleComposition"
      @compositionend="handleComposition"
      @mouseenter.native="inputHovering = true"
      @mouseleave.native="inputHovering = false"
    >
      <template slot="prefix" v-if="$slots.prefix">
        <slot name="prefix"></slot>
      </template>
      <template slot="suffix">
        <i v-if="loading" class="el-tree-select__caret el-icon-reload"></i>
        <template v-if="!loading">
          <i v-show="!showClose" :class="['el-tree-select__caret', 'el-input__icon', 'el-icon-' + iconDirection]"></i>
          <i v-if="showClose" class="el-tree-select__caret el-input__icon el-icon-circle-close" @click="handleClearClick"></i>
        </template>
      </template>
    </el-input>

    <transition name="el-zoom-in-top" @afterLeave="doDestroy">
      <el-tree-select-dropdown
        ref="popper"
        :append-to-body="popperAppendToBody"
        v-show="visible"
        :class="[
          treeSelectSize ? `el-tree-select-dropdown--${treeSelectSize}` : '',
        ]"
      >
        <el-scrollbar
          tag="ul"
          v-show="lazy || !loading"
          wrap-class="el-tree-select-dropdown__wrap"
          view-class="el-tree-select-dropdown__list"
          ref="scrollbar"
          :class="{
            'is-empty': query && filteredOptionsCount === 0,
          }"
        >
          <el-tree
            ref="tree"
            :data="data"
            :node-key="nodeKey"
            :expand-on-click-node="!lazy && (!checkStrictly || !showCheckbox)"
            :check-strictly="checkStrictly"
            :show-checkbox="showCheckbox"
            :accordion="accordion"
            :default-expanded-keys="defaultExpandedKeys"
            :filter-node-method="filterMethod ? filterMethod : filterNodeMethod"
            :props="props"
            :lazy="lazy"
            :load="load"
            :emptyText="emptyText"
            :renderAfterExpand="renderAfterExpand"
            :defaultExpandAll="defaultExpandAll"
            :autoExpandParent="autoExpandParent"
            :indent="indent"
            :iconClass="iconClass"
            @node-click="handleNodeClick"
            @check="handleNodeCheck"
          >
            <span
              slot-scope="{ node, data }"
              :class="{
                'el-tree-node__content-text': true,
                'is-selected': node.selected,
                'is-disabled': node.disabled
              }"
            >
              {{ data[props['label']] }}
            </span>
          </el-tree>
        </el-scrollbar>
      </el-tree-select-dropdown>
    </transition>
  </div>
</template>

<script type="text/babel">
import ElTag from 'element-ui/packages/tag';
import ElInput from 'element-ui/packages/input';
import ElTree from 'element-ui/packages/tree';
import ElScrollbar from 'element-ui/packages/scrollbar';
import ElTreeSelectDropdown from './tree-select-dropdown';
import Clickoutside from 'element-ui/src/utils/clickoutside';
import {
  addResizeListener,
  removeResizeListener
} from 'element-ui/src/utils/resize-event';
import Emitter from 'element-ui/src/mixins/emitter';
import Locale from 'element-ui/src/mixins/locale';
import debounce from 'throttle-debounce/debounce';
import { valueEquals } from 'element-ui/src/utils/util';
import { isKorean } from 'element-ui/src/utils/shared';
export default {
  name: 'ElTreeSelect',

  directives: { Clickoutside },

  mixins: [Emitter, Locale],

  inject: {
    elForm: {
      default: ''
    },

    elFormItem: {
      default: ''
    }
  },

  components: { ElTag, ElInput, ElTree, ElScrollbar, ElTreeSelectDropdown },

  props: {
    name: String,
    id: String,
    nodeKey: {
      type: [String, Number],
      default: 'value'
    },
    value: {
      required: true,
      type: [String, Number, Array]
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    multiple: Boolean,
    loading: Boolean,
    collapseTags: Boolean,
    showCheckbox: Boolean,
    accordion: Boolean,
    filterMethod: Function,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      required: false
    },
    checkStrictly: {
      type: Boolean,
      default: false
    },
    load: Function,
    data: Array,
    props: {
      default() {
        return {
          value: 'value',
          label: 'label',
          children: 'children',
          disabled: 'disabled'
        };
      }
    },
    lazy: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String
    },
    renderAfterExpand: {
      type: Boolean,
      default: false
    },
    defaultExpandAll: Boolean,
    autoExpandParent: {
      type: Boolean,
      default: true
    },
    indent: {
      type: Number,
      default: 22
    },
    iconClass: String
  },

  data() {
    return {
      selectedLabel: '',
      visible: false,
      softFocus: false,
      currentPlaceholder: '',
      inputHovering: false,
      selected: this.multiple ? [] : {},
      query: '',
      filteredOptionsCount: 0,
      cachedPlaceHolder: '',
      menuVisibleOnFocus: false,
      defaultExpandedKeys: [],
      isOnComposition: false,
      isSilentBlur: false,
      inputWidth: 0,
      inputLength: 20
    };
  },

  computed: {
    selectDisabled() {
      return this.disabled;
    },

    iconDirection() {
      return this.visible ? 'arrow-up is-reverse' : 'arrow-up';
    },

    readonly() {
      return !this.filterable || this.multiple || !this.visible;
    },

    treeSelectSize() {
      return this.size || this._elFormItemSize || (this.elForm || {}).size;
    },

    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },

    showClose() {
      const hasValue =
        this.value !== undefined && this.value !== null && this.value !== '';
      return this.clearable && this.inputHovering && hasValue && !this.disabled;
    },

    propPlaceholder() {
      return typeof this.placeholder !== 'undefined'
        ? this.placeholder
        : this.t('el.select.placeholder');
    },

    collapseTagSize() {
      return ['small', 'mini'].indexOf(this.size) > -1
        ? 'mini'
        : 'small';
    }
  },

  watch: {
    propPlaceholder(val) {
      this.cachedPlaceHolder = this.currentPlaceholder = val;
    },

    value(val, oldVal) {
      if (this.multiple) {
        this.$nextTick(() => {
          this.resetInputHeight();
          this.broadcast('TuTreeSelectDropdown', 'updatePopper');
        });
        if (
          (val && val.length > 0) ||
          (this.$refs.input && this.query !== '')
        ) {
          this.currentPlaceholder = '';
        } else {
          this.currentPlaceholder = this.cachedPlaceHolder;
        }
      }
      this.query = '';
      this.handleQueryChange(this.query);
      this.setOldSelected(oldVal);
      this.setSelected();
      if (!valueEquals(val, oldVal)) {
        this.dispatch('ElFormItem', 'el.form.change', val);
      }
    },

    visible(val, oldVal) {
      if (!val) {
        this.broadcast('ElTreeSelectDropdown', 'destroyPopper');
        if (this.$refs.input) {
          this.$refs.input.blur();
        }
        this.query = '';
        this.inputLength = 20;
        this.menuVisibleOnFocus = false;
      } else {
        if (this.multiple) {
          this.resetInputHeight();
        } else {
        }
        this.$nextTick(() => {
          this.broadcast('ElTreeSelectDropdown', 'updatePopper');
        });
      }
      this.$emit('visible-change', val);
    }
  },

  created() {
    this.cachedPlaceHolder = this.currentPlaceholder = this.propPlaceholder;

    if (this.multiple && !Array.isArray(this.value)) {
      this.$emit('input', []);
    }
    if (!this.multiple && Array.isArray(this.value)) {
      this.$emit('input', '');
    }

    this.debouncedOnInputChange = debounce(this.debounce, () => {
      this.onInputChange();
    });

    this.debouncedQueryChange = debounce(this.debounce, (e) => {
      this.handleQueryChange(e.target.value);
    });
  },

  mounted() {
    if (this.multiple && Array.isArray(this.value) && this.value.length > 0) {
      this.currentPlaceholder = '';
    }
    addResizeListener(this.$el, this.handleResize);
    const reference = this.$refs.reference;
    if (reference && reference.$el) {
      const sizeMap = {
        medium: 36,
        small: 32,
        mini: 28
      };
      const input = reference.$el.querySelector('input');
      this.initialInputHeight =
        input.getBoundingClientRect().height || sizeMap[this.treeSelectSize];
    }
    addResizeListener(this.$el, this.handleResize);
    this.$nextTick(() => {
      if (reference && reference.$el) {
        this.inputWidth = reference.$el.getBoundingClientRect().width;
      }
    });
    this.setSelected();
  },

  beforeDestroy() {
    if (this.$el && this.handleResize) {
      removeResizeListener(this.$el, this.handleResize);
    }
  },

  methods: {
    handleClose() {
      this.visible = false;
    },

    toggleMenu() {
      if (!this.selectDisabled) {
        if (this.menuVisibleOnFocus) {
          this.menuVisibleOnFocus = false;
        } else {
          this.visible = !this.visible;
        }
        if (this.visible) {
          (this.$refs.input || this.$refs.reference).focus();
        }
      }
    },

    setSoftFocus() {
      this.softFocus = true;
      const input = this.$refs.input || this.$refs.reference;
      if (input) {
        input.focus();
      }
    },

    handleFocus(event) {
      if (!this.softFocus) {
        if (this.filterable) {
          if (this.filterable && !this.visible) {
            this.menuVisibleOnFocus = true;
          }
          this.visible = true;
        }
        this.$emit('focus', event);
      } else {
        this.softFocus = false;
      }
    },

    blur() {
      this.visible = false;
      this.$refs.reference.blur();
    },

    handleBlur(event) {
      setTimeout(() => {
        if (this.isSilentBlur) {
          this.isSilentBlur = false;
        } else {
          this.$emit('blur', event);
        }
      }, 50);
      this.softFocus = false;
    },

    handleNavigate(direction) {
      if (this.isOnComposition) return;
      const tree = this.$refs.tree;
      tree.initFocusedItem(direction);
    },

    handleComposition(event) {
      const text = event.target.value;
      if (event.type === 'compositionend') {
        this.isOnComposition = false;
        this.$nextTick((_) => this.handleQueryChange(text));
      } else {
        const lastCharacter = text[text.length - 1] || '';
        this.isOnComposition = !isKorean(lastCharacter);
      }
    },

    onInputChange() {
      if (this.filterable && this.query !== this.selectedLabel) {
        this.query = this.selectedLabel;
        this.handleQueryChange(this.query);
      }
    },

    handleClearClick(event) {
      event.stopPropagation();
      const value = this.multiple ? [] : '';
      this.$emit('input', value);
      this.emitChange(value);
      this.visible = false;
      this.$emit('clear');
    },

    deleteTag(event, node) {
      event.stopPropagation();
      this.handleMultipSelect(node.data, node);
      this.$emit('remove-tag', node);
    },

    managePlaceholder() {
      if (this.currentPlaceholder !== '') {
        this.currentPlaceholder = this.$refs.input.value
          ? ''
          : this.cachedPlaceHolder;
      }
    },

    resetInputState(e) {
      if (e.keyCode !== 8) this.toggleLastOptionHitState(false);
      this.inputLength = this.$refs.input.value.length * 15 + 20;
      this.resetInputHeight();
    },

    toggleLastOptionHitState(hit) {
      if (!Array.isArray(this.selected)) return;
      const option = this.selected[this.selected.length - 1];
      if (!option) return;

      if (hit === true || hit === false) {
        option.hitState = hit;
        return hit;
      }
      option.hitState = !option.hitState;
      return option.hitState;
    },

    deletePrevTag(e) {
      if (e.target.value.length <= 0 && !this.toggleLastOptionHitState()) {
        const value = this.value.slice();
        value.pop();
        this.$emit('input', value);
        this.emitChange(value);
      }
    },

    handleQueryChange(val) {
      if (this.isOnComposition) return;
      const tree = this.$refs.tree;
      tree.filter(val);
    },

    filterNodeMethod(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },

    handleResize() {
      this.resetInputWidth();
      if (this.multiple) this.resetInputHeight();
    },

    doDestroy() {
      this.$refs.popper && this.$refs.popper.doDestroy();
    },

    resetInputWidth() {
      this.inputWidth =
        this.$refs.reference &&
        this.$refs.reference.$el.getBoundingClientRect().width;
    },

    resetInputHeight() {
      if (this.collapseTags && !this.filterable) return;
      this.$nextTick(() => {
        if (!this.$refs.reference) return;
        let inputChildNodes = this.$refs.reference.$el.childNodes;
        let input = [].filter.call(
          inputChildNodes,
          (item) => item.tagName === 'INPUT'
        )[0];
        const tags = this.$refs.tags;
        const tagsHeight = tags
          ? Math.round(tags.getBoundingClientRect().height)
          : 0;
        const sizeInMap = this.initialInputHeight || 40;
        input.style.height =
          this.selected.length === 0
            ? sizeInMap + 'px'
            : Math.max(
              tags ? tagsHeight + (tagsHeight > sizeInMap ? 6 : 0) : 0,
              sizeInMap
            ) + 'px';
        if (this.visible && this.emptyText !== false) {
          this.broadcast('ElTreeSelectDropdown', 'updatePopper');
        }
      });
    },

    emitChange(val) {
      if (!valueEquals(this.value, val)) {
        this.$emit('change', val);
      }
    },

    setSelected() {
      const tree = this.$refs.tree;
      if (this.multiple) {
        const selected = [];
        if (Array.isArray(this.value)) {
          if (this.showCheckbox) {
            tree.setCheckedKeys(this.value);
          }
          this.value.forEach((val) => {
            const node = tree.getNode(val);
            if (node) {
              this.$set(node, 'selected', true);
              this.$set(node, 'hitState', false);
              selected.push(node);
            }
          });
        }
        this.selected = selected;
      } else {
        const node = tree.getNode(this.value);
        if (node) {
          if (this.showCheckbox) {
            tree.setCheckedKeys([this.value]);
          }
          this.$set(node, 'selected', true);
          this.selected = node;
          this.selectedLabel = node.label;
        } else {
          this.selected = {};
          this.selectedLabel = '';
          if (this.showCheckbox) {
            tree.setCheckedKeys([]);
          }
        }
      }
    },

    setOldSelected(oldVal) {
      const tree = this.$refs.tree;
      if (this.multiple) {
        if (Array.isArray(oldVal)) {
          oldVal.forEach((val) => {
            const node = tree.getNode(val);
            if (node) {
              this.$set(node, 'selected', false);
            }
          });
        }
      } else {
        const oldNode = tree.getNode(oldVal);
        if (oldNode) {
          this.$set(oldNode, 'selected', false);
        }
      }
    },

    findNode(tree, func) {
      for (const node of tree.childNodes) {
        if (node.data && node.disabled) break;
        if (func(node)) return node;
        if (node.childNodes && node.childNodes.length) {
          const res = this.findNode(node, func);
          if (res) return res;
        }
      }
      return null;
    },

    handleNodeCheck(data, state, node) {
      const { label } = this.props;
      if (this.multiple) {
        this.$emit('input', state.checkedKeys);
        this.emitChange(state.checkedKeys);
      } else {
        let currentValue = '';
        let currentLabel = '';
        let currentNode = '';
        currentNode = this.checkStrictly
          ? node
          : this.findNode(node, (node) => node.isLeaf) || node;
        const isCheckedNode = this.checkStrictly
          ? currentNode.checked
          : currentNode.checked &&
          !this.findNode(
            node,
            (node) => node.data[this.nodeKey] === this.value
          );
        if (isCheckedNode) {
          currentLabel = currentNode.data[label];
          currentValue = currentNode.data[this.nodeKey];
          this.$set(currentNode, 'selected', true);
        }
        this.selectedLabel = currentLabel;
        this.$emit('input', currentValue);
        this.emitChange(currentValue);
      }
      this.setSoftFocus();
    },

    handleNodeClick(data, node) {
      if (this.showCheckbox || node.disabled) return;
      if (!this.checkStrictly && node.childNodes.length !== 0) return;
      if (this.multiple) {
        this.handleMultipSelect(data, node);
      } else {
        this.handleSingleSelect(data, node);
      }
      this.setSoftFocus();
    },

    handleMultipSelect(data, node) {
      const currentValue = (this.value || []).slice();
      const selected = (this.selected || []).slice();
      const index = currentValue.indexOf(data[this.nodeKey]);
      if (index === -1) {
        selected.push(node);
        currentValue.push(data[this.nodeKey]);
        this.$set(node, 'selected', true);
      } else {
        selected.splice(index, 1);
        currentValue.splice(index, 1);
        this.$set(node, 'selected', false);
      }
      this.selected = selected;
      this.$emit('input', currentValue);
    },

    handleSingleSelect(data, node) {
      if (node.selected) return;
      const { label } = this.props;
      this.selectedLabel = data[label];
      this.$set(node, 'selected', true);
      this.$emit('input', data[this.nodeKey]);
      this.emitChange(data[this.nodeKey]);
      this.visible = false;
    }
  }
};
</script>
