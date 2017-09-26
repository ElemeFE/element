import Utils from '../aria-utils';
import SubMenu from './aria-submenu';

var menuItem = function(domNode) {
  this.domNode = domNode;
  this.submenu = null;
  this.init();
};

menuItem.prototype.init = function() {
  this.domNode.setAttribute('tabindex', '0');
  let menuChild = this.domNode.querySelector('.el-menu');
  if (menuChild) {
    this.submenu = new SubMenu(this, menuChild);
  }
  this.addListeners();
};

menuItem.prototype.addListeners = function() {
  const keys = Utils.keys;
  this.domNode.addEventListener('keydown', event => {
    var prevdef = false;
    switch (event.keyCode) {
      case keys.down:
        Utils.triggerEvent(event.currentTarget, 'mouseenter');
        this.submenu.gotoSubIndex(0);
        prevdef = true;
        break;
      case keys.up:
        Utils.triggerEvent(event.currentTarget, 'mouseenter');
        this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1);
        prevdef = true;
        break;
      case keys.tab:
        Utils.triggerEvent(event.currentTarget, 'mouseleave');
        break;
      case keys.enter:
      case keys.space:
        prevdef = true;
        event.currentTarget.click();
        break;
    }
    if (prevdef) {
      event.preventDefault();
    }
  });
};

export default menuItem;
