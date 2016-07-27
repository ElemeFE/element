const Slider = require('./src/main');

Slider.install = function(Vue) {
  Vue.component(Slider.name, Slider);
};

module.exports = Slider;
