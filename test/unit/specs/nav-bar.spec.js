import { createVue, destroyVM } from '../util';

describe('NavBar', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <tm-nav-bar></tm-nav-bar>
      `
    }, true);
    expect(vm).to.exist;
  });

  it('slot works correctly', () => {
    vm = createVue({
      template: `
        <tm-nav-bar><div slot="right">test2</div><div slot="left">test3</div></tm-nav-bar>
      `
    }, true);
    expect(vm.$el.querySelector('.tm-nav-bar__right').textContent.includes('test2')).to.be.true;
    expect(vm.$el.querySelector('.tm-nav-bar__left').textContent.includes('test3')).to.be.true;
  });
});
