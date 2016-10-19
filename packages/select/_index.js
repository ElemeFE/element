const ElSelect = require('./src/select');
const ElOption = require('./src/option');
const ElOptionGroup = require('./src/option-group');

/* istanbul ignore next */
module.exports = function(Vue) {
  Vue.component(ElSelect.name, ElSelect);
  Vue.component(ElOption.name, ElOption);
  Vue.component(ElOptionGroup.name, ElOptionGroup);
};

exports.ElSelect = ElSelect;
exports.ElOption = ElOption;
exports.ElOptionGroup = ElOptionGroup;
