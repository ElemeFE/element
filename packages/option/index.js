const ElOption = require('../select/src/option');

ElOption.install = function(Vue) {
  Vue.component(ElOption.name, ElOption);
};

module.exports = ElOption;
