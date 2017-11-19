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
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
        value11: ''
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
Utiliza Date Picker para introducir fecha.

###  Entrar fecha

Selector de fecha básico limitado por día.

:::manifestación Ésta medición es decidido por el atributo 'type'.Puedes permitir rápidas opcíones por crear un `picker-options` objecto con propiedad `shortcuts`.La fecha minusválida es establecido por 
la función `disabledDate`.


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

### Otras medidas
Puedes escoger semana,mes o año por ampliar el estándar fecha recogedor componente.


:::manifestación

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

###  el alcance de fecha

escoger un alcance de fecha es apoyado.

:::manifestación cuando en la modalidad de fecha,los paneles izquierdos y derechoes son enlazados por defecto.Si queres los dos paneles combiar meses corrientes independientemente,puedes utilizar el atributo `unlink-panels`.

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

###  Valor defecto

Si el usuario no se recoge una fecha,monstra la fecha de hoy por defecto. Puedes utilizar `default-value` a establecer otra fecha. Su valor deber ser parseable por `new Date()`.

Si el tipo es `daterange`,`default-value` establece el calendario del lado derecho.

:::manifestación
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

###  Valor  Formateado

Por defecto,DatePicker emite el objecto `Date`. Puedes utilizar `value-format` a designar el formato del valor emitido,acepta cadena del formato mismo del atributo `format`.


:::warning
escenario
Ésta característica es en alfa escenario.Bienvenivo a enviar realimentación.
:::

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
    <span class="demonstration">Emits formatted date</span>
    <div class="demonstration">Value: {{ value11 }}</div>
    <el-date-picker
      v-model="value11"
      type="date"
      placeholder="Pick a Date"
      format="yyyy/MM/dd"
      value-format="yyyy-MM-dd">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value10: '',
        value11: '',
      };
    }
  };
</script>
```
:::

### Atributos 
| Atributos      | Descripción          | Tipo      | Valores aceptados       | Valor por defecto   |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| readonly | Si la escoja de fecha es lectura sola | boolean | — | false |
| disabled | Si la escoja de fecha es deshabilitada| boolean | — | false |
| size | tamaño de la entrada | string | large/small/mini | — |
| editable | Si la entrada es editable | boolean | — | true |
| clearable | Si monstrar el botón de despejar  | boolean | — | true |
| placeholder | placeholder en la modalidad sin-rango | string | — | — |
| start-placeholder | placeholder para el comienzo de fecha en la modalidad de alcance  | string | — | — |
| end-placeholder | placeholder para el fin de fecha en la modalidad de alcance | string | — | — |
| type | tipo de la escoja | string | año/mes/fecha/fecha y hora/semana/rango de fecha y hora /rango de fecha | fecha |
| formato | formato del valor desplegado en la caja de entrada | cadena | año `yyyy`, mes `MM`, día `dd`, hora `HH`, minuto `mm`, segundo `ss` | yyyy-MM-dd |
| alinear
 | alineación | izquierda/centro/derecho | izquierda |
| popper-class | nombre de clase clientela por dropdown de DatePicker| cadena | — | — |
| picker-options | opciones adicionales, comproba la tabla abaja | objeto | — | {} |
| range-separator |separador de alcance | cadena | — | '-' |
| default-value | fecha opcional y defectada del calendario| Fecha | cualquier cosa aceptada por `new Date()` | — |
| value-format | opcional,formato de valor atado.Si no special, el valor atado sería ser un valor de fecha | cadena | año `yyyy`, mes `MM`, día `dd`, hora `HH`, minuto `mm`, segundo `ss` | — |
| name | igual que `name` en la entrada nativa | cadena | — | — |
| unlink-panels | desconectar dos fecha-paneles en alcance-escoja | boolean | — | falso |

### Picker Options
| Atributo      | Descripción          | Tipo      | Valores aceptados       | Defecto  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| shortcuts | un { text, onClick } objecto serie para establecer opciones atajos, comprobar la mesa abaja | objeto[] | — | — |
| disabledDate | una función determinar si la fecha es minusválida con la fecha como su parámetro.Debería devolver un booleano| función | — | — |
| firstDayOfWeek | primera día de semana | Number | 1 to 7 | 7 |
| onPick | una llama de vuelta cuando la fecha escogida está cambiada. Solamente por `daterange` y `datetimerange`. | Function({ fecha, minDate }) | - | - |

### shortcuts
| Atributo      | Descripción          | Tipo      | Valores aceptados       | Defecto  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| text | título del atajo | cadena | — | — |
| onClick | función de llama de vuelta, gatillos cuando el atajo se hace clic, con el `vm` como su parámetro. Puedes cambiar el valor de escoja por emitir el evento `pick`. Ejemplo: `vm.$emit('pick', new Date())`| function | — | — |


### Eventos
| Nombre de evento | Descripción | Parámetros |
|---------|--------|---------|
| change | gatillos cuando usuario confirma el valor | valor atado de componente |
| blur | gatillos cuando la entrada difumina | (event: Event) |
| focus | gatillos cuando la entrada enfoca | (event: Event) |

### Métodos
| Método | Descripción | Parámetros |
|------|--------|-------|
| focus | enfoque la entrada de componente | — |
