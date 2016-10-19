const ElDropdownMenu = require('../dropdown/src/dropdown-menu');

/* istanbul ignore next */
ElDropdownMenu.install = function(Vue) {
  Vue.component(ElDropdownMenu.name, ElDropdownMenu);
};

module.exports = ElDropdownMenu;
