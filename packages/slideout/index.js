import ElSlideout from './src/slideout.js';

/* istanbul ignore next */
ElSlideout.install = function(Vue) {
  Vue.component(ElSlideout.name, ElSlideout);
};

export default ElSlideout;
