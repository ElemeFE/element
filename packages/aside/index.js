import Aside from './src/main';

/* istanbul ignore next */
Aside.install = function(app) {
  app.component(Aside.name, Aside);
};

export default Aside;
