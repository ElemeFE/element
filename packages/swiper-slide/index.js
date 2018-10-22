import SwiperSlide from '../swiper/src/slide.vue';

/* istanbul ignore next */
SwiperSlide.install = function(Vue, globalOptions) {
  if (globalOptions) {
    SwiperSlide.props.globalOptions.default = () => globalOptions;
  }
  Vue.component(SwiperSlide.name, SwiperSlide);
};

export default SwiperSlide;
