const ElFormItem = require('../form/src/form-item');

ElFormItem.install = function(Vue) {
  Vue.component(ElFormItem.name, ElFormItem);
};

module.exports = ElFormItem;
