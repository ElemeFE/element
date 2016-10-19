const Alert = require('./src/main');

/* istanbul ignore next */
Alert.install = function(Vue) {
  Vue.component(Alert.name, Alert);
};

module.exports = Alert;
