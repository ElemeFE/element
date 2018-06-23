<template>
  <i :class="iconClass"></i>
</template>

<script>
  import { getIconClass } from 'element-ui/src/utils/icon';

  export default {
    name: 'ElIcon',

    props: {
      name: String
    },

    computed: {
      iconClass() {
        return getIconClass(this.name);
      }
    }
  };
</script>
