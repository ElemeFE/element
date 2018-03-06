<script>
  module.exports = {
    data() {
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
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
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
        value11: '',
        value12: '',
        value13: []
      };
    }
  };
</script>

<style>
  .demo-block.demo-date-picker .source {
    padding: 0;
    display: flex;
  }

  .demo-date-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px #EFF2F6;
    flex: 1;
    &:last-child {
      border-right: none;
    }
  }

  .demo-date-picker .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>

## DatePicker

Utilice Date Picker para introducir la fecha.

###  Ingresar Fecha

Date Picker básico por "día".

:::demo La medida está determinada por el atributo `type` . Puede habilitar las opciones rápidas creando un objeto `picker-options` con la propiedad `shortcuts`. La fecha desactivada se ajusta mediante `disabledDate`, que es una función.


```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a day">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Picker with quick options</span>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="Pick a day"
      :picker-options="pickerOptions1">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
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
      };
    }
  };
</script>
```

:::

### Otras mediciones

Puede seleccionar la semana, el mes o el año extendiendo el componente date picker estándar.

:::demo

```html
<div class="block">
  <span class="demonstration">Week</span>
  <el-date-picker
    v-model="value3"
    type="week"
    format="Week WW"
    placeholder="Pick a week">
  </el-date-picker>
</div>
<div class="block">
  <span class="demonstration">Month</span>
  <el-date-picker
    v-model="value4"
    type="month"
    placeholder="Pick a month">
  </el-date-picker>
</div>
<div class="block">
  <span class="demonstration">Year</span>
  <el-date-picker
    v-model="value5"
    type="year"
    placeholder="Pick a year">
  </el-date-picker>
</div>

<script>
  export default {
    data() {
      return {
        value3: '',
        value4: '',
        value5: ''
      };
    }
  };
</script>
```

:::

###  Rango de fechas

Se soporta la selección de un rango de fechas.

:::demo En modo de rango, los paneles izquierdo y derecho están vinculados por defecto. Si desea que los dos paneles cambien los meses actuales de forma independiente, puede utilizar el atributo `unlink-panels`.

```html
<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value6"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With quick options</span>
    <el-date-picker
      v-model="value7"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      :picker-options="pickerOptions2">
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
        value6: '',
        value7: ''
      };
    }
  };
</script>
```

:::

###  Valor por defecto

Si el usuario no ha escogido una fecha, muestra el calendario de hoy por defecto. Puede utilizar `default-value` para fijar otra fecha. Su valor debe ser definido por `new Date()`.

Si el tipo es `daterange`, `default-value` establece el calendario del lado izquierdo.

:::demo
```html
<template>
  <div class="block">
    <span class="demonstration">date</span>
    <el-date-picker
      v-model="value8"
      type="date"
      placeholder="Pick a date"
      default-value="2010-10-01">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">daterange</span>
    <el-date-picker
      v-model="value9"
      type="daterange"
      align="right"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      default-value="2010-10-01">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value8: '',
        value9: ''
      };
    }
  };
</script>
```
:::

###  Formatos de Date
Utilice `format` para controlar el formato del texto visualizado en el input. Utilice `value-format` para controlar el formato del valor vinculado.

Por defecto, el componente acepta y emite un objeto Date. A continuación se soportan cadenas de formato, usando UTC 2017-01-02 03:04:05 como ejemplo:

:::warning
Preste atención a la capitalización
:::

| formato     | significado  | nota                                     | ejemplo       |
| ----------- | ------------ | ---------------------------------------- | ------------- |
| `yyyy`      | año          |                                          | 2017          |
| `M`         | mes          | no acepta 0                              | 1             |
| `MM`        | mes          |                                          | 01            |
| `W`         | semana       | solamente para semanas en picker's `format`; no acepta 0 | 1             |
| `WW`        | semana       | solamente para semanas en  picker's `format` | 01            |
| `d`         | dia          | no acepta 0                              | 2             |
| `dd`        | dia          |                                          | 02            |
| `H`         | hora         | 24-hora reloj; no acepta 0               | 3             |
| `HH`        | hora         | 24-hora reloj                            | 03            |
| `h`         | hora         | 12-hora reloj;  debe usarse con `A` o `a`; no acepta 0 | 3             |
| `hh`        | hour         | 12-hora reloj;  debe usarse con `A` o `a` | 03            |
| `m`         | minuto       | no acepta 0                              | 4             |
| `mm`        | minuto       |                                          | 04            |
| `s`         | segundo      | no acepta 0                              | 5             |
| `ss`        | segundo      |                                          | 05            |
| `A`         | AM/PM        | solamente para `format`, mayusculas      | AM            |
| `a`         | am/pm        | solamente para `format`, minúsculas      | am            |
| `timestamp` | JS timestamp | solamente para `value-format`; valor vinculado debe ser un `number` | 1483326245000 |

:::demo
```html
<template>
  <div class="block">
    <span class="demonstration">Emits Date object</span>
    <div class="demonstration">Value: {{ value10 }}</div>
    <el-date-picker
      v-model="value10"
      type="date"
      placeholder="Pick a Date"
      format="yyyy/MM/dd">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Use value-format</span>
    <div class="demonstration">Value: {{ value11 }}</div>
    <el-date-picker
      v-model="value11"
      type="date"
      placeholder="Pick a Date"
      format="yyyy/MM/dd"
      value-format="yyyy-MM-dd">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Timestamp</span>
    <div class="demonstration">Value：{{ value12 }}</div>
    <el-date-picker
      v-model="value12"
      type="date"
      placeholder="Pick a Date"
      format="yyyy/MM/dd"
      value-format="timestamp">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value10: '',
        value11: '',
        value12: ''
      };
    }
  };
</script>
```
:::

