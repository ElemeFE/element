<template>
  <ul
    :class="[
      'el-tag-select',
      tagSelectSize ? 'el-tag-select--' + tagSelectSize : ''
    ]">
    <slot></slot>
  </ul>
</template>

<script>
import { valueEquals } from 'element-ui/src/utils/util';
export default {
  name: 'ElTagSelect',

  componentName: 'ElTagSelect',

  inject: {
    elFormItem: {
      default: ''
    }
  },

  props: {
    value: {
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    size: String
  },

  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    tagSelectSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    }
  },

  provide() {
    return {
      'tagSelect': this
    };
  },

  created() {
    if (this.multiple && !Array.isArray(this.value)) {
      this.$emit('input', []);
    }
    if (!this.multiple && Array.isArray(this.value)) {
      this.$emit('input', '');
    }
    this.$on('handleItemClick', this.handleItemClick);
  },

  methods: {
    emitChange(val) {
      if (!valueEquals(this.value, val)) {
        this.$emit('change', val);
      }
    },

    handleItemClick(option, byClick) {
      if (this.multiple) {
        const value = this.value.slice();
        const itemIndex = value.indexOf(option.value);
        if (itemIndex > -1) {
          value.splice(itemIndex, 1);
        } else {
          value.push(option.value);
        }
        this.$emit('input', value);
        this.emitChange(value);
      } else {
        this.$emit('input', option.value);
        this.emitChange(option.value);
      }
    }
  }
};
</script>
