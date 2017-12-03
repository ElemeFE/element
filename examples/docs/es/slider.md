<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42,
        value6: 0,
        value7: 0,
        value8: 0,
        value9: [4, 8],
        value10: 0
      };
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>

<style>
  .demo-box.demo-slider .source {
    padding: 0;
  }

  .demo-box.demo-slider .block {
    padding: 30px 24px;
    overflow: hidden;
    border-bottom: solid 1px #EFF2F6;
    &:last-child {
      border-bottom: none;
    }
  }

  .demo-box.demo-slider .demonstration {
    font-size: 14px;
    color: #8492a6;
    line-height: 44px;
  }

  .demo-box.demo-slider .demonstration + .el-slider {
    float: right;
    width: 70%;
    margin-right: 20px;
  }
</style>

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
      v-model="value6"
      :step="10">
    </el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Breakpoints displayed</span>
    <el-slider
      v-model="value7"
      :step="10"
      show-stops>
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value6: 0,
        value7: 0
      }
    }
  }
</script>
```
:::

### Slider con input

Inserte el valor a traves de un input

:::demo Configure el atributo `show-input` para que muestre un input a la derecha.

```html
<template>
  <div class="block">
    <el-slider
      v-model="value8"
      show-input>
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value8: 0
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
      v-model="value9"
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
        value9: [4, 8]
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
      v-model="value10"
      vertical
      height="200px">
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value10: 0
      }
    }
  }
</script>
```
:::

## Atributos
| Atributo            | Descripción                              | Tipo            | Valores aceptados | Por defecto |
| ------------------- | ---------------------------------------- | --------------- | ----------------- | ----------- |
| min                 | valor minimo                             | number          | —                 | 0           |
| max                 | valor máximo                             | number          | —                 | 100         |
| disabled            | si el Slider esta deshabitado            | boolean         | —                 | false       |
| step                | tamaño del paso                          | number          | —                 | 1           |
| show-input          | Si se muestra el input, trabaja cuando`range`es false | boolean         | —                 | false       |
| show-input-controls | si se muestran los botones de control cuando`show-input`es true | boolean         | —                 | true        |
| show-stops          | si se muestran los puntos de ruptura (breakpoints) | boolean         | —                 | false       |
| show-tooltip        | si se muestra el valor en un tooltip     | boolean         | —                 | true        |
| format-tooltip      | formato para mostrar el valor del tooltip | function(value) | —                 | —           |
| range               | si se usaran un rango                    | boolean         | —                 | false       |
| vertical            | modo vertical                            | boolean         | —                 | false       |
| height              | alto del Slider, requerido en modo vertical | string          | —                 | —           |
| label               | etiqueta para screen reader              | string          | —                 | —           |
| debounce            | retardo al escribir, en milisegundos, funciona cuando`show-input` es true. | number          | —                 | 300         |

## Eventos
| Nombre | Descripción                              | Parametros               |
| ------ | ---------------------------------------- | ------------------------ |
| change | se dispara cuando el valor cambia (si el ratón está comenzando el arrastre este evento sólo se disparara cuando se suelte el ratón) | valor despues del cambio |

