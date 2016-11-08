import ElAutocomplete from './src/autocomplete';

/* istanbul ignore next */
ElAutocomplete.install = function(Vue) {
  Vue.component(ElAutocomplete.name, ElAutocomplete);
};

export default ElAutocomplete;
