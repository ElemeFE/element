import TmDialog from './src/component';

/* istanbul ignore next */
TmDialog.install = function(Vue) {
  Vue.component(TmDialog.name, TmDialog);
};

export default TmDialog;
