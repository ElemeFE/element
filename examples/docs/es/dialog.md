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

## Dialog

Informa a los usuarios preservando el estado actual de la página.

### Uso básico

Muestra un cuadro de diálogo y es bastante personalizable.

:::demo Establezca el atributo `visible` con un `Boolean`, y el diálogo se muestra cuando sea `true`. El Diálogo tiene dos partes: `body` y `footer`, y este último requiere un `slot` llamado `footer`. El atributo opcional `title` (vacío por defecto) sirve para definir un título. Por último, este ejemplo muestra cómo se utiliza `before-close`.

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

:::tip

`before-close` sólo funciona cuando el usuario hace click en el icono de cerrar o en el fondo. Si tiene botones que cierran el cuadro de diálogo en el slot  `footer`, puede agregar `before-close`  en el manejador de eventos de los botones.

:::

### Personalizaciones

El contenido del Diálogo puede ser cualquier cosa, incluso una tabla o un formulario. Este ejemplo muestra cómo usar Element Table and Form con Dialog.

:::demo

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

### Dialogos anidados
Si un diálogo está anidado en otro, se requiere `append-to-body`.

:::demo Normalmente no recomendamos el uso de Diálogos anidados. Si necesita que se muestren múltiples diálogos en la página, puede simplemente aplanarlos para que sean hermanos entre sí. Si debe anidar un Diálogo dentro de otro Diálogo, establezca `append-to-body` del Diálogo anidado como true, y lo añadirá al cuerpo de su nodo padre, para que ambos Diálogos puedan ser correctamente renderizados.

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

### Contenido centrado
El contenido de los dialogos puede estar centrado.

:::demo La configuración de `center` a `true` centrará el encabezado y pie de página del diálogo horizontalmente.

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

:::tip

`center` sólo afecta al encabezado y pie de página del Dialog. El cuerpo del Dialog puede ser cualquier cosa, así que a veces no se ve bien cuando está centrado. Se necesita escribir algún CSS si se desea centrar el cuerpo también.

:::

:::tip

Si la variable ligada a `visible` se gestiona en Vuex store, el `.sync` no puede funcionar correctamente. En este caso, elimine el modificador `.sync`, escuche para los eventos `open` and `close` de Dialog, y confirme las mutaciones Vuex para actualizar el valor de esa variable en los manejadores de eventos.

:::

### Atributos

| Atributo              | Descripción                              | Tipo                                     | Valores aceptados | Por defecto |
| --------------------- | ---------------------------------------- | ---------------------------------------- | ----------------- | ----------- |
| visible               | visibilidad del Dialogo, soporta el modificador .sync | boolean                                  | —                 | false       |
| title                 | titulo del Dialogo.  También se puede pasar con un slot con nombre (ver la siguiente tabla) | string                                   | —                 | —           |
| width                 | ancho del Dialogo                        | string                                   | —                 | 50%         |
| fullscreen            | si el Dialogo acepta full screen         | boolean                                  | —                 | false       |
| top                   | valor para `margin-top` CSS del Dialogo  | string                                   | —                 | 15vh        |
| modal                 | si es tipo modal                         | boolean                                  | —                 | true        |
| modal-append-to-body  | si agregar el modal al cuerpo. Si es false, el modal se añadirá al elemento padre de Dialogowhether to append modal to body element. If false, the modal will be appended to Dialog's parent element | boolean                                  | —                 | true        |
| append-to-body        | si añadir el Dialogo al cuerpo. Un Dialogo anidado debe tener este atributo configurado como true | boolean                                  | —                 | false       |
| lock-scroll           | si el scroll está desactivado mientras se visualiza el diálogo | boolean                                  | —                 | true        |
| custom-class          | nombre de clase personalizado para el Dialogo | string                                   | —                 | —           |
| close-on-click-modal  | si el Dialogo puede ser cerrado haciendo click fuera de el | boolean                                  | —                 | true        |
| close-on-press-escape | si el Dialogo puede ser cerrado pulsando ESC | boolean                                  | —                 | true        |
| show-close            | si se muestra el boton de cerrar         | boolean                                  | —                 | true        |
| before-close          | funcion  antes de que el Diálogo se cierre, y esto impedirá que se cierre | function(done)，done is used to close the Dialog | —                 | —           |
| center                | si la cabecera y el pie deben estar centrados | boolean                                  | —                 | false       |

### Slot

| Nombre | Descripción                      |
| ------ | -------------------------------- |
| —      | contenido del Dialogo            |
| title  | contenido del titulo del Dialogo |
| footer | contenido del pie del Dialogo    |

### Eventos
| Nombre | Descripción                            | Parametros |
| ------ | -------------------------------------- | ---------- |
| open   | se dispara cuando el dialogo se abre   | —          |
| close  | se dispara cuando el dialogo se cierra | —          |
