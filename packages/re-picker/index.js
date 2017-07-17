import RePicker from './src/picker/date-picker';

/* istanbul ignore next */
RePicker.install = function(Vue) {
  Vue.component(RePicker.name, RePicker);
};

export default RePicker;
