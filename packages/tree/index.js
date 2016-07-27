const Tree = require('./src/tree.vue');

Tree.install = function(Vue) {
  Vue.component(Tree.name, Tree);
};

module.exports = Tree;
