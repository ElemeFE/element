const ElRadio = require('./src/radio');

/* istanbul ignore next */
ElRadio.install = function(Vue) {
  Vue.component('el-radio', ElRadio);
};

module.exports = ElRadio;

