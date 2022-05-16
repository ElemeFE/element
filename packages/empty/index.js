import Empty from './src/index.vue';

Empty.install = (Vue) => {
  Vue.component(Empty.name, Empty);
};

export default Empty;
