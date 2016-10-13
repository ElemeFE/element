const ElDialog = require('./src/component');

ElDialog.install = function(Vue) {
  Vue.component(ElDialog.name, ElDialog);
};

module.exports = ElDialog;
