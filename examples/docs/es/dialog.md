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
        },
        formLabelWidth: '120px'
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
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
    .el-button--text {
      margin-right: 15px;
    }
  }
</style>

## Diálogo

Informar usuarios cuando preserva el estado de página corriente.

### Basic usage

Diálogo que se surge una caja de diálogo,y es bastante personalizable.

:::manifestación Establece el atributo con un `Boolean`, y Diálogo muestra cuando es `true`.El Diálogo tiene dos partes:`body` y `footer`, y el último exige un `slot`llamado `footer`.El atributo opcional `title` (vacío por defecto) es para definir un título.Finalmente,este ejemplo demostra cómo `before-close` es usado.


```html
<el-button type="text" @click="dialogVisible = true">click to open the Dialog</el-button>

<el-dialog
  title="Tips"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>This is a message</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
  </span>
</el-dialog>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
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

:::propina

`before-close` solamente funciona cuando usuarios se hacen clic el icono de cerrar o el fondo.Si tienes botones que cercan el Diálogo en el `footer` que se llamado slot,puedes añadir que harías con `before-close` en controlador del evento click de los botones.
:::

### Personalizaciones


El contenido de Diálogo puede ser cualquier cosa,hasta una mesa o un formulario.Este ejemplo muestra cómo utilizar Mesa y Formulario de Element con Diálogo.

:::manifestación

```html
<!-- Table -->
<el-button type="text" @click="dialogTableVisible = true">open a Table nested Dialog</el-button>

<el-dialog title="Shipping address" :visible.sync="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="Date" width="150"></el-table-column>
    <el-table-column property="name" label="Name" width="200"></el-table-column>
    <el-table-column property="address" label="Address"></el-table-column>
  </el-table>
</el-dialog>

<!-- Form -->
<el-button type="text" @click="dialogFormVisible = true">open a Form nested Dialog</el-button>

<el-dialog title="Shipping address" :visible.sync="dialogFormVisible">
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
    <el-button @click="dialogFormVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
  </span>
</el-dialog>

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
        dialogTableVisible: false,
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
        formLabelWidth: '120px'
      };
    }
  };
</script>
```
:::

### Diálogo anidado
Si un cuadro de diálogo está anidado en otro cuadro de diálogo,`append-to-body` es requerido.
:::manifestación Normalmente no recomendamos el uso de Diálogo anidado.Si necesitas varios cuadros de diálogo representados en la página,puedes aplastarlos simplemente así que serían hermanos el uno al otro.Si tienes que anidar un cuadro de diálogo dentro de otro cuadro de diálogo,establece `append-to-body` del diálogo anidado a verdadero,y se agregará al cuerpo en combio de su nodo padre,asi que ambos diálogos pueden ser renderizados correctamente.

```html
<template>
  <el-button type="text" @click="outerVisible = true">open the outer Dialog</el-button>
  
  <el-dialog title="Outter Dialog" :visible.sync="outerVisible">
    <el-dialog
        width="30%"
        title="Inner Dialog"
        :visible.sync="innerVisible"
        append-to-body>
    </el-dialog>
    <div slot="footer" class="dialog-footer">
      <el-button @click="outerVisible = false">Cancel</el-button>
      <el-button type="primary" @click="innerVisible = true">open the inner Dialog</el-button>
    </div>
  </el-dialog>
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

:::

### Centered content
Dialog's content can be centered.

:::demo Setting `center` to `true` will center dialog's header and footer horizontally.

```html
<el-button type="text" @click="centerDialogVisible = true">Click to open the Dialog</el-button>

<el-dialog
  title="Warning"
  :visible.sync="centerDialogVisible"
  width="30%"
  center>
  <span>It should be noted that the content will not be aligned in center by default</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">Confirm</el-button>
  </span>
</el-dialog>

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

:::propina
`center` afecta a cabezazos y pies de Diálogo.El cuerpo de Diálogo puede ser cualquier cosa,asi que a veces no puede verse bien cuando está centrado.Necesitas escribir algunos CSS si quieres centrar el cuerpo también.
:::

:::propina
Si el variable obligado a `visible` es manejado en el almacén Vuex,el `.sync` no puede funcionar correctamente.En este caso,quita el modificador `.sync` por favor,escucha a eventos `open` y `close` de Diálogo,y comete Vuex mutaciones para actualizar el valor de la variable en los controladores de eventos.

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
