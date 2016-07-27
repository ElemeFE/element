const RadioGroup = require('../radio/src/radio-group.vue');

RadioGroup.install = function(Vue) {
  Vue.component(RadioGroup.name, RadioGroup);
};

module.exports = RadioGroup;
