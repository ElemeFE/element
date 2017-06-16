<template>
  <li class="el-menu-item-group">
    <div class="el-menu-item-group__title" :style="{paddingLeft: levelPadding + 'px'}">
      <template v-if="!$slots.title">{{title}}</template>
      <slot v-else name="title"></slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>
<script>
  export default {
    name: 'ElMenuItemGroup',

    componentName: 'ElMenuItemGroup',

    props: {
      title: {
        type: String
      },
      leftPadding: {
          type: Number,
          default: 10
      }
    },
    data() {
      return {
        paddingLeft: 20
      };
    },
    computed: {
      levelPadding() {
        let padding = this.leftPadding;
        let parent = this.$parent;
        while (parent && parent.$options.componentName !== 'ElMenu') {
          if (parent.$options.componentName === 'ElSubmenu') {
            padding += this.leftPadding;
          }
          parent = parent.$parent;
        }
        padding === this.leftPadding && (padding = this.leftPadding);
        return padding;
      }
    }
  };
</script>

