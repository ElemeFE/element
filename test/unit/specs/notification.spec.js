import { triggerEvent } from '../util';
import Notification from 'packages/notification';

describe('Notification', () => {
  afterEach(() => {
    const el = document.querySelector('.el-notification');
    if (!el) return;
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
    if (el.__vue__) {
      el.__vue__.$destroy();
    }
  });

  it('automatically close', done => {
    Notification({
      message: '玻璃蜡烛',
      duration: 500
    });
    expect(document.querySelector('.el-notification')).to.exist;
    setTimeout(() => {
      expect(document.querySelector('.el-notification')).to.not.exist;
      done();
    }, 1000);
  });

  it('manually close', done => {
    Notification({
      message: '苍白母马'
    });
    setTimeout(() => {
      document.querySelector('.el-notification__closeBtn').click();
      setTimeout(() => {
        expect(document.querySelector('.el-notification')).to.not.exist;
        done();
      }, 500);
    }, 500);
  });

  it('create', () => {
    Notification({
      title: '狮子',
      message: '狮鹫',
      duration: 0
    });
    const group = document.querySelector('.el-notification__group');
    const title = group.querySelector('span');
    const message = group.querySelector('p');
    expect(document.querySelector('.el-notification')).to.exist;
    expect(title.textContent).to.equal('狮子');
    expect(message.textContent).to.equal('狮鹫');
  });

  it('invoke with type', () => {
    Notification.success('太阳之子');
    expect(document.querySelector('.el-notification').__vue__.type).to.equal('success');
  });

  it('reset timer', done => {
    Notification({
      message: '芳香总管',
      duration: 1000
    });
    setTimeout(() => {
      triggerEvent(document.querySelector('.el-notification'), 'mouseenter');
      setTimeout(() => {
        triggerEvent(document.querySelector('.el-notification'), 'mouseleave');
        expect(document.querySelector('.el-notification')).to.exist;
        done();
      }, 700);
    }, 500);
  });
});
