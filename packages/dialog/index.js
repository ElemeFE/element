const ElDialog = require('./src/component');

/* istanbul ignore next */
ElDialog.install = function(Vue) {
  Vue.component(ElDialog.name, ElDialog);
};

module.exports = ElDialog;
