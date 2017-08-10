<template>
  <div v-if="type === 'number'">
    <div :class="[
      type === 'textarea' ? 'el-textarea' : 'el-input',
      size ? 'el-input--' + size : '',
      {
        'is-disabled': disabled,
        'el-input-group': $slots.prepend || $slots.append,
        'el-input-group--append': $slots.append,
        'el-input-group--prepend': $slots.prepend
      }
    ]">
      <input
        class="el-input__inner"
        :value="value.from"
        v-bind="$props"
        type="text"
        maxlength="16"
        placeholder="全部"
        ref="inputFrom"
        @input="handleInputFrom"
        @focus="handleFocus"
        @blur="handleFromBlur"
      >
    </div>
    <span>至</span>
    <div :class="[
      type === 'textarea' ? 'el-textarea' : 'el-input',
      size ? 'el-input--' + size : '',
      {
        'is-disabled': disabled,
        'el-input-group': $slots.prepend || $slots.append,
        'el-input-group--append': $slots.append,
        'el-input-group--prepend': $slots.prepend
      }
    ]">
      <input
        class="el-input__inner"
        :value="value.to"
        v-bind="$props"
        type="text"
        maxlength="16"
        placeholder="全部"
        ref="inputTo"
        @input="handleInputTo"
        @focus="handleFocus"
        @blur="handleToBlur"
      >
    </div>
  </div>
  <div v-else :class="[
    type === 'textarea' ? 'el-textarea' : 'el-input',
    size ? 'el-input--' + size : '',
    {
      'is-disabled': disabled,
      'el-input-group': $slots.prepend || $slots.append,
      'el-input-group--append': $slots.append,
      'el-input-group--prepend': $slots.prepend
    }
  ]">
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <div class="el-input-group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <!-- input 图标 -->
      <slot name="icon">
        <i class="el-input__icon"
          :class="[
            'el-icon-' + icon,
            onIconClick ? 'is-clickable' : ''
          ]"
          v-if="icon"
          @click="handleIconClick">
        </i>
      </slot>
      <input
        v-if="type !== 'textarea'"
        class="el-input__inner"
        v-bind="$props"
        :autocomplete="autoComplete"
        :value="currentValue"
        ref="input"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      >
      <i class="el-input__icon el-icon-loading" v-if="validating"></i>
      <!-- 后置元素 -->
      <div class="el-input-group__append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>
    <textarea
      v-else
      class="el-textarea__inner"
      :value="currentValue"
      @input="handleInput"
      ref="textarea"
      v-bind="$props"
      :style="textareaStyle"
      @focus="handleFocus"
      @blur="handleBlur">
    </textarea>
  </div>
</template>
<script>
  import emitter from 'my-element-ui/src/mixins/emitter';
  import calcTextareaHeight from './calcTextareaHeight';
  import merge from 'my-element-ui/src/utils/merge';

  export default {
    name: 'ElInput',

    componentName: 'ElInput',

    mixins: [emitter],

    data() {
      return {
        currentValue: this.value,
        textareaCalcStyle: {}
      };
    },

    props: {
      value: [String, Number, Object],
      placeholder: String,
      size: String,
      resize: String,
      readonly: Boolean,
      autofocus: Boolean,
      icon: String,
      disabled: Boolean,
      type: {
        type: String,
        default: 'text'
      },
      name: String,
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      rows: {
        type: Number,
        default: 2
      },
      autoComplete: {
        type: String,
        default: 'off'
      },
      form: String,
      maxlength: Number,
      minlength: Number,
      max: {},
      min: {},
      step: {},
      validateEvent: {
        type: Boolean,
        default: true
      },
      onIconClick: Function
    },

    computed: {
      validating() {
        return this.$parent.validateState === 'validating';
      },
      textareaStyle() {
        return merge({}, this.textareaCalcStyle, { resize: this.resize });
      }
    },

    watch: {
      'value'(val, oldValue) {
        this.setCurrentValue(val);
      }
    },

    methods: {
      handleBlur(event) {
        this.$emit('blur', event);
        if (this.validateEvent) {
          this.dispatch('ElFormItem', 'el.form.blur', [this.currentValue]);
        }
      },
      handleFromBlur(event) {
        if (this.value.to !== '' && Number(this.value.from) >= Number(this.value.to)) {
          this.value.from = '';
          this.$refs.inputFrom.value = '';
        }
        this.$emit('blur', event);
        if (this.validateEvent) {
          this.dispatch('ElFormItem', 'el.form.blur', [this.currentValue]);
        }
      },
      handleToBlur(event) {
        if (this.value.from !== '' && Number(this.value.from) >= Number(this.value.to)) {
          this.value.to = '';
          this.$refs.inputTo.value = '';
        }
        this.$emit('blur', event);
        if (this.validateEvent) {
          this.dispatch('ElFormItem', 'el.form.blur', [this.currentValue]);
        }
      },
      inputSelect() {
        this.$refs.input.select();
      },
      resizeTextarea() {
        if (this.$isServer) return;
        var { autosize, type } = this;
        if (!autosize || type !== 'textarea') return;
        const minRows = autosize.minRows;
        const maxRows = autosize.maxRows;

        this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
      },
      handleFocus(event) {
        this.$emit('focus', event);
      },
      handleInput(event) {
        const value = event.target.value;
        this.$emit('input', value);
        this.setCurrentValue(value);
        this.$emit('change', value);
      },
      handleInputFrom(event) {
        const value = event.target.value;
        if (value === '') {
          this.value.from = '';
          this.$refs.inputFrom.value = '';
        } else if (/^\d+(\.\d{1,2})?$/.test(value) && (this.value.to === '' || Number(value) < Number(this.value.to))) {
          this.value.from = value;
        } else {
          this.$refs.inputFrom.value = this.value.from;
        }
        this.$emit('input', this.value);
        this.$emit('change', this.value);
      },
      handleInputTo(event) {
        const value = event.target.value;
        if (value === '') {
          this.value.to = '';
          this.$refs.inputTo.value = '';
        } else if (/^\d+(\.\d{1,2})?$/.test(value) && (value.length < 16 || Number(value) > Number(this.value.from))) {
          this.value.to = value;
        } else {
          this.$refs.inputTo.value = this.value.to;
        }
        this.$emit('input', this.value);
        this.$emit('change', this.value);
      },
      handleIconClick(event) {
        if (this.onIconClick) {
          this.onIconClick(event);
        }
        this.$emit('click', event);
      },
      setCurrentValue(value) {
        if (value === this.currentValue) return;
        this.$nextTick(_ => {
          this.resizeTextarea();
        });
        this.currentValue = value;
        if (this.validateEvent) {
          this.dispatch('ElFormItem', 'el.form.change', [value]);
        }
      }
    },

    created() {
      this.$on('inputSelect', this.inputSelect);
    },

    mounted() {
      this.resizeTextarea();
    }
  };
</script>
