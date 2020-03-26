<template>
  <a
    :class="[
      'el-link',
      type ? `el-link--${type}` : '',
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline',
      inheritFs && 'is-inherit-fs'
    ]"
    :href="tHref"
    v-bind="$attrs"
    @click="handleClick"
  >
    <i :class="[icon, $slots.default ? 'el-icon--left' : null]" v-if="icon"></i>

    <slot></slot>

    <i :class="[iconRight, $slots.default ? 'el-icon--right' : null]" v-if="iconRight"></i>
  </a>
</template>

<script>

export default {
  name: 'ElLink',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    href: String,
    to: [String, Object],
    icon: String,
    iconRight: String,
    inheritFs: Boolean
  },

  methods: {
    handleClick(event) {
      if (!this.disabled) {
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
      if (this.disabled) return null;
      if (this.to) {
        return this.$router.resolve(this.to).href;
      }
      return this.href;
    }
  }
};
</script>
