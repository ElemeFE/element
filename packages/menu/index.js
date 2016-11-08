import ElMenu from './src/menu';

/* istanbul ignore next */
ElMenu.install = function(Vue) {
  Vue.component(ElMenu.name, ElMenu);
};

export default ElMenu;
