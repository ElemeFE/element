import Row from './src/row';

/* istanbul ignore next */
Row.install = function(app) {
  app.component(Row.name, Row);
};

export default Row;

