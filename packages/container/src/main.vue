<template>
  <section class="el-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>

<script>
  import { computed } from 'vue';

  export default {
    name: 'ElContainer',

    componentName: 'ElContainer',

    props: {
      direction: String
    },

    setup(props, ctx) {
      const slots = ctx.slots.default();
      const isVertical = computed(() => {
        if (props.direction === 'vertical') {
          return true;
        } else if (props.direction === 'horizontal') {
          return false;
        }
        return slots.length > 0
          ? slots.some(vnode => {
            const name = vnode.type && vnode.type.name;
            return name === 'ElHeader' || name === 'ElFooter';
          })
          : false;
      });

      return { isVertical };
    }
  };
</script>
