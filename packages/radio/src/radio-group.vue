<template>
  <component
    :is="_elTag"
    class="el-radio-group"
    role="radiogroup"
    @keydown="handleKeydown"
  >
    <slot></slot>
  </component>
</template>
<script>
  import { inject, computed, getCurrentInstance, onMounted, provide, nextTick } from 'vue';
  import { useELEMENT } from '../../../src/index';

  const keyCode = Object.freeze({
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  });

  // eslint-disable-next-line no-undef
  const RADIOGROUP = Symbol('radioGroup');

  export function useRadioGroup() {
    return inject(RADIOGROUP);
  }

  export default {
    name: 'ElRadioGroup',

    componentName: 'ElRadioGroup',

    props: {
      size: String,
      fill: String,
      modelValue: {},
      textColor: String,
      disabled: Boolean
    },

    setup(props, ctx) {
  
      const ELEMENT = useELEMENT();
      const instance = getCurrentInstance();
      const elFormItem = inject('elFormItem', '');

      const _elFormItemSize = computed(() => {
        return (elFormItem || {}).elFormItemSize;
      });
      const _elTag = computed(() => {
        return (instance.vnode.data || {}).tag || 'div';
      });
      const radioGroupSize = computed(() => {
        return props.size || _elFormItemSize || (ELEMENT || {}).size;
      });

      const modelValue = computed({
        get() {
          return props.modelValue;
        },
        set(val) {
          handleChange(val);
        }
      });

      const handleChange = val => {
        ctx.emit('update:modelValue', val);
        nextTick(() => {
          ctx.emit('change', val);
        });
      };

      provide(RADIOGROUP, {
        modelValue,
        fill: props.fill,
        emit: handleChange,
        name: 'ElRadioGroup',
        disabled: props.disabled,
        radioGroupSize: props.size,
        textColor: props.textColor
      });

      onMounted(() => {
        // 当radioGroup没有默认选项时，第一个可以选中Tab导航
        const radios = instance.vnode.el.querySelectorAll('[type=radio]');
        const firstLabel = instance.vnode.el.querySelectorAll('[role=radio]')[0];
        if (![].some.call(radios, radio => radio.checked) && firstLabel) {
          firstLabel.tabIndex = 0;
        }
      });

      return {
        _elTag,
        radioGroupSize
      };
    },

    methods: {
      handleKeydown(e) { // 左右上下按键 可以在radio组内切换不同选项
        const target = e.target;
        const className = target.nodeName === 'INPUT' ? '[type=radio]' : '[role=radio]';
        const radios = this.$el.querySelectorAll(className);
        const length = radios.length;
        const index = [].indexOf.call(radios, target);
        const roleRadios = this.$el.querySelectorAll('[role=radio]');
        switch (e.keyCode) {
          case keyCode.LEFT:
          case keyCode.UP:
            e.stopPropagation();
            e.preventDefault();
            if (index === 0) {
              roleRadios[length - 1].click();
              roleRadios[length - 1].focus();
            } else {
              roleRadios[index - 1].click();
              roleRadios[index - 1].focus();
            }
            break;
          case keyCode.RIGHT:
          case keyCode.DOWN:
            if (index === (length - 1)) {
              e.stopPropagation();
              e.preventDefault();
              roleRadios[0].click();
              roleRadios[0].focus();
            } else {
              roleRadios[index + 1].click();
              roleRadios[index + 1].focus();
            }
            break;
          default:
            break;
        }
      }
    }
    // watch: {
    //   value(value) {
    //     // TODO
    //     this.dispatch('ElFormItem', 'el.form.change', [this.value]);
    //   }
    // }
  };
</script>

