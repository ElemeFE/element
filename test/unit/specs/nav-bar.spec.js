import { createVue, destroyVM } from '../util';

describe('NavBar', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <tm-nav-bar title="TMC agent"></tm-nav-bar>
      `
    }, true);
    expect(vm).to.exist;
  });

  it('title attribute works correctly', () => {
    vm = createVue({
      template: `
        <tm-nav-bar title="test1"></tm-nav-bar>
      `
    }, true);
    expect(vm.$el.querySelector('.tm-nav-bar__title').textContent.includes('test1')).to.be.true;
  });

  it('slot works correctly', () => {
    vm = createVue({
      template: `
        <tm-nav-bar title="test1">test2</tm-nav-bar>
      `
    }, true);
    expect(vm.$el.querySelector('.tm-nav-bar__right').textContent.includes('test2')).to.be.true;
  });
});
