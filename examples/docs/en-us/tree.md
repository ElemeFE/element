<style>
  .leaf {
    width: 20px;
    background: #ddd;
  }

  .folder {
    width: 20px;
    background: #888;
  }
</style>

<script>
  var data = [{
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

  var regions = [{
    'name': 'region1'
  }, {
    'name': 'region2'
  }];

  var count = 1;

  var props = {
    label: 'name',
    children: 'zones',
    icon(data, node) {
      if (node.isLeaf) {
        return 'el-icon-close';
      }
      return 'el-icon-search';
    }
  };

  var defaultProps = {
    children: 'children',
    label: 'label'
  };

  export default {
    methods: {
      loadNode(node, resolve) {
        console.log(node);
        if (node.level === -1) {
          return resolve([{ name: 'Root1' }, { name: 'Root2' }]);
        }
        if (node.level > 4) return resolve([]);
        var hasChild;
        if (node.data.name === 'Root1') {
          hasChild = true;
        } else if (node.data.name === 'Root2') {
          hasChild = false;          
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(function() {
          var data;
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

Display information can be unfolded or folded in a clear hierarchy.

### How to use

Display the basic tree structure.

::: demo
```html
<el-tree :data="data" :props="defaultProps"></el-tree>

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
    }
  };
</script>
```
:::

### Options

Used for level selection. In the following example, the layer data is unpredictable when the data is clicked(ps: the data is acquired when clicked the current layer). If there is no lower layer data, the pull-down button is disappeared.

::: demo
```html
<el-tree :data="regions" :props="props" :load="loadNode" lazy show-checkbox></el-tree>

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
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes(true));
      },

      loadNode(node, resolve) {
        console.log(node);
        if (node.level === -1) {
          return resolve([{ name: 'Root1' }, { name: 'Root2' }]);
        }
        var hasChild = Math.random() > 0.5;
        if (node.level > 4) return resolve([]);

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

| Attribute      | Description          | Type      | Options                           | Default |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data     | Show the data | array | — | — |
| props | Configuration options, to see the following table | object | — | — |
| load | Method for loading subtree data | function(node, resolve) | — | — |

### props

| Attribute      | Description          | Type      | Options                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | Specifies that a node label is a property value of a node object | string | — | — |
| children | The specified subtree is a property value of the node object | string | — | — |

### Method

`Tree` has the following method, which returns the currently selected array of nodes.

| Method      | Description    | Parameter      |
|---------- |-------- |---------- |
| getCheckedNodes | If the node can be selected(`show-checkbox` is `true`), it returns the currently selected array of nodes | Accept a boolean type parameter whose default value is `false`. <br>If the parameter is `true`, it only returns the currently selected array of sub-nodes.|

### Events

| Event      | Description    | Callback      |
|---------- |-------- |---------- |
| node-click | Callback when the node is clicked | The instance that corresponds to the node in the array passed to the `data` property |
| check-change | Callback when the selected state of the node changes | Three parameters: <br>The instance that corresponds to the node in the array passed to the `data` property, <br>whether the node itself is selected, <br>whether there are selected nodes in the subtree of the node|


