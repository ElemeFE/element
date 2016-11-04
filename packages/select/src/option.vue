<template>
  <li
    @mouseenter="hoverItem"
    @click.stop="selectOptionClick"
    class="el-select-dropdown__item"
    v-show="visible"
    :class="{ 'selected': itemSelected, 'is-disabled': disabled || groupDisabled, 'hover': parent.hoverIndex === index }">
    <slot>
      <span>{{ currentLabel }}</span>
    </slot>
  </li>
</template>

<script type="text/babel">
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    mixins: [Emitter],

    name: 'el-option',

    componentName: 'option',

    props: {
      value: {
        required: true
      },
      label: [String, Number],
      selected: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        index: -1,
        groupDisabled: false,
        visible: true,
        hitState: false
      };
    },

    computed: {
      currentLabel() {
        return this.label || ((typeof this.value === 'string' || typeof this.value === 'number') ? this.value : '');
      },

      parent() {
        let result = this.$parent;
        while (!result.isSelect) {
          result = result.$parent;
        }
        return result;
      },

      itemSelected() {
        if (Object.prototype.toString.call(this.parent.selected) === '[object Object]') {
          return this === this.parent.selected;
        } else if (Array.isArray(this.parent.selected)) {
          return this.parent.value.indexOf(this.value) > -1;
        }
      },

      currentSelected() {
        return this.selected || (this.parent.multiple ? this.parent.value.indexOf(this.value) > -1 : this.parent.value === this.value);
      }
    },

    watch: {
      currentSelected(val) {
        if (val === true) {
          this.dispatch('select', 'addOptionToValue', this);
        }
      }
    },

    methods: {
      handleGroupDisabled(val) {
        this.groupDisabled = val;
      },

      hoverItem() {
        if (!this.disabled && !this.groupDisabled) {
          this.parent.hoverIndex = this.parent.options.indexOf(this);
        }
      },

      selectOptionClick() {
        if (this.disabled !== true && this.groupDisabled !== true) {
          this.dispatch('select', 'handleOptionClick', this);
        }
      },

      queryChange(query) {
        // query 里如果有正则中的特殊字符，需要先将这些字符转义
        let parsedQuery = query.replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, '\\$1');
        this.visible = new RegExp(parsedQuery, 'i').test(this.currentLabel);
        if (!this.visible) {
          this.parent.filteredOptionsCount--;
        }
      },

      resetIndex() {
        this.$nextTick(() => {
          this.index = this.parent.options.indexOf(this);
        });
      }
    },

    created() {
      this.parent.options.push(this);
      this.parent.optionsCount++;
      this.parent.filteredOptionsCount++;
      this.index = this.parent.options.indexOf(this);

      if (this.currentSelected === true) {
        this.dispatch('select', 'addOptionToValue', [this, true]);
      }

      this.$on('queryChange', this.queryChange);
      this.$on('handleGroupDisabled', this.handleGroupDisabled);
      this.$on('resetIndex', this.resetIndex);
    },

    beforeDestroy() {
      this.dispatch('select', 'onOptionDestroy', this);
    }
  };
</script>
