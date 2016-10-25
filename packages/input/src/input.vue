<template>
  <div :class="[
    type === 'textarea' ? 'el-textarea' : 'el-input',
    size ? 'el-input--' + size : '',
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
      <!-- input 图标 -->
      <i class="el-input__icon" :class="[icon ? 'el-icon-' + icon : '']" v-if="icon" @click="handleIconClick"></i>
      <input
        v-if="type !== 'textarea'"
        class="el-input__inner"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        :minlength="minlength"
        :autocomplete="autoComplete"
        :autofocus="autofocus"
        :form="form"
        :value="value"
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
      v-model="currentValue"
      ref="textarea"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :style="textareaStyle"
      :readonly="readonly"
      :rows="rows"
      :form="form"
      :autofocus="autofocus"
      :maxlength="maxlength"
      :minlength="minlength"
      @focus="handleFocus"
      @blur="handleBlur">
    </textarea>
  </div>
</template>
<script>
  import emitter from 'element-ui/src/mixins/emitter';
  import calcTextareaHeight from './calcTextareaHeight';

  export default {
    name: 'ElInput',

    mixins: [emitter],

    props: {
      value: [String, Number],
      placeholder: String,
      size: String,
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
      minlength: Number
    },

    methods: {
      handleBlur(event) {
        this.$emit('blur', this.currentValue);
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
        const minRows = autosize.minRows;
        const maxRows = autosize.maxRows;

        this.textareaStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
      },
      handleFocus(ev) {
        this.$emit('focus', ev);
      },
      handleInput(ev) {
        this.currentValue = ev.target.value;
      },
      handleIconClick(ev) {
        this.$emit('click', ev);
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
      },
      'currentValue'(val) {
        this.$nextTick(_ => {
          this.resizeTextarea();
        });
        this.$emit('input', val);
        this.$emit('change', val);
        this.dispatch('form-item', 'el.form.change', [val]);
      }
    }
  };
</script>
