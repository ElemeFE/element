const ElCheckbox = require('./src/checkbox');
const ElCheckboxGroup = require('./src/checkbox-group.vue');

/* istanbul ignore next */
module.exports = function install(Vue) {
  Vue.component(ElCheckboxGroup.name, ElCheckboxGroup);
  Vue.component(ElCheckbox.name, ElCheckbox);
};

exports.ElCheckbox = ElCheckbox;
exports.ElCheckboxGroup = ElCheckboxGroup;
