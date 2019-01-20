import { createVue, destroyVM } from '../util';

describe('Input', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <el-input
          :minlength="3"
          :maxlength="5"
          placeholder="请输入内容"
          @focus="handleFocus"
          value="input">
        </el-input>
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
        <el-input disabled>
        </el-input>
      `
    }, true);
    expect(vm.$el.querySelector('input').getAttribute('disabled')).to.ok;
  });

  it('suffixIcon', () => {
    vm = createVue({
      template: `
        <el-input suffix-icon="time"></el-input>
      `
    }, true);
    var icon = vm.$el.querySelector('.el-input__icon');
    expect(icon).to.be.exist;
  });

  it('prefixIcon', () => {
    vm = createVue({
      template: `
        <el-input prefix-icon="time"></el-input>
      `
    }, true);
    var icon = vm.$el.querySelector('.el-input__icon');
    expect(icon).to.be.exist;
  });

  it('size', () => {
    vm = createVue({
      template: `
        <el-input size="large">
        </el-input>
      `
    }, true);

    expect(vm.$el.classList.contains('el-input--large')).to.true;
  });

  it('type', () => {
    vm = createVue({
      template: `
        <el-input type="textarea">
        </el-input>
      `
    }, true);

    expect(vm.$el.classList.contains('el-textarea')).to.true;
  });

  it('rows', () => {
    vm = createVue({
      template: `
        <el-input type="textarea" :rows="3">
        </el-input>
      `
    }, true);
    expect(vm.$el.querySelector('.el-textarea__inner').getAttribute('rows')).to.be.equal('3');
  });

  // Github issue #2836
  it('resize', done => {
    vm = createVue({
      template: `
        <div>
          <el-input type="textarea" :resize="resize"></el-input>
        </div>
      `,
      data: {
        resize: 'none'
      }
    }, true);
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.el-textarea__inner').style.resize).to.be.equal(vm.resize);
      vm.resize = 'horizontal';
      vm.$nextTick(() => {
        expect(vm.$el.querySelector('.el-textarea__inner').style.resize).to.be.equal(vm.resize);
        done();
      });
    });
  });

  it('autosize', done => {
    vm = createVue({
      template: `
        <div>
          <el-input
            ref="limitSize"
            type="textarea"
            :autosize="{minRows: 3, maxRows: 5}"
            v-model="textareaValue"
          >
          </el-input>
          <el-input
            ref="limitlessSize"
            type="textarea"
            autosize
            v-model="textareaValue"
          >
          </el-input>
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
        <el-input ref="input">
        </el-input>
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

  it('Input contains Select and append slot', (done) => {
    vm = createVue({
      template: `
      <el-input v-model="value" clearable class="input-with-select" ref="input">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      `,
      data() {
        return {
          value: '1234'
        };
      }
    }, true);
    vm.$refs.input.hovering = true;
    setTimeout(() => {
      const suffixEl = document.querySelector('.input-with-select > .el-input__suffix');
      expect(suffixEl).to.not.be.null;
      expect(suffixEl.style.transform).to.not.be.empty;
      done();
    }, 20);
  });

  it('validateEvent', done => {
    const spy = sinon.spy();
    vm = createVue({
      template: `
        <el-form :model="model" :rules="rules">
          <el-form-item prop="input">
            <el-input v-model="model.input" :validate-event="false">
            </el-input>
          </el-form-item>
        </el-form>
      `,
      data() {
        const validator = (rule, value, callback) => {
          spy();
          callback();
        };
        return {
          model: {
            input: ''
          },
          rules: {
            input: [
              { validator }
            ]
          }
        };
      }
    }, true);

    vm.model.input = '123';
    vm.$nextTick(() => {
      expect(spy.called).to.be.false;
      done();
    });
  });

  describe('Input Events', () => {
    it('event:focus & blur', done => {
      vm = createVue({
        template: `
          <el-input
            ref="input"
            placeholder="请输入内容"
            value="input">
          </el-input>
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
          <el-input
            ref="input"
            placeholder="请输入内容"
            :value="input">
          </el-input>
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
    it('event:clear', done => {
      vm = createVue({
        template: `
          <el-input
            ref="input"
            placeholder="请输入内容"
            clearable
            :value="input">
          </el-input>
        `,
        data() {
          return {
            input: 'a'
          };
        }
      }, true);

      const spyClear = sinon.spy();
      const inputElm = vm.$el.querySelector('input');

      // focus to show clear button
      inputElm.focus();
      vm.$refs.input.$on('clear', spyClear);
      vm.$nextTick(_ => {
        vm.$el.querySelector('.el-input__clear').click();
        vm.$nextTick(_ => {
          expect(spyClear.calledOnce).to.be.true;
          done();
        });
      });
    });
  });

  describe('Input Methods', () => {
    it('method:select', done => {
      const testContent = 'test';

      vm = createVue({
        template: `
          <el-input
            ref="inputComp"
            value="${testContent}"
          />
        `
      }, true);

      expect(vm.$refs.inputComp.$refs.input.selectionStart).to.equal(testContent.length);
      expect(vm.$refs.inputComp.$refs.input.selectionEnd).to.equal(testContent.length);

      vm.$refs.inputComp.select();

      vm.$nextTick(_ => {
        expect(vm.$refs.inputComp.$refs.input.selectionStart).to.equal(0);
        expect(vm.$refs.inputComp.$refs.input.selectionEnd).to.equal(testContent.length);
        done();
      });
    });
  });
});
