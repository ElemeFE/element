<template>
  <div
    class="el-tree-select"
    @click.stop="toggleTree"
    v-clickoutside="handleClose">
    <div class="el-tree-select__tags" v-if="multiple">
      <transition-group @after-leave="resetInputHeight">
        <el-tag
          v-for="item in selected"
          :key="getValueKey(item)"
          :closable="!selectDisabled"
          :size="collapseTagSize"
          type="info"
          @close="deleteTag($event, item)"
          disable-transitions>
          <span class="el-tree-select__tags-text">{{ item.currentLabel }}</span>
        </el-tag>
      </transition-group>
      <input
        v-if="filterable"
        type="text"
        class="el-tree-select__input"
        :disabled="selectDisabled"
        :autocomplete="false"
        @click.stop
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

export default {
  name: 'ElTreeSelect',

  mixins: [popperMixin],

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
      default: 0
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
      inputHovering: false,
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
      } else if (!this.filterable) {
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
    readonly() {
      // trade-off for IE input readonly problem: https://github.com/ElemeFE/element/issues/10403
      const isIE = !this.$isServer && !isNaN(Number(document.documentMode));
      return !this.filterable || this.multiple || !isIE && !this.visible;
    }
  },

  watch: {
    visible(val) {
      if (val) {
        this.updatePopper();
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
    }
  },

  methods: {
    handleFocus(event) {
      console.log('focus 事件先触发');
      this.visible = true;
      this.$emit('focus', event);
    },
    handleClose() {
      this.visible = false;
    },
    toggleTree() {
      console.log('toggleTree 有待完成');
      console.log('focus 与 click 事件的先后关系');
      // if (!this.selectDisabled) {
      //   this.visible = !this.visible;
      //   if (this.visible) {
      //     (this.$refs.input || this.$refs.reference).focus();
      //   }
      // }
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
        // todo
      } else {
        if (value === this.value) {
          value = ''; // toggle
        } else {
          // todo
        }
        this.selected = { value, label };
        this.selectedLabel = label;
        this.$emit('input', value);
        this.emitChange(value);
        this.visible = false;
      }
      this.handleQueryChange('');
    },
    onInputChange() {
      // todo: 这段逻辑搞明白
      console.log(`搜索 =》 ${this.query}, this.selectedLabel ${this.selectedLabel}`);
      if (this.filterable && this.query !== this.selectedLabel) {
        this.query = this.selectedLabel;
        console.log('搜索 =》 ', this.query);
        this.handleQueryChange(this.query);
      }
    },
    filterMethod(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  },

  mounted() {
    this.referenceElm = this.$refs.reference.$el;
    this.popperElm = this.$refs.popper;
  }
};
</script>
