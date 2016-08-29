import Vue from 'vue';
let MessageConstructor = Vue.extend(require('./main.vue'));

let instance;
let instances = [];
let seed = 1;

var Message = function(options) {
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  let userOnClose = options.onClose;
  let id = 'message_' + seed++;

  options.onClose = function() {
    Message.close(id, userOnClose);
  };

  instance = new MessageConstructor({
    data: options
  });
  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;

  let topDist = 0;
  for (let i = 0, len = instances.length; i < len; i++) {
    topDist += instances[i].$el.offsetHeight + 20;
  }
  topDist += 20;
  instance.top = topDist;
  instances.push(instance);
};

Message.close = function(id, userOnClose) {
  let index;
  let removedHeight;
  for (var i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      index = i;
      removedHeight = instances[i].dom.offsetHeight;
      instances.splice(i, 1);
      break;
    }
  }

  if (len > 1) {
    for (i = index; i < len - 1 ; i++) {
      instances[i].dom.style.top = parseInt(instances[i].dom.style.top, 10) - removedHeight - 20 + 'px';
    }
  }
};

export default Message;
