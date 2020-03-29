import { createTest, createVue, destroyVM, wait } from '../util';
import ColorPicker from 'packages/color-picker';

describe('ColorPicker', () => {
  const ANIMATION_TIME = 300;
  let vm;

  afterEach(() => {
    destroyVM(vm);
    const dropdown = document.querySelector('.el-color-dropdown');
    if (dropdown && dropdown.parentNode) dropdown.parentNode.removeChild(dropdown);
  });

  it('should work', () => {
    vm = createTest(ColorPicker, true);
    expect(vm.$el).to.exist;
  });

  it('should show alpha slider when show-alpha=true', async() => {
    vm = createVue({
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

    await wait(ANIMATION_TIME);
    const alphaSlider = document.querySelector('.el-color-alpha-slider');
    expect(alphaSlider).to.exist;
  });

  it('should show color picker when click trigger', async() => {
    vm = createTest(ColorPicker, true);

    const trigger = vm.$el.querySelector('.el-color-picker__trigger');
    trigger.click();

    await wait(ANIMATION_TIME);
    const dropdown = document.querySelector('.el-color-dropdown');
    expect(dropdown).to.exist;
  });

  it('should pick a color when confirm button click', async() => {
    vm = createVue({
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

    await wait(ANIMATION_TIME);
    const dropdown = document.querySelector('.el-color-dropdown__btn');
    dropdown.click();
    expect(vm.color).to.equal('#FF0000');
  });

  it('should show correct rgb value', async() => {
    vm = createVue({
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

    await wait(ANIMATION_TIME);
    const input = document.querySelector('.el-color-dropdown__value input');
    expect(input.value.trim().toUpperCase()).to.equal('#20A0FF');
  });

  it('should init the right color when open', async() => {
    vm = createVue({
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

    await wait(ANIMATION_TIME);
    const dropdown = document.querySelector('.el-color-dropdown__btn');
    dropdown.click();
    await vm.$nextTick();
    const hueBar = document.querySelector('.el-color-hue-slider__thumb');
    const top = parseFloat(hueBar.style.top);
    expect(top > 10).to.be.true;
  });

  it('should clear a color when clear button click', async() => {
    vm = createVue({
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

    await wait(ANIMATION_TIME);
    const clearBtn = document.querySelector('.el-color-dropdown__link-btn');
    clearBtn.click();
    await wait(30);
    expect(vm.color).to.equal(null);
  });

  it('should change hue when clicking the hue bar', async() => {
    vm = createVue({
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

    await wait(ANIMATION_TIME);
    const hueBar = document.querySelector('.el-color-hue-slider');
    hueBar.__vue__.handleClick({ target: null, clientX: 0, clientY: 1000 });
    await vm.$nextTick();
    const picker = vm.$children[0];
    expect(picker.color._hue > 0).to.true;
  });

  it('should change hue when saturation is zero', async() => {
    vm = createVue({
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

    await wait(ANIMATION_TIME);
    const hueBar = document.querySelector('.el-color-hue-slider');
    hueBar.__vue__.handleClick({ target: null, clientX: 0, clientY: 1000 });
    await vm.$nextTick();
    const thumb = document.querySelector('.el-color-hue-slider__thumb');
    expect(parseInt(thumb.style.top, 10) > 0).to.true;
  });

  it('should change alpha when clicking the alpha bar', async() => {
    vm = createVue({
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

    await wait(ANIMATION_TIME);
    const alphaBar = document.querySelector('.el-color-alpha-slider');
    alphaBar.__vue__.handleClick({ target: null, clientX: 50, clientY: 0 });
    await vm.$nextTick();
    const picker = vm.$children[0];
    expect(picker.color._alpha > 0).to.true;
  });

  it('should change saturation and value when clicking the sv-panel', async() => {
    vm = createVue({
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

    await wait(ANIMATION_TIME);
    const svPanel = document.querySelector('.el-color-svpanel');
    svPanel.__vue__.handleDrag({ clientX: 0, clientY: 0 });
    await vm.$nextTick();
    const picker = vm.$children[0];
    expect(picker.color._saturation !== 50).to.true;
    expect(picker.color._value !== 50).to.true;
  });

  it('should change color to the selected color', async() => {
    vm = createVue({
      template: `
        <el-color-picker v-model="color" show-alpha :predefine="colors"></el-color-picker>
      `,
      data() {
        return {
          color: 'hsva(180, 65, 20, 0.5)',
          colors: [
            'rgba(19, 206, 102, 0.18)',
            'rgb(25, 159, 147)',
            'hsv(250, 54, 98)',
            'hsva(180, 65, 20, 0.5)',
            'hsl(170, 32%, 87%)',
            'hsla(45, 62%, 47%, 0.13)',
            '#7486de',
            '#45aa9477',
            '#892345'
          ]
        };
      }
    }, true);

    const trigger = vm.$el.querySelector('.el-color-picker__trigger');
    trigger.click();

    await wait(ANIMATION_TIME);
    expect(document.querySelectorAll('.el-color-predefine__color-selector').length === 9).to.be.true;
    const selector = document.querySelector('.el-color-predefine__color-selector:nth-child(4)');
    selector.click();
    await vm.$nextTick();

    const picker = vm.$children[0];
    expect(picker.color._hue === 180).to.be.true;
    expect(picker.color._saturation === 65).to.be.true;
    expect(picker.color._value === 20).to.be.true;
    expect(picker.color._alpha === 50).to.be.true;

    const selector2 = document.querySelector('.el-color-predefine__color-selector:nth-child(3)');
    selector2.click();

    await vm.$nextTick();
    expect(picker.color._hue === 250).to.be.true;
    expect(picker.color._saturation === 54).to.be.true;
    expect(picker.color._value === 98).to.be.true;
    expect(picker.color._alpha === 100).to.be.true;
  });

  it('should change selected state of predefined color', async() => {
    vm = createVue({
      template: `
        <el-color-picker v-model="color" show-alpha :predefine="colors"></el-color-picker>
      `,
      data() {
        return {
          color: 'hsva(180, 65, 20, 0.5)',
          colors: [
            'rgba(19, 206, 102, 0.18)',
            'rgb(25, 159, 147)',
            'hsv(250, 54, 98)',
            'hsva(180, 65, 20, 0.5)',
            'hsl(170, 32%, 87%)',
            'hsla(45, 62%, 47%, 0.13)',
            '#7486de',
            '#45aa9477',
            '#892345'
          ]
        };
      }
    }, true);

    const trigger = vm.$el.querySelector('.el-color-picker__trigger');
    trigger.click();

    await wait(ANIMATION_TIME);
    const selector = document.querySelector('.el-color-predefine__color-selector:nth-child(4)');
    selector.click();
    await vm.$nextTick();
    expect(selector.classList.contains('selected')).to.be.true;

    const hueBar = document.querySelector('.el-color-hue-slider');
    hueBar.__vue__.handleClick({ target: null, clientX: 0, clientY: 1000 });

    await vm.$nextTick();
    expect(selector.classList.contains('selected')).to.be.false;
  });
});
