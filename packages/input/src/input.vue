<template>
  <div :class="[
    type === 'textarea' ? 'el-textarea' : 'el-input',
    size ? 'el-input-' + size : '',
    {'is-disabled': disabled}
  ]">
    <template v-if="type !== 'textarea'">
      <i class="el-input__icon" :class="[icon ? 'el-icon-' + icon : '']" v-if="icon"></i>
      <i class="el-input__icon el-icon-loading" v-if="validating"></i>
      <input
        :type="type"
        :name="name"
        class="el-input__inner"
        :placeholder="placeholder"
        v-model="value"
        :disabled="disabled"
        :readonly="readonly"
        @focus="$emit('onfocus', value)"
        @blur="handleBlur"
        :number="number"
        :maxlength="maxlength"
        :minlength="minlength"
        :autocomplete="autoComplete"
        v-el:input
      >
    </template>
    <!-- 写成垂直的方式会导致 placeholder 失效, 蜜汁bug -->
    <textarea v-else v-model="value" class="el-textarea__inner" :name="name" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" @focus="$emit('onfocus', value)" @blur="handleBlur"></textarea>
  </div>
</template>
<script>
  import emitter from 'main/mixins/emitter';

  export default {
    name: 'ElInput',

    mixins: [emitter],

    props: {
      value: {
        required: true
      },
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
    events: {
      inputSelect() {
        this.$els.input.select();
      }
    },
    methods: {
      handleBlur(event) {
        this.$emit('onblur', this.value);
        this.dispatch('form-item', 'el.form.blur', [this.value]);
      }
    },
    computed: {
      validating() {
        return this.$parent.validating;
      }
    },
    watch: {
      'value'(val) {
        this.$emit('onchange', this.value);
        this.dispatch('form-item', 'el.form.change', this.value);
      }
    }
  };
</script>
