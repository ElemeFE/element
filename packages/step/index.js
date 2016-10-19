const Step = require('../steps/src/step');

/* istanbul ignore next */
Step.install = function(Vue) {
  Vue.component(Step.name, Step);
};

module.exports = Step;
