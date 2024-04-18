'use strict';

exports.__esModule = true;

var _dom = require('element-ui/lib/utils/dom');

var _util = require('element-ui/lib/utils/util');

exports.default = {
  bind: function bind(el, binding, vnode) {
    var interval = null;
    var startTime = void 0;
    var maxIntervals = (0, _util.isMac)() ? 100 : 200;
    var handler = function handler() {
      return vnode.context[binding.expression].apply();
    };
    var clear = function clear() {
      if (Date.now() - startTime < maxIntervals) {
        handler();
      }
      clearInterval(interval);
      interval = null;
    };

    (0, _dom.on)(el, 'mousedown', function (e) {
      if (e.button !== 0) return;
      startTime = Date.now();
      (0, _dom.once)(document, 'mouseup', clear);
      clearInterval(interval);
      interval = setInterval(handler, maxIntervals);
    });
  }
};