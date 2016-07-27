const ElProgress = require('./src/progress');

ElProgress.install = function(Vue) {
  Vue.component(ElProgress.name, ElProgress);
};

module.exports = ElProgress;
