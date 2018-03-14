<template>
  <transition name="msgbox-fade">
    <div
      class="tm-message-box__wrapper"
      tabindex="-1"
      v-show="visible"
      @click.self="handleWrapperClick"
      role="dialog"
      aria-modal="true"
      :aria-label="title || 'dialog'"
    >
      <div class="tm-message-box" :class="[customClass, center && 'tm-message-box--center']">
        <div class="tm-message-box__header" v-if="title !== undefined">
          <div class="tm-message-box__title">
            <div class="tm-message-box__status" :class="[ typeClass ]" v-if="typeClass && center"></div>
            <span>{{ title }}</span>
          </div>
          <button type="button"
                  class="tm-message-box__headerbtn"
                  aria-label="Close"
                  v-if="showClose"
                  @click="handleAction('cancel')"
                  @keydown.enter="handleAction('cancel')"
          >
            <tm-icon class="tm-message-box__close"
                     name="cross"></tm-icon>
          </button>
        </div>
        <div class="tm-message-box__content" v-if="message !== ''">
          <div class="tm-message-box__status" :class="[ typeClass ]" v-if="typeClass && !center"></div>
          <div class="tm-message-box__message">
            <slot>
              <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
              <p v-else v-html="message"></p>
            </slot>
          </div>
          <div class="tm-message-box__input" v-show="showInput">
            <tm-input
              v-model="inputValue"
              :type="inputType"
              @compositionstart.native="handleComposition"
              @compositionupdate.native="handleComposition"
              @compositionend.native="handleComposition"
              @keyup.enter.native="handleKeyup"
              :placeholder="inputPlaceholder"
              ref="input"></tm-input>
            <div class="tm-message-box__errormsg" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{ editorErrorMessage }}</div>
          </div>
        </div>
        <div class="tm-message-box__btns">
          <tm-button
            type="secondary"
            :icon="iconCancel"
            :loading="cancelButtonLoading"
            v-show="showCancelButton"
            :circle="circle"
            :cancel="cancel"
            @click.native="handleAction('cancel')"
            @keydown.enter="handleAction('cancel')"
          >
            <template v-if="cancelButtonText !== false">
              {{ cancelButtonText || t('el.messagebox.cancel') }}
            </template>
          </tm-button>
          <tm-button
            type="secondary"
            class="tm-button--confirm"
            :icon="iconApprove"
            :loading="confirmButtonLoading"
            ref="confirm"
            v-show="showConfirmButton"
            :circle="circle"
            :approve="approve"
            :remove="remove"
            @click.native="handleAction('confirm')"
            @keydown.enter="handleAction('confirm')"
          >
            <template v-if="confirmButtonText !== false">
              {{ confirmButtonText || t('el.messagebox.confirm') }}
            </template>
          </tm-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  import Popup from 'tmconsulting-ui/src/utils/popup';
  import Locale from 'tmconsulting-ui/src/mixins/locale';
  import TmInput from 'tmconsulting-ui/packages/input';
  import TmButton from 'tmconsulting-ui/packages/button';
  import TmIcon from 'tmconsulting-ui/packages/icon/src/icon';
  import { addClass, removeClass } from 'tmconsulting-ui/src/utils/dom';
  import { t } from 'tmconsulting-ui/src/locale';
  import Dialog from 'tmconsulting-ui/src/utils/aria-dialog';

  let messageBox;
  let typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
  };

  export default {
    mixins: [Popup, Locale],

    props: {
      modal: {
        default: true
      },
      lockScroll: {
        default: true
      },
      showClose: {
        type: Boolean,
        default: true
      },
      closeOnClickModal: {
        default: true
      },
      closeOnPressEscape: {
        default: true
      },
      closeOnHashChange: {
        default: true
      },
      center: {
        default: false,
        type: Boolean
      },
      roundButton: {
        default: false,
        type: Boolean
      }
    },

    components: {
      TmInput,
      TmButton,
      TmIcon
    },

    computed: {
      typeClass() {
        return this.type && typeMap[this.type] ? `tm-icon-${ typeMap[this.type] }` : '';
      },

      confirmButtonClasses() {
        return `tm-button--primary ${ this.confirmButtonClass }`;
      },
      cancelButtonClasses() {
        return `${ this.cancelButtonClass }`;
      }
    },

    methods: {
      handleComposition(event) {
        if (event.type === 'compositionend') {
          setTimeout(() => {
            this.isOnComposition = false;
          }, 100);
        } else {
          this.isOnComposition = true;
        }
      },
      handleKeyup() {
        !this.isOnComposition && this.handleAction('confirm');
      },
      getSafeClose() {
        const currentId = this.uid;
        return () => {
          this.$nextTick(() => {
            if (currentId === this.uid) this.doClose();
          });
        };
      },
      doClose() {
        if (!this.visible) return;
        this.visible = false;
        this._closing = true;

        this.onClose && this.onClose();
        messageBox.closeDialog(); // 解绑
        if (this.lockScroll) {
          setTimeout(() => {
            if (this.modal && this.bodyOverflow !== 'hidden') {
              document.body.style.overflow = this.bodyOverflow;
              document.body.style.paddingRight = this.bodyPaddingRight;
            }
            this.bodyOverflow = null;
            this.bodyPaddingRight = null;
          }, 200);
        }
        this.opened = false;

        if (!this.transition) {
          this.doAfterClose();
        }
        setTimeout(() => {
          if (this.action) this.callback(this.action, this);
        });

        setTimeout(() => {
          this.resetData(); //
        }, 200);
      },

      // TODO: Реорганизовать destroy или что-то похожее
      resetData() {
        this.iconCancel = null;
        this.iconApprove = null;
        this.circle = false;
        this.approve = false;
        this.cancel = false;
        this.remove = false;
      },

      handleWrapperClick() {
        if (this.closeOnClickModal) {
          this.handleAction('cancel');
        }
      },

      handleAction(action) {
        if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
          return;
        }
        this.action = action;
        if (typeof this.beforeClose === 'function') {
          this.close = this.getSafeClose();
          this.beforeClose(action, this, this.close);
        } else {
          this.doClose();
        }
      },

      validate() {
        if (this.$type === 'prompt') {
          var inputPattern = this.inputPattern;
          if (inputPattern && !inputPattern.test(this.inputValue || '')) {
            this.editorErrorMessage = this.inputErrorMessage || t('el.messagebox.error');
            addClass(this.getInputElement(), 'invalid');
            return false;
          }
          var inputValidator = this.inputValidator;
          if (typeof inputValidator === 'function') {
            var validateResult = inputValidator(this.inputValue);
            if (validateResult === false) {
              this.editorErrorMessage = this.inputErrorMessage || t('el.messagebox.error');
              addClass(this.getInputElement(), 'invalid');
              return false;
            }
            if (typeof validateResult === 'string') {
              this.editorErrorMessage = validateResult;
              return false;
            }
          }
        }
        this.editorErrorMessage = '';
        removeClass(this.getInputElement(), 'invalid');
        return true;
      },
      getFistFocus() {
        const $btns = this.$el.querySelector('.tm-message-box__btns .tm-button');
        const $title = this.$el.querySelector('.tm-message-box__btns .tm-message-box__title');
        return $btns && $btns[0] || $title;
      },
      getInputElement() {
        const inputRefs = this.$refs.input.$refs;
        return inputRefs.input || inputRefs.textarea;
      }
    },

    watch: {
      inputValue: {
        immediate: true,
        handler(val) {
          this.$nextTick(() => {
            if (this.$type === 'prompt' && val !== null) {
              this.validate();
            }
          });
        }
      },

      visible(val) {
        if (val) {
          this.uid++;
          if (this.$type === 'alert' || this.$type === 'confirm') {
            this.$nextTick(() => {
              this.$refs.confirm.$el.focus();
            });
          }
          this.focusAfterClosed = document.activeElement;
          messageBox = new Dialog(this.$el, this.focusAfterClosed, this.getFistFocus());
        }

        // prompt
        if (this.$type !== 'prompt') return;
        if (val) {
          setTimeout(() => {
            if (this.$refs.input && this.$refs.input.$el) {
              this.getInputElement().focus();
            }
          }, 500);
        } else {
          this.editorErrorMessage = '';
          removeClass(this.getInputElement(), 'invalid');
        }
      }
    },

    mounted() {
      if (this.closeOnHashChange) {
        window.addEventListener('hashchange', this.close);
      }
    },

    beforeDestroy() {
      if (this.closeOnHashChange) {
        window.removeEventListener('hashchange', this.close);
      }
      setTimeout(() => {
        messageBox.closeDialog();
      });
    },

    data() {
      return {
        uid: 1,
        title: undefined,
        message: '',
        type: '',
        customClass: '',
        showInput: false,
        inputValue: null,
        inputPlaceholder: '',
        inputType: 'text',
        inputPattern: null,
        inputValidator: null,
        inputErrorMessage: '',
        showConfirmButton: true,
        showCancelButton: false,
        action: '',
        confirmButtonText: 'Ok',
        cancelButtonText: 'Cancel',
        confirmButtonLoading: false,
        cancelButtonLoading: false,
        confirmButtonClass: '',
        confirmButtonDisabled: false,
        cancelButtonClass: '',
        editorErrorMessage: null,
        callback: null,
        dangerouslyUseHTMLString: false,
        focusAfterClosed: null,
        isOnComposition: false,
        iconCancel: null,
        iconApprove: null,
        circle: false,
        approve: false,
        cancel: false,
        remove: false
      };
    }
  };
</script>
