const ElCol = require('./src/col');

ElCol.install = function(Vue) {
  Vue.component('el-col', ElCol);
};

module.exports = ElCol;

