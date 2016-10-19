const ElSubmenu = require('../menu/src/submenu');

/* istanbul ignore next */
ElSubmenu.install = function(Vue) {
  Vue.component(ElSubmenu.name, ElSubmenu);
};

module.exports = ElSubmenu;
