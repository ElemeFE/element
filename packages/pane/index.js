import Pane from '../splitpanes/src/pane';

/* istanbul ignore next */
Pane.install = function(Vue) {
  Vue.component(Pane.name, Pane);
};

export default Pane;
