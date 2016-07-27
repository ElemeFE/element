<script>
  import emitter from 'main/mixins/emitter';

  module.exports = {
    name: 'el-submenu',

    componentName: 'submenu',

    mixins: [emitter],

    props: {
      key: {
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
      keyPath() {
        return this.$parent.keyPath ? this.$parent.keyPath.concat(this.key) : [this.key];
      }
    },
    methods: {
      handleClick() {
        if (!this.opened) {
          this.dispatch('menu', 'expand-menu', [this.key, this.keyPath]);
          this.opened = true;
        } else {
          this.dispatch('menu', 'collapse-menu', [this.key, this.keyPath]);
          this.opened = false;
        }
      }
    },
    events: {
      'close-menu': function(openedKeys) {
        if (openedKeys && openedKeys.indexOf(this.key) === -1) {
          this.opened = false;
        }
      },
      'open-menu': function(keysArray) {
        if (keysArray && keysArray.indexOf(this.key) !== -1) {
          this.opened = true;
        }
      }
    }
  };
</script>

<template>
  <li class="el-submenu" :class="{'is-opened': opened}">
    <div class="el-submenu__title" @click="handleClick">
      <slot name="title"></slot>
      <i class="el-submenu__icon-arrow el-icon-arrow-up"></i>
    </div>
    <ul class="el-menu" v-show="opened">
      <slot></slot>
    </ul>
  </li>
</template>
