import swiper from './src/swiper.vue';

/* istanbul ignore next */
swiper.install = function(Vue, globalOptions) {
  if (globalOptions) {
    swiper.props.globalOptions.default = () => globalOptions;
  }
  Vue.component(swiper.name, swiper);
};

export default swiper;
