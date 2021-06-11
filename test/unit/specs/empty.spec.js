import { createVue, createTest, destroyVM, waitImmediate } from '../util';
import Empty from 'packages/empty';

const AXIOM = 'Rem is the best girl';

describe('Empty', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('render test', () => {
    vm = createVue({
      template: '<el-empty>{{ AXIOM }}</el-empty>',
      data() {
        return {
          AXIOM
        };
      }
    }, true);
    expect(vm.$el.querySelector('.el-empty__image')).to.exist;
    expect(vm.$el.querySelector('.el-empty__description')).to.exist;
    expect(vm.$el.querySelector('.el-empty__bottom')).to.exist;
  });

  it('should render image props', () => {
    vm = createTest(Empty, {
      image: AXIOM
    }, true);
    expect(vm.$el.querySelector('.el-empty__image img')).to.exist;
  });

  it('should render imageSize props', async() => {
    vm = createVue({
      template: '<el-empty :image-size="imageSize"></el-empty>',
      data() {
        return {
          imageSize: 500
        };
      }
    }, true);
    expect(vm.$el.querySelector('.el-empty__image').getAttribute('style')).to.contain('width: 500px');
    vm.imageSize = 200;
    await waitImmediate();
    expect(vm.$el.querySelector('.el-empty__image').getAttribute('style')).to.contain('width: 200px');
  });

  it('should render description props', () => {
    vm = createTest(Empty, {
      description: AXIOM
    }, true);
    expect(vm.$el.querySelector('.el-empty__description').innerText).to.equal(AXIOM);
  });

  it('should render image slots', () => {
    vm = createVue({
      template: '<el-empty><template slot="image">{{AXIOM}}</template></el-empty>',
      data() {
        return {
          AXIOM
        };
      }
    }, true);
    expect(vm.$el.querySelector('.el-empty__image').innerText).to.equal(AXIOM);
  });

  it('should render description slots', () => {
    vm = createVue({
      template: '<el-empty><template slot="description">{{AXIOM}}</template></el-empty>',
      data() {
        return {
          AXIOM
        };
      }
    }, true);
    expect(vm.$el.querySelector('.el-empty__description').innerText).to.equal(AXIOM);
  });

  it('should render default slots', () => {
    vm = createVue({
      template: '<el-empty>{{AXIOM}}</el-empty>',
      data() {
        return {
          AXIOM
        };
      }
    }, true);
    expect(vm.$el.querySelector('.el-empty__bottom').innerText).to.equal(AXIOM);
  });
});
