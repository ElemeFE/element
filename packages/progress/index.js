const ElProgress = require('./src/progress');

/* istanbul ignore next */
ElProgress.install = function(Vue) {
  Vue.component(ElProgress.name, ElProgress);
};

module.exports = ElProgress;
