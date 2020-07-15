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
        @change="handleChange"
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
  
      const ELEMENT = useELEMENT();
      const elForm = inject('elForm', '');
      const instance = getCurrentInstance();
      const elFormItem = inject('elFormItem', '');

      let _radioGroup;

      const focus = ref(false);
      const parent = useRadioGroup();

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
          }
          instance.refs.radio && (instance.refs.radio.checked = props.modelValue === props.label);
        }
      });

      const handleChange = () => {
        ctx.emit('change', model.value);
        // nextTick(() => {
        //   ctx.emit('change1', model.value);
        // });
      };

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

    // computed: {
    //   model: {
    //     get() {
    //       return this.isGroup ? this._radioGroup.value : this.value;
    //     },
    //     set(val) {
    //       if (this.isGroup) {
    //         this.dispatch('ElRadioGroup', 'input', [val]);
    //       } else {
    //         this.$emit('input', val);
    //       }
    //       this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
    //     }
    //   },
    //   _elFormItemSize() {
    //     return (this.elFormItem || {}).elFormItemSize;
    //   },
    //   radioSize() {
    //     const temRadioSize = this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    //     return this.isGroup
    //       ? this._radioGroup.radioGroupSize || temRadioSize
    //       : temRadioSize;
    //   },
    //   isDisabled() {
    //     return this.isGroup
    //       ? this._radioGroup.disabled || this.disabled || (this.elForm || {}).disabled
    //       : this.disabled || (this.elForm || {}).disabled;
    //   },
    //   tabIndex() {
    //     return (this.isDisabled || (this.isGroup && this.model !== this.label)) ? -1 : 0;
    //   }
    // },

    // methods: {
    //   handleChange() {
    //     this.$nextTick(() => {
    //       this.$emit('change', this.model);
    //       this.isGroup && this.dispatch('ElRadioGroup', 'handleChange', this.model);
    //     });
    //   }
    // }
  };
</script>
