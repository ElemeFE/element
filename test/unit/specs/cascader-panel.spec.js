import {
  createTest,
  createVue,
  destroyVM,
  waitImmediate,
  wait,
  triggerEvent
} from '../util';
import CascaderPanel from 'packages/cascader-panel';

const selectedValue = ['zhejiang', 'hangzhou', 'xihu'];

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake'
    }, {
      value: 'binjiang',
      label: 'Bin Jiang'
    }]
  }, {
    value: 'ningbo',
    label: 'NingBo',
    children: [{
      value: 'jiangbei',
      label: 'Jiang Bei'
    }, {
      value: 'jiangdong',
      label: 'Jiang Dong',
      disabled: true
    }]
  }]
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  disabled: true,
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men'
    }]
  }]
}];

const options2 = [{
  id: 'zhejiang',
  name: 'Zhejiang',
  areas: [{
    id: 'hangzhou',
    name: 'Hangzhou',
    areas: [{
      id: 'xihu',
      name: 'West Lake'
    }, {
      id: 'binjiang',
      name: 'Bin Jiang'
    }]
  }, {
    id: 'ningbo',
    name: 'NingBo',
    areas: [{
      id: 'jiangbei',
      label: 'Jiang Bei'
    }, {
      id: 'jiangdong',
      name: 'Jiang Dong',
      invalid: true
    }]
  }]
}, {
  id: 'jiangsu',
  name: 'Jiangsu',
  invalid: true,
  areas: [{
    id: 'nanjing',
    name: 'Nanjing',
    areas: [{
      id: 'zhonghuamen',
      name: 'Zhong Hua Men'
    }]
  }]
}];

const options3 = [
  {
    value: 'shanghai',
    label: '上海',
    children: [
      {
        value: 'baoshan',
        label: '宝山'
      }
    ]
  },
  {
    value: 'beijing',
    label: '北京'
  }
];

const getMenus = el => el.querySelectorAll('.el-cascader-menu');
const getOptions = (el, menuIndex) => getMenus(el)[menuIndex].querySelectorAll('.el-cascader-node');
const getValidOptions = (el, menuIndex) => getMenus(el)[menuIndex].querySelectorAll('.el-cascader-node[tabindex="-1"]');
const getLabel = el => el.querySelector('.el-cascader-node__label').textContent;

