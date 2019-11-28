
<template>
  <div class="el-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElCheckboxGroup',

    componentName: 'ElCheckboxGroup',

    mixins: [Emitter],

    inject: {
      elFormItem: {
        default: ''
      }
    },

    props: {
      value: {},
      disabled: Boolean,
      // 可被勾选的 checkbox 的最小数量
      min: Number,
      max: Number,
      // 多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效
      size: String,
      fill: String,
      textColor: String
    },

    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      checkboxGroupSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      }
    },

    watch: {
      value(value) {
        // 当绑定值变化时触发的事件,参数更新后的值
        this.dispatch('ElFormItem', 'el.form.change', [value]);
      }
    }
  };
</script>

