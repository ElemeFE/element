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
      :true-value="trueValue"
      :false-value="falseValue"
      :disabled="disabled"
      @keydown.enter="switchValue"
    >
    <span
      :class="['el-switch__label', 'el-switch__label--left', !checked ? 'is-active' : '']"
      v-if="falseIconClass || falseText">
      <i :class="[falseIconClass]" v-if="falseIconClass"></i>
      <span v-if="!falseIconClass && falseText" :aria-hidden="checked">{{ falseText }}</span>
    </span>
    <span class="el-switch__core" ref="core" :style="{ 'width': coreWidth + 'px' }">
      <span class="el-switch__button" :style="{ transform }"></span>
    </span>
    <span
      :class="['el-switch__label', 'el-switch__label--right', checked ? 'is-active' : '']"
      v-if="trueIconClass || trueText">
      <i :class="[trueIconClass]" v-if="trueIconClass"></i>
      <span v-if="!trueIconClass && trueText" :aria-hidden="!checked">{{ trueText }}</span>
    </span>
  </div>
</template>
<script>
  import Focus from 'element-ui/src/mixins/focus';
  import Migrating from 'element-ui/src/mixins/migrating';

  export default {
    name: 'ElSwitch',
    mixins: [Focus('input'), Migrating],
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
      trueIconClass: {
        type: String,
        default: ''
      },
      falseIconClass: {
        type: String,
        default: ''
      },
      trueText: String,
      falseText: String,
      trueColor: {
        type: String,
        default: ''
      },
      falseColor: {
        type: String,
        default: ''
      },
      trueValue: {
        type: [Boolean, String, Number],
        default: true
      },
      falseValue: {
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
      if (!~[this.trueValue, this.falseValue].indexOf(this.value)) {
        this.$emit('input', this.falseValue);
      }
    },
    computed: {
      checked() {
        return this.value === this.trueValue;
      },
      transform() {
        return this.checked ? `translate3d(${ this.coreWidth - 20 }px, 0, 0)` : '';
      }
    },
    watch: {
      checked() {
        this.$refs.input.checked = this.checked;
        if (this.trueColor || this.falseColor) {
          this.setBackgroundColor();
        }
      }
    },
    methods: {
      handleChange(event) {
        this.$emit('input', !this.checked ? this.trueValue : this.falseValue);
        this.$emit('change', !this.checked ? this.trueValue : this.falseValue);
        this.$nextTick(() => {
          // set input's checked property
          // in case parent refuses to change component's value
          this.$refs.input.checked = this.checked;
        });
      },
      setBackgroundColor() {
        let newColor = this.checked ? this.trueColor : this.falseColor;
        this.$refs.core.style.borderColor = newColor;
        this.$refs.core.style.backgroundColor = newColor;
      },
      switchValue() {
        this.$refs.input.click();
      },
      getMigratingConfig() {
        return {
          props: {
            'on-color': 'on-color is renamed to true-color.',
            'off-color': 'off-color is renamed to false-color.',
            'on-text': 'on-text is renamed to true-text.',
            'off-text': 'off-text is renamed to false-text.',
            'on-value': 'on-value is renamed to true-value.',
            'off-value': 'off-value is renamed to false-value.',
            'on-icon-class': 'on-icon-class is renamed to true-icon-class.',
            'off-icon-class': 'off-icon-class is renamed to false-icon-class.'
          }
        };
      }
    },
    mounted() {
      /* istanbul ignore if */
      this.coreWidth = this.width || 40;
      if (this.trueColor || this.falseColor) {
        this.setBackgroundColor();
      }
      this.$refs.input.checked = this.checked;
    }
  };
</script>
