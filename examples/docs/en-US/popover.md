<style>
  .demo-box.demo-popover {
    .el-popover + .el-popover {
      margin-left: 10px;
    }
    .el-input {
      width: 360px;
    }
    .el-button {
      margin-left: 10px;
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        visible2: false,
        gridData: [{
          date: '2016-05-02',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-04',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-01',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          address: 'New York City'
        }],
        gridData2: [{
          date: '2016-05-02',
          name: 'Jack',
          address: 'New York City',
        }, {
          date: '2016-05-04',
          name: 'Jack',
          address: 'New York City',
          $info: true
        }, {
          date: '2016-05-01',
          name: 'Jack',
          address: 'New York City',
        }, {
          date: '2016-05-03',
          name: 'Jack',
          address: 'New York City',
          $positive: true
        }],
        gridData3: [{
          tag: 'Home',
          date: '2016-05-03',
          name: 'Jack',
          address: 'New York City'
        }, {
          tag: 'Company',
          date: '2016-05-02',
          name: 'Jack',
          address: 'New York City'
        }, {
          tag: 'Company',
          date: '2016-05-04',
          name: 'Jack',
          address: 'New York City'
        }, {
          tag: 'Home',
          date: '2016-05-01',
          name: 'Jack',
          address: 'New York City'
        }, {
          tag: 'Company',
          date: '2016-05-08',
          name: 'Jack',
          address: 'New York City'
        }, {
          tag: 'Home',
          date: '2016-05-06',
          name: 'Jack',
          address: 'New York City'
        }, {
          tag: 'Company',
          date: '2016-05-07',
          name: 'Jack',
          address: 'New York City'
        }]
      };
    }
  };
</script>

## Popover

### Basic usage

Similar to Tooltip, Popover is also built with `Vue-popper`. So for some duplicated attributes, please refer to the documentation of Tooltip.

:::demo The `trigger` attribute is used to define how popover is triggered: `hover`, `click`, `focus` or `manual`. As for the triggering element, you can write it in two different ways: use the `slot="reference"` named slot, or use the `v-popover` directive and set it to Popover's `ref`.

```html
<el-popover
  placement="top-start"
  title="Title"
  width="200"
  trigger="hover"
  content="this is content, this is content, this is content">
  <el-button slot="reference">Hover to activate</el-button>
</el-popover>

<el-popover
  placement="bottom"
  title="Title"
  width="200"
  trigger="click"
  content="this is content, this is content, this is content">
  <el-button slot="reference">Click to activate</el-button>
</el-popover>

<el-popover
  ref="popover"
  placement="right"
  title="Title"
  width="200"
  trigger="focus"
  content="this is content, this is content, this is content">
</el-popover>
<el-button v-popover:popover>Focus to activate</el-button>

```
:::

### Nested information

Other components can be nested in popover. Following is an example of nested table.

:::demo replace the `content` attribute with a default `slot`.

```html
<el-popover
  placement="right"
  width="400"
  trigger="click">
  <el-table :data="gridData">
    <el-table-column width="150" property="date" label="date"></el-table-column>
    <el-table-column width="100" property="name" label="name"></el-table-column>
    <el-table-column width="300" property="address" label="address"></el-table-column>
  </el-table>
  <el-button slot="reference">Click to activate</el-button>
</el-popover>

<script>
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-04',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-01',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          address: 'New York City'
        }]
      };
    }
  };
</script>
```
:::

### Nested operation

Of course, you can nest other operations. It's more light-weight than using a dialog.

:::demo
```html
<el-popover
  placement="top"
  width="160"
  v-model="visible2">
  <p>Are you sure to delete this?</p>
  <div style="text-align: right; margin: 0">
    <el-button size="mini" type="text" @click="visible2 = false">cancel</el-button>
    <el-button type="primary" size="mini" @click="visible2 = false">confirm</el-button>
  </div>
  <el-button slot="reference">Delete</el-button>
</el-popover>

<script>
  export default {
    data() {
      return {
        visible2: false,
      };
    }
  }
</script>
```
:::

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| trigger | how the popover is triggered | string  | click/focus/hover/manual |    click    |
|  title              | popover title | string | — | — |
|  content        |  popover content, can be replaced with a default `slot`    | string            | — | — |
|  width        |  popover width  | string, number            | — | Min width 150px |
|  placement        |  popover placement  | string | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |  bottom |
|  disabled       |  whether Popover is disabled  | boolean    | — |  false |
|  value(v-model)        |  whether popover is visible  | Boolean           | — |  false |
|  offset        |  popover offset  | number           | — |  0 |
|  transition     |  popover transition animation      | string             | — | el-fade-in-linear |
|  visible-arrow   |  whether a tooltip arrow is displayed or not. For more info, please refer to [Vue-popper](https://github.com/element-component/vue-popper) | boolean | — | true |
|  popper-options        | parameters for [popper.js](https://popper.js.org/documentation.html) | object            | please refer to [popper.js](https://popper.js.org/documentation.html) | `{ boundariesElement: 'body', gpuAcceleration: false }` |
|  popper-class        |  custom class name for popover | string | — | — |
|  open-delay        | delay of appearance when `trigger` is hover, in milliseconds | number | — | — |

### Slot
| Name | Description |
| --- | --- |
| — | text content of popover |
| reference | HTML element that triggers popover |

### Events
| Event Name | Description | 回调参数 |
|---------|--------|---------|
| show | triggers when popover shows | — |
| after-enter | triggers when the entering transition ends | — |
| hide | triggers when popover hides | — |
| after-leave | triggers when the leaving transition ends | — |
