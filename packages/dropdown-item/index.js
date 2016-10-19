const ElDropdownItem = require('../dropdown/src/dropdown-item');

/* istanbul ignore next */
ElDropdownItem.install = function(Vue) {
  Vue.component(ElDropdownItem.name, ElDropdownItem);
};

module.exports = ElDropdownItem;
