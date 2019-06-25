import { createVue, destroyVM } from '../util';

describe('Divider', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('content', () => {
    vm = createVue({
      template: `
          <el-divider>我是一条完美分割线！</el-divider>
      `
    });

    expect(vm.$el).to.property('textContent').to.include('我是一条完美分割线！');
  });

  it('direction', () => {
    vm = createVue({
      template: `
          <el-divider direction="vertical">我是一条完美分割线！</el-divider>
      `
    });

    expect(vm.$el.className).to.include('el-divider--vertical');
  });
});
