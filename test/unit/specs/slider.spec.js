import { createVue, triggerEvent, destroyVM, waitImmediate, wait } from '../util';

describe('Slider', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  describe('single', () => {
    it('create', async() => {
      vm = createVue({
        template: '<el-slider ref="slider" v-model="value" id="test" />',
        data() {
          return {
            value: undefined
          };
        }
      });
      await waitImmediate();
      expect(vm.value).to.equal(0);
      expect(vm.$refs.slider).to.exist;
      expect(vm.$refs.slider.$el.id).to.eq('test');
    });

    it('should not exceed min and max', async() => {
      vm = createVue({
        template: '<el-slider v-model="value" :min="50" />',

        data() {
          return {
            value: 30
          };
        }
      }, true);
      await waitImmediate();
      expect(vm.value).to.equal(50);
      vm.value = 40;
      await waitImmediate();
      expect(vm.value).to.equal(50);
      vm.value = 120;
      await waitImmediate();
      expect(vm.value).to.equal(100);
    });

    it('show tooltip', () => {
      vm = createVue({
        template: '<el-slider v-model="value" />',

        data() {
          return {
            value: 0
          };
        }
      }, true);
      const slider = vm.$children[0].$children[0];
      slider.handleMouseEnter();
      expect(slider.$refs.tooltip.showPopper).to.true;
      slider.handleMouseLeave();
      expect(slider.$refs.tooltip.showPopper).to.false;
    });

    it('hide tooltip', () => {
      vm = createVue({
        template: '<el-slider v-model="value" :show-tooltip="false" />',

        data() {
          return {
            value: 0
          };
        }
      }, true);
      const slider = vm.$children[0].$children[0];
      expect(slider.$refs.tooltip.disabled).to.true;
    });

    it('format tooltip', async() => {
      vm = createVue({
        template: '<el-slider v-model="value" :format-tooltip="formatTooltip" />',

        data() {
          return {
            value: 0
          };
        },
        methods: {
          formatTooltip(val) {
            return '$' + val;
          }
        }
      }, true);
      const sliderButton = vm.$children[0].$refs.button;
      await waitImmediate();
      expect(sliderButton.formatValue).to.equal('$0');
    });

    it('drag', async() => {
      vm = createVue({
        template: '<el-slider ref="slider" v-model="value" :vertical="vertical" />',

        data() {
          return {
            vertical: false,
            value: 0
          };
        }
      }, true);
      await waitImmediate();
      const slider = vm.$children[0].$refs.button;
      slider.onButtonDown({ clientX: 0, preventDefault() {} });
      await waitImmediate();
      slider.onDragging({ clientX: 100 });
      await waitImmediate();
      slider.onDragEnd();
      await wait(10);
      expect(vm.value).to.gt(0);
      vm.vertical = true;
      vm.value = 0;
      await waitImmediate();
      expect(vm.value).to.eq(0);
      slider.onButtonDown({ clientY: 0, preventDefault() {} });
      await waitImmediate();
      slider.onDragging({ clientY: -100 });
      await waitImmediate();
      slider.onDragEnd();
      await wait(10);
      expect(vm.value).to.gt(0);
    });

    it('accessibility', done => {
      vm = createVue({
        template: '<el-slider v-model="value" />',

        data() {
          return {
            value: 0.1
          };
        }
      }, true);
      const slider = vm.$children[0].$children[0];
      slider.onRightKeyDown();
      setTimeout(() => {
        expect(vm.value).to.equal(1);
        slider.onLeftKeyDown();
        setTimeout(() => {
          expect(vm.value).to.equal(0);
          done();
        }, 10);
      }, 10);
    });

    it('step', async() => {
      vm = createVue({
        template: '<el-slider style="width: 200px" v-model="value" :min="0" :max="1" :step="0.1" />',

        data() {
          return {
            value: 0
          };
        }
      }, true);
      const button = vm.$children[0].$refs.button;
      button.onButtonDown({ clientX: 0, preventDefault() {} });
      await waitImmediate();
      button.onDragging({ clientX: 100 });
      await waitImmediate();
      button.onDragEnd();
      await waitImmediate();
      expect(vm.value > 0.4 && vm.value < 0.6).to.true;
    });

    it('click', async() => {
      vm = createVue({
        template: '<el-slider v-model="value" />',

        data() {
          return {
            value: 0
          };
        }
      }, true);
      const slider = vm.$children[0];
      await waitImmediate();
      slider.onSliderClick({ clientX: 100 });
      await waitImmediate();
      expect(vm.value).to.gt(0);
    });

    it('change event', async() => {
      vm = createVue({
        template: '<el-slider v-model="value" @change="onChange" />',

        data() {
          return {
            data: 0,
            value: 0
          };
        },
        methods: {
          onChange(val) {
            this.data = val;
          }
        }
      }, true);
      const slider = vm.$children[0];
      vm.value = 10;
      await waitImmediate();
      expect(vm.data).to.equal(0);
      slider.onSliderClick({ clientX: 100 });
      await waitImmediate();
      expect(vm.data).to.gt(0);
    });

    it('disabled', async() => {
      vm = createVue({
        template: '<el-slider v-model="value" disabled />',

        data() {
          return {
            value: 0
          };
        }
      }, true);
      const slider = vm.$children[0].$children[0];
      slider.onButtonDown({ clientX: 0 });
      await waitImmediate();
      slider.onDragging({ clientX: 100 });
      await waitImmediate();
      slider.onDragEnd();
      await waitImmediate();
      expect(vm.value).to.equal(0);
    });

    it('show input', async() => {
      vm = createVue({
        template: '<el-slider v-model="value" show-input />',

        data() {
          return {
            value: 0
          };
        }
      }, true);
      await waitImmediate();
      triggerEvent(vm.$el.querySelector('.el-input-number'), 'keyup');
      const inputNumber = vm.$el.querySelector('.el-input-number').__vue__;
      inputNumber.setCurrentValue(40);
      await waitImmediate();
      expect(vm.value).to.equal(40);
    });

    it('show stops', async() => {
      vm = createVue({
        template: '<el-slider :value="0" show-stops :step="10" show-input />'
      }, true);
      await waitImmediate();
      const stops = vm.$el.querySelectorAll('.el-slider__stop');
      expect(stops.length).to.equal(9);
    });

    it('should resize', async() => {
      vm = createVue({
        template: '<div style="width: 100px"><el-slider :value="0" /></div>'
      }, true);
      await waitImmediate();
      expect(vm.$children[0].sliderSize).to.lte(100);
      vm.$el.style.width = '200px';
      await wait(100);
      expect(vm.$children[0].sliderSize).to.gt(150);
    });

    it('vertical mode', async() => {
      vm = createVue({
        template: '<el-slider vertical v-model="value" height="200px" />',

        data() {
          return {
            value: 0
          };
        }
      }, true);
      const slider = vm.$children[0];
      await waitImmediate();
      slider.onSliderClick({ clientY: 100 });
      await waitImmediate();
      expect(vm.value > 0).to.true;
    });
  });

  describe('range', () => {
    it('basic ranged slider', () => {
      vm = createVue({
        template: '<el-slider v-model="value" range />',

        data() {
          return {
            value: [10, 20]
          };
        }
      }, true);
      const buttons = vm.$children[0].$refs.buttons;
      expect(buttons.length).to.equal(2);
    });

    it('should not exceed min and max', async() => {
      vm = createVue({
        template: '<el-slider v-model="value" range :min="50" />',

        data() {
          return {
            value: [50, 60]
          };
        }
      }, true);
      await waitImmediate();
      vm.value = [40, 60];
      await waitImmediate();
      expect(vm.value).to.deep.equal([50, 60]);
      vm.value = [50, 120];
      await waitImmediate();
      expect(vm.value).to.deep.equal([50, 100]);
    });

    it('click', async() => {
      vm = createVue({
        template: '<el-slider style="width: 200px" range v-model="value" />',

        data() {
          return {
            value: [0, 100]
          };
        }
      }, true);
      const slider = vm.$children[0];
      await waitImmediate();
      slider.onSliderClick({ clientX: 100 });
      await waitImmediate();
      expect(vm.value[0]).to.gt(0);
      expect(vm.value[1]).to.equal(100);
    });

    it('responsive to dynamic min and max', async() => {
      vm = createVue({
        template: '<el-slider v-model="value" range :min="min" :max="max" />',

        data() {
          return {
            min: 0,
            max: 100,
            value: [50, 80]
          };
        }
      }, true);
      await waitImmediate();
      vm.min = 60;
      await waitImmediate();
      expect(vm.value).to.deep.equal([60, 80]);
      vm.min = 30;
      vm.max = 40;
      await waitImmediate();
      expect(vm.value).to.deep.equal([40, 40]);
    });

    it('show stops', async() => {
      vm = createVue({
        template: '<el-slider v-model="value" range :step="10" show-stops />',

        data() {
          return {
            value: [30, 60]
          };
        }
      }, true);
      await waitImmediate();
      const stops = vm.$el.querySelectorAll('.el-slider__stop');
      // 4 stops will be covered by bar, their DOMs are not removed.
      expect(stops.length).to.equal(9);
    });

    it('marks', async() => {
      vm = createVue({
        template: '<el-slider v-model="value" range :step="10" :marks="marks" :min="20" show-stops />',

        data() {
          return {
            value: [30, 60],
            marks: {
              0: '0°C',
              8: '8°C',
              37: '37°C',
              50: {
                style: {
                  color: '#f50'
                },
                label: <strong>50°C</strong>
              }
            }
          };
        }
      }, true);

      waitImmediate();
      const stops = vm.$el.querySelectorAll('.el-slider__marks-stop.el-slider__stop');
      const marks = vm.$el.querySelectorAll('.el-slider__marks-text');
      expect(marks.length).to.equal(2);
      expect(stops.length).to.equal(2);
    });
  });
});
