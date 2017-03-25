const defaults = {
  title: undefined,
  message: '',
  type: '',
  showInput: false,
  showClose: true,
  modalFade: true,
  lockScroll: true,
  closeOnClickModal: true,
  closeOnPressEscape: true,
  inputValue: null,
  inputPlaceholder: '',
  inputPattern: null,
  inputValidator: null,
  inputErrorMessage: '',
  showConfirmButton: true,
  showCancelButton: false,
  confirmButtonPosition: 'right',
  confirmButtonHighlight: false,
  cancelButtonHighlight: false,
  confirmButtonText: '',
  cancelButtonText: '',
  confirmButtonClass: '',
  cancelButtonClass: '',
  customClass: '',
  beforeClose: null
};

import Vue from 'vue';
import msgboxVue from './main.vue';
import merge from 'element-ui/src/utils/merge';

const MessageBoxConstructor = Vue.extend(msgboxVue);

let currentMsg, instance;
let msgQueue = [];

const defaultCallback = action => {
  if (currentMsg) {
    let callback = currentMsg.callback;
    if (typeof callback === 'function') {
      if (instance.showInput) {
        callback(instance.inputValue, action);
      } else {
        callback(action);
      }
    }
    if (currentMsg.resolve) {
      let $type = currentMsg.options.$type;
      if ($type === 'confirm' || $type === 'prompt') {
        if (action === 'confirm') {
          if (instance.showInput) {
            currentMsg.resolve({ value: instance.inputValue, action });
          } else {
            currentMsg.resolve(action);
          }
        } else if (action === 'cancel' && currentMsg.reject) {
          currentMsg.reject(action);
        }
      } else {
        currentMsg.resolve(action);
      }
    }
  }
};

const initInstance = () => {
  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  });

  instance.callback = defaultCallback;
};

const showNextMsg = () => {
  if (!instance) {
    initInstance();
  }
  instance.action = '';

  if (!instance.value || instance.closeTimer) {
    if (msgQueue.length > 0) {
      currentMsg = msgQueue.shift();

      let options = currentMsg.options;
      for (let prop in options) {
        if (options.hasOwnProperty(prop)) {
          instance[prop] = options[prop];
        }
      }
      if (options.callback === undefined) {
        instance.callback = defaultCallback;
      }

      let oldCb = instance.callback;
      instance.callback = (action, instance) => {
        oldCb(action, instance);
        showNextMsg();
      };
      ['modal', 'showClose', 'closeOnClickModal', 'closeOnPressEscape'].forEach(prop => {
        if (instance[prop] === undefined) {
          instance[prop] = true;
        }
      });
      document.body.appendChild(instance.$el);

      Vue.nextTick(() => {
        instance.value = true;
      });
    }
  }
};

const MessageBox = function(options, callback) {
  if (Vue.prototype.$isServer) return;
  if (typeof options === 'string') {
    options = {
      message: options
    };
    if (arguments[1]) {
      options.title = arguments[1];
    }
    if (arguments[2]) {
      options.type = arguments[2];
    }
  } else if (options.callback && !callback) {
    callback = options.callback;
  }

  if (typeof Promise !== 'undefined') {
    return new Promise((resolve, reject) => { // eslint-disable-line
      msgQueue.push({
        options: merge({}, defaults, MessageBox.defaults, options),
        callback: callback,
        resolve: resolve,
        reject: reject
      });

      showNextMsg();
    });
  } else {
    msgQueue.push({
      options: merge({}, defaults, MessageBox.defaults, options),
      callback: callback
    });

    showNextMsg();
  }
};

MessageBox.setDefaults = defaults => {
  MessageBox.defaults = defaults;
};

MessageBox.alert = (message, title, options) => {
  if (typeof title === 'object') {
    options = title;
    title = '';
  }
  return MessageBox(merge({
    title: title,
    message: message,
    $type: 'alert',
    closeOnPressEscape: false,
    closeOnClickModal: false
  }, options));
};

MessageBox.confirm = (message, title, options) => {
  if (typeof title === 'object') {
    options = title;
    title = '';
  }
  return MessageBox(merge({
    title: title,
    message: message,
    $type: 'confirm',
    showCancelButton: true
  }, options));
};

MessageBox.prompt = (message, title, options) => {
  if (typeof title === 'object') {
    options = title;
    title = '';
  }
  return MessageBox(merge({
    title: title,
    message: message,
    showCancelButton: true,
    showInput: true,
    $type: 'prompt'
  }, options));
};

MessageBox.close = () => {
  instance.value = false;
  msgQueue = [];
  currentMsg = null;
};

export default MessageBox;
export { MessageBox };
