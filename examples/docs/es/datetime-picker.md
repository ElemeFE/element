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
        value6: ''
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

Seleccionar fecha y tiempo juntos en un picker.

:::tip
DateTimePicker se deriva de DatePicker y TimePicker. Por una explicación más detallada sobre `pickerOptions` y otros atributos, puede referirse a DatePicker y TimePicker.
:::

###  Fecha y hora

:::demo Puede seleccionar la fecha y la hora en un picker al mismo tiempo configurando el tipo de fecha y la hora. La forma de utilizar los atajos es la misma que con Date Picker.


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

:::demo Puede seleccionar la fecha y el rango de tiempo ajustando `type` a `datetimerange`.

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

###  Default time value for start date and end date

:::demo When picking date range on the date panel with type `datetimerange`, `00:00:00` will be used as the default time value for start and end date. We can control it with the `default-time` attribute. `default-time` accepts an array of up to two strings. The first item controls time value of the start date and the second item controls time value of the end date.
```html
<template>
  <div class="block">
    <span class="demonstration">Start date time 12:00:00</span>
    <el-date-picker
      v-model="value5"
      type="datetimerange"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="['12:00:00']">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Start date time 12:00:00, end date time 08:00:00</span>
    <el-date-picker
      v-model="value6"
      type="datetimerange"
      align="right"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="['12:00:00', '08:00:00']">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value5: '',
        value6: ''
      };
    }
  };
</script>
```
:::

### Atributos
| Atributos          | Descripción                              | Tipo              | Valores aceptados                        | Por defecto          |
| ------------------ | ---------------------------------------- | ----------------- | ---------------------------------------- | -------------------- |
| readonly           | si DatePicker es solo de lectura         | boolean           | —                                        | false                |
| disabled           | si DatePicker esta deshabilitada         | boolean           | —                                        | false                |
| editable           | Si la entrada es editable                | boolean           | —                                        | true                 |
| clearable          | Si mostrar el botón de `clear`           | boolean           | —                                        | true                 |
| size               | tamaño del input                         | string            | large/small/mini                         | —                    |
| placeholder        | placeholder cuando el modo NO es Range   | string            | —                                        | —                    |
| start-placeholder  | placeholder para el inicio de fecha en el modo Range | string            | —                                        | —                    |
| end-placeholder    | placeholder para el fin de fecha en el modo Range | string            | —                                        | —                    |
| time-arrow-control | si se puede modificar el `time`  utilizando botones con flechas | boolean           | —                                        | false                |
| type               | tipo del picker                          | string            | year/month/date/datetime/ week/datetimerange/daterange | date                 |
| format             | formato de valor mostrado en el input    | string            | ver [date formats](#/es/component/date-picker#date-formats) | yyyy-MM-dd           |
| align              | alineación                               | left/center/right | left                                     |                      |
| popper-class       | nombre de clase personalizado para el Dropdown de DatePicker | string            | —                                        | —                    |
| picker-options     | opciones adicionales, Comprueba la tabla de mas abajo | object            | —                                        | {}                   |
| range-separator    | separador de rango                       | string            | -                                        | '-'                  |
| default-value      | opcional, fecha predeterminada del calendario | Fecha             | cualquier cosa aceptada por `new Date()` — |                      |
| default-time       | the time value to use when selecting date range | string[]          | Array with length 2, each item is a string like `12:00:00`. The first item for the start date and then second item for the end date | —                    |
| value-format       | opcional, formato de valor de enlazado. Si no se especifica, el valor de enlazado será un objeto Date | cadena            | ver [date formats](#/es/component/date-picker#date-formats) | —                    |
| name               | igual que `name` en la entrada nativa    | string            | —                                        | —                    |
| unlink-panels      | desconectar dos date-panels en range-picker | boolean           | —                                        | false                |
| prefix-icon        | Clase personalizada para el icono prefijado | string            | —                                        | el-icon-date         |
| clear-icon         | Clase personalizada para el icono `clear` | string            | —                                        | el-icon-circle-close |

### Picker Options
| Atributo       | Descripción                              | Tipo     | Valores aceptados | Por defecto |
| -------------- | ---------------------------------------- | -------- | ----------------- | ----------- |
| shortcuts      | un array de objetos { text, onClick } para establecer las opciones de acceso directo, verifique la tabla debajo | objeto[] | —                 | —           |
| disabledDate   | una función que determina si una fecha está desactivada con esa fecha como parámetro. Debería devolver un booleano | función  | —                 | —           |
| firstDayOfWeek | primera día de semana                    | Número   | 1 to 7            | 7           |

### Accesos directos
| Atributo | Descripción                              | Tipo     | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | -------- | ----------------- | ----------- |
| text     | título del acceso directo                | string   | —                 | —           |
| onClick  | la funcion se dispara cuando se hace clic en el acceso directo, con el `vm` como parámetro. Puede modificar el valor del picker emitiendo el evento`pick`. Ejemplo: `vm.$emit('pick', new Date())` | function | —                 | —           |

### Eventos
| Nombre de evento | Descripción                              | Parámetros                    |
| ---------------- | ---------------------------------------- | ----------------------------- |
| change           | Se dispara cuando el usuario confirma el valor | valor enlazado del componente |
| blur             | Se dispara cuando el input pierde el foco | instancia del componente      |
| focus            | Se dispara cuando el input obtiene el foco | instancia del componente      |

### Métodos
| Método | Descripción      | Parámetros |
| ------ | ---------------- | ---------- |
| focus  | foco en el input | —          |
