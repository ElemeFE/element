<template>
  <label
    class="el-radio-button"
    :class="[
      size ? 'el-radio-button--' + size : '',
      { 'is-active': value === label },
      { 'is-disabled': isDisabled },
      { 'is-focus': focus }
    ]"
    role="radio"
    :aria-checked="value === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="value = isDisabled ? value : label"
  >
    <input
      class="el-radio-button__orig-radio"
      :value="label"
      type="radio"
      v-model="value"
      :name="name"
      @change.stop="handleChange"
      :disabled="isDisabled"
      tabindex="-1"
      @focus="focus = true"
      @blur="focus = false"
    >
    <span
      class="el-radio-button__inner"
      :style="value === label ? activeStyle : null"
      @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
  import { useELEMENT } from '../../../src';
  import { useRadioGroup } from './radio-group.vue';
  import { ref, computed, nextTick } from 'vue';
  import { useElForm } from '../../form/src/form.vue';
  import { useElFormItem } from '../../form/src/form-item.vue';

  export default {
    name: 'ElRadioButton',

    props: {
      label: {},
      disabled: Boolean,
      name: String
    },

    setup(props, ctx) {
      const ELEMENT = useELEMENT();
      const elForm = useElForm();
      const elFormItem = useElFormItem();
      const _radioGroup = useRadioGroup();

      const focus = ref(false);

      const isGroup = computed(() => {
        if (_radioGroup && _radioGroup.name === 'ElRadioGroup') {
          return true;
        }
        return false;
      });
      const _elFormItemSize = computed(() => {
        return (elFormItem || {}).elFormItemSize;
      });
      const size = computed(() => {
        return _radioGroup.radioGroupSize || _elFormItemSize || (ELEMENT || {}).size;
      });
      const isDisabled = computed(() => {
        return props.disabled || _radioGroup.disabled || (elForm || {}).disabled;
      });
      const tabIndex = computed(() => {
        return (isDisabled.value || (_radioGroup && modelValue.value !== props.label)) ? -1 : 0;
      });
      const modelValue = computed({
        get() {
          return _radioGroup.modelValue.value;
        },
        set(value) {
          _radioGroup.emit(value);
        }
      });
      const activeStyle = computed(() => {
        return {
          backgroundColor: _radioGroup.fill || '',
          borderColor: _radioGroup.fill || '',
          boxShadow: _radioGroup.fill ? `-1px 0 0 0 ${_radioGroup.fill}` : '',
          color: _radioGroup.textColor || ''
        };
      });

      const handleChange = () => {
        nextTick(() => {
          ctx.emit('change', modelValue.value);
          // TODO
          // this.isGroup && this.dispatch('ElRadioGroup', 'handleChange', this.model);
        });
      };

      return {
        size,
        focus,
        isGroup,
        tabIndex,
        isDisabled,
        activeStyle,
        handleChange,
        value: modelValue
      };
    }
  };
</script>
