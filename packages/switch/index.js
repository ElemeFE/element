const ElSwitch = require('./src/component');

ElSwitch.install = function(Vue) {
  Vue.component(ElSwitch.name, ElSwitch);
};

module.exports = ElSwitch;

