import { createVue } from '../util';

describe('Tag', () => {
  it('create', () => {
    const vm = createVue({
      template: `
      <el-tag></el-tag>
      `
    }, true);
    expect(vm.$el.classList.contains('el-tag')).to.be.true;
    expect(vm.$el.classList.contains('el-tag__close')).to.be.false;
    expect(vm.$el.classList.contains('is-hit')).to.be.false;
    expect(vm.$el.classList.contains('md-fade-center')).to.be.false;
  });

  it('text', () => {
    const vm = createVue({
      template: `
      <el-tag>标签</el-tag>
      `
    }, true);
    expect(vm.$el.textContent.length).to.be.at.least(2);
  });

  it('type', () => {
    const vm = createVue({
      template: `
      <el-tag type="primary"></el-tag>
      `
    }, true);
    expect(vm.$el.classList.contains('el-tag--primary')).to.be.true;
  });

  it('hit', () => {
    const vm = createVue({
      template: `
      <el-tag hit></el-tag>
      `
    }, true);
    expect(vm.$el.classList.contains('is-hit')).to.be.true;
  });

  it('closable', done => {
    const vm = createVue({
      template: `
      <el-tag closable @close="handleClose">关闭标签</el-tag>
      `,
      data() {
        return {
          isClose: false
        };
      },
      methods: {
        handleClose() {
          this.isClose = true;
        }
      }
    }, true);
    var closeBtn = vm.$el.querySelector('.el-tag .el-tag__close');
    expect(closeBtn).to.exist;
    closeBtn.click();
    vm.$nextTick(_ => {
      expect(vm.isClose).to.true;
      done();
    });
  });

  it('closeTransition', () => {
    const vm = createVue({
      template: `
      <el-tag closable closeTransition></el-tag>
      `
    }, true);
    expect(vm.$el.classList.contains('md-fade-center')).to.be.false;
  });
});
