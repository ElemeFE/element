import { createVue, destroyVM } from '../util';

describe('Tabs', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue({
      template: `
        <el-tabs ref="tabs">
          <el-tab-pane label="用户管理">A</el-tab-pane>
          <el-tab-pane label="配置管理">B</el-tab-pane>
          <el-tab-pane label="角色管理" ref="pane-click">C</el-tab-pane>
          <el-tab-pane label="定时任务补偿">D</el-tab-pane>
        </el-tabs>
      `
    }, true);
    let tabList = vm.$el.querySelector('.el-tabs__header').children;
    let paneList = vm.$el.querySelector('.el-tabs__content').children;
    let spy = sinon.spy();

    vm.$refs.tabs.$on('tab-click', spy);

    setTimeout(_ => {
      expect(tabList[0].classList.contains('is-active')).to.be.true;
      expect(paneList[0].style.display).to.not.ok;

      tabList[2].click();
      vm.$nextTick(_ => {
        expect(spy.withArgs(vm.$refs['pane-click']).calledOnce).to.true;
        expect(tabList[2].classList.contains('is-active')).to.be.true;
        expect(paneList[2].style.display).to.not.ok;
        done();
      });
    }, 100);
  });
  it('active-name', done => {
    vm = createVue({
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
    vm = createVue({
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
    vm = createVue({
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
  it('dynamic', (done) => {
    vm = createVue({
      template: `
        <el-tabs type="card" ref="tabs">
          <el-tab-pane :label="tab.label" :name="tab.name" v-for="tab in tabs">Test Content</el-tab-pane>
        </el-tabs>
      `,
      data() {
        return {
          tabs: [{
            label: 'tab1',
            name: 'tab1'
          }, {
            label: 'tab2',
            name: 'tab2'
          }, {
            label: 'tab3',
            name: 'tab3'
          }, {
            label: 'tab4',
            name: 'tab4'
          }]
        };
      }
    }, true);

    setTimeout(() => {
      expect(vm.$el.querySelectorAll('.el-tab-pane').length).to.equal(4);
      vm.tabs.push({
        label: 'tab5',
        name: 'tab5'
      });
      setTimeout(() => {
        expect(vm.$el.querySelectorAll('.el-tab-pane').length).to.equal(5);
        done();
      });
    }, 100);
  });
  it('closable', done => {
    vm = createVue({
      template: `
        <el-tabs type="card" :closable="true" ref="tabs">
          <el-tab-pane label="用户管理">A</el-tab-pane>
          <el-tab-pane label="配置管理">B</el-tab-pane>
          <el-tab-pane label="角色管理">C</el-tab-pane>
          <el-tab-pane label="定时任务补偿">D</el-tab-pane>
        </el-tabs>
      `
    }, true);

    let tabList = vm.$el.querySelector('.el-tabs__header').children;
    let paneList = vm.$el.querySelector('.el-tabs__content').children;
    let spy = sinon.spy();

    vm.$refs.tabs.$on('tab-remove', spy);

    setTimeout(_ => {
      tabList[1].querySelector('.el-icon-close').click();
      vm.$nextTick(_ => {
        expect(tabList.length).to.be.equal(3);
        expect(paneList.length).to.be.equal(3);
        expect(spy.calledOnce).to.true;
        expect(tabList[1].innerText.trim()).to.be.equal('角色管理');
        expect(paneList[0].innerText.trim()).to.be.equal('A');
        done();
      });
    }, 100);
  });
  it('closable in tab-pane', (done) => {
    vm = createVue({
      template: `
        <el-tabs type="card" ref="tabs">
          <el-tab-pane label="用户管理" closable>A</el-tab-pane>
          <el-tab-pane label="配置管理">B</el-tab-pane>
          <el-tab-pane label="角色管理" closable>C</el-tab-pane>
          <el-tab-pane label="定时任务补偿">D</el-tab-pane>
        </el-tabs>
      `
    }, true);

    setTimeout(() => {
      expect(vm.$el.querySelectorAll('.el-icon-close').length).to.equal(2);
      done();
    }, 100);
  });
  it('closable edge', done => {
    vm = createVue({
      template: `
        <el-tabs type="card" :closable="true">
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
  it('tab title render function', done => {
    vm = createVue({
      template: `
        <el-tabs ref="tabs" >
          <el-tab-pane :label-content="renderTitle">A</el-tab-pane>
          <el-tab-pane label="配置管理">B</el-tab-pane>
          <el-tab-pane label="角色管理" ref="pane-click">C</el-tab-pane>
          <el-tab-pane label="定时任务补偿">D</el-tab-pane>
        </el-tabs>
      `,
      methods: {
        renderTitle(h) {
          return <span>用户管理</span>;
        }
      }
    }, true);
    vm.$nextTick(_ => {
      expect(vm.$el.querySelector('.el-tabs__item span').innerText).to.equal('用户管理');
      done();
    });
  });
  it('disabled', done => {
    vm = createVue({
      template: `
        <el-tabs type="card">
          <el-tab-pane label="用户管理">A</el-tab-pane>
          <el-tab-pane disabled label="配置管理" ref="disabled">B</el-tab-pane>
          <el-tab-pane label="角色管理">C</el-tab-pane>
          <el-tab-pane label="定时任务补偿">D</el-tab-pane>
        </el-tabs>
      `
    }, true);

    vm.$nextTick(_ => {
      let tabList = vm.$el.querySelector('.el-tabs__header').children;

      tabList[1].click();
      vm.$nextTick(_ => {
        expect(tabList[1].classList.contains('is-active')).to.not.true;
        done();
      });
    });
  });
});
