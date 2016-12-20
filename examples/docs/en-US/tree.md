<script>
  const data = [{
    label: 'Level one 1',
    children: [{
      label: 'Level two 1-1'
    }]
  }, {
    label: 'Level one 2',
    children: [{
      label: 'Level two 2-1'
    }, {
      label: 'Level two 2-2'
    }]
  }, {
    label: 'Level one 3',
    children: [{
      label: 'Level two 3-1'
    }, {
      label: 'Level two 3-2'
    }]
  }];

  const regions = [{
    'name': 'region1'
  }, {
    'name': 'region2'
  }];

  let count = 1;

  const props = {
    label: 'name',
    children: 'zones'
  };

  var defaultProps = {
    children: 'children',
    label: 'label'
  };

  export default {
    methods: {
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'Root1' }, { name: 'Root2' }]);
        }
        if (node.level > 3) return resolve([]);
        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;          
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(function() {
          let data;
          if (hasChild) {
            data = [{
              name: 'zone' + count++
            }, {
              name: 'zone' + count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      }
    },

    data() {
      return {
        data,
        regions,
        defaultProps,
        props
      };
    }
  };
</script>

## Tree 

Display a set of data with hierarchies.

### Basic usage

Basic tree structure.

::: demo
```html
<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>

<script>
  export default {
    data() {
      return {
        data: [{
          label: 'Level one 1',
          children: [{
            label: 'Level two 1-1'
          }]
        }, {
          label: 'Level one 2',
          children: [{
            label: 'Level two 2-1'
          }, {
            label: 'Level two 2-2'
          }]
        }, {
          label: 'Level one 3',
          children: [{
            label: 'Level two 3-1'
          }, {
            label: 'Level two 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>
```
:::

### Selectable

Used for node selection. In the following example, data for each layer is acquired after being clicked. If there is no child data, the expanding icon will disappear.

::: demo
```html
<el-tree
  :data="regions"
  :props="props"
  :load="loadNode"
  lazy
  show-checkbox
  @check-change="handleCheckChange">
</el-tree>

<script>
  export default {
    data() {
      return {
        regions: [{
          'name': 'region1'
        }, {
          'name': 'region2'
        }],
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1
      };
    },
    methods: {
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'Root1' }, { name: 'Root2' }]);
        }
        if (node.level > 3) return resolve([]);

        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      }
    }
  };
</script>
```
:::

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data     | tree data | array | — | — |
| empty-text | text displayed when data is void | string | — | — |
| node-key | unique identity key name for nodes, its value should be unique across the whole tree | string | — | — |
| props | configuration options, see the following table | object | — | — |
| load | method for loading subtree data | function(node, resolve) | — | — |
| render-content | render function for tree node | Function(h, { node } | - | - |
| highlight-current | whether current node is highlighted | boolean | - | false |
| current-node-key | key of current node, a set only prop | string, number | - | - |
| default-expand-all | whether to expand all nodes by default | boolean | - | false |
| expand-on-click-node | whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon.  | - | true |
| auto-expand-parent | whether to expand father node when a child node is expanded | boolean | — | true |
| default-expanded-keys | array of keys of initially expanded nodes | array | — | — |
| show-checkbox | whether node is selectable | boolean | — | false |
| check-strictly | whether checked state of a node not affects its father and child nodes when `show-checkbox` is `true` | boolean | — | false |
| default-checked-keys | array of keys of initially checked nodes | array | — | — |
| filter-node-method | this function will be executed on each node when use filter method. if return `false`, tree node will be hidden. | Function(value, data, node) | - | - |

### props
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | specify which key of node object is used as the node's label | string | — | — |
| children | specify which key of node object is used as the node's subtree | string | — | — |

### Method
`Tree` has the following method, which returns the currently selected array of nodes.
| Method      | Description    | Parameters     |
|---------- |-------- |---------- |
| filter | filter all tree nodes, filtered nodes will be hidden | Accept a parameter which will be used as first parameter for filter-node-method |
| getCheckedNodes | If the node can be selected (`show-checkbox` is `true`), it returns the currently selected array of nodes | Accept a boolean type parameter whose default value is `false`. If the parameter is `true`, it only returns the currently selected array of sub-nodes.|
| setCheckedNodes | set certain nodes to be checked, only works when `node-key` is assigned | an array of nodes to be checked |
| getCheckedKeys | If the node can be selected (`show-checkbox` is `true`), it returns the currently selected array of node's keys | (leafOnly) Accept a boolean type parameter whose default value is `true`. If the parameter is `true`, it only returns the currently selected array of sub-nodes.|
| setCheckedKeys | set certain nodes to be checked, only works when `node-key` is assigned | (keys, leafOnly) Accept two parameters: 1. an array of node's keys to be checked 2. a boolean type parameter whose default value is `true`. If the parameter is `true`, it only returns the currently selected array of sub-nodes. |
| setChecked | set node to be checked or not, only works when `node-key` is assigned | (key/data, checked, deep) Accept three parameters: 1. node's key or data to be checked 2. a boolean typed parameter indicating checked or not. 3. a boolean typed parameter indicating deep or not. |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| node-click | triggers when a node is clicked | three parameters: node object corresponding to the node clicked, `node` property of TreeNode, TreeNode itself |
| check-change | triggers when the selected state of the node changes | three parameters: node object corresponding to the node whose selected state is changed, whether the node is selected, whether node's subtree has selected nodes |
| current-change | triggers when current node changes | two parameters: node object corresponding to the current node, `node` property of TreeNode |

