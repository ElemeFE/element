<template>
  <label class="el-radio">
    <span class="el-radio__input">
      <span class="el-radio__inner"
        :class="{
        'is-disabled': disabled,
        'is-checked': store === label,
        'is-focus': focus
      }"></span>
      <input
        class="el-radio__original"
        :value="label"
        type="radio"
        v-model="store"
        @focus="focus = true"
        @blur="focus = false"
        :name="name"
        :disabled="disabled">
    </span>
    <span class="el-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElRadio',

    mixins: [Emitter],

    componentName: 'ElRadio',

    props: {
      value: [String, Number],
      label: {
        type: [String, Number],
        required: true
      },
      disabled: Boolean,
      name: String
    },

    data() {
      return {
        focus: false,
        isGroup: false,
        store: this.value
      };
    },

    watch: {
      store(store) {
        if (this.isGroup) {
          this.dispatch('ElRadioGroup', 'input', store);
        } else {
          this.$emit('input', store);
        }
      },

      value(val) {
        this.store = val;
      }
    },

    created() {
      this.$on('initData', data => {
        this.store = data;
        this.isGroup = true;
      });
    }
  };
</script>
