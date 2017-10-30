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

  it('should work', () => {
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

  it('should show correct rgb value', (done) => {
    const vm = createVue({
      template: `
        <el-color-picker v-model="color"></el-color-picker>
      `,

      data() {
        return {
          color: '#20A0FF'
        };
      }
    }, true);

    const trigger = vm.$el.querySelector('.el-color-picker__trigger');
    trigger.click();

    setTimeout(() => {
      const input = document.querySelector('.el-color-dropdown__value input');
      expect(input.value.trim().toUpperCase()).to.equal('#20A0FF');
      done();
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

  it('should change hue when clicking the hue bar', (done) => {
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
      const hueBar = document.querySelector('.el-color-hue-slider');
      hueBar.__vue__.handleClick({ target: null, clientX: 0, clientY: 1000 });
      vm.$nextTick(() => {
        const picker = vm.$children[0];
        expect(picker.color._hue > 0).to.true;
        done();
      });
    }, ANIMATION_TIME);
  });

  it('should change hue when saturation is zero', (done) => {
    const vm = createVue({
      template: `
        <el-color-picker v-model="color"></el-color-picker>
      `,

      data() {
        return {
          color: '#FFFFFF'
        };
      }
    }, true);

    const trigger = vm.$el.querySelector('.el-color-picker__trigger');
    trigger.click();

    setTimeout(() => {
      const hueBar = document.querySelector('.el-color-hue-slider');
      hueBar.__vue__.handleClick({ target: null, clientX: 0, clientY: 1000 });
      vm.$nextTick(() => {
        const thumb = document.querySelector('.el-color-hue-slider__thumb');
        expect(parseInt(thumb.style.top, 10) > 0).to.true;
        done();
      });
    }, ANIMATION_TIME);
  });

  it('should change alpha when clicking the alpha bar', (done) => {
    const vm = createVue({
      template: `
        <el-color-picker v-model="color" show-alpha></el-color-picker>
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
      const alphaBar = document.querySelector('.el-color-alpha-slider');
      alphaBar.__vue__.handleClick({ target: null, clientX: 50, clientY: 0 });
      vm.$nextTick(() => {
        const picker = vm.$children[0];
        expect(picker.color._alpha < 100).to.true;
        done();
      });
    }, ANIMATION_TIME);
  });

  it('should change saturation and value when clicking the sv-panel', (done) => {
    const vm = createVue({
      template: `
        <el-color-picker v-model="color" color-format="hsv"></el-color-picker>
      `,

      data() {
        return {
          color: 'hsv(0, 50%, 50%)'
        };
      }
    }, true);

    const trigger = vm.$el.querySelector('.el-color-picker__trigger');
    trigger.click();

    setTimeout(() => {
      const svPanel = document.querySelector('.el-color-svpanel');
      svPanel.__vue__.handleDrag({ clientX: 0, clientY: 0 });
      vm.$nextTick(() => {
        const picker = vm.$children[0];
        expect(picker.color._saturation !== 50).to.true;
        expect(picker.color._value !== 50).to.true;
        done();
      });
    }, ANIMATION_TIME);
  });
});
