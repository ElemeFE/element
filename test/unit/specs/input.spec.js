// TODO: Run `npm run test:watch` and check warnings
import { createVue, destroyVM } from '../util';

describe('Input', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <tm-input
          :minlength="3"
          :maxlength="5"
          placeholder="请输入内容"
          @focus="handleFocus"
          value="input">
        </tm-input>
      `,
      data() {
        return {
          inputFocus: false
        };
      },
      methods: {
        handleFocus() {
          this.inputFocus = true;
        }
      }
    }, true);
    let inputElm = vm.$el.querySelector('input');
    inputElm.focus();
    expect(vm.inputFocus).to.be.true;
    expect(inputElm.getAttribute('placeholder')).to.equal('请输入内容');
    expect(inputElm.value).to.equal('input');
    expect(inputElm.getAttribute('minlength')).to.equal('3');
    expect(inputElm.getAttribute('maxlength')).to.equal('5');
  });

  it('disabled', () => {
    vm = createVue({
      template: `
        <tm-input disabled>
        </tm-input>
      `
    }, true);
    expect(vm.$el.querySelector('input').getAttribute('disabled')).to.ok;
  });

  it('suffixIcon', () => {
    vm = createVue({
      template: `
        <tm-input suffix-icon="time"></tm-input>
      `
    }, true);
    var icon = vm.$el.querySelector('.tm-input__icon');
    expect(icon).to.be.exist;
  });

  it('prefixIcon', () => {
    vm = createVue({
      template: `
        <tm-input prefix-icon="time"></tm-input>
      `
    }, true);
    var icon = vm.$el.querySelector('.tm-input__icon');
    expect(icon).to.be.exist;
  });

  it('size', () => {
    vm = createVue({
      template: `
        <tm-input size="large">
        </tm-input>
      `
    }, true);

    expect(vm.$el.classList.contains('tm-input--large')).to.true;
  });

  it('type', () => {
    vm = createVue({
      template: `
        <tm-input type="textarea">
        </tm-input>
      `
    }, true);

    expect(vm.$el.classList.contains('tm-textarea')).to.true;
  });

  it('rows', () => {
    vm = createVue({
      template: `
        <tm-input type="textarea" :rows="3">
        </tm-input>
      `
    }, true);
    expect(vm.$el.querySelector('.tm-textarea__inner').getAttribute('rows')).to.be.equal('3');
  });

  // Github issue #2836
  it('resize', done => {
    vm = createVue({
      template: `
        <div>
          <tm-input type="textarea" :resize="resize"></tm-input>
        </div>
      `,
      data: {
        resize: 'none'
      }
    }, true);
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.tm-textarea__inner').style.resize).to.be.equal(vm.resize);
      vm.resize = 'horizontal';
      vm.$nextTick(() => {
        expect(vm.$el.querySelector('.tm-textarea__inner').style.resize).to.be.equal(vm.resize);
        done();
      });
    });
  });

  it('autosize', done => {
    vm = createVue({
      template: `
        <div>
          <tm-input
            ref="limitSize"
            type="textarea"
            :autosize="{minRows: 3, maxRows: 5}"
            v-model="textareaValue"
          >
          </tm-input>
          <tm-input
            ref="limitlessSize"
            type="textarea"
            autosize
            v-model="textareaValue"
          >
          </tm-input>
        </div>
      `,
      data() {
        return {
          textareaValue: 'sda\ndasd\nddasdsda\ndasd\nddasdsda\ndasd\nddasdsda\ndasd\nddasd'
        };
      }
    }, true);

    var limitSizeInput = vm.$refs.limitSize;
    var limitlessSizeInput = vm.$refs.limitlessSize;
    expect(limitSizeInput.textareaStyle.height).to.be.equal('117px');
    expect(limitlessSizeInput.textareaStyle.height).to.be.equal('201px');

    vm.textareaValue = '';
    setTimeout(_ => {
      expect(limitSizeInput.textareaStyle.height).to.be.equal('75px');
      expect(limitlessSizeInput.textareaStyle.height).to.be.equal('33px');
      done();
    }, 200);
  });

  it('focus', done => {
    vm = createVue({
      template: `
        <tm-input ref="input">
        </tm-input>
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

  describe('Input Events', () => {
    it('event:focus & blur', done => {
      vm = createVue({
        template: `
          <tm-input
            ref="input"
            placeholder="请输入内容"
            value="input">
          </tm-input>
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
    it('event:change', done => {
      // NOTE: should be same as native's change behavior
      vm = createVue({
        template: `
          <tm-input
            ref="input"
            placeholder="请输入内容"
            :value="input">
          </tm-input>
        `,
        data() {
          return {
            input: 'a'
          };
        }
      }, true);

      const inputElm = vm.$el.querySelector('input');
      const simulateEvent = (text, event) => {
        inputElm.value = text;
        inputElm.dispatchEvent(new Event(event));
      };

      const spy = sinon.spy();
      vm.$refs.input.$on('change', spy);

      // simplified test, component should emit change when native does
      simulateEvent('1', 'input');
      simulateEvent('2', 'change');
      vm.$nextTick(_ => {
        expect(spy.calledWith('2')).to.be.true;
        expect(spy.calledOnce).to.be.true;
        done();
      });
    });
  });
});
