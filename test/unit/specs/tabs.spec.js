import { createVue } from '../util';

describe('Tabs', () => {
  it('create', done => {
    const vm = createVue({
      template: `
        <el-tabs>
          <el-tab-pane label="用户管理">A</el-tab-pane>
          <el-tab-pane label="配置管理">B</el-tab-pane>
          <el-tab-pane label="角色管理">C</el-tab-pane>
          <el-tab-pane label="定时任务补偿">D</el-tab-pane>
        </el-tabs>
      `
    }, true);
    let tabList = vm.$el.querySelector('.el-tabs__header').children;
    let paneList = vm.$el.querySelector('.el-tabs__content').children;
    setTimeout(_ => {
      expect(tabList[0].classList.contains('is-active')).to.be.true;
      expect(paneList[0].style.display).to.not.ok;

      tabList[2].click();
      vm.$nextTick(_ => {
        expect(tabList[2].classList.contains('is-active')).to.be.true;
        expect(paneList[2].style.display).to.not.ok;
        done();
      });
    }, 100);
  });
  it('active-name', done => {
    const vm = createVue({
      template: `
        <el-tabs :active-name="activeName" @click="handleClick">
          <el-tab-pane name="tab-A" label="用户管理">A</el-tab-pane>
          <el-tab-pane name="tab-B" label="配置管理">B</el-tab-pane>
          <el-tab-pane name="tab-C" label="角色管理">C</el-tab-pane>
          <el-tab-pane name="tab-D" label="定时任务补偿">D</el-tab-pane>
        </el-tabs>
      `,
      data() {
        return {
          activeName: 'tab-B'
        };
      },
      methods: {
        handleClick(tab) {
          this.activeName = tab.name;
        }
      }
    }, true);
    let tabList = vm.$el.querySelector('.el-tabs__header').children;
    let paneList = vm.$el.querySelector('.el-tabs__content').children;
    setTimeout(_ => {
      expect(tabList[1].classList.contains('is-active')).to.be.true;
      expect(paneList[1].style.display).to.not.ok;

      tabList[3].click();
      vm.$nextTick(_ => {
        expect(tabList[3].classList.contains('is-active')).to.be.true;
        expect(paneList[3].style.display).to.not.ok;
        expect(vm.activeName === 'tab-D');
        done();
      });
    }, 100);
  });
  it('card', () => {
    const vm = createVue({
      template: `
        <el-tabs type="card">
          <el-tab-pane label="用户管理">A</el-tab-pane>
          <el-tab-pane label="配置管理">B</el-tab-pane>
          <el-tab-pane label="角色管理">C</el-tab-pane>
          <el-tab-pane label="定时任务补偿">D</el-tab-pane>
        </el-tabs>
      `
    }, true);

    expect(vm.$el.classList.contains('el-tabs--card')).to.be.true;
  });
  it('border card', () => {
    const vm = createVue({
      template: `
        <el-tabs type="border-card">
          <el-tab-pane label="用户管理">A</el-tab-pane>
          <el-tab-pane label="配置管理">B</el-tab-pane>
          <el-tab-pane label="角色管理">C</el-tab-pane>
          <el-tab-pane label="定时任务补偿">D</el-tab-pane>
        </el-tabs>
      `
    }, true);

    expect(vm.$el.classList.contains('el-tabs--border-card')).to.be.true;
  });
  it('closable', done => {
    const vm = createVue({
      template: `
        <el-tabs type="card" closable @tab-remove="handleRemove">
          <el-tab-pane label="用户管理">A</el-tab-pane>
          <el-tab-pane label="配置管理">B</el-tab-pane>
          <el-tab-pane label="角色管理">C</el-tab-pane>
          <el-tab-pane label="定时任务补偿">D</el-tab-pane>
        </el-tabs>
      `,
      data() {
        return {
          removeTabName: ''
        };
      },
      methods: {
        handleRemove(tab) {
          this.removeTabName = tab.label;
        }
      }
    }, true);

    let tabList = vm.$el.querySelector('.el-tabs__header').children;
    let paneList = vm.$el.querySelector('.el-tabs__content').children;
    setTimeout(_ => {
      tabList[1].querySelector('.el-icon-close').click();
      vm.$nextTick(_ => {
        expect(tabList.length).to.be.equal(3);
        expect(paneList.length).to.be.equal(3);
        expect(vm.removeTabName).to.be.equal('配置管理');
        expect(tabList[1].innerText.trim()).to.be.equal('角色管理');
        expect(paneList[0].innerText.trim()).to.be.equal('A');
        done();
      });
    }, 100);
  });
  it('closable edge', done => {
    const vm = createVue({
      template: `
        <el-tabs type="card" closable>
          <el-tab-pane label="用户管理">A</el-tab-pane>
          <el-tab-pane label="配置管理">B</el-tab-pane>
          <el-tab-pane label="角色管理">C</el-tab-pane>
          <el-tab-pane label="定时任务补偿">D</el-tab-pane>
        </el-tabs>
      `
    }, true);

    let tabList = vm.$el.querySelector('.el-tabs__header').children;
    let paneList = vm.$el.querySelector('.el-tabs__content').children;
    setTimeout(_ => {
      tabList[0].querySelector('.el-icon-close').click();
      vm.$nextTick(_ => {
        expect(tabList.length).to.be.equal(3);
        expect(paneList.length).to.be.equal(3);
        expect(tabList[0].innerText.trim()).to.be.equal('配置管理');
        expect(paneList[0].innerText.trim()).to.be.equal('B');

        tabList[2].click();
        tabList[2].querySelector('.el-icon-close').click();
        vm.$nextTick(_ => {
          expect(tabList.length).to.be.equal(2);
          expect(paneList.length).to.be.equal(2);
          expect(tabList[1].classList.contains('is-active')).to.be.true;
          expect(tabList[1].innerText.trim()).to.be.equal('角色管理');
          expect(paneList[1].innerText.trim()).to.be.equal('C');
          done();
        });
      });
    }, 100);
  });
});
