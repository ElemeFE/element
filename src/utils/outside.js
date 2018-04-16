import {
  bind as focusBind,
  unbind as focusUnbind
} from 'focus-outside';

export default {
  bind(el, binding) {
    focusBind(el, binding.value);
  },

  unbind(el, binding) {
    focusUnbind(el, binding.value);
  },

  update(el, { value, oldValue }) {
    if (value === oldValue) return;
    focusUnbind(el, oldValue);
    focusBind(el, value);
  }
};
