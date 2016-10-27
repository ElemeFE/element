import { createVue } from '../util';

describe('Form', () => {
  it('label width', done => {
    const vm = createVue({
      template: `
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
      `,
      data() {
        return {
          form: {
            name: ''
          }
        };
      }
    }, true);
    expect(vm.$el.querySelector('.el-form-item__label').style.width).to.equal('80px');
    expect(vm.$el.querySelector('.el-form-item__content').style.marginLeft).to.equal('80px');
    done();
  });
  it('inline form', done => {
    const vm = createVue({
      template: `
        <el-form ref="form" :model="form" inline>
          <el-form-item>
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.address"></el-input>
          </el-form-item>
        </el-form>
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
    expect(vm.$el.classList.contains('el-form--inline')).to.be.true;
    done();
  });
  it('label position', done => {
    const vm = createVue({
      template: `
        <div>
          <el-form :model="form" label-position="top" ref="labelTop">
            <el-form-item>
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.address"></el-input>
            </el-form-item>
          </el-form>
          <el-form :model="form" label-position="left" ref="labelLeft">
            <el-form-item>
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.address"></el-input>
            </el-form-item>
          </el-form>
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
    expect(vm.$refs.labelTop.$el.classList.contains('el-form--label-top')).to.be.true;
    expect(vm.$refs.labelLeft.$el.classList.contains('el-form--label-left')).to.be.true;
    done();
  });
  it('reset field', done => {
    const vm = createVue({
      template: `
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="form.name" ref="fieldName"></el-input>
          </el-form-item>
          <el-form-item label="活动地址" prop="address">
            <el-input v-model="form.address" ref="fieldAddr"></el-input>
          </el-form-item>
          <el-form-item label="活动性质" prop="type">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
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
    const vm = createVue({
      template: `
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item label="活动时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
        </el-form>
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
      const vm = createVue({
        template: `
          <el-form :model="form" :rules="rules" ref="form">
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-form>
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
        let fields = vm.$refs.form.fields;
        expect(valid).to.not.true;
        vm.$refs.form.$nextTick(_ => {
          expect(fields.name.error).to.equal('请输入活动名称');
          vm.setValue('aaaaa');

          vm.$refs.form.$nextTick(_ => {
            expect(fields.name.error).to.equal('');
            vm.setValue('aa');

            vm.$refs.form.$nextTick(_ => {
              expect(fields.name.error).to.equal('请输入活动名称');
              done();
            });
          });
        });
      });
    });
    it('textarea', done => {
      const vm = createVue({
        template: `
          <el-form :model="form" :rules="rules" ref="form">
            <el-form-item label="活动名称" prop="name">
              <el-input type="textarea" v-model="form.name"></el-input>
            </el-form-item>
          </el-form>
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
        let fields = vm.$refs.form.fields;
        expect(valid).to.not.true;
        vm.$refs.form.$nextTick(_ => {
          expect(fields.name.error).to.equal('请输入活动名称');
          vm.setValue('aaaaa');

          vm.$refs.form.$nextTick(_ => {
            expect(fields.name.error).to.equal('');
            vm.setValue('aa');

            vm.$refs.form.$nextTick(_ => {
              expect(fields.name.error).to.equal('请输入活动名称');
              done();
            });
          });
        });
      });
    });
    it('selector', done => {
      const vm = createVue({
        template: `
          <el-form :model="form" :rules="rules" ref="form">
            <el-form-item label="记住密码" prop="region">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        `,
        data() {
          return {
            form: {
              region: 'shanghai'
            },
            rules: {
              region: [
                {required: true, message: '请选择活动区域', trigger: 'change' }
              ]
            }
          };
        },
        methods: {
          setValue(value) {
            this.form.region = value;
          }
        }
      }, true);
      vm.$refs.form.validate(valid => {
        let fields = vm.$refs.form.fields;
        expect(valid).to.true;
        vm.setValue('');
        setTimeout(_ => {
          expect(fields.region.error).to.equal('请选择活动区域');
          vm.setValue('shanghai');

          setTimeout(_ => {
            expect(fields.region.error).to.equal('');
            done();
          }, 100);
        }, 100);
      });
    });
    it('datepicker', done => {
      const vm = createVue({
        template: `
          <el-form :model="form" :rules="rules" ref="form">
            <el-form-item label="记住密码" prop="date">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-form>
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
        },
        methods: {
          setValue(value) {
            this.form.date = value;
          }
        }
      }, true);
      vm.$refs.form.validate(valid => {
        let fields = vm.$refs.form.fields;
        expect(valid).to.not.true;
        vm.$refs.form.$nextTick(_ => {
          expect(fields.date.error).to.equal('请选择日期');

          vm.setValue(new Date());

          vm.$refs.form.$nextTick(_ => {
            expect(fields.date.error).to.equal('');
            done();
          });
        });
      });
    });
    it('timepicker', done => {
      const vm = createVue({
        template: `
          <el-form :model="form" :rules="rules" ref="form">
            <el-form-item label="记住密码" prop="date">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-form>
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
        },
        methods: {
          setValue(value) {
            this.form.date = value;
          }
        }
      }, true);
      vm.$refs.form.validate(valid => {
        let fields = vm.$refs.form.fields;
        expect(valid).to.not.true;
        vm.$refs.form.$nextTick(_ => {
          expect(fields.date.error).to.equal('请选择时间');
          vm.setValue(new Date());

          vm.$refs.form.$nextTick(_ => {
            expect(fields.date.error).to.equal('');
            done();
          });
        });
      });
    });
    it('checkbox group', done => {
      const vm = createVue({
        template: `
          <el-form :model="form" :rules="rules" ref="form">
            <el-form-item label="活动名称" prop="type">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
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
        let fields = vm.$refs.form.fields;
        expect(valid).to.not.true;
        vm.$refs.form.$nextTick(_ => {
          expect(fields.type.error).to.equal('请选择活动类型');
          vm.setValue(['地推活动']);

          vm.$refs.form.$nextTick(_ => {
            expect(fields.type.error).to.equal('');
            done();
          });
        });
      });
    });
    it('radio group', done => {
      const vm = createVue({
        template: `
          <el-form :model="form" :rules="rules" ref="form">
            <el-form-item label="活动名称" prop="type">
              <el-radio-group v-model="form.type">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
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
        let fields = vm.$refs.form.fields;
        expect(valid).to.not.true;
        vm.$refs.form.$nextTick(_ => {
          expect(fields.type.error).to.equal('请选择活动类型');
          vm.setValue('线下场地免费');

          vm.$refs.form.$nextTick(_ => {
            expect(fields.type.error).to.equal('');
            done();
          });
        });
      });
    });
    it('validate field', done => {
      const vm = createVue({
        template: `
          <el-form :model="form" :rules="rules" ref="form">
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-form>
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
      const vm = createVue({
        template: `
          <el-form :model="form" :rules="rules" ref="form">
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-form>
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
        let fields = vm.$refs.form.fields;
        expect(valid).to.not.true;
        vm.$refs.form.$nextTick(_ => {
          expect(fields.name.error).to.equal('长度至少为5');
          vm.setValue('aaaaaa');

          vm.$refs.form.$nextTick(_ => {
            expect(fields.name.error).to.equal('');
            done();
          });
        });
      });
    });
  });
});
