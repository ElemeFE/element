import Main from './src/main';

/* istanbul ignore next */
Main.install = function(app) {
  app.component(Main.name, Main);
};

export default Main;
