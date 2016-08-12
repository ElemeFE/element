<template>
  <div class="el-breadcrumb">
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
      }
    }
  };
</script>
