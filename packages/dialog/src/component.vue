<template>
  <div class="el-dialog__wrapper" v-if="visible" transition="dialog-fade" @click.self="handleWrapperClick">
    <div class="el-dialog {{ sizeClass }} {{ customClass }}" v-el:dialog :style="{ 'margin-bottom': size !== 'full' ? '50px' : '', 'top': size !== 'full' ? dynamicTop + 'px' : '0' }">
      <div class="el-dialog__header">
        <span class="el-dialog__title">{{title}}</span>
        <div class="el-dialog__headerbtn">
          <i class="el-dialog__close el-icon el-icon-close" @click='close()'></i>
        </div>
      </div>
      <div class="el-dialog__body"><slot></slot></div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  import Popup from 'vue-popup';

  export default {
    name: 'el-dialog',

    mixins: [ Popup ],

    props: {
      title: {
        type: String,
        default: ''
      },

      modal: {
        type: Boolean,
        default: true
      },

      closeOnClickModal: {
        type: Boolean,
        default: true
      },

      closeOnPressEscape: {
        type: Boolean,
        default: true
      },

      size: {
        type: String,
        default: 'small'
      },

      customClass: {
        type: String,
        default: ''
      }
    },

    data() {
      return {
        dynamicTop: 0
      };
    },

    watch: {
      visible(val) {
        if (val) {
          this.$els.dialog.scrollTop = 0;
        }
      }
    },

    computed: {
      sizeClass() {
        return `el-dialog--${ this.size }`;
      }
    },

    methods: {
      handleWrapperClick() {
        if (this.closeOnClickModal) {
          this.visible = false;
        }
      },

      resetTop() {
        this.dynamicTop = Math.floor((window.innerHeight || document.documentElement.clientHeight) * 0.16);
      }
    },

    ready() {
      if (this.visible) {
        this.rendered = true;
        this.open();
      }
      window.addEventListener('resize', this.resetTop);
      this.resetTop();
    },

    beforeDestroy() {
      window.removeEventListener('resize', this.resetTop);
    }
  };
</script>
