import { createTest, createVue, destroyVM } from '../util';
import Switch from 'packages/switch';
import Vue from 'vue';

describe('Switch', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Switch, {
      onText: 'on',
      offText: 'off',
      onColor: '#0f0',
      offColor: '#f00',
      width: 100
    });

    const core = vm.$el.querySelector('.el-switch__core');
    expect(core.style.backgroundColor).to.equal('rgb(0, 255, 0)');
    expect(core.style.width).to.equal('100px');
    expect(vm.$el.querySelector('.el-switch__label--left').querySelector('span').textContent).to.equal('on');
  });

  it('switch with icons', () => {
    vm = createTest(Switch, {
      onIconClass: 'el-icon-check',
      offIconClass: 'el-icon-close'
    });

    const icon = vm.$el.querySelector('.el-switch__label--left').querySelector('i');
    expect(icon.classList.contains('el-icon-check')).to.true;
  });

  it('value correctly update', done => {
    vm = createVue({
      template: `
        <div>
          <el-switch v-model="value"></el-switch>
        </div>
      `,

      data() {
        return {
          value: true
        };
      }
    }, true);

    const core = vm.$el.querySelector('.el-switch__core');
    const button = vm.$el.querySelector('.el-switch__button');
    core.click();
    Vue.nextTick(() => {
      expect(vm.value).to.equal(false);
      expect(getComputedStyle(core).backgroundColor).to.equal('rgb(192, 204, 218)');
      expect(/2px, 2px/.test(button.style.transform)).to.true;
      core.click();
      expect(vm.value).to.equal(true);
      done();
    });
  });

  it('disabled switch should not respond to user click', done => {
    vm = createVue({
      template: `
        <div>
          <el-switch disabled v-model="value"></el-switch>
        </div>
      `,

      data() {
        return {
          value: true
        };
      }
    }, true);

    vm.$el.querySelector('.el-switch__core').click();
    Vue.nextTick(() => {
      expect(vm.value).to.true;
      done();
    });
  });
});
