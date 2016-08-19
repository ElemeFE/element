const Steps = require('./src/steps');

Steps.install = function(Vue) {
  Vue.component(Steps.name, Steps);
};

module.exports = Steps;
