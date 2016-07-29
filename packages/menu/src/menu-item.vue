<script>
  import emitter from 'main/mixins/emitter';

  module.exports = {
    name: 'el-menu-item',

    componentName: 'menu-item',

    mixins: [emitter],

    props: {
      index: {
        type: String,
        required: true
      },
      disabled: {
        type: Boolean,
        required: false
      }
    },
    computed: {
      indexPath() {
        return this.$parent.indexPath ? this.$parent.indexPath.concat(this.index) : [this.index];
      },
      activeIndex() {
        return this.$parent.activeIndex;
      },
      active() {
        return this.index === this.activeIndex;
      }
    },
    methods: {
      handleClick() {
        if (!this.active) {
          this.dispatch('menu', 'select-key', [this.index, this.indexPath]);
        }
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
    <transition name="fade" mode="out-in">
      <span class="el-menu-item__bar" v-if="active"></span>
    </transition>
  </li>
</template>
