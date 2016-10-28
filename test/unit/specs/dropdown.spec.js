import { createVue, triggerEvent } from '../util';

describe('Dropdown', () => {
  it('create', done => {
    const vm = createVue({
      template: `
        <el-dropdown ref="dropdown">
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-caret-bottom el-icon-right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="dropdown-test-creat">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      `
    }, true);
    let dropdown = vm.$refs.dropdown;
    let dropdownElm = dropdown.$el;
    let triggerElm = dropdownElm.children[0];

    triggerEvent(triggerElm, 'mouseenter');
    setTimeout(_ => {
      expect(dropdown.visible).to.be.true;

      triggerEvent(triggerElm, 'mouseleave');
      setTimeout(_ => {
        expect(dropdown.visible).to.not.true;
        done();
      }, 300);
    }, 400);
  });
  it('menu click', done => {
    const vm = createVue({
      template: `
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-caret-bottom el-icon-right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="dropdown-test-menu-click">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item @click.native="handleClick">狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      `,
      data() {
        return {
          clickedItem: ''
        };
      },
      methods: {
        handleClick(ev) {
          this.clickedItem = ev.target.innerText;
        }
      }
    }, true);
    let dropdownElm = vm.$el;
    let triggerElm = dropdownElm.children[0];

    triggerEvent(triggerElm, 'mouseenter');
    setTimeout(_ => {
      let dropdownMenu = document.querySelector('.dropdown-test-menu-click');
      dropdownMenu.children[1].click();
      setTimeout(_ => {
        expect(dropdownMenu.style.display).to.be.equal('none');
        expect(vm.clickedItem).to.be.equal('狮子头');
        done();
      }, 600);
    }, 400);
  });
  it('trigger', done => {
    const vm = createVue({
      template: `
        <el-dropdown trigger="click" ref="dropdown">
          <span class="el-dropdown-link">
            下拉菜单trigger click<i class="el-icon-caret-bottom el-icon-right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="dropdown-test-menu-click">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item @click.native="handleClick">狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      `,
      data() {
        return {
          clickedItem: ''
        };
      },
      methods: {
        handleClick(ev) {
          this.clickedItem = ev.target.innerText;
        }
      }
    }, true);
    let dropdownElm = vm.$el;
    let dropdown = vm.$refs.dropdown;
    let triggerElm = dropdownElm.children[0];

    triggerEvent(triggerElm, 'mouseenter');
    dropdown.$nextTick(_ => {
      expect(dropdown.visible).to.not.true;

      dropdownElm.children[0].click();
      dropdown.$nextTick(_ => {
        expect(dropdown.visible).to.be.true;
        done();
      });
    });
  });
  it('split button', done => {
    const vm = createVue({
      template: `
        <el-dropdown split-button type="primary" @click="handleClick" ref="dropdown">
          更多菜单
          <el-dropdown-menu slot="dropdown" class="dropdown-test-split-button">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      `,
      data() {
        return {
          btnClicked: false
        };
      },
      methods: {
        handleClick(ev) {
          this.btnClicked = true;
        }
      }
    }, true);

    let dropdown = vm.$refs.dropdown;
    let dropdownElm = dropdown.$el;
    let triggerElm = dropdownElm.querySelector('.el-dropdown__caret-button');

    triggerEvent(triggerElm, 'mouseenter');
    setTimeout(_ => {
      expect(dropdown.visible).to.be.true;

      triggerEvent(triggerElm, 'mouseleave');
      setTimeout(_ => {
        expect(dropdown.visible).to.not.true;
        done();
      }, 400);
    }, 400);
  });
});
