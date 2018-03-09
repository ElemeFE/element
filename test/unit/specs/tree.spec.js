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

  const getDisableTreeVm = (props, options) => {
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
                label: '三级 1-1',
                disabled: true
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
            label: 'label',
            disabled: 'disabled'
          }
        };
      }
    }, options), true);
  };

  const ALL_NODE_COUNT = 9;

  it('create', () => {
    vm = getTreeVm(':props="defaultProps" default-expand-all');
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

  it('current change', done => {
    vm = getTreeVm(':props="defaultProps" @current-change="handleCurrentChange"', {
      methods: {
        handleCurrentChange(data) {
          this.currentNode = data;
        }
      }
    });
    const firstNode = vm.$el.querySelector('.el-tree-node__content');
    firstNode.click();
    expect(vm.currentNode.label).to.equal('一级 1');
    done();
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
    const firstNode = document.querySelector('.el-tree-node');
    firstNode.click();
    vm.$nextTick(() => {
      expect(firstNode.className.indexOf('is-current') !== -1);
      done();
    });
  });

  it('expandOnNodeClick', done => {
    vm = getTreeVm(':props="defaultProps" :expand-on-node-click="false"');
    const firstNode = document.querySelector('.el-tree-node');
    firstNode.click();
    vm.$nextTick(() => {
      expect(firstNode.className.indexOf('is-expanded') === -1);
      done();
    });
  });

  it('current-node-key', done => {
    vm = getTreeVm(':props="defaultProps" :current-node-key="1"');
    const firstNode = document.querySelector('.el-tree-node');
    firstNode.click();
    vm.$nextTick(() => {
      expect(firstNode.classList.contains('is-current')).to.true;
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
      expect(tree.$el.querySelectorAll('.el-tree-node.is-hidden').length).to.equal(3);
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

  it('autoExpandParent = false', (done) => {
    vm = getTreeVm(':props="defaultProps" :default-expanded-keys="defaultExpandedKeys" node-key="id" :auto-expand-parent="false"', {
      created() {
        this.defaultExpandedKeys = [11];
      }
    });
    expect(vm.$el.querySelectorAll('.el-tree-node.is-expanded').length).to.equal(0);
    const firstNode = document.querySelector('.el-tree-node__content');
    firstNode.querySelector('.el-tree-node__expand-icon').click();
    setTimeout(() => {
      expect(document.querySelectorAll('.el-tree-node.is-expanded').length).to.equal(2);
      done();
    }, 100);
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
    const secondNode = document.querySelectorAll('.el-tree-node__content')[1];
    const nodeCheckbox = secondNode.querySelector('.el-checkbox');
    expect(nodeCheckbox).to.be.exist;
    nodeCheckbox.click();
    setTimeout(() => {
      expect(tree.getCheckedNodes().length).to.equal(3);
      expect(tree.getCheckedNodes(true).length).to.equal(2);
      secondNode.querySelector('.el-tree-node__expand-icon').click();
      setTimeout(() => {
        const firstLeaf = secondNode.nextElementSibling.querySelector('.el-tree-node__content');
        const leafCheckbox = firstLeaf.querySelector('.el-checkbox');
        leafCheckbox.click();
        setTimeout(() => {
          expect(tree.getCheckedNodes().length).to.equal(1);
          done();
        }, 10);
      }, 10);
    }, 10);
  });

  it('check', done => {
    vm = getTreeVm(':props="defaultProps" show-checkbox @check="handleCheck"', {
      methods: {
        handleCheck(data, args) {
          this.data = data;
          this.args = args;
        }
      }
    });
    const secondNode = document.querySelectorAll('.el-tree-node__content')[1];
    const nodeCheckbox = secondNode.querySelector('.el-checkbox');
    expect(nodeCheckbox).to.be.exist;
    nodeCheckbox.click();
    setTimeout(() => {
      expect(vm.args.checkedNodes.length).to.equal(3);
      expect(vm.data.id).to.equal(2);
      done();
    }, 10);
  });

  it('setCheckedNodes', (done) => {
    vm = getTreeVm(':props="defaultProps" show-checkbox node-key="id"');
    const tree = vm.$children[0];
    const secondNode = document.querySelectorAll('.el-tree-node__content')[1];
    const nodeCheckbox = secondNode.querySelector('.el-checkbox');
    nodeCheckbox.click();
    setTimeout(() => {
      expect(tree.getCheckedNodes().length).to.equal(3);
      expect(tree.getCheckedNodes(true).length).to.equal(2);
      setTimeout(() => {
        tree.setCheckedNodes([]);
        expect(tree.getCheckedNodes().length).to.equal(0);
        done();
      }, 10);
    }, 10);
  });

  it('setCheckedKeys', () => {
    vm = getTreeVm(':props="defaultProps" show-checkbox node-key="id"');
    const tree = vm.$children[0];
    tree.setCheckedKeys([111]);
    expect(tree.getCheckedNodes().length).to.equal(3);
    expect(tree.getCheckedKeys().length).to.equal(3);

    tree.setCheckedKeys([1]);
    setTimeout(function() {
      expect(tree.getCheckedNodes().length).to.equal(3);
      expect(tree.getCheckedKeys().length).to.equal(3);
    }, 0);

    tree.setCheckedKeys([2]);
    setTimeout(function() {
      expect(tree.getCheckedNodes().length).to.equal(3);
      expect(tree.getCheckedKeys().length).to.equal(3);
    }, 0);

    tree.setCheckedKeys([21]);
    expect(tree.getCheckedNodes().length).to.equal(1);
    expect(tree.getCheckedKeys().length).to.equal(1);
  });

  it('setCheckedKeys with checkStrictly', () => {
    vm = getTreeVm(':props="defaultProps" checkStrictly show-checkbox node-key="id"');
    const tree = vm.$children[0];
    tree.setCheckedKeys([111]);
    expect(tree.getCheckedNodes().length).to.equal(1);
    expect(tree.getCheckedKeys().length).to.equal(1);

    tree.setCheckedKeys([1]);
    setTimeout(function() {
      expect(tree.getCheckedNodes().length).to.equal(1);
      expect(tree.getCheckedKeys().length).to.equal(1);
    }, 0);

    tree.setCheckedKeys([2]);
    setTimeout(function() {
      expect(tree.getCheckedNodes().length).to.equal(1);
      expect(tree.getCheckedKeys().length).to.equal(1);
    }, 0);

    tree.setCheckedKeys([21, 22]);
    expect(tree.getCheckedNodes().length).to.equal(2);
    expect(tree.getCheckedKeys().length).to.equal(2);
  });

  it('method setChecked', () => {
    vm = getTreeVm(':props="defaultProps" show-checkbox node-key="id"');
    const tree = vm.$children[0];
    tree.setChecked(111, true, true);
    expect(tree.getCheckedNodes().length).to.equal(3);
    expect(tree.getCheckedKeys().length).to.equal(3);

    tree.setChecked(vm.data[0], false, true);
    expect(tree.getCheckedNodes().length).to.equal(0);
    expect(tree.getCheckedKeys().length).to.equal(0);
  });

  it('setCheckedKeys with leafOnly=false', () => {
    vm = getTreeVm(':props="defaultProps" show-checkbox node-key="id"');
    const tree = vm.$children[0];
    tree.setCheckedKeys([1, 11, 111, 2], false);
    setTimeout(function() {
      expect(tree.getCheckedNodes().length).to.equal(6);
      expect(tree.getCheckedKeys().length).to.equal(6);
    }, 0);
  });

  it('setCheckedKeys with leafOnly=true', () => {
    vm = getTreeVm(':props="defaultProps" show-checkbox node-key="id"');
    const tree = vm.$children[0];
    tree.setCheckedKeys([2], true);
    setTimeout(function() {
      expect(tree.getCheckedNodes().length).to.equal(2);
      expect(tree.getCheckedKeys().length).to.equal(2);
    }, 0);
  });

  it('setCurrentKey', (done) => {
    vm = getTreeVm(':props="defaultProps" show-checkbox node-key="id"');
    const tree = vm.$children[0];
    tree.setCurrentKey(111);
    vm.$nextTick(() => {
      expect(tree.store.currentNode.data.id).to.equal(111);
      done();
    });
  });

  it('setCurrentNode', (done) => {
    vm = getTreeVm(':props="defaultProps" show-checkbox node-key="id"');
    const tree = vm.$children[0];
    tree.setCurrentNode({
      id: 111,
      label: '三级 1-1'
    });
    vm.$nextTick(() => {
      expect(tree.store.currentNode.data.id).to.equal(111);
      done();
    });
  });

  it('getCurrentKey', (done) => {
    vm = getTreeVm(':props="defaultProps" show-checkbox node-key="id"');
    const tree = vm.$children[0];
    tree.setCurrentKey(111);
    vm.$nextTick(() => {
      expect(tree.getCurrentKey()).to.equal(111);
      done();
    });
  });

  it('getCurrentNode', (done) => {
    vm = getTreeVm(':props="defaultProps" show-checkbox node-key="id"');
    const tree = vm.$children[0];
    tree.setCurrentKey(111);
    vm.$nextTick(() => {
      expect(tree.getCurrentNode().id).to.equal(111);
      done();
    });
  });

  it('getNode', () => {
    vm = getTreeVm(':props="defaultProps" node-key="id"');
    const tree = vm.$children[0];
    const node = tree.getNode(111);
    expect(node.data.id).to.equal(111);
  });

  it('remove', (done) => {
    vm = getTreeVm(':props="defaultProps" node-key="id"');
    const tree = vm.$children[0];
    tree.remove(1);
    vm.$nextTick(() => {
      expect(vm.data[0].id).to.equal(2);
      expect(tree.getNode(1)).to.equal(null);
      done();
    });
  });

  it('append', () => {
    vm = getTreeVm(':props="defaultProps" node-key="id"');
    const tree = vm.$children[0];
    const nodeData = { id: 88, label: '88' };
    tree.append(nodeData, tree.getNode(1));

    expect(vm.data[0].children.length).to.equal(2);
    expect(tree.getNode(88).data).to.equal(nodeData);
  });

  it('insertBefore', () => {
    vm = getTreeVm(':props="defaultProps" node-key="id"');
    const tree = vm.$children[0];
    const nodeData = { id: 88, label: '88' };
    tree.insertBefore(nodeData, tree.getNode(11));
    expect(vm.data[0].children.length).to.equal(2);
    expect(vm.data[0].children[0]).to.equal(nodeData);
    expect(tree.getNode(88).data).to.equal(nodeData);
  });

  it('insertAfter', () => {
    vm = getTreeVm(':props="defaultProps" node-key="id"');
    const tree = vm.$children[0];
    const nodeData = { id: 88, label: '88' };
    tree.insertAfter(nodeData, tree.getNode(11));
    expect(vm.data[0].children.length).to.equal(2);
    expect(vm.data[0].children[1]).to.equal(nodeData);
    expect(tree.getNode(88).data).to.equal(nodeData);
  });

  it('set disabled checkbox', done => {
    vm = getDisableTreeVm(':props="defaultProps" show-checkbox node-key="id" default-expand-all');
    const node = document.querySelectorAll('.el-tree-node__content')[2];
    const nodeCheckbox = node.querySelector('.el-checkbox input');
    vm.$nextTick(() => {
      expect(nodeCheckbox.disabled).to.equal(true);
      done();
    });
  });

  it('check strictly', (done) => {
    vm = getTreeVm(':props="defaultProps" show-checkbox check-strictly default-expand-all');
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

  it('scoped slot', () => {
    vm = createVue({
      template: `
        <el-tree ref="tree" :data="data">
          <div slot-scope="scope" class="custom-tree-template">
            <span>{{ scope.node.label }}</span>
            <el-button></el-button>
          </div>
        </el-tree>
        `,

      data() {
        return {
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
          }]
        };
      }
    }, true);
    const firstNode = document.querySelector('.custom-tree-template');
    expect(firstNode).to.exist;
    const span = firstNode.querySelector('span');
    const button = firstNode.querySelector('.el-button');
    expect(span).to.exist;
    expect(span.innerText).to.equal('一级 1');
    expect(button).to.exist;
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
    const nodes = document.querySelectorAll('.el-tree-node__content');
    expect(nodes.length).to.equal(2);
    nodes[0].click();
    setTimeout(() => {
      expect(document.querySelectorAll('.el-tree-node__content').length).to.equal(4);
      done();
    }, 100);
  });

  it('lazy defaultChecked', done => {
    vm = getTreeVm(':props="defaultProps" node-key="id" lazy :load="loadNode" show-checkbox', {
      methods: {
        loadNode(node, resolve) {
          if (node.level === 0) {
            return resolve([{ label: 'region1', id: this.count++ }, { label: 'region2', id: this.count++ }]);
          }
          if (node.level > 4) return resolve([]);
          setTimeout(() => {
            resolve([{
              label: 'zone' + this.count,
              id: this.count++
            }, {
              label: 'zone' + this.count,
              id: this.count++
            }]);
          }, 50);
        }
      }
    });
    const tree = vm.$children[0];
    const firstNode = document.querySelector('.el-tree-node__content');
    const initStatus = firstNode.querySelector('.is-indeterminate');
    expect(initStatus).to.equal(null);
    tree.store.setCheckedKeys([3]);
    firstNode.querySelector('.el-tree-node__expand-icon').click();
    setTimeout(() => {
      const clickStatus = firstNode.querySelector('.is-indeterminate');
      expect(clickStatus).to.not.equal(null);
      const child = document.querySelectorAll('.el-tree-node__content')[1];
      expect(child.querySelector('input').checked).to.equal(true);
      done();
    }, 300);
  });

  it('lazy expandOnChecked', done => {
    vm = getTreeVm(':props="defaultProps" node-key="id" lazy :load="loadNode" show-checkbox check-descendants', {
      methods: {
        loadNode(node, resolve) {
          if (node.level === 0) {
            return resolve([{ label: 'region1', id: this.count++ }, { label: 'region2', id: this.count++ }]);
          }
          if (node.level > 2) return resolve([]);
          setTimeout(() => {
            resolve([{
              label: 'zone' + this.count,
              id: this.count++
            }, {
              label: 'zone' + this.count,
              id: this.count++
            }]);
          }, 10);
        }
      }
    });
    const tree = vm.$children[0];
    tree.store.setCheckedKeys([1]);
    setTimeout(() => {
      const checkedKeys = tree.getCheckedKeys();
      expect(checkedKeys.length).to.equal(7);
      done();
    }, 400);
  });

  it('lazy without expandOnChecked', done => {
    vm = getTreeVm(':props="defaultProps" node-key="id" lazy :load="loadNode" show-checkbox', {
      methods: {
        loadNode(node, resolve) {
          if (node.level === 0) {
            return resolve([{ label: 'region1', id: this.count++ }, { label: 'region2', id: this.count++ }]);
          }
          if (node.level > 4) return resolve([]);
          setTimeout(() => {
            resolve([{
              label: 'zone' + this.count,
              id: this.count++
            }, {
              label: 'zone' + this.count,
              id: this.count++
            }]);
          }, 50);
        }
      }
    });
    const tree = vm.$children[0];
    tree.store.setCheckedKeys([1]);
    setTimeout(() => {
      const nodes = document.querySelectorAll('.el-tree-node__content');
      expect(nodes[0].querySelector('input').checked).to.equal(true);
      expect(nodes.length).to.equal(2);
      done();
    }, 300);
  });

  it('accordion', done => {
    vm = getTreeVm(':props="defaultProps" accordion');
    const firstNode = vm.$el.querySelector('.el-tree-node__content');
    const secondNode = vm.$el.querySelector('.el-tree-node:nth-child(2) .el-tree-node__content');
    firstNode.click();
    setTimeout(() => {
      expect(vm.$el.querySelector('.el-tree-node').classList.contains('is-expanded')).to.true;
      secondNode.click();
      setTimeout(() => {
        expect(vm.$el.querySelector('.el-tree-node').classList.contains('is-expanded')).to.false;
        done();
      }, DELAY);
    }, DELAY);
  });

  it('handleNodeOpen & handleNodeClose', (done) => {
    vm = getTreeVm(':props="defaultProps" lazy :load="loadNode" @node-expand="handleNodeOpen" @node-collapse="handleNodeClose"', {
      methods: {
        loadNode(node, resolve) {
          if (node.level === 0) {
            return resolve([{label: 'region1'}, {label: 'region2'}]);
          }
          if (node.level > 4) return resolve([]);
          setTimeout(() => {
            resolve([{
              label: 'zone' + this.count++
            }, {
              label: 'zone' + this.count++
            }]);
          }, 50);
        },
        handleNodeOpen(data, node, vm) {
          this.currentNode = data;
          this.nodeExpended = true;
        },
        handleNodeClose(data, node, vm) {
          this.currentNode = data;
          this.nodeExpended = false;
        }
      }
    });
    const firstNode = document.querySelector('.el-tree-node__content');
    expect(firstNode.nextElementSibling).to.not.exist;
    firstNode.click();
    setTimeout(() => {
      expect(vm.nodeExpended).to.equal(true);
      expect(vm.currentNode.label).to.equal('region1');
      firstNode.click();
      setTimeout(() => {
        expect(vm.nodeExpended).to.equal(false);
        expect(vm.currentNode.label).to.equal('region1');
        done();
      }, 100);
    }, 100);
  });

  it('updateKeyChildren', (done) => {
    vm = getTreeVm(':props="defaultProps" show-checkbox node-key="id" default-expand-all');
    const tree = vm.$children[0];
    tree.updateKeyChildren(1, [{
      id: 111,
      label: '三级 1-1'
    }]);
    const node = document.querySelectorAll('.el-tree-node__content')[2];
    const label = node.querySelector('.el-tree-node__label');
    vm.$nextTick(() => {
      expect(tree.store.nodesMap['11']).to.equal(undefined);
      expect(tree.store.nodesMap['1'].childNodes[0].data.id).to.equal(111);
      expect(label.textContent).to.equal('三级 1-1');
      done();
    });
  });
});
