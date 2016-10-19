const ElSwitch = require('./src/component');

/* istanbul ignore next */
ElSwitch.install = function(Vue) {
  Vue.component(ElSwitch.name, ElSwitch);
};

module.exports = ElSwitch;

