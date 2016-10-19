const RadioGroup = require('../radio/src/radio-group.vue');

/* istanbul ignore next */
RadioGroup.install = function(Vue) {
  Vue.component(RadioGroup.name, RadioGroup);
};

module.exports = RadioGroup;
