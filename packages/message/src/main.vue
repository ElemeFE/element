<template>
  <transition name="el-message-fade">
    <div class="el-message" v-show="visible" :style="{ top: top ? top + 'px' : 'auto' }" @mouseenter="clearTimer" @mouseleave="startTimer">
      <i class="el-message__icon" :class="[ typeClass ]"></i>
      <div class="el-message__group">
        <p>{{ message }}</p>
        <div v-if="showClose" class="el-message__closeBtn el-icon-close" @click="handleClose"></div>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  let typeMap = {
    success: 'circle-check',
    info: 'information',
    warning: 'warning',
    error: 'circle-cross'
  };

  export default {
    data() {
      return {
        visible: false,
        message: '',
        duration: 3000,
        type: 'info',
        onClose: null,
        showClose: false,
        closed: false,
        top: null,
        timer: null
      };
    },

    computed: {
      typeClass() {
        return typeMap[this.type] ? `el-icon-${ typeMap[this.type] }` : 'el-icon-information';
      }
    },

    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false;
          this.$el.addEventListener('transitionend', () => {
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
          });
        }
      }
    },

    methods: {
      handleClose() {
        this.closed = true;
        if (typeof this.onClose === 'function') {
          this.onClose();
        }
      },

      clearTimer() {
        clearTimeout(this.timer);
      },

      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.handleClose();
            }
          }, this.duration);
        }
      }
    },

    mounted() {
      this.startTimer();
    }
  };
</script>