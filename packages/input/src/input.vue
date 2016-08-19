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
        :type="type"
        :name="name"
        class="el-input__inner"
        :placeholder="placeholder"
        v-model="currentValue"
        :disabled="disabled"
        :readonly="readonly"
        @focus="$emit('onfocus', currentValue)"
        @blur="handleBlur"
        :number="number"
        :maxlength="maxlength"
        :minlength="minlength"
        :autocomplete="autoComplete"
        ref="input"
      >
      <!-- input 图标 -->
      <i class="el-input__icon" :class="[icon ? 'el-icon-' + icon : '']" v-if="icon"></i>
      <i class="el-input__icon el-icon-loading" v-if="validating"></i>
      <!-- 后置元素 -->
      <div class="el-input-group__append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>
    <!-- 写成垂直的方式会导致 placeholder 失效, 蜜汁bug -->
    <textarea v-else v-model="currentValue" class="el-textarea__inner" :name="name" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" @focus="$emit('onfocus', currentValue)" @blur="handleBlur"></textarea>
  </div>
</template>
<script>
  import emitter from 'main/mixins/emitter';

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
      }
    },

    data() {
      return {
        currentValue: ''
      };
    },

    created() {
      this.$on('inputSelect', this.inputSelect);
    },

    computed: {
      validating() {
        return this.$parent.validating;
      }
    },

    watch: {
      'value': {
        immediate: true,
        handler(val) {
          this.currentValue = val;
        }
      },

      'currentValue'(val) {
        this.$emit('input', val);
        this.$emit('onchange', val);
        this.dispatch('form-item', 'el.form.change', [val]);
      }
    }
  };
</script>
