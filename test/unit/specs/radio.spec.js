import { createVue } from '../util';

describe('Radio', () => {
  it('create', done => {
    const vm = createVue({
      template: `
        <el-radio v-model="radio" label="a">
        </el-radio>
      `,
      data() {
        return {
          radio: ''
        };
      }
    }, true);
    let radioElm = vm.$el;
    expect(radioElm.classList.contains('el-radio')).to.be.true;
    radioElm.click();
    vm.$nextTick(_ => {
      expect(radioElm.querySelector('.is-checked')).to.be.ok;
      done();
    });
  });
  it('disabled', done => {
    const vm = createVue({
      template: `
        <el-radio
          v-model="radio"
          label="3"
          disabled
        >
        </el-radio>
      `,
      data() {
        return {
          radio: ''
        };
      }
    }, true);
    let radioElm = vm.$el;
    radioElm.click();
    vm.$nextTick(_ => {
      expect(vm.radio === '').to.be.true;
      expect(radioElm.querySelector('.is-disabled')).to.be.ok;
      done();
    });
  });
  it('radio group', done => {
    const vm = createVue({
      template: `
        <el-radio-group v-model="radio">
          <el-radio :label="3" ref="radio1">备选项</el-radio>
          <el-radio :label="6" ref="radio2">备选项</el-radio>
          <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
      `,
      data() {
        return {
          radio: 3
        };
      }
    }, true);
    expect(vm.$refs.radio1.$el.querySelector('.is-checked')).to.be.ok;
    let radioElm = vm.$refs.radio2.$el;
    radioElm.click();
    vm.$nextTick(_ => {
      expect(radioElm.querySelector('.is-checked')).to.be.ok;
      expect(vm.radio === 6).to.be.true;
      done();
    });
  });
  it('radio button', done => {
    const vm = createVue({
      template: `
        <el-radio-group v-model="radio">
          <el-radio-button :label="3" ref="radio1">备选项</el-radio-button>
          <el-radio-button :label="6" ref="radio2">备选项</el-radio-button>
          <el-radio-button :label="9">备选项</el-radio-button>
        </el-radio-group>
      `,
      data() {
        return {
          radio: 3
        };
      }
    }, true);
    expect(vm.$refs.radio1.$el.classList.contains('is-active')).to.be.true;
    let radio = vm.$refs.radio2;
    radio.$el.click();
    vm.$nextTick(_ => {
      expect(radio.$el.classList.contains('is-active')).to.be.true;
      expect(vm.radio === 6).to.be.true;
      done();
    });
  });
});
