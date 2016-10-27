import DatePicker from './src/picker/date-picker';

/* istanbul ignore next */
DatePicker.install = function install(Vue) {
  Vue.component(DatePicker.name, DatePicker);
};

module.exports = DatePicker;
