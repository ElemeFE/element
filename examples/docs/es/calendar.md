## Calendar

Muestra fechas.

### Básico

:::demo Configure el valor para especificar el mes que se muestra actualmente. Si no se especifica el valor, se muestra el mes actual. el valor soporta la vinculación bidireccional.
```html
<el-calendar v-model="value">
</el-calendar>

<script>
  export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>
```
:::

### Contenido personalizado

:::demo Personalice lo que se muestra en la celda del calendario configurando el `scoped-slot` llamada `dateCell`. En la ranura de alcance se puede obtener la fecha (la fecha de la celda actual), los datos (incluyendo el tipo, isSelected, el atributo day). Para obtener más información, consulte la documentación de la API a continuación.

```html
<el-calendar>
  <!-- Use 2.5 slot syntax. If you use Vue 2.6, please use new slot syntax-->
  <template
    slot="dateCell"
    slot-scope="{date, data}">
    <p :class="data.isSelected ? 'is-selected' : ''">
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
    </p>
  </template>
</el-calendar>
<style>
  .is-selected {
    color: #1989FA;
  }
</style>
```
:::

### Rango

:::demo Defina el atributo `range` para especificar el rango de visualización del calendario. El tiempo de inicio debe ser el lunes, el tiempo de finalización debe ser el domingo y el período no puede exceder los dos meses.
```html
<el-calendar :range="['2019-03-04', '2019-03-24']">
</el-calendar>
```
:::

### Atributos
| Atributo        | Descripción        | Tipo      | Valores aceptados     | Por defecto |
|-----------------|------------------- |---------- |---------------------- |------------ |
| value / v-model | valor vinculante   | Date/string/number | —            | —           |
| range           | rango de tiempo, incluyendo el tiempo de inicio y el tiempo final. Start time debe ser el primer dia de la semana, end time debe ser el ultimo día de la semana, el time entre las fechas no puede exceder dos meses | Array     | —           | —      |
| first-day-of-week | primer día de la semana | Number    | 1 to 7                |  1          |

### dateCell scoped slot
| Atributo      | Descripción | Tipo   | Valores aceptados | Por defecto |
|-----------------|-------------- |---------- |---------------------- |--------- |
| date            | fecha que la celda representa | Date      | —                     | —        |
| data            | { type, isSelected, day}. `type` indica el mes al que pertenece la fecha, los valores opcionales son mes anterior, mes actual, mes siguiente; `isSelected` indica si la fecha está seleccionada; `day` es la fecha formateada en el formato yyyy-MM-dd | Object      | —           | —      |

