import UploadDragger from '../upload/src/upload-dragger';

/* istanbul ignore next */
UploadDragger.install = function(Vue) {
  Vue.component(UploadDragger.name, UploadDragger);
};

export default UploadDragger;
