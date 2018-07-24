<style>
  .demo-tree-select .el-tree-select {
    width: 240px;
  }
</style>

<script>
  const data = [{
    label: 'Level one 1',
    value: '1',
    children: [{
      label: 'Level two 1-1',
      value: '1-1',
      children: [{
        label: 'Level three 1-1-1',
        value: '1-1-1'
      }]
    }]
  }, {
    label: 'Level one 2',
    value: '2',
    children: [{
      label: 'Level two 2-1',
      value: '2-1',
      children: [{
        label: 'Level three 2-1-1',
        value: '2-1-1'
      }]
    }, {
      label: 'Level two 2-2',
      value: '2-2',
      children: [{
        label: 'Level three 2-2-1',
        value: '2-2-1'
      }]
    }]
  }, {
    label: 'Level one 3',
    value: '3',
    children: [{
      label: 'Level two 3-1',
      value: '3-1',
      children: [{
        label: 'Level three 3-1-1',
        value: '3-1-1'
      }]
    }, {
      label: 'Level two 3-2',
      value: '3-2',
      children: [{
        label: 'Level three 3-2-1',
        value: '3-2-1'
      }]
    }]
  }];

  export default {
    data() {
      return {
        value: '',
        value1: [],
        value2: '',
        value3: '',
        value4: [],
        treeData: data,
        treeData1: JSON.parse(JSON.stringify(data)),
        treeData2: JSON.parse(JSON.stringify(data)),
        treeData3: JSON.parse(JSON.stringify(data)),
        treeData4: JSON.parse(JSON.stringify(data))
      }
    }
  }
</script>

## TreeSelect 树选择

Similar to Select component, TreeSelect can be used when the option has a hierarchical structure.

### 基础用法

:::demo `v-model` is the value of tree node which is currently selected.
```html
<template>
  <el-tree-select v-model="value" :data="treeData" placeholder="Select">
  </el-tree-select>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      treeData: [{
        label: 'Level one 1',
        value: '1',
        children: [{
          label: 'Level two 1-1',
          value: '1-1',
          children: [{
            label: 'Level three 1-1-1',
            value: '1-1-1'
          }]
        }]
      }, {
        label: 'Level one 2',
        value: '2',
        children: [{
          label: 'Level two 2-1',
          value: '2-1',
          children: [{
            label: 'Level three 2-1-1',
            value: '2-1-1'
          }]
        }, {
          label: 'Level two 2-2',
          value: '2-2',
          children: [{
            label: 'Level three 2-2-1',
            value: '2-2-1'
          }]
        }]
      }, {
        label: 'Level one 3',
        value: '3',
        children: [{
          label: 'Level two 3-1',
          value: '3-1',
          children: [{
            label: 'Level three 3-1-1',
            value: '3-1-1'
          }]
        }, {
          label: 'Level two 3-2',
          value: '3-2',
          children: [{
            label: 'Level three 3-2-1',
            value: '3-2-1'
          }]
        }]
      }]
    }
  }
}
</script>
```
:::

### Basic multiple select

Multiple select uses tags to display selected tree nodes.

:::demo Set `multiple` attribute for `el-tree-select` to enable multiple mode. In this case, the value of `v-model` will be an array of selected tree nodes.
```html
<template>
  <el-tree-select v-model="value1" :data="treeData1" multiple placeholder="Select">
  </el-tree-select>
</template>

<script>
  export default {
    data() {
      return {
        value1: [],
        treeData1: [{
          label: 'Level one 1',
          value: '1',
          children: [{
            label: 'Level two 1-1',
            value: '1-1',
            children: [{
              label: 'Level three 1-1-1',
              value: '1-1-1'
            }]
          }]
        }, {
          label: 'Level one 2',
          value: '2',
          children: [{
            label: 'Level two 2-1',
            value: '2-1',
            children: [{
              label: 'Level three 2-1-1',
              value: '2-1-1'
            }]
          }, {
            label: 'Level two 2-2',
            value: '2-2',
            children: [{
              label: 'Level three 2-2-1',
              value: '2-2-1'
            }]
          }]
        }, {
          label: 'Level one 3',
          value: '3',
          children: [{
            label: 'Level two 3-1',
            value: '3-1',
            children: [{
              label: 'Level three 3-1-1',
              value: '3-1-1'
            }]
          }, {
            label: 'Level two 3-2',
            value: '3-2',
            children: [{
              label: 'Level three 3-2-1',
              value: '3-2-1'
            }]
          }]
        }]
      }
    }
  }
</script>
```
:::

### Disabled TreeSelect

:::demo Set `disabled` of `el-tree-select` to make it disabled.
```html
<template>
  <el-tree-select v-model="value2" :data="treeData2" disabled placeholder="Select">
  </el-tree-select>
</template>

<script>
  export default {
    data() {
      return {
        value2: '',
        treeData2: [{
          label: 'Level one 1',
          value: '1',
          children: [{
            label: 'Level two 1-1',
            value: '1-1'
          }]
        }, {
          label: 'Level one 2',
          value: '2',
          children: [{
            label: 'Level two 2-1',
            value: '2-1',
            children: [{
              label: 'Level three 2-1-1',
              value: '2-1-1'
            }]
          }, {
            label: 'Level two 2-2',
            value: '2-2',
            children: [{
              label: 'Level three 2-2-1',
              value: '2-2-1'
            }]
          }]
        }]
      }
    }
  }
</script>
```
:::

