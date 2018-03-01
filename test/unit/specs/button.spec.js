import { createTest, createVue, destroyVM } from '../util';
import Button from 'packages/button';

describe('Button', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Button, {
      type: 'primary'
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('tm-button--primary')).to.be.true;
  });
  it('icon', () => {
    vm = createTest(Button, {
      icon: 'bucket'
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.querySelector('.tm-icon--bucket')).to.be.ok;
  });
  it('nativeType', () => {
    vm = createTest(Button, {
      nativeType: 'submit'
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.getAttribute('type')).to.be.equal('submit');
  });
  it('loading', () => {
    vm = createTest(Button, {
      loading: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-loading')).to.be.true;
    expect(buttonElm.querySelector('.tm-icon--loader')).to.be.ok;
  });
  it('disabled', () => {
    vm = createTest(Button, {
      disabled: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-disabled')).to.be.true;
  });
  it('cancel', () => {
    vm = createTest(Button, {
      cancel: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-cancel')).to.be.true;
  });
  it('remove', () => {
    vm = createTest(Button, {
      remove: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-remove')).to.be.true;
  });
  it('approve', () => {
    vm = createTest(Button, {
      approve: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-approve')).to.be.true;
  });
  it('circle', () => {
    vm = createTest(Button, {
      circle: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-circle')).to.be.true;
  });
  it('search', () => {
    vm = createTest(Button, {
      search: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-search')).to.be.true;
  });
  it('size', () => {
    vm = createTest(Button, {
      size: 'medium'
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('tm-button--medium')).to.be.true;
  });
  it('plain', () => {
    vm = createTest(Button, {
      plain: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-plain')).to.be.true;
  });
  it('click', done => {
    let result;
    vm = createVue({
      template: `
        <tm-button @click="handleClick"></tm-button>
      `,
      methods: {
        handleClick(evt) {
          result = evt;
        }
      }
    }, true);
    vm.$el.click();

    setTimeout(() => {
      expect(result).to.exist;
      done();
    }, 20);
  });
});
