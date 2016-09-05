<template>
  <ul class="el-menu"
    :class="{
      'el-menu--horizontal': mode === 'horizontal',
      'el-menu--dark': theme === 'dark'
    }"
  >
    <slot></slot>
  </ul>
</template>
<script>
  import emitter from 'main/mixins/emitter';

  export default {
    name: 'ElMenu',

    componentName: 'menu',

    mixins: [emitter],

    props: {
      mode: {
        type: String,
        default: 'vertical'
      },
      defaultActive: {
        type: String,
        default: ''
      },
      defaultOpeneds: {
        type: Array,
        default() {
          return [];
        }
      },
      theme: {
        type: String,
        default: 'light'
      },
      uniqueOpend: Boolean,
      router: Boolean
    },
    data() {
      return {
        activeIndex: this.defaultActive,
        openedMenus: this.defaultOpeneds.slice(0)
      };
    },
    methods: {
      handleMenuExpand(index, indexPath) {
        if (this.uniqueOpend) {
          this.broadcast('submenu', 'close-menu', indexPath);
          this.openedMenus = this.openedMenus.filter((index) => {
            return indexPath.indexOf(index) !== -1;
          });
        }
        this.$emit('open', index, indexPath);
      },
      handleMenuCollapse(index, indexPath) {
        this.openedMenus.splice(this.openedMenus.indexOf(index), 1);
        this.$emit('close', index, indexPath);
      },
      handleSelect(index, indexPath) {
        this.activeIndex = index;
        this.$emit('select', index, indexPath);
        this.broadcast('submenu', 'select', [index, indexPath]);

        if (this.router) {
          this.$router.push(index);
        }
      }
    },
    mounted() {
      this.broadcast('submenu', 'open-menu', this.openedMenus);
      this.$on('expand-menu', this.handleMenuExpand);
      this.$on('collapse-menu', this.handleMenuCollapse);
    }
  };
</script>
