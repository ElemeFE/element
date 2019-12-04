## Calificación

Usado para la calificación

### Uso básico

:::demo Clasificación divide las puntuaciones en tres niveles y estos niveles pueden distinguirse usando diferentes colores de fondo. Por defecto los colores de fondo son iguales, pero puedes asignarlos para reflejar los tres niveles usando el atributo `colors` y sus dos umbrales pueden ser definidos con `low-treshold` y `high-treshold`. O puede asignarlos con un objeto cuya clave es el umbral entre dos niveles y cuyo valor es el color correspondiente.


```html
<div class="block">
  <span class="demonstration">Default</span>
  <el-rate v-model="value1"></el-rate>
</div>
<div class="block">
  <span class="demonstration">Color for different levels</span>
  <el-rate
    v-model="value2"
    :colors="colors">
  </el-rate>
</div>

<script>
  export default {
    data() {
      return {
        value1: null,
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'] // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      }
    }
  }
</script>
```
:::

### Con texto

Usa texto para indicar la puntuación

:::demo Agregar el atributo `show-text` para mostrar texto a la derecha del componente. Puede asignar textos para las distintas puntuaciones usando `texts`. `texts` es un arreglo cuya longitud debe ser igual a la máxima puntuación `max`.

```html
<el-rate
  v-model="value"
  :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
  show-text>
</el-rate>

<script>
  export default {
    data() {
      return {
        value: null
      }
    }
  }
</script>
```
:::

### Más iconos

Puede utilizar iconos para diferenciar cada componente.

:::demo Puede personalizar los iconos pasando `icon-classes` un array con tres elementos o un objeto cuya clave es el umbral entre dos niveles y cuyo valor es la clase de icono correspondiente.  En este ejemplo también usamos `void-icon-class` para asignar un icono si no está seleccionado.

```html
<el-rate
  v-model="value"
  :icon-classes="iconClasses"
  void-icon-class="icon-rate-face-off"
  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
</el-rate>

<script>
  export default {
    data() {
      return {
        value: null,
        iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // same as { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
      }
    }
  }
</script>
```
:::

### Solo lectura

La calificación de solo lectura es para mostrar la puntuación. Soporta media estrella.

:::demo Use el atributo `disabled` para hacer el componente de solo lectura. Agregar `show-score` para mostrar la puntuación en el lado derecho. Además, puede usar el atributo `score-template` para proveer una plantilla. Tiene que contener `{value}`, y `{value}` será sustituido por la puntuación.

```html
<el-rate
  v-model="value"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value} points">
</el-rate>

<script>
  export default {
    data() {
      return {
        value: 3.7
      }
    }
  }
</script>
```
:::

### Atributos
| Atributo                 | Descripción                              | Tipo    | Valores aceptado | Por defecto                              |
| ------------------------ | ---------------------------------------- | ------- | ---------------- | ---------------------------------------- |
| value / v-model           | valor enlazado                           | number  | —                | 0                                        |
| max                      | puntuación máxima                        | number  | —                | 5                                        |
| disabled                 | si la calificación es de solo lectura    | boolean | —                | false                                    |
| allow-half               | si escoger media estrella está permitido | boolean | —                | false                                    |
| low-threshold            | valor del umbral entre nivel bajo y medio. El valor será incluido en el nivel bajo | number  | —                | 2                                        |
| high-threshold           | valor del umbral entre nivel bajo y medio. El valor será incluido en el nivel alto | number  | —                | 4                                        |
| colors                   | colores para los iconos. Si se trata de una matriz, debe tener 3 elementos, cada uno de los cuales corresponde a un nivel de puntuación, si se trata de un objeto, la clave debe ser el valor umbral entre dos niveles, y el valor debe ser el color correspondiente. | array/object   | —         | ['#F7BA2A', '#F7BA2A', '#F7BA2A']        |
| void-color               | color para iconos no seleccionados       | string  | —                | #C6D1DE                                  |
| disabled-void-color      | color para las iconos no seleccionados de solo lectura | string  | —                | #EFF2F7                                  |
| icon-classes             | nombres de clase de los iconos. Si es array, debe tener 3 elementos, cada uno de los cuales corresponde a un nivel de puntuación, en caso contrario, si es objeto, la clave debe ser el valor umbral entre dos niveles, y el valor debe ser la clase de icono correspondiente. | array/object   | —                | ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'] |
| void-icon-class          | nombre de clase para iconos no seleccionados | string  | —                | el-icon-star-off                         |
| disabled-void-icon-class | nombre de clase para elementos no seleccionados de solo lectura | string  | —                | el-icon-star-on                          |
| show-text                | muestra el texto                         | boolean | —                | false                                    |
| show-score               | muestra puntuación actual. `show-score` y `show-text` no pueden ser verdaderos al mismo tiempo | boolean | —                | false                                    |
| text-color               | color del texto                          | string  | —                | #1F2D3D                                  |
| texts                    | arreglo de textos                        | array   | —                | ['极差', '失望', '一般', '满意', '惊喜']           |
| score-template           | plantilla de puntuación                  | string  | —                | {value}                                  |

### Eventos
| Nombre del evento | Descripción                              | Parámetros             |
| ----------------- | ---------------------------------------- | ---------------------- |
| change            | Se dispara cuando la puntuación es cambiada | valor luego del cambio |
