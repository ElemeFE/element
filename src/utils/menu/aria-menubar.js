import MenuItem from './aria-menuitem';

var menu = function(domNode) {
  this.domNode = domNode;
  this.init();
};

menu.prototype.init = function() {
  let menuChild = this.domNode.childNodes;
  menuChild.forEach((child) => {
    let menuItem = new MenuItem(child); // eslint-disable-line
  });
};
export default menu;
