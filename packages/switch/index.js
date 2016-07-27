const ElSwitch = require('./src/component');

ElSwitch.install = function(Vue) {
  Vue.component('el-switch', ElSwitch);
};

module.exports = ElSwitch;

