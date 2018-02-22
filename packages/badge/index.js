import TmBadge from './src/badge';

/* istanbul ignore next */
TmBadge.install = function(Vue) {
  Vue.component(TmBadge.name, TmBadge);
};

export default TmBadge;
