import { createVue } from '../util';

describe('Checkbox', () => {
  it('create', done => {
    const vm = createVue({
      template: `
        <el-checkbox v-model="checked">
        </el-checkbox>
      `,
      data() {
        return {
          checked: false
        };
      }
    }, true);
    let checkboxElm = vm.$el;
    expect(checkboxElm.classList.contains('el-checkbox')).to.be.true;
    checkboxElm.click();
    vm.$nextTick(_ => {
      expect(checkboxElm.querySelector('.is-checked')).to.be.ok;
      done();
    });
  });
  it('disabled', () => {
    const vm = createVue({
      template: `
        <el-checkbox
          v-model="checked"
          disabled
        >
        </el-checkbox>
      `,
      data() {
        return {
          checked: false
        };
      }
    }, true);
    let checkboxElm = vm.$el;
    expect(checkboxElm.querySelector('.is-disabled')).to.be.ok;
  });
  it('checkbox group', done => {
    const vm = createVue({
      template: `
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="a" ref="a"></el-checkbox>
          <el-checkbox label="b" ref="b"></el-checkbox>
          <el-checkbox label="c" ref="c"></el-checkbox>
          <el-checkbox label="d" ref="d"></el-checkbox>
        </el-checkbox-group>
      `,
      data() {
        return {
          checkList: []
        };
      }
    }, true);
    expect(vm.checkList.length === 0).to.be.true;
    vm.$refs.a.$el.click();
    vm.$nextTick(_ => {
      expect(vm.checkList.indexOf('a') !== -1).to.be.true;
      done();
    });
  });
  it('true false label', done => {
    const vm = createVue({
      template: `
        <el-checkbox true-label="a" :false-label="3" v-model="checked"></el-checkbox>
      `,
      data() {
        return {
          checked: 'a'
        };
      }
    }, true);
    vm.$el.click();
    vm.$nextTick(_ => {
      expect(vm.checked === 3).to.be.true;
      done();
    });
  });
  it('checked', () => {
    const vm = createVue({
      template: `
        <div>
          <el-checkbox v-model="checked" checked></el-checkbox>
          <el-checkbox-group v-model="checklist">
            <el-checkbox checked label="a"></el-checkbox>
          </el-checkbox-group>
        </div>
      `,
      data() {
        return {
          checked: false,
          checklist: []
        };
      }
    }, true);
    expect(vm.checked).to.be.true;
    expect(vm.checklist.indexOf('a') !== -1).to.be.true;
  });
});
