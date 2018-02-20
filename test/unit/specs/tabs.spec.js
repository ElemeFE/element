import { createVue, destroyVM } from '../util';

describe('Tabs', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue({
      template: `
        <tm-tabs ref="tabs">
          <tm-tab-pane label="用户管理">A</tm-tab-pane>
          <tm-tab-pane label="配置管理">B</tm-tab-pane>
          <tm-tab-pane label="角色管理" ref="pane-click">C</tm-tab-pane>
          <tm-tab-pane label="定时任务补偿">D</tm-tab-pane>
        </tm-tabs>
      `
    }, true);

    let paneList = vm.$el.querySelector('.tm-tabs__content').children;
    let spy = sinon.spy();

    vm.$refs.tabs.$on('tab-click', spy);

    setTimeout(() => {
      const tabList = vm.$refs.tabs.$refs.nav.$refs.tabs;
      expect(tabList[0].classList.contains('is-active')).to.be.true;
      expect(paneList[0].style.display).to.not.ok;

      tabList[2].click();
      vm.$nextTick(() => {
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
        <tm-tabs ref="tabs" :active-name="activeName" @click="handleClick">
          <tm-tab-pane name="tab-A" label="用户管理">A</tm-tab-pane>
          <tm-tab-pane name="tab-B" label="配置管理">B</tm-tab-pane>
          <tm-tab-pane name="tab-C" label="角色管理">C</tm-tab-pane>
          <tm-tab-pane name="tab-D" label="定时任务补偿">D</tm-tab-pane>
        </tm-tabs>
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
    setTimeout(() => {
      const paneList = vm.$el.querySelector('.tm-tabs__content').children;
      const tabList = vm.$refs.tabs.$refs.nav.$refs.tabs;

      expect(tabList[1].classList.contains('is-active')).to.be.true;
      expect(paneList[1].style.display).to.not.ok;

      tabList[3].click();
      vm.$nextTick(() => {
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
        <tm-tabs type="card">
          <tm-tab-pane label="用户管理">A</tm-tab-pane>
          <tm-tab-pane label="配置管理">B</tm-tab-pane>
          <tm-tab-pane label="角色管理">C</tm-tab-pane>
          <tm-tab-pane label="定时任务补偿">D</tm-tab-pane>
        </tm-tabs>
      `
    }, true);

    expect(vm.$el.classList.contains('tm-tabs--card')).to.be.true;
  });
  it('border card', () => {
    vm = createVue({
      template: `
        <tm-tabs type="border-card">
          <tm-tab-pane label="用户管理">A</tm-tab-pane>
          <tm-tab-pane label="配置管理">B</tm-tab-pane>
          <tm-tab-pane label="角色管理">C</tm-tab-pane>
          <tm-tab-pane label="定时任务补偿">D</tm-tab-pane>
        </tm-tabs>
      `
    }, true);

    expect(vm.$el.classList.contains('tm-tabs--border-card')).to.be.true;
  });
  it('dynamic', (done) => {
    vm = createVue({
      template: `
        <tm-tabs type="card" ref="tabs">
          <tm-tab-pane :label="tab.label" :name="tab.name" v-for="tab in tabs" :key="tab.name">Test Content</tm-tab-pane>
        </tm-tabs>
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
      expect(vm.$el.querySelectorAll('.tm-tab-pane').length).to.equal(4);
      vm.tabs.push({
        label: 'tab5',
        name: 'tab5'
      });
      setTimeout(() => {
        expect(vm.$el.querySelectorAll('.tm-tab-pane').length).to.equal(5);
        done();
      });
    }, 100);
  });
  it('editable', done => {
    vm = createVue({
      template: `
        <tm-tabs ref="tabs" v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
          <tm-tab-pane
            v-for="(item, index) in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
            {{item.content}}
          </tm-tab-pane>
        </tm-tabs>
      `,
      data() {
        return {
          editableTabsValue: '2',
          editableTabs: [{
            title: 'Tab 1',
            name: '1',
            content: 'Tab 1 content'
          }, {
            title: 'Tab 2',
            name: '2',
            content: 'Tab 2 content'
          }, {
            title: 'Tab 3',
            name: '3',
            content: 'Tab 3 content'
          }],
          tabIndex: 3
        };
      },
      methods: {
        handleTabsEdit(targetName, action) {
          if (action === 'add') {
            let newTabName = ++this.tabIndex + '';
            this.editableTabs.push({
              title: 'New Tab',
              name: newTabName,
              content: 'New Tab content'
            });
            this.editableTabsValue = newTabName;
          }
          if (action === 'remove') {
            let tabs = this.editableTabs;
            let activeName = this.editableTabsValue;
            if (activeName === targetName) {
              tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                  let nextTab = tabs[index + 1] || tabs[index - 1];
                  if (nextTab) {
                    activeName = nextTab.name;
                  }
                }
              });
            }
            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(tab => tab.name !== targetName);
          }
        }
      }
    }, true);

    setTimeout(() => {
      const tabList = vm.$refs.tabs.$refs.nav.$refs.tabs;
      const paneList = vm.$el.querySelector('.tm-tabs__content').children;

      tabList[1].querySelector('.tm-icon-close').click();
      vm.$nextTick(() => {
        expect(tabList.length).to.be.equal(2);
        expect(paneList.length).to.be.equal(2);
        expect(tabList[1].classList.contains('is-active')).to.be.true;

        vm.$refs.tabs.$el.querySelector('.tm-tabs__new-tab').click();
        vm.$nextTick(() => {
          expect(tabList.length).to.be.equal(3);
          expect(paneList.length).to.be.equal(3);
          expect(tabList[2].classList.contains('is-active')).to.be.true;
          done();
        });
      });
    }, 100);
  });
  it('addable & closable', done => {
    vm = createVue({
      template: `
        <tm-tabs
          ref="tabs"
          v-model="editableTabsValue"
          type="card"
          addable
          closable
          @tab-add="addTab"
          @tab-remove="removeTab"
        >
          <tm-tab-pane
            v-for="(item, index) in editableTabs"
            :label="item.title"
            :key="item.name"
            :name="item.name"
          >
            {{item.content}}
          </tm-tab-pane>
        </tm-tabs>
      `,
      data() {
        return {
          editableTabsValue: '2',
          editableTabs: [{
            title: 'Tab 1',
            name: '1',
            content: 'Tab 1 content'
          }, {
            title: 'Tab 2',
            name: '2',
            content: 'Tab 2 content'
          }],
          tabIndex: 2
        };
      },
      methods: {
        addTab() {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        },
        removeTab(targetName) {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
    }, true);

    setTimeout(() => {
      const tabList = vm.$refs.tabs.$refs.nav.$refs.tabs;
      const paneList = vm.$el.querySelector('.tm-tabs__content').children;

      vm.$refs.tabs.$el.querySelector('.tm-tabs__new-tab').click();

      vm.$nextTick(() => {
        expect(tabList.length).to.be.equal(3);
        expect(paneList.length).to.be.equal(3);
        expect(tabList[2].classList.contains('is-active')).to.be.true;

        tabList[2].querySelector('.tm-icon-close').click();
        vm.$nextTick(() => {
          expect(tabList.length).to.be.equal(2);
          expect(paneList.length).to.be.equal(2);
          expect(tabList[1].classList.contains('is-active')).to.be.true;
          done();
        });
      });
    }, 100);
  });
  it('closable in tab-pane', (done) => {
    vm = createVue({
      template: `
        <tm-tabs type="card" ref="tabs">
          <tm-tab-pane label="用户管理" closable>A</tm-tab-pane>
          <tm-tab-pane label="配置管理">B</tm-tab-pane>
          <tm-tab-pane label="角色管理" closable>C</tm-tab-pane>
          <tm-tab-pane label="定时任务补偿">D</tm-tab-pane>
        </tm-tabs>
      `
    }, true);

    setTimeout(() => {
      expect(vm.$el.querySelectorAll('.tm-icon-close').length).to.equal(2);
      done();
    }, 100);
  });
  it('disabled', done => {
    vm = createVue({
      template: `
        <tm-tabs type="card" ref="tabs">
          <tm-tab-pane label="用户管理">A</tm-tab-pane>
          <tm-tab-pane disabled label="配置管理" ref="disabled">B</tm-tab-pane>
          <tm-tab-pane label="角色管理">C</tm-tab-pane>
          <tm-tab-pane label="定时任务补偿">D</tm-tab-pane>
        </tm-tabs>
      `
    }, true);

    vm.$nextTick(() => {
      const tabList = vm.$refs.tabs.$refs.nav.$refs.tabs;

      tabList[1].click();
      vm.$nextTick(() => {
        expect(tabList[1].classList.contains('is-active')).to.not.true;
        done();
      });
    });
  });
  it('tab-position', done => {
    vm = createVue({
      template: `
        <tm-tabs ref="tabs" tab-position="left">
          <tm-tab-pane label="用户管理">A</tm-tab-pane>
          <tm-tab-pane label="配置管理">B</tm-tab-pane>
          <tm-tab-pane label="角色管理" ref="pane-click">C</tm-tab-pane>
          <tm-tab-pane label="定时任务补偿">D</tm-tab-pane>
        </tm-tabs>
      `
    }, true);

    let paneList = vm.$el.querySelector('.tm-tabs__content').children;
    let spy = sinon.spy();

    vm.$refs.tabs.$on('tab-click', spy);

    setTimeout(() => {
      const tabList = vm.$refs.tabs.$refs.nav.$refs.tabs;
      expect(tabList[0].classList.contains('is-active')).to.be.true;
      expect(paneList[0].style.display).to.not.ok;

      tabList[2].click();
      vm.$nextTick(() => {
        expect(spy.withArgs(vm.$refs['pane-click']).calledOnce).to.true;
        expect(tabList[2].classList.contains('is-active')).to.be.true;
        expect(paneList[2].style.display).to.not.ok;
        done();
      });
    }, 100);
  });
  it('horizonal-scrollable', done => {
    vm = createVue({
      template: `
        <tm-tabs ref="tabs" style="width: 200px;">
          <tm-tab-pane label="用户管理">A</tm-tab-pane>
          <tm-tab-pane label="配置管理">B</tm-tab-pane>
          <tm-tab-pane label="用户管理">A</tm-tab-pane>
          <tm-tab-pane label="配置管理">B</tm-tab-pane>
          <tm-tab-pane label="用户管理">A</tm-tab-pane>
          <tm-tab-pane label="配置管理">B</tm-tab-pane>
          <tm-tab-pane label="定时任务补偿">D</tm-tab-pane>
        </tm-tabs>
      `
    }, true);

    setTimeout(() => {
      const btnPrev = vm.$el.querySelector('.tm-tabs__nav-prev');
      btnPrev.click();
      vm.$nextTick(() => {
        const tabNav = vm.$el.querySelector('.tm-tabs__nav-wrap');
        expect(tabNav.__vue__.navOffset).to.be.equal(0);

        const btnNext = vm.$el.querySelector('.tm-tabs__nav-next');
        btnNext.click();

        vm.$nextTick(() => {
          expect(tabNav.__vue__.navOffset).to.not.be.equal(0);

          btnPrev.click();

          vm.$nextTick(() => {
            expect(tabNav.__vue__.navOffset).to.be.equal(0);
            done();
          });
        });
      });
    }, 100);
  });
  it('vertical-scrollable', done => {
    vm = createVue({
      template: `
        <tm-tabs ref="tabs" tab-position="left" style="height: 200px;">
          <tm-tab-pane label="用户管理">A</tm-tab-pane>
          <tm-tab-pane label="配置管理">B</tm-tab-pane>
          <tm-tab-pane label="用户管理">A</tm-tab-pane>
          <tm-tab-pane label="配置管理">B</tm-tab-pane>
          <tm-tab-pane label="用户管理">A</tm-tab-pane>
          <tm-tab-pane label="配置管理">B</tm-tab-pane>
          <tm-tab-pane label="定时任务补偿">D</tm-tab-pane>
        </tm-tabs>
      `
    }, true);

    setTimeout(() => {
      const btnPrev = vm.$el.querySelector('.tm-tabs__nav-prev');
      btnPrev.click();
      vm.$nextTick(() => {
        const tabNav = vm.$el.querySelector('.tm-tabs__nav-wrap');
        expect(tabNav.__vue__.navOffset).to.be.equal(0);

        const btnNext = vm.$el.querySelector('.tm-tabs__nav-next');
        btnNext.click();

        vm.$nextTick(() => {
          expect(tabNav.__vue__.navOffset).to.not.be.equal(0);

          btnPrev.click();

          vm.$nextTick(() => {
            expect(tabNav.__vue__.navOffset).to.be.equal(0);
            done();
          });
        });
      });
    }, 100);
  });
  it('flow type', done => {
      vm = createVue({
          template: `
            <tm-tabs type="flow" ref="tabs" tab-position="left" style="height: 200px;">
              <tm-tab-pane label="test">test</tm-tab-pane>
            </tm-tabs>
          `
      }, true);
      setTimeout(() => {
          const isFlow = vm.$el.classList.contains('tm-tabs--flow');
          expect(isFlow).to.true;
          done();
      }, 100);
  });
  it('icon', done => {
      vm = createVue({
          template: `
            <tm-tabs ref="tabs" tab-position="left" style="height: 200px;">
              <tm-tab-pane label="test" icon="airplane">test</tm-tab-pane>
            </tm-tabs>
          `
      }, true);
      setTimeout(() => {
          const tabs = vm.$el.querySelector('.tm-icon-airplane');
          expect(!!tabs).to.true;
          done();
      }, 100);
  });
});
