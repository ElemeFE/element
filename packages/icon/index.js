const ElIcon = require('./src/icon.vue');

/* istanbul ignore next */
ElIcon.install = function(Vue) {
  Vue.component(ElIcon.name, ElIcon);
};

module.exports = ElIcon;
