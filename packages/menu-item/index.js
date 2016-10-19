const ElMenuItem = require('../menu/src/menu-item');

/* istanbul ignore next */
ElMenuItem.install = function(Vue) {
  Vue.component(ElMenuItem.name, ElMenuItem);
};

module.exports = ElMenuItem;
