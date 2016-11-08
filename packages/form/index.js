import ElForm from './src/form';

/* istanbul ignore next */
ElForm.install = function(Vue) {
  Vue.component(ElForm.name, ElForm);
};

export default ElForm;
