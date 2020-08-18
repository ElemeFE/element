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
      :picker-options="pickerOptions">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With default time</span>
    <el-date-picker
      v-model="value3"
      type="datetime"
      placeholder="Select date and time"
      default-time="12:00:00">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions: {
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
        value2: '',
        value3: ''
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
      v-model="value1"
      type="datetimerange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With shortcuts</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      :picker-options="pickerOptions"
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
        pickerOptions: {
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
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: ''
      };
    }
  };
</script>
```
:::

###  Valor de la hora por defecto para la fecha de inicio y la fecha final

:::demo Cuando se selecciona el rango de fechas en el panel con el tipo datetimerange, 00:00:00:00 se usará como el valor de tiempo predeterminado para la fecha de inicio y fin. Podemos controlarlo con el atributo default-time. default-time acepta una matriz de hasta dos cadenas. La primera posición controla el valor de tiempo de la fecha de inicio y la segunda el valor de tiempo de la fecha de fin.
```html
<template>
  <div class="block">
    <span class="demonstration">Start date time 12:00:00</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="['12:00:00']">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Start date time 12:00:00, end date time 08:00:00</span>
    <el-date-picker
      v-model="value2"
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
        value1: '',
        value2: ''
      };
    }
  };
</script>
```
:::

### Atributos
| Atributos          | Descripción                              | Tipo              | Valores aceptados                        | Por defecto          |
| ------------------ | ---------------------------------------- | ----------------- | ---------------------------------------- | -------------------- |
| value / v-model     | valor enlazado                           | date(DateTimePicker) / array(DateTimeRangePicker) | — | — |
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
| format             | formato de valor mostrado en el input    | string            | ver [date formats](#/es/component/date-picker#date-formats) | yyyy-MM-dd HH:mm:ss           |
| align              | alineación                               | left/center/right | left                                     |                      |
| popper-class       | nombre de clase personalizado para el Dropdown de DatePicker | string            | —                                        | —                    |
| picker-options     | opciones adicionales, Comprueba la tabla de mas abajo | object            | —                                        | {}                   |
| range-separator    | separador de rango                       | string            | -                                        | '-'                  |
| default-value      | opcional, fecha predeterminada del calendario | Fecha             | cualquier cosa aceptada por `new Date()` — |                      |
| default-time | el valor de tiempo por defecto después de elegir una fecha | non-range: string / range: string[] | non-range: Una cadena de texto como `12:00:00`, range: array de dos strings, el primero es para la fecha de inicio y el segundo para la fecha final. 00:00:00 se utilizará si no se especifica | — |
| value-format       | opcional, formato de valor de enlazado. Si no se especifica, el valor de enlazado será un objeto Date | cadena            | ver [date formats](#/es/component/date-picker#date-formats) | —                    |
| name               | igual que `name` en la entrada nativa    | string            | —                                        | —                    |
| unlink-panels      | desconectar dos date-panels en range-picker | boolean           | —                                        | false                |
| prefix-icon        | Clase personalizada para el icono prefijado | string            | —                                        | el-icon-date         |
| clear-icon         | Clase personalizada para el icono `clear` | string              | —                                        | el-icon-circle-close |
| validate-event     | si se debe disparar la validación | boolean             | -                                        | true                 |

### Picker Options
| Atributo       | Descripción                              | Tipo     | Valores aceptados | Por defecto |
| -------------- | ---------------------------------------- | -------- | ----------------- | ----------- |
| shortcuts      | un array de objetos { text, onClick } para establecer las opciones de acceso directo, verifique la tabla debajo | objeto[] | —                 | —           |
| disabledDate   | una función que determina si una fecha está desactivada con esa fecha como parámetro. Debería devolver un booleano | función  | —                 | —           |
| cellClassName | establecer nombre de clase personalizado | Function(Date) | — | — |
| firstDayOfWeek | primera día de semana                    | Número   | 1 to 7            | 7           |

### Accesos directos
| Atributo | Descripción                                                  | Tipo     | Valores aceptados | Por defecto |
| -------- | ------------------------------------------------------------ | -------- | ----------------- | ----------- |
| text     | título del acceso directo                                    | string   | —                 | —           |
| onClick  | la función se dispara cuando se hace clic en el acceso directo, con el `vm` como parámetro. Puede modificar el valor del picker emitiendo el evento`pick`. Ejemplo: `vm.$emit('pick', new Date())` | function | —                 | —           |

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
