<template>
    <div class="tm-switch"
         :class="{ 'is-disabled': switchDisabled, 'is-checked': checked }"
         role="switch"
         :aria-checked="checked"
         :aria-disabled="switchDisabled"
         @click="switchValue">
        <input class="tm-switch__input"
               type="checkbox"
               @change="handleChange"
               ref="input"
               :id="id"
               :name="name"
               :true-value="activeValue"
               :false-value="inactiveValue"
               :disabled="switchDisabled"
               @keydown.enter="switchValue">
        <span :class="['tm-switch__label', 'tm-switch__label--left', !checked ? 'is-active' : '']"
              v-if="inactiveIconClass || inactiveText">
      <i :class="[inactiveIconClass]"
         v-if="inactiveIconClass"></i>
      <span v-if="!inactiveIconClass && inactiveText"
            :aria-hidden="checked">{{ inactiveText }}</span>
    </span>
        <span class="tm-switch__core"
              ref="core"
              :style="{ 'width': coreWidth + 'px' }">
            <tm-icon class="tm-switch__core--icon-left"
                     v-if="innerLeftIconName"
                     :name="innerLeftIconName"
                     :style="{ fill: innerLeftIconColor }"></tm-icon>
            <tm-icon class="tm-switch__core--icon-right"
                     v-if="innerRightIconName"
                     :name="innerRightIconName"
                     :style="{ fill: innerRightIconColor }"></tm-icon>
    </span>
        <span :class="['tm-switch__label', 'tm-switch__label--right', checked ? 'is-active' : '']"
              v-if="activeIconClass || activeText">
      <i :class="[activeIconClass]"
         v-if="activeIconClass"></i>
      <span v-if="!activeIconClass && activeText"
            :aria-hidden="!checked">{{ activeText }}</span>
    </span>
    </div>
</template>
<script>
  import Focus from 'tmconsulting-ui/src/mixins/focus';
  import Migrating from 'tmconsulting-ui/src/mixins/migrating';

  export default {
    name: 'TmSwitch',
    mixins: [ Focus('input'), Migrating ],
    inject: {
      elForm: {
        default: ''
      }
    },
    props: {
      value: {
        type: [ Boolean, String, Number ],
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
      innerRightIconName: {
        type: String,
        default: ''
      },
      innerLeftIconName: {
        type: String,
        default: ''
      },
      innerRightIconColor: {
        type: String,
        default: ''
      },
      innerLeftIconColor: {
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
        type: [ Boolean, String, Number ],
        default: true
      },
      inactiveValue: {
        type: [ Boolean, String, Number ],
        default: false
      },
      name: {
        type: String,
        default: ''
      },
      id: String
    },
    data() {
      return {
        coreWidth: this.width
      };
    },
    created() {
      if ([ this.activeValue, this.inactiveValue ].indexOf(this.value) === -1) {
        this.$emit('input', this.inactiveValue);
      }
    },
    computed: {
      checked() {
        return this.value === this.activeValue;
      },
      switchDisabled() {
        return this.disabled || (this.elForm || {}).disabled;
      }
    },
    watch: {
      checked() {
        this.$refs.input.checked = this.checked;
        if (this.activeColor || this.inactiveColor) {
          this.setBackgroundColor();
        }
      }
    },
    methods: {
      handleChange() {
        const value = !this.checked ? this.activeValue : this.inactiveValue;
        this.$emit('input', value);
        this.$emit('change', value);
        this.$nextTick(() => {
          this.$refs.input.checked = this.checked;
        });
      },
      setBackgroundColor() {
        let newColor = this.checked ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = newColor;
        this.$refs.core.style.backgroundColor = newColor;
      },
      switchValue() {
        if (!this.switchDisabled) {
          this.handleChange();
        }
      }
    },
    mounted() {
      this.coreWidth = this.width || 40;
      if (this.activeColor || this.inactiveColor) {
        this.setBackgroundColor();
      }
      this.$refs.input.checked = this.checked;
    }
  };
</script>