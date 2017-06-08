<template>
  <span class="el-breadcrumb__item">
    <span class="el-breadcrumb__item__inner" ref="link"><slot></slot></span>
    <span class="el-breadcrumb__separator">{{separator}}</span>
  </span>
</template>
<script>
  import { addClass } from 'element-ui/src/utils/dom';
  export default {
    name: 'ElBreadcrumbItem',
    props: {
      to: {},
      replace: Boolean
    },
    data() {
      return {
        separator: ''
      };
    },
    mounted() {
      this.separator = this.$parent.separator;
      if (this.to) {
        const link = this.$refs.link;
        link.addEventListener('click', _ => {
          const to = this.to;
          if (this.$router) {
            this.replace ? this.$router.replace(to)
                         : this.$router.push(to);
          } else {
            console.warn('Vue-Router Not Found');
          }
        });
      } else {
        addClass(this.$refs.link, 'el-breadcrumb__item__nolink');
      }
    }
  };
</script>