###  Hora por defecto para comienzo y fin de fecha

Al seleccionar un intervalo de fechas, puede asignar la hora para la fecha de inicio y la fecha final.

:::demo Por defecto, la hora de la fecha de inicio y final es `00:00:00`. Configurar `default-time`  puede cambiar la hora respectivamente. Acepta un array de hasta dos cadenas con el formato  `12:00:00`. La primera cadena fija la hora para la fecha de inicio y la segunda para la fecha final.

```html
<template>
  <div class="block">
    <p>Component value：{{ value12 }}</p>
    <el-date-picker
      v-model="value12"
      type="daterange"
      start-placeholder="Start date"
      end-placeholder="End date"
      :default-time="['00:00:00', '23:59:59']">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value12: []
      };
    }
  };
</script>
```
:::

### Atributos
| Atributo          | Descripción                              | Tipo              | Valores aceptados                        | Por defecto          |
| ----------------- | ---------------------------------------- | ----------------- | ---------------------------------------- | -------------------- |
| readonly          | si DatePicker es solo de lectura         | boolean           | —                                        | false                |
| disabled          | si DatePicker esta deshabilitado         | boolean           | —                                        | false                |
| size              | tamaño del input                         | string            | large/small/mini                         | —                    |
| editable          | si el input es editable                  | boolean           | —                                        | true                 |
| clearable         | si se muestra el boton de borrado        | boolean           | —                                        | true                 |
| placeholder       | placeholder cuando el modo NO es rango   | string            | —                                        | —                    |
| start-placeholder | placeholder para la fecha de inicio en modo rango | string            | —                                        | —                    |
| end-placeholder   | placeholder para la fecha final en modo rango | string            | —                                        | —                    |
| type              | tipo de picker                           | string            | year/month/date/datetime/ week/datetimerange/daterange | date                 |
| format            | formato en que se muestra el valor en el input | string            | ver [date formats](#/es/component/date-picker#date-formats) | yyyy-MM-dd           |
| align             | alineación                               | left/center/right | left                                     |                      |
| popper-class      | nombre de clase personalizada para el dropdown de DatePicker | string            | —                                        | —                    |
| picker-options    | opciones adicionales, chequee la tabla debajo | object            | —                                        | {}                   |
| range-separator   | separador de rangos                      | string            | —                                        | '-'                  |
| default-value     | opcional, valor por defecto para el calendario | Date              | cualquiera aceptado por `new Date()`     | —                    |
| default-time      | opcional, los valores para las horas que se deben usar en la seleccion de fechas cuando se usa el modo rango | string[]          | Array de dos valores, cada uno es un string del estilo `12:00:00`. El primer elemento es para la fecha de inicio y el segundo es para la fecha final. | —                    |
| value-format      | opcional, formato del valor enlazado. Si no esta especificado, el valor enlazado será un objeto Date. | string            | ver [date formats](#/es/component/date-picker#date-formats) | —                    |
| name              | igual que `name` en el input nativo      | string            | —                                        | —                    |
| unlink-panels     | desvincular los dos paneles de fecha en el range-picker | boolean           | —                                        | false                |
| prefix-icon       | Clase personalizada para el icono prefijado | string            | —                                        | el-icon-date         |
| clear-icon        | Clase personalizada para el icono `clear` | string            | —                                        | el-icon-circle-close |

### Opciones del Picker
| Atributo       | Descripción                              | Tipo                           | Valores aceptados | Por defecto |
| -------------- | ---------------------------------------- | ------------------------------ | ----------------- | ----------- |
| shortcuts      | { text, onClick } un array de objetos para establecer opciones de acceso directo, verifique la tabla siguiente | object[]                       | —                 | —           |
| disabledDate   | una función que determina si una fecha está desactivada con esa fecha como parámetro. Debería devolver un valor booleano | function                       | —                 | —           |
| firstDayOfWeek | primer dia de la semana                  | Number                         | 1 to 7            | 7           |
| onPick         | una función que se dispara cuando se cambia la fecha seleccionada. Solamente para `daterange` y `datetimerange`. | Function({ maxDate, minDate }) | -                 | -           |

### Accesso directo
| Atributo | Descripción                              | Tipo     | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | -------- | ----------------- | ----------- |
| text     | título del acceso directo                | string   | —                 | —           |
| onClick  | una función se dispara al hacer clic en el acceso directo, con`vm`como parámetro. Puede modificar el valor del picker emitiendo el evento `pick`. Ejemplo: `vm.$emit('pick', new Date())` | function | —                 | —           |


### Eventos
| Nombre | Descripción                              | Parametros                   |
| ------ | ---------------------------------------- | ---------------------------- |
| change | se dispara cuando el usuario confirma el valor | valor enlazado al componente |
| blur   | se dispara cuando el input pierde el foco | instancia del componente     |
| focus  | se dispara cuando el input obtiene el foco | instancia del componente     |

### Metodos
| Metodo | Descripción                | Parameteros |
| ------ | -------------------------- | ----------- |
| focus  | coloca el foco en el input | —           |

