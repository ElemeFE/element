<template>
  <label
    class="el-radio"
    :class="[
      border && radioSize ? 'el-radio--' + radioSize : '',
      { 'is-disabled': isDisabled },
      { 'is-focus': focus },
      { 'is-bordered': border },
      { 'is-checked': model === label }
    ]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model : label"
  >
    <span class="el-radio__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
    >
      <span class="el-radio__inner"></span>
      <input
        ref="radio"
        class="el-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        @change.stop="handleChange"
        :name="name"
        :disabled="isDisabled"
        tabindex="-1"
      >
    </span>
    <span class="el-radio__label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
  import { ref, getCurrentInstance, inject, computed } from 'vue';
  import { useRadioGroup } from './radio-group';
  import { useELEMENT } from '../../../src/index';
  
  export default {
    name: 'ElRadio',

    componentName: 'ElRadio',

    props: {
      label: {},
      size: String,
      name: String,
      modelValue: {},
      border: Boolean,
      disabled: Boolean
    },

    setup(props, ctx) {
  
      const instance = getCurrentInstance();
      const ELEMENT = useELEMENT();
      const elForm = inject('elForm', '');
      const elFormItem = inject('elFormItem', '');

      const parent = useRadioGroup();

      let _radioGroup;
  
      const focus = ref(false);
  
      const isGroup = computed(() => {
        if (parent && parent.name === 'ElRadioGroup') {
          _radioGroup = parent;
          return true;
        }
        return false;
      });
      const _elFormItemSize = computed(() => {
        return (elFormItem || {}).elFormItemSize;
      });
      const radioSize = computed(() => {
        const temRadioSize = props.size || _elFormItemSize || (ELEMENT || {}).size;
        return isGroup.value
          ? _radioGroup.radioGroupSize || temRadioSize
          : temRadioSize;
      });
      const isDisabled = computed(() => {
        return isGroup.value
          ? _radioGroup.disabled || props.disabled || (elForm || {}).disabled
          : props.disabled || (elForm || {}).disabled;
      });
      const tabIndex = computed(() => {
        return (isDisabled.value || (isGroup.value && model.value !== props.label)) ? -1 : 0;
      });
      const model = computed({
        get() {
          return isGroup.value ? _radioGroup.modelValue.value : props.modelValue;
        },
        set(val) {
          if (isGroup.value) {
            _radioGroup.emit(val);
          } else {
            ctx.emit('update:modelValue', val);
            ctx.emit('change', val);
          }
          instance.refs.radio && (instance.refs.radio.checked = props.modelValue === props.label);
        }
      });

      const handleChange = () => {};

      return {
        model,
        focus,
        isGroup,
        tabIndex,
        radioSize,
        isDisabled,
        handleChange
      };
    }
  };
</script>