describe('CascaderPanel', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(CascaderPanel, true);
    expect(vm.$el).to.exist;
  });

  it('expand and check', async() => {
    vm = createVue({
      template: `
        <el-cascader-panel
          ref="panel"
          v-model="value"
          :options="options"></el-cascader-panel>
      `,
      data() {
        return {
          value: [],
          options
        };
      }
    }, true);

    const el = vm.$el;
    const expandHandler = sinon.spy();
    const changeHandler = sinon.spy();
    vm.$refs.panel.$on('expand-change', expandHandler);
    vm.$refs.panel.$on('change', changeHandler);

    expect(getMenus(el).length).to.equal(1);
    expect(getOptions(el, 0).length).to.equal(2);

    const firstOption = getOptions(el, 0)[0];
    expect(getLabel(firstOption)).to.equal('Zhejiang');
    firstOption.click();
    await waitImmediate();
    expect(expandHandler.calledOnceWith(['zhejiang'])).to.be.true;
    expect(getMenus(el).length).to.equal(2);

    getOptions(el, 1)[0].click();
    await waitImmediate();
    expect(getMenus(el).length).to.equal(3);

    getOptions(el, 2)[0].click();
    await waitImmediate();
    expect(changeHandler.calledOnceWith(selectedValue)).to.be.true;
    expect(vm.value).to.deep.equal(selectedValue);
  });

  it('with default value', async() => {
    vm = createVue({
      template: `
        <el-cascader-panel
          ref="panel"
          v-model="value"
          :options="options"></el-cascader-panel>
      `,
      data() {
        return {
          value: selectedValue,
          options
        };
      }
    }, true);

    const el = vm.$el;

    await waitImmediate();
    expect(getMenus(el).length).to.equal(3);
    expect(getOptions(el, 0)[0].className).to.includes('in-active-path');
    expect(getOptions(el, 2)[0].className).to.includes('is-active');
    expect(getOptions(el, 2)[0].querySelector('.el-icon-check')).to.exist;
  });

  it('disabled options', async() => {
    vm = createVue({
      template: `
        <el-cascader-panel
          ref="panel"
          :value="value"
          :options="options"></el-cascader-panel>
      `,
      data() {
        return {
          value: [],
          options
        };
      }
    }, true);

    const el = vm.$el;
    const expandHandler = sinon.spy();
    vm.$refs.panel.$on('expand-change', expandHandler);

    expect(getOptions(el, 0).length).to.equal(2);
    expect(getValidOptions(el, 0).length).to.equal(1);

    const secondOption = getOptions(el, 0)[1];
    expect(secondOption.className).to.includes('is-disabled');
    secondOption.click();

    await waitImmediate();
    expect(expandHandler.called).to.be.false;
    expect(getMenus(el).length).to.equal(1);
  });

  it('expand by hover', async() => {
    vm = createVue({
      template: `
        <el-cascader-panel
          :options="options"
          :props="props"></el-cascader-panel>
      `,
      data() {
        return {
          options,
          props: {
            expandTrigger: 'hover'
          }
        };
      }
    }, true);

    const el = vm.$el;
    triggerEvent(getOptions(el, 0)[1], 'mouseenter');
    await waitImmediate();
    expect(getMenus(el).length).to.equal(1);
    triggerEvent(getOptions(el, 0)[0], 'mouseenter');
    await waitImmediate();
    expect(getMenus(el).length).to.equal(2);
    triggerEvent(getOptions(el, 1)[0], 'mouseenter');
    await waitImmediate();
    expect(getMenus(el).length).to.equal(3);
  });

  it('emit value only', async() => {
    vm = createVue({
      template: `
        <el-cascader-panel
          ref="panel"
          v-model="value"
          :options="options"
          :props="props"></el-cascader-panel>
      `,
      data() {
        return {
          value: 'xihu',
          options,
          props: {
            emitPath: false
          }
        };
      }
    }, true);

    const el = vm.$el;

    await waitImmediate();
    expect(getMenus(el).length).to.equal(3);
    expect(getOptions(el, 2)[0].querySelector('.el-icon-check')).to.exist;

    getOptions(el, 1)[1].click();
    await waitImmediate();
    getOptions(el, 2)[0].click();
    await waitImmediate();
    expect(vm.value).to.equal('jiangbei');
  });

  it('multiple mode', async() => {
    vm = createVue({
      template: `
        <el-cascader-panel
          v-model="value"
          :options="options"
          :props="props"></el-cascader-panel>
      `,
      data() {
        return {
          value: [],
          options: options,
          props: {
            multiple: true
          }
        };
      }
    }, true);

    const el = vm.$el;
    const checkbox = getOptions(el, 0)[0].querySelector('.el-checkbox');
    expect(checkbox).to.exist;
    expect(checkbox.querySelector('.el-checkbox__input').className).to.not.includes('is-checked');
    checkbox.querySelector('input').click();

    await waitImmediate();
    expect(checkbox.querySelector('.el-checkbox__input').className).to.includes('is-checked');
    expect(vm.value.length).to.equal(3);
  });

  it('multiple mode with disabled default value', async() => {
    vm = createVue({
      template: `
        <el-cascader-panel
          v-model="value"
          :options="options"
          :props="props"></el-cascader-panel>
      `,
      data() {
        return {
          value: [['zhejiang', 'ningbo', 'jiangdong']],
          options: options,
          props: {
            multiple: true
          }
        };
      }
    }, true);

    const el = vm.$el;
    const checkbox = getOptions(el, 0)[0].querySelector('.el-checkbox');

    await waitImmediate();
    expect(checkbox).to.exist;
    expect(checkbox.querySelector('.el-checkbox__input').className).to.includes('is-indeterminate');
    checkbox.querySelector('input').click();

    await waitImmediate();
    expect(checkbox.querySelector('.el-checkbox__input').className).to.includes('is-checked');
    expect(vm.value.length).to.equal(4);

    getOptions(el, 1)[1].click();
    await waitImmediate();
    getOptions(el, 2)[1].querySelector('input').click();
    await waitImmediate();
    expect(vm.value.length).to.equal(4);
  });

  it('check strictly in single mode', async() => {
    vm = createVue({
      template: `
        <el-cascader-panel
          v-model="value"
          :options="options"
          :props="props"></el-cascader-panel>
      `,
      data() {
        return {
          value: ['zhejiang'],
          options: options,
          props: {
            checkStrictly: true
          }
        };
      }
    }, true);

    const el = vm.$el;
    const radio = getOptions(el, 0)[0].querySelector('.el-radio');

    await waitImmediate();
    expect(radio).to.exist;
    expect(radio.className).to.includes('is-checked');

    getOptions(el, 0)[0].click();
    await waitImmediate();
    getOptions(el, 1)[0].querySelector('input').click();
    await waitImmediate();
    expect(vm.value).to.deep.equal(['zhejiang', 'hangzhou']);
    expect(getOptions(el, 0)[1].querySelector('.el-radio').className).to.includes('is-disabled');
  });

  it('check strictly in multiple mode', async() => {
    vm = createVue({
      template: `
        <el-cascader-panel
          v-model="value"
          :options="options"
          :props="props"></el-cascader-panel>
      `,
      data() {
        return {
          value: [['zhejiang']],
          options: options,
          props: {
            multiple: true,
            checkStrictly: true,
            emitPath: false
          }
        };
      }
    }, true);

    const el = vm.$el;
    const checkbox = getOptions(el, 0)[0].querySelector('.el-checkbox');

    await waitImmediate();
    expect(checkbox).to.exist;
    expect(checkbox.className).to.includes('is-checked');

    getOptions(el, 0)[0].click();
    await waitImmediate();
    expect(getOptions(el, 1)[0].querySelector('.el-checkbox').className).to.not.includes('is-checked');
    getOptions(el, 1)[0].querySelector('input').click();
    await waitImmediate();
    expect(vm.value).to.deep.equal(['zhejiang', 'hangzhou']);
    expect(getOptions(el, 0)[1].querySelector('.el-checkbox').className).to.includes('is-disabled');
  });

  it('custom props', async() => {
    vm = createVue({
      template: `
        <el-cascader-panel
          v-model="value"
          :options="options"
          :props="props"></el-cascader-panel>
      `,
      data() {
        return {
          value: [],
          options: options2,
          props: {
            value: 'id',
            label: 'name',
            children: 'areas',
            disabled: 'invalid'
          }
        };
      }
    }, true);

    const el = vm.$el;

    expect(getMenus(el).length).to.equal(1);
    expect(getOptions(el, 0).length).to.equal(2);
    expect(getValidOptions(el, 0).length).to.equal(1);

    const firstOption = getOptions(el, 0)[0];
    expect(getLabel(firstOption)).to.equal('Zhejiang');
    firstOption.click();
    await waitImmediate();
    expect(getMenus(el).length).to.equal(2);

    getOptions(el, 1)[0].click();
    await waitImmediate();
    expect(getMenus(el).length).to.equal(3);

    getOptions(el, 2)[0].click();
    await waitImmediate();
    expect(vm.value).to.deep.equal(selectedValue);
  });

  it('value key is same as label key', async() => {
    vm = createVue({
      template: `
        <el-cascader-panel
          v-model="value"
          :options="options"
          :props="props"></el-cascader-panel>
      `,
      data() {
        return {
          value: [],
          options,
          props: {
            label: 'value'
          }
        };
      }
    }, true);

    const el = vm.$el;

    expect(getMenus(el).length).to.equal(1);
    expect(getOptions(el, 0).length).to.equal(2);
    expect(getValidOptions(el, 0).length).to.equal(1);

    const firstOption = getOptions(el, 0)[0];
    expect(getLabel(firstOption)).to.equal('zhejiang');
    firstOption.click();
    await waitImmediate();
    expect(getMenus(el).length).to.equal(2);

    getOptions(el, 1)[0].click();
    await waitImmediate();
    expect(getMenus(el).length).to.equal(3);

    getOptions(el, 2)[0].click();
    await waitImmediate();
    expect(vm.value).to.deep.equal(selectedValue);
  });

  it('dynamic loading', async() => {
    vm = createVue({
      template: `
        <el-cascader-panel
          v-model="value"
          :props="props"></el-cascader-panel>
      `,
      data() {
        let id = 0;
        return {
          value: [],
          props: {
            lazy: true,
            lazyLoad(node, resolve) {
              const { level } = node;
              setTimeout(() => {
                const nodes = Array.from({ length: level + 1 })
                  .map(() => ({
                    value: ++id,
                    label: `选项${id}`,
                    leaf: level >= 2
                  }));
                resolve(nodes);
              }, 1000);
            }
          }
        };
      }
    }, true);

    const el = vm.$el;
    await wait(1000);
    const firstOption = getOptions(el, 0)[0];
    firstOption.click();
    await waitImmediate();
    expect(firstOption.querySelector('i').className).to.includes('el-icon-loading');
    await wait(1000);
    expect(firstOption.querySelector('i').className).to.includes('el-icon-arrow-right');
    expect(getMenus(el).length).to.equal(2);
    getOptions(el, 1)[0].click();
    await wait(1000);
    getOptions(el, 2)[0].click();
    await waitImmediate();
    expect(vm.value.length).to.equal(3);
  });

  it('click leaf hidden children', async() => {
    vm = createVue({
      template: `
        <el-cascader-panel
          ref="panel"
          v-model="value"
          :options="options"></el-cascader-panel>
      `,
      data() {
        return {
          value: [],
          options: options3
        };
      }
    }, true);

    const el = vm.$el;
    const elOptions = getOptions(el, 0);
    const firstOption = elOptions[0];
    const twoOption = elOptions[1];
    firstOption.click();
    await waitImmediate();
    expect(getMenus(el).length).to.equal(2);
    twoOption.click();
    await waitImmediate();
    expect(getMenus(el).length).to.equal(1);
  });
});

