import Vue from 'vue';
import Main from './main.vue';
import {PopupManager} from 'element-ui/src/utils/popup';
import {isVNode} from 'element-ui/src/utils/vdom';

let MessageConstructor = Vue.extend(Main);

let instance;
let instances = [];
let seed = 1;
// $message({})
const Message = function(options) {
  if (Vue.prototype.$isServer) return;
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  let userOnClose = options.onClose;
  let id = 'message_' + seed++;
  // 重写onClose函数，组件调用this.close()回调到这里
  options.onClose = function() {
    // 执行关闭函数，userOnClose为外部传递进来的
    Message.close(id, userOnClose);
  };
  // 构造组件实例，合并组件data
  instance = new MessageConstructor({
    data: options
  });
  // 组件唯一id
  instance.id = id;
  // 看options.message是不是传入的vnode对象
  if (isVNode(instance.message)) {
    // 把slot替换成对应的vnode渲染的html
    instance.$slots.default = [instance.message];
    // 销毁对象，垃圾回收
    instance.message = null;
  }
  // 挂载组件
  instance.$mount();
  document.body.appendChild(instance.$el);
  let verticalOffset = options.offset || 20;
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16;
  });
  instance.verticalOffset = verticalOffset;
  instance.visible = true;
  // 始终大于popup的z-index
  instance.$el.style.zIndex = PopupManager.nextZIndex();
  // 上传到数组
  instances.push(instance);
  return instance;
};
// $message.success({}) ...
['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return Message(options);
  };
});

// 关闭对应id的message
Message.close = function(id, userOnClose) {
  let len = instances.length;
  let index = -1;
  let removedHeight;
  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      // 获取该message需要移除的高度
      removedHeight = instances[i].$el.offsetHeight;
      index = i;
      // 外部传入的onClose函数，调用参数为对应的message实例
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      // 从数组中删除该实例
      instances.splice(i, 1);
      break;
    }
  }
  //  如果数组 <= 1，没有对应id， 或者 index > 数组的长度
  if (len <= 1 || index === -1 || index > instances.length - 1) return;
  for (let i = index; i < len - 1; i++) {
    let dom = instances[i].$el;
    // 消失的那个message后都网上移
    dom.style['top'] =
      parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px';
  }
};

Message.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

export default Message;
