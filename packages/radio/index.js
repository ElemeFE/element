const ElRadio = require('./src/radio');

ElRadio.install = function(Vue) {
  Vue.component('el-radio', ElRadio);
};

module.exports = ElRadio;

