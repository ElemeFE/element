import Link from './src/main';

/* istanbul ignore next */
Link.install = function(app) {
  app.component(Link.name, Link);
};

export default Link;
