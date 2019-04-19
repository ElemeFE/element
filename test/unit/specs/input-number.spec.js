import {createVue, triggerEvent, triggerClick, destroyVM, waitImmediate} from '../util';

const DELAY = 1;

describe('InputNumber', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
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

    expect(vm.value).to.be.equal(1);
    expect(input.value).to.be.equal('1');
  });
  it('decrease', done => {
    vm = createVue({
      template: `
        <el-input-number v-model="value" ref="input">
        </el-input-number>
      `,
      data() {
        return {
          value: 5
        };
      }
    }, true);

    let input = vm.$el.querySelector('input');
    let btnDecrease = vm.$el.querySelector('.el-input-number__decrease');

    triggerEvent(btnDecrease, 'mousedown');
    triggerClick(document, 'mouseup');

    vm.$nextTick(_ => {
      expect(vm.value).to.be.equal(4);
      expect(input.value).to.be.equal('4');
      done();
    });
  });
  it('increase', done => {
    vm = createVue({
      template: `
        <el-input-number v-model="value">
        </el-input-number>
      `,
      data() {
        return {
          value: 1.5
        };
      }
    }, true);

    let input = vm.$el.querySelector('input');
    let btnIncrease = vm.$el.querySelector('.el-input-number__increase');

    triggerEvent(btnIncrease, 'mousedown');
    triggerClick(document, 'mouseup');

    vm.$nextTick(_ => {
      expect(vm.value).to.be.equal(2.5);
      expect(input.value).to.be.equal('2.5');
      done();
    });
  });
  it('disabled', done => {
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

    vm.$nextTick(_ => {
      expect(vm.value).to.be.equal(2);
      expect(input.value).to.be.equal('2');

      triggerEvent(btnIncrease, 'mousedown');
      triggerClick(document, 'mouseup');

      vm.$nextTick(_ => {
        expect(vm.value).to.be.equal(2);
        expect(input.value).to.be.equal('2');
        done();
      });
    });
  });
  it('step', done => {
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

    vm.$nextTick(_ => {
      expect(vm.value).to.be.equal(8.2);
      expect(input.value).to.be.equal('8.2');

      triggerEvent(btnDecrease, 'mousedown');
      triggerClick(document, 'mouseup');

      vm.$nextTick(_ => {
        expect(vm.value).to.be.equal(5);
        expect(input.value).to.be.equal('5');
        done();
      });
    });
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
    vm.value = '8';

    await waitImmediate();
    expect(vm.value).to.be.equal(8.4);
    expect(input.value).to.be.equal('8.4');
  });
  it('min', done => {
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
    const vm2 = createVue({
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

    expect(vm2.value === 6);
    expect(vm2.$el.querySelector('input').value).to.be.equal('6');

    let input = vm.$el.querySelector('input');
    let btnDecrease = vm.$el.querySelector('.el-input-number__decrease');

    triggerEvent(btnDecrease, 'mousedown');
    triggerClick(document, 'mouseup');

    vm.$nextTick(_ => {
      expect(vm.value).to.be.equal(6);
      expect(input.value).to.be.equal('6');
      done();
    });
  });
  it('max', done => {
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
    const vm2 = createVue({
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

    expect(vm2.value === 8);
    expect(vm2.$el.querySelector('input').value).to.be.equal('8');

    let input = vm.$el.querySelector('input');
    let btnIncrease = vm.$el.querySelector('.el-input-number__increase');

    triggerEvent(btnIncrease, 'mousedown');
    triggerClick(document, 'mouseup');

    vm.$nextTick(_ => {
      expect(vm.value).to.be.equal(8);
      expect(input.value).to.be.equal('8');
      done();
    });
  });
  describe('precision', () => {
    it('precision is 2', () => {
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
      expect(vm.value === 7);
      expect(vm.$el.querySelector('input').value).to.be.equal('7.00');
    });

    it('precision greater than the precision of step', done => {
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

      vm.$nextTick(_ => {
        expect(vm.value).to.be.equal(7);
        expect(input.value).to.be.equal('7');
        done();
      });
    });
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
  it('invalid value reset', done => {
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
    vm.$nextTick(_ => {
      expect(inputNumber.currentValue).to.be.equal(10);
      vm.value = 4;

      vm.$nextTick(_ => {
        expect(inputNumber.currentValue).to.be.equal(5);
        vm.value = 'dsajkhd';

        vm.$nextTick(_ => {
          expect(inputNumber.currentValue).to.be.equal(5);
          done();
        });
      });
    });
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

    it('emit on input', done => {
      vm.$refs.compo.handleInputChange('3');
      setTimeout(_ => {
        expect(spy.calledOnce).to.be.true;
        expect(spy.args[0][0]).to.equal(3);
        done();
      }, DELAY);
    });

    it('emit on button', done => {
      const btnIncrease = vm.$el.querySelector('.el-input-number__increase');
      triggerEvent(btnIncrease, 'mousedown');
      triggerClick(document, 'mouseup');
      setTimeout(_ => {
        expect(spy.calledOnce).to.be.true;
        expect(spy.args[0][0]).to.equal(3);
        done();
      }, DELAY);
    });

    it('does not emit on programatic change', done => {
      vm.value = 3;
      setTimeout(_ => {
        expect(spy.notCalled).to.be.true;
        done();
      }, DELAY);
    });
  });
  it('event:focus & blur', done => {
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

    vm.$nextTick(_ => {
      expect(spyFocus.calledOnce).to.be.true;
      expect(spyBlur.calledOnce).to.be.true;
      done();
    });
  });
  it('focus', done => {
    vm = createVue({
      template: `
        <el-input-number ref="input"></el-input-number>
      `
    }, true);

    const spy = sinon.spy();

    vm.$refs.input.$on('focus', spy);
    vm.$refs.input.focus();

    vm.$nextTick(_ => {
      expect(spy.calledOnce).to.be.true;
      done();
    });
  });

  describe('InputNumber Methods', () => {
    it('method:select', done => {
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

      vm.$nextTick(_ => {
        expect(vm.$refs.inputNumComp.$refs.input.$refs.input.selectionStart)
          .to.equal(0);
        expect(vm.$refs.inputNumComp.$refs.input.$refs.input.selectionEnd)
          .to.equal(testContent.length);

        done();
      });
    });
  });
});
