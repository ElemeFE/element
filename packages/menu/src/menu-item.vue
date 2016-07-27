<script>
  import emitter from 'main/mixins/emitter';

  module.exports = {
    name: 'el-menu-item',

    componentName: 'menu-item',

    mixins: [emitter],

    props: {
      key: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        active: false
      };
    },
    computed: {
      keyPath() {
        return this.$parent.keyPath ? this.$parent.keyPath.concat(this.key) : [this.key];
      }
    },
    methods: {
      handleClick() {
        if (!this.active) {
          this.dispatch('menu', 'select-key', [this.key, this.keyPath]);
        }
      }
    },
    events: {
      'select-key': function(key) {
        this.active = key === this.key;
      }
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
    <span class="el-menu-item__bar" v-if="active" transition="zoom-x"></span>
  </li>
</template>
