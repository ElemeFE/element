<script>
  module.exports = {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-03',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        drawerVisible: false,
        drawerVisibleLeft: false,
        drawerTableVisible: false,
        drawerFormVisible: false,
        outerVisible: false,
        innerVisible: false,
        centerDrawerVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Are you sure to close this drawer?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>

<style>
  .demo-box.demo-drawer {
    .drawer-footer button:first-child {
      margin-right: 10px;
    }
    .full-image {
      width: 100%;
    }
    .el-drawer__wrapper {
      margin: 0;
    }
    .el-select {
      width: 300px;
    }
    .el-input {
      width: 300px;
    }
    .el-button--text {
      margin-right: 15px;
    }
  }
</style>
## Drawer
User can interact with the Drawer while preserving the current page state.

### Basic usage

Drawer slide out from the right and let the user do something.

:::demo Set the `visible` attribute with a `Boolean`, and Drawer shows when it is `true`. The Drawer has two parts: `body` and `footer`, and the latter requires a `slot` named `footer`. The optional `title` attribute (empty by default) is for defining a title. Finally, this example demonstrates how `before-close` is used.

```html
<el-button type="text" @click="drawerVisible = true">click to open the Drawer</el-button>

<el-drawer
  title="Tips"
  :visible.sync="drawerVisible"
  :before-close="handleClose">
  <div>This is a message</div>
  <div>This is a message</div>
  <div>This is a message</div>
  <span slot="footer" class="drawer-footer">
    <el-button @click="drawerVisible = false">Cancel</el-button>
    <el-button type="primary" @click="drawerVisible = false">Confirm</el-button>
  </span>
</el-drawer>

<script>
  export default {
    data() {
      return {
        drawerVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Are you sure to close this drawer?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>
```
:::

:::tip
`before-close` only works when user clicks the close icon or the backdrop. If you have buttons that close the Drawer in the `footer` named slot, you can add what you would do with `before-close` in the buttons' click event handler.
:::

### Left Slider

Drawer slide from left.=

:::demo `placement` is required to `left`.

```html
<el-button type="text" @click="drawerVisibleLeft = true">click to open the Drawer</el-button>

<el-drawer
  title="Tips"
  placement="left"
  :visible.sync="drawerVisibleLeft">
  <div>This is a message</div>
  <div>This is a message</div>
  <div>This is a message</div>
  <span slot="footer" class="drawer-footer">
    <el-button @click="drawerVisibleLeft = false">Cancel</el-button>
    <el-button type="primary" @click="drawerVisibleLeft = false">Confirm</el-button>
  </span>
</el-drawer>

<script>
  export default {
    data() {
      return {
        drawerVisibleLeft: false
      };
    }
  };
</script>
```
:::

### Customizations

The content of Drawer can be anything, even a table or a form. This example shows how to use Element Table and Form with Drawer.

:::demo
```html
<!-- Table -->
<el-button type="text" @click="drawerTableVisible = true">open a Table nested Drawer</el-button>

<el-drawer title="Shipping address" width="50%" :visible.sync="drawerTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="Date" width="150"></el-table-column>
    <el-table-column property="name" label="Name" width="200"></el-table-column>
    <el-table-column property="address" label="Address"></el-table-column>
  </el-table>
</el-drawer>

<!-- Form -->
<el-button type="text" @click="drawerFormVisible = true">open a Form nested Drawer</el-button>

<el-drawer title="Shipping address" width="35%" :visible.sync="drawerFormVisible">
  <el-form :model="form">
    <el-form-item label="Promotion name" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="Zones" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="Please select a zone">
        <el-option label="Zone No.1" value="shanghai"></el-option>
        <el-option label="Zone No.2" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="drawer-footer">
    <el-button @click="drawerFormVisible = false">Cancel</el-button>
    <el-button type="primary" @click="drawerFormVisible = false">Confirm</el-button>
  </div>
</el-drawer>

<script>
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-03',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        drawerTableVisible: false,
        drawerFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    }
  };
</script>
```
:::

### Nested Drawer
If a Drawer is nested in another Drawer, `append-to-body` is required.
:::demo Normally we do not recommend using nested Drawer. If you need multiple Drawers rendered on the page, you can simply flat them so that they're siblings to each other. If you must nest a Drawer inside another Drawer, set `append-to-body` of the nested Drawer to true, and it will append to body instead of its parent node, so both Drawers can be correctly rendered.

```html
<template>
  <el-button type="text" @click="outerVisible = true">open the outer Drawer</el-button>
  
  <el-drawer width="30%" title="Outer Drawer" :visible.sync="outerVisible">
    <el-drawer
      width="20%"
      title="Inner Drawer"
      :visible.sync="innerVisible"
      append-to-body>
    </el-drawer>
    <div slot="footer" class="drawer-footer">
      <el-button @click="outerVisible = false">Cancel</el-button>
      <el-button type="primary" @click="innerVisible = true">open the inner Drawer</el-button>
    </div>
  </el-drawer>
</template>

<script>
  export default {
    data() {
      return {
        outerVisible: false,
        innerVisible: false
      };
    }
  }
</script>
```
:::

### Centered content

Drawer's content can be centered.

:::demo Setting `center` to `true` will center Drawer's header and footer horizontally. `center` only affects Drawer's header and footer. The body of Drawer can be anything, so sometimes it may not look good when centered. You need to write some CSS if you wish to center the body as well.

```html
<el-button type="text" @click="centerDrawerVisible = true">Click to open the Drawer</el-button>

<el-drawer
  title="Tips"
  :visible.sync="centerDrawerVisible"
  width="30%"
  center>
  <span>It should be noted that the content will not be aligned in center by default</span>
  <span slot="footer" class="drawer-footer">
    <el-button @click="centerDrawerVisible = false">Cancel</el-button>
    <el-button type="primary" @click="centerDrawerVisible = false">Confirm</el-button>
  </span>
</el-drawer>

<script>
  export default {
    data() {
      return {
        centerDrawerVisible: false
      };
    }
  };
</script>
```
:::

:::tip
The content of Drawer is lazily rendered, which means the default slot is not rendered onto the DOM until it is firstly opened. Therefore, if you need to perform a DOM manipulation or access a component using `ref`, do it in the `open` event callback.
:::

:::tip
If the variable bound to `visible` is managed in Vuex store, the `.sync` can not work properly. In this case, please remove the `.sync` modifier, listen to `open` and `close` events of Drawer, and commit Vuex mutations to update the value of that variable in the event handlers.
:::

### Attributes
| Attribute | Description   | Type      | Accepted Values                  | Default |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| visible   | visibility of Drawer, supports the .sync modifier | boolean | — | false |
| title     | title of Drawer. Can also be passed with a named slot (see the following table)    | — | — |
| width     | width of Drawer | string    | — | 25% |
| modal     | whether a mask is displayed   | boolean   | — | true |
| modal-append-to-body     | whether to append modal to body element. If false, the modal will be appended to Drawer's parent element   | boolean   | — | true |
| append-to-body     | whether to append Drawer itself to body. A nested Drawer should have this attribute set to `true`   | boolean   | — | false |
| lock-scroll | whether scroll of body is disabled while Drawer is displayed | boolean | — | true |
| custom-class      | custom class names for Drawer | string    | — | — |
| close-on-click-modal | whether the Drawer can be closed by clicking the mask | boolean    | — | true |
| close-on-press-escape | whether the Drawer can be closed by pressing ESC | boolean    | — | true |
| show-close | whether to show a close button | boolean    | — | true |
| before-close | callback before Drawer closes, and it will prevent Drawer from closing | function(done)，done is used to close the Drawer | — | — |
| center | whether to align the header and footer in center | boolean | — | false |

### Slot
| name | Description |
|------|--------|
| — | content of Drawer |
| title | content of the Drawer title |
| footer | content of the Drawer footer |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| open  | triggers when the Drawer opens | — |
| close  | triggers when the Drawer closes | — |
| closed | triggers when the Drawer closing animation ends | — |
