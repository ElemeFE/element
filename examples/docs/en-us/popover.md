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
        }],
        singleSelection: {},
        multipleSelection: [],
        model: ''
      };
    },

    watch: {
      singleSelection(val) {
        console.log('selection: ', val);
      },

      multipleSelection(val) {
        console.log('selection: ', val);
      }
    },

    events: {
      handleClick(row) {
        console.log('you clicked ', row);
      }
    }
  };
</script>

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

## Popover

### How to use

Similiar to Tooltip, popover is built upon `Vue-popper`. So for some duplicated attributes, please refer to the document of Tooltip.

:::demo Add `ref` in your popover, then in your button, use `v-popover` directive to link the button and the popover. The attribute `trigger` is used to trigger the popover with three options: `hover`, `click`, `focus`. Alternateively, you can specify reference by `slot`.

```html
<el-popover
  ref="popover1"
  placement="top-start"
  title="Title"
  width="200"
  trigger="hover"
  content="this is content">
</el-popover>

<el-popover
  ref="popover2"
  placement="bottom"
  title="Title"
  width="200"
  trigger="click"
  content="this is content">
</el-popover>

<el-button v-popover:popover1>hover to activate</el-button>
<el-button v-popover:popover2>click to activate</el-button>
<el-popover
  placement="right"
  title="Title"
  width="200"
  trigger="focus"
  content="this is content">
  <el-button slot="reference">focus to activate</el-button>
</el-popover>
```
:::

### Nested Information

Other components can be nested in popover. Following is a sample for nested table. 

:::demo replace `content` attribute with nested info.

```html
<el-popover
  ref="popover4"
  placement="right"
  width="400"
  trigger="click">
  <el-table :data="gridData">
    <el-table-column width="150" property="date" label="date"></el-table-column>
    <el-table-column width="100" property="name" label="name"></el-table-column>
    <el-table-column width="300" property="address" label="address"></el-table-column>
  </el-table>
</el-popover>

<el-button v-popover:popover4>click to activate</el-button>
```
:::

### Nested Operation

Of course, you can nest other operations. It's more light-weight than using a dialog.

:::demo
```html
<el-popover
  ref="popover5"
  placement="top"
  width="160"
  v-model="visible2">
  <p>are you sure to delete this content？</p>
  <div style="text-align: right; margin: 0">
    <el-button size="mini" type="text" @click.native="visible2 = false">cancel</el-button>
    <el-button type="primary" size="mini" @click.native="visible2 = false">confirm</el-button>
  </div>
</el-popover>

<el-button v-popover:popover5>delete</el-button>
```
:::

### Attributes
| Attribute               | Description                                                     | Type              | Options      | Default |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| trigger | The way to trigger a popover | String  | click/focus/hover |    click    |
|  title              | Title | String | — | — |
|  content        |  Popover content. Can also insert inner html via `slot`    | String            | — | — |
|  width        |  Width  | String, Number            | — | Min width 150px |
|  placement        |  Popover placement  | String | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |  bottom |
|  value(v-model)        |  Determine whether the state is visible  | Boolean           | — |  false |
|  offset        |  Popover offset  | Number           | — |  0 |
|  transition     |  Popover transition animation      | String             | — | fade-in-linear |
|  visible-arrow   |  Display the tooltip arrow or not. For more info, please refer to [Vue-popper](https://github.com/element-component/vue-popper) | Boolean | — | true |
|  options        | Parameters for [popper.js](https://popper.js.org/documentation.html) | Object            |Please refer to [popper.js](https://popper.js.org/documentation.html) | `{ boundariesElement: 'body', gpuAcceleration: false }` |

### Slot
| Attribute               | Description                                                     |
|--- | ---|
| — | Popove inner html |

