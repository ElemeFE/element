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

seleccionar fecha y tiempo juntos en una escoja.

:::tip
DateTimePicker se deriva de DatePicker y TimePicker. Por una explicación más detallada sobre `pickerOptions` y otros atributos,puedes referirse a DatePicker y TimePicker.
:::

###  Fecha y hora

:::demo Puedes seleccionar fecha y tiempo juntos en una escoja al mismo tiempo por establecer `type` a `datetime`.El método a utilizar atajos es mismo que Date Picker.


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

### Alcance de fecha y tiempo

:::demo Puedes seleccionar fecha y tiempo por establecer `type` a `datetimerange`.

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
| Atributos          | Descripción                              | Tipo              | Valores aceptados                        | Defecto    |
| ------------------ | ---------------------------------------- | ----------------- | ---------------------------------------- | ---------- |
| readonly           | cuando DatePicker es lectura sola        | boolean           | —                                        | false      |
| disabled           | cuando DatePicker es deshabilitada       | boolean           | —                                        | false      |
| editable           | Si la entrada es editable                | boolean           | —                                        | true       |
| clearable          | Si monstrar el botón de despejar         | boolean           | —                                        | true       |
| size               | tamaño de la entrada                     | string            | large/small/mini                         | —          |
| placeholder        | placeholder en la modalidad sin-rango    | string            | —                                        | —          |
| start-placeholder  | placeholder para el comienzo de fecha en la modalidad de alcance | string            | —                                        | —          |
| end-placeholder    | placeholder para el fin de fecha en la modalidad de alcance | string            | —                                        | —          |
| time-arrow-control | si se escoja tiempo utilizando botones de flecha | boolean           | —                                        | false      |
| type               | tipo de la escoja                        | string            | year/month/date/datetime/ week/datetimerange/daterange | date       |
| format             | formato de valor mostrado en la caja de entrada | string            | año `yyyy` mes `MM` día `dd`, hora `HH`, minuto `mm`, segundo `ss` | yyyy-MM-dd |
| alinear            | alineación                               | left/center/right | left                                     |            |
| popper-class       | nombre de clase clientela por dropdown de DatePicker | string            | —                                        | —          |
| picker-options     | opciones adicionales, comproba la tabla abaja | object            | —                                        | {}         |
| range-separator    | separador de alcance                     | string            | -                                        | '-'        |
| default-value      | fecha opcional y defectada del calendario | Fecha             | cualquier cosa aceptada por `new Date()` — |            |
| value-format       | opcional,formato de valor atado.Si no special, el valor atado sería ser un valor de fecha | cadena            | año `yyyy`, mes `MM`, día `dd`, hora `HH`, minuto `mm`, segundo `ss` | —          |
| name               | igual que `name` en la entrada nativa    | string            | —                                        | —          |
| unlink-panels      | desconectar dos fecha-paneles en alcance-escoja | boolean           | —                                        | false      |

### Picker Options
| Atributo       | Descripción                              | Tipo     | Valores aceptados | Default |
| -------------- | ---------------------------------------- | -------- | ----------------- | ------- |
| shortcuts      | un { text, onClick } objecto serie para establecer opciones atajos, comprobar la mesa abaja | objeto[] | —                 | —       |
| disabledDate   | una función determinar si la fecha es minusválida con la fecha como su parámetro.Debería devolver un booleano | función  | —                 | —       |
| firstDayOfWeek | primera día de semana                    | Número   | 1 to 7            | 7       |

### atajos
| Atributo | Descripción                              | Type     | Accepted Values | Default |
| -------- | ---------------------------------------- | -------- | --------------- | ------- |
| text     | title of the shortcut                    | string   | —               | —       |
| onClick  | función de llama de vuelta, gatillos cuando el atajo se hace clic, con el `vm` como su parámetro. Puedes cambiar el valor de escoja por emitir el evento `pick`. Ejemplo: `vm.$emit('pick', new Date())` | function | —               | —       |

### Eventos
| Nombre de evento | Descripción                              | Parámetros                |
| ---------------- | ---------------------------------------- | ------------------------- |
| change           | gatillos cuando usuario confirma el valor | valor atado de componente |
| blur             | gatillos cuando la entrada difumina      | (event: Event)            |
| focus            | gatillos cuando la entrada enfoca        | (event: Event)            |

### Métodos
| Método | Descripción                      | Parámetros |
| ------ | -------------------------------- | ---------- |
| focus  | enfoque la entrada de componente | —          |
