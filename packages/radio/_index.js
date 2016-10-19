const ElRadio = require('./src/radio');
const RadioButton = require('./src/radio-button.vue');
const RadioGroup = require('./src/radio-group.vue');

/* istanbul ignore next */
module.exports = function(Vue) {
  Vue.component(ElRadio.name, ElRadio);
  Vue.component(RadioButton.name, RadioButton);
  Vue.component(RadioGroup.name, RadioGroup);
};

exports.ElRadio = ElRadio;
exports.RadioButton = ElRadio;
exports.RadioGroup = RadioGroup;
