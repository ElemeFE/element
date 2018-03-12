<script>
  module.exports = {
    data() {
      return {
        dialogVisible: false,
        dialogTableVisible: false,
        dialogFormVisible: false,
        outerVisible: false,
        innerVisible: false,
        centerDialogVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('', 'Are you sure to close this dialog?', {
          center: true,
          confirmButtonText: false,
          cancelButtonText: false
        })
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>

## Dialog

Informs users while preserving the current page state.

### Basic usage

Dialog pops up a dialog box, and it's quite customizable.

:::demo Set the `visible` attribute with a `Boolean`, and Dialog shows when it is `true`. The Dialog has two parts: `body` and `footer`, and the latter requires a `slot` named `footer`. The optional `title` attribute (empty by default) is for defining a title.

```html
<tm-button type="text" @click="dialogVisible = true">click to open the Dialog</tm-button>

<tm-dialog
  title="Вы действительно хотите удалить пассажира?"
  :visible.sync="dialogVisible"
  width="35%"
  center>
  <p class="tm-dialog__content">Текст ясно дающий понять всю серьездность и необратимость данного действия.</p>
  <div slot="footer" class="dialog-footer text-center">
    <tm-button type="secondary" cancel @click="dialogVisible = false">Cancel</tm-button>
    <tm-button type="secondary" remove @click="dialogVisible = false">Delete</tm-button>
  </div>
</tm-dialog>
```
:::

### Customizations

The content of Dialog can be anything, even form. This example shows how to use Element Form with Dialog. Finally, this example demonstrates how `before-close` is used.

:::demo

```html

<!-- Form -->
<tm-button type="text" @click="dialogFormVisible = true">open a Form nested Dialog</tm-button>

<tm-dialog
  title="Групповой тур?"
  :visible.sync="dialogFormVisible"
  :before-close="handleClose"
  width="35%"
  center>
  <p class="tm-dialog__content">Оставьте свою заявку на групповой тер ниже. После обработки вашей заявки мы связемся с вами</p>
  <tm-form :model="form">
    <tm-form-item>
      <div class="tm-row">
        <div class="tm-col-12">
          <tm-input
            placeholder="Поиск города, отеля, ардеса"
            prefix-icon="search">
          </tm-input>
        </div>
        <div class="tm-col-12">
          <tm-input
            placeholder="Период пребывания"
            suffix-icon="calendar">
          </tm-input>
        </div>
      </div>
    </tm-form-item>
    <tm-form-item>
      <tm-input type="textarea"></tm-input>
    </tm-form-item>
  </tm-form>
  <div slot="footer" class="dialog-footer">
    <tm-button type="primary" class="block__button-cont" @click="dialogFormVisible = false">Отправить</tm-button>
  </div>
</tm-dialog>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        dialogTableVisible: false,
        dialogFormVisible: false,
        outerVisible: false,
        innerVisible: false,
        centerDialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('', 'Are you sure to close this dialog?', {
          center: true,
          confirmButtonText: false,
          cancelButtonText: false
        })
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
`before-close` only works when user clicks the close icon or the backdrop. If you have buttons that close the Dialog in the `footer` named slot, you can add what you would do with `before-close` in the buttons' click event handler.
:::

### Centered content
Dialog's content can be centered.

:::demo Setting `center` to `true` will center dialog's header and footer horizontally.

```html
<tm-button type="text" @click="centerDialogVisible = true">Click to open the Dialog</tm-button>

<tm-dialog
  title="Warning"
  :visible.sync="centerDialogVisible"
  width="30%"
  center>
  <p class="tm-dialog__content">It should be noted that the content will not be aligned in center by default</p>
</tm-dialog>

<script>
  export default {
    data() {
      return {
        centerDialogVisible: false
      };
    }
  };
</script>
```
:::

:::tip
`center` only affects Dialog's header and footer. The body of Dialog can be anything, so sometimes it may not look good when centered. You need to write some CSS if you wish to center the body as well.
:::

:::tip
If the variable bound to `visible` is managed in Vuex store, the `.sync` can not work properly. In this case, please remove the `.sync` modifier, listen to `open` and `close` events of Dialog, and commit Vuex mutations to update the value of that variable in the event handlers.
:::

### Attributes

| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| visible   | visibility of Dialog, supports the .sync modifier | boolean | — | false |
| title     | title of Dialog. Can also be passed with a named slot (see the following table) | string    | — | — |
| width     | width of Dialog | string    | — | 50% |
| fullscreen     | whether the Dialog takes up full screen | boolean    | — | false |
| top      | value for `margin-top` of Dialog CSS | string    | — | 15vh |
| modal     | whether a mask is displayed | boolean   | — | true |
| modal-append-to-body     | whether to append modal to body element. If false, the modal will be appended to Dialog's parent element | boolean   | — | true |
| append-to-body     | whether to append Dialog itself to body. A nested Dialog should have this attribute set to `true` | boolean   | — | false |
| lock-scroll     | whether scroll of body is disabled while Dialog is displayed | boolean   | — | true |
| custom-class      | custom class names for Dialog | string    | — | — |
| close-on-click-modal | whether the Dialog can be closed by clicking the mask | boolean    | — | true |
| close-on-press-escape | whether the Dialog can be closed by pressing ESC | boolean    | — | true |
| show-close | whether to show a close button | boolean    | — | true |
| before-close | callback before Dialog closes, and it will prevent Dialog from closing | function(done)，done is used to close the Dialog | — | — |
| center | whether to align the header and footer in center | boolean | — | false |

### Slot

| Name | Description |
|------|--------|
| — | content of Dialog |
| title | content of the Dialog title |
| footer | content of the Dialog footer |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| open | triggers when the Dialog opens | — |
| close | triggers when the Dialog closes | — |
