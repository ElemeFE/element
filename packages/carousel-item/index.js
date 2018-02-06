import TmCarouselItem from '../carousel/src/item';

/* istanbul ignore next */
TmCarouselItem.install = function(Vue) {
  Vue.component(TmCarouselItem.name, TmCarouselItem);
};

export default TmCarouselItem;
