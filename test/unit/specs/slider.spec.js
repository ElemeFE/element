import { createTest, createVue, triggerEvent, destroyVM } from '../util';
import Slider from 'packages/slider';

describe('Slider', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Slider);
    expect(vm.value).to.equal(0);
  });

  it('should not exceed min and max', done => {
    vm = createVue({
      template: `
        <div>
          <el-slider v-model="value" :min="50">
          </el-slider>
        </div>
      `,

      data() {
        return {
          value: 50
        };
      }
    }, true);
    setTimeout(() => {
      vm.value = 40;
      vm.$nextTick(() => {
        expect(vm.value).to.equal(50);
        vm.value = 120;
        vm.$nextTick(() => {
          expect(vm.value).to.equal(100);
          done();
        });
      });
    }, 100);
  });

  it('show tooltip', () => {
    vm = createVue({
      template: `
        <div>
          <el-slider v-model="value">
          </el-slider>
        </div>
      `,

      data() {
        return {
          value: 0
        };
      }
    }, true);
    const slider = vm.$children[0];
    slider.handleMouseEnter();
    expect(slider.$refs.tooltip.showPopper).to.true;
    slider.handleMouseLeave();
    expect(slider.$refs.tooltip.showPopper).to.false;
  });

  it('drag', done => {
    vm = createVue({
      template: `
        <div>
          <el-slider v-model="value"></el-slider>
        </div>
      `,

      data() {
        return {
          value: 0
        };
      }
    }, true);
    const slider = vm.$children[0];
    setTimeout(() => {
      slider.onButtonDown({ clientX: 0 });
      slider.onDragging({ clientX: 100 });
      slider.onDragEnd();
      expect(vm.value > 0).to.true;
      done();
    }, 150);
  });

  it('click', done => {
    vm = createVue({
      template: `
        <div>
          <el-slider v-model="value"></el-slider>
        </div>
      `,

      data() {
        return {
          value: 0
        };
      }
    }, true);
    const slider = vm.$children[0];
    setTimeout(() => {
      slider.onSliderClick({ clientX: 100 });
      setTimeout(() => {
        expect(vm.value > 0).to.true;
        done();
      }, 150);
    }, 150);
  });

  it('disabled', done => {
    vm = createVue({
      template: `
        <div>
          <el-slider v-model="value" disabled></el-slider>
        </div>
      `,

      data() {
        return {
          value: 0
        };
      }
    }, true);
    const slider = vm.$children[0];
    setTimeout(() => {
      slider.onButtonDown({ clientX: 0 });
      slider.onDragging({ clientX: 100 });
      slider.onDragEnd();
      slider.onSliderClick({ clientX: 200 });
      expect(vm.value).to.equal(0);
      done();
    }, 100);
  });

  it('show input', done => {
    vm = createVue({
      template: `
        <div>
          <el-slider v-model="value" show-input></el-slider>
        </div>
      `,

      data() {
        return {
          value: 0
        };
      }
    }, true);
    setTimeout(() => {
      triggerEvent(vm.$el.querySelector('.el-input-number'), 'keyup');
      const inputNumber = vm.$el.querySelector('.el-input-number').__vue__;
      inputNumber.currentValue = 40;
      setTimeout(() => {
        expect(vm.value).to.equal(40);
        done();
      }, 150);
    }, 150);
  });

  it('show stops', done => {
    vm = createTest(Slider, {
      showStops: true,
      step: 10
    }, true);
    const stops = vm.$el.querySelectorAll('.el-slider__stop');
    expect(stops.length).to.equal(9);
    done();
  });
});
