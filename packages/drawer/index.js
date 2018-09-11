import ElDrawer from './src/component';

/* istanbul ignore next */
ElDrawer.install = function(Vue) {
  Vue.component(ElDrawer.name, ElDrawer);
};

export default ElDrawer;
