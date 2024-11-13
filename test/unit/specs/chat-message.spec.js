import { createTest, destroyVM } from '../util';
import ChatMessage from 'packages/chat-message';

const testProps = {
  text: 'Test text',
  name: 'Evan You'
};

describe('ChatMessage', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(ChatMessage, {
      ...testProps,
      type: 'primary'
    }, true);
    let messageElm = vm.$el;
    expect(messageElm.classList.contains('el-chat-message--primary')).to.be.true;
  });

  it('size medium', () => {
    vm = createTest(ChatMessage, {
      ...testProps,
      size: 'medium'
    }, true);
    let messageElm = vm.$el;
    expect(messageElm.classList.contains('el-chat-message--medium')).to.be.true;
  });

  it('type primary', () => {
    vm = createTest(ChatMessage, {
      ...testProps,
      type: 'primary'
    }, true);
    let messageElm = vm.$el;
    expect(messageElm.classList.contains('el-chat-message--primary')).to.be.true;
  });

  it('position right', () => {
    vm = createTest(ChatMessage, {
      ...testProps,
      position: 'right'
    }, true);
    let messageElm = vm.$el;
    expect(messageElm.classList.contains('is-right')).to.be.true;
  });
});

