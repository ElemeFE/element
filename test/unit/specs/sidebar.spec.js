import { createVue, destroyVM } from '../util';
import TmSidebarItemModel from 'tmconsulting-ui/packages/sidebar/src/TmSidebarItemModel';

const DELAY = 100;

describe('Sidebar', () => {
  let vm;
  let list = [
    new TmSidebarItemModel('test1 test1 test1 test1', 'airplane'),
    new TmSidebarItemModel('test2', 'cross')
  ];
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <tm-sidebar :list="list"></tm-sidebar>
      `,
      data() {
        return {
          list: list
        };
      }
    }, true);
    expect(vm).to.be.ok;
  });

  it('nav mode works correctly', () => {
    vm = createVue({
      template: `
        <tm-sidebar :list="list"></tm-sidebar>
      `,
      data() {
        return {
          list: list
        };
      }
    }, true);
    expect(vm.$el.querySelectorAll('.tm-sidebar__item').length).to.be.equal(2);
    expect(vm.$el.querySelectorAll('.tm-sidebar__icon').length).to.be.equal(2);
    expect(vm.$el.classList.contains('tm-sidebar--nav')).to.be.true;
  });

  it('inner mode works correctly', () => {
    vm = createVue({
      template: `
        <tm-sidebar :list="list" mode="inner"></tm-sidebar>
      `,
      data() {
        return {
          list: list
        };
      }
    }, true);
    expect(vm.$el.querySelectorAll('.tm-sidebar__item').length).to.be.equal(2);
    expect(vm.$el.querySelectorAll('.tm-sidebar__icon').length).to.be.equal(2);
    expect(vm.$el.classList.contains('tm-sidebar--inner')).to.be.true;
  });

  it('selected value works correctly', () => {
    vm = createVue({
      template: `
        <tm-sidebar :list="list" :selected="list[1]" mode="inner"></tm-sidebar>
      `,
      data() {
        return {
          list: list
        };
      }
    }, true);
    expect(vm.$el.querySelector('.tm-sidebar__item--active').textContent.includes('test2')).to.be.true;
  });

  it('on click selects item', done => {
    vm = createVue({
      template: `
        <tm-sidebar :list="list" :selected="list[1]" mode="inner"></tm-sidebar>
      `,
      data() {
        return {
          list: list
        };
      }
    }, true);
    vm.$el.querySelector('.tm-sidebar__item:not(.tm-sidebar__item--active)').click();
    setTimeout(() => {
      let activeEl = vm.$el.querySelector('.tm-sidebar__item--active');
      expect(activeEl.textContent.includes('test1 test1 test1 test1')).to.be.true;
      done();
    }, DELAY);
  });
});
