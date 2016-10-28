import { createTest, createVue, destroyVM } from '../util';
import Button from 'packages/button';

describe('Button', () => {
  it('create', () => {
    const vm = createTest(Button, {
      type: 'primary'
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('el-button--primary')).to.be.true;
    destroyVM(vm);
  });
  it('icon', () => {
    const vm = createTest(Button, {
      icon: 'search'
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.querySelector('.el-icon-search')).to.be.ok;
    destroyVM(vm);
  });
  it('nativeType', () => {
    const vm = createTest(Button, {
      nativeType: 'submit'
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.getAttribute('type')).to.be.equal('submit');
    destroyVM(vm);
  });
  it('loading', () => {
    const vm = createTest(Button, {
      loading: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-loading')).to.be.true;
    expect(buttonElm.querySelector('.el-icon-loading')).to.be.ok;
    destroyVM(vm);
  });
  it('disabled', () => {
    const vm = createTest(Button, {
      disabled: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-disabled')).to.be.true;
    destroyVM(vm);
  });
  it('size', () => {
    const vm = createTest(Button, {
      size: 'large'
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('el-button--large')).to.be.true;
    destroyVM(vm);
  });
  it('plain', () => {
    const vm = createTest(Button, {
      plain: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-plain')).to.be.true;
    destroyVM(vm);
  });
  it('click', done => {
    let result;
    const vm = createVue({
      template: `
        <el-button @click="handleClick"></el-button>
      `,
      methods: {
        handleClick(evt) {
          result = evt;
        }
      }
    }, true);
    vm.$el.click();

    setTimeout(_ => {
      expect(result).to.exist;
      destroyVM(vm);
      done();
    }, 20);
  });
});
