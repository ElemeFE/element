import {
  bind as foucsBind,
  unbind as focusUnbind
} from 'focus-outside';

/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */
export default {
  bind(el, binding) {
    foucsBind(el, binding.value);
  },

  unbind(el, binding) {
    focusUnbind(el, binding.value);
  },

  update(el, { value, oldValue }) {
    if (value === oldValue) return;
    focusUnbind(el, oldValue);
    foucsBind(el, value);
  }
};
