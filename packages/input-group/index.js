const ElInputGroup = require('../input/src/input-group');

ElInputGroup.install = function(Vue) {
  Vue.component(ElInputGroup.name, ElInputGroup);
};

module.exports = ElInputGroup;
