const Step = require('../steps/src/step');

Step.install = function(Vue) {
  Vue.component(Step.name, Step);
};

module.exports = Step;
