import Container from './src/main';

/* istanbul ignore next */
Container.install = function(Vue) {
  Vue.component(Container.name, Container);
};

export default Container;
