import { createTest, createVue, destroyVM } from '../util';
import ColorPicker from 'packages/color-picker';

describe('ColorPicker', () => {
  let vm;

  afterEach(() => {
    vm.$destroy(true);
    destroyVM(vm);
    const dropdown = document.querySelector('.el-color-dropdown');
    if (dropdown && dropdown.parentNode) dropdown.parentNode.removeChild(dropdown);
  });

  it('should works', () => {
    vm = createTest(ColorPicker, true);
    expect(vm.$el).to.exist;
  });

  it('should show alpha slider when show-alpha=true', (done) => {
    const vm = createVue({
      template: `
        <el-color-picker v-model="color" show-alpha></el-color-picker>
      `,

      data() {
        return {
          color: null
        };
      }
    }, true);

    const trigger = vm.$el.querySelector('.el-color-picker__trigger');
    trigger.click();

    setTimeout(() => {
      const alphaSlider = document.querySelector('.el-color-alpha-slider');
      expect(alphaSlider).to.exist;
      done();
    }, ANIMATION_TIME);
  });

  it('should show color picker when click trigger', (done) => {
    vm = createTest(ColorPicker, true);

    const trigger = vm.$el.querySelector('.el-color-picker__trigger');
    trigger.click();

    vm.$nextTick(() => {
      const dropdown = document.querySelector('.el-color-dropdown');
      expect(dropdown).to.exist;
      done();
    });
  });

  const ANIMATION_TIME = 300;

  it('should pick a color when confirm button click', (done) => {
    const vm = createVue({
      template: `
        <el-color-picker v-model="color"></el-color-picker>
      `,

      data() {
        return {
          color: null
        };
      }
    }, true);

    const trigger = vm.$el.querySelector('.el-color-picker__trigger');
    trigger.click();

    setTimeout(() => {
      const dropdown = document.querySelector('.el-color-dropdown__btn');
      dropdown.click();
      vm.$nextTick(() => {
        expect(vm.color).to.equal('#FF0000');
        done();
      });
    }, ANIMATION_TIME);
  });

  it('should init the right color when open', (done) => {
    const vm = createVue({
      template: `
        <el-color-picker v-model="color"></el-color-picker>
      `,

      data() {
        return {
          color: '#0f0'
        };
      }
    }, true);

    const trigger = vm.$el.querySelector('.el-color-picker__trigger');
    trigger.click();

    setTimeout(() => {
      const dropdown = document.querySelector('.el-color-dropdown__btn');
      dropdown.click();
      vm.$nextTick(() => {
        const hueBar = document.querySelector('.el-color-hue-slider__thumb');
        const top = parseInt(hueBar.style.top, 10);
        expect(top > 10).to.be.true;
        done();
      });
    }, ANIMATION_TIME);
  });

  it('should clear a color when clear button click', (done) => {
    const vm = createVue({
      template: `
        <el-color-picker v-model="color"></el-color-picker>
      `,

      data() {
        return {
          color: '#f00'
        };
      }
    }, true);

    const trigger = vm.$el.querySelector('.el-color-picker__trigger');
    trigger.click();

    setTimeout(() => {
      const clearBtn = document.querySelector('.el-color-dropdown__link-btn');
      clearBtn.click();
      setTimeout(() => {
        expect(vm.color).to.equal(null);
        done();
      }, 30);
    }, ANIMATION_TIME);
  });
});

