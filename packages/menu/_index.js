const ElMenu = require('./src/menu');
const ElMenuItem = require('./src/menu-item');
const ElMenuItemGroup = require('./src/menu-item-group');
const ElSubmenu = require('./src/submenu');

/* istanbul ignore next */
module.exports = function(Vue) {
  Vue.component(ElMenuItem.name, ElMenuItem);
  Vue.component(ElMenuItemGroup.name, ElMenuItemGroup);
  Vue.component(ElMenu.name, ElMenu);
  Vue.component(ElSubmenu.name, ElSubmenu);
};

exports.ElMenuItemGroup = ElMenuItemGroup;
exports.ElMenuItem = ElMenuItem;
exports.ElMenu = ElMenu;
exports.ElSubmenu = ElSubmenu;
