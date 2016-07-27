var ElSelect = require('./src/select');

ElSelect.install = function(Vue) {
  Vue.component(ElSelect.name, ElSelect);
};

module.exports = ElSelect;
