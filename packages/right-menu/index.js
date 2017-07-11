import ElRightMenu from './src/right-menu';

/* istanbul ignore next */
ElRightMenu.install = function(Vue) {
  Vue.component(ElRightMenu.name, ElRightMenu);
};

export default ElRightMenu;
