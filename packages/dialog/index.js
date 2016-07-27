const ElDialog = require('./src/component');

ElDialog.install = function(Vue) {
  Vue.component('el-dialog', ElDialog);
};

module.exports = ElDialog;
