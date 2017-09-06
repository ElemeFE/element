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
    const message = document.querySelector('.el-message__content');
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

  it('custom icon', done => {
    Message({
      message: '夏天',
      iconClass: 'el-icon-close'
    });
    setTimeout(() => {
      const icon = document.querySelector('.el-message i');
      expect(icon.classList.contains('el-icon-close')).to.true;
      done();
    }, 500);
  });

  it('html string', () => {
    Message({
      message: '<strong>夏天</strong>',
      dangerouslyUseHTMLString: true
    });
    const message = document.querySelector('.el-message strong');
    expect(message.textContent).to.equal('夏天');
  });

  it('close all', done => {
    Message({
      message: '夏天',
      duration: 0
    });
    Message({
      message: '淑女',
      duration: 0
    });
    setTimeout(() => {
      Message.closeAll();
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

  it('center', () => {
    Message({
      message: '夏天',
      center: true,
      duration: 0
    });
    expect(document.querySelector('.el-message').classList.contains('is-center')).to.true;
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
