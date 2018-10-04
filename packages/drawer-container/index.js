import ElDrawerContainer from '../drawer/src/drawer-container';

/* istanbul ignore next */
ElDrawerContainer.install = function(Vue) {
  Vue.component(ElDrawerContainer.name, ElDrawerContainer);
};

export default ElDrawerContainer;
