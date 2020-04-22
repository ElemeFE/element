import { createVue, destroyVM } from '../util';

describe('Checkbox', () => {
  describe('checkbox-normal', () => {
    let vm;
    afterEach(() => {
      destroyVM(vm);
    });

    it('create', async() => {
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
      await vm.$nextTick();
      expect(checkboxElm.querySelector('.is-checked')).to.be.ok;
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
    it('change event', async() => {
      vm = createVue({
        template: `
          <el-checkbox v-model="checked" @change="onChange">
          </el-checkbox>
        `,
        methods: {
          onChange(val) {
            this.data = val;
          }
        },
        data() {
          return {
            data: '',
            checked: false
          };
        }
      }, true);
      let checkboxElm = vm.$el;
      checkboxElm.click();
      await vm.$nextTick();
      expect(vm.data).to.true;
      vm.checked = false;
      await vm.$nextTick();
      expect(vm.data).to.true;
    });
    it('checkbox group', async() => {
      vm = createVue({
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
      await vm.$nextTick();
      expect(vm.checkList.indexOf('a') !== -1).to.be.true;
    });

    it('checkbox group change event', async() => {
      vm = createVue({
        template: `
          <el-checkbox-group v-model="checkList" @change="onChange">
            <el-checkbox label="a" ref="a"></el-checkbox>
            <el-checkbox label="b" ref="b"></el-checkbox>
          </el-checkbox-group>
        `,
        methods: {
          onChange(val) {
            this.data = val;
          }
        },
        data() {
          return {
            data: '',
            checkList: []
          };
        }
      }, true);
      vm.$refs.a.$el.click();
      await vm.$nextTick();
      expect(vm.data).to.deep.equal(['a']);
      vm.checkList = ['b'];
    });

    it('checkbox group minimum and maximum', async() => {
      vm = createVue({
        template: `
          <el-checkbox-group
            v-model="checkList"
            :min="1"
            :max="2"
          >
            <el-checkbox label="a" ref="a"></el-checkbox>
            <el-checkbox label="b" ref="b"></el-checkbox>
            <el-checkbox label="c" ref="c"></el-checkbox>
            <el-checkbox label="d" ref="d"></el-checkbox>
          </el-checkbox-group>
        `,
        data() {
          return {
            checkList: ['a'],
            lastEvent: null
          };
        }
      }, true);
      expect(vm.checkList.length === 1).to.be.true;
      expect(vm.$refs.a.isDisabled).to.be.true;
      vm.$refs.a.$el.click();
      await vm.$nextTick();
      expect(vm.checkList.indexOf('a') !== -1).to.be.true;
      vm.$refs.b.$el.click();
      await vm.$nextTick();
      expect(vm.checkList.indexOf('a') !== -1).to.be.true;
      expect(vm.checkList.indexOf('b') !== -1).to.be.true;
      vm.$refs.c.$el.click();
      await vm.$nextTick();
      expect(vm.checkList.indexOf('c') !== -1).to.be.false;
      expect(vm.checkList.indexOf('d') !== -1).to.be.false;
      expect(vm.$refs.c.isDisabled).to.be.true;
      expect(vm.$refs.d.isDisabled).to.be.true;
    });

    it('nested group', async() => {
      vm = createVue({
        template: `
          <el-checkbox-group v-model="checkList">
            <el-row>
              <el-checkbox label="a" ref="a"></el-checkbox>
              <el-checkbox label="b" ref="b"></el-checkbox>
              <el-checkbox label="c" ref="c"></el-checkbox>
              <el-checkbox label="d" ref="d"></el-checkbox>
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
      await vm.$nextTick();
      expect(vm.checkList.indexOf('a') !== -1).to.be.true;
    });

    it('true false label', async() => {
      vm = createVue({
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
      await vm.$nextTick();
      expect(vm.checked === 3).to.be.true;
    });
    it('checked', () => {
      vm = createVue({
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

  describe('checkbox-button', () => {
    let vm;
    afterEach(() => {
      destroyVM(vm);
    });

    it('create', async() => {
      vm = createVue({
        template: `
          <el-checkbox-button v-model="checked">
          </el-checkbox-button>
        `,
        data() {
          return {
            checked: false
          };
        }
      }, true);
      let checkboxElm = vm.$el;
      expect(checkboxElm.classList.contains('el-checkbox-button')).to.be.true;
      checkboxElm.click();
      await vm.$nextTick();
      expect(checkboxElm.classList.contains('is-checked')).to.be.ok;
    });
    it('disabled', () => {
      vm = createVue({
        template: `
          <el-checkbox-button
            v-model="checked"
            disabled
          >
          </el-checkbox-button>
        `,
        data() {
          return {
            checked: false
          };
        }
      }, true);
      let checkboxElm = vm.$el;
      expect(checkboxElm.classList.contains('is-disabled')).to.be.ok;
    });

    it('change event', async() => {
      vm = createVue({
        template: `
          <el-checkbox-button v-model="checked" @change="onChange">
          </el-checkbox-button>
        `,
        methods: {
          onChange(val) {
            this.data = val;
          }
        },
        data() {
          return {
            data: '',
            checked: false
          };
        }
      }, true);
      let checkboxElm = vm.$el;
      checkboxElm.click();
      await vm.$nextTick();
      expect(vm.data).to.true;
      vm.checked = false;
      await vm.$nextTick();
      expect(vm.data).to.true;
    });

    it('checkbox group', async() => {
      vm = createVue({
        template: `
          <el-checkbox-group v-model="checkList">
            <el-checkbox-button label="a" ref="a"></el-checkbox-button>
            <el-checkbox-button label="b" ref="b"></el-checkbox-button>
            <el-checkbox-button label="c" ref="c"></el-checkbox-button>
            <el-checkbox-button label="d" ref="d"></el-checkbox-button>
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
      await vm.$nextTick();
      expect(vm.checkList.indexOf('a') !== -1).to.be.true;
      vm.$refs.b.$el.click();
      await vm.$nextTick();
      expect(vm.checkList.indexOf('a') !== -1).to.be.true;
      expect(vm.checkList.indexOf('b') !== -1).to.be.true;
    });

    it('checkbox-button group change event', async() => {
      vm = createVue({
        template: `
        <el-checkbox-group v-model="checkList" @change="onChange">
          <el-checkbox-button label="a" ref="a"></el-checkbox-button>
          <el-checkbox-button label="b" ref="b"></el-checkbox-button>
          <el-checkbox-button label="c" ref="c"></el-checkbox-button>
          <el-checkbox-button label="d" ref="d"></el-checkbox-button>
        </el-checkbox-group>
      `,
        methods: {
          onChange(val) {
            this.data = val;
          }
        },
        data() {
          return {
            data: '',
            checkList: []
          };
        }
      }, true);
      vm.$refs.a.$el.click();
      await vm.$nextTick();
      expect(vm.data).to.deep.equal(['a']);
      vm.checkList = ['b'];
      await vm.$nextTick();
      expect(vm.data).to.deep.equal(['a']);
    });

    it('checkbox group props', () => {
      vm = createVue({
        template: `
          <el-checkbox-group v-model="checkList" size="large" fill="#FF0000" text-color="#000">
            <el-checkbox-button label="a" ref="a"></el-checkbox-button>
            <el-checkbox-button label="b" ref="b"></el-checkbox-button>
            <el-checkbox-button label="c" ref="c"></el-checkbox-button>
            <el-checkbox-button label="d" ref="d"></el-checkbox-button>
          </el-checkbox-group>
        `,
        data() {
          return {
            checkList: ['a', 'd']
          };
        }
      }, true);
      expect(vm.checkList.length === 2).to.be.true;
      expect(vm.$refs.a.$el.classList.contains('is-checked')).to.be.true;
      expect(vm.$refs.a.$el.classList.contains('el-checkbox-button--large')).to.be.true;
      expect(vm.$refs.a.$el.querySelector('.el-checkbox-button__inner').style.backgroundColor).to.be.eql('rgb(255, 0, 0)');
      expect(vm.$refs.a.$el.querySelector('.el-checkbox-button__inner').style.boxShadow).to.be.eql('rgb(255, 0, 0) -1px 0px 0px 0px');
      expect(vm.$refs.a.$el.querySelector('.el-checkbox-button__inner').style.borderColor).to.be.eql('rgb(255, 0, 0)');
      expect(vm.$refs.a.$el.querySelector('.el-checkbox-button__inner').style.color).to.be.eql('rgb(0, 0, 0)');
      expect(vm.$refs.b.$el.classList.contains('is-checked')).to.be.false;
      expect(vm.$refs.c.$el.classList.contains('is-checked')).to.be.false;
      expect(vm.$refs.d.$el.classList.contains('is-checked')).to.be.true;
    });

    it('checkbox group minimum and maximum', async() => {
      vm = createVue({
        template: `
          <el-checkbox-group
            v-model="checkList"
            :min="1"
            :max="2"
          >
            <el-checkbox-button label="a" ref="a"></el-checkbox-button>
            <el-checkbox-button label="b" ref="b"></el-checkbox-button>
            <el-checkbox-button label="c" ref="c"></el-checkbox-button>
            <el-checkbox-button label="d" ref="d"></el-checkbox-button>
          </el-checkbox-group>
        `,
        data() {
          return {
            checkList: ['a'],
            lastEvent: null
          };
        }
      }, true);
      expect(vm.checkList.length === 1).to.be.true;
      vm.$refs.a.$el.click();
      await vm.$nextTick();
      expect(vm.checkList.indexOf('a') !== -1).to.be.true;
      vm.$refs.b.$el.click();
      await vm.$nextTick();
      expect(vm.checkList.indexOf('a') !== -1).to.be.true;
      expect(vm.checkList.indexOf('b') !== -1).to.be.true;
      vm.$refs.c.$el.click();
      await vm.$nextTick();
      expect(vm.checkList.indexOf('c') !== -1).to.be.false;
      expect(vm.checkList.indexOf('d') !== -1).to.be.false;
    });

    it('nested group', async() => {
      vm = createVue({
        template: `
          <el-checkbox-group v-model="checkList">
            <el-row>
              <el-checkbox-button label="a" ref="a"></el-checkbox-button>
              <el-checkbox-button label="b" ref="b"></el-checkbox-button>
              <el-checkbox-button label="c" ref="c"></el-checkbox-button>
              <el-checkbox-button label="d" ref="d"></el-checkbox-button>
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
      await vm.$nextTick();
      expect(vm.checkList.indexOf('a') !== -1).to.be.true;
    });

    it('true false label', async() => {
      vm = createVue({
        template: `
          <el-checkbox-button
            true-label="a"
            :false-label="3"
            v-model="checked"
          ></el-checkbox-button>
        `,
        data() {
          return {
            checked: 'a'
          };
        }
      }, true);
      vm.$el.click();
      expect(vm.checked === 3).to.be.true;
    });
    it('checked', () => {
      vm = createVue({
        template: `
          <div>
            <el-checkbox-button v-model="checked" checked></el-checkbox-button>
            <el-checkbox-group v-model="checklist">
              <el-checkbox-button checked label="a"></el-checkbox-button>
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
});
