<template>
  <a
    :class="[
      'el-link',
      type ? `el-link--${type}` : '',
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline'
    ]"
    :href="tHref"
    v-bind="$attrs"
    @click="handleClick"
  >

    <i :class="icon" v-if="icon"></i>

    <span v-if="$slots.default" class="el-link--inner">
      <slot></slot>
    </span>

    <template v-if="$slots.icon"><slot v-if="$slots.icon" name="icon"></slot></template>
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
    icon: String
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
