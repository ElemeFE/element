<template>
<div class="el-switch" :class="{ 'is-disabled': switchDisabled, 'is-checked': checked }" role="switch" :aria-checked="checked" :aria-disabled="switchDisabled" @click.prevent="switchValue">
  <input class="el-switch__input" type="checkbox" @change="handleChange" ref="input" :id="id" :name="name" :true-value="activeValue" :false-value="inactiveValue" :disabled="switchDisabled" @keydown.enter="switchValue">
  <span :class="['el-switch__label', 'el-switch__label--left', !checked ? 'is-active' : '']" v-if="inactiveIconClass || inactiveText">
    <i :class="[inactiveIconClass]" v-if="inactiveIconClass"></i>
    <span v-if="!inactiveIconClass && inactiveText" :aria-hidden="checked">{{ inactiveText }}</span>
  </span>
  <span class="el-switch__core" ref="core" :style="{ 'width': coreWidth + 'px' }">
  </span>
  <span :class="['el-switch__label', 'el-switch__label--right', checked ? 'is-active' : '']" v-if="activeIconClass || activeText">
    <i :class="[activeIconClass]" v-if="activeIconClass"></i>
    <span v-if="!activeIconClass && activeText" :aria-hidden="!checked">{{ activeText }}</span>
  </span>
</div>
</template>

<script>
import {
  ref,
  onMounted,
  computed,
  getCurrentInstance,
  nextTick,
  watch,
  inject
} from 'vue';
import mitt from '../../../src/mixins/emitter';
export default {
  name: 'ElSwitch',
  componentName: 'ElSwitch',
  props: {
    modelValue: {
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
  setup(props, ctx) {
    let coreWidth;
    const elForm = inject('elForm', '');
    const instance = getCurrentInstance();
    if (!~[props.activeValue, props.inactiveValue].indexOf(props.modelValue)) {
      ctx.emit('input', props.inactiveValue);
    };
    const handleChange = () => {
      const val = checked.value ? props.inactiveValue : props.activeValue;
      ctx.emit('update:modelValue', val);
      ctx.emit('input', val);
      ctx.emit('change', val);
      nextTick(()=> {
        instance.refs.input.checked = checked.value;
      });
    };
    const checked = computed(() => {
      return props.modelValue === props.activeValue;
    });
    const switchDisabled = computed(() => {
      return props.disabled || (elForm || {}).disabled;
    });
    const switchValue = () => {
      !switchDisabled.value && handleChange();
    };
    onMounted(() => {
      coreWidth = ref(props.width || 40);
      if (props.activeColor || props.inactiveColor) {
        setBackgroundColor();
      }
    });
    watch(checked, () => {
      instance.refs.input.checked = checked;
      if (props.activeColor || props.inactiveColor) {
        setBackgroundColor();
      }
      if (props.validateEvent) {
        mitt.emit('el.form.change', props.modelValue);
      }
    });
    const setBackgroundColor = () => {
      let newColor = checked.value ? props.activeColor : props.inactiveColor;
      instance.refs.core.style.borderColor = newColor;
      instance.refs.core.style.backgroundColor = newColor;
    };
    return {
      checked,
      coreWidth,
      handleChange,
      switchValue,
      setBackgroundColor,
      switchDisabled
    };
  }
};
</script>
