import Utils from '../aria-utils';

const SubMenu = function(parent, domNode) {
  this.domNode = domNode;
  this.parent = parent;
  this.subMenuItems = [];
  this.subIndex = 0;
  this.init();
};

SubMenu.prototype.init = function() {
  this.subMenuItems = this.domNode.querySelectorAll('li');
  this.addListeners();
};

SubMenu.prototype.gotoSubIndex = function(idx) {
  if (idx === this.subMenuItems.length) {
    idx = 0;
  } else if (idx < 0) {
    idx = this.subMenuItems.length - 1;
  }
  this.subMenuItems[idx].focus();
  this.subIndex = idx;
};

SubMenu.prototype.addListeners = function() {
  const keys = Utils.keys;
  const parentNode = this.parent.domNode;
  Array.prototype.forEach.call(this.subMenuItems, el => {
    el.addEventListener('keydown', event => {
      let prevDef = false;
      switch (event.keyCode) {
        case keys.down:
          this.gotoSubIndex(this.subIndex + 1);
          prevDef = true;
          break;
        case keys.up:
          this.gotoSubIndex(this.subIndex - 1);
          prevDef = true;
          break;
        case keys.tab:
          Utils.triggerEvent(parentNode, 'mouseleave');
          break;
        case keys.enter:
        case keys.space:
          prevDef = true;
          event.currentTarget.click();
          break;
      }
      if (prevDef) {
        event.preventDefault();
        event.stopPropagation();
      }
      return false;
    });
  });
};

export default SubMenu;
