const Steps = require('./src/steps');

/* istanbul ignore next */
Steps.install = function(Vue) {
  Vue.component(Steps.name, Steps);
};

module.exports = Steps;
