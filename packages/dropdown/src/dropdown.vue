<template>
  <div class="el-dropdown"
    :class="{'el-dropdown--text': type === 'text'}"
    v-clickoutside="hide()"
  >
    <!-- 带独立的下拉菜单按钮 -->
    <el-button-group v-if="iconSeparate">
      <el-button :size="size" :type="type" @click="$emit('mainclick')">{{text}}</el-button>
      <el-button
        :size="size"
        :type="type"
        class="el-dropdown__icon-button"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @click="handleClick">
        <i class="el-dropdown__icon el-icon-caret-bottom"></i>
      </el-button>
    </el-button-group>
    <!-- 不带独立的下拉菜单按钮 -->
    <el-button :size="size" :type="type" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @click="handleClick" v-else>
      {{text}}<i class="el-dropdown__icon el-icon-caret-bottom"></i>
    </el-button>
    <!-- 下拉菜单 -->
    <el-dropdown-menu
      v-ref:menu
      v-if="visible"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <slot></slot>
    </el-dropdown-menu>
  </div>
</template>
<script>
  /**
   * dropdown
   * @module packages/dropdown
   * @desc 下拉菜单组件
   * @param {string} label - 名称
   */
  import ElButton from 'packages/button/index.js';
  import ElButtonGroup from 'packages/button-group/index.js';
  import ElDropdownMenu from './dropdown-menu.vue';
  import Vue from 'vue';
  import VueClickoutside from 'vue-clickoutside';
  Vue.use(VueClickoutside);

  export default {
    name: 'ElDropdown',

    components: {
      ElButton,
      ElButtonGroup,
      ElDropdownMenu
    },

    props: {
      text: String,
      type: String,
      iconSeparate: {
        type: Boolean,
        default: true
      },
      trigger: {
        type: String,
        default: 'hover'
      },
      size: {
        type: String,
        default: ''
      },
      menuAlign: {
        type: String,
        default: 'end'
      }
    },

    data() {
      return {
        timeout: null,
        visible: false
      };
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
