const ElDropdownMenu = require('../dropdown/src/dropdown-menu');

ElDropdownMenu.install = function(Vue) {
  Vue.component(ElDropdownMenu.name, ElDropdownMenu);
};

module.exports = ElDropdownMenu;
