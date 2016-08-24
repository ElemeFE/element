<template>
  <div class="el-dropdown"
    :class="{'el-dropdown--text': type === 'text'}"
    v-clickoutside="hide"
  >
    <!-- 分割的下拉按钮 -->
    <el-button-group v-if="iconSeparate">
      <el-button :size="size" :type="type" @click.native="$emit('mainclick')">{{text}}</el-button>
      <el-button
        :size="size"
        :type="type"
        class="el-dropdown__icon-button"
        @mouseenter.native="handleMouseEnter"
        @mouseleave.native="handleMouseLeave"
        @click.native="handleClick">
        <i class="el-dropdown__icon el-icon-caret-bottom"></i>
      </el-button>
    </el-button-group>
    <!-- 不分割的下拉按钮 -->
    <el-button :size="size" :type="type" @mouseenter.native="handleMouseEnter" @mouseleave.native="handleMouseLeave" @click.native="handleClick" v-else>
      {{text}}<i class="el-dropdown__icon el-icon-caret-bottom"></i>
    </el-button>
    <!-- 下拉菜单 -->
    <transition name="md-fade-bottom">
      <el-dropdown-menu
        v-if="visible"
        @mouseenter.native="handleMouseEnter"
        @mouseleave.native="handleMouseLeave">
        <slot></slot>
      </el-dropdown-menu>
    </transition>
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
  import Clickoutside from 'main/utils/clickoutside';

  export default {
    name: 'ElDropdown',

    components: {
      ElButton,
      ElButtonGroup,
      ElDropdownMenu
    },

    directives: { Clickoutside },

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
