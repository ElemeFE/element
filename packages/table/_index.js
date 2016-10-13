const ElTableColumn = require('./src/table-column');
const ElTable = require('./src/table');

module.exports = function(Vue) {
  Vue.component(ElTable.name, ElTable);
  Vue.component(ElTableColumn.name, ElTableColumn);
};

exports.ElTable = ElTable;
exports.ElTableColumn = ElTableColumn;
