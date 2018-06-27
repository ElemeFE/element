<template>
  <ul class="el-timeline"
    :class="{
      'is-reverse': reverse,
      'is-pending': pending
    }">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: 'ElTimeline',

    props: {
      pending: {
        type: Boolean,
        default: false
      },

      reverse: {
        type: Boolean,
        default: true
      }
    },

    provide() {
      return {
        timeline: this
      };
    },

    watch: {
      reverse: {
        handler(newVal) {
          const slots = [];
          const items = this.$slots.default;
          for (let i = 0; i < items.length; i++) {
            slots.splice(newVal ? slots.length : 0, 0, items[i]);
          }
          this.$slots.default = slots;
        },
        immediate: true
      }
    }
  };
</script>
