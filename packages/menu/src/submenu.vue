<template>
  <li
    :class="{
      'el-submenu': true,
      'is-active': active,
      'is-opened': opened
    }"
  >
    <div class="el-submenu__title" ref="submenu-title" :style="paddingStyle">
      <slot name="title"></slot>
      <i :class="{
        'el-submenu__icon-arrow': true,
        'el-icon-arrow-down': rootMenu.mode === 'vertical',
        'el-icon-caret-bottom': rootMenu.mode === 'horizontal'
      }">
      </i>
    </div>
    <template v-if="rootMenu.mode === 'horizontal'">
      <transition name="el-zoom-in-top">
        <ul class="el-menu" v-show="opened"><slot></slot></ul>
      </transition>
    </template>
    <el-collapse-transition v-else>
      <ul class="el-menu" v-show="opened"><slot></slot></ul>
    </el-collapse-transition>
  </li>
</template>
<script>
  import ElCollapseTransition from 'element-ui/src/transitions/collapse-transition';
  import menuMixin from './menu-mixin';
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElSubmenu',

    componentName: 'ElSubmenu',

    mixins: [menuMixin, Emitter],

    components: { ElCollapseTransition },

    props: {
      index: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        timeout: null,
        items: {},
        submenus: {}
      };
    },
    computed: {
      opened() {
        return this.rootMenu.openedMenus.indexOf(this.index) > -1;
      },
      active: {
        cache: false,
        get() {
          let isActive = false;
          const submenus = this.submenus;
          const items = this.items;

          Object.keys(items).forEach(index => {
            if (items[index].active) {
              isActive = true;
            }
          });

          Object.keys(submenus).forEach(index => {
            if (submenus[index].active) {
              isActive = true;
            }
          });

          return isActive;
        }
      }
    },
    methods: {
      addItem(item) {
        this.$set(this.items, item.index, item);
      },
      removeItem(item) {
        delete this.items[item.index];
      },
      addSubmenu(item) {
        this.$set(this.submenus, item.index, item);
      },
      removeSubmenu(item) {
        delete this.submenus[item.index];
      },
      handleClick() {
        this.dispatch('ElMenu', 'submenu-click', this);
      },
      handleMouseenter() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.rootMenu.openMenu(this.index, this.indexPath);
        }, 300);
      },
      handleMouseleave() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.rootMenu.closeMenu(this.index, this.indexPath);
        }, 300);
      },
      initEvents() {
        let {
          rootMenu,
          handleMouseenter,
          handleMouseleave,
          handleClick
        } = this;
        let triggerElm;

        if (rootMenu.mode === 'horizontal' && rootMenu.menuTrigger === 'hover') {
          triggerElm = this.$el;
          triggerElm.addEventListener('mouseenter', handleMouseenter);
          triggerElm.addEventListener('mouseleave', handleMouseleave);
        } else {
          triggerElm = this.$refs['submenu-title'];
          triggerElm.addEventListener('click', handleClick);
        }
      }
    },
    created() {
      this.parentMenu.addSubmenu(this);
      this.rootMenu.addSubmenu(this);
    },
    beforeDestroy() {
      this.parentMenu.removeSubmenu(this);
      this.rootMenu.removeSubmenu(this);
    },
    mounted() {
      this.initEvents();
    }
  };
</script>
