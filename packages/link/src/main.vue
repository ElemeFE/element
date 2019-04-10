<template>
  <a
    :class="[
      'el-link',
      type ? `el-link--${type}` : '',
      disabled && 'is-disabled'
    ]"
    :href="href"
    :target="target"
    @click="handleClick"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false">

    <el-icon :class="icon" v-if="icon"></el-icon>

    <span v-if="$slots.default" class="el-link__inner">
      <slot></slot>
    </span>

    <template v-if="$slots.icon"><slot v-if="$slots.icon" name="icon"></slot></template>

    <!-- underline -->
    <div
      :style="{ bottom: underlineBottom + 'px' }"
      v-if="showUnderline"
      class="el-link__underline"></div>
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
    target: String,
    icon: String
  },

  data() {
    return {
      isHover: false,
      underlineBottom: -2
    };
  },

  computed: {
    showUnderline() {
      return this.isHover && this.underline && !this.disabled;
    }
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
