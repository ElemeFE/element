const ElCheckboxGroup = require('../checkbox/src/checkbox-group.vue');

ElCheckboxGroup.install = function(Vue) {
  Vue.component(ElCheckboxGroup.name, ElCheckboxGroup);
};

module.exports = ElCheckboxGroup;
