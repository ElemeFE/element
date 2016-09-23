<template>
  <li
    :class="{ 'el-submenu': true, 'is-active': active, 'is-opened': opened}"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
  >
    <div class="el-submenu__title" @click="handleClick">

      <slot name="title"></slot>
      <i :class="{
          'el-submenu__icon-arrow': true,
          'el-icon-arrow-down': rootMenu.mode === 'vertical',
          'el-icon-caret-bottom': rootMenu.mode === 'horizontal'
        }">
      </i>
    </div>
    <transition :name="rootMenu.mode === 'horizontal' ? 'md-fade-bottom' : ''">
      <ul class="el-menu" v-show="opened"><slot></slot></ul>
    </transition>
  </li>
</template>
<script>
  import menuMixin from './menu-mixin';

  module.exports = {
    name: 'el-submenu',

    componentName: 'submenu',

    mixins: [menuMixin],

    props: {
      index: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        timeout: null,
        active: false
      };
    },
    computed: {
      opened() {
        return this.rootMenu.openedMenus.indexOf(this.index) !== -1;
      }
    },
    methods: {
      handleClick() {
        this.rootMenu.handleSubmenuClick(this.index, this.indexPath);
      },
      handleMouseenter() {
        if (this.rootMenu.mode === 'horizontal') {
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            this.rootMenu.openMenu(this.index, this.indexPath);
          }, 300);
        }
      },
      handleMouseleave() {
        if (this.rootMenu.mode === 'horizontal') {
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            this.rootMenu.closeMenu(this.index, this.indexPath);
          }, 300);
        }
      }
    },
    created() {
      this.rootMenu.submenus[this.index] = this;
    },
    mounted() {
      this.$on('item-select', (index, indexPath) => {
        this.active = indexPath.indexOf(this.index) !== -1;
      });
    }
  };
</script>
