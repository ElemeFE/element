import TmForm from './src/form';

/* istanbul ignore next */
TmForm.install = function(Vue) {
  Vue.component(TmForm.name, TmForm);
};

export default TmForm;
