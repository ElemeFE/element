import { createVue, destroyVM } from '../util';

const DELAY = 10;

describe('Tree', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  const getTreeVm = (props, options) => {
    return createVue(Object.assign({
      template: `
        <el-tree ref="tree" :data="data" ${ props }></el-tree>
        `,

      data() {
        return {
          defaultExpandedKeys: [],
          defaultCheckedKeys: [],
          clickedNode: null,
          count: 1,
          data: [{
            id: 1,
            label: '一级 1',
            children: [{
              id: 11,
              label: '二级 1-1',
              children: [{
                id: 111,
                label: '三级 1-1'
              }]
            }]
          }, {
            id: 2,
            label: '一级 2',
            children: [{
              id: 21,
              label: '二级 2-1'
            }, {
              id: 22,
              label: '二级 2-2'
            }]
          }, {
            id: 3,
            label: '一级 3',
            children: [{
              id: 31,
              label: '二级 3-1'
            }, {
              id: 32,
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

  const ALL_NODE_COUNT = 9;

  it('create', () => {
    vm = getTreeVm(':props="defaultProps"');
    expect(document.querySelector('.el-tree')).to.exist;
    expect(document.querySelectorAll('.el-tree > .el-tree-node').length).to.equal(3);
    expect(document.querySelectorAll('.el-tree .el-tree-node').length).to.equal(ALL_NODE_COUNT);
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
    const firstNode = vm.$el.querySelector('.el-tree-node__content');
    firstNode.click();
    expect(vm.clickedNode.label).to.equal('一级 1');
    setTimeout(() => {
      expect(vm.$el.querySelector('.el-tree-node').classList.contains('is-expanded')).to.true;
      firstNode.click();
      setTimeout(() => {
        expect(vm.$el.querySelector('.el-tree-node').classList.contains('is-expanded')).to.false;
        done();
      }, DELAY);
    }, DELAY);
  });

  it('emptyText', (done) => {
    vm = getTreeVm(':props="defaultProps"');
    vm.data = [];
    vm.$nextTick(() => {
      expect(vm.$el.querySelectorAll('.el-tree__empty-block').length).to.equal(1);
      done();
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

  it('defaultExpandAll', () => {
    vm = getTreeVm(':props="defaultProps" default-expand-all');
    expect(vm.$el.querySelectorAll('.el-tree-node.is-expanded').length).to.equal(ALL_NODE_COUNT);
  });

  it('defaultExpandedKeys', () => {
    vm = getTreeVm(':props="defaultProps" :default-expanded-keys="defaultExpandedKeys" node-key="id"', {
      created() {
        this.defaultExpandedKeys = [1, 3];
      }
    });
    expect(vm.$el.querySelectorAll('.el-tree-node.is-expanded').length).to.equal(2);
  });

  it('defaultExpandedKeys set', (done) => {
    vm = getTreeVm(':props="defaultProps" :default-expanded-keys="defaultExpandedKeys" node-key="id"', {
      created() {
        this.defaultExpandedKeys = [1, 3];
      }
    });
    expect(vm.$el.querySelectorAll('.el-tree-node.is-expanded').length).to.equal(2);
    vm.defaultExpandedKeys = [2];
    vm.data = JSON.parse(JSON.stringify(vm.data));
    setTimeout(() => {
      expect(vm.$el.querySelectorAll('.el-tree-node.is-expanded').length).to.equal(1);
      done();
    }, 50);
  });

  it('filter-node-method', (done) => {
    vm = getTreeVm(':props="defaultProps" :filter-node-method="filterNode"', {
      methods: {
        filterNode(value, data) {
          if (!value) return true;
          return data.label.indexOf(value) !== -1;
        }
      }
    });

    const tree = vm.$refs.tree;
    tree.filter('2-1');

    setTimeout(() => {
      expect(tree.$el.querySelectorAll('.el-tree-node.is-hidden').length).to.equal(7);
      done();
    }, 100);
  });

  it('autoExpandParent = true', () => {
    vm = getTreeVm(':props="defaultProps" :default-expanded-keys="defaultExpandedKeys" node-key="id"', {
      created() {
        this.defaultExpandedKeys = [111];
      }
    });
    expect(vm.$el.querySelectorAll('.el-tree-node.is-expanded').length).to.equal(3);
  });

  it('autoExpandParent = false', () => {
    vm = getTreeVm(':props="defaultProps" :default-expanded-keys="defaultExpandedKeys" node-key="id" :auto-expand-parent="false"', {
      created() {
        this.defaultExpandedKeys = [111];
      }
    });
    expect(vm.$el.querySelectorAll('.el-tree-node.is-expanded').length).to.equal(1);
  });

  it('defaultCheckedKeys & check-strictly = false', () => {
    vm = getTreeVm(':props="defaultProps" default-expand-all show-checkbox :default-checked-keys="defaultCheckedKeys" node-key="id"', {
      created() {
        this.defaultCheckedKeys = [1];
      }
    });
    expect(vm.$el.querySelectorAll('.el-checkbox .is-checked').length).to.equal(3);
  });

  it('defaultCheckedKeys & check-strictly', () => {
    vm = getTreeVm(':props="defaultProps" default-expand-all show-checkbox :default-checked-keys="defaultCheckedKeys" node-key="id" check-strictly', {
      created() {
        this.defaultCheckedKeys = [1];
      }
    });
    expect(vm.$el.querySelectorAll('.el-checkbox .is-checked').length).to.equal(1);
  });

  it('show checkbox', done => {
    vm = getTreeVm(':props="defaultProps" show-checkbox');
    const tree = vm.$children[0];
    const secondNode = document.querySelectorAll('.el-tree-node__content')[3];
    const nodeCheckbox = secondNode.querySelector('.el-checkbox');
    expect(nodeCheckbox).to.be.exist;
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

  it('setCheckedNodes', (done) => {
    vm = getTreeVm(':props="defaultProps" show-checkbox node-key="id"');
    const tree = vm.$children[0];
    const secondNode = document.querySelectorAll('.el-tree-node__content')[3];
    const nodeCheckbox = secondNode.querySelector('.el-checkbox');
    nodeCheckbox.click();
    expect(tree.getCheckedNodes().length).to.equal(3);
    expect(tree.getCheckedNodes(true).length).to.equal(2);
    vm.$nextTick(() => {
      tree.setCheckedNodes([]);
      expect(tree.getCheckedNodes().length).to.equal(0);
      done();
    });
  });

  it('setCheckedKeys', () => {
    vm = getTreeVm(':props="defaultProps" show-checkbox node-key="id"');
    const tree = vm.$children[0];
    tree.setCheckedKeys([111]);
    expect(tree.getCheckedNodes().length).to.equal(3);
    expect(tree.getCheckedKeys().length).to.equal(3);
  });

  it('setCheckedKeys with leafOnly=false', () => {
    vm = getTreeVm(':props="defaultProps" show-checkbox node-key="id"');
    const tree = vm.$children[0];
    tree.setCheckedKeys([1, 11, 111, 2], false);
    expect(tree.getCheckedNodes().length).to.equal(6);
    expect(tree.getCheckedKeys().length).to.equal(6);
  });

  it('check strictly', (done) => {
    vm = getTreeVm(':props="defaultProps" show-checkbox check-strictly');
    const tree = vm.$children[0];
    const secondNode = document.querySelectorAll('.el-tree-node__content')[3];
    const nodeCheckbox = secondNode.querySelector('.el-checkbox');
    nodeCheckbox.click();
    expect(tree.getCheckedNodes().length).to.equal(1);
    expect(tree.getCheckedNodes(true).length).to.equal(0);
    const firstLeaf = secondNode.nextElementSibling.querySelector('.el-tree-node__content');
    const leafCheckbox = firstLeaf.querySelector('.el-checkbox');
    vm.$nextTick(() => {
      leafCheckbox.click();
      expect(tree.getCheckedNodes().length).to.equal(2);
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
          if (node.level === 0) {
            return resolve([{ label: 'region1' }, { label: 'region2' }]);
          }
          if (node.level > 4) return resolve([]);
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
