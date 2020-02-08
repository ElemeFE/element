import { createVue, destroyVM, triggerKeyDown } from '../util';

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
    setTimeout(_ => {
      expect(radioElm.querySelector('.is-checked')).to.be.ok;
      done();
    }, 10);
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
    setTimeout(_ => {
      expect(vm.radio === '').to.be.true;
      expect(radioElm.querySelector('.is-disabled')).to.be.ok;
      done();
    }, 10);
  });
  it('border', () => {
    vm = createVue({
      template: `
        <el-radio
          v-model="radio"
          label="3"
          border
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
    expect(radioElm.classList.contains('is-bordered')).to.be.true;
  });
  it('change event', done => {
    vm = createVue({
      template: `
        <el-radio
          v-model="radio"
          label="3"
          @change="handleChange"
        >
        </el-radio>
      `,
      data() {
        return {
          radio: '',
          data: ''
        };
      },
      methods: {
        handleChange(val) {
          this.data = val;
        }
      }
    }, true);
    let radioElm = vm.$el;
    radioElm.click();
    setTimeout(_ => {
      expect(vm.data).to.equal('3');
      done();
    }, 10);
  });
  it('change event only triggers on user input', done => {
    vm = createVue({
      template: `
        <el-radio
          v-model="radio"
          label="3"
          @change="handleChange"
        >
        </el-radio>
      `,
      data() {
        return {
          radio: '',
          data: ''
        };
      },
      methods: {
        handleChange(val) {
          this.data = val;
        }
      }
    }, true);
    vm.radio = '3';
    setTimeout(_ => {
      expect(vm.data).to.equal('');
      done();
    }, 10);
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
        setTimeout(_ => {
          expect(radioElm.querySelector('.is-checked')).to.be.ok;
          expect(vm.radio === 6).to.be.true;
          done();
        }, 10);
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
      expect(vm.$el.querySelectorAll('label.is-disabled').length).to.be.equal(3);
      expect(vm.$refs.radio1.$el.querySelector('.is-checked')).to.be.exist;
      radio2.$el.click();
      setTimeout(_ => {
        expect(vm.radio === 3).to.be.true;
        expect(vm.$refs.radio1.$el.querySelector('.is-checked')).to.be.exist;
        done();
      }, 10);
    });
    it('change event', done => {
      vm = createVue({
        template: `
          <el-radio-group v-model="radio" @change="onChange">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6" ref="radio2">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
          </el-radio-group>
        `,
        methods: {
          onChange(val) {
            this.data = val;
          }
        },
        data() {
          return {
            radio: 3,
            data: 0
          };
        }
      }, true);
      let radio2 = vm.$refs.radio2;
      radio2.$el.click();
      setTimeout(_ => {
        expect(vm.data).to.equal(6);
        done();
      }, 10);
    });
    it('change event only triggers on user input', done => {
      vm = createVue({
        template: `
          <el-radio-group v-model="radio" @change="onChange">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
          </el-radio-group>
        `,
        methods: {
          onChange(val) {
            this.data = val;
          }
        },
        data() {
          return {
            radio: 3,
            data: 0
          };
        }
      }, true);
      vm.radio = 6;
      setTimeout(_ => {
        expect(vm.data).to.equal(0);
        done();
      }, 10);
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
      setTimeout(_ => {
        expect(vm.radio === 3).to.be.true;
        expect(vm.$refs.radio1.$el.classList.contains('is-active')).to.be.true;
        done();
      }, 10);
    });
    it('keyboard event', done => {
      vm = createVue({
        template: `
          <el-radio-group v-model="radio">
            <el-radio-button ref="radio1" :label="3">备选项</el-radio-button>
            <el-radio-button ref="radio2" :label="6">备选项</el-radio-button>
            <el-radio-button ref="radio3" :label="9">备选项</el-radio-button>
          </el-radio-group>
        `,
        data() {
          return {
            radio: 6
          };
        }
      }, true);

      expect(vm.radio).to.be.equal(6);
      vm.$nextTick(() => {
        triggerKeyDown(vm.$refs.radio2.$el, 37);
        expect(vm.radio).to.be.equal(3);

        triggerKeyDown(vm.$refs.radio1.$el, 37);
        expect(vm.radio).to.be.equal(9);

        vm.$nextTick(() => {
          triggerKeyDown(vm.$refs.radio3.$el, 39);
          expect(vm.radio).to.be.equal(3);

          triggerKeyDown(vm.$refs.radio1.$el, 39);
          expect(vm.radio).to.be.equal(6);

          vm.$nextTick(() => {
            triggerKeyDown(vm.$refs.radio1.$el, 13);
            expect(vm.radio).to.be.equal(6);

            done();
          });
        });
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
        setTimeout(_ => {
          expect(radio.$el.classList.contains('is-active')).to.be.true;
          expect(vm.radio === 6).to.be.true;
          done();
        }, 10);
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
        setTimeout(_ => {
          expect(vm.$refs.radio1.activeStyle.backgroundColor).to.equal('#000');
          expect(vm.$refs.radio1.activeStyle.borderColor).to.equal('#000');
          expect(vm.$refs.radio1.activeStyle.color).to.equal('#ff0');
          done();
        }, 10);
      });
      it('change event', done => {
        vm = createVue({
          template: `
            <el-radio-group v-model="radio" @change="onChange">
              <el-radio-button :label="3">备选项</el-radio-button>
              <el-radio-button :label="6" ref="radio2">备选项</el-radio-button>
              <el-radio-button :label="9">备选项</el-radio-button>
            </el-radio-group>
          `,
          methods: {
            onChange(val) {
              this.data = val;
            }
          },
          data() {
            return {
              data: 0,
              radio: 3
            };
          }
        }, true);
        let radio = vm.$refs.radio2;
        radio.$el.click();
        setTimeout(_ => {
          expect(vm.data).to.equal(6);
          done();
        }, 10);
      });
      it('change event only triggers on user input', done => {
        vm = createVue({
          template: `
            <el-radio-group v-model="radio" @change="onChange">
              <el-radio-button :label="3">备选项</el-radio-button>
              <el-radio-button :label="6" ref="radio2">备选项</el-radio-button>
              <el-radio-button :label="9">备选项</el-radio-button>
            </el-radio-group>
          `,
          methods: {
            onChange(val) {
              this.data = val;
            }
          },
          data() {
            return {
              data: 0,
              radio: 3
            };
          }
        }, true);
        vm.radio = 6;
        setTimeout(_ => {
          expect(vm.data).to.equal(0);
          done();
        }, 10);
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
        setTimeout(_ => {
          expect(vm.$el.querySelectorAll('.el-radio-button--large').length).to.be.equal(3);
          done();
        }, 10);
      });
    });
  });
});
