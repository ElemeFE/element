import Skeleton from './src/index.vue';

/* istanbul ignore next */
Skeleton.install = function(Vue) {
  Vue.component(Skeleton.name, Skeleton);
};

export default Skeleton;
