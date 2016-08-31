<template>
  <transition name="dialog-fade">
    <div class="el-dialog__wrapper" v-show="value" @click.self="handleWrapperClick">
      <div class="el-dialog" :class="[sizeClass, customClass]" ref="dialog" :style="{ 'margin-bottom': size !== 'full' ? '50px' : '', 'top': size !== 'full' ? dynamicTop + 'px' : '0' }">
        <div class="el-dialog__header">
          <span class="el-dialog__title">{{title}}</span>
          <div class="el-dialog__headerbtn">
            <i class="el-dialog__close el-icon el-icon-close" @click='close()'></i>
          </div>
        </div>
        <div class="el-dialog__body" v-if="rendered"><slot></slot></div>
        <div class="el-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
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
      value(val) {
        if (val) {
          this.$emit('open');
          this.$nextTick(() => {
            this.$refs.dialog.scrollTop = 0;
          });
        } else {
          this.$emit('close');
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
          this.$emit('input', false);
        }
      },

      resetTop() {
        this.dynamicTop = Math.floor((window.innerHeight || document.documentElement.clientHeight) * 0.16);
      }
    },

    mounted() {
      if (this.value) {
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
