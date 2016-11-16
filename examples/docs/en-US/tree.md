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
| props | configuration options, see the following table | object | — | — |
| load | method for loading subtree data | function(node, resolve) | — | — |
| show-checkbox | whether node is selectable | boolean | — | false |
| render-content | render function for tree node | Function(h, { node } | - | - |
| highlight-current | whether current node is highlighted | boolean | - | false |

### props
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | specify which key of node object is used as the node's label | string | — | — |
| children | specify which key of node object is used as the node's subtree | string | — | — |

### Method
`Tree` has the following method, which returns the currently selected array of nodes.
| Method      | Description    | Parameters     |
|---------- |-------- |---------- |
| getCheckedNodes | If the node can be selected (`show-checkbox` is `true`), it returns the currently selected array of nodes | Accept a boolean type parameter whose default value is `false`. <br>If the parameter is `true`, it only returns the currently selected array of sub-nodes.|

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| node-click | triggers when a node is clicked | three parameters: <br>node object corresponding to the node clicked, <br>`node` property of TreeNode, <br>TreeNode itself |
| check-change | triggers when the selected state of the node changes | three parameters: <br>node object corresponding to the node whose selected state is changed, <br>whether the node is selected, <br>whether node's subtree has selected nodes |


