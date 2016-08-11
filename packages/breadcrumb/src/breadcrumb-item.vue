<template>
  <span class="el-breadcrumb__item">
    <span class="el-breadcrumb__item__text"><slot></slot></span><span class="el-breadcrumb__separator">{{separator}}</span>
  </span>
</template>
<script>
  export default {
    name: 'ElBreadcrumbItem',
    data() {
      return {
        separator: ''
      };
    },
    mounted() {
      this.separator = this.$parent.separator;
    }
  };
</script>
