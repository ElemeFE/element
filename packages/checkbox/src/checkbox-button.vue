<template>
  <label
    class="el-checkbox-button"
      :class="[
        size ? 'el-checkbox-button--' + size : '',
        { 'is-disabled': disabled },
        { 'is-checked': isChecked },
        { 'is-focus': focus },
      ]"
    >
    <input
      v-if="trueLabel || falseLabel"
      class="el-checkbox-button__original"
      type="checkbox"
      :name="name"
      :disabled="disabled"
      :true-value="trueLabel"
      :false-value="falseLabel"
      v-model="model"
      @change="handleChange"
      @focus="focus = true"
      @blur="focus = false">
    <input
      v-else
      class="el-checkbox-button__original"
      type="checkbox"
      :name="name"
      :disabled="disabled"
      :value="label"
      v-model="model"
      @change="handleChange"
      @focus="focus = true"
      @blur="focus = false">

    <span class="el-checkbox-button__inner" 
      v-if="$slots.default || label"
      :style="isChecked ? activeStyle : null">
      <slot>{{label}}</slot>
    </span>

  </label>
</template>
<script>
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElCheckboxButton',

    mixins: [Emitter],

    data() {
      return {
        selfModel: false,
        focus: false
      };
    },

    props: {
      value: {},
      label: {},
      disabled: Boolean,
      checked: Boolean,
      name: String,
      trueLabel: [String, Number],
      falseLabel: [String, Number]
    },
    computed: {
      model: {
        get() {
          return this._checkboxGroup
            ? this.store : this.value !== undefined
            ? this.value : this.selfModel;
        },

        set(val) {
          if (this._checkboxGroup) {
            let isLimitExceeded = false;
            (this._checkboxGroup.min !== undefined &&
              val.length < this._checkboxGroup.min &&
              (isLimitExceeded = true));

            (this._checkboxGroup.max !== undefined &&
              val.length > this._checkboxGroup.max &&
              (isLimitExceeded = true));

            isLimitExceeded === false &&
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
          return this.model.indexOf(this.label) > -1;
        } else if (this.model !== null && this.model !== undefined) {
          return this.model === this.trueLabel;
        }
      },

      _checkboxGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'ElCheckboxGroup') {
            parent = parent.$parent;
          } else {
            return parent;
          }
        }
        return false;
      },

      store() {
        return this._checkboxGroup ? this._checkboxGroup.value : this.value;
      },

      activeStyle() {
        return {
          backgroundColor: this._checkboxGroup.fill || '',
          borderColor: this._checkboxGroup.fill || '',
          color: this._checkboxGroup.textColor || '',
          'box-shadow': '-1px 0 0 0 ' + this._checkboxGroup.fill

        };
      },

      size() {
        return this._checkboxGroup.size;
      }
    },
    methods: {
      addToStore() {
        if (
          Array.isArray(this.model) &&
          this.model.indexOf(this.label) === -1
        ) {
          this.model.push(this.label);
        } else {
          this.model = this.trueLabel || true;
        }
      },
      handleChange(ev) {
        this.$emit('change', ev);
        if (this._checkboxGroup) {
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
