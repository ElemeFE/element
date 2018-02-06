import { createVue, triggerEvent, triggerClick, destroyVM } from '../util';

const DELAY = 1;

describe('InputNumber', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createVue({
      template: `
        <tm-input-number v-model="value">
        </tm-input-number>
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
        <tm-input-number v-model="value" ref="input">
        </tm-input-number>
      `,
      data() {
        return {
          value: 5
        };
      }
    }, true);

    let input = vm.$el.querySelector('input');
    let btnDecrease = vm.$el.querySelector('.tm-input-number__decrease');

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
        <tm-input-number v-model="value">
        </tm-input-number>
      `,
      data() {
        return {
          value: 1.5
        };
      }
    }, true);

    let input = vm.$el.querySelector('input');
    let btnIncrease = vm.$el.querySelector('.tm-input-number__increase');

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
        <tm-input-number v-model="value" disabled>
        </tm-input-number>
      `,
      data() {
        return {
          value: 2
        };
      }
    }, true);

    let input = vm.$el.querySelector('input');
    let btnDecrease = vm.$el.querySelector('.tm-input-number__decrease');
    let btnIncrease = vm.$el.querySelector('.tm-input-number__increase');

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
        <tm-input-number v-model="value" :step="3.2">
        </tm-input-number>
      `,
      data() {
        return {
          value: 5
        };
      }
    }, true);

    let input = vm.$el.querySelector('input');
    let btnIncrease = vm.$el.querySelector('.tm-input-number__increase');
    let btnDecrease = vm.$el.querySelector('.tm-input-number__decrease');

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
  it('min', done => {
    vm = createVue({
      template: `
        <tm-input-number v-model="value" :min="6">
        </tm-input-number>
      `,
      data() {
        return {
          value: 6
        };
      }
    }, true);
    const vm2 = createVue({
      template: `
        <tm-input-number v-model="value" :min="6">
        </tm-input-number>
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
    let btnDecrease = vm.$el.querySelector('.tm-input-number__decrease');

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
        <tm-input-number v-model="value" :max="8">
        </tm-input-number>
      `,
      data() {
        return {
          value: 8
        };
      }
    }, true);
    const vm2 = createVue({
      template: `
        <tm-input-number v-model="value" :max="8">
        </tm-input-number>
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
    let btnIncrease = vm.$el.querySelector('.tm-input-number__increase');

    triggerEvent(btnIncrease, 'mousedown');
    triggerClick(document, 'mouseup');

    vm.$nextTick(_ => {
      expect(vm.value).to.be.equal(8);
      expect(input.value).to.be.equal('8');
      done();
    });
  });
  it('controls', () => {
    vm = createVue({
      template: `
        <tm-input-number :controls="false" v-model="value" :max="8">
        </tm-input-number>
      `,
      data() {
        return {
          value: 8
        };
      }
    }, true);

    expect(vm.$el.querySelector('.tm-input-number__decrease')).to.not.exist;
    expect(vm.$el.querySelector('.tm-input-number__increase')).to.not.exist;
  });
  it('invalid value reset', done => {
    vm = createVue({
      template: `
        <tm-input-number v-model="value" :min="5" :max="10" ref="inputNumber">
        </tm-input-number>
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
          <tm-input-number v-model="value" ref="compo" :min='2' :max='3' :step='1'>
          </tm-input-number>
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
      const btnIncrease = vm.$el.querySelector('.tm-input-number__increase');
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
        <tm-input-number ref="input">
        </tm-input-number>
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
        <tm-input-number ref="input"></tm-input-number>
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
});
