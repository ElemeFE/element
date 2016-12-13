<template>
  <transition :name="closeTransition ? '' : 'el-zoom-in-center'">
    <span
      class="el-tag"
      :class="[type ? 'el-tag--' + type : '', {'is-hit': hit}]"
      :style="{backgroundColor: color}">
      <slot></slot>
      <i class="el-tag__close el-icon-close"
        v-if="closable"
        @click="handleClose"></i>
    </span>
  </transition>
</template>
<script>
  export default {
    name: 'ElTag',
    props: {
      text: String,
      closable: Boolean,
      type: String,
      hit: Boolean,
      closeTransition: Boolean,
      color: String
    },
    methods: {
      handleClose(event) {
        this.$emit('close', event);
      }
    }
  };
</script>
