import VuePopper from 'element-ui/src/utils/vue-popper';
import { createTest, wait } from '../util';

const Popper = Object.assign({}, VuePopper, {
  template: `
  <div style="padding: 100px; height: 100px; width: 100px;">
    <div ref="reference"></div>
    <div ref="popper"></div>
  </div>
  `
});

const CleanPopper = Object.assign({}, VuePopper, {
  render(h) {
    return h('div');
  }
});

describe('Utils:VuePopper', () => {
  function describeVm(vm) {
    vm.doDestroy();
  }

  it('set popper not reference', () => {
    const vm = createTest(CleanPopper, {
      popper: document.createElement('div')
    });
    vm.createPopper();
    expect(vm.popperElm).to.exist;
    expect(vm.referenceElm).to.not.exist;
    expect(vm.popperJS).to.not.exist;
  });

  it('set reference not popper', () => {
    const vm = createTest(CleanPopper, {
      reference: document.createElement('div')
    });
    vm.createPopper();
    expect(vm.referenceElm).to.exist;
    expect(vm.popperElm).to.not.exist;
    expect(vm.popperJS).to.not.exist;
  });

  it('set reference by slot', () => {
    const vm = createTest(CleanPopper);
    vm.$slots['reference'] = [{
      elm: document.createElement('div')
    }];
    vm.createPopper();
    expect(vm.referenceElm).to.exist;
    expect(vm.popperElm).to.not.exist;
    expect(vm.popperJS).to.not.exist;
  });

  it('createPopper', async() => {
    const vm = createTest(Popper, { placement: 'top' }, true);
    vm.createPopper();
    await wait(10);
    expect(vm.popperElm.getAttribute('x-placement')).to.equal('top');
    describeVm(vm);
  });

  it('destroy popper when calling createPopper twice', () => {
    const vm = createTest(Popper);
    vm.createPopper();
    const popperJS = vm.popperJS;

    expect(vm.popperJS).to.exist;
    expect(vm.popperJS).to.equal(popperJS);
    vm.createPopper();
    expect(vm.popperJS).to.not.equal(popperJS);
  });

  it('updatePopper', () => {
    const vm = createTest(Popper);
    vm.updatePopper();
    const popperJS = vm.popperJS;

    expect(vm.popperJS).to.exist;
    vm.updatePopper();
    expect(vm.popperJS).to.equal(popperJS);
  });

  it('doDestroy', () => {
    const vm = createTest(Popper, { placement: 'top' });
    vm.createPopper();
    expect(vm.popperElm.getAttribute('x-placement')).to.equal('top');
    vm.doDestroy();
    expect(vm.popperJS).to.not.exist;
  });

  it('destroyPopper', () => {
    const vm = createTest(Popper);
    const vm2 = createTest(Popper);

    vm.createPopper();
    expect(() => vm.destroyPopper()).to.not.throw();
    expect(() => vm2.destroyPopper()).to.not.throw();
  });

  it('placement', () => {
    const vm = createTest(Popper, { placement: 'bottom-start' });
    const vm2 = createTest(Popper, { placement: 'bottom-abc' });

    vm.createPopper();
    vm2.createPopper();
    expect(vm.popperElm.getAttribute('x-placement')).to.equal('bottom-start');
    expect(vm2.popperJS).to.not.exist;
  });

  it('display arrow', () => {
    const vm = createTest(Popper, {
      visibleArrow: true
    });

    vm.createPopper();
    expect(vm.popperElm.querySelector('div[x-arrow]')).to.exist;
  });

  it('update showPopper', async() => {
    const vm = createTest(Popper);
    expect(vm.popperJS).to.not.exist;
    vm.showPopper = true;
    await wait(50);
    expect(vm.popperJS).to.exist;
    vm.showPopper = false;
    await wait(50);
    expect(vm.popperJS).to.exist;
  });

  it('resetTransformOrigin', async() => {
    const vm = createTest(Popper, {
      placement: 'left'
    });
    vm.createPopper();
    await wait(10);
    expect(vm.popperElm.style.transformOrigin).to.include('left center');
    describeVm(vm);
  });

  it('appendArrow', () => {
    const vm = createTest(Popper, {
      visibleArrow: true
    });
    expect(vm.appended).to.be.undefined;
    vm.createPopper();
    expect(vm.appended).to.true;
    vm.appendArrow();
    expect(vm.popperElm.querySelector('[x-arrow]')).to.exist;
    expect(vm.appended).to.true;
  });

  it('appendArrow: add scoped', () => {
    const popper = document.createElement('div');
    popper.setAttribute('_v-110', true);
    const vm = createTest(CleanPopper, {
      reference: document.createElement('div'),
      visibleArrow: true,
      popper
    });
    expect(vm.appended).to.be.undefined;
    vm.createPopper();
    expect(vm.popperElm.querySelector('[x-arrow][_v-110]')).to.exist;
  });

  it('appendToBody set false', () => {
    const vm = createTest(Popper, {
      appendToBody: false
    });
    vm.createPopper();
    expect(document.body.contains(vm.popperElm)).to.false;
  });

  it('destroy', () => {
    const vm = createTest(Popper, true);

    vm.createPopper();
    expect(document.body.contains(vm.popperElm)).to.true;
    vm.$destroy();
    expect(document.body.contains(vm.popperElm)).to.false;
  });
});
