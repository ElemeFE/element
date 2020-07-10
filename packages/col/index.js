import ElCol from './src/col';

/* istanbul ignore next */
ElCol.install = function(app) {
  app.component(ElCol.name, ElCol);
};

export default ElCol;

