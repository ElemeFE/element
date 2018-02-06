import TmCarousel from './src/main';
import TmCarouselItem from './src/item';

/* istanbul ignore next */
export default function(Vue) {
  Vue.component(TmCarousel.name, TmCarousel);
  Vue.component(TmCarouselItem.name, TmCarouselItem);
};

export { TmCarousel, TmCarouselItem };
