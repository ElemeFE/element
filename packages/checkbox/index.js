const ElCheckbox = require('./src/checkbox');

ElCheckbox.install = function(Vue) {
  Vue.component('el-checkbox', ElCheckbox);
};

module.exports = ElCheckbox;

