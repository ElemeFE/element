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
        <el-form ref="form" :model="form">
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="form.name" ref="fieldName"></el-input>
          </el-form-item>
          <el-form-item label="活动地址" prop="address">
            <el-input v-model="form.address" ref="fieldAddr"></el-input>
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
      },
      methods: {
        setValue() {
          this.name = 'jack';
          this.address = 'aaaa';
        }
      }
    }, true);
    vm.setValue();
    vm.$refs.form.resetFields();
    vm.$refs.form.$nextTick(_ => {
      expect(vm.$refs.fieldName.$el.querySelector('input').value).to.equal('');
      expect(vm.$refs.fieldAddr.$el.querySelector('input').value).to.equal('');
      done();
    });
  });
  it('validate', done => {
    const vm = createVue({
      template: `
        <el-form :model="form" :rules="rules" ref="form">
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
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
          <el-form-item label="即时配送">
            <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质" prop="type">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源" prop="resource">
            <el-radio-group v-model="form.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式" prop="desc">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
        </el-form>
      `,
      data() {
        return {
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          rules: {
            name: [
              { required: true, message: '请输入活动名称', trigger: 'change' }
            ],
            region: [
              { required: true, message: '请选择活动区域', trigger: 'change' }
            ],
            date1: [
              { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ],
            date2: [
              { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
            ],
            type: [
              { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
            ],
            resource: [
              { required: true, message: '请选择活动资源', trigger: 'change' }
            ],
            desc: [
              { required: true, message: '请填写活动形式', trigger: 'change' }
            ]
          }
        };
      },
      methods: {
        initValue() {
          this.form.name = 'aaa';
          this.form.region = 'shanghai';
          this.form.date1 = new Date();
          this.form.date2 = new Date();
          this.form.type = ['地推活动'];
          this.form.resource = '线上品牌商赞助';
          this.form.desc = 'dsajkdhask';
        }
      }
    }, true);
    vm.$refs.form.validate(valid => {
      let fields = vm.$refs.form.fields;
      expect(valid).to.not.true;
      vm.$refs.form.$nextTick(_ => {
        expect(fields.name.$el.classList.contains('is-error')).to.be.true;
        expect(fields.name.$el.querySelector('.el-form-item__error')).to.exist;
        expect(fields.region.$el.classList.contains('is-error')).to.be.true;
        expect(fields.region.$el.querySelector('.el-form-item__error')).to.exist;
        expect(fields.date1.$el.classList.contains('is-error')).to.be.true;
        expect(fields.date1.$el.querySelector('.el-form-item__error')).to.exist;
        expect(fields.date2.$el.classList.contains('is-error')).to.be.true;
        expect(fields.date2.$el.querySelector('.el-form-item__error')).to.exist;
        expect(fields.type.$el.classList.contains('is-error')).to.be.true;
        expect(fields.type.$el.querySelector('.el-form-item__error')).to.exist;
        expect(fields.resource.$el.classList.contains('is-error')).to.be.true;
        expect(fields.resource.$el.querySelector('.el-form-item__error')).to.exist;
        expect(fields.desc.$el.classList.contains('is-error')).to.be.true;
        expect(fields.desc.$el.querySelector('.el-form-item__error')).to.exist;
        vm.initValue();

        setTimeout(_ => {
          expect(fields.name.$el.classList.contains('is-error')).to.not.true;
          expect(fields.name.$el.querySelector('.el-form-item__error')).to.not.exist;
          expect(fields.region.$el.classList.contains('is-error')).to.not.true;
          expect(fields.region.$el.querySelector('.el-form-item__error')).to.not.exist;
          expect(fields.date1.$el.classList.contains('is-error')).to.not.true;
          expect(fields.date1.$el.querySelector('.el-form-item__error')).to.not.exist;
          expect(fields.date2.$el.classList.contains('is-error')).to.not.true;
          expect(fields.date2.$el.querySelector('.el-form-item__error')).to.not.exist;
          expect(fields.type.$el.classList.contains('is-error')).to.not.true;
          expect(fields.type.$el.querySelector('.el-form-item__error')).to.not.exist;
          expect(fields.resource.$el.classList.contains('is-error')).to.not.true;
          expect(fields.resource.$el.querySelector('.el-form-item__error')).to.not.exist;
          expect(fields.desc.$el.classList.contains('is-error')).to.not.true;
          expect(fields.desc.$el.querySelector('.el-form-item__error')).to.not.exist;
          done();
        }, 500);
      });
    });
  });
});
