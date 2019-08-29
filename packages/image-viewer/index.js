import ImageViewer from './src/main';

/* istanbul ignore next */
ImageViewer.install = function(Vue) {
  Vue.component(ImageViewer.name, ImageViewer);
};

export default ImageViewer;
