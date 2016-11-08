import ElTag from './src/tag';

/* istanbul ignore next */
ElTag.install = function(Vue) {
  Vue.component(ElTag.name, ElTag);
};

export default ElTag;
