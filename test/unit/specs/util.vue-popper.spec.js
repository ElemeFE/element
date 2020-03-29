import VuePopper from 'element-ui/src/utils/vue-popper';
import { createTest, wait, destroyVM } from '../util';

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
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('set popper not reference', () => {
    vm = createTest(CleanPopper, {
      popper: document.createElement('div')
    });
    vm.createPopper();
    expect(vm.popperElm).to.exist;
    expect(vm.referenceElm).to.not.exist;
    expect(vm.popperJS).to.not.exist;
  });

  it('set reference not popper', () => {
    vm = createTest(CleanPopper, {
      reference: document.createElement('div')
    });
    vm.createPopper();
    expect(vm.referenceElm).to.exist;
    expect(vm.popperElm).to.not.exist;
    expect(vm.popperJS).to.not.exist;
  });

  it('set reference by slot', () => {
    vm = createTest(CleanPopper);
    vm.$slots['reference'] = [{
      elm: document.createElement('div')
    }];
    vm.createPopper();
    expect(vm.referenceElm).to.exist;
    expect(vm.popperElm).to.not.exist;
    expect(vm.popperJS).to.not.exist;
  });

  it('createPopper', async() => {
    vm = createTest(Popper, { placement: 'top' }, true);
    vm.createPopper();
    await wait(10);
    expect(vm.popperElm.getAttribute('x-placement')).to.equal('top');
  });

  it('destroy popper when calling createPopper twice', () => {
    vm = createTest(Popper);
    vm.createPopper();
    const popperJS = vm.popperJS;

    expect(vm.popperJS).to.exist;
    expect(vm.popperJS).to.equal(popperJS);
    vm.createPopper();
    expect(vm.popperJS).to.not.equal(popperJS);
  });

  it('updatePopper', () => {
    vm = createTest(Popper);
    vm.updatePopper();
    const popperJS = vm.popperJS;

    expect(vm.popperJS).to.exist;
    vm.updatePopper();
    expect(vm.popperJS).to.equal(popperJS);
  });

  it('doDestroy', () => {
    vm = createTest(Popper, { placement: 'top' });
    vm.createPopper();
    expect(vm.popperElm.getAttribute('x-placement')).to.equal('top');
    vm.doDestroy();
    expect(vm.popperJS).to.not.exist;
  });

  it('destroyPopper', () => {
    vm = createTest(Popper);
    const vm2 = createTest(Popper);

    vm.createPopper();
    expect(() => vm.destroyPopper()).to.not.throw();
    expect(() => vm2.destroyPopper()).to.not.throw();
    destroyVM(vm2);
  });

  it('placement', () => {
    vm = createTest(Popper, { placement: 'bottom-start' });
    const vm2 = createTest(Popper, { placement: 'bottom-abc' });

    vm.createPopper();
    vm2.createPopper();
    expect(vm.popperElm.getAttribute('x-placement')).to.equal('bottom-start');
    expect(vm2.popperJS).to.not.exist;
    destroyVM(vm2);
  });

  it('display arrow', () => {
    vm = createTest(Popper, {
      visibleArrow: true
    });

    vm.createPopper();
    expect(vm.popperElm.querySelector('div[x-arrow]')).to.exist;
  });

  it('update showPopper', async() => {
    vm = createTest(Popper);
    expect(vm.popperJS).to.not.exist;
    vm.showPopper = true;
    await wait(50);
    expect(vm.popperJS).to.exist;
    vm.showPopper = false;
    await wait(50);
    expect(vm.popperJS).to.exist;
  });

  it('resetTransformOrigin', async() => {
    vm = createTest(Popper, {
      placement: 'left'
    });
    vm.createPopper();
    await wait(10);
    expect(vm.popperElm.style.transformOrigin).to.include('left center');
  });

  it('appendArrow', () => {
    vm = createTest(Popper, {
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
    vm = createTest(CleanPopper, {
      reference: document.createElement('div'),
      visibleArrow: true,
      popper
    });
    expect(vm.appended).to.be.undefined;
    vm.createPopper();
    expect(vm.popperElm.querySelector('[x-arrow][_v-110]')).to.exist;
  });

  it('appendToBody set false', () => {
    vm = createTest(Popper, {
      appendToBody: false
    });
    vm.createPopper();
    expect(document.body.contains(vm.popperElm)).to.false;
  });

  it('destroy', () => {
    vm = createTest(Popper, true);

    vm.createPopper();
    expect(document.body.contains(vm.popperElm)).to.true;
    vm.$destroy();
    expect(document.body.contains(vm.popperElm)).to.false;
  });
});
