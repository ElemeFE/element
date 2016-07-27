const ElButtonGroup = require('../button/src/button-group');

ElButtonGroup.install = function(Vue) {
  Vue.component(ElButtonGroup.name, ElButtonGroup);
};

module.exports = ElButtonGroup;
