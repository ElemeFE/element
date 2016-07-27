const RadioButton = require('../radio/src/radio-button.vue');

RadioButton.install = function(Vue) {
  Vue.component(RadioButton.name, RadioButton);
};

module.exports = RadioButton;
