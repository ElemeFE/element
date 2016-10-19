var ElSelect = require('./src/select');

/* istanbul ignore next */
ElSelect.install = function(Vue) {
  Vue.component(ElSelect.name, ElSelect);
};

module.exports = ElSelect;