### Tree node filtering

You can filter tree nodes for your desired ones.

:::demo Adding `filterable` to `el-tree-select` enables filtering. By default, TreeSelect will find all the tree nodes whose `value` attribute contains the input value. If you prefer other filtering strategies, you can pass the `filter-method`. `filter-method` is a `Function` that gets called when the input value changes, and it has two parameters. One is the current input value, another is the data of tree node.

```html
<template>
  <el-tree-select v-model="value3" :data="treeData3" filterable placeholder="Select">
  </el-tree-select>
</template>

<script>
  export default {
    data() {
      return {
        value3: '',
        treeData3: [{
          label: 'Level one 1',
          value: '1',
          children: [{
            label: 'Level two 1-1',
            value: '1-1',
            children: [{
              label: 'Level three 1-1-1',
              value: '1-1-1'
            }]
          }]
        }, {
          label: 'Level one 2',
          value: '2',
          children: [{
            label: 'Level two 2-1',
            value: '2-1',
            children: [{
              label: 'Level three 2-1-1',
              value: '2-1-1'
            }]
          }, {
            label: 'Level two 2-2',
            value: '2-2',
            children: [{
              label: 'Level three 2-2-1',
              value: '2-2-1'
            }]
          }]
        }, {
          label: 'Level one 3',
          value: '3',
          children: [{
            label: 'Level two 3-1',
            value: '3-1',
            children: [{
              label: 'Level three 3-1-1',
              value: '3-1-1'
            }]
          }, {
            label: 'Level two 3-2',
            value: '3-2',
            children: [{
              label: 'Level three 3-2-1',
              value: '3-2-1'
            }]
          }]
        }]
      }
    }
  }
</script>
```
:::

### 可勾选

Using checkbox to enable multiple selection

:::demo Set `show-checkbox` attribute for `el-tree-select` to allow using checkbox to select tree node. By defualt, only the selected child nodes will be displayed in the input box of TreeSelect. Set `show-checked-strategy` attribute to determine which type of node to display.
```html
<template>
  <el-tree-select v-model="value4" :data="treeData4" show-checkbox multiple  show-checked-strategy="parent" placeholder="Select">
  </el-tree-select>
</template>

<script>
  export default {
    data() {
      return {
        value4: [],
        treeData4: [{
          label: 'Level one 1',
          value: '1',
          children: [{
            label: 'Level two 1-1',
            value: '1-1',
            children: [{
              label: 'Level three 1-1-1',
              value: '1-1-1'
            }]
          }]
        }, {
          label: 'Level one 2',
          value: '2',
          children: [{
            label: 'Level two 2-1',
            value: '2-1',
            children: [{
              label: 'Level three 2-1-1',
              value: '2-1-1'
            }]
          }, {
            label: 'Level two 2-2',
            value: '2-2',
            children: [{
              label: 'Level three 2-2-1',
              value: '2-2-1'
            }]
          }]
        }, {
          label: 'Level one 3',
          value: '3',
          children: [{
            label: 'Level two 3-1',
            value: '3-1',
            children: [{
              label: 'Level three 3-1-1',
              value: '3-1-1'
            }]
          }, {
            label: 'Level two 3-2',
            value: '3-2',
            children: [{
              label: 'Level three 3-2-1',
              value: '3-2-1'
            }]
          }]
        }]
      }
    }
  }
</script>
```
:::

### Attributes
| Attribute             | Description                              | Type                        | Accepted Values | Default |
| --------------------- | ---------------------------------------- | --------------------------- | --------------- | ------- |
| value(v-model)        | binding value                            | number / string / array     | —               | —       |
| data                  | tree data                                | array                       | —               | —       |
| disabled              | whether TreeSelect is disabled           | boolean                     | —               | false   |
| multiple              | whether multiple-select is activated     | boolean                     | —               | false   |
| clearable             | whether single tree-select can be cleared| boolean                     | —               | false   |
| filterable            | whether TreeSelect is filterable         | boolean                     | —               | false   |
| filter-method         | custom filter method                     | function(querystring, nodeData)| —            | —       |
| placeholder           | placeholder                              | string                      | —               | Select  |
| size                  | size of Input                            | string                      | large/small/mini | —	     |
| show-checkbox         | whether checkbox is displayed and when it's true, TreeSelect is in multiple mode | boolean | —  |  false  |
| show-checked-strategy | the way to display selected nodes. By defualt, only the selected child nodes will be displayed. When it's `all`, all selected nodes (including the parent nodes) are displayed, and when it's `parent`, only the parent node is displayed (when all the child nodes under the parent node are selected)| string | all / parent / child  |  child  |
| props                 | [props attribute](http://element.eleme.io/#/en-US/component/tree#props) of Tree | object   | —   | —       |
| lazy                  | whether to lazy load leaf node, used with `load` attribute  | boolean  | —               | false    |
| load                  | method for loading subtree data, only works when `lazy` is true  | function(node, resolve)     | —               | —       |
| check-strictly        | whether checked state of a node not affects its father and child nodes when `show-checkbox` is `true` | boolean                     | —               | false   |


### Events
| Event Name     | Description                              | Parameters                               |
| -------------- | ---------------------------------------- | ---------------------------------------- |
| change         | triggers when the selected value changes | current selected value                   |
| blur           | triggers when Input blurs                | component instance                       |
| focus          | triggers when Input focuses              | component instance                       |
