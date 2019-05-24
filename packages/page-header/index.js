import PageHeader from './src/main';

/* istanbul ignore next */
PageHeader.install = function(Vue) {
  Vue.component(PageHeader.name, PageHeader);
};

export default PageHeader;
