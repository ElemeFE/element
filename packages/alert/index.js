import Alert from './src/main';

/* istanbul ignore next */
Alert.install = function(Vue) {
  Vue.component(Alert.name, Alert);
};

export default Alert;
