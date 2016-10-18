import VuePopper from 'element-ui/src/utils/vue-popper';
import { createTest } from '../util';

const Popper = Object.assign({}, VuePopper, {
  render(h) {
    return h('div');
  },

  created() {
    this.popperElm = document.createElement('div');
    this.referenceElm = document.createElement('div');
  }
});

describe('Utils:VuePopper', () => {
  it('createPopper', () => {
    const vm = createTest(Popper, { placement: 'top' });
    vm.createPopper();
    expect(vm.popperJS._popper.getAttribute('x-placement')).to.equal('top');
  });

  it('doDestroy', () => {
    const vm = createTest(Popper, { placement: 'top' });
    vm.createPopper();
    expect(vm.popperJS._popper.getAttribute('x-placement')).to.equal('top');
    vm.doDestroy();
    expect(vm.popperJS).to.not.exist;
  });

  it('placement', () => {
    const vm = createTest(Popper, { placement: 'bottom-start' });
    const vm2 = createTest(Popper, { placement: 'bottom-abc' });

    vm.createPopper();
    vm2.createPopper();
    expect(vm.popperJS._popper.getAttribute('x-placement')).to.equal('bottom-start');
    expect(vm2.popperJS).to.not.exist;
  });

  it('display arrow', () => {
    const vm = createTest(Popper, {
      visibleArrow: true
    });

    vm.createPopper();
    expect(vm.popperJS._popper.querySelector('div[x-arrow]')).to.exist;
  });

  it('destroy', () => {
    const vm = createTest(Popper, true);

    vm.createPopper();
    expect(document.body.contains(vm.popperElm)).to.true;
    vm.$destroy();
    expect(document.body.contains(vm.popperElm)).to.false;
  });
});
