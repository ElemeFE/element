<template>
  <fieldset :disabled="disabled" :class="[
      'el-input-ip',
      'el-input__inner',
      {
        'is-disabled': disabled,
        'focus-within': focused
      }
    ]" @focusin="focused = true" @focusout="focused = false">
    <template v-for="(value, $index) in iSubValue">
      <input type="text"
             :key="$index"
             :data-length="value.length"
             class="el-input-ip__ip"
             maxlength="3"
             placeholder="___"
             v-model="iSubValue[$index]"
             @input="handleInput($index, $event)"
             @keypress="handleKeyPress" /><!--
   --><span v-if="$index < iSubValue.length - 1" :key="$index" @click="focusNext($event.target)">.</span><!--
 --></template>
  </fieldset>
</template>
<script>
export default {
  name: 'ElInputIp',

  componentName: 'ElInputIp',

  data() {
    return {
      iSubValue: this.value.split('.'),
      focused: false
    };
  },

  props: {
    value: {
      type: String,
      default: '...'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autoMoveFocus: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    handleInput(idx, evt) {
      const el = evt.target;

      this.$emit('input', this.currentValue);
      this.$emit('change', this.currentValue);
      el.dataset.length = el.value.length;
    },

    handleKeyPress(evt) {
      const el = evt.target;
      if (!/\d/.test(evt.key)) {
        evt.preventDefault();
        return;
      }
      const currentText = `${el.value.slice(0, el.selectionStart)}${evt.key}${el.value.slice(el.selectionEnd)}`;
      if (currentText === '0') {
        this.focusNext(el.nextElementSibling);
      } else if (currentText.startsWith('0')) {
        evt.preventDefault();
        return;
      }

      const currentValue = +currentText;
      if (currentValue > 255) {
        evt.preventDefault();
        return;
      }

      setTimeout(() => {
        if (el.selectionStart === 3 || (el.selectionStart === 2 && currentValue > 25)) {
          this.focusNext(el.nextElementSibling);
        }
      });
    },

    focusNext(el) {
      if (!this.autoMoveFocus) return;

      el = el && el.nextElementSibling;
      if (el) {
        el.focus();
        el.selectionStart = el.selectionEnd = 0;
      }
    }
  },

  computed: {
    currentValue() {
      return this.iSubValue.join('.');
    }
  },

  watch: {
    value(val) {
      if (val !== this.currentValue) {
        this.iSubValue = val.split('.');
      }
    }
  }
};
</script>
