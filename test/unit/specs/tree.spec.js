import { createVue, destroyVM } from '../util';

describe('Tree', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  const getTreeVm = (props, options) => {
    return createVue(Object.assign({
      template: `
        <el-tree :data="data" ${ props }></el-tree>
        `,

      data() {
        return {
          clickedNode: null,
          count: 1,
          data: [{
            label: '一级 1',
            children: [{
              label: '二级 1-1'
            }]
          }, {
            label: '一级 2',
            children: [{
              label: '二级 2-1'
            }, {
              label: '二级 2-2'
            }]
          }, {
            label: '一级 3',
            children: [{
              label: '二级 3-1'
            }, {
              label: '二级 3-2'
            }]
          }],
          defaultProps: {
            children: 'children',
            label: 'label'
          }
        };
      }
    }, options), true);
  };

  it('create', () => {
    vm = getTreeVm(':props="defaultProps"');
    expect(document.querySelector('.el-tree')).to.exist;
    expect(document.querySelectorAll('.el-tree > .el-tree-node').length).to.equal(3);
    expect(document.querySelectorAll('.el-tree .el-tree-node').length).to.equal(8);
    vm.data[1].children = [{ label: '二级 2-1' }];
    const tree = vm.$children[0];
    expect(tree.children).to.deep.equal(vm.data);
  });

  it('click node', done => {
    vm = getTreeVm(':props="defaultProps" @node-click="handleNodeClick"', {
      methods: {
        handleNodeClick(data) {
          this.clickedNode = data;
        }
      }
    });
    const firstNode = document.querySelector('.el-tree-node__content');
    firstNode.click();
    expect(vm.clickedNode.label).to.equal('一级 1');
    vm.$nextTick(() => {
      expect(document.querySelector('.el-tree-node').classList.contains('expanded')).to.true;
      firstNode.click();
      vm.$nextTick(() => {
        expect(document.querySelector('.el-tree-node').classList.contains('expanded')).to.false;
        done();
      });
    });
  });

  it('highlight current', done => {
    vm = getTreeVm(':props="defaultProps" highlight-current');
    const firstNode = document.querySelector('.el-tree-node__content');
    firstNode.click();
    vm.$nextTick(() => {
      expect(getComputedStyle(firstNode)['background-color']).to.equal('rgb(239, 247, 255)');
      done();
    });
  });

  it('show checkbox', done => {
    vm = getTreeVm(':props="defaultProps" show-checkbox');
    const tree = vm.$children[0];
    const secondNode = document.querySelectorAll('.el-tree-node__content')[2];
    const nodeCheckbox = secondNode.querySelector('.el-checkbox');
    expect(nodeCheckbox).to.exist;
    nodeCheckbox.click();
    expect(tree.getCheckedNodes().length).to.equal(3);
    expect(tree.getCheckedNodes(true).length).to.equal(2);
    const firstLeaf = secondNode.nextElementSibling.querySelector('.el-tree-node__content');
    const leafCheckbox = firstLeaf.querySelector('.el-checkbox');
    vm.$nextTick(() => {
      leafCheckbox.click();
      expect(tree.getCheckedNodes().length).to.equal(1);
      done();
    });
  });

  it('render content', () => {
    vm = getTreeVm(':props="defaultProps" :render-content="renderContent"', {
      methods: {
        renderContent(h, node) {
          return (
            <span class="custom-content">
              <el-button>{ node.node.label }</el-button>
            </span>
          );
        }
      }
    });
    const firstNode = document.querySelector('.el-tree-node__content');
    expect(firstNode.querySelector('.custom-content')).to.exist;
    const button = firstNode.querySelector('.custom-content .el-button');
    expect(button).to.exist;
    expect(button.textContent).to.equal('一级 1');
  });

  it('load node', done => {
    vm = getTreeVm(':props="defaultProps" lazy :load="loadNode" show-checkbox', {
      methods: {
        loadNode(node, resolve) {
          if (node.level === -1) {
            return resolve([{ label: 'region1' }, { label: 'region2' }]);
          }
          if (node.level > 3) return resolve([]);
          setTimeout(() => {
            resolve([{
              label: 'zone' + this.count++
            }, {
              label: 'zone' + this.count++
            }]);
          }, 50);
        }
      }
    });
    const firstNode = document.querySelector('.el-tree-node__content');
    expect(firstNode.nextElementSibling.childNodes.length).to.equal(0);
    firstNode.click();
    setTimeout(() => {
      expect(firstNode.nextElementSibling.childNodes.length).to.equal(2);
      done();
    }, 100);
  });
});
