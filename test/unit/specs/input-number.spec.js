import {createVue, triggerEvent, triggerClick, destroyVM, waitImmediate, wait} from '../util';

const DELAY = 1;

describe('InputNumber', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', async() => {
    vm = createVue({
      template: `
        <el-input-number v-model="value">
        </el-input-number>
      `,
      data() {
        return {
          value: 1
        };
      }
    }, true);
    let input = vm.$el.querySelector('input');

    await waitImmediate();
    expect(vm.value).to.be.equal(1);
    expect(input.value).to.be.equal('1');
  });
  it('decrease', async() => {
    vm = createVue({
      template: `
        <el-input-number v-model="value" ref="input" @input="eventCount++">
        </el-input-number>
      `,
      data() {
        return {
          value: 5,
          eventCount: 0
        };
      }
    }, true);

    let input = vm.$el.querySelector('input');
    let btnDecrease = vm.$el.querySelector('.el-input-number__decrease');

    triggerEvent(btnDecrease, 'mousedown');
    triggerClick(document, 'mouseup');

    await waitImmediate();
    expect(vm.value).to.be.equal(4);
    expect(input.value).to.be.equal('4');
    expect(vm.eventCount).to.be.equal(1);
  });
  it('increase', async() => {
    vm = createVue({
      template: `
        <el-input-number v-model="value" @input="eventCount++">
        </el-input-number>
      `,
      data() {
        return {
          value: 1.5,
          eventCount: 0
        };
      }
    }, true);

    let input = vm.$el.querySelector('input');
    let btnIncrease = vm.$el.querySelector('.el-input-number__increase');

    triggerEvent(btnIncrease, 'mousedown');
    triggerClick(document, 'mouseup');
    await waitImmediate();

    expect(vm.value).to.be.equal(2.5);
    expect(input.value).to.be.equal('2.5');
    expect(vm.eventCount).to.be.equal(1);
  });
  it('disabled', async() => {
    vm = createVue({
      template: `
        <el-input-number v-model="value" disabled>
        </el-input-number>
      `,
      data() {
        return {
          value: 2
        };
      }
    }, true);

    let input = vm.$el.querySelector('input');
    let btnDecrease = vm.$el.querySelector('.el-input-number__decrease');
    let btnIncrease = vm.$el.querySelector('.el-input-number__increase');

    triggerEvent(btnDecrease, 'mousedown');
    triggerClick(document, 'mouseup');

    await waitImmediate();
    expect(vm.value).to.be.equal(2);
    expect(input.value).to.be.equal('2');

    triggerEvent(btnIncrease, 'mousedown');
    triggerClick(document, 'mouseup');

    await waitImmediate();
    expect(vm.value).to.be.equal(2);
    expect(input.value).to.be.equal('2');
  });
  it('step', async() => {
    vm = createVue({
      template: `
        <el-input-number v-model="value" :step="3.2">
        </el-input-number>
      `,
      data() {
        return {
          value: 5
        };
      }
    }, true);

    let input = vm.$el.querySelector('input');
    let btnIncrease = vm.$el.querySelector('.el-input-number__increase');
    let btnDecrease = vm.$el.querySelector('.el-input-number__decrease');

    triggerEvent(btnIncrease, 'mousedown');
    triggerClick(document, 'mouseup');

    await waitImmediate();
    expect(vm.value).to.be.equal(8.2);
    expect(input.value).to.be.equal('8.2');

    triggerEvent(btnDecrease, 'mousedown');
    triggerClick(document, 'mouseup');

    await waitImmediate();
    expect(vm.value).to.be.equal(5);
    expect(input.value).to.be.equal('5');
  });
  it('step strictly', async() => {
    vm = createVue({
      template: `
        <el-input-number v-model="value" :step="1.2" step-strictly>
        </el-input-number>
      `,
      data() {
        return {
          value: 5
        };
      }
    }, true);

    let input = vm.$el.querySelector('input');
    await waitImmediate();

    expect(vm.value).to.be.equal(4.8);
    expect(input.value).to.be.equal('4.8');
    vm.value = 8;

    await waitImmediate();
    expect(vm.value).to.be.equal(8.4);
    expect(input.value).to.be.equal('8.4');
  });
  it('min', async() => {
    vm = createVue({
      template: `
        <el-input-number v-model="value" :min="6">
        </el-input-number>
      `,
      data() {
        return {
          value: 6
        };
      }
    }, true);

    let input = vm.$el.querySelector('input');
    let btnDecrease = vm.$el.querySelector('.el-input-number__decrease');

    triggerEvent(btnDecrease, 'mousedown');
    triggerClick(document, 'mouseup');

    await waitImmediate();
    expect(vm.value).to.be.equal(6);
    expect(input.value).to.be.equal('6');
  });
  it('min2', async() => {
    vm = createVue({
      template: `
        <el-input-number v-model="value" :min="6">
        </el-input-number>
      `,
      data() {
        return {
          value: 3
        };
      }
    }, true);

    expect(vm.value === 6);
    expect(vm.$el.querySelector('input').value).to.be.equal('6');
  });
  it('max', async() => {
    vm = createVue({
      template: `
        <el-input-number v-model="value" :max="8">
        </el-input-number>
      `,
      data() {
        return {
          value: 8
        };
      }
    }, true);

    let input = vm.$el.querySelector('input');
    let btnIncrease = vm.$el.querySelector('.el-input-number__increase');

    triggerEvent(btnIncrease, 'mousedown');
    triggerClick(document, 'mouseup');

    await waitImmediate();
    expect(vm.value).to.be.equal(8);
    expect(input.value).to.be.equal('8');
  });
  it('max2', async() => {
    vm = createVue({
      template: `
        <el-input-number v-model="value" :max="8">
        </el-input-number>
      `,
      data() {
        return {
          value: 100
        };
      }
    }, true);

    await waitImmediate();
    expect(vm.value === 8);
    expect(vm.$el.querySelector('input').value).to.be.equal('8');
  });
  describe('precision', () => {
    it('precision is 2', async() => {
      vm = createVue({
        template: `
          <el-input-number v-model="value" :max="8" :precision="2">
          </el-input-number>
        `,
        data() {
          return {
            value: 6.999
          };
        }
      }, true);

      await waitImmediate();
      expect(vm.value === 7);
      expect(vm.$el.querySelector('input').value).to.be.equal('7.00');
    });

    it('precision greater than the precision of step', async() => {
      vm = createVue({
        template: `
          <el-input-number v-model="value" :max="8" :precision="0" :step="0.1">
          </el-input-number>
        `,
        data() {
          return {
            value: 6.999
          };
        }
      }, true);
      const input = vm.$el.querySelector('input');
      const btnIncrease = vm.$el.querySelector('.el-input-number__increase');

      expect(vm.value === 7);
      expect(input.value).to.be.equal('7');

      triggerEvent(btnIncrease, 'mousedown');
      triggerClick(document, 'mouseup');

      await waitImmediate();
      expect(vm.value).to.be.equal(7);
      expect(input.value).to.be.equal('7');
    });
  });
  it('should update value when precision changes', async() => {
    vm = createVue({
      template: `
        <el-input-number v-model="value" :precision="precision">
        </el-input-number>
      `,
      data() {
        return {
          value: 1.35,
          precision: 2
        };
      }
    }, true);
    expect(vm.value).to.be.equal(1.35);

    vm.precision = 0;
    await wait(DELAY);
    expect(vm.value).to.be.equal(1);
    expect(vm.$el.querySelector('input').value).to.be.equal('1');

    vm.precision = 2;
    await wait(DELAY);
    expect(vm.value).to.be.equal(1);
    expect(vm.$el.querySelector('input').value).to.be.equal('1.00');
  });

  it('controls', () => {
    vm = createVue({
      template: `
        <el-input-number :controls="false" v-model="value" :max="8">
        </el-input-number>
      `,
      data() {
        return {
          value: 8
        };
      }
    }, true);

    expect(vm.$el.querySelector('.el-input-number__decrease')).to.not.exist;
    expect(vm.$el.querySelector('.el-input-number__increase')).to.not.exist;
  });
  it('invalid value reset', async() => {
    vm = createVue({
      template: `
        <el-input-number v-model="value" :min="5" :max="10" ref="inputNumber">
        </el-input-number>
      `,
      data() {
        return {
          value: 5
        };
      }
    }, true);
    const inputNumber = vm.$refs.inputNumber;
    vm.value = 100;

    await waitImmediate();
    expect(inputNumber.currentValue).to.be.equal(10);
    vm.value = 4;

    await waitImmediate();
    expect(inputNumber.currentValue).to.be.equal(5);
    vm.value = 'dsajkhd';

    await waitImmediate();
    expect(inputNumber.currentValue).to.be.equal(5);
  });
  describe('event:change', () => {
    let spy;

    beforeEach(() => {
      vm = createVue({
        template: `
          <el-input-number v-model="value" ref="compo" :min='2' :max='3' :step='1'>
          </el-input-number>
        `,
        data() {
          return {
            value: 2
          };
        }
      }, true);
      spy = sinon.spy();
      vm.$refs.compo.$on('change', spy);
    });

    it('emit on input', async() => {
      vm.$refs.compo.handleInputChange('3');
      await wait(DELAY);
      expect(spy.calledOnce).to.be.true;
      expect(spy.args[0][0]).to.equal(3);
    });

    it('emit on button', async() => {
      const btnIncrease = vm.$el.querySelector('.el-input-number__increase');
      triggerEvent(btnIncrease, 'mousedown');
      triggerClick(document, 'mouseup');
      await wait(DELAY);
      expect(spy.calledOnce).to.be.true;
      expect(spy.args[0][0]).to.equal(3);
    });

    it('does not emit on programatic change', async() => {
      vm.value = 3;
      await wait(DELAY);
      expect(spy.notCalled).to.be.true;
    });
  });
  it('event:focus & blur', async() => {
    vm = createVue({
      template: `
        <el-input-number ref="input">
        </el-input-number>
      `
    }, true);

    const spyFocus = sinon.spy();
    const spyBlur = sinon.spy();

    vm.$refs.input.$on('focus', spyFocus);
    vm.$refs.input.$on('blur', spyBlur);
    vm.$el.querySelector('input').focus();
    vm.$el.querySelector('input').blur();

    await waitImmediate();
    expect(spyFocus.calledOnce).to.be.true;
    expect(spyBlur.calledOnce).to.be.true;
  });
  it('focus', async() => {
    vm = createVue({
      template: `
        <el-input-number ref="input"></el-input-number>
      `
    }, true);

    const spy = sinon.spy();

    vm.$refs.input.$on('focus', spy);
    vm.$refs.input.focus();

    await waitImmediate();
    expect(spy.calledOnce).to.be.true;
  });

  describe('InputNumber Methods', () => {
    it('method:select', async() => {
      const testContent = '123';

      vm = createVue({
        template: `
          <el-input-number
            ref="inputNumComp"
            :value="${testContent}"
          />
        `
      }, true);

      expect(vm.$refs.inputNumComp.$refs.input.$refs.input.selectionStart)
        .to.equal(testContent.length);
      expect(vm.$refs.inputNumComp.$refs.input.$refs.input.selectionEnd)
        .to.equal(testContent.length);

      vm.$refs.inputNumComp.select();

      await waitImmediate();
      expect(vm.$refs.inputNumComp.$refs.input.$refs.input.selectionStart)
        .to.equal(0);
      expect(vm.$refs.inputNumComp.$refs.input.$refs.input.selectionEnd)
        .to.equal(testContent.length);
    });
  });
});
