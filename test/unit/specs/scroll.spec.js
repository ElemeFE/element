import { createTest, createVue, destroyVM } from '../util';
import Scroll from 'packages/scroll';

describe('Scroll', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Scroll, true);
    expect(vm.$el).to.exist;
    expect(vm.loading).to.be.true;
  });

  it('height', () => {
    vm = createVue({
      template: '<el-scroll :height="300"></el-scroll>',
      data() {
        return {};
      }
    });
    const height = vm.$el.querySelector('.el-scrollbar').style.height;
    expect(height).to.equal('300px');
  });

  it('maxHeight', () => {
    vm = createVue({
      template: '<el-scroll :max-height="300"></el-scroll>',
      data() {
        return {};
      }
    });
    const height = vm.$el.querySelector('.el-scrollbar').style.maxHeight;
    expect(height).to.equal('300px');
  });
});

