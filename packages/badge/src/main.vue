<template>
  <div class="el-badge">
    <slot></slot>
    <transition name="el-zoom-in-center">
      <sup
        v-show="!hidden && (content || isDot)"
        v-text="content"
        class="el-badge__content"
        :style="computedStyle"
        :class="[
          badgeClass,
          type ? 'el-badge__content--' + type : '',
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
    type: {
      type: String,
      validator(val) {
        return ['primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1;
      }
    },
    showZero: {
      type: Boolean,
      default: true
    },
    offset: Array,
    badgeClass: String,
    backgroundColor: String,
    badgeStyle: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    content() {
      if (this.isDot) return;

      const value = this.value;
      const max = this.max;

      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value;
      }

      return value === 0 && this.showZero ? '0' : value;
    },
    computedStyle() {
      return {
        'background-color': this.backgroundColor,
        'margin-right': this.offset ? -this.offset[0] + 'px' : 0,
        'margin-top': this.offset ? this.offset[1] + 'px' : 0,
        ...this.badgeStyle
      };
    }
  }
};
</script>
