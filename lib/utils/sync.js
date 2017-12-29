'use strict';

exports.__esModule = true;
var SYNC_HOOK_PROP = '$v-sync';

/**
 * v-sync directive
 *
 * Usage:
 *  v-sync:component-prop="context prop name"
 *
 * If your want to sync component's prop "visible" to context prop "myVisible", use like this:
 *  v-sync:visible="myVisible"
 */
exports.default = {
  bind: function bind(el, binding, vnode) {
    var context = vnode.context;
    var component = vnode.child;
    var expression = binding.expression;
    var prop = binding.arg;

    if (!expression || !prop) {
      console.warn('v-sync should specify arg & expression, for example: v-sync:visible="myVisible"');
      return;
    }

    if (!component || !component.$watch) {
      console.warn('v-sync is only available on Vue Component');
      return;
    }

    var unwatchContext = context.$watch(expression, function (val) {
      component[prop] = val;
    });

    var unwatchComponent = component.$watch(prop, function (val) {
      context[expression] = val;
    });

    Object.defineProperty(component, SYNC_HOOK_PROP, {
      value: {
        unwatchContext: unwatchContext,
        unwatchComponent: unwatchComponent
      },
      enumerable: false
    });
  },
  unbind: function unbind(el, binding, vnode) {
    var component = vnode.child;
    if (component && component[SYNC_HOOK_PROP]) {
      var _component$SYNC_HOOK_ = component[SYNC_HOOK_PROP],
          unwatchContext = _component$SYNC_HOOK_.unwatchContext,
          unwatchComponent = _component$SYNC_HOOK_.unwatchComponent;

      unwatchContext && unwatchContext();
      unwatchComponent && unwatchComponent();
    }
  }
};