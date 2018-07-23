<style>
  .demo-tree-select .el-tree-select {
    width: 240px;
  }
</style>

<script>
  const data = [{
    label: '一级 1',
    value: '1',
    children: [{
      label: '二级 1-1',
      value: '1-1',
      children: [{
        label: '三级 1-1-1',
        value: '1-1-1'
      }]
    }]
  }, {
    label: '一级 2',
    value: '2',
    children: [{
      label: '二级 2-1',
      value: '2-1',
      children: [{
        label: '三级 2-1-1',
        value: '2-1-1'
      }]
    }, {
      label: '二级 2-2',
      value: '2-2',
      children: [{
        label: '三级 2-2-1',
        value: '2-2-1'
      }]
    }]
  }, {
    label: '一级 3',
    value: '3',
    children: [{
      label: '二级 3-1',
      value: '3-1',
      children: [{
        label: '三级 3-1-1',
        value: '3-1-1'
      }]
    }, {
      label: '二级 3-2',
      value: '3-2',
      children: [{
        label: '三级 3-2-1',
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

与 Select 组件类似，当选项具备层级结构时，可以使用 TreeSelect。

### 基础用法

:::demo `v-model` 的值为当前被选中的树节点的 value 属性值
```html
<template>
  <el-tree-select v-model="value" :data="treeData" placeholder="请选择">
  </el-tree-select>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      treeData: [{
        label: '一级 1',
        value: '1',
        children: [{
          label: '二级 1-1',
          value: '1-1',
          children: [{
            label: '三级 1-1-1',
            value: '1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        value: '2',
        children: [{
          label: '二级 2-1',
          value: '2-1',
          children: [{
            label: '三级 2-1-1',
            value: '2-1-1'
          }]
        }, {
          label: '二级 2-2',
          value: '2-2',
          children: [{
            label: '三级 2-2-1',
            value: '2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        value: '3',
        children: [{
          label: '二级 3-1',
          value: '3-1',
          children: [{
            label: '三级 3-1-1',
            value: '3-1-1'
          }]
        }, {
          label: '二级 3-2',
          value: '3-2',
          children: [{
            label: '三级 3-2-1',
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

### 基础多选

适用性较广的基础多选，用 Tag 展示已选项

:::demo 通过设置 `multiple` 属性来启用多选，此时 `v-model` 的值为当前选中值所组成的数组。
```html
<template>
  <el-tree-select v-model="value1" :data="treeData1" multiple placeholder="请选择">
  </el-tree-select>
</template>

<script>
  export default {
    data() {
      return {
        value1: [],
        treeData1: [{
          label: '一级 1',
          value: '1',
          children: [{
            label: '二级 1-1',
            value: '1-1',
            children: [{
              label: '三级 1-1-1',
              value: '1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          value: '2',
          children: [{
            label: '二级 2-1',
            value: '2-1',
            children: [{
              label: '三级 2-1-1',
              value: '2-1-1'
            }]
          }, {
            label: '二级 2-2',
            value: '2-2',
            children: [{
              label: '三级 2-2-1',
              value: '2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          value: '3',
          children: [{
            label: '二级 3-1',
            value: '3-1',
            children: [{
              label: '三级 3-1-1',
              value: '3-1-1'
            }]
          }, {
            label: '二级 3-2',
            value: '3-2',
            children: [{
              label: '三级 3-2-1',
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

### 禁用

:::demo 当设置 `disabled` 属性后，则整个选择器不可用
```html
<template>
  <el-tree-select v-model="value2" :data="treeData2" disabled placeholder="请选择">
  </el-tree-select>
</template>

<script>
  export default {
    data() {
      return {
        value2: '',
        treeData2: [{
          label: '一级 1',
          value: '1',
          children: [{
            label: '二级 1-1',
            value: '1-1'
          }]
        }, {
          label: '一级 2',
          value: '2',
          children: [{
            label: '二级 2-1',
            value: '2-1',
            children: [{
              label: '三级 2-1-1',
              value: '2-1-1'
            }]
          }, {
            label: '二级 2-2',
            value: '2-2',
            children: [{
              label: '三级 2-2-1',
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

### 可搜索

利用搜索功能筛选树节点

:::demo 通过设置 `filterable` 属性启用搜索功能。默认情况下，TreeSelect 会找出所有`label` 属性包含输入值的选项。如果希望使用其他的搜索逻辑，可以通过传入一个`filter-method`来实现。`filter-method` 为一个返回值为布尔类型的 `Function`，它会在输入值发生变化时调用，参数为当前输入值与树节点的 data。

```html
<template>
  <el-tree-select v-model="value3" :data="treeData3" filterable placeholder="请选择">
  </el-tree-select>
</template>

<script>
  export default {
    data() {
      return {
        value3: '',
        treeData3: [{
          label: '一级 1',
          value: '1',
          children: [{
            label: '二级 1-1',
            value: '1-1',
            children: [{
              label: '三级 1-1-1',
              value: '1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          value: '2',
          children: [{
            label: '二级 2-1',
            value: '2-1',
            children: [{
              label: '三级 2-1-1',
              value: '2-1-1'
            }]
          }, {
            label: '二级 2-2',
            value: '2-2',
            children: [{
              label: '三级 2-2-1',
              value: '2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          value: '3',
          children: [{
            label: '二级 3-1',
            value: '3-1',
            children: [{
              label: '三级 3-1-1',
              value: '3-1-1'
            }]
          }, {
            label: '二级 3-2',
            value: '3-2',
            children: [{
              label: '三级 3-2-1',
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

使用勾选框实现多选功能

:::demo 通过设置 `show-checkbox` 属性来使用勾选框去选择树节点。默认情况下，TreeSelect 的输入框中只会显示选中的子节点，通过 `show-checked-strategy` 属性来设置定义选中项回填的方式。
```html
<template>
  <el-tree-select v-model="value4" :data="treeData4" show-checkbox multiple  show-checked-strategy="parent" placeholder="请选择">
  </el-tree-select>
</template>

<script>
  export default {
    data() {
      return {
        value4: [],
        treeData4: [{
          label: '一级 1',
          value: '1',
          children: [{
            label: '二级 1-1',
            value: '1-1',
            children: [{
              label: '三级 1-1-1',
              value: '1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          value: '2',
          children: [{
            label: '二级 2-1',
            value: '2-1',
            children: [{
              label: '三级 2-1-1',
              value: '2-1-1'
            }]
          }, {
            label: '二级 2-2',
            value: '2-2',
            children: [{
              label: '三级 2-2-1',
              value: '2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          value: '3',
          children: [{
            label: '二级 3-1',
            value: '3-1',
            children: [{
              label: '三级 3-1-1',
              value: '3-1-1'
            }]
          }, {
            label: '二级 3-2',
            value: '3-2',
            children: [{
              label: '三级 3-2-1',
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
| 参数                  | 说明                                      | 类型                                      | 可选值     | 默认值     |
| --------------------- | ---------------------------------------- | ---------------------------------------- | --------- | --------- |
| value(v-model)        | 
