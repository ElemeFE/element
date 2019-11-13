import {createVue, destroyVM} from '../util';

describe('IconCheckbox', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue({
      template: `
          <el-icon-checkbox v-model="checked" label="a">
          </el-icon-checkbox>
        `,
      data() {
        return {
          checked: false
        };
      }
    }, true);
    let checkboxElm = vm.$el;
    expect(checkboxElm.classList.contains('el-checkbox-icon-button')).to.be.true;
    checkboxElm.click();
    vm.$nextTick(_ => {
      expect(checkboxElm.classList.contains('is-checked')).to.be.ok;
      done();
    });
  });
});
