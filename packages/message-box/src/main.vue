<template>
  <div class="el-message-box__wrapper">
    <transition name="msgbox-bounce">
      <div class="el-message-box" v-show="value">
        <div class="el-message-box__header" v-if="title !== ''">
          <div class="el-message-box__title">{{ title }}</div>
          <i class="el-message-box__close el-icon-close" @click="handleAction('cancel')" v-if="showClose"></i>
        </div>
        <div class="el-message-box__content" v-if="message !== ''">
          <div class="el-message-box__status" :class="[ typeClass ]"></div>
          <div class="el-message-box__message" :style="{ 'margin-left': typeClass ? '50px' : '0' }"><p>{{ message }}</p></div>
          <div class="el-message-box__input" v-show="showInput">
            <el-input v-model="inputValue" :placeholder="inputPlaceholder" ref="input"></el-input>
            <div class="el-message-box__errormsg" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{ editorErrorMessage }}</div>
          </div>
        </div>
        <div class="el-message-box__btns">
          <el-button :class="[ cancelButtonClasses ]" v-show="showCancelButton" @click.native="handleAction('cancel')">{{ cancelButtonText }}</el-button>
          <el-button :class="[ confirmButtonClasses ]" v-show="showConfirmButton" @click.native="handleAction('confirm')" type="primary">{{ confirmButtonText }}</el-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/babel">
  let CONFIRM_TEXT = '确定';
  let CANCEL_TEXT = '取消';
  let typeMap = {
    success: 'circle-check',
    info: 'information',
    warning: 'warning',
    error: 'circle-cross'
  };

  import Popup from 'vue-popup';
  import ElInput from 'packages/input/index.js';

  export default {
    mixins: [ Popup ],

    props: {
      modal: {
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
      }
    },

    components: {
      ElInput
    },

    computed: {
      typeClass() {
        return this.type && typeMap[this.type] ? `el-icon-${ typeMap[this.type] }` : '';
      },

      confirmButtonClasses() {
        return `el-button el-button-primary ${ this.confirmButtonClass }`;
      },
      cancelButtonClasses() {
        return `el-button el-button-default ${ this.cancelButtonClass }`;
      }
    },

    methods: {
      doClose() {
        this.value = false;
        this._closing = true;

        this.onClose && this.onClose();

        if (this.modal && this.bodyOverflow !== 'hidden') {
          document.body.style.overflow = this.bodyOverflow;
        }
        this.opened = false;

        if (!this.transition) {
          this.doAfterClose();
        }
      },

      handleAction(action) {
        if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
          return;
        }
        var callback = this.callback;
        this.value = false;
        callback(action);
      },

      validate() {
        if (this.$type === 'prompt') {
          var inputPattern = this.inputPattern;
          if (inputPattern && !inputPattern.test(this.inputValue || '')) {
            this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
            this.$refs.input.$el.querySelector('input').classList.add('invalid');
            return false;
          }
          var inputValidator = this.inputValidator;
          if (typeof inputValidator === 'function') {
            var validateResult = inputValidator(this.inputValue);
            if (validateResult === false) {
              this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
              this.$refs.input.$el.querySelector('input').classList.add('invalid');
              return false;
            }
            if (typeof validateResult === 'string') {
              this.editorErrorMessage = validateResult;
              return false;
            }
          }
        }
        this.editorErrorMessage = '';
        this.$refs.input.$el.querySelector('input').classList.remove('invalid');
        return true;
      }
    },

    watch: {
      inputValue() {
        if (this.$type === 'prompt') {
          this.validate();
        }
      },

      value(val) {
        if (val && this.$type === 'prompt') {
          setTimeout(() => {
            if (this.$refs.input && this.$refs.input.$el) {
              this.$refs.input.$el.querySelector('input').focus();
            }
          }, 500);
        }
      }
    },

    data() {
      return {
        title: '',
        message: '',
        type: '',
        showInput: false,
        inputValue: null,
        inputPlaceholder: '',
        inputPattern: null,
        inputValidator: null,
        inputErrorMessage: '',
        showConfirmButton: true,
        showCancelButton: false,
        confirmButtonText: CONFIRM_TEXT,
        cancelButtonText: CANCEL_TEXT,
        confirmButtonClass: '',
        confirmButtonDisabled: false,
        cancelButtonClass: '',

        editorErrorMessage: null,
        callback: null
      };
    }
  };
</script>
