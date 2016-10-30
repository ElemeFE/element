<script>
  module.exports = {
    name: 'ElMenuItemGroup',

    componentName: 'ElMenuItemGroup',

    props: {
      title: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        paddingLeft: 20
      };
    },
    methods: {
      initPadding() {
        var parent = this.$parent;
        var level = 0;
        var component = parent.$options.componentName;

        while (component !== 'ElMenu') {
          if (component === 'ElSubmenu') {
            level++;
          }
          parent = parent.$parent;
          component = parent.$options.componentName;
        }
        this.paddingLeft += level * 10;
      }
    },
    mounted() {
      this.initPadding();
    }
  };
</script>

<template>
  <li class="el-menu-item-group">
    <div class="el-menu-item-group__title" :style="{'padding-left': paddingLeft + 'px'}">{{title}}</div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>
