import { destroyVM, createVue } from '../util';

describe('TreeSelect', () => {
  const getTreeSelectVm = (props = '', options) => {
    return createVue(Object.assign({
      template: `
        <el-tree-select ref="treeSelect" :data="data" v-model="value" ${ props }></el-tree-select>
        `,
      data() {
        return {
          value: props.indexOf('multiple') === -1 ? '' : [],
          data: [{
            value: 1,
            label: '一级 1',
            children: [{
              value: 11,
              label: '二级 1-1',
              children: [{
                value: 111,
                label: '三级 1-1'
              }]
            }]
          }, {
            value: 2,
            label: '一级 2',
            children: [{
              value: 21,
              label: '二级 2-1'
            }, {
              value: 22,
              label: '二级 2-2'
            }]
          }, {
            value: 3,
            label: '一级 3',
            children: [{
              value: 31,
              label: '二级 3-1'
            }, {
              value: 32,
              label: '二级 3-2'
            }]
          }]
        };
      }
    }, options), true);
  };
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', (done) => {
    vm = getTreeSelectVm();

    expect(document.querySelector('.el-tree-select')).to.exist;

    vm.$el.querySelector('.el-input').click();

    setTimeout(() => {
      expect(document.querySelector('.el-tree-select-dropdown.el-popper')).to.exist;
      done();
    }, 20);
  });

  it('single select', (done) => {
    vm = getTreeSelectVm();
    vm.$refs.treeSelect.updatePopper();

    setTimeout(() => {
      document.querySelector('.el-tree-node__content').click();

      expect(vm.value).to.equal(1);
      done();
    }, 20);
  });

  it('multiple select and clear tag', (done) => {
    vm = getTreeSelectVm('multiple');
    vm.$refs.treeSelect.updatePopper();

    setTimeout(() => {
      const parentNodes = [].slice.call(document.querySelectorAll('.el-tree > .el-tree-node'));
      parentNodes[0].click();
      setTimeout(() => {
        expect(vm.value).to.deep.equal([1]);
        expect(vm.$el.querySelectorAll('.el-tag').length).to.equal(1);

        parentNodes[1].click();
        setTimeout(() => {
          expect(vm.value).to.deep.equal([1, 2]);
          expect(vm.$el.querySelectorAll('.el-tag').length).to.equal(2);

          vm.$el.querySelector('.el-tag__close').click();
          setTimeout(() => {
            expect(vm.value).to.deep.equal([2]);
            // expect(vm.$el.querySelectorAll('.el-tag').length).to.equal(1);
            done();
          }, 500);
        }, 20);
      }, 20);
    }, 20);
  });

  it('showcheckbox', (done) => {
    vm = getTreeSelectVm('multiple show-checkbox');
    vm.$refs.treeSelect.updatePopper();
    setTimeout(() => {
      document.querySelector('.el-tree-node__content').click();

      setTimeout(() => {
        expect(vm.value).to.deep.equal([111]);
        expect(vm.$el.querySelectorAll('.el-tree-select__tags .el-tag').length).to.equal(1);
        done();
      }, 20);
    }, 20);
  });

  it('showCheckedStrategy', (done) => {
    vm = getTreeSelectVm('multiple show-checkbox show-checked-strategy="all"');
    vm.$refs.treeSelect.updatePopper();
    setTimeout(() => {
      document.querySelector('.el-tree-node__content').click();

      setTimeout(() => {
        expect(vm.value).to.deep.equal([1, 11, 111]);
        expect(vm.$el.querySelectorAll('.el-tree-select__tags .el-tag').length).to.equal(3);

        done();
      });
    }, 20);
  });

});

