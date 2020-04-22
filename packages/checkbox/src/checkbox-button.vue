<template>
  <label
    class="el-checkbox-button"
    :class="[
      size ? 'el-checkbox-button--' + size : '',
      { 'is-disabled': isDisabled },
      { 'is-checked': isChecked },
      { 'is-focus': focus },
    ]"
    role="checkbox"
    :aria-checked="isChecked"
    :aria-disabled="isDisabled"
    >
    <input
      v-if="trueLabel || falseLabel"
      class="el-checkbox-button__original"
      type="checkbox"
      :name="name"
      :disabled="isDisabled"
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
      :disabled="isDisabled"
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
  import { calcDisabled } from 'element-ui/src/utils/util';

  export default {
    name: 'ElCheckboxButton',

    mixins: [Emitter],

    inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      },
      elCheckboxGroup: {
        default: null
      }
    },

    data() {
      return {
        selfModel: false,
        focus: false,
        isLimitExceeded: false
      };
    },

    props: {
      value: {},
      label: {},
      disabled: {
        type: Boolean,
        default: null
      },
      checked: Boolean,
      name: String,
      trueLabel: [String, Number],
      falseLabel: [String, Number]
    },
    computed: {
      model: {
        get() {
          return this.elCheckboxGroup
            ? this.store
            : this.value !== undefined ? this.value : this.selfModel;
        },

        set(val) {
          if (this.elCheckboxGroup) {
            this.isLimitExceeded = false;
            (this.elCheckboxGroup.min !== undefined &&
              val.length < this.elCheckboxGroup.min &&
              (this.isLimitExceeded = true));

            (this.elCheckboxGroup.max !== undefined &&
              val.length > this.elCheckboxGroup.max &&
              (this.isLimitExceeded = true));

            this.isLimitExceeded === false &&
            this.dispatch('ElCheckboxGroup', 'input', [val]);
          } else if (this.value !== undefined) {
            this.$emit('input', val);
          } else {
            this.selfModel = val;
          }
        }
      },

      isChecked() {
        if (typeof this.model === 'boolean') {
          return this.model;
        } else if (Array.isArray(this.model)) {
          return this.model.indexOf(this.label) > -1;
        } else if (this.model !== null && this.model !== undefined) {
          return this.model === this.trueLabel;
        }
      },

      store() {
        return this.elCheckboxGroup ? this.elCheckboxGroup.value : this.value;
      },

      activeStyle() {
        if (this.elCheckboxGroup) {
          return {
            backgroundColor: this.elCheckboxGroup.fill || '',
            borderColor: this.elCheckboxGroup.fill || '',
            color: this.elCheckboxGroup.textColor || '',
            boxShadow: '-1px 0 0 0 ' + this.elCheckboxGroup.fill
          };
        } else {
          return null;
        }
      },

      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },

      size() {
        return (!!this.elCheckboxGroup && this.elCheckboxGroup.checkboxGroupSize) ||
          this._elFormItemSize || (this.$ELEMENT || {}).size;
      },

      /* used to make the isDisabled judgment under max/min props */
      isLimitDisabled() {
        const { max, min } = this.elCheckboxGroup;
        return !!(max || min) &&
          (this.model.length >= max && !this.isChecked) ||
          (this.model.length <= min && this.isChecked);
      },

      isDisabled() {
        return (this.elCheckboxGroup
          ? this.elCheckboxGroup.disabled || this.isLimitDisabled
          : false) || calcDisabled(this.disabled, this.elForm);
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
        if (this.isLimitExceeded) return;
        let value;
        if (ev.target.checked) {
          value = this.trueLabel === undefined ? true : this.trueLabel;
        } else {
          value = this.falseLabel === undefined ? false : this.falseLabel;
        }
        this.$emit('change', value, ev);
        this.$nextTick(() => {
          if (this.elCheckboxGroup) {
            this.dispatch('ElCheckboxGroup', 'change', [this.elCheckboxGroup.value]);
          }
        });
      }
    },

    created() {
      this.checked && this.addToStore();
    }
  };
</script>
