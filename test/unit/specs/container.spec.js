import { createTest, createVue, destroyVM } from '../util';
import Container from 'packages/container';
import Header from 'packages/header';
import Main from 'packages/main';
import Aside from 'packages/aside';
import Footer from 'packages/footer';

describe('Container', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue('<el-container />');
    expect(vm.$el).to.exist;
  });

  it('vertical', () => {
    vm = createVue({
      template: `
        <el-container>
          <el-header></el-header>
          <el-main></el-main>
        </el-container>
      `
    }, true);
    expect(vm.$el.classList.contains('is-vertical')).to.true;
  });

  it('direction', async() => {
    vm = createVue({
      template: `
        <el-container :direction="direction">
          <el-header></el-header>
          <el-main></el-main>
        </el-container>
      `,
      data() {
        return {
          direction: 'horizontal'
        };
      }
    }, true);
    expect(vm.$el.classList.contains('is-vertical')).not.to.true;
    vm.direction = 'vertical';
    await vm.$nextTick();
    expect(vm.$el.classList.contains('is-vertical')).to.true;
  });
});

describe('Header', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue('<el-header />');
    expect(vm.$el).to.exist;
  });

  it('height', () => {
    vm = createVue({
      template: `
        <el-header height="100px"></el-header>
      `
    }, true);
    expect(vm.$el.style.height).to.equal('100px');
  });
});

describe('Aside', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue('<el-aside />');
    expect(vm.$el).to.exist;
  });

  it('width', () => {
    vm = createVue({
      template: `
        <el-aside width="200px"></el-aside>
      `
    }, true);
    expect(vm.$el.style.width).to.equal('200px');
  });
});

describe('Main', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue('<el-main />');
    expect(vm.$el).to.exist;
  });
});

describe('Footer', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue('<el-footer />');
    expect(vm.$el).to.exist;
  });

  it('height', () => {
    vm = createVue({
      template: `
        <el-footer height="100px"></el-footer>
      `
    }, true);
    expect(vm.$el.style.height).to.equal('100px');
  });
});
