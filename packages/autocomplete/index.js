const ElAutocomplete = require('./src/autocomplete');

/* istanbul ignore next */
ElAutocomplete.install = function(Vue) {
  Vue.component(ElAutocomplete.name, ElAutocomplete);
};

module.exports = ElAutocomplete;
