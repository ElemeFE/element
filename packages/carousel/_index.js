import ElCarousel from './src/main';
import ElCarouselItem from './src/item';

/* istanbul ignore next */
export default function(Vue) {
  Vue.component(ElCarousel.name, ElCarousel);
  Vue.component(ElCarouselItem.name, ElCarouselItem);
};

export { ElCarousel, ElCarouselItem };
