const ElRow = require('./src/row');

ElRow.install = function(Vue) {
  Vue.component('el-row', ElRow);
};

module.exports = ElRow;

