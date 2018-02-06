import TmSubmenu from '../menu/src/submenu';

/* istanbul ignore next */
TmSubmenu.install = function(Vue) {
  Vue.component(TmSubmenu.name, TmSubmenu);
};

export default TmSubmenu;
