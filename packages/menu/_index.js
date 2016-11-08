import ElMenu from './src/menu';
import ElMenuItem from './src/menu-item';
import ElMenuItemGroup from './src/menu-item-group';
import ElSubmenu from './src/submenu';

/* istanbul ignore next */
export default function(Vue) {
  Vue.component(ElMenuItem.name, ElMenuItem);
  Vue.component(ElMenuItemGroup.name, ElMenuItemGroup);
  Vue.component(ElMenu.name, ElMenu);
  Vue.component(ElSubmenu.name, ElSubmenu);
};

export {
  ElMenuItemGroup,
  ElMenuItem,
  ElMenu,
  ElSubmenu
};
