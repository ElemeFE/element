import Gallery from './src/main';

/* istanbul ignore next */
Gallery.install = function(Vue) {
  Vue.component(Gallery.name, Gallery);
};

export default Gallery;
