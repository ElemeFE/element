<template>
  <transition name="el-message-fade">
    <div
      :class="[
        'el-message',
        type && !iconClass ? `el-message--${ type }` : '',
        center ? 'is-center' : '',
        customClass]"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      role="alertdialog"
    >
      <i :class="iconClass" v-if="iconClass"></i>
      <i :class="typeClass" v-else></i>
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="el-message__content"  tabindex="0">{{ message }}</p>
        <p v-else v-html="message" class="el-message__content"  tabindex="0"></p>
      </slot>
      <i v-if="showClose" class="el-message__closeBtn el-icon-close" @click="close" tabindex="0" role="button" aria-label="close" @keydown.enter.stop="close"></i>
    </div>
  </transition>
</template>

<script type="text/babel">
  const typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
  };

  export default {
    data() {
      return {
        visible: false,
        message: '',
        duration: 3000,
        type: 'info',
        iconClass: '',
        customClass: '',
        onClose: null,
        showClose: false,
        closed: false,
        timer: null,
        dangerouslyUseHTMLString: false,
        center: false,
        initFocus: null,
        originFocus: null
      };
    },

    computed: {
      iconWrapClass() {
        const classes = ['el-message__icon'];
        if (this.type && !this.iconClass) {
          classes.push(`el-message__icon--${ this.type }`);
        }
        return classes;
      },

      typeClass() {
        return this.type && !this.iconClass
          ? `el-message__icon el-icon-${ typeMap[this.type] }`
          : '';
      }
    },

    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false;
          this.$el.addEventListener('transitionend', this.destroyElement);
        }
      }
    },

    methods: {
      destroyElement() {
        this.$el.removeEventListener('transitionend', this.destroyElement);
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },

      close() {
        this.closed = true;
        if (typeof this.onClose === 'function') {
          this.onClose(this);
        }
        this.originFocus && this.originFocus.focus(); // 键盘焦点回归
      },

      clearTimer() {
        clearTimeout(this.timer);
      },

      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close();
            }
          }, this.duration);
        }
      },
      keydown(e) {
        if (e.keyCode === 46 || e.keyCode === 8) {
          this.clearTimer(); // detele 取消倒计时
        } else if (e.keyCode === 27) { // esc关闭消息
          if (!this.closed) {
            this.close();
          }
        } else {
          this.startTimer(); // 恢复倒计时
        }
      }
    },
    mounted() {
      this.startTimer();
      this.originFocus = document.activeElement;
      this.initFocus = this.showClose ? this.$el.querySelector('.el-icon-close') : this.$el.querySelector('.el-message__content');
      setTimeout(() => {
        this.initFocus && this.initFocus.focus();
      });
      document.addEventListener('keydown', this.keydown);
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.keydown);
    }
  };
</script>
