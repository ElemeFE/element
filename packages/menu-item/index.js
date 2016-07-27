const ElMenuItem = require('../menu/src/menu-item');

ElMenuItem.install = function(Vue) {
  Vue.component(ElMenuItem.name, ElMenuItem);
};

module.exports = ElMenuItem;
