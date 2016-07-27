const ElSubmenu = require('../menu/src/submenu');

ElSubmenu.install = function(Vue) {
  Vue.component(ElSubmenu.name, ElSubmenu);
};

module.exports = ElSubmenu;
