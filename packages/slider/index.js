import Slider from './src/main.jsx';
import SliderSingle from './src/single.vue';
import SliderRange from './src/range.vue';

/* istanbul ignore next */
Slider.install = function(Vue) {
  Vue.component(Slider.name, Slider);
  Vue.component(SliderSingle.name, SliderSingle);
  Vue.component(SliderRange.name, SliderRange);
};

export default Slider;
