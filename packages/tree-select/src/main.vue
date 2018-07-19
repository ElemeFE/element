<template>
  <div
    class="el-tree-select"
    @click.stop="toggleTree"
    v-clickoutside="handleClose">
    <div
      class="el-tree-select__tags"
      :style="{ 'max-width': inputWidth - 32 + 'px' }"
      ref="tags"
      v-if="multiple">
      <transition-group @after-leave="resetInputHeight">
        <el-tag
          v-for="item in selected"
          :key="item.value"
          :closable="!selectDisabled"
          :size="collapseTagSize"
          type="info"
          disable-transitions
          @close.stop="deleteTag(item)">
          <span class="el-tree-select__tags-text">{{ item.label }}</span>
        </el-tag>
      </transition-group>
      <input
        v-if="filterable"
        type="text"
        class="el-tree-select__input"
        :disabled="selectDisabled"
        :autocomplete="false"
        @click.stop
        @focus="handleFocus"
        @keydown.esc.stop.prevent="visible = false"
        @keydown.delete="deletePrevTag"
        v-model="query"
        @input="e => handleQueryChange(e.target.value)"
        :style="{ width: inputLength + 'px'}"
        ref="input">
    </div>
    <el-input
      ref="reference"
      type="text"
      v-model="selectedLabel"
      :disabled="selectDisabled"
      :readonly="readonly"
      :validate-event="false"
      :size="selectSize"
      :class="{ 'is-focus': visible }"
      @focus="handleFocus"
      @keyup.native="onInputChange"
      @mouseenter.native="inputHovering = true"
      @mouseleave.native="inputHovering = false">
      <template slot="prefix" v-if="$slots.prefix">
        <slot name="prefix"></slot>
      </template>
      <i slot="suffix"
       :class="suffixIconClass"
       @click="handleIconClick"></i>
    </el-input>
    <transition name="el-zoom-in-top">
      <div
        v-show="visible"
        ref="popper"
        :style="{'min-width': minWidth}"
        class="el-tree-select-dropdown el-popper">
        <el-tree
          ref="tree"
          :data="data"
          default-expand-all
          check-on-click-node
          highlight-current
          node-key="id"
          :empty-text="emptyText"
          :expand-on-click-node="false"
          :check-strictly="checkStrictly"
          :filter-node-method="filterMethod"
          @node-click="handleNodeClick">
        </el-tree>
      </div>
    </transition>
  </div>
</template>

<script>
import ElInput from 'element-ui/packages/input';
import ElTree from '../../tree/src/basic/basic-tree.vue';
import Clickoutside from 'element-ui/src/utils/clickoutside';
import Popper from 'element-ui/src/utils/vue-popper';
import { valueEquals } from 'element-ui/src/utils/util';
import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event';
import emitter from 'element-ui/src/mixins/emitter';
// import objectAssign from 'element-ui/src/utils/merge';
// import debounce from 'throttle-debounce/debounce';
// import { t } from 'element-ui/src/locale';

// todo: 等 vue-popper 合并后，这里还需要做出调整
const popperMixin = {
  props: {
    placement: {
      type: String,
      default: 'bottom-start'
    },
    appendToBody: Popper.props.appendToBody,
    arrowOffset: Popper.props.arrowOffset,
    offset: Popper.props.offset,
    boundariesPadding: Popper.props.boundariesPadding,
    popperOptions: Popper.props.popperOptions,
    visibleArrow: {
      type: Boolean,
      default: true
    }
  },
  methods: Popper.methods,
  data: Popper.data,
  beforeDestroy: Popper.beforeDestroy
};

const sizeMap = {
  'medium': 36,
  'small': 32,
  'mini': 28
};

