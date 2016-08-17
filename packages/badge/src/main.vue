<template>
  <div class="el-badge">
    <slot></slot>
    <sup
      v-text="content"
      class="el-badge__content"
      :class="{ 'is-fixed': $slots.default, 'is-dot': dot }" />
  </div>
</template>

<script>
export default {
  name: 'el-badge',

  props: {
    value: {},
    max: Number,
    dot: Boolean
  },

  computed: {
    content() {
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
