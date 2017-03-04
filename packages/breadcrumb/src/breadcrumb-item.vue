<template>
  <span class="el-breadcrumb__item">
    <span class="el-breadcrumb__item__inner" ref="link"><slot></slot></span>
    <span class="el-breadcrumb__separator">{{separator}}</span>
  </span>
</template>
<script>
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
        if (this.$refs.link.classList) {
          this.$refs.link.classList.add('el-breadcrumb__item__nolink');
        } else {
          this.$refs.link.className += ' el-breadcrumb__item__nolink';
        }
      }
    }
  };
</script>
