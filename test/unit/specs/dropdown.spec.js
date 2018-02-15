import { createVue, triggerEvent, destroyVM } from '../util';

describe('Dropdown', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue({
      template: `
        <tm-dropdown ref="dropdown">
          <span class="tm-dropdown-link">
            下拉菜单<i class="tm-icon-caret-bottom tm-icon-right"></i>
          </span>
          <tm-dropdown-menu slot="dropdown" class="dropdown-test-creat">
            <tm-dropdown-item>黄金糕</tm-dropdown-item>
            <tm-dropdown-item>狮子头</tm-dropdown-item>
            <tm-dropdown-item>螺蛳粉</tm-dropdown-item>
            <tm-dropdown-item>双皮奶</tm-dropdown-item>
            <tm-dropdown-item>蚵仔煎</tm-dropdown-item>
          </tm-dropdown-menu>
        </tm-dropdown>
      `
    }, true);
    let dropdown = vm.$refs.dropdown;
    let dropdownElm = dropdown.$el;
    let triggerElm = dropdownElm.children[0];

    triggerEvent(triggerElm, 'mouseenter');
    setTimeout(() => {
      expect(dropdown.visible).to.be.true;

      triggerEvent(triggerElm, 'mouseleave');
      setTimeout(() => {
        expect(dropdown.visible).to.not.true;
        done();
      }, 300);
    }, 400);
  });
  it('menu click', done => {
    const myCommandObject = { name: 'CommandC' };
    vm = createVue({
      template: `
        <tm-dropdown ref="dropdown">
          <span class="tm-dropdown-link">
            下拉菜单<i class="tm-icon-caret-bottom tm-icon-right"></i>
          </span>
          <tm-dropdown-menu slot="dropdown">
            <tm-dropdown-item command="a">黄金糕</tm-dropdown-item>
            <tm-dropdown-item command="b">狮子头</tm-dropdown-item>
            <tm-dropdown-item ref="commandC" :command="myCommandObject">螺蛳粉</tm-dropdown-item>
            <tm-dropdown-item command="d">双皮奶</tm-dropdown-item>
            <tm-dropdown-item command="e">蚵仔煎</tm-dropdown-item>
          </tm-dropdown-menu>
        </tm-dropdown>
      `,
      data() {
        return {
          myCommandObject
        };
      }
    }, true);
    let dropdown = vm.$refs.dropdown;
    let dropdownElm = dropdown.$el;
    let triggerElm = dropdownElm.children[0];
    let callback = sinon.spy();

    dropdown.$on('command', callback);

    triggerEvent(triggerElm, 'mouseenter');
    setTimeout(() => {
      vm.$refs.commandC.$el.click();
      setTimeout(() => {
        expect(dropdown.visible).to.not.true;
        expect(callback.calledWith(myCommandObject)).to.be.true;
        done();
      }, 300);
    }, 300);
  });
  it('trigger', done => {
    vm = createVue({
      template: `
        <tm-dropdown trigger="click" ref="dropdown">
          <span class="tm-dropdown-link">
            下拉菜单trigger click<i class="tm-icon-caret-bottom tm-icon-right"></i>
          </span>
          <tm-dropdown-menu slot="dropdown">
            <tm-dropdown-item>黄金糕</tm-dropdown-item>
            <tm-dropdown-item @click.native="handleClick">狮子头</tm-dropdown-item>
            <tm-dropdown-item>螺蛳粉</tm-dropdown-item>
            <tm-dropdown-item>双皮奶</tm-dropdown-item>
            <tm-dropdown-item>蚵仔煎</tm-dropdown-item>
          </tm-dropdown-menu>
        </tm-dropdown>
      `
    }, true);
    let dropdownElm = vm.$el;
    let dropdown = vm.$refs.dropdown;
    let triggerElm = dropdownElm.children[0];

    triggerEvent(triggerElm, 'mouseenter');
    dropdown.$nextTick(() => {
      expect(dropdown.visible).to.not.true;
      triggerElm.click();
      setTimeout(() => {
        expect(dropdown.visible).to.be.true;
        done();
      }, 300);
    });
  });
  it('split button', done => {
    vm = createVue({
      template: `
        <tm-dropdown split-button type="primary" ref="dropdown">
          更多菜单
          <tm-dropdown-menu slot="dropdown" class="dropdown-test-split-button">
            <tm-dropdown-item>黄金糕</tm-dropdown-item>
            <tm-dropdown-item>狮子头</tm-dropdown-item>
            <tm-dropdown-item>螺蛳粉</tm-dropdown-item>
            <tm-dropdown-item>双皮奶</tm-dropdown-item>
            <tm-dropdown-item>蚵仔煎</tm-dropdown-item>
          </tm-dropdown-menu>
        </tm-dropdown>
      `
    }, true);

    let dropdown = vm.$refs.dropdown;
    let dropdownElm = dropdown.$el;
    let triggerElm = dropdownElm.querySelector('.tm-dropdown__caret-button');
    var callback = sinon.spy();

    dropdown.$on('click', callback);
    dropdownElm.querySelector('.tm-button').click();

    setTimeout(() => {
      expect(callback.called).to.be.true;
    }, 300);

    triggerEvent(triggerElm, 'mouseenter');
    setTimeout(() => {
      expect(dropdown.visible).to.be.true;

      triggerEvent(triggerElm, 'mouseleave');
      setTimeout(() => {
        expect(dropdown.visible).to.not.true;
        done();
      }, 300);
    }, 300);
  });
  it('hide on click', done => {
    vm = createVue({
      template: `
        <tm-dropdown ref="dropdown" :hide-on-click="false">
          <span class="tm-dropdown-link">
            下拉菜单<i class="tm-icon-caret-bottom tm-icon-right"></i>
          </span>
          <tm-dropdown-menu slot="dropdown">
            <tm-dropdown-item command="a">黄金糕</tm-dropdown-item>
            <tm-dropdown-item command="b">狮子头</tm-dropdown-item>
            <tm-dropdown-item ref="commandC" command="c">螺蛳粉</tm-dropdown-item>
            <tm-dropdown-item command="d">双皮奶</tm-dropdown-item>
            <tm-dropdown-item command="e">蚵仔煎</tm-dropdown-item>
          </tm-dropdown-menu>
        </tm-dropdown>
      `
    }, true);
    let dropdown = vm.$refs.dropdown;
    let dropdownElm = dropdown.$el;
    let triggerElm = dropdownElm.children[0];
    let callback = sinon.spy();

    dropdown.$on('command', callback);

    triggerEvent(triggerElm, 'mouseenter');
    setTimeout(() => {
      vm.$refs.commandC.$el.click();
      setTimeout(() => {
        expect(dropdown.visible).to.true;
        expect(callback.calledWith('c')).to.be.true;
        done();
      }, 300);
    }, 300);
  });
});
