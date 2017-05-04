<template>
  <label class="el-radio">
    <span class="el-radio__input"
      :class="{
        'is-disabled': isClassDisabled,
        'is-checked': model === label,
        'is-focus': focus
      }"
    >
      <span class="el-radio__inner"></span>
      <input
        class="el-radio__original"
        :value="label"
        type="radio"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        :name="name"
        :disabled="isDisabled || isReadOnly">
    </span>
    <span class="el-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
  import Emitter from 'setaria-ui/src/mixins/emitter';

  export default {
    name: 'ElRadio',

    mixins: [Emitter],

    componentName: 'ElRadio',

    props: {
      value: {},
      label: {},
      disabled: Boolean,
      name: String,
      // 只读
      readonly: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        focus: false
      };
    },

    computed: {
      isGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'ElRadioGroup') {
            parent = parent.$parent;
          } else {
            this._radioGroup = parent;
            return true;
          }
        }
        return false;
      },

      model: {
        get() {
          return this.isGroup ? this._radioGroup.value : this.value;
        },

        set(val) {
          if (this.isGroup) {
            this.dispatch('ElRadioGroup', 'input', [val]);
          } else {
            this.$emit('input', val);
          }
        }
      },

      isDisabled() {
        return this.isGroup
          ? this._radioGroup.disabled || this.disabled
          : this.disabled;
      }
    },
    methods: {
      isClassDisabled() {
        return this.isDisabled && !this.isReadOnly;
      },
      isReadOnly() {
        /* eslint no-underscore-dangle: ["error", { "allow": ["_radioGroup"] }]*/
        return this.readonly || this._radioGroup.readonly;
      }
    }
  };
</script>
