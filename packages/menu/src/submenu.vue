<script>
  import emitter from 'main/mixins/emitter';

  module.exports = {
    name: 'el-submenu',

    componentName: 'submenu',

    mixins: [emitter],

    props: {
      index: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        opened: false
      };
    },
    computed: {
      indexPath() {
        return this.$parent.indexPath ? this.$parent.indexPath.concat(this.index) : [this.index];
      },
      activeIndex() {
        return this.$parent.activeIndex;
      }
    },
    methods: {
      handleClick() {
        if (!this.opened) {
          this.dispatch('menu', 'expand-menu', [this.index, this.indexPath]);
          this.opened = true;
        } else {
          this.dispatch('menu', 'collapse-menu', [this.index, this.indexPath]);
          this.opened = false;
        }
      }
    },
    mounted() {
      this.$on('close-menu', (openedIndexs) => {
        if (openedIndexs && openedIndexs.indexOf(this.index) === -1) {
          this.opened = false;
        }
      });
      this.$on('open-menu', (IndexsArray) => {
        if (IndexsArray && IndexsArray.indexOf(this.index) !== -1) {
          this.opened = true;
        }
      });
    }
  };
</script>

<template>
  <li class="el-submenu" :class="{'is-opened': opened}">
    <div class="el-menu-item el-submenu__title" @click="handleClick">
      <slot name="title"></slot>
      <i class="el-submenu__icon-arrow el-icon-arrow-up"></i>
    </div>
    <ul class="el-menu" v-show="opened">
      <slot></slot>
    </ul>
  </li>
</template>
