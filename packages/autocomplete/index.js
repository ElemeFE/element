const ElAutocomplete = require('./src/autocomplete');

ElAutocomplete.install = function(Vue) {
  Vue.component(ElAutocomplete.name, ElAutocomplete);
};

module.exports = ElAutocomplete;
