<template>
  <a
    :class="[
      'el-link',
      type ? `el-link--${type}` : '',
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline'
    ]"
    :href="href"
    v-bind="$attrs"
    @click="handleClick"
  >

    <el-icon :class="icon" v-if="icon"></el-icon>

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
    icon: String
  },

  methods: {
    handleClick(event) {
      if (!this.disabled) {
        if (!this.href) {
          this.$emit('click', event);
        }
      }
    }
  }
};
</script>
