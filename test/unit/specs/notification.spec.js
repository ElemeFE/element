import { createVue, triggerEvent } from '../util';

describe('Notification', () => {
  it('automatically close', done => {
    const vm = createVue({
      template: `
      <div></div>
    `
    }, true);
    vm.$notify({
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
    const vm = createVue({
      template: `
      <div></div>
    `
    }, true);
    vm.$notify({
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
    const vm = createVue({
      template: `
      <div></div>
    `
    }, true);
    vm.$notify({
      message: '狮鹫'
    });
    expect(document.querySelector('.el-notification')).to.exist;
  });

  it('invoke with type', () => {
    const vm = createVue({
      template: `
      <div></div>
    `
    }, true);
    vm.$notify.success('太阳之子');
    expect(document.querySelector('.el-notification')).to.exist;
  });

  it('reset timer', done => {
    const vm = createVue({
      template: `
      <div></div>
    `
    }, true);
    vm.$notify({
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
