const ElCheckboxGroup = require('../checkbox/src/checkbox-group.vue');

/* istanbul ignore next */
ElCheckboxGroup.install = function(Vue) {
  Vue.component(ElCheckboxGroup.name, ElCheckboxGroup);
};

module.exports = ElCheckboxGroup;
