import ElButton from './src/button';

/* istanbul ignore next */
ElButton.install = function(app) {
  app.component(ElButton.name, ElButton);
};

export default ElButton;
