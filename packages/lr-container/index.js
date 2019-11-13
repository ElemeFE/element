import LrContainer from './src/main';

/* istanbul ignore next */
LrContainer.install = function(Vue) {
  Vue.component(LrContainer.name, LrContainer);
};

export default LrContainer;
