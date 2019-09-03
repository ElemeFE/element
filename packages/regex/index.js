import directive from './src/directive';

export default {
  install(Vue) {
    Vue.use(directive);
  },
  directive
};
