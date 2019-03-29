import TagSelect from './src/main';

/* istanbul ignore next */
TagSelect.install = function(Vue) {
  Vue.component(TagSelect.name, TagSelect);
};

export default TagSelect;
