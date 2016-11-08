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
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      loadNode(node, resolve) {
        if (node.level === -1) {
          return resolve([{ name: 'region1' }, { name: 'region2' }]);
        }
        if (node.level > 4) return resolve([]);
        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
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

## Tree 树形控件

用清晰的层级结构展示信息，可展开或折叠。

### 基础用法

基础的树形结构展示。

::: demo
```html
<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>

<script>
  export default {
    data() {
      return {
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
  };
</script>
```
:::

### 可选择

适用于需要选择层级时使用。在下例中，由于在点击时才进行该层数据的获取，导致层级不可预知，如果没有下层数据，则点击后下拉按钮会消失。

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
        if (node.level === -1) {
          return resolve([{ name: 'region1' }, { name: 'region2' }]);
        }
        if (node.level > 4) return resolve([]);

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

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data     | 展示数据 | array | — | — |
| props | 配置选项，具体看下表 | object | — | — |
| load | 加载子树数据的方法 | function(node, resolve) | — | — |
| show-checkbox | 节点是否可被选择 | boolean | — | false |
| render-content | 树节点的内容区的渲染 Function | Function(h, { node } | - | - |
| highlight-current | 是否高亮当前选中节点，默认值是 false。| boolean | - | false |

### props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 指定节点标签为节点对象的某个属性值 | string | — | — |
| children | 指定子树为节点对象的某个属性值 | string | — | — |

### 方法
`Tree` 拥有如下方法，返回目前被选中的节点数组：

| 方法名 | 说明 | 参数 |
|------|--------|------|
| getCheckedNodes | 若节点可被选择（即 `show-checkbox` 为 `true`），<br>则返回目前被选中的节点所组成的数组 | 接收一个 boolean 类型的参数，若为 `true` 则<br>仅返回被选中的叶子节点，默认值为 `false` |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| node-click  | 节点被点击时的回调 | 共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。 |
| check-change  | 节点选中状态发生变化时的回调 | 共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、<br>节点本身是否被选中、节点的子树中是否有被选中的节点 |
