import Utils from '../aria-utils';
import SubMenu from './aria-submenu';

const MenuItem = function(domNode) {
  this.domNode = domNode;
  this.submenu = null;
  this.init();
};

MenuItem.prototype.init = function() {
  this.domNode.setAttribute('tabindex', '0');
  let menuChild = this.domNode.querySelector('.el-menu');
  if (menuChild) {
    this.submenu = new SubMenu(this, menuChild);
  }
  this.addListeners();
};

MenuItem.prototype.addListeners = function() {
  const keys = Utils.keys;
  this.domNode.addEventListener('keydown', event => {
    let prevDef = false;
    switch (event.keyCode) {
      case keys.down:
        Utils.triggerEvent(event.currentTarget, 'mouseenter');
        this.submenu && this.submenu.gotoSubIndex(0);
        prevDef = true;
        break;
      case keys.up:
        Utils.triggerEvent(event.currentTarget, 'mouseenter');
        this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1);
        prevDef = true;
        break;
      case keys.tab:
        Utils.triggerEvent(event.currentTarget, 'mouseleave');
        break;
      case keys.enter:
      case keys.space:
        prevDef = true;
        event.currentTarget.click();
        break;
    }
    if (prevDef) {
      event.preventDefault();
    }
  });
};

export default MenuItem;
