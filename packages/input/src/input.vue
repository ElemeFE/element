<template>
  <div :class="[
    type === 'textarea' ? 'el-textarea' : 'el-input',
    size ? 'el-input-' + size : '',
    {
      'is-disabled': disabled,
      'el-input-group': $slots.prepend || $slots.append
    }
  ]">
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <div class="el-input-group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        class="el-input__inner"
        v-model="currentValue"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :number="number"
        :maxlength="maxlength"
        :minlength="minlength"
        :autocomplete="autoComplete"
        ref="input"
        @focus="$emit('onfocus', currentValue)"
        @blur="handleBlur"
      >
      <!-- input 图标 -->
      <i class="el-input__icon" :class="[icon ? 'el-icon-' + icon : '']" v-if="icon"></i>
      <i class="el-input__icon el-icon-loading" v-if="validating"></i>
      <!-- 后置元素 -->
      <div class="el-input-group__append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>
    <textarea
      v-else
      class="el-textarea__inner"
      v-model="currentValue"
      ref="textarea"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :style="textareaStyle"
      :readonly="readonly"
      :rows="rows"
      :maxlength="maxlength"
      :minlength="minlength"
      @focus="$emit('onfocus', currentValue)"
      @blur="handleBlur">
    </textarea>
  </div>
</template>
<script>
  import emitter from 'main/mixins/emitter';
  import calcTextareaHeight from './calcTextareaHeight';

  export default {
    name: 'ElInput',

    mixins: [emitter],

    props: {
      value: [String, Number],
      placeholder: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: ''
      },
      readonly: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'text'
      },
      name: {
        type: String,
        default: ''
      },
      number: {
        type: Boolean,
        default: false
      },
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
      maxlength: Number,
      minlength: Number
    },

    methods: {
      handleBlur(event) {
        this.$emit('onblur', this.currentValue);
        this.dispatch('form-item', 'el.form.blur', [this.currentValue]);
      },

      inputSelect() {
        this.$refs.input.select();
      },
      resizeTextarea() {
        var { autosize, type } = this;
        if (!autosize || type !== 'textarea') {
          return;
        }
        const minRows = autosize ? autosize.minRows : null;
        const maxRows = autosize ? autosize.maxRows : null;
        this.textareaStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
      }
    },

    data() {
      return {
        currentValue: this.value,
        textareaStyle: {}
      };
    },

    created() {
      this.$on('inputSelect', this.inputSelect);
    },

    mounted() {
      this.resizeTextarea();
    },

    computed: {
      validating() {
        return this.$parent.validating;
      }
    },

    watch: {
      'value'(val, oldValue) {
        this.currentValue = val;
        this.resizeTextarea();
      },

      'currentValue'(val) {
        this.$emit('input', val);
        this.dispatch('form-item', 'el.form.change', [val]);
      }
    }
  };
</script>
