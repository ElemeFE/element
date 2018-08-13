
import Vue from 'vue';
import Main from './main.vue';
import { PopupManager } from 'element-ui/src/utils/popup';

const ImagePreviewConstructor = Vue.extend(Main);
let instance;

const ImagePreview = function(options) {
  if (Vue.prototype.$isServer) return;
  if (!options.url) {
    return console.error("[ImagePreview] missing parameter 'url'");
  }
  if (instance) {
    instance.closePreview();
  }

  instance = new ImagePreviewConstructor({
    data: options
  });
  instance.$mount();
  document.body.appendChild(instance.$el);
  instance.dom = instance.$el;
  instance.dom.style.zIndex = PopupManager.nextZIndex();
  instance.openPreview();

  return instance;
};

export default ImagePreview;
