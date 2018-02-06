import TmTag from './src/tag';

/* istanbul ignore next */
TmTag.install = function(Vue) {
  Vue.component(TmTag.name, TmTag);
};

export default TmTag;
