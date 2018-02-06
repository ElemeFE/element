import TmAutocomplete from './src/autocomplete';

/* istanbul ignore next */
TmAutocomplete.install = function(Vue) {
  Vue.component(TmAutocomplete.name, TmAutocomplete);
};

export default TmAutocomplete;
