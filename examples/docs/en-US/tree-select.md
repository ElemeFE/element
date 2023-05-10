## TreeSelect

The tree selector of the dropdown menu, it combines the functions of components el-tree and el-select.

### Basic usage

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

### Select any level

When using the check-strictly=true attribute, any node can be checked, otherwise only leaf nodes are supported.

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

### Multiple Selection

Multiple selection using clicks or checkbox.
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

### Clearable

You can clear tree-select using a clear icon.

Set clearable attribute for el-tree-select and a clear icon will appear.

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

### Disabled Selection

Disable options using the disabled field.

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

### Filterable

Use keyword filtering or custom filtering methods. filterMethod can custom filter method for data.

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

### LazyLoad

Lazy loading of tree nodes, suitable for large data lists.

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

| Name                  | Description                                                                                       | Type                        | Accepted Values   | Default|
| --------------------- | ------------------------------------------------------------------------------------------------- | --------------------------- | ----------------- | ------ |
| value / v-model       | binding value                                                                                     | boolean / string / number   | —                 | —      |
| data                  | tree data                                                                                         | array                       | —                 | —      |
| multiple              | whether multiple-select is activated                                                              | boolean                     | —                 | false  |
| disabled              | whether Select is disabled                                                                        | boolean                     | —                 | false  |
| size                  | size of Input                                                                                     | string                      | medium/small/mini | —      |
| clearable             | whether select can be cleared                                                                     | boolean                     | —                 | false  |
| collapse-tags         | whether to collapse tags to a text when multiple selecting                                        | boolean                     | —                 | false  |
| name                  | the name attribute of Tree-select input                                                           | string                      | —                 | —      |
| placeholder           | placeholder                                                                                       | string                      | —                 | 请选择 |
| filterable            | whether Tree-select is filterable                                                                 | boolean                     | —                 | false  |
| empty-text            | displayed text when there is no data                                                              | String                      | —                 | —      |
| node-key              | unique identity key name for nodes, its value should be unique across the whole tree              | String                      | —                 | —      |
| props                 | configuration options, see the following table                                                    | object                      | —                 | —      |
| render-after-expand   | whether to render child nodes only after a parent node is expanded for the first time             | boolean                     | —                 | true   |
| load                  | method for loading subtree data, only works when lazy is true                                     | function(node, resolve)     | —                 | —      |
| default-expand-all    | whether to expand all nodes by default                                                            | boolean                     | —                 | false  |
| auto-expand-parent    | whether to expand father node when a child node is expanded                                       | boolean                     | —                 | true   |
| show-checkbox         | whether node is selectable                                                                        | boolean                     | —                 | false  |
| check-strictly        | whether checked state of a node not affects its father and child nodes when show-checkbox is true | boolean                     | —                 | false  |
| filter-method         | custom filter method                                                                              | Function(value, data, node) | —                 | —      |
| accordion             | whether only one node among the same level can be expanded at one time                            | boolean                     | —                 | false  |
| indent                | horizontal indentation of nodes in adjacent levels in pixels                                      | number                      | —                 | 16     |
| lazy                  | whether to lazy load leaf node, used with load attribute                                          | boolean                     | —                 | false  |
| popper-append-to-body | whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false   | boolean          | -                 | true   |

### props

| Attribute| Description                                                                   | Type                          | Accepted Values    | Default         |
| -------- | ----------------------------------------------------------------------------- | ----------------------------- | -------------------| ----------------|
| label    | specify which key of node object is used as the node's label                  | string, function(data, node)  | —                  | —               |
| children | specify which node object is used as the node's subtree                       | string                        | —                  | —               |
| disabled | specify which key of node object represents if node's checkbox is disabled    | boolean, function(data, node) | —                  | —               |
| isLeaf   | specify whether the node is a leaf node, only works when lazy load is enabled | boolean, function(data, node) | —                  | —               |

### Events

| Method         | Description                                                     | Parameters                                 |
| -------------- | --------------------------------------------------------------- | ------------------------------------------ |
| change         | triggers when the selected value changes                        | current selected value                     |
| visible-change | triggers when the dropdown appears/disappears                   | true when it appears, and false otherwise  |
| remove-tag     | triggers when a tag is removed in multiple mode                 | removed tag value                          |
| clear          | triggers when the clear icon is clicked in a clearable Select   | —                                          |
| blur           | triggers when Input blurs                                       | (event: Event)                             |
| focus          | triggers when Input focuses                                     | (event: Event)                             |

