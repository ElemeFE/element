import Radio from './src/radio';

/* istanbul ignore next */
Radio.install = function(app) {
  app.component(Radio.name, Radio);
};

export default Radio;
