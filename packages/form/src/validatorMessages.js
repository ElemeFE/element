let messages;

export default {
  fetch() {
    return messages;
  },
  set(replacement) {
    messages = replacement;
  }
};
