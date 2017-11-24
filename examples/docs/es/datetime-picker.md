<script>
  module.exports = {
    data() {
      return {
        pickerOptions1: {
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        pickerOptions2: {
          shortcuts: [{
            text: 'Last week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: new Date(),
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
        value11: '',
        value12: '',
        value13: '',
        value14: '',
        value15: '',
        value16: ''
      };
    }
  };
</script>

<style>
.demo-block.demo-datetime-picker .source {
    padding: 0;
    display: flex;
  }

  .demo-datetime-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px #EFF2F6;
    flex: 1;
    &:last-child {
      border-right: none;
    }
  }

  .demo-datetime-picker .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>

## DateTimePicker

Seleccionar fecha y hora en un selector.

:::tip
DateTimePicker se deriva de DatePicker y TimePicker. Para una explicación más detallada sobre `pickerOptions` y otros atributos, puede referirse a DatePicker y TimePicker.

:::

###  Fecha y hora

:::demo Puede seleccionar la fecha y la hora en un selector al mismo tiempo configurando `type` y `datetime`. La forma de utilizar los accesos directos es la misma que Date Picker.

```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="Select date and time">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With shortcuts</span>
    <el-date-picker
      v-model="value2"
      type="datetime"
      placeholder="Select date and time"
      :picker-options="pickerOptions1">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions1: {
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: ''
      };
    }
  };
</script>
```
:::

### Rango de fecha y hora

:::demo Puede seleccionar el rango de fecha y hora ajustando `type` y `datetimerange`.

```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value3"
      type="datetimerange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With shortcuts</span>
    <el-date-picker
      v-model="value4"
      type="datetimerange"
      :picker-options="pickerOptions2"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      align="right">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: 'Last week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value4: ''
      };
    }
  };
</script>
```
:::

### Atributos
| Atributo           | Descripción                              | Tipo              | Valores aceptados                        | Por defecto |
| ------------------ | ---------------------------------------- | ----------------- | ---------------------------------------- | ----------- |
| readonly           | si DatePicker es solo de lectura         | boolean           | —                                        | false       |
| disabled           | si DatePicker esta deshabilitado         | boolean           | —                                        | false       |
| editable           | si el input es editable                  | boolean           | —                                        | true        |
| clearable          | si muestra el boton de limpieza          | boolean           | —                                        | true        |
| size               | tamaño del Input                         | string            | large/small/mini                         | —           |
| placeholder        | placeholder en el input cuando el modo NO es range | string            | —                                        | —           |
| start-placeholder  | placeholder para la fecha inicial en el modo range | string            | —                                        | —           |
| end-placeholder    | placeholder para la fecha final en el modo range | string            | —                                        | —           |
| time-arrow-control | si el selector de hora usa los botones de flecha | boolean           | —                                        | false       |
| type               | tipo de selector                         | string            | year/month/date/datetime/ week/datetimerange/daterange | date        |
| format             | formato del valor mostrado en el input   | string            | año `yyyy` mes `MM` día `dd`, hora `HH`, minuto `mm`, segundo `ss` | yyyy-MM-dd  |
| align              | alineación                               | left/center/right | left                                     |             |
| popper-class       | nombre de la clase personalizada para el dropdown de DateTimePicker | string            | —                                        | —           |
| picker-options     | opciones adicionales, verifique en la tabla inferior | object            | —                                        | {}          |
| range-separator    | separador de rango                       | string            | -                                        | '-'         |
| default-value      | opcional, valor por defecto del calendario | Date              | cualquiera aceptado por `new Date()`     | —           |
| value-format       | opcional, formato del valor enlazado. Si no se especifica el valor enlazado debe ser un objeto Date | string            | año `yyyy`, mes `MM`, dia `dd`, hora `HH`, minuto `mm`, segundo `ss` | —           |
| name               | lo mismo que `name` en un input nativo   | string            | —                                        | —           |
| unlink-panels      | desvincular los dos date-panels en el range-picker | boolean           | —                                        | false       |

### Opciones del selector
| Atributo       | Descripción                              | Tipo     | Valores aceptados | Por defecto |
| -------------- | ---------------------------------------- | -------- | ----------------- | ----------- |
| shortcuts      | { text, onClick } un array de objetos para establecer opciones de acceso directo, verifique la tabla siguiente | object[] | —                 | —           |
| disabledDate   | una función que determina si una fecha está desactivada con esa fecha como parámetro. Debería devolver un valor booleano | function | —                 | —           |
| firstDayOfWeek | Primer dia de la semana                  | Number   | 1 to 7            | 7           |

### Accesos directos
| Atributo | Descripción                              | Tipo     | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | -------- | ----------------- | ----------- |
| text     | título del acceso directo                | string   | —                 | —           |
| onClick  | una función se dispara al hacer clic en el acceso directo, con`vm`como parámetro. Puede modificar el valor del picker emitiendo el evento `pick`. Ejemplo: `vm.$emit('pick', new Date())` | function | —                 | —           |

### Eventos
| Nombre | Descripción                              | Parametros                |
| ------ | ---------------------------------------- | ------------------------- |
| change | se dispara cuando el usuario confirma el valor | component's binding value |
| blur   | se dispara cuando el input pierde el foco | (event: Event)            |
| focus  | se dispara cuando el input obtiene el foco | (event: Event)            |

### Metodos
| Metodo | Descripción                | Parametros |
| ------ | -------------------------- | ---------- |
| focus  | coloca el foco en el input | —          |
