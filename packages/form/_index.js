const ElFormItem = require('./src/form-item');
const ElForm = require('./src/form');

/* istanbul ignore next */
module.exports = function(Vue) {
  Vue.component(ElForm.name, ElForm);
  Vue.component(ElFormItem.name, ElFormItem);
};

exports = ElFormItem;
exports = ElForm;
