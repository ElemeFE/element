import { createVue, triggerEvent } from '../util';

describe('Message', () => {
  it('automatically close', done => {
    const vm = createVue({
      template: `
      <div></div>
    `
    }, true);
    vm.$message({
      message: '灰风',
      duration: 500
    });
    expect(document.querySelector('.el-message')).to.exist;
    setTimeout(() => {
      expect(document.querySelector('.el-message')).to.not.exist;
      done();
    }, 1000);
  });

  it('manually close', done => {
    const vm = createVue({
      template: `
      <div></div>
    `
    }, true);
    vm.$message({
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
    const vm = createVue({
      template: `
      <div></div>
    `
    }, true);
    vm.$message('娜梅莉亚');
    expect(document.querySelector('.el-message')).to.exist;
  });

  it('invoke with type', () => {
    const vm = createVue({
      template: `
      <div></div>
    `
    }, true);
    vm.$message.success('毛毛狗');
    expect(document.querySelector('.el-message')).to.exist;
  });

  it('reset timer', done => {
    const vm = createVue({
      template: `
      <div></div>
    `
    }, true);
    vm.$message({
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
