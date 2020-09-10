import { once, on } from 'element-ui/src/utils/dom';

function getRepeatDuration(bindingArg, vnode, defaultDuration) {
  let duration = defaultDuration;
  if (bindingArg) {
    let arg = bindingArg;
    const dynamicArgMatch = typeof arg === 'string' ? /^\[(.*)\]$/.exec(arg) : null;
    if (dynamicArgMatch) {
      arg = vnode.context[dynamicArgMatch[1]];
    }
    duration = typeof arg === 'string' ? parseInt(arg, 10) : arg;
    if (isNaN(duration)) {
      console.warn(`Argument '${bindingArg}' could not be parsed as an integer.`);
      duration = 100;
    }
  }
  return duration;
}

export default {
  bind(el, binding, vnode) {
    let interval = null;
    let startTime;
    let duration = getRepeatDuration(binding.arg, vnode, 100);
    const handler = () => vnode.context[binding.expression].apply();
    const clear = () => {
      if (Date.now() - startTime < duration) {
        handler();
      }
      clearInterval(interval);
      interval = null;
    };

    on(el, 'mousedown', (e) => {
      if (e.button !== 0) return;
      startTime = Date.now();
      once(document, 'mouseup', clear);
      clearInterval(interval);
      interval = setInterval(handler, duration);
    });
  }
};
