import ElDialog from './src/component';

/* istanbul ignore next */
ElDialog.install = function(Vue) {
  Vue.component(ElDialog.name, ElDialog);
};

export default ElDialog;
