<template>
  <div :class="[
    'el-divider',
    'el-divider--' + type,
    hasSlot ? 'el-divider__text-' + orientation : '',
    dashed ? 'is-dashed' : ''
  ]">
    <span v-if="hasSlot" class='el-divider__inner'>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ElDivider',
  props: {
    type: {
      type: String,
      default: 'horizontal',
      validator: value => ['horizontal', 'vertical'].indexOf(value) > -1
    },
    orientation: {
      type: String,
      default: 'center',
      validator: value => ['left', 'right', 'center'].indexOf(value) > -1
    },
    dashed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasSlot() {
      return !!this.$slots.default;
    }
  }
};
</script>
