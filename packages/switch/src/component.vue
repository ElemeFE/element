<template>
  <div
    class="el-switch"
    :class="{ 'is-disabled': switchDisabled, 'is-checked': checked }"
    role="switch"
    :aria-checked="checked"
    :aria-disabled="switchDisabled"
    @click.prevent="switchValue"
  >
    <input
      class="el-switch__input"
      type="checkbox"
      @change="handleChange"
      @click.prevent
      ref="input"
      :id="id"
      :name="name"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :disabled="switchDisabled"
      @keydown.enter="switchValue"
      :checked="this.checked"
    >
    <span
      class="el-switch__label el-switch__label--left"
      :class="checked || 'is-active'"
      v-if="inactiveIconClass || inactiveText">
      <i :class="inactiveIconClass" v-if="inactiveIconClass"></i>
      <span v-if="!inactiveIconClass && inactiveText" :aria-hidden="checked">{{ inactiveText }}</span>
    </span>
    <span
      class="el-switch__core" ref="core"
      :style="coreStyle"></span>
    <span
      class="el-switch__label el-switch__label--right"
      :class="checked && 'is-active'"
      v-if="activeIconClass || activeText">
      <i :class="activeIconClass" v-if="activeIconClass"></i>
      <span v-if="!activeIconClass && activeText" :aria-hidden="!checked">{{ activeText }}</span>
    </span>
  </div>
</template>
<script>
  import emitter from 'element-ui/src/mixins/emitter';
  import Focus from 'element-ui/src/mixins/focus';
  import Migrating from 'element-ui/src/mixins/migrating';
  import { calcDisabled } from 'element-ui/src/utils/util';

  export default {
    name: 'ElSwitch',
    mixins: [Focus('input'), Migrating, emitter],
    inject: {
      elForm: {
        default: ''
      }
    },
    props: {
      value: {
        type: [Boolean, String, Number],
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 40
      },
      activeIconClass: {
        type: String,
        default: ''
      },
      inactiveIconClass: {
        type: String,
        default: ''
      },
      activeText: String,
      inactiveText: String,
      activeColor: {
        type: String,
        default: ''
      },
      inactiveColor: {
        type: String,
        default: ''
      },
      activeValue: {
        type: [Boolean, String, Number],
        default: true
      },
      inactiveValue: {
        type: [Boolean, String, Number],
        default: false
      },
      name: {
        type: String,
        default: ''
      },
      validateEvent: {
        type: Boolean,
        default: true
      },
      id: String
    },
    created() {
      if (!~[this.activeValue, this.inactiveValue].indexOf(this.value)) {
        this.$emit('input', this.inactiveValue);
      }
    },
    computed: {
      checked() {
        return this.value === this.activeValue;
      },
      switchDisabled() {
        return calcDisabled(this.disabled, this.elForm);
      },
      coreStyle() {
        const color = this.checked ? this.activeColor : this.inactiveColor;
        return {
          width: this.width + 'px',
          borderColor: color,
          backgroundColor: color
        };
      }
    },
    watch: {
      checked() {
        if (this.validateEvent) {
          this.dispatch('ElFormItem', 'el.form.change', [this.value]);
        }
      }
    },
    methods: {
      handleChange(event) {
        const val = this.checked ? this.inactiveValue : this.activeValue;
        this.$emit('input', val);
        this.$emit('change', val);
      },
      switchValue() {
        !this.switchDisabled && this.handleChange();
      },
      getMigratingConfig() {
        return {
          props: {
            'on-color': 'on-color is renamed to active-color.',
            'off-color': 'off-color is renamed to inactive-color.',
            'on-text': 'on-text is renamed to active-text.',
            'off-text': 'off-text is renamed to inactive-text.',
            'on-value': 'on-value is renamed to active-value.',
            'off-value': 'off-value is renamed to inactive-value.',
            'on-icon-class': 'on-icon-class is renamed to active-icon-class.',
            'off-icon-class': 'off-icon-class is renamed to inactive-icon-class.'
          }
        };
      }
    }
  };
</script>
