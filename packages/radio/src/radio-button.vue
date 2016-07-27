<script>
  export default {
    name: 'ElRadioButton',

    props: {
      label: {
        type: [String, Number],
        required: true
      },
      disabled: Boolean,
      name: String,
      size: String
    },
    computed: {
      value: {
        get() {
          return this.$parent.value;
        },
        set(newValue) {
          this.$parent.value = newValue;
        }
      }
    },
    ready() {
      this.size = this.$parent.size;
    }
  };
</script>

<template>
  <label
    class="el-radio-button"
    :class="[
      size ? 'el-radio-button-' + size : '',
      { 'is-active': value === label }
    ]"
  >
    <input
      class="el-radio-button__orig-radio"
      :value="label"
      type="radio"
      v-model="value"
      :name="name"
      :disabled="disabled">
    <span class="el-radio-button__inner">
      <slot></slot>
      <template v-if="!_slotContents">{{label}}</template>
    </span>
  </label>
</template>
