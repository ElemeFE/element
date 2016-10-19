const TimeSelect = require('../date-picker/src/picker/time-select');

/* istanbul ignore next */
TimeSelect.install = function(Vue) {
  Vue.component(TimeSelect.name, TimeSelect);
};

module.exports = TimeSelect;
