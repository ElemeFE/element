<template>
  <transition name="el-message-fade">
    <div class="el-message" v-show="visible" @mouseenter="clearTimer" @mouseleave="startTimer">
      <img class="el-message__icon" :src="typeImg" alt="">
      <div class="el-message__group">
        <p>{{ message }}</p>
        <div v-if="showClose" class="el-message__closeBtn el-icon-close" @click="handleClose"></div>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
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
        timer: null
      };
    },

    computed: {
      typeImg() {
        return require(`../assets/${ this.type }.svg`);
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
          this.onClose(this);
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