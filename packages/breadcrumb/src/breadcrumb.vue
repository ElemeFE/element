<template>
  <div class="el-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ElBreadcrumb',

    props: {
      separator: {
        type: String,
        default: '/'
      },
      separatorClass: {
        type: String,
        default: ''
      }
    },
    mounted() {
      const items = this.$el.querySelectorAll('.el-breadcrumb__item');
      items[items.length - 1].setAttribute('aria-current', 'page');
    }
  };
</script>
