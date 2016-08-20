const Upload = require('./src/index');

Upload.install = function(Vue) {
  Vue.component(Upload.name, Upload);
};

module.exports = Upload;
