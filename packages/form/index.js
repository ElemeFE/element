const ElForm = require('./src/form');

/* istanbul ignore next */
ElForm.install = function(Vue) {
  Vue.component(ElForm.name, ElForm);
};

module.exports = ElForm;
