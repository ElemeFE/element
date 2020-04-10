import Container from './src/main.jsx';

/* istanbul ignore next */
Container.install = function(Vue) {
  Vue.component(Container.name, Container);
};

export default Container;
