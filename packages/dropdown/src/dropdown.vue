<template>
  <div class="el-dropdown" v-clickoutside="hide">
    <!-- <slot name="trigger"></slot> -->
    <!-- <slot :visible="visible"></slot> -->
  </div>
</template>
<script>
  /**
   * dropdown
   * @module packages/dropdown
   * @desc 下拉菜单组件
   * @param {string} label - 名称
   */
  import Clickoutside from 'main/utils/clickoutside';

  export default {
    name: 'ElDropdown',

    directives: { Clickoutside },

    props: {
      trigger: {
        type: String,
        default: 'hover'
      },
      menuAlign: {
        type: String,
        default: 'end'
      }
    },

    data() {
      return {
        timeout: null
      };
    },

    mounted() {
      console.log(this.$slots);
    },

    methods: {
      show() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = true;
        }, 250);
      },
      hide() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = false;
        }, 150);
      },
      handleMouseEnter() {
        if (this.trigger === 'hover') {
          this.show();
        }
      },
      handleMouseLeave() {
        if (this.trigger === 'hover') {
          this.hide();
        }
      },
      handleClick() {
        if (this.trigger === 'click') {
          this.visible = !this.visible;
        }
      }
    }
  };
</script>
