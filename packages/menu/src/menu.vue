<template>
  <ul class="el-menu"
    :class="{
      'el-menu--vertical': mode === 'vertical',
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
        default: ''
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
        openedMenus: this.defaultOpeneds
      };
    },
    methods: {
      handleMenuExpand(key, keyPath) {
        this.openedMenus.push(key);

        if (this.uniqueOpend) {
          this.broadcast('submenu', 'close-menu', keyPath);
          this.openedMenus = this.openedMenus.filter((key) => {
            return keyPath.indexOf(key) !== -1;
          });
        }
        this.$emit('open', key, keyPath);
      },
      handleMenuCollapse(key, keyPath) {
        this.openedMenus.splice(this.openedMenus.indexOf(key), 1);
        this.$emit('close', key, keyPath);
      },
      handleSelect(key, keyPath) {
        this.activeIndex = key;
        this.$emit('select', key, keyPath);

        if (this.router) {
          this.$router.push(key);
        }
      }
    },
    mounted() {
      this.broadcast('submenu', 'open-menu', this.openedMenus);
      this.$on('expand-menu', this.handleMenuExpand);
      this.$on('collapse-menu', this.handleMenuCollapse);
      this.$on('select-key', this.handleSelect);
    }
  };
</script>
