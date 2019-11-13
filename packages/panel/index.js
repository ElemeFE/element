import Panel from './src/main';

/* istanbul ignore next */
Panel.install = function(Vue) {
  Vue.component(Panel.name, Panel);
};

export default Panel;
