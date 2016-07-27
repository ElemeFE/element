<template>
  <label class="el-radio">
    <span class="el-radio__input">
      <span class="el-radio__inner"
        :class="{
        'is-disabled': disabled,
        'is-checked': _value === label,
        'is-focus': focus
      }"></span>
      <input
        class="el-radio__original"
        :value="label"
        type="radio"
        v-model="_value"
        @focus="focus = true"
        @blur="focus = false"
        :name="name"
        :disabled="disabled">
    </span>
    <span class="el-radio__label">
      <slot></slot>
      <template v-if="!_slotContents">{{label}}</template>
    </span>
  </label>
</template>
<script>
  export default {
    name: 'ElRadio',

    props: {
      value: {
        twoWay: true
      },
      label: {
        type: [String, Number],
        required: true
      },
      disabled: Boolean,
      name: String
    },
    data() {
      return {
        focus: false
      };
    },
    watch: {
      value(value) {
        this.$emit('onchange', value);
      }
    },
    computed: {
      _value: {
        get() {
          return this.value !== undefined ? this.value : this.$parent.value;
        },
        set(newValue) {
          if (this.value !== undefined) {
            this.value = newValue;
          } else {
            this.$parent.value = newValue;
          }
        }
      }
    }
  };
</script>
