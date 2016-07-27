const ElTable = require('./src/table');

ElTable.install = function(Vue) {
  Vue.component('el-table', ElTable);
};

module.exports = ElTable;
