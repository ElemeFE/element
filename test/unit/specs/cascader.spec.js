import { createVue, destroyVM, triggerEvent } from '../util';

describe('Cascader', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue({
      template: `
        <el-cascader
          ref="cascader"
          placeholder="请选择"
          :options="options"
          clearable
          v-model="selectedOptions"
        ></el-cascader>
      `,
      data() {
        return {
          options: [{
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [{
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [{
                value: 'xihu',
                label: 'West Lake'
              }]
            }, {
              value: 'ningbo',
              label: 'NingBo',
              children: [{
                value: 'jiangbei',
                label: 'Jiang Bei'
              }]
            }]
          }, {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [{
              value: 'nanjing',
              label: 'Nanjing',
              children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men'
              }]
            }]
          }],
          selectedOptions: []
        };
      }
    }, true);
    expect(vm.$el).to.be.exist;
    vm.$el.click();
    setTimeout(_ => {
      expect(document.body.querySelector('.el-cascader-menus')).to.be.exist;

      const menu = vm.$refs.cascader.menu;
      const menuElm = menu.$el;
      const item1 = menuElm.querySelector('.el-cascader-menu__item');

      item1.click();
      menu.$nextTick(_ => {
        expect(menuElm.children.length).to.be.equal(2);
        expect(item1.classList.contains('is-active')).to.be.true;

        const item2 = menuElm.children[1].querySelector('.el-cascader-menu__item');
        item2.click();

        menu.$nextTick(_ => {
          expect(menuElm.children.length).to.be.equal(3);
          expect(item2.classList.contains('is-active')).to.be.true;

          const item3 = menuElm.children[2].querySelector('.el-cascader-menu__item');
          item3.click();

          setTimeout(_ => {
            expect(document.body.querySelector('.el-cascader-menus').style.display).to.be.equal('none');
            expect(vm.selectedOptions[0]).to.be.equal('zhejiang');
            expect(vm.selectedOptions[1]).to.be.equal('hangzhou');
            expect(vm.selectedOptions[2]).to.be.equal('xihu');

            triggerEvent(vm.$refs.cascader.$el, 'mouseenter');
            vm.$nextTick(_ => {
              vm.$refs.cascader.$el.querySelector('.el-cascader__clearIcon').click();
              vm.$nextTick(_ => {
                expect(vm.selectedOptions.length).to.be.equal(0);
                done();
              });
            });
          }, 500);
        });
      });
    }, 300);
  });
  // Github issue #3470
  it('should work with zero', done => {
    vm = createVue({
      template: `
        <el-cascader
          ref="cascader"
          placeholder="请选择"
          :options="options"
          clearable
          v-model="selectedOptions"
        ></el-cascader>
      `,
      data() {
        return {
          options: [{
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [{
              value: 0,
              label: 'Hangzhou',
              children: [{
                value: 'xihu',
                label: 'West Lake'
              }]
            }, {
              value: 'ningbo',
              label: 'NingBo',
              children: [{
                value: 'jiangbei',
                label: 'Jiang Bei'
              }]
            }]
          }, {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [{
              value: 'nanjing',
              label: 'Nanjing',
              children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men'
              }]
            }]
          }],
          selectedOptions: []
        };
      }
    }, true);
    expect(vm.$el).to.be.exist;
    vm.$el.click();
    setTimeout(_ => {
      expect(document.body.querySelector('.el-cascader-menus')).to.be.exist;

      const menu = vm.$refs.cascader.menu;
      const menuElm = menu.$el;
      const item1 = menuElm.querySelector('.el-cascader-menu__item');

      item1.click();
      menu.$nextTick(_ => {
        expect(menuElm.children.length).to.be.equal(2);
        expect(item1.classList.contains('is-active')).to.be.true;

        const item2 = menuElm.children[1].querySelector('.el-cascader-menu__item');
        item2.click();

        menu.$nextTick(_ => {
          expect(menuElm.children.length).to.be.equal(3);
          expect(item2.classList.contains('is-active')).to.be.true;

          const item3 = menuElm.children[2].querySelector('.el-cascader-menu__item');
          item3.click();

          setTimeout(_ => {
            expect(document.body.querySelector('.el-cascader-menus').style.display).to.be.equal('none');
            expect(vm.selectedOptions[0]).to.be.equal('zhejiang');
            expect(vm.selectedOptions[1]).to.be.equal(0);
            expect(vm.selectedOptions[2]).to.be.equal('xihu');

            triggerEvent(vm.$refs.cascader.$el, 'mouseenter');
            vm.$nextTick(_ => {
              vm.$refs.cascader.$el.querySelector('.el-cascader__clearIcon').click();
              vm.$nextTick(_ => {
                expect(vm.selectedOptions.length).to.be.equal(0);
                done();
              });
            });
          }, 500);
        });
      });
    }, 300);
  });
  it('not allow clearable', done => {
    vm = createVue({
      template: `
        <el-cascader
          ref="cascader"
          placeholder="请选择"
          :options="options"
          :clearable="false"
          v-model="selectedOptions"
        ></el-cascader>
      `,
      data() {
        return {
          options: [{
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [{
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [{
                value: 'xihu',
                label: 'West Lake'
              }]
            }, {
              value: 'ningbo',
              label: 'NingBo',
              children: [{
                value: 'jiangbei',
                label: 'Jiang Bei'
              }]
            }]
          }, {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [{
              value: 'nanjing',
              label: 'Nanjing',
              children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men'
              }]
            }]
          }],
          selectedOptions: []
        };
      }
    }, true);
    expect(vm.$el).to.be.exist;
    triggerEvent(vm.$refs.cascader.$el, 'mouseenter');
    vm.$nextTick(_ => {
      expect(vm.$refs.cascader.$el.querySelector('.el-cascader__clearIcon')).to.not.exist;
      done();
    });
  });
  it('disabled options', done => {
    vm = createVue({
      template: `
        <el-cascader
          ref="cascader"
          placeholder="请选择"
          :options="options"
          v-model="selectedOptions"
        ></el-cascader>
      `,
      data() {
        return {
          options: [{
            value: 'zhejiang',
            label: 'Zhejiang',
            disabled: true,
            children: [{
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [{
                value: 'xihu',
                label: 'West Lake'
              }]
            }, {
              value: 'ningbo',
              label: 'NingBo',
              children: [{
                value: 'jiangbei',
                label: 'Jiang Bei'
              }]
            }]
          }, {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [{
              value: 'nanjing',
              label: 'Nanjing',
              children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men'
              }]
            }]
          }],
          selectedOptions: []
        };
      }
    }, true);
    expect(vm.$el).to.be.exist;
    vm.$el.click();
    setTimeout(_ => {
      expect(document.body.querySelector('.el-cascader-menus')).to.be.exist;

      const menu = vm.$refs.cascader.menu;
      const menuElm = menu.$el;
      const item1 = menuElm.querySelector('.el-cascader-menu__item');

      item1.click();
      menu.$nextTick(_ => {
        expect(menuElm.children.length).to.be.equal(1);
        expect(item1.classList.contains('is-active')).to.be.false;
        done();
      });
    }, 300);
  });
  it('default value', done => {
    vm = createVue({
      template: `
        <el-cascader
          ref="cascader"
          placeholder="请选择"
          :options="options"
          v-model="selectedOptions"
        ></el-cascader>
      `,
      data() {
        return {
          options: [{
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [{
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [{
                value: 'xihu',
                label: 'West Lake'
              }]
            }, {
              value: 'ningbo',
              label: 'NingBo',
              children: [{
                value: 'jiangbei',
                label: 'Jiang Bei'
              }]
            }]
          }, {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [{
              value: 'nanjing',
              label: 'Nanjing',
              children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men'
              }]
            }]
          }],
          selectedOptions: ['zhejiang', 'hangzhou', 'xihu']
        };
      }
    }, true);
    expect(vm.$el).to.be.exist;
    vm.$el.click();
    setTimeout(_ => {
      expect(document.body.querySelector('.el-cascader-menus')).to.be.exist;

      const menu = vm.$refs.cascader.menu;
      const menuElm = menu.$el;
      const item1 = menuElm.children[0].querySelector('.el-cascader-menu__item');
      const item2 = menuElm.children[1].querySelector('.el-cascader-menu__item');
      const item3 = menuElm.children[2].querySelector('.el-cascader-menu__item');

      expect(menuElm.children.length).to.be.equal(3);
      expect(item1.classList.contains('is-active')).to.be.true;
      expect(item2.classList.contains('is-active')).to.be.true;
      expect(item3.classList.contains('is-active')).to.be.true;

      document.body.click();
      setTimeout(_ => {
        expect(document.body.querySelector('.el-cascader-menus').style.display).to.be.equal('none');
        done();
      }, 500);
    }, 300);
  });
  it('expand by hover', done => {
    vm = createVue({
      template: `
        <el-cascader
          ref="cascader"
          placeholder="请选择"
          :options="options"
          expand-trigger="hover"
          v-model="selectedOptions"
        ></el-cascader>
      `,
      data() {
        return {
          options: [{
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [{
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [{
                value: 'xihu',
                label: 'West Lake'
              }]
            }, {
              value: 'ningbo',
              label: 'NingBo',
              children: [{
                value: 'jiangbei',
                label: 'Jiang Bei'
              }]
            }]
          }, {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [{
              value: 'nanjing',
              label: 'Nanjing',
              children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men'
              }]
            }]
          }],
          selectedOptions: []
        };
      }
    }, true);
    expect(vm.$el).to.be.exist;
    vm.$el.click();
    setTimeout(_ => {
      expect(document.body.querySelector('.el-cascader-menus')).to.be.exist;

      const menu = vm.$refs.cascader.menu;
      const menuElm = menu.$el;
      const item1 = menuElm.querySelector('.el-cascader-menu__item');

      triggerEvent(item1, 'mouseenter');
      menu.$nextTick(_ => {
        expect(menuElm.children.length).to.be.equal(2);
        expect(item1.classList.contains('is-active')).to.be.true;

        const item2 = menuElm.children[1].querySelector('.el-cascader-menu__item');
        triggerEvent(item2, 'mouseenter');

        menu.$nextTick(_ => {
          expect(menuElm.children.length).to.be.equal(3);
          expect(item2.classList.contains('is-active')).to.be.true;

          const item3 = menuElm.children[2].querySelector('.el-cascader-menu__item');
          item3.click();

          setTimeout(_ => {
            expect(document.body.querySelector('.el-cascader-menus').style.display).to.be.equal('none');
            expect(vm.selectedOptions[0]).to.be.equal('zhejiang');
            expect(vm.selectedOptions[1]).to.be.equal('hangzhou');
            expect(vm.selectedOptions[2]).to.be.equal('xihu');
            done();
          }, 500);
        });
      });
    }, 300);
  });
  it('change on select', done => {
    vm = createVue({
      template: `
        <el-cascader
          ref="cascader"
          placeholder="请选择"
          :options="options"
          change-on-select
          v-model="selectedOptions"
        ></el-cascader>
      `,
      data() {
        return {
          options: [{
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [{
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [{
                value: 'xihu',
                label: 'West Lake'
              }]
            }, {
              value: 'ningbo',
              label: 'NingBo',
              children: [{
                value: 'jiangbei',
                label: 'Jiang Bei'
              }]
            }]
          }, {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [{
              value: 'nanjing',
              label: 'Nanjing',
              children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men'
              }]
            }]
          }],
          selectedOptions: []
        };
      }
    }, true);
    expect(vm.$el).to.be.exist;
    vm.$el.click();
    setTimeout(_ => {
      expect(document.body.querySelector('.el-cascader-menus')).to.be.exist;

      const menu = vm.$refs.cascader.menu;
      const menuElm = menu.$el;
      const item1 = menuElm.querySelector('.el-cascader-menu__item');

      item1.click();
      menu.$nextTick(_ => {
        expect(menuElm.children.length).to.be.equal(2);
        expect(item1.classList.contains('is-active')).to.be.true;
        expect(vm.selectedOptions[0]).to.be.equal('zhejiang');

        const item2 = menuElm.children[1].querySelector('.el-cascader-menu__item');
        item2.click();

        menu.$nextTick(_ => {
          expect(menuElm.children.length).to.be.equal(3);
          expect(item2.classList.contains('is-active')).to.be.true;
          expect(vm.selectedOptions[1]).to.be.equal('hangzhou');

          const item3 = menuElm.children[2].querySelector('.el-cascader-menu__item');
          item3.click();

          setTimeout(_ => {
            expect(document.body.querySelector('.el-cascader-menus').style.display).to.be.equal('none');
            expect(vm.selectedOptions[0]).to.be.equal('zhejiang');
            expect(vm.selectedOptions[1]).to.be.equal('hangzhou');
            expect(vm.selectedOptions[2]).to.be.equal('xihu');
            done();
          }, 500);
        });
      });
    }, 300);
  });
  it('filterable', done => {
    vm = createVue({
      template: `
        <el-cascader
          ref="cascader"
          placeholder="请选择"
          :options="options"
          filterable
          :debounce="0"
          v-model="selectedOptions"
        ></el-cascader>
      `,
      data() {
        return {
          options: [{
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [{
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [{
                value: 'xihu',
                label: 'West Lake'
              }]
            }, {
              value: 'ningbo',
              label: 'NingBo',
              children: [{
                value: 'jiangbei',
                label: 'Jiang Bei'
              }]
            }]
          }, {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [{
              value: 'nanjing',
              label: 'Nanjing',
              children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men'
              }]
            }]
          }],
          selectedOptions: []
        };
      }
    }, true);
    expect(vm.$el).to.be.exist;
    vm.$el.click();
    vm.$nextTick(_ => {
      vm.$refs.cascader.handleInputChange('z');
      setTimeout(_ => {
        expect(document.body.querySelector('.el-cascader-menus')).to.be.exist;

        const menu = vm.$refs.cascader.menu;
        const menuElm = menu.$el;
        const item1 = menuElm.querySelector('.el-cascader-menu__item');

        expect(menuElm.children.length).to.be.equal(1);
        expect(menuElm.children[0].children.length).to.be.equal(3);
        done();

        item1.click();

        setTimeout(_ => {
          expect(document.body.querySelector('.el-cascader-menus').style.display).to.be.equal('none');
          expect(vm.selectedOptions[0]).to.be.equal('zhejiang');
          expect(vm.selectedOptions[1]).to.be.equal('hangzhou');
          expect(vm.selectedOptions[2]).to.be.equal('xihu');
          done();
        }, 500);
      }, 300);
    });
  });
  it('props', done => {
    vm = createVue({
      template: `
        <el-cascader
          ref="cascader"
          :options="options"
          :props="props"
          v-model="selectedOptions"
        ></el-cascader>
      `,
      data() {
        return {
          options: [{
            label: 'Zhejiang',
            cities: [{
              label: 'Hangzhou'
            }, {
              label: 'NingBo'
            }]
          }, {
            label: 'Jiangsu',
            cities: [{
              label: 'Nanjing'
            }]
          }],
          props: {
            value: 'label',
            children: 'cities'
          },
          selectedOptions: []
        };
      }
    }, true);
    vm.$el.click();
    setTimeout(_ => {
      expect(document.body.querySelector('.el-cascader-menus')).to.be.exist;

      const menu = vm.$refs.cascader.menu;
      const menuElm = menu.$el;
      let items = menuElm.querySelectorAll('.el-cascader-menu__item');
      expect(items.length).to.equal(2);
      items[0].click();
      setTimeout(_ => {
        items = menuElm.querySelectorAll('.el-cascader-menu__item');
        expect(items.length).to.equal(4);
        expect(items[items.length - 1].innerText).to.equal('NingBo');
        done();
      }, 100);
    }, 100);
  });
  it('show last level', done => {
    vm = createVue({
      template: `
        <el-cascader
          ref="cascader"
          :options="options"
          :show-all-levels="false"
          v-model="selectedOptions"
        ></el-cascader>
      `,
      data() {
        return {
          options: [{
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [{
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [{
                value: 'xihu',
                label: 'West Lake'
              }]
            }, {
              value: 'ningbo',
              label: 'NingBo',
              children: [{
                value: 'jiangbei',
                label: 'Jiang Bei'
              }]
            }]
          }, {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [{
              value: 'nanjing',
              label: 'Nanjing',
              children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men'
              }]
            }]
          }],
          selectedOptions: ['zhejiang', 'ningbo', 'jiangbei']
        };
      }
    }, true);
    setTimeout(_ => {
      const span = vm.$el.querySelector('.el-cascader__label');
      expect(span.innerText).to.equal('Jiang Bei');
      done();
    }, 100);
  });
});
