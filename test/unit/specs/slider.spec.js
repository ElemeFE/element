import { createTest, createVue } from '../util';
import Slider from 'packages/slider';
import Vue from 'vue';

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
      Vue.nextTick(() => {
        expect(vm.value).to.equal(50);
        vm.value = 120;
        Vue.nextTick(() => {
          expect(vm.value).to.equal(100);
          done();
        });
      });
    }, 100);
  });

  it('show tooltip', () => {
    const vm = createTest(Slider);
    const popup = vm.$el.querySelector('.el-slider__pop');
    vm.onDragStart({ clientX: 0 });
    expect(getComputedStyle(popup).display).to.not.equal('none');
    vm.onDragEnd();
    expect(popup.style.display).to.equal('none');
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
