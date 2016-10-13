const ElFormItem = require('./src/form-item');
const ElForm = require('./src/form');

module.exports = function(Vue) {
  Vue.component(ElForm.name, ElForm);
  Vue.component(ElFormItem.name, ElFormItem);
};

exports = ElFormItem;
exports = ElForm;
