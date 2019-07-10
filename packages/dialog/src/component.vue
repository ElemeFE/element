<template>
  <transition
    name="dialog-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave">
    <div class="el-dialog__wrapper" 
      v-show="visible" 
      @click.self="handleWrapperClick"
      @mouseup.stop="handleDragStop"
      @mousemove.stop="handleMouseMove">
      <div
        role="dialog"
        aria-modal="true"
        :aria-label="title || 'dialog'"
        class="el-dialog"
        :class="[{ 'is-fullscreen': fullscreen, 'el-dialog--center': center, 'el-dialog--draggable': draggable && !fullscreen }, customClass]"
        ref="dialog"
        :style="style">
        <div class="el-dialog__header" 
          @mousedown.stop="handleDragStart" 
          @mouseup.stop="handleDragStop">
          <slot name="title">
            <span class="el-dialog__title">{{ title }}</span>
          </slot>
          <button
            type="button"
            class="el-dialog__headerbtn"
            aria-label="Close"
            v-if="showClose"
            @mousedown.stop
            @mouseup.stop
            @click="handleClose">
            <i class="el-dialog__close el-icon el-icon-close"></i>
          </button>
        </div>
        <div class="el-dialog__body" v-if="rendered"><slot></slot></div>
        <div class="el-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>

      <div v-if="draggable && isDragging" class="draggable-proxy" :style="dragProxyStyle"></div>
    </div>
  </transition>
</template>

<script>
  import Popup from 'element-ui/src/utils/popup';
  import Migrating from 'element-ui/src/mixins/migrating';
  import emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElDialog',

    mixins: [Popup, emitter, Migrating],

    props: {
      title: {
        type: String,
        default: ''
      },

      modal: {
        type: Boolean,
        default: true
      },

      modalAppendToBody: {
        type: Boolean,
        default: true
      },

      appendToBody: {
        type: Boolean,
        default: false
      },

      lockScroll: {
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

      showClose: {
        type: Boolean,
        default: true
      },

      width: String,

      fullscreen: Boolean,

      customClass: {
        type: String,
        default: ''
      },

      top: {
        type: String,
        default: '15vh'
      },
      beforeClose: Function,
      center: {
        type: Boolean,
        default: false
      },
      draggable: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        closed: false,
        isDragging: false,
        style: {
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)'
        },
        dragProxyStyle: {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        },
        mouseNormal: {
          x: 0,
          y: 0
        }
      };
    },

    watch: {
      visible(val) {
        if (val) {
          this.isDragging = false;
          this.closed = false;
          this.$emit('open');
          this.$el.addEventListener('scroll', this.updatePopper);
          this.$nextTick(() => {
            this.$refs.dialog.scrollTop = 0;
          });
          if (this.appendToBody) {
            document.body.appendChild(this.$el);
          }
        } else {
          this.$el.removeEventListener('scroll', this.updatePopper);
          if (!this.closed) this.$emit('close');
        }
      }
    },

    /* computed: {
      style() {
        let style = {};
        if (!this.fullscreen) {
          style.marginTop = this.top;
          if (this.width) {
            style.width = this.width;
          }
        }
        return style;
      }
    }, */

    methods: {
      getMigratingConfig() {
        return {
          props: {
            'size': 'size is removed.'
          }
        };
      },
      handleWrapperClick() {
        if (!this.closeOnClickModal || this.isDragging) return;
        this.handleClose();
      },
      handleClose() {
        if (typeof this.beforeClose === 'function') {
          this.beforeClose(this.hide);
        } else {
          this.hide();
        }
      },
      hide(cancel) {
        if (cancel !== false) {
          this.$emit('update:visible', false);
          this.$emit('close');
          this.closed = true;
        }
      },
      updatePopper() {
        this.broadcast('ElSelectDropdown', 'updatePopper');
        this.broadcast('ElDropdownMenu', 'updatePopper');
      },
      afterEnter() {
        this.$emit('opened');
      },
      afterLeave() {
        this.$emit('closed');
      },
      handleDragStart(e) {
        if (this.fullscreen || !this.draggable) return;
        e.preventDefault() ;
        this.isDragging = true;

        this.mouseNormal.x = e.offsetX;
        this.mouseNormal.y = e.offsetY;

        const rect = this.$refs['dialog'].getBoundingClientRect();
        this.dragProxyStyle.left = rect.left + 'px';
        this.dragProxyStyle.top = rect.top + 'px';
        this.dragProxyStyle.width = rect.width + 'px';
        this.dragProxyStyle.height = rect.height + 'px';
      },
      handleDragStop(e) {
        if (this.fullscreen || !this.isDragging) return;
        e.preventDefault();

        setTimeout(() => {
          this.mouseNormal = {
            x: 0,
            y: 0
          };
          this.isDragging = false;

          this.style.top = this.dragProxyStyle.top;
          this.style.left = this.dragProxyStyle.left;
          this.style.transform = 'none';
        }, 10);
      },
      handleMouseMove(e) {
        if (!this.isDragging || this.fullscreen) return;
        e.preventDefault();

        let mousemoveX = e.clientX - this.mouseNormal.x;
        let mousemoveY = e.clientY - this.mouseNormal.y ;

        this.dragProxyStyle.left = mousemoveX + 'px';
        this.dragProxyStyle.top = mousemoveY + 'px' ;
      }
    },

    mounted() {
      if (!this.fullscreen) {
        this.style.top = this.top;
        if (this.width) {
          this.style.width = this.width;
        }
      }

      if (this.visible) {
        this.rendered = true;
        this.open();
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      }
    },

    destroyed() {
      // if appendToBody is true, remove DOM node after destroy
      if (this.appendToBody && this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  };
</script>
