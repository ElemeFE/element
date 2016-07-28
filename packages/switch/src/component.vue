<template>
  <div class="el-switch" :class="{ 'is-disabled': disabled, 'el-switch--wide': hasText, 'el-switch--color': onColor || offColor }">
    <div class="el-switch__mask" v-show="disabled"></div>
    <input class="el-switch__input" type="checkbox" v-model="value" :name="name" :disabled="disabled" style="display: none;">
    <span class="el-switch__core" v-el:core @click="handleMiscClick" :style="{ 'width': width + 'px' }">
      <span class="el-switch__button" v-el:button></span>
    </span>
    <div
      class="el-switch__label el-switch__label--left"
      v-show="value"
      @click="handleMiscClick"
      :style="{ 'width': width + 'px' }"
      transition="label-fade">
      <i :class="[onIconClass]" v-if="onIconClass"></i>
      <span v-if="onText">{{ onText }}</span>
    </div>
    <div
      class="el-switch__label el-switch__label--right"
      v-show="!value"
      @click="handleMiscClick"
      :style="{ 'width': width + 'px' }"
      transition="label-fade">
      <i :class="[offIconClass]" v-if="offIconClass"></i>
      <span v-if="offText">{{ offText }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'el-switch',
    props: {
      value: {
        type: Boolean,
        default: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 0
      },
      onIconClass: {
        type: String,
        default: ''
      },
      offIconClass: {
        type: String,
        default: ''
      },
      onText: {
        type: String,
        default: 'ON'
      },
      offText: {
        type: String,
        default: 'OFF'
      },
      onColor: {
        type: String,
        default: ''
      },
      offColor: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      }
    },
    computed: {
      hasText() {
        return this.onText || this.offText;
      }
    },
    watch: {
      value() {
        if (this.onColor || this.offColor) {
          this.handleCoreColor();
        }
        this.handleButtonTransform();
      }
    },
    methods: {
      handleMiscClick() {
        if (!this.disabled) {
          this.value = !this.value;
        }
      },
      handleButtonTransform() {
        this.$els.button.style.transform = this.value ? `translate3d(${ this.width - 20 }px, 2px, 0)` : 'translate3d(2px, 2px, 0)';
      },
      handleCoreColor() {
        if (this.value) {
          this.$els.core.style.borderColor = this.onColor;
          this.$els.core.style.backgroundColor = this.onColor;
        } else {
          this.$els.core.style.borderColor = this.offColor;
          this.$els.core.style.backgroundColor = this.offColor;
        }
      }
    },
    ready() {
      if (this.width === 0) {
        this.width = this.hasText ? 58 : 46;
      }
      this.handleButtonTransform();
      if ((this.onColor || this.offColor) && !this.disabled) {
        this.handleCoreColor();
      }
    }
  };
</script>
