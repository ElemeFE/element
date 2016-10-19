const TimePicker = require('../date-picker/src/picker/time-picker');

/* istanbul ignore next */
TimePicker.install = function(Vue) {
  Vue.component(TimePicker.name, TimePicker);
};

module.exports = TimePicker;
