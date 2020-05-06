import { createTest, createVue, destroyVM, wait } from '../util';
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
    expect(buttonElm.classList.contains('el-button--primary')).to.be.true;
  });
  it('icon without content', () => {
    vm = createTest(Button, {
      icon: 'el-icon-search'
    }, true);
    let buttonElm = vm.$el;
    const ico = buttonElm.querySelector('.el-icon-search');
    expect(ico).to.be.ok;
    expect(ico.style.marginLeft).to.be.equal('');
    expect(ico.style.marginRight).to.be.equal('');
  });
  it('icon with content', () => {
    vm = createVue({
      template: `
        <el-button icon="el-icon-search">search</el-button>
      `
    });
    let buttonElm = vm.$el;
    const ico = buttonElm.querySelector('.el-icon-search');
    expect(ico).to.be.ok;
    expect(ico.style.marginRight).to.be.equal('5px');
  });
  it('icon right with content', () => {
    vm = createVue({
      template: `
        <el-button icon-right="el-icon-search">search</el-button>
      `
    });
    let buttonElm = vm.$el;
    const ico = buttonElm.querySelector('.el-icon-search');
    expect(ico).to.be.ok;
    expect(ico.style.marginLeft).to.be.equal('5px');
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
      icon: 'el-icon-search',
      loading: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-loading')).to.be.true;
    expect(buttonElm.querySelector('.el-icon-loading')).to.be.ok;
  });
  it('disabled', () => {
    vm = createTest(Button, {
      disabled: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-disabled')).to.be.true;
  });
  it('size', () => {
    vm = createTest(Button, {
      size: 'medium'
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('el-button--medium')).to.be.true;
  });
  it('plain', () => {
    vm = createTest(Button, {
      plain: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-plain')).to.be.true;
  });
  it('round', () => {
    vm = createTest(Button, {
      round: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-round')).to.be.true;
  });
  it('circle', () => {
    vm = createTest(Button, {
      circle: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-circle')).to.be.true;
  });
  it('click', async() => {
    let result;
    vm = createVue({
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

    await wait(20);
    expect(result).to.exist;
  });

  it('click inside', async() => {
    let result;
    vm = createVue({
      template: `
        <el-button @click="handleClick"><span class="inner-slot"></span></el-button>
      `,
      methods: {
        handleClick(evt) {
          result = evt;
        }
      }
    }, true);
    vm.$el.querySelector('.inner-slot').click();

    await wait(20);
    expect(result).to.exist;
  });

  it('loading implies disabled', async() => {
    let result;
    vm = createVue({
      template: `
        <el-button loading @click="handleClick"><span class="inner-slot"></span></el-button>
      `,
      methods: {
        handleClick(evt) {
          result = evt;
        }
      }
    }, true);
    vm.$el.querySelector('.inner-slot').click();

    await wait(20);
    expect(result).to.not.exist;
  });
});
