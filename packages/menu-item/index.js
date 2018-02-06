import TmMenuItem from '../menu/src/menu-item';

/* istanbul ignore next */
TmMenuItem.install = function(Vue) {
  Vue.component(TmMenuItem.name, TmMenuItem);
};

export default TmMenuItem;
