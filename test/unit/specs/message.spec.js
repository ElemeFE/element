import { triggerEvent } from '../util';
import Message from 'packages/message';

describe('Message', () => {
  afterEach(() => {
    const el = document.querySelector('.el-message');
    if (!el) return;
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
    if (el.__vue__) {
      el.__vue__.$destroy();
    }
  });

  it('automatically close', done => {
    Message({
      message: '灰风',
      duration: 500
    });
    const message = document.querySelector('.el-message__group').childNodes[0];
    expect(document.querySelector('.el-message')).to.exist;
    expect(message.textContent).to.equal('灰风');
    setTimeout(() => {
      expect(document.querySelector('.el-message')).to.not.exist;
      done();
    }, 1000);
  });

  it('manually close', done => {
    Message({
      message: '夏天',
      showClose: true
    });
    setTimeout(() => {
      document.querySelector('.el-message__closeBtn').click();
      setTimeout(() => {
        expect(document.querySelector('.el-message')).to.not.exist;
        done();
      }, 500);
    }, 500);
  });

  it('create', () => {
    Message('娜梅莉亚');
    expect(document.querySelector('.el-message')).to.exist;
  });

  it('invoke with type', () => {
    Message.success('毛毛狗');
    expect(document.querySelector('.el-message').__vue__.type).to.equal('success');
  });

  it('reset timer', done => {
    Message({
      message: '白灵',
      duration: 1000
    });
    setTimeout(() => {
      triggerEvent(document.querySelector('.el-message'), 'mouseenter');
      setTimeout(() => {
        expect(document.querySelector('.el-message')).to.exist;
        done();
      }, 700);
    }, 500);
  });
});
