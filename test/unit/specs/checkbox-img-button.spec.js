import { createVue, destroyVM } from '../util';

describe('CheckboxImgButton', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue({
      template: `
        <el-checkbox-img-button v-model="checked"></el-checkbox-img-button>
      `,
      data() {
        return {
          checked: false
        };
      }
    }, true);
    let elm = vm.$el;
    expect(elm.classList.contains('el-checkbox-img-button')).to.be.true;
    elm.click();
    vm.$nextTick(_ => {
      expect(elm.querySelector('.is-checked')).to.be.ok;
      done();
    });
  });

  it('vertical', () => {
    vm = createVue({
      template: `
        <el-checkbox-img-button
          v-model="checked"
          vertical
        >
        </el-checkbox-img-button>
      `,
      data() {
        return {
          checked: false
        };
      }
    }, true);
    let elm = vm.$el;
    expect(elm.classList.contains('is-vertical')).to.be.ok;
  });

});
