import MessageBox from 'element-ui/packages/message-box'; // eslint-disable-line
import merge from 'element-ui/src/utils/merge';
import deepmerge from 'deepmerge';

const MessageBoxCenter = deepmerge(MessageBox, {});

MessageBoxCenter.setDefaults = defaults => {
  MessageBox.defaults = defaults;
};

MessageBoxCenter.alert = (message, title, options) => {
  if (typeof title === 'object') {
    options = title;
    title = '';
  } else if (title === undefined) {
    title = '';
  }
  if (options) {
    options = {
      ...options,
      customClass: `el-message-box-center ${options.customClass || ''}`
    };
  }
  return MessageBox(merge({
    title: title,
    message: message,
    $type: 'alert',
    closeOnPressEscape: false,
    closeOnClickModal: false
  }, options));
};

MessageBoxCenter.confirm = (message, title, options) => {
  if (typeof title === 'object') {
    options = title;
    title = '';
  } else if (title === undefined) {
    title = '';
  }
  if (options) {
    options = {
      ...options,
      customClass: `el-message-box-center ${options.customClass || ''}`
    };
  }
  return MessageBox(merge({
    title: title,
    message: message,
    $type: 'confirm',
    showCancelButton: true
  }, options));
};

MessageBoxCenter.close = () => {
  return MessageBox.close();
};

export default MessageBoxCenter;

export { MessageBoxCenter };

