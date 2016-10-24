const SYNC_HOOK_PROP = '$v-sync';

/**
 * v-sync directive
 *
 * Usage:
 *  v-sync:component-prop="context prop name"
 *
 * If your want to sync component's prop "visible" to context prop "myVisible", use like this:
 *  v-sync:visible="myVisible"
 */
export default {
  bind(el, binding, vnode) {
    const context = vnode.context;
    const component = vnode.child;
    const expression = binding.expression;
    const prop = binding.arg;

    if (!expression || !prop) {
      console.warn('v-sync should specify arg & expression, for example: v-sync:visible="myVisible"');
      return;
    }

    if (!component || !component.$watch) {
      console.warn('v-sync is only available on Vue Component');
      return;
    }

    const unwatchContext = context.$watch(expression, (val) => {
      component[prop] = val;
    });

    const unwatchComponent = component.$watch(prop, (val) => {
      context[expression] = val;
    });

    Object.defineProperty(component, SYNC_HOOK_PROP, {
      value: {
        unwatchContext,
        unwatchComponent
      },
      enumerable: false
    });
  },

  unbind(el, binding, vnode) {
    const component = vnode.child;
    if (component && component[SYNC_HOOK_PROP]) {
      const { unwatchContext, unwatchComponent } = component[SYNC_HOOK_PROP];
      unwatchContext && unwatchContext();
      unwatchComponent && unwatchComponent();
    }
  }
};
