import { createVue, destroyVM } from '../util';

describe('Checkbox', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue({
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
    vm = createVue({
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
    vm = createVue({
      template: `
        <el-checkbox-group v-model="checkList">
          <el-checkbox value="a" label="a" ref="a"></el-checkbox>
          <el-checkbox value="b" label="b" ref="b"></el-checkbox>
          <el-checkbox value="c" label="c" ref="c"></el-checkbox>
          <el-checkbox value="d" label="d" ref="d"></el-checkbox>
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

  it('nested group', done => {
    vm = createVue({
      template: `
        <el-checkbox-group v-model="checkList">
          <el-row>
            <el-checkbox value="a" label="a" ref="a"></el-checkbox>
            <el-checkbox value="b" label="b" ref="b"></el-checkbox>
            <el-checkbox value="c" label="c" ref="c"></el-checkbox>
            <el-checkbox value="d" label="d" ref="d"></el-checkbox>
          </el-row>
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

  it('true false value', done => {
    vm = createVue({
      template: `
        <el-checkbox true-value="a" :false-value="3" v-model="checked"></el-checkbox>
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
    vm = createVue({
      template: `
        <div>
          <el-checkbox v-model="checked" checked></el-checkbox>
          <el-checkbox-group v-model="checklist">
            <el-checkbox checked value="a" label="a"></el-checkbox>
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
