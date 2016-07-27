<template>
  <span
    class="el-tag"
    :class="[type ? 'el-tag--' + type : '', {'is-hit': hit}]"
    :transition="closeTransition ? '' : 'md-fade-center'">
    <slot></slot>
    <i
      class="el-tag__close el-icon-close"
      v-if="closable"
      @click="handleClose"></i>
  </span>
</template>
<script>
  export default {
    name: 'ElTag',
    props: {
      text: String,
      closable: Boolean,
      type: String,
      hit: Boolean,
      closeTransition: Boolean
    },
    methods: {
      handleClose(event) {
        this.$emit('close', event);
      }
    }
  };
</script>
