const ElOption = require('../select/src/option');

/* istanbul ignore next */
ElOption.install = function(Vue) {
  Vue.component(ElOption.name, ElOption);
};

module.exports = ElOption;
