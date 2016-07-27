const ElForm = require('./src/form');

ElForm.install = function(Vue) {
  Vue.component(ElForm.name, ElForm);
};

module.exports = ElForm;
