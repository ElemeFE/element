<template>
  <transition name="dialog-fade">
    <div class="tm-dialog__wrapper" v-show="visible" @click.self="handleWrapperClick">
      <div
        class="tm-dialog"
        :class="[
          {
            'is-fullscreen': fullscreen,
            'tm-dialog--center': center,
            'tm-dialog--simplified': simplified
          },
          customClass
        ]"
        ref="dialog"
        :style="style">
        <div class="tm-dialog__header" :class="{ 'is-empty': !title }">
          <slot name="title">
            <h2 class="tm-dialog__title">{{ title }}</h2>
          </slot>
          <button
            type="button"
            class="tm-dialog__headerbtn"
            aria-label="Close"
            v-if="showClose"
            @click="handleClose">
            <tm-icon class="tm-dialog__close"
                     name="cross"></tm-icon>
          </button>
        </div>
        <div class="tm-dialog__body" v-if="rendered"><slot></slot></div>
        <div class="tm-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Popup from 'tmconsulting-ui/src/utils/popup';
  import Migrating from 'tmconsulting-ui/src/mixins/migrating';
  import emitter from 'tmconsulting-ui/src/mixins/emitter';
  import TmIcon from 'tmconsulting-ui/packages/icon/src/icon';

  export default {
    name: 'TmDialog',

    mixins: [Popup, emitter, Migrating],

    components: {
      TmIcon
    },

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
      simplified: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        closed: false
      };
    },

    watch: {
      visible(val) {
        if (val) {
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

    computed: {
      style() {
        let style = {};
        if (this.width) {
          style.width = this.width;
        }
        if (!this.fullscreen) {
          style.marginTop = this.top;
        }
        return style;
      }
    },

    methods: {
      getMigratingConfig() {
        return {
          props: {
            'size': 'size is removed.'
          }
        };
      },
      handleWrapperClick() {
        if (!this.closeOnClickModal) return;
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
        this.broadcast('TmSelectDropdown', 'updatePopper');
        this.broadcast('TmDropdownMenu', 'updatePopper');
      }
    },

    mounted() {
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
