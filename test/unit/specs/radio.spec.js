import { createVue, destroyVM } from '../util';

describe('Radio', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue({
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
    vm = createVue({
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
  describe('Radio group', () => {
    it('create', done => {
      vm = createVue({
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
      setTimeout(_ => {
        expect(vm.$refs.radio1.$el.querySelector('.is-checked')).to.be.ok;
        let radioElm = vm.$refs.radio2.$el;
        radioElm.click();
        vm.$nextTick(_ => {
          expect(radioElm.querySelector('.is-checked')).to.be.ok;
          expect(vm.radio === 6).to.be.true;
          done();
        });
      }, 50);
    });
    it('disabled', done => {
      vm = createVue({
        template: `
          <el-radio-group v-model="radio" disabled>
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
      let radio2 = vm.$refs.radio2;
      expect(vm.$el.querySelectorAll('.is-disabled').length).to.be.equal(3);
      expect(vm.$refs.radio1.$el.querySelector('.is-checked')).to.be.exist;
      radio2.$el.click();
      vm.$nextTick(_ => {
        expect(vm.radio === 3).to.be.true;
        expect(vm.$refs.radio1.$el.querySelector('.is-checked')).to.be.exist;
        done();
      });
    });
    it('disabled when children is radio button', done => {
      vm = createVue({
        template: `
          <el-radio-group v-model="radio" disabled>
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
      let radio2 = vm.$refs.radio2;
      expect(vm.$el.querySelectorAll('.is-disabled').length).to.be.equal(3);
      expect(vm.$refs.radio1.$el.classList.contains('is-active')).to.be.true;
      radio2.$el.click();
      vm.$nextTick(_ => {
        expect(vm.radio === 3).to.be.true;
        expect(vm.$refs.radio1.$el.classList.contains('is-active')).to.be.true;
        done();
      });
    });
    describe('Radio Button', () => {
      it('create', done => {
        vm = createVue({
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
      it('custom color', done => {
        vm = createVue({
          template: `
            <el-radio-group v-model="radio" fill="#000" text-color="#ff0">
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
        vm.$nextTick(_ => {
          expect(vm.$refs.radio1.activeStyle.backgroundColor).to.equal('#000');
          expect(vm.$refs.radio1.activeStyle.borderColor).to.equal('#000');
          expect(vm.$refs.radio1.activeStyle.color).to.equal('#ff0');
          done();
        });
      });
      it('size', done => {
        vm = createVue({
          template: `
            <el-radio-group v-model="radio" size="large">
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
        vm.$nextTick(_ => {
          expect(vm.$el.querySelectorAll('.el-radio-button--large').length).to.be.equal(3);
          done();
        });
      });
    });
  });
});
