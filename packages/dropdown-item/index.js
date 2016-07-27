const ElDropdownItem = require('../dropdown/src/dropdown-item');

ElDropdownItem.install = function(Vue) {
  Vue.component(ElDropdownItem.name, ElDropdownItem);
};

module.exports = ElDropdownItem;
