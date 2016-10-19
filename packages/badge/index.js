const Badge = require('./src/main');

/* istanbul ignore next */
Badge.install = function(Vue) {
  Vue.component(Badge.name, Badge);
};

module.exports = Badge;
