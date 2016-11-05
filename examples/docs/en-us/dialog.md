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

Informs users while preserving the current page state.

### Basic usage

Dialog pops up a dialog box, and it's quite customizable.

:::demo Set the `v-model` attribute with a `Boolean`, and Dialog shows when it is `true`. The Dialog has two parts: `body` and `footer`, and the latter requires a `slot` named `footer`. The optional `title` attribute (empty by default) is for defining a title. This example explicitly changes the value of `v-model` to toggle Dialog. In addition, we also provide `open` and `close` method, which you can call to open/close the Dialog.

```html
<el-button type="text" @click.native="dialogVisible = true">click to open the Dialog</el-button>

<el-dialog title="tips" v-model="dialogVisible" size="tiny">
  <span>This is a message</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click.native="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click.native="dialogVisible = false">Confirm</el-button>
  </span>
</el-dialog>
```
:::

### Customizations

The content of Dialog can be anything, even a table or a form. This example shows how to use Element Table and Form with Dialog。

:::demo

```html
<!-- Table -->
<el-button type="text" @click.native="dialogTableVisible = true" type="text">open a Table nested Dialog</el-button>

<el-dialog title="Shipping address" v-model="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="Date" width="150"></el-table-column>
    <el-table-column property="name" label="Name" width="200"></el-table-column>
    <el-table-column property="address" label="Address"></el-table-column>
  </el-table>
</el-dialog>

<!-- Form -->
<el-button type="text" @click.native="dialogFormVisible = true" type="text">open a Form nested Dialog</el-button>

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
    <el-button @click.native="dialogFormVisible = false">Cancel</el-button>
    <el-button type="primary" @click.native="dialogFormVisible = false">Confirm</el-button>
  </span>
</el-dialog>
```
:::

### Attributes

| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title     | title of Dialog | string    | —                               | —      |
| size      | size of Dialog | string    | tiny/small/large/full | small |
| top      | value for `top` of Dialog CSS, works when `size` is not `full` | string    | — | 15% |
| modal     | whether a mask is displayed | boolean   | — | true |
| lock-scroll     | whether scroll of body is disabled while Dialog is displayed | boolean   | — | true |
| custom-class      | custom class names for Dialog | string    | — | — |
| close-on-click-modal | whether the Dialog can be closed by clicking the mask | boolean    | — | true |
| close-on-press-escape | whether the Dialog can be closed by pressing ESC | boolean    | — | true |

### Slot

| Name | Description |
|------|--------|
| — | content of Dialog |
| footer | content of the Dialog footer |

### Methods
Each `el-dialog` instance has the following methods that can be used to open/close the instance without explicitly changing the value of `v-model`: 

| Method | Description |
|------|--------|
| open | open the current instance |
| close | close the current instance |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| open | triggers when the Dialog opens | — |
| close | triggers when the Dialog closes | — |

