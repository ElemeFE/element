## Slider

Desliza el slider dentro de un rango fijo.

### Uso básico

El valor actual se muestra cuando se inicia el arrastre del slider.

:::demo Personalice el valor inicial del slider configurando el valor vinculado.

```html
<template>
  <div class="block">
    <span class="demonstration">Default value</span>
    <el-slider v-model="value1"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Customized initial value</span>
    <el-slider v-model="value2"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Hide Tooltip</span>
    <el-slider v-model="value3" :show-tooltip="false"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Format Tooltip</span>
    <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Disabled</span>
    <el-slider v-model="value5" disabled></el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>
```
:::

### Valores discretos

Las opciones pueden ser discretas.

:::demo Configure el tamaño del paso con el atributo `step`. Puede visualizar los puntos de ruptura configurando el atributo `show-stops`.

```html
<template>
  <div class="block">
    <span class="demonstration">Breakpoints not displayed</span>
    <el-slider
      v-model="value1"
      :step="10">
    </el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Breakpoints displayed</span>
    <el-slider
      v-model="value2"
      :step="10"
      show-stops>
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 0
      }
    }
  }
</script>
```
:::

### Slider con input

Inserte el valor a través de un input

:::demo Configure el atributo `show-input` para que muestre un input a la derecha.

```html
<template>
  <div class="block">
    <el-slider
      v-model="value"
      show-input>
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
</script>
```
:::

### Seleccion de rangos

Se soporta la selección de un rango de valores.

:::demo El ajuste del atributo `range` activa el modo range, donde el valor vinculado es un array compuesto por dos valores límite.

```html
<template>
  <div class="block">
    <el-slider
      v-model="value"
      range
      show-stops
      :max="10">
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: [4, 8]
      }
    }
  }
</script>
```
:::

### Modo Vertical

:::demo El ajuste del atributo `vertical` a `true` habilita el modo vertical. En el modo vertical, se requiere el atributo `height` .

```html
<template>
  <div class="block">
    <el-slider
      v-model="value"
      vertical
      height="200px">
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
</script>
```
:::

### Mostrar marcas

:::demo Use el atributo `marks`  para mostrar marcas en el slider.
```html
<template>
  <div class="block">
    <el-slider
      v-model="value"
      range
      :marks="marks">
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: [30, 60],
        marks: {
          0: '0°C',
          8: '8°C',
          37: '37°C',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '50%')
          }
        }
      }
    }
  }
</script>
```
:::

## Atributos
| Atributo            | Descripción                              | Tipo            | Valores aceptados | Por defecto |
| ------------------- | ---------------------------------------- | --------------- | ----------------- | ----------- |
| value / v-model      | valor enlazado                           | number          | —                 | 0           |
| min                 | valor mínimo                       | number          | —                 | 0           |
| max                 | valor máximo                             | number          | —                 | 100         |
| disabled            | si el Slider esta deshabitado            | boolean         | —                 | false       |
| step                | tamaño del paso                          | number          | —                 | 1           |
| show-input          | Si se muestra el input, trabaja cuando `range`es false | boolean         | —                 | false       |
| show-input-controls | si se muestran los botones de control cuando`show-input`es true | boolean         | —                 | true        |
| input-size          | tamaño del input   | string           | large / medium / small / mini | small |
| show-stops          | si se muestran los puntos de ruptura (breakpoints) | boolean         | —                 | false       |
| show-tooltip        | si se muestra el valor en un tooltip     | boolean         | —                 | true        |
| format-tooltip      | formato para mostrar el valor del tooltip | function(value) | —                 | —           |
| range               | si se usaran un rango                    | boolean         | —                 | false       |
| vertical            | modo vertical                            | boolean         | —                 | false       |
| height              | alto del Slider, requerido en modo vertical | string          | —                 | —           |
| label               | etiqueta para screen reader              | string          | —                 | —           |
| debounce            | retardo al escribir, en mili segundos, funciona cuando`show-input` es true. | number          | —                 | 300         |
| tooltip-class       | nombre personalizado de clase para el tooltip | string | — | — |
| marks | marcas, tipo de clave debe ser `number` y debe estar en intervalo cerrado [min, max], cada marca puede tener estilo personalizado | object | — | — |

## Eventos
| Nombre | Descripción                              | Parámetros     |
| ------ | ---------------------------------------- | ------------------------ |
| change | se dispara cuando el valor cambia (si el ratón está comenzando el arrastre este evento sólo se disparara cuando se suelte el ratón) | valor después del cambio |
| input | Se dispara cuando los datos cambian (funciona en tiempo real) | valor después del cambio |

