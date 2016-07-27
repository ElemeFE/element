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
      activeKey: {
        type: String
      },
      openedKeys: {
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
    ready() {
      this.broadcast('menu-item', 'select-key', this.activeKey);
      this.broadcast('submenu', 'open-menu', this.openedKeys);
    },
    events: {
      'expand-menu': function(key, keyPath) {
        this.openedKeys.push(key);

        if (this.uniqueOpend) {
          this.broadcast('submenu', 'close-menu', keyPath);
          this.openedKeys = this.openedKeys.filter((key) => {
            return keyPath.indexOf(key) !== -1;
          });
        }
        this.$emit('open', key, keyPath);
      },
      'collapse-menu': function(key, keyPath) {
        this.openedKeys.$remove(key);
        this.$emit('close', key, keyPath);
      },
      'select-key': function(key, keyPath) {
        this.activeKey = key;
        this.broadcast('menu-item', 'select-key', key);
        this.$emit('select', key, keyPath);

        if (this.router) {
          this.$route.router.go(key);
        }
      }
    }
  };
</script>
