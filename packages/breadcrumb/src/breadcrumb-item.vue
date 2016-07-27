<template>
  <span class="el-breadcrumb__item">
    <span class="el-breadcrumb__item__text"><slot></slot></span><span class="el-breadcrumb__separator">{{separator}}</span>
  </span>
</template>
<script>
  export default {
    name: 'ElBreadcrumbItem',

    props: {
    },
    data() {
      return {
        separator: ''
      };
    },
    methods: {

    },
    ready() {
      this.separator = this.$parent.separator;
    }
  };
</script>
