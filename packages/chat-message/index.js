import ChatMessage from './src/chat-message';

/* istanbul ignore next */
ChatMessage.install = function(Vue) {
  Vue.component(ChatMessage.name, ChatMessage);
};

export default ChatMessage;
