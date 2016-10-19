const ElTableColumn = require('../table/src/table-column');

/* istanbul ignore next */
ElTableColumn.install = function(Vue) {
  Vue.component(ElTableColumn.name, ElTableColumn);
};

module.exports = ElTableColumn;
