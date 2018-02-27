<template>
  <span class="el-breadcrumb__item">
    <span class="el-breadcrumb__inner" ref="link" :role="role" @keydown="keyDown" :tabindex="role ? 0 : null" @mousedown="(e) => {e.preventDefault();}">
      <slot></slot>
    </span>
    <i v-if="separatorClass" class="el-breadcrumb__separator" :class="separatorClass"></i>
    <span v-else class="el-breadcrumb__separator" role="presentation">{{separator}}</span>
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
        separator: '',
        separatorClass: ''
      };
    },

    inject: ['elBreadcrumb'],
    computed: {
      role() {
        return this.to && this.to.path ? 'link' : null;
      }
    },
    mounted() {
      this.separator = this.elBreadcrumb.separator;
      this.separatorClass = this.elBreadcrumb.separatorClass;
      let self = this;
      if (this.to) {
        let link = this.$refs.link;
        link.setAttribute('role', 'link');
        link.addEventListener('click', _ => {
          let to = this.to;
          self.replace ? self.$router.replace(to)
            : self.$router.push(to);
        });
      }
    },
    methods: {
      keyDown(e) {
        const keyCode = e.keyCode;
        if ([13, 32].indexOf(keyCode) !== -1) {
          e.preventDefault();
          e.target.click();
        }
      }
    }
  };
</script>
