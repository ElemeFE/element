import Upload from './src';
import UploadDragger from './src/upload-dragger';

/* istanbul ignore next */
Upload.install = function(Vue) {
  Vue.component(Upload.name, Upload);
  Vue.component(UploadDragger.name, UploadDragger);
};

export default { Upload, UploadDragger };
