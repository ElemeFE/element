const Upload = require('./src/upload');

Upload.install = function(Vue) {
  Vue.component(Upload.name, Upload);
};

module.exports = Upload;
