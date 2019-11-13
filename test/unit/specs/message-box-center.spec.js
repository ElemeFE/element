import MessageBoxCenter from 'packages/message-box-center';

describe('MessageBoxCenter', () => {
  let hasPromise = true;
  before(() => {
    if (!window.Promise) {
      hasPromise = false;
      window.Promise = require('es6-promise').Promise;
    }
  });

  after(() => {
    if (!hasPromise) {
      window.Promise = undefined;
    }
  });

  afterEach(() => {
    const el = document.querySelector('.el-message-box__wrapper');
    if (!el) return;
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
    MessageBoxCenter.close();
  });

  it('create and close', done => {
    MessageBoxCenter.alert('这是一段内容', {
      type: 'success',
      title: '消息'
    });
    setTimeout(() => {
      const msgbox = document.querySelector('.el-message-box__wrapper');
      expect(msgbox.__vue__.$parent.visible).to.true;
      expect(msgbox.querySelector('.el-message-box-center')).to.exist;
      expect(msgbox.querySelector('.el-message-box__title span').textContent).to.equal('消息');
      expect(msgbox.querySelector('.el-message-box__message')
        .querySelector('p').textContent).to.equal('这是一段内容');
      MessageBoxCenter.close();
      expect(msgbox.__vue__.$parent.visible).to.false;
      done();
    }, 300);
  });

  it('customClass', done => {
    MessageBoxCenter.alert('这是一段内容', {
      type: 'success',
      title: '消息',
      customClass: 'test-custom-class'
    });
    setTimeout(() => {
      const msgbox = document.querySelector('.el-message-box__wrapper');
      expect(msgbox.querySelector('.test-custom-class')).to.exist;
      MessageBoxCenter.close();
      expect(msgbox.__vue__.$parent.visible).to.false;
      done();
    }, 300);
  });

  it('confirm', done => {
    MessageBoxCenter.confirm('这是一段内容', {
      type: 'success',
      title: '消息'
    });
    setTimeout(() => {
      const msgbox = document.querySelector('.el-message-box__wrapper');
      expect(msgbox.__vue__.$parent.visible).to.true;
      expect(msgbox.querySelector('.el-message-box-center')).to.exist;
      expect(msgbox.querySelector('.el-message-box__title span').textContent).to.equal('消息');
      expect(msgbox.querySelector('.el-message-box__message')
        .querySelector('p').textContent).to.equal('这是一段内容');
      MessageBoxCenter.close();
      expect(msgbox.__vue__.$parent.visible).to.false;
      done();
    }, 300);
  });
});
