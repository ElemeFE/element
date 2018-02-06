import TmMenu from './src/menu';

/* istanbul ignore next */
TmMenu.install = function(Vue) {
  Vue.component(TmMenu.name, TmMenu);
};

export default TmMenu;
