import Container from './src/main';

/* istanbul ignore next */
Container.install = function(app) {
  app.component(Container.name, Container);
};

export default Container;
