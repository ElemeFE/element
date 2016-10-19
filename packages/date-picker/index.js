import DatePicker from './src/picker/date-picker';

/* istanbul ignore next */
module.exports = function install(Vue) {
  Vue.component(DatePicker.name, DatePicker);
};

module.exports = DatePicker;
