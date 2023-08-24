import { createTest, createVue, destroyVM } from '../util';
import TreeSelect from 'packages/tree-select';

const data = [
  {
    value: 1,
    label: '一级 1',
    children: [
      {
        value: 11,
        label: '二级 1-1',
        children: [
          {
            value: 111,
            label: '三级 1-1'
          }
        ]
      }
    ]
  }
];

describe('TreeSelect', () => {
  const getTreeSelectVm = (configs = {}, options) => {
    ['multiple', 'checkStrictly', 'showCheckbox'].forEach(config => {
      configs[config] = configs[config] || false;
    });
    const vm = createVue(Object.assign({
      template: `
        <el-tree-select 
          v-model="value" 
          :data="data"
          :multiple="multiple"
          :checkStrictly="checkStrictly"
          :showCheckbox="showCheckbox"
        />    
      `,
      data() {
        return {
          data,
          value: '',
          multiple: configs.multiple,
          checkStrictly: configs.checkStrictly,
          showCheckbox: configs.showCheckbox
        };
      }
    }, options), true);
    return vm;
  };

  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(TreeSelect, true);
    expect(vm.$el).to.exist;
  });

  it('render dropdown', async() => {
    vm = getTreeSelectVm();
    expect(vm.$el.querySelector('.el-tree')).to.exist;
    expect(vm.$el.querySelectorAll('.el-tree > .el-tree-node').length).to.equal(1);
    expect(vm.$el.querySelectorAll('.el-tree .el-tree-node').length).to.equal(3);
  });

  it('default value', done => {
    vm = createVue({
      template: `
        <div>
          <el-tree-select 
            v-model="value"
            :data="data"
          />
        </div>
      `,
      data() {
        return {
          data: data,
          value: 111
        };
      }
    }, true);
    setTimeout(() => {
      expect(vm.$el.querySelector('.el-input__inner').value).to.equal('三级 1-1');
      done();
    }, 100);
  });

  it('disabled select', () => {
    vm = createTest(TreeSelect, { disabled: true, value: '' }, true);
    expect(vm.$el.querySelector('.el-input').classList.contains('is-disabled')).to.true;
  });
});
