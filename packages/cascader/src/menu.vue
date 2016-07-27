<script>
  /**
   * menu
   * @module components/basic/menu
   * @desc 用于 dropdown 中的菜单
   * @param {string} label - 名称
   */
  export default {
    name: 'ElMenu',

    props: {
      label: String,
      disabled: Boolean
    },

    compiled() {
      const parent = this.$parent;
      let menu = {
        label: this.label,
        disabled: this.disabled
      };

      if (this.submenu) {
        menu.submenu = this.submenu;
      }

      if (parent.$options.name !== this.name && parent.hasOwnProperty('menus')) {
        parent.menus = parent.menus.concat(menu);
      } else {
        parent.submenu = (parent.submenu || []).concat(menu);
      }

    }
  };
</script>