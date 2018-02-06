import { createVue, destroyVM } from '../util';

const DELAY = 50;

describe('Form', () => {
  let vm;
  let hasPromise = true;
  before(() => {
    if (!window.Promise) {
      hasPromise = false;
      window.Promise = require('es6-promise').Promise;
    }
  });

  after(() => {
    if (!hasPromise) {
      window.Promise = undefined;
    }
  });

  afterEach(() => {
    destroyVM(vm);
  });

  it('label width', done => {
    vm = createVue({
      template: `
        <tm-form ref="form" :model="form" label-width="80px">
          <tm-form-item label="活动名称">
            <tm-input v-model="form.name"></tm-input>
          </tm-form-item>
        </tm-form>
      `,
      data() {
        return {
          form: {
            name: ''
          }
        };
      }
    }, true);
    expect(vm.$el.querySelector('.tm-form-item__label').style.width).to.equal('80px');
    expect(vm.$el.querySelector('.tm-form-item__content').style.marginLeft).to.equal('80px');
    done();
  });
  it('inline form', done => {
    vm = createVue({
      template: `
        <tm-form ref="form" :model="form" inline>
          <tm-form-item>
            <tm-input v-model="form.name"></tm-input>
          </tm-form-item>
          <tm-form-item>
            <tm-input v-model="form.address"></tm-input>
          </tm-form-item>
        </tm-form>
      `,
      data() {
        return {
          form: {
            name: '',
            address: ''
          }
        };
      }
    }, true);
    expect(vm.$el.classList.contains('tm-form--inline')).to.be.true;
    done();
  });
  it('label position', done => {
    vm = createVue({
      template: `
        <div>
          <tm-form :model="form" label-position="top" ref="labelTop">
            <tm-form-item>
              <tm-input v-model="form.name"></tm-input>
            </tm-form-item>
            <tm-form-item>
              <tm-input v-model="form.address"></tm-input>
            </tm-form-item>
          </tm-form>
          <tm-form :model="form" label-position="left" ref="labelLeft">
            <tm-form-item>
              <tm-input v-model="form.name"></tm-input>
            </tm-form-item>
            <tm-form-item>
              <tm-input v-model="form.address"></tm-input>
            </tm-form-item>
          </tm-form>
        </div>
      `,
      data() {
        return {
          form: {
            name: '',
            address: ''
          }
        };
      }
    }, true);
    expect(vm.$refs.labelTop.$el.classList.contains('tm-form--label-top')).to.be.true;
    expect(vm.$refs.labelLeft.$el.classList.contains('tm-form--label-left')).to.be.true;
    done();
  });
  it('show message', done => {
    vm = createVue({
      template: `
        <tm-form :model="form" ref="form">
          <tm-form-item label="活动名称" prop="name" :show-message="false"
            :rules="{
              required: true,
              message: '请输入活动名称',
              trigger: 'change',
              min: 3,
              max: 6
            }"
          >
            <tm-input v-model="form.name"></tm-input>
          </tm-form-item>
        </tm-form>
      `,
      data() {
        return {
          form: {
            name: ''
          }
        };
      }
    }, true);
    vm.$refs.form.validate(valid => {
      expect(valid).to.not.true;
      vm.$refs.form.$nextTick(_ => {
        expect(vm.$el.querySelector('.tm-form-item__error')).to.not.exist;
        done();
      });
    });
  });
  it('reset field', done => {
    vm = createVue({
      template: `
        <tm-form ref="form" :model="form" :rules="rules">
          <tm-form-item label="活动名称" prop="name">
            <tm-input v-model="form.name" ref="fieldName"></tm-input>
          </tm-form-item>
          <tm-form-item label="活动地址" prop="address">
            <tm-input v-model="form.address" ref="fieldAddr"></tm-input>
          </tm-form-item>
          <tm-form-item label="活动性质" prop="type">
            <tm-checkbox-group v-model="form.type">
              <tm-checkbox label="美食/餐厅线上活动" name="type"></tm-checkbox>
              <tm-checkbox label="地推活动" name="type"></tm-checkbox>
              <tm-checkbox label="线下主题活动" name="type"></tm-checkbox>
              <tm-checkbox label="单纯品牌曝光" name="type"></tm-checkbox>
            </tm-checkbox-group>
          </tm-form-item>
        </tm-form>
      `,
      data() {
        return {
          form: {
            name: '',
            address: '',
            type: []
          },
          rules: {
            name: [
              { required: true, message: '请输入活动名称', trigger: 'blur' }
            ],
            address: [
              { required: true, message: '请选择活动区域', trigger: 'change' }
            ],
            type: [
              { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
            ]
          }
        };
      },
      methods: {
        setValue() {
          this.form.name = 'jack';
          this.form.address = 'aaaa';
          this.form.type.push('地推活动');
        }
      }
    }, true);
    vm.setValue();
    vm.$refs.form.resetFields();
    vm.$refs.form.$nextTick(_ => {
      expect(vm.form.name).to.equal('');
      expect(vm.form.address).to.equal('');
      expect(vm.form.type.length).to.equal(0);
      done();
    });
  });
  it('form item nest', done => {
    vm = createVue({
      template: `
        <tm-form ref="form" :model="form" :rules="rules">
          <tm-form-item label="活动时间" required>
            <tm-col :span="11">
              <tm-form-item prop="date1">
                <tm-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></tm-date-picker>
              </tm-form-item>
            </tm-col>
            <tm-col class="line" :span="2">-</tm-col>
            <tm-col :span="11">
              <tm-form-item prop="date2">
                <tm-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></tm-time-picker>
              </tm-form-item>
            </tm-col>
          </tm-form-item>
        </tm-form>
      `,
      data() {
        return {
          form: {
            date1: '',
            date2: ''
          },
          rules: {
            date1: [
              { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ]
          }
        };
      },
      methods: {
        setValue() {
          this.name = 'jack';
          this.address = 'aaaa';
        }
      }
    }, true);
    vm.$refs.form.validate(valid => {
      expect(valid).to.not.true;
      done();
    });
  });
  describe('validate', () => {
    it('input', done => {
      vm = createVue({
        template: `
          <tm-form :model="form" :rules="rules" ref="form">
            <tm-form-item label="活动名称" prop="name" ref="field">
              <tm-input v-model="form.name"></tm-input>
            </tm-form-item>
          </tm-form>
        `,
        data() {
          return {
            form: {
              name: ''
            },
            rules: {
              name: [
                { required: true, message: '请输入活动名称', trigger: 'change', min: 3, max: 6 }
              ]
            }
          };
        },
        methods: {
          setValue(value) {
            this.form.name = value;
          }
        }
      }, true);
      vm.$refs.form.validate(valid => {
        let field = vm.$refs.field;
        expect(valid).to.not.true;
        vm.$refs.form.$nextTick(_ => {
          expect(field.validateMessage).to.equal('请输入活动名称');
          vm.setValue('aaaaa');

          vm.$refs.form.$nextTick(_ => {
            expect(field.validateMessage).to.equal('');
            vm.setValue('aa');

            vm.$refs.form.$nextTick(_ => {
              expect(field.validateMessage).to.equal('请输入活动名称');
              done();
            });
          });
        });
      });
    });
    it('textarea', done => {
      vm = createVue({
        template: `
          <tm-form :model="form" :rules="rules" ref="form">
            <tm-form-item label="活动名称" prop="name" ref="field">
              <tm-input type="textarea" v-model="form.name"></tm-input>
            </tm-form-item>
          </tm-form>
        `,
        data() {
          return {
            form: {
              name: ''
            },
            rules: {
              name: [
                { required: true, message: '请输入活动名称', trigger: 'change', min: 3, max: 6 }
              ]
            }
          };
        },
        methods: {
          setValue(value) {
            this.form.name = value;
          }
        }
      }, true);
      vm.$refs.form.validate(valid => {
        let field = vm.$refs.field;
        expect(valid).to.not.true;
        vm.$refs.form.$nextTick(_ => {
          expect(field.validateMessage).to.equal('请输入活动名称');
          vm.setValue('aaaaa');

          vm.$refs.form.$nextTick(_ => {
            expect(field.validateMessage).to.equal('');
            vm.setValue('aa');

            vm.$refs.form.$nextTick(_ => {
              expect(field.validateMessage).to.equal('请输入活动名称');
              done();
            });
          });
        });
      });
    });
    it('selector', done => {
      vm = createVue({
        template: `
          <tm-form :model="form" :rules="rules" ref="form">
            <tm-form-item label="记住密码" prop="region" ref="field">
              <tm-select v-model="form.region" placeholder="请选择活动区域">
                <tm-option label="区域一" value="shanghai"></tm-option>
                <tm-option label="区域二" ref="opt" value="beijing"></tm-option>
              </tm-select>
            </tm-form-item>
          </tm-form>
        `,
        data() {
          return {
            form: {
              region: ''
            },
            rules: {
              region: [
                {required: true, message: '请选择活动区域', trigger: 'change' }
              ]
            }
          };
        }
      }, true);
      vm.$refs.form.validate(valid => {
        let field = vm.$refs.field;
        expect(valid).to.false;
        setTimeout(_ => {
          expect(field.validateMessage).to.equal('请选择活动区域');
          // programatic modification of bound value does not triggers change validation
          vm.form.region = 'shanghai';
          setTimeout(_ => {
            expect(field.validateMessage).to.equal('请选择活动区域');
            // user modification of bound value triggers change validation
            vm.$refs.opt.$el.click();
            setTimeout(_ => {
              expect(field.validateMessage).to.equal('');
              done();
            }, 100);
          }, 100);
        }, 100);
      });
    });
    it('datepicker', done => {
      vm = createVue({
        template: `
          <tm-form :model="form" :rules="rules" ref="form">
            <tm-form-item label="记住密码" prop="date" ref="field">
              <tm-date-picker type="date" ref="picker" placeholder="选择日期" v-model="form.date" style="width: 100%;"></tm-date-picker>
            </tm-form-item>
          </tm-form>
        `,
        data() {
          return {
            form: {
              date: ''
            },
            rules: {
              date: [
                {type: 'date', required: true, message: '请选择日期', trigger: 'change' }
              ]
            }
          };
        }
      }, true);
      vm.$refs.form.validate(valid => {
        let field = vm.$refs.field;
        expect(valid).to.not.true;
        setTimeout(_ => {
          expect(field.validateMessage).to.equal('请选择日期');
          // programatic modification does not trigger change
          vm.value = new Date();
          setTimeout(_ => {
            expect(field.validateMessage).to.equal('请选择日期');
            vm.value = '';
            // user modification triggers change
            const input = vm.$refs.picker.$el.querySelector('input');
            input.blur();
            input.focus();
            setTimeout(_ => {
              const keyDown = (el, keyCode) => {
                const evt = document.createEvent('Events');
                evt.initEvent('keydown', true, true);
                evt.keyCode = keyCode;
                el.dispatchEvent(evt);
              };
              keyDown(input, 37);
              setTimeout(_ => {
                keyDown(input, 13);
                setTimeout(_ => {
                  expect(field.validateMessage).to.equal('');
                  done();
                }, DELAY);
              }, DELAY);
            }, DELAY);
          }, DELAY);
        }, DELAY);
      });
    });
    it('timepicker', done => {
      vm = createVue({
        template: `
          <tm-form :model="form" :rules="rules" ref="form">
            <tm-form-item label="记住密码" prop="date" ref="field">
              <tm-time-picker type="fixed-time" ref="picker" placeholder="选择时间" v-model="form.date" style="width: 100%;"></tm-time-picker>
            </tm-form-item>
          </tm-form>
        `,
        data() {
          return {
            form: {
              date: ''
            },
            rules: {
              date: [
                {type: 'date', required: true, message: '请选择时间', trigger: 'change' }
              ]
            }
          };
        }
      }, true);
      vm.$refs.form.validate(valid => {
        let field = vm.$refs.field;
        expect(valid).to.not.true;
        setTimeout(_ => {
          expect(field.validateMessage).to.equal('请选择时间');
          // programatic modification does not trigger change
          vm.value = new Date();
          setTimeout(_ => {
            expect(field.validateMessage).to.equal('请选择时间');
            vm.value = '';
            // user modification triggers change
            const input = vm.$refs.picker.$el.querySelector('input');
            input.blur();
            input.focus();
            setTimeout(_ => {
              vm.$refs.picker.picker.$el.querySelector('.confirm').click();
              setTimeout(_ => {
                expect(field.validateMessage).to.equal('');
                done();
              }, DELAY);
            }, DELAY);
          }, DELAY);
        }, DELAY);
      });
    });
    it('checkbox group', done => {
      vm = createVue({
        template: `
          <tm-form :model="form" :rules="rules" ref="form">
            <tm-form-item label="活动名称" prop="type" ref="field">
              <tm-checkbox-group v-model="form.type">
                <tm-checkbox label="美食/餐厅线上活动" name="type"></tm-checkbox>
                <tm-checkbox label="地推活动" name="type"></tm-checkbox>
                <tm-checkbox label="线下主题活动" name="type"></tm-checkbox>
                <tm-checkbox label="单纯品牌曝光" name="type"></tm-checkbox>
              </tm-checkbox-group>
            </tm-form-item>
          </tm-form>
        `,
        data() {
          return {
            form: {
              type: []
            },
            rules: {
              type: [
                { type: 'array', required: true, message: '请选择活动类型', trigger: 'change' }
              ]
            }
          };
        },
        methods: {
          setValue(value) {
            this.form.type = value;
          }
        }
      }, true);
      vm.$refs.form.validate(valid => {
        let field = vm.$refs.field;
        expect(valid).to.not.true;
        vm.$refs.form.$nextTick(_ => {
          expect(field.validateMessage).to.equal('请选择活动类型');
          vm.setValue(['地推活动']);

          vm.$refs.form.$nextTick(_ => {
            expect(field.validateMessage).to.equal('');
            done();
          });
        });
      });
    });
    it('radio group', done => {
      vm = createVue({
        template: `
          <tm-form :model="form" :rules="rules" ref="form">
            <tm-form-item label="活动名称" prop="type" ref="field">
              <tm-radio-group v-model="form.type">
                <tm-radio label="线上品牌商赞助"></tm-radio>
                <tm-radio label="线下场地免费"></tm-radio>
              </tm-radio-group>
            </tm-form-item>
          </tm-form>
        `,
        data() {
          return {
            form: {
              type: ''
            },
            rules: {
              type: [
                { required: true, message: '请选择活动类型', trigger: 'change' }
              ]
            }
          };
        },
        methods: {
          setValue(value) {
            this.form.type = value;
          }
        }
      }, true);
      vm.$refs.form.validate(valid => {
        let field = vm.$refs.field;
        expect(valid).to.not.true;
        vm.$refs.form.$nextTick(_ => {
          expect(field.validateMessage).to.equal('请选择活动类型');
          vm.setValue('线下场地免费');

          vm.$refs.form.$nextTick(_ => {
            expect(field.validateMessage).to.equal('');
            done();
          });
        });
      });
    });
    it('validate field', done => {
      vm = createVue({
        template: `
          <tm-form :model="form" :rules="rules" ref="form">
            <tm-form-item label="活动名称" prop="name" ref="field">
              <tm-input v-model="form.name"></tm-input>
            </tm-form-item>
          </tm-form>
        `,
        data() {
          return {
            form: {
              name: ''
            },
            rules: {
              name: [
                { required: true, message: '请输入活动名称', trigger: 'change', min: 3, max: 6 }
              ]
            }
          };
        },
        methods: {
          setValue(value) {
            this.form.name = value;
          }
        }
      }, true);
      vm.$refs.form.validateField('name', valid => {
        expect(valid).to.not.true;
        done();
      });
    });
    it('custom validate', done => {
      var checkName = (rule, value, callback) => {
        if (value.length < 5) {
          callback(new Error('长度至少为5'));
        } else {
          callback();
        }
      };
      vm = createVue({
        template: `
          <tm-form :model="form" :rules="rules" ref="form">
            <tm-form-item label="活动名称" prop="name" ref="field">
              <tm-input v-model="form.name"></tm-input>
            </tm-form-item>
          </tm-form>
        `,
        data() {
          return {
            form: {
              name: ''
            },
            rules: {
              name: [
                { validator: checkName, trigger: 'change' }
              ]
            }
          };
        },
        methods: {
          setValue(value) {
            this.form.name = value;
          }
        }
      }, true);
      vm.$refs.form.validate(valid => {
        let field = vm.$refs.field;
        expect(valid).to.not.true;
        vm.$refs.form.$nextTick(_ => {
          expect(field.validateMessage).to.equal('长度至少为5');
          vm.setValue('aaaaaa');

          vm.$refs.form.$nextTick(_ => {
            expect(field.validateMessage).to.equal('');
            done();
          });
        });
      });
    });
    it('error', done => {
      vm = createVue({
        template: `
          <tm-form :model="form" :rules="rules" ref="form">
            <tm-form-item label="活动名称" prop="name" :error="error" ref="field">
              <tm-input v-model="form.name"></tm-input>
            </tm-form-item>
          </tm-form>
        `,
        data() {
          return {
            error: 'dsad',
            form: {
              name: 'sada'
            },
            rules: {
              name: [
                { required: true, message: '请输入活动名称', trigger: 'change', min: 3, max: 6 }
              ]
            }
          };
        },
        methods: {
          setValue(value) {
            this.form.name = value;
          }
        }
      }, true);
      vm.$refs.form.validate(valid => {
        let field = vm.$refs.field;
        expect(valid).to.true;
        vm.error = '输入不合法';

        vm.$refs.field.$nextTick(_ => {
          expect(field.validateState).to.equal('error');
          expect(field.validateMessage).to.equal('输入不合法');
          done();
        });
      });
    });
    it('validate return promise', done => {
      var checkName = (rule, value, callback) => {
        if (value.length < 5) {
          callback(new Error('长度至少为5'));
        } else {
          callback();
        }
      };
      vm = createVue({
        template: `
          <tm-form :model="form" :rules="rules" ref="form">
            <tm-form-item label="活动名称" prop="name" ref="field">
              <tm-input v-model="form.name"></tm-input>
            </tm-form-item>
          </tm-form>
        `,
        data() {
          return {
            form: {
              name: ''
            },
            rules: {
              name: [
                { validator: checkName, trigger: 'change' }
              ]
            }
          };
        }
      }, true);
      vm.$refs.form.validate().catch(validFailed => {
        expect(validFailed).to.false;
        done();
      });
    });
  });
});
