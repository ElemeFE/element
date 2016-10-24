<script>
  module.exports = {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'Tiger Wang',
          address: 'Putuo District of Shanghai Jinsha River Road 1518 Lane'
        }, {
          date: '2016-05-04',
          name: 'Tiger Wang',
          address: 'Putuo District of Shanghai Jinsha River Road 1518 Lane'
        }, {
          date: '2016-05-01',
          name: 'Tiger Wang',
          address: 'Putuo District of Shanghai Jinsha River Road 1518 Lane'
        }, {
          date: '2016-05-03',
          name: 'Tiger Wang',
          address: 'Putuo District of Shanghai Jinsha River Road 1518 Lane'
        }],
        dialogVisible: false,
        dialogTinyVisible: false,
        dialogFullVisible: false,
        dialogStubbornVisible: false,
        dialogTableVisible: false,
        dialogBindVisible: false,
        dialogFormVisible: false,
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
        formLabelWidth: '80px'
      };
    },
    methods: {
      openDialog() {
        this.$refs.dialogBind.open();
      }
    }
  };
</script>

<style>
  .demo-box.demo-dialog {
    .dialog-footer button:first-child {
      margin-right: 10px;
    }
    .full-image {
      width: 100%;
    }
    .el-dialog__wrapper {
      margin: 0;
    }
    .el-select {
      width: 300px;
    }
    .el-input {
      width: 300px;
    }
  }
</style>
## Dialog

Informs users and carries associated action while preserving the current page state.

### How to use

Dialog Pop-up a dialog box, and it's suitable for the scene which needs to be more customizable.

:::demo You should set the `v-model` attribute which can accept `Boolean` type, and shows Dialog when set as `true`. The Dialog has two parts: `body` and `footer`. If you want to use  `footer`, you should set `slot` with value `footer`. You can also use `title` attribute to define titles. The `title` attribute is optional, and its default value is nil. This example has explicitly changed the value of `v-model` to show Dialog. In addition, we also provide `open` and `close` method for Dialog, you can call them to open/close the  Dialog.

```html
<el-button type="text" @click.native="dialogVisible = true">click to open the Dialog</el-button>

<el-dialog title="tips" v-model="dialogVisible" size="tiny">
  <span>This is a message</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click.native="dialogVisible = false">cancel</el-button>
    <el-button type="primary" @click.native="dialogVisible = false">confirm</el-button>
  </span>
</el-dialog>
```
:::

### Customizations

The content of Dialog component can be anything, even a table or a form. This example shows how to use Element Table and Form Components with Dialog。

:::demo

```html
<!-- Table -->
<el-button type="text" @click.native="dialogTableVisible = true" type="text">open the Dialog that nested with table</el-button>

<el-dialog title="Shipping address" v-model="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="date" width="150"></el-table-column>
    <el-table-column property="name" label="name" width="200"></el-table-column>
    <el-table-column property="address" label="address"></el-table-column>
  </el-table>
</el-dialog>

<!-- Form -->
<el-button type="text" @click.native="dialogFormVisible = true" type="text">open a Dialog with nested form</el-button>

<el-dialog title="Shipping address" v-model="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="Promotion name" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="Zones" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="Please select a zone">
        <el-option label="Zone No.1" value="shanghai"></el-option>
        <el-option label="Zone No.2" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click.native="dialogFormVisible = false">cancel</el-button>
    <el-button type="primary" @click.native="dialogFormVisible = false">confirm</el-button>
  </span>
</el-dialog>
```
:::

### Attributes

| Attribute      | Description          | Type      | Options                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title     | title of Dialog | string    | —                               | —      |
| size      | size of Dialog | string    | tiny/small/large/full | small |
| modal     | Whether a mask layer is required | boolean   | — | true |
| custom-class      | Custom class name of Dialog | string    | — | — |
| close-on-click-modal | Whether modal can be clicked to close the Dialog | boolean    | — | true |
| close-on-press-escape | Whether ESC can be pressed to close the Dialog | boolean    | — | true |

### Slot

| Name | Description |
|------|--------|
| — | content of Dialog |
| footer | content of the button operating area of Dialog |

### Method
Each `el-dialog` instance has following methods that can be used to open/close the instance without explicitly changing the value of `v-model`: 

| Method | Description |
|------|--------|
| open | open the current instance |
| close | close the current instance |

