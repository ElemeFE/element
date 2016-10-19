const Rate = require('./src/main');

/* istanbul ignore next */
Rate.install = function(Vue) {
  Vue.component(Rate.name, Rate);
};

module.exports = Rate;
