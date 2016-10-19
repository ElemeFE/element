import { createVue } from '../util';

describe('Col', () => {
  it('create', () => {
    const vm = createVue({
      template: `
        <el-col :span="12">
        </el-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('el-col')).to.be.true;
  });
  it('span', () => {
    const vm = createVue({
      template: `
        <el-col :span="12">
        </el-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('el-col-12')).to.be.true;
  });
  it('pull', () => {
    const vm = createVue({
      template: `
        <el-col :span="12" :pull="3">
        </el-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('el-col-pull-3')).to.be.true;
  });
  it('push', () => {
    const vm = createVue({
      template: `
        <el-col :span="12" :push="3">
        </el-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('el-col-push-3')).to.be.true;
  });
});
