<template>
  <div
    class="el-switch"
    :class="{ 'is-disabled': disabled, 'is-checked': checked }"
    role="switch"
    :aria-checked="checked"
    :aria-disabled="disabled"
    @click="switchValue"
  >
    <input
      class="el-switch__input"
      type="checkbox"
      @change="handleChange"
      ref="input"
      :name="name"
      :true-value="onValue"
      :false-value="offValue"
      :disabled="disabled"
      @keydown.enter="switchValue"
    >
    <span
      :class="['el-switch__label', 'el-switch__label--left', !checked ? 'is-active' : '']"
      v-if="offIconClass || offText">
      <i :class="[offIconClass]" v-if="offIconClass"></i>
      <span v-if="!offIconClass && offText" :aria-hidden="checked">{{ offText }}</span>
    </span>
    <span class="el-switch__core" ref="core" :style="{ 'width': coreWidth + 'px' }">
      <span class="el-switch__button" :style="{ transform }"></span>
    </span>
    <span
      :class="['el-switch__label', 'el-switch__label--right', checked ? 'is-active' : '']"
      v-if="onIconClass || onText">
      <i :class="[onIconClass]" v-if="onIconClass"></i>
      <span v-if="!onIconClass && onText" :aria-hidden="!checked">{{ onText }}</span>
    </span>
  </div>
</template>
<script>
  import Focus from 'element-ui/src/mixins/focus';

  export default {
    name: 'ElSwitch',
    mixins: [Focus('input')],
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
      onText: String,
      offText: String,
      onColor: {
        type: String,
        default: ''
      },
      offColor: {
        type: String,
        default: ''
      },
      onValue: {
        type: [Boolean, String, Number],
        default: true
      },
      offValue: {
        type: [Boolean, String, Number],
        default: false
      },
      name: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        coreWidth: this.width
      };
    },
    created() {
      if (!~[this.onValue, this.offValue].indexOf(this.value)) {
        this.$emit('input', this.offValue);
      }
    },
    computed: {
      checked() {
        return this.value === this.onValue;
      },
      transform() {
        return this.checked ? `translate3d(${ this.coreWidth - 20 }px, 0, 0)` : '';
      }
    },
    watch: {
      checked() {
        this.$refs.input.checked = this.checked;
        if (this.onColor || this.offColor) {
          this.setBackgroundColor();
        }
      }
    },
    methods: {
      handleChange(event) {
        this.$emit('input', !this.checked ? this.onValue : this.offValue);
        this.$emit('change', !this.checked ? this.onValue : this.offValue);
        this.$nextTick(() => {
          // set input's checked property
          // in case parent refuses to change component's value
          this.$refs.input.checked = this.checked;
        });
      },
      setBackgroundColor() {
        let newColor = this.checked ? this.onColor : this.offColor;
        this.$refs.core.style.borderColor = newColor;
        this.$refs.core.style.backgroundColor = newColor;
      },
      switchValue() {
        this.$refs.input.click();
      }
    },
    mounted() {
      /* istanbul ignore if */
      this.coreWidth = this.width || 40;
      if (this.onColor || this.offColor) {
        this.setBackgroundColor();
      }
      this.$refs.input.checked = this.checked;
    }
  };
</script>
