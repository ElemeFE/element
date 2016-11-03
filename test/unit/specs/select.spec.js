import { createTest, createVue, triggerEvent, destroyVM } from '../util';
import Select from 'packages/select';

describe('Select', () => {
  const getSelectVm = (configs = {}, options) => {
    ['multiple', 'clearable', 'filterable', 'remote'].forEach(config => {
      configs[config] = configs[config] || false;
    });
    if (!options) {
      options = [{
        value: '选项1',
        label: '黄金糕',
        disabled: false
      }, {
        value: '选项2',
        label: '双皮奶',
        disabled: false
      }, {
        value: '选项3',
        label: '蚵仔煎',
        disabled: false
      }, {
        value: '选项4',
        label: '龙须面',
        disabled: false
      }, {
        value: '选项5',
        label: '北京烤鸭',
        disabled: false
      }];
    }
    const vm = createVue({
      template: `
        <div>
          <el-select
            v-model="value"
            :multiple="multiple"
            :clearable="clearable"
            :filterable="filterable"
            :filterMethod="filterMethod"
            :remote="remote"
            :loading="loading"
            :remoteMethod="remoteMethod">
            <el-option
              v-for="item in options"
              :label="item.label"
              :disabled="item.disabled"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      `,

      data() {
        return {
          options,
          multiple: configs.multiple,
          clearable: configs.clearable,
          filterable: configs.filterable,
          loading: false,
          filterMethod: configs.filterMethod && configs.filterMethod(this),
          remote: configs.remote,
          remoteMethod: configs.remoteMethod && configs.remoteMethod(this),
          value: configs.multiple ? [] : ''
        };
      }
    }, true);
    return vm;
  };

  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Select, true);
    expect(vm.$el.className).to.equal('el-select');
    expect(vm.$el.querySelector('.el-input__inner').placeholder).to.equal('请选择');
    vm.toggleMenu();
    expect(vm.visible).to.true;
  });

  it('options rendered correctly', () => {
    vm = getSelectVm();
    const options = vm.$el.querySelectorAll('.el-select-dropdown__item');
    const result = [].every.call(options, (option, index) => {
      let text = option.querySelector('span').textContent;
      return text === vm.options[index].label;
    });
    expect(result).to.true;
  });

  it('default value', done => {
    vm = createVue({
      template: `
        <div>
          <el-select v-model="value">
            <el-option
              v-for="item in options"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      `,

      data() {
        return {
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }],
          value: '选项2'
        };
      }
    }, true);
    setTimeout(() => {
      expect(vm.$el.querySelector('.el-input__inner').value).to.equal('双皮奶');
      done();
    }, 100);
  });

  it('single select', done => {
    sinon.stub(window.console, 'log');
    vm = createVue({
      template: `
        <div>
          <el-select v-model="value" @change="handleChange">
            <el-option
              v-for="item in options"
              :label="item.label"
              :value="item.value">
              <p>{{item.label}} {{item.value}}</p>
            </el-option>
          </el-select>
        </div>
      `,

      data() {
        return {
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          value: ''
        };
      },

      methods: {
        handleChange() {
          console.log('changed');
        }
      }
    }, true);
    const options = vm.$el.querySelectorAll('.el-select-dropdown__item');
    expect(vm.value).to.equal('');
    triggerEvent(options[2], 'mouseenter');
    options[2].click();
    setTimeout(() => {
      expect(vm.value).to.equal('选项3');
      expect(window.console.log.callCount).to.equal(1);
      options[4].click();
      setTimeout(() => {
        expect(vm.value).to.equal('选项5');
        expect(window.console.log.callCount).to.equal(2);
        window.console.log.restore();
        done();
      }, 100);
    }, 100);
  });

  it('disabled option', done => {
    vm = getSelectVm();
    vm.options[1].disabled = true;
    setTimeout(() => {
      const options = vm.$el.querySelectorAll('.el-select-dropdown__item');
      expect(options[1].classList.contains('is-disabled')).to.true;
      options[1].click();
      setTimeout(() => {
        expect(vm.value).to.equal('');
        done();
      }, 100);
    }, 100);
  });

  it('disabled select', () => {
    vm = createTest(Select, { disabled: true }, true);
    expect(vm.$el.querySelector('.el-input').classList.contains('is-disabled')).to.true;
  });

  it('keyboard operations', done => {
    vm = getSelectVm();
    const select = vm.$children[0];
    let i = 8;
    while (i--) {
      select.navigateOptions('next');
    }
    select.navigateOptions('prev');
    setTimeout(() => {
      expect(select.hoverIndex).to.equal(0);
      select.selectOption();
      setTimeout(() => {
        expect(select.value).to.equal('选项1');
        done();
      }, 100);
    }, 100);
  });

  it('clearable', done => {
    vm = getSelectVm({ clearable: true });
    const select = vm.$children[0];
    vm.value = '选项1';
    select.inputHovering = true;
    setTimeout(() => {
      const icon = vm.$el.querySelector('.el-input__icon');
      expect(icon.classList.contains('el-icon-circle-close')).to.true;
      icon.click();
      expect(vm.value).to.equal('');
      done();
    }, 100);
  });

  it('custom el-option template', () => {
    vm = createVue({
      template: `
        <div>
          <el-select v-model="value">
            <el-option
              v-for="item in options"
              :label="item.label"
              :value="item.value">
              <p>{{item.label}} {{item.value}}</p>
            </el-option>
          </el-select>
        </div>
      `,

      data() {
        return {
          options: [{
            value: 'value',
            label: 'label'
          }],
          value: ''
        };
      }
    }, true);
    expect(vm.$el.querySelector('.el-select-dropdown__item p').textContent).to.equal('label value');
  });

  it('option group', () => {
    vm = createVue({
      template: `
        <div>
          <el-select v-model="value">
            <el-option-group
              v-for="group in options"
              :disabled="group.disabled"
              :label="group.label">
              <el-option
                v-for="item in group.options"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-option-group>
          </el-select>
        </div>
      `,

      data() {
        return {
          options: [{
            label: '热门城市',
            options: [{
              value: 'Shanghai',
              label: '上海'
            }, {
              value: 'Beijing',
              label: '北京'
            }]
          }, {
            label: '城市名',
            disabled: true,
            options: [{
              value: 'Chengdu',
              label: '成都'
            }, {
              value: 'Shenzhen',
              label: '深圳'
            }, {
              value: 'Guangzhou',
              label: '广州'
            }, {
              value: 'Dalian',
              label: '大连'
            }]
          }],
          value: ''
        };
      }
    }, true);
    const groups = vm.$el.querySelectorAll('.el-select-group__wrap');
    const options = groups[1].querySelectorAll('.el-select-dropdown__item');
    expect(groups.length).to.equal(2);
    expect(options.length).to.equal(4);
    expect(options[0].querySelector('span').textContent).to.equal('成都');
  });

  it('filterable', done => {
    vm = getSelectVm({ filterable: true });
    const select = vm.$children[0];
    select.selectedLabel = '面';
    select.onInputChange();
    select.visible = true;
    setTimeout(() => {
      expect(select.filteredOptionsCount).to.equal(1);
      done();
    }, 100);
  });

  it('filterable with custom filter-method', done => {
    const filterMethod = vm => {
      return query => {
        vm.options = vm.options.filter(option => option.label.indexOf(query) === -1);
      };
    };
    vm = getSelectVm({ filterable: true, filterMethod });
    const select = vm.$children[0];
    select.query = '面';
    setTimeout(() => {
      expect(select.filteredOptionsCount).to.equal(4);
      done();
    }, 100);
  });

  it('multiple select', done => {
    vm = getSelectVm({ multiple: true });
    const options = vm.$el.querySelectorAll('.el-select-dropdown__item');
    vm.value = ['选项1'];
    setTimeout(() => {
      options[1].click();
      options[3].click();
      setTimeout(() => {
        expect(vm.value.indexOf('选项2') > -1 && vm.value.indexOf('选项4') > -1).to.true;
        const tagCloseIcons = vm.$el.querySelectorAll('.el-tag__close');
        tagCloseIcons[0].click();
        setTimeout(() => {
          expect(vm.value.indexOf('选项1')).to.equal(-1);
          done();
        }, 100);
      }, 100);
    }, 100);
  });

  it('multiple remote search', done => {
    const remoteMethod = vm => {
      return query => {
        vm.loading = true;
        setTimeout(() => {
          vm.options = vm.options.filter(option => {
            return option.label.indexOf(query) > -1;
          });
          vm.loading = false;
        }, 200);
      };
    };
    vm = getSelectVm({
      multiple: true,
      remote: true,
      filterable: true,
      remoteMethod
    });
    const select = vm.$children[0];
    select.query = '面';
    setTimeout(() => {
      expect(select.filteredOptionsCount).to.equal(1);
      select.query = '';
      select.options[0].$el.click();
      vm.$nextTick(() => {
        expect(vm.value[0]).to.equal('选项4');
        select.deletePrevTag({ target: select.$refs.input });
        select.deletePrevTag({ target: select.$refs.input });
        select.resetInputState({ keyCode: 1 });
        vm.$nextTick(() => {
          expect(vm.value.length).to.equal(0);
          done();
        });
      });
    }, 250);
  });
});
