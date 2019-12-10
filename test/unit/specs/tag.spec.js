import { createTest, createVue, destroyVM } from '../util';
import Tag from 'packages/tag';

describe('Tag', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
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
    vm = createVue({
      template: `
      <el-tag>标签</el-tag>
      `
    }, true);
    expect(vm.$el.textContent.length).to.be.at.least(2);
  });

  it('type', () => {
    vm = createVue({
      template: `
      <el-tag type="primary"></el-tag>
      `
    }, true);
    expect(vm.$el.classList.contains('el-tag--primary')).to.be.true;
  });

  it('hit', () => {
    vm = createVue({
      template: `
      <el-tag hit></el-tag>
      `
    }, true);
    expect(vm.$el.classList.contains('is-hit')).to.be.true;
  });

  it('closable', done => {
    vm = createVue({
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
    vm = createVue({
      template: `
      <el-tag closable closeTransition></el-tag>
      `
    }, true);
    expect(vm.$el.classList.contains('md-fade-center')).to.be.false;
  });

  it('color', () => {
    vm = createVue({
      template: `
      <el-tag ref="tag" color="rgb(0, 0, 0)"></el-tag>
      `
    }, true);
    expect(vm.$el.style.backgroundColor).to.equal('rgb(0, 0, 0)');
  });

  it('click', done => {
    vm = createVue({
      template: `
      <el-tag ref="tag" @click="handleClick">点击标签</el-tag>
      `,
      data() {
        return {
          clicksCount: 0
        };
      },
      methods: {
        handleClick() {
          this.clicksCount = this.clicksCount + 1;
        }
      }
    }, true);

    let tag = vm.$refs.tag;
    tag.$el.click();

    setTimeout(_ => {
      expect(vm.clicksCount).to.be.equal(1);
      done();
    }, 20);
  });

  it('theme', () => {
    vm = createTest(Tag, { effect: 'dark' }, true);
    const el = vm.$el;
    expect(el.className).to.includes('el-tag--dark');
    expect(el.className).to.not.includes('el-tag--light');
    expect(el.className).to.not.includes('el-tag--plain');
  });
});
