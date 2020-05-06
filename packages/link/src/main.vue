<template>
  <a
    class="el-link"
    :class="[
      type ? `el-link--${type}` : '',
      linkDisabled && 'is-disabled',
      underline && !linkDisabled && 'is-underline',
      inheritFs && 'is-inherit-fs'
    ]"
    :href="tHref"
    v-bind="$attrs"
    @click="handleClick"
  >
    <i
      v-if="icon"
      :class="icon"
      :style="$slots.default ? { marginRight: '5px' } : null"></i>
    <slot></slot>
    <i v-if="iconRight" :class="iconRight" style="margin-left: 5px"></i>
  </a>
</template>

<script>
import { calcDisabled } from 'element-ui/src/utils/util';

export default {
  name: 'ElLink',

  inject: {
    elForm: {
      default: ''
    }
  },

  props: {
    type: {
      type: String,
      default: 'default'
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: null
    },
    href: String,
    to: [String, Object],
    icon: String,
    iconRight: String,
    inheritFs: Boolean
  },

  methods: {
    handleClick(event) {
      if (!this.linkDisabled) {
        if (this.to) {
          if (/\b_blank\b/i.test(event.currentTarget.target)) return;

          this.$router.push(this.to);
          event.preventDefault();
          return;
        }
        if (!this.href) {
          this.$emit('click', event);
        }
      }
    }
  },

  computed: {
    tHref() {
      if (this.linkDisabled) return null;
      if (this.to) {
        return this.$router.resolve(this.to).href;
      }
      return this.href;
    },
    linkDisabled() {
      return calcDisabled(this.disabled, this.elForm);
    }
  }
};
</script>
