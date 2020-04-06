<template>
  <div class="el-badge">
    <slot></slot>
    <transition name="el-zoom-in-center">
      <sup
        v-show="!hidden && (content || content === 0 || isDot)"
        v-text="content"
        class="el-badge__content"
        :class="[
          'el-badge__content--' + type,
          {
            'is-fixed': $slots.default,
            'is-dot': isDot
          }
        ]">
      </sup>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ElBadge',

  props: {
    value: [String, Number],
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
    useKw: Boolean,
    type: {
      type: String,
      default: 'default',
      validator(val) {
        return ['default', 'primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1;
      }
    }
  },

  computed: {
    content() {
      if (this.isDot) return;

      const value = this.value;
      if (typeof value === 'number') {
        if (this.useKw) {
          if (value >= 1e4) {
            return ~~(value / 1e4) + 'W+';
          } else if (value >= 1e3) {
            return ~~(value / 1e3) + 'K+';
          }
        } else {
          const max = this.max;

          if (typeof max === 'number') {
            return max < value ? `${max}+` : value;
          }
        }
      }

      return value;
    }
  }
};
</script>
