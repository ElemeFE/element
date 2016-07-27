const Alert = require('./src/main');

Alert.install = function(Vue) {
  Vue.component(Alert.name, Alert);
};

module.exports = Alert;
