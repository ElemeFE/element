const ElFormItem = require('../form/src/form-item');

/* istanbul ignore next */
ElFormItem.install = function(Vue) {
  Vue.component(ElFormItem.name, ElFormItem);
};

module.exports = ElFormItem;
