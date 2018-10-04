<template>
  <div :class="['el-drawer', {
    'el-drawer__left': align === 'left',
    'el-drawer__right': align === 'right'
  }]" tabindex="1" v-on:focus="focus" v-on:blur="focus">componente novo</div>
</template>

<script>
export default {
  props: {
    align: {
      type: [String],
      default: 'left'
    }
  },
  created() { },
  methods: {
    focus() {
      this.$el.classList.toggle('el-drawer--active');
    },
    toggle() {
      this.$el.focus();
    }
  }
};
</script>