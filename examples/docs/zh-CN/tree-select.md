## TreeSelect 树形选择器

含有下拉菜单的树形选择器，结合了 el-tree 和 el-select 两个组件的功能。

### 基础单选

:::demo
```html
<template>
  <el-row :gutter="12">
    <el-col :span="12">
      <p>click text to select</p>
      <el-tree-select
        placeholder="Select"
        v-model="value1"
        :data="data"
        @change="handleNodeChange"
      />
    </el-col>
    <el-col :span="12">
      <p>show-checkbox</p>
      <el-tree-select
        placeholder="Select"
        v-model="value2"
        :data="data"
        show-checkbox
        @change="handleNodeChange"
      />
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        value1: "",
        value2: "",
        data: [
          {
            value: "1",
            label: "Level One 1",
            children: [
              {
                value: "1-1",
                label: "Level Two 1-1",
                children: [
                  {
                    value: "1-1-1",
                    label: "Level Three 1-1-1",
                  },
                ],
              },
            ],
          },
          {
            value: "2",
            label: "Level One 2",
            children: [
              {
                value: "2-1",
                label: "Level Two 2-1",
                children: [
                  {
                    value: "2-1-1",
                    label: "Level Three 2-1-1",
                  },
                ],
              },
              {
                value: "2-2",
                label: "Level Two 2-2",
                children: [
                  {
                    value: "2-2-1",
                    label: "Level Three 2-2-1",
                  },
                ],
              },
            ],
          },
          {
            value: "3",
            label: "Level One 3",
            children: [
              {
                value: "3-1",
                label: "Level Two 3-1",
                children: [
                  {
                    value: "3-1-1",
                    label: "Level Three 3-1-1",
                  },
                ],
              },
              {
                value: "3-2",
                label: "Level Two 3-2",
                children: [
                  {
                    value: "3-2-1",
                    label: "Level Three 3-2-1",
                  },
                ],
              },
            ],
          },
        ]
      }
    },

    methods: {
      handleNodeChange(e) {
        console.log(e);
      }
    }
  }
</script>
```
:::

### 选择任意级别

当属性 check-strictly=true 时，任何节点都可以被选择，否则只有子节点可被选择。

:::demo
```html
<el-row :gutter="12">
  <el-col :span="12">
    <p>click text to select</p>
    <el-tree-select
      placeholder="Select"
      v-model="value1"
      :data="data"
      check-strictly
      @change="handleNodeChange"
    />
  </el-col>
  <el-col :span="12">
    <p>show-checkbox, only click checkbox to select</p>
    <el-tree-select
      placeholder="Select"
      v-model="value2"
      :data="data"
      show-checkbox
      check-strictly
      @change="handleNodeChange"
    />
  </el-col>
</el-row>

<script>
  export default {
    data() {
      return {
        value1: "",
        value2: "",
        data: [
          {
            value: "1",
            label: "Level One 1",
            children: [
              {
                value: "1-1",
                label: "Level Two 1-1",
                children: [
                  {
                    value: "1-1-1",
                    label: "Level Three 1-1-1",
                  },
                ],
              },
            ],
          },
          {
            value: "2",
            label: "Level One 2",
            children: [
              {
                value: "2-1",
                label: "Level Two 2-1",
                children: [
                  {
                    value: "2-1-1",
                    label: "Level Three 2-1-1",
                  },
                ],
              },
              {
                value: "2-2",
                label: "Level Two 2-2",
                children: [
                  {
                    value: "2-2-1",
                    label: "Level Three 2-2-1",
                  },
                ],
              },
            ],
          },
          {
            value: "3",
            label: "Level One 3",
            children: [
              {
                value: "3-1",
                label: "Level Two 3-1",
                children: [
                  {
                    value: "3-1-1",
                    label: "Level Three 3-1-1",
                  },
                ],
              },
              {
                value: "3-2",
                label: "Level Two 3-2",
                children: [
                  {
                    value: "3-2-1",
                    label: "Level Three 3-2-1",
                  },
                ],
              },
            ],
          },
        ]
      }
    },

    methods: {
      handleNodeChange(e) {
        console.log(e);
      }
    }
  }
</script>
```
:::

### 多选

通过点击或复选框选择多个选项。
:::demo
```html
<el-row :gutter="12">
  <el-col :span="8">
    <p>click text to select</p>
    <el-tree-select
      placeholder="Select"
      v-model="value1"
      :data="data"
      multiple
      @change="handleNodeChange"
    />
  </el-col>
  <el-col :span="8">
    <p>show checkbox</p>
    <el-tree-select
      placeholder="Select"
      v-model="value2"
      :data="data"
      multiple
      show-checkbox
      @change="handleNodeChange"
    />
  </el-col>
  <el-col :span="8">
    <p>show checkbox with `check-strictly`</p>
    <el-tree-select
      placeholder="Select"
      v-model="value3"
      :data="data"
      multiple
      show-checkbox
      check-strictly
      @change="handleNodeChange"
    />
  </el-col>
</el-row>

<script>
  export default {
    data() {
      return {
        value1: [],
        value2: [],
        value3: [],
        data: [
          {
            value: "1",
            label: "Level One 1",
            children: [
              {
                value: "1-1",
                label: "Level Two 1-1",
                children: [
                  {
                    value: "1-1-1",
                    label: "Level Three 1-1-1",
                  },
                ],
              },
            ],
          },
          {
            value: "2",
            label: "Level One 2",
            children: [
              {
                value: "2-1",
                label: "Level Two 2-1",
                children: [
                  {
                    value: "2-1-1",
                    label: "Level Three 2-1-1",
                  },
                ],
              },
              {
                value: "2-2",
                label: "Level Two 2-2",
                children: [
                  {
                    value: "2-2-1",
                    label: "Level Three 2-2-1",
                  },
                ],
              },
            ],
          },
          {
            value: "3",
            label: "Level One 3",
            children: [
              {
                value: "3-1",
                label: "Level Two 3-1",
                children: [
                  {
                    value: "3-1-1",
                    label: "Level Three 3-1-1",
                  },
                ],
              },
              {
                value: "3-2",
                label: "Level Two 3-2",
                children: [
                  {
                    value: "3-2-1",
                    label: "Level Three 3-2-1",
                  },
                ],
              },
            ],
          },
        ]
      }
    },

    methods: {
      handleNodeChange(e) {
        console.log(e);
      }
    }
  }
</script>
```
:::

### 可清空选项

包含清空按钮，可将选择器清空为初始状态，为`el-tree-select`设置`clearable`属性，则可将选择器清空

:::demo 
```html
<el-row :gutter="12">
  <el-col :span="12">
    <el-tree-select
      placeholder="Select"
      v-model="value1"
      :data="data"
      clearable
    />
  </el-col>
  <el-col :span="12">
    <el-tree-select
      placeholder="Select"
      v-model="value2"
      :data="data"
      multiple
      show-checkbox
      clearable
    />
  </el-col>
</el-row>

<script>
  export default {
    data() {
      return {
        value1: "",
        value2: "",
        data: [
          {
            value: "1",
            label: "Level One 1",
            children: [
              {
                value: "1-1",
                label: "Level Two 1-1",
                children: [
                  {
                    value: "1-1-1",
                    label: "Level Three 1-1-1",
                  },
                ],
              },
            ],
          },
          {
            value: "2",
            label: "Level One 2",
            children: [
              {
                value: "2-1",
                label: "Level Two 2-1",
                children: [
                  {
                    value: "2-1-1",
                    label: "Level Three 2-1-1",
                  },
                ],
              },
              {
                value: "2-2",
                label: "Level Two 2-2",
                children: [
                  {
                    value: "2-2-1",
                    label: "Level Three 2-2-1",
                  },
                ],
              },
            ],
          },
          {
            value: "3",
            label: "Level One 3",
            children: [
              {
                value: "3-1",
                label: "Level Two 3-1",
                children: [
                  {
                    value: "3-1-1",
                    label: "Level Three 3-1-1",
                  },
                ],
              },
              {
                value: "3-2",
                label: "Level Two 3-2",
                children: [
                  {
                    value: "3-2-1",
                    label: "Level Three 3-2-1",
                  },
                ],
              },
            ],
          },
        ]
      }
    },

    methods: {
      handleNodeChange(e) {
        console.log(e);
      }
    }
  }
</script>
```
:::

### 禁用选项

使用 disabled 字段禁用选项。

:::demo
```html
<el-tree-select
  placeholder="Select"
  v-model="value"
  :data="data"
/>

<script>
  export default {
    data() {
      return {
        value: "",
        data: [
          {
            value: "1",
            label: "Level One 1",
            disabled: true,
            children: [
              {
                value: "1-1",
                label: "Level Two 1-1",
                disabled: true,
                children: [
                  {
                    value: "1-1-1",
                    label: "Level Three 1-1-1",
                    disabled: true,
                  },
                ],
              },
            ],
          },
          {
            value: "2",
            label: "Level One 2",
            children: [
              {
                value: "2-1",
                label: "Level Two 2-1",
                children: [
                  {
                    value: "2-1-1",
                    label: "Level Three 2-1-1",
                  },
                ],
              },
              {
                value: "2-2",
                label: "Level Two 2-2",
                children: [
                  {
                    value: "2-2-1",
                    label: "Level Three 2-2-1",
                  },
                ],
              },
            ],
          },
          {
            value: "3",
            label: "Level One 3",
            children: [
              {
                value: "3-1",
                label: "Level Two 3-1",
                children: [
                  {
                    value: "3-1-1",
                    label: "Level Three 3-1-1",
                  },
                ],
              },
              {
                value: "3-2",
                label: "Level Two 3-2",
                children: [
                  {
                    value: "3-2-1",
                    label: "Level Three 3-2-1",
                  },
                ],
              },
            ],
          },
        ]
      }
    },
  }
</script>
```
:::

### 可筛选

使用关键字筛选或自定义筛选方法。 filterMethod可以自定义数据筛选的方法。

:::demo
```html
<el-row :gutter="12">
  <el-col :span="12">
    <p>filterable</p>
    <el-tree-select
      placeholder="Select"
      v-model="value1"
      :data="data"
      filterable
    />
  </el-col>
  <el-col :span="12">
    <p>filterMethod</p>
    <el-tree-select
      placeholder="Select"
      v-model="value2"
      :data="data"
      filterable
      :filter-method="filterMethod"
    />
  </el-col>
</el-row>

<script>
  export default {
    data() {
      return {
        value1: "",
        value2: "",
        data: [
          {
            value: "1",
            label: "Level One 1",
            children: [
              {
                value: "1-1",
                label: "Level Two 1-1",
                children: [
                  {
                    value: "1-1-1",
                    label: "Level Three 1-1-1",
                  },
                ],
              },
            ],
          },
          {
            value: "2",
            label: "Level One 2",
            children: [
              {
                value: "2-1",
                label: "Level Two 2-1",
                children: [
                  {
                    value: "2-1-1",
                    label: "Level Three 2-1-1",
                  },
                ],
              },
              {
                value: "2-2",
                label: "Level Two 2-2",
                children: [
                  {
                    value: "2-2-1",
                    label: "Level Three 2-2-1",
                  },
                ],
              },
            ],
          },
          {
            value: "3",
            label: "Level One 3",
            children: [
              {
                value: "3-1",
                label: "Level Two 3-1",
                children: [
                  {
                    value: "3-1-1",
                    label: "Level Three 3-1-1",
                  },
                ],
              },
              {
                value: "3-2",
                label: "Level Two 3-2",
                children: [
                  {
                    value: "3-2-1",
                    label: "Level Three 3-2-1",
                  },
                ],
              },
            ],
          },
        ]
      }
    },

    methods: {
      filterMethod(value, data) {
        return data.value.indexOf(value) !== -1;
      }
    }
  }
</script>
```
:::

### 懒加载

树节点懒加载，更加适合于数据量大的列表。

:::demo
```html
<el-tree-select
  :props="props"
  placeholder="Select"
  v-model="value"
  clearable
  filterable
  lazy
  :filterMethod="filterMethod"
  :load="loadNode"
  node-key="id"
/>

<script>
  export default {
    data() {
      return {
        value: "",
        props: {
          label: "name",
          children: "zones",
          isLeaf: "leaf",
        },
      }
    },

    methods: {
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ id: "0", name: "Trunk" }]);
        }
        if (node.level > 3) return resolve([]);

        setTimeout(() => {
          const data = [
            {
              id: `leaf-${node.level}`,
              name: `Leaf ${node.level}`,
              leaf: true,
            },
            {
              id: `branch-${node.level}`,
              name: `Branch ${node.level}`,
            },
          ];
          resolve(data);
        }, 500);
      },

      filterMethod(value, data) {
        if (!value) return true;
        return data.name.indexOf(value) !== -1;
      },
    }
  }
</script>
```
:::


### Attributes

| 参数                   | 说明                                                                                            | 类型                        | 可选值            | 默认值 |
| --------------------- | ----------------------------------------------------------------------------------------------- | --------------------------- | ----------------- | ------ |
| value / v-model       | 绑定值                                                                                           | boolean / string / number   | —                 | —      |
| data                  | 展示数据                                                                                         | array                       | —                 | —      |
| multiple              | 是否多选                                                                                         | boolean                     | —                 | false  |
| disabled              | 是否禁用                                                                                         | boolean                     | —                 | false  |
| size                  | 输入框尺寸                                                                                       | string                      | medium/small/mini | —      |
| clearable             | 是否可以清空选项                                                                                 | boolean                     | —                 | false  |
| collapse-tags         | 多选时是否将选中值按文字的形式展示                                                                | boolean                     | —                 | false  |
| name                  | tree-select input 的 name 属性                                                                  | string                      | —                 | —      |
| placeholder           | 占位符                                                                                          | string                      | —                 | 请选择 |
| filterable            | 是否可搜索                                                                                      | boolean                     | —                 | false  |
| empty-text            | 内容为空的时候展示的文本                                                                         | String                      | —                 | —      |
| node-key              | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的                                                | String                      | —                 | —      |
| props                 | 配置选项，具体看下表                                                                             | object                      | —                 | —      |
| render-after-expand   | 是否在第一次展开某个树节点后才渲染其子节点                                                         | boolean                     | —                 | true   |
| load                  | 加载子树数据的方法，仅当 lazy 属性为 true 时生效                                                  | function(node, resolve)     | —                 | —      |
| default-expand-all    | 是否默认展开所有节点                                                                            | boolean                     | —                 | false  |
| auto-expand-parent    | 展开子节点的时候是否自动展开父节点                                                               | boolean                     | —                 | true   |
| show-checkbox         | 节点是否可被选择                                                                               | boolean                     | —                 | false  |
| check-strictly        | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false                             | boolean                     | —                 | false  |
| filter-method         | 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏      | Function(value, data, node) | —                 | —      |
| accordion             | 是否每次只打开一个同级树节点展开                                                                | boolean                     | —                 | false  |
| indent                | 相邻级节点间的水平缩进，单位为像素                                                              | number                      | —                 | 16     |
| lazy                  | 是否懒加载子节点，需与 load 方法结合使用                                                        | boolean                     | —                 | false  |
| popper-append-to-body | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false                     | boolean                     | -                 | true   |

### props

| 参数     | 说明                                                     | 类型                          | 可选值 | 默认值 |
| -------- | -------------------------------------------------------- | ----------------------------- | ------ | ------ |
| label    | 指定节点标签为节点对象的某个属性值                       | string, function(data, node)  | —      | —      |
| children | 指定子树为节点对象的某个属性值                           | string                        | —      | —      |
| disabled | 指定节点选择框是否禁用为节点对象的某个属性值             | boolean, function(data, node) | —      | —      |
| isLeaf   | 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效 | boolean, function(data, node) | —      | —      |

### Events

| 事件名称       | 说明                                     | 回调参数                      |
| -------------- | ---------------------------------------- | ----------------------------- |
| change         | 选中值发生变化时触发                     | 目前的选中值                  |
| visible-change | 下拉框出现/隐藏时触发                    | 出现则为 true，隐藏则为 false |
| remove-tag     | 多选模式下移除 tag 时触发                | 移除的 tag 值                 |
| clear          | 可清空的单选模式下用户点击清空按钮时触发 | —                             |
| blur           | 当 input 失去焦点时触发                  | (event: Event)                |
| focus          | 当 input 获得焦点时触发                  | (event: Event)                |

### Methods

| 方法名 | 说明                            | 参数 |
| ------ | ------------------------------- | ---- |
| focus  | 使 input 获取焦点               | -    |
| blur   | 使 input 失去焦点，并隐藏下拉框 | -    |
