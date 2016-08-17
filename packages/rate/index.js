const Rate = require('./src/main');

Rate.install = function(Vue) {
  Vue.component(Rate.name, Rate);
};

module.exports = Rate;
