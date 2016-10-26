import VuePopup from 'vue-popup';
import { createTest, destroyVM } from '../util';

const Popup = Object.assign({}, VuePopup, {
  render(h) {
    return h('div');
  },
  created() {
    this.rendered = true;
  }
});

describe('Mixin:vue-popup', () => {
  let vm;
  before(() => {
    const modals = document.querySelectorAll('.v-modal');
    [].forEach.call(modals, modal => {
      modal &&
      modal.parentNode &&
      modal.parentNode.removeChild(modal);
    });
  });
  afterEach(() => {
    vm.close && vm.close();
    destroyVM(vm);
    const modal = document.querySelector('.v-modal');
    modal &&
    modal.parentNode &&
    modal.parentNode.removeChild(modal);
  });

  it('show modal', () => {
    vm = createTest(Popup);
    vm.open();
    expect(document.querySelector('.v-modal')).to.not.exist;
    vm.close();
    destroyVM(vm);
    vm = createTest(Popup, { modal: true });
    vm.open();
    expect(document.querySelector('.v-modal')).to.exist;
  });

  it('custom modal class', () => {
    vm = createTest(Popup, { modal: true, modalClass: 'custom-class' });
    vm.open();
    expect(document.querySelector('.v-modal').classList.contains('custom-class')).to.true;
  });

  it('lock scroll', done => {
    vm = createTest(Popup, { modal: true });
    vm.open();
    expect(document.body.style.overflow).to.equal('hidden');
    vm.close();
    destroyVM(vm);
    setTimeout(() => {
      vm = createTest(Popup, { modal: true, lockScroll: false });
      vm.open();
      expect(document.body.style.overflow).to.not.equal('hidden');
      done();
    }, 200);
  });

  it('z-index should increase', () => {
    vm = createTest(Popup, { modal: true });
    vm.open();
    const zIndex1 = document.querySelector('.v-modal').style.zIndex;
    vm.close();
    destroyVM(vm);
    vm = createTest(Popup, { modal: true });
    vm.open();
    const zIndex2 = document.querySelector('.v-modal').style.zIndex;
    expect(zIndex2 > zIndex1).to.true;
  });
});
