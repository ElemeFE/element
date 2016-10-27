<script>
  import Menu from './menu-mixin';
  module.exports = {
    name: 'el-menu-item',

    componentName: 'menu-item',

    mixins: [Menu],

    props: {
      index: {
        type: String,
        required: true
      },
      route: {
        type: Object,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      }
    },
    computed: {
      active() {
        return this.index === this.rootMenu.activeIndex;
      }
    },
    methods: {
      handleClick() {
        this.rootMenu.handleSelect(
          this.index,
          this.indexPath,
          this.route || this.index,
          this
        );
      }
    },
    created() {
      this.rootMenu.menuItems[this.index] = this;
    }
  };
</script>

<template>
  <li class="el-menu-item"
    @click="handleClick"
    :class="{
      'is-active': active,
      'is-disabled': disabled
    }">
    <slot></slot>
  </li>
</template>
