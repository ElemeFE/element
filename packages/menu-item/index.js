import ElMenuItem from '../menu/src/menu-item';

/* istanbul ignore next */
ElMenuItem.install = function(Vue) {
  Vue.component(ElMenuItem.name, ElMenuItem);
};

export default ElMenuItem;
