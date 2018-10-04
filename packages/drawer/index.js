import ElDrawer from './src/drawer';

/* istanbul ignore next */
ElDrawer.install = function(Vue) {
  Vue.component(ElDrawer.name, ElDrawer);
};

export default ElDrawer;
