<template>
  <li
    @mouseenter="hoverItem"
    @click.stop="selectOptionClick"
    class="tm-select-dropdown__item"
    v-show="visible"
    :class="{
      'selected': itemSelected,
      'is-disabled': disabled || groupDisabled || limitReached,
      'is-checkbox': isCheckbox,
      'hover': hover,
    }">
    <slot>
      <span>{{ currentLabel }}</span>
      <tm-checkbox v-if="isCheckbox" v-model="itemSelected"></tm-checkbox>
    </slot>
  </li>
</template>

<script type="text/babel">
  import Emitter from 'tmconsulting-ui/src/mixins/emitter';
  import { getValueByPath } from 'tmconsulting-ui/src/utils/util';

  export default {
    mixins: [Emitter],

    name: 'TmOption',

    componentName: 'TmOption',

    inject: ['select'],

    props: {
      value: {
        required: true
      },
      label: [String, Number],
      created: Boolean,
      disabled: {
        type: Boolean,
        default: false
      },
      checkbox: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        index: -1,
        groupDisabled: false,
        visible: true,
        hitState: false,
        hover: false
      };
    },

    computed: {
      isCheckbox() {
        return this.checkbox;
      },
      isObject() {
        return Object.prototype.toString.call(this.value).toLowerCase() === '[object object]';
      },

      currentLabel() {
        return this.label || (this.isObject ? '' : this.value);
      },

      currentValue() {
        return this.value || this.label || '';
      },

      itemSelected: {
        get: function() {
          if (!this.select.multiple) {
            return this.isEqual(this.value, this.select.value);
          } else {
            return this.contains(this.select.value, this.value);
          }
        },
        set: function() {
        }
      },

      limitReached() {
        if (this.select.multiple) {
          return !this.itemSelected &&
            (this.select.value || []).length >= this.select.multipleLimit &&
            this.select.multipleLimit > 0;
        } else {
          return false;
        }
      }
    },

    watch: {
      currentLabel() {
        if (!this.created && !this.select.remote) this.dispatch('TmSelect', 'setSelected');
      },
      value() {
        if (!this.created && !this.select.remote) this.dispatch('TmSelect', 'setSelected');
      }
    },

    methods: {
      isEqual(a, b) {
        if (!this.isObject) {
          return a === b;
        } else {
          const valueKey = this.select.valueKey;
          return getValueByPath(a, valueKey) === getValueByPath(b, valueKey);
        }
      },

      contains(arr = [], target) {
        if (!this.isObject) {
          return arr.indexOf(target) > -1;
        } else {
          const valueKey = this.select.valueKey;
          return arr.some(item => {
            return getValueByPath(item, valueKey) === getValueByPath(target, valueKey);
          });
        }
      },

      handleGroupDisabled(val) {
        this.groupDisabled = val;
      },

      hoverItem() {
        if (!this.disabled && !this.groupDisabled) {
          this.select.hoverIndex = this.select.options.indexOf(this);
        }
      },

      selectOptionClick() {
        if (this.disabled !== true && this.groupDisabled !== true) {
          this.dispatch('TmSelect', 'handleOptionClick', this);
        }
      },

      queryChange(query) {
        // query 里如果有正则中的特殊字符，需要先将这些字符转义
        let parsedQuery = String(query).replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, '\\$1');
        this.visible = new RegExp(parsedQuery, 'i').test(this.currentLabel) || this.created;
        if (!this.visible) {
          this.select.filteredOptionsCount--;
        }
      }
    },

    created() {
      this.select.options.push(this);
      this.select.cachedOptions.push(this);
      this.select.optionsCount++;
      this.select.filteredOptionsCount++;

      this.$on('queryChange', this.queryChange);
      this.$on('handleGroupDisabled', this.handleGroupDisabled);
    },

    beforeDestroy() {
      this.select.onOptionDestroy(this.select.options.indexOf(this));
    }
  };
</script>
