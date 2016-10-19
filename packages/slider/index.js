const Slider = require('./src/main');

/* istanbul ignore next */
Slider.install = function(Vue) {
  Vue.component(Slider.name, Slider);
};

module.exports = Slider;
