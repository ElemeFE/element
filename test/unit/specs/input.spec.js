import { createVue } from '../util';

describe('Input', () => {
  it('create', () => {
    const vm = createVue({
      template: `
        <el-input
          minlength="3"
          maxlength="5"
          placeholder="请输入内容"
          value="input">
        </el-input>
      `
    }, true);
    let inputElm = vm.$el.querySelector('input');
    expect(inputElm.getAttribute('placeholder')).to.equal('请输入内容');
    expect(inputElm.value).to.equal('input');
    expect(inputElm.getAttribute('minlength')).to.equal('3');
    expect(inputElm.getAttribute('maxlength')).to.equal('5');
  });

  it('disabled', () => {
    const vm = createVue({
      template: `
        <el-input disabled>
        </el-input>
      `
    }, true);
    expect(vm.$el.querySelector('input').getAttribute('disabled')).to.ok;
  });

  it('icon', () => {
    const vm = createVue({
      template: `
        <el-input icon="time">
        </el-input>
      `
    }, true);
    expect(vm.$el.querySelector('.el-input__icon').classList.contains('el-icon-time')).to.true;
  });

  it('size', () => {
    const vm = createVue({
      template: `
        <el-input size="large">
        </el-input>
      `
    }, true);

    expect(vm.$el.classList.contains('el-input-large')).to.true;
  });

  it('type', () => {
    const vm = createVue({
      template: `
        <el-input type="textarea">
        </el-input>
      `
    }, true);

    expect(vm.$el.classList.contains('el-textarea')).to.true;
  });

  it('rows', () => {
    const vm = createVue({
      template: `
        <el-input type="textarea" :rows="3">
        </el-input>
      `
    }, true);
    expect(vm.$el.querySelector('.el-textarea__inner').getAttribute('rows')).to.be.equal('3');
  });
  it('autosize', done => {
    const vm = createVue({
      template: `
        <el-input
          type="textarea"
          autosize="{minRows: 3, maxRows: 5}"
          v-model="textareaValue"
        >
        </el-input>
      `,
      data() {
        return {
          textareaValue: 'sda\ndasd\nddasdsda\ndasd\nddasdsda\ndasd\nddasdsda\ndasd\nddasd'
        };
      }
    }, true).$children[0];

    var originHeight = vm.textareaStyle.height;
    expect(originHeight).to.be.not.equal('117px');

    vm.$parent.textareaValue = '';
    setTimeout(_ => {
      expect(vm.textareaStyle.height).to.be.not.equal('54px');
      done();
    }, 200);
  });
});