export default {
  name: 'ElTreeSelect',

  mixins: [popperMixin, emitter],

  inject: {
    elForm: {
      default: ''
    },

    elFormItem: {
      default: ''
    }
  },

  props: {
    data: {
      type: Array,
      required: true
    },
    value: {
      required: true
    },
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0,
      validator(val) {
        return val >= 0;
      }
    },
    disabled: Boolean,
    clearable: Boolean,
    size: {
      type: String,
      validator(val) {
        return ['medium', 'small', 'mini'].indexOf(val) > -1;
      }
    },
    props: Object,
    placeholder: String,
    lazy: Boolean,
    load: Function,
    showCheckbox: {
      type: Boolean,
      default: false
    },
    checkStrictly: {
      type: Boolean,
      default: false
    },
    filterable: Boolean,
    // filterMethod: Function,
    emptyText: String
  },

  components: {
    ElInput,
    ElTree
  },

  directives: { Clickoutside },

  data() {
    return {
      query: '',
      selectedLabel: '',
      inputLength: 20,
      visible: false,
      inputWidth: 0,
      inputHovering: false,
      treeVisibleOnFocus: false,
      selected: this.multiple ? [] : {}
    };
  },

  computed: {
    suffixIconClass() {
      let classes = ['el-tree-select__caret', 'el-input__icon'];
      const criteria = this.clearable &&
          !this.selectDisabled &&
          this.inputHovering &&
          !this.multiple &&
          this.value !== undefined &&
          this.value !== null &&
          this.value !== '';
      if (criteria) {
        classes = [...classes, 'el-icon-circle-close', 'is-show-close'];
      } else { //  if (!this.filterable)
        classes.push('el-icon-arrow-down');
        if (this.visible) {
          classes.push('is-reverse');
        }
      }
      return classes;
    },
    selectDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
    selectSize() {
      return this.size || (this.elFormItem || {}).elFormItemSize || (this.$ELEMENT || {}).size;
    },
    collapseTagSize() {
      return ['small', 'mini'].indexOf(this.selectSize) > -1
        ? 'mini'
        : 'small';
    },
    readonly() {
      const isIE = !this.$isServer && !isNaN(Number(document.documentMode));
      return !this.filterable || this.multiple || !isIE && !this.visible;
    }
  },

  watch: {
    visible(val) {
      if (val) {
        this.updatePopper();
        if (this.multiple) {
          this.$refs.input.focus();
        }
      } else {
        this.destroyPopper();
        if (this.$refs.input) {
          this.$refs.input.blur();
        }
        this.selectedLabel = '';
        if (!this.multiple) {
          this.selectedLabel = this.selected.label || '';
          if (this.filterable) this.query = this.selectedLabel;
        }
        setTimeout(() => {
          this.handleQueryChange('');
        }, 100);
      }
    },
    value(val, oldVal) {
      if (this.multiple) {
        this.resetInputHeight();
      }
      if (!valueEquals(val, oldVal)) {
        this.dispatch('ElFormItem', 'el.form.change', val);
      }
    }
  },

  methods: {
    handleFocus(event) {
      console.log('focus 事件先触发');
      this.treeVisibleOnFocus = true;
      this.visible = true;
      this.$emit('focus', event);
    },
    handleClose() {
      this.visible = false;
    },
    toggleTree() {
      console.log('toggleTree 有待完成');
      console.log('focus 与 click 事件的先后关系');
      if (this.treeVisibleOnFocus) {
        this.treeVisibleOnFocus = false;
      } else {
        this.visible = !this.visible;
      }
    },
    handleIconClick(event) {
      if (this.suffixIconClass.indexOf('el-icon-circle-close') > -1) {
        event.stopPropagation();
        this.visible = false;
        this.$emit('input', '');
        this.emitChange('');
        this.$emit('clear');
        this.selected = {};
        this.selectedLabel = '';
      }
    },
    emitChange(val) {
      if (!valueEquals(this.value, val)) {
        this.$emit('change', val);
      }
    },
    handleQueryChange(val) {
      console.log(`query ==>  ${val}`);
      this.$refs.tree.filter(val);
    },
    handleNodeClick(data, node, tree) {
      let { value, label } = node;
      // console.log(value);
      if (this.multiple) {
        const index = this.getValueIndex(this.selected, value);
        if (index > -1) {
          this.selected.splice(index, 1);
        } else if (this.multipleLimit === 0 || this.selected.length < this.multipleLimit) {
          this.selected.push({ value, label });
        }
        const values = this.selected.map(({ value }) => value);
        console.log(values);
        this.$emit('input', values);
        this.emitChange(values);
      } else {
        if (value === this.value) {
          value = ''; // toggle
        }
        this.selected = { value, label };
        this.selectedLabel = label;
        this.$emit('input', value);
        this.emitChange(value);
        this.visible = false;
      }
    },
    onInputChange() {
      // todo: 这段逻辑搞明白
      if (this.filterable && this.query !== this.selectedLabel) {
        this.query = this.selectedLabel;
        this.handleQueryChange(this.query);
      }
    },
    filterMethod(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    resetInputHeight() {
      console.log('resetInputHeight');
      this.$nextTick(() => {
        const inputEl = this.$refs.reference.$refs.input;
        const tags = this.$refs.tags;
        let height = sizeMap[this.selectSize] || 40;
        console.log(tags.childElementCount);
        console.log(`clientHeight => ${tags.clientHeight}`);
        if (this.selected.length !== 0) {
          height = Math.max((tags.clientHeight + (tags.clientHeight > height ? 6 : 0)), height);
        }
        inputEl.style.height = `${height}px`;
        if (this.visible) {
          this.updatePopper();
        }
      });
    },
    getValueIndex(arr = [], value) {
      let index = -1;
      arr.some((item, i) => {
        if (item.value === value) {
          index = i;
          return true;
        } else {
          return false;
        }
      });
      return index;
    },
    deletePrevTag(e) {
      if (e.target.value.length <= 0) {
        this.selected.splice(-1, 1);
        const values = this.selected.map(({ value }) => value);
        this.$emit('input', values);
        this.emitChange(values);
      }
    },
    deleteTag(item) {
      this.selected = this.selected.filter(selectItem => selectItem !== item);
      const values = this.selected.map(({ value }) => value);
      this.$emit('input', values);
      this.emitChange(values);
    },
    resetInputWidth() {
      this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
    },

    handleResize() {
      this.resetInputWidth();
      if (this.multiple) this.resetInputHeight();
    }
  },

  mounted() {
    this.referenceElm = this.$refs.reference.$el;
    this.popperElm = this.$refs.popper;
    this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
    addResizeListener(this.$el, this.handleResize);
  },

  beforeDestroy() {
    removeResizeListener(this.$el, this.handleResize);
  }
};
</script>
