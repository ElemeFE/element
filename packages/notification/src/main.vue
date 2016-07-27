<template>
  <div class="el-notification" transition="el-notification-fade" :style="{ top: top ? top + 'px' : 'auto' }" @mouseenter="clearTimer()" @mouseleave="startTimer()">
    <i class="el-notification__icon el-icon-{{typeClass}}" v-if="type"></i>
    <div class="el-notification__group" :style="{ 'margin-left': type ? '55px' : '0' }">
      <span>{{ title }}</span>
      <p>{{ message }}</p>
      <div class="el-notification__closeBtn el-icon-close" @click="handleClose()"></div>
    </div>
  </div>
</template>

<script type="text/babel">
  let typeMap = {
    success: 'circle-check',
    info: 'information',
    warning: 'warning',
    error: 'circle-cross'
  };

  export default {
    name: 'ElNotification',

    data() {
      return {
        title: '',
        message: '',
        duration: 4500,
        type: '',
        onClose: null,

        closed: false,
        top: null,
        timer: null
      };
    },

    computed: {
      typeClass() {
        return this.type ? typeMap[this.type] : '';
      }
    },

    watch: {
      closed(newVal) {
        if (newVal) {
          this.$destroy(true);
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

    ready() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.handleClose();
          }
        }, this.duration);
      }
    }
  };
</script>