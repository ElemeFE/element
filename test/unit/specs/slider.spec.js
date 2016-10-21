import { createTest, createVue, triggerEvent } from '../util';
import Slider from 'packages/slider';

describe('Slider', () => {
  it('create', () => {
    const vm = createTest(Slider);
    const popup = vm.$el.querySelector('.el-slider__pop');
    expect(popup.textContent).to.equal('0');
  });

  it('should not exceed min and max', done => {
    const vm = createVue({
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
    const vm = createVue({
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
    const popup = vm.$el.querySelector('.el-slider__pop');
    slider.onDragStart({ clientX: 0 });
    vm.$nextTick(() => {
      expect(popup.style.display).to.not.equal('none');
      slider.onDragEnd();
      setTimeout(() => {
        expect(popup.style.display).to.equal('none');
      }, 350);
    });
  });

  it('drag', done => {
    const vm = createVue({
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
    const vm = createVue({
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

  it('show input', done => {
    const vm = createVue({
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
    const vm = createTest(Slider, {
      showStops: true,
      step: 10
    }, true);
    const stops = vm.$el.querySelectorAll('.el-slider__stop');
    expect(stops.length).to.equal(9);
    done();
  });
});
