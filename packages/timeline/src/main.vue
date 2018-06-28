<template>
  <ul class="el-timeline"
    :class="{
      'is-reverse': reverse
    }">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: 'ElTimeline',

    props: {
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
