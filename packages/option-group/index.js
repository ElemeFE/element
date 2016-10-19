const ElOptionGroup = require('../select/src/option-group');

/* istanbul ignore next */
ElOptionGroup.install = function(Vue) {
  Vue.component(ElOptionGroup.name, ElOptionGroup);
};

module.exports = ElOptionGroup;
