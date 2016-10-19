const ElButtonGroup = require('../button/src/button-group');

/* istanbul ignore next */
ElButtonGroup.install = function(Vue) {
  Vue.component(ElButtonGroup.name, ElButtonGroup);
};

module.exports = ElButtonGroup;
