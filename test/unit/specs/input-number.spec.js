import { createVue, triggerEvent, triggerClick, destroyVM } from '../util';

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
  it('event:change', done => {
    vm = createVue({
      template: `
        <el-input-number v-model="value" ref="input">
        </el-input-number>
      `,
      data() {
        return {
          value: 1.5
        };
      }
    }, true);

    let btnIncrease = vm.$el.querySelector('.el-input-number__increase');
    const spy = sinon.spy();

    vm.$refs.input.$on('change', spy);

    triggerEvent(btnIncrease, 'mousedown');
    triggerClick(document, 'mouseup');

    vm.$nextTick(_ => {
      expect(spy.withArgs(2.5, 1.5).calledOnce).to.be.true;
      done();
    });
  });
});
