const Upload = require('./src');

/* istanbul ignore next */
Upload.install = function(Vue) {
  Vue.component(Upload.name, Upload);
};

module.exports = Upload;
