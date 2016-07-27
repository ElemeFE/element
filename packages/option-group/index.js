const ElOptionGroup = require('../select/src/option-group');

ElOptionGroup.install = function(Vue) {
  Vue.component(ElOptionGroup.name, ElOptionGroup);
};

module.exports = ElOptionGroup;
