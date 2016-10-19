import DatePicker from './src/picker/date-picker';
import TimePicker from './src/picker/time-picker';
import TimeSelect from './src/picker/time-select';

/* istanbul ignore next */
module.exports = function install(Vue) {
  Vue.component(DatePicker.name, DatePicker);
  Vue.component(TimePicker.name, TimePicker);
  Vue.component(TimeSelect.name, TimeSelect);
};

exports.DatePicker = DatePicker;
exports.TimePicker = TimePicker;
exports.TimeSelect = TimeSelect;
