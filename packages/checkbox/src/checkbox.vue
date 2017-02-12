<template>
  <label class="el-checkbox">
    <span class="el-checkbox__input"
      :class="{
        'is-disabled': disabled,
        'is-checked': isChecked,
        'is-indeterminate': indeterminate,
        'is-focus': focus
      }"
    >
      <span class="el-checkbox__inner"></span>
      <input
        v-if="trueValue || falseValue"
        class="el-checkbox__original"
        type="checkbox"
        :name="name"
        :disabled="disabled"
        :true-value="trueValue"
        :false-value="falseValue"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false">
      <input
        v-else
        class="el-checkbox__original"
        type="checkbox"
        :disabled="disabled"
        :value="value"
        :name="name"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false">
    </span>
    <span class="el-checkbox__label" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElCheckbox',

    mixins: [Emitter],

    componentName: 'ElCheckbox',

    data() {
      return {
        selfModel: false,
        focus: false
      };
    },

    computed: {
      model: {
        get() {
          return this.isGroup
            ? this.store : this.value !== undefined
            ? this.value : this.selfModel;
        },

        set(val) {
          if (this.isGroup) {
            this.dispatch('ElCheckboxGroup', 'input', [val]);
          } else if (this.value !== undefined) {
            this.$emit('input', val);
          } else {
            this.selfModel = val;
          }
        }
      },

      isChecked() {
        if ({}.toString.call(this.model) === '[object Boolean]') {
          return this.model;
        } else if (Array.isArray(this.model)) {
          return this.model.indexOf(this.value) > -1;
        } else if (this.model !== null && this.model !== undefined) {
          return this.model === this.trueValue;
        }
      },

      isGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'ElCheckboxGroup') {
            parent = parent.$parent;
          } else {
            this._checkboxGroup = parent;
            return true;
          }
        }
        return false;
      },

      store() {
        return this._checkboxGroup ? this._checkboxGroup.value : this.value;
      }
    },

    props: {
      value: {},
      label: {},
      indeterminate: Boolean,
      disabled: Boolean,
      checked: Boolean,
      name: String,
      trueValue: [String, Number],
      falseValue: [String, Number]
    },

    methods: {
      addToStore() {
        if (
          Array.isArray(this.model) &&
          this.model.indexOf(this.value) === -1
        ) {
          this.model.push(this.value);
        } else {
          this.model = this.trueValue || true;
        }
      },
      handleChange(ev) {
        this.$emit('change', ev);
        if (this.isGroup) {
          this.$nextTick(_ => {
            this.dispatch('ElCheckboxGroup', 'change', [this._checkboxGroup.value]);
          });
        }
      }
    },

    created() {
      this.checked && this.addToStore();
    }
  };
</script>
