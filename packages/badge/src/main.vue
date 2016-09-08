<template>
  <div class="el-badge">
    <slot></slot>
    <sup
      v-text="content"
      class="el-badge__content"
      :class="{ 'is-fixed': $slots.default, 'is-dot': isDot }">
    </sup>
  </div>
</template>

<script>
export default {
  name: 'el-badge',

  props: {
    value: {},
    max: Number,
    isDot: Boolean
  },

  computed: {
    content() {
      if (this.isDot) return;

      const value = this.value;
      const max = this.max;

      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value;
      }

      return value;
    }
  }
};
</script>
