<script>
  export default {
    data() {
      return {
        num1: 1,
        num2: 1,
        num3: 5,
        num4: 1,
        num5: 1,
        num6: 1,
        num7: 1,
        num8: 1,
        num9: 1
      }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>

<style>
  .demo-box.demo-input-number {
    .el-input-number + .el-input-number {
      margin-left: 10px;
    }
  }
</style>

## InputNumber

Input de  valores numéricos con un rango personalizable.

### Uso básico

:::demo Vincule una variable con `v-model` en el elemento <el-input-number> y estará listo.

```html
<template>
  <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num1: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  };
</script>
```
:::

### Disabled

:::demo El atributo `disabled` acepta un valor `boolean`, y si el valor es `true`, el componente queda deshabilitado. Si sólo necesita controlar el valor dentro de un rango, puede añadir un atributo `min` para establecer el valor mínimo y un valor `max` para establecer el valor máximo. Por defecto, el valor mínimo es `0`.

```html
<template>
  <el-input-number v-model="num2" :disabled="true"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num2: 1
      }
    }
  };
</script>
```
:::

### Steps

Le permite definir el nivel de incremento de los saltos.

:::demo Añada el atributo `step` para establecer el salto.

```html
<template>
  <el-input-number v-model="num3" :step="2"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num3: 5
      }
    }
  };
</script>
```
:::

### Precision

:::demo Add `precision` attribute to set the precision of input value.

```html
<template>
  <el-input-number v-model="num9" :precision="2" :step="0.1" :max="10"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num9: 1
      }
    }
  };
</script>
```

:::

:::tip
The value of `precision` must be a non negative integer and should not be less than the decimal places of `step`.
:::

### Tamaño

Utilice el atributo `size` para establecer tamaños adicionales con `medium`, `small` o `mini`.

:::demo

```html
<template>
  <el-input-number v-model="num4"></el-input-number>
    <el-input-number size="medium" v-model="num5"></el-input-number>
    <el-input-number size="small" v-model="num6"></el-input-number>
    <el-input-number size="mini" v-model="num7"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num4: 1,
        num5: 1,
        num6: 1,
        num7: 1
      }
    }
  };
</script>
```
:::

### Posición de los controles

:::demo Establezca `controls-position` para decidir la posición de los botones de control.

```html
<template>
  <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num8: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
```
:::

### Atributos

| Atributo          | Descripción                              | Tipo    | Valores aceptados | Por defecto |
| ----------------- | ---------------------------------------- | ------- | ----------------- | ----------- |
| value / v-model    | valor vinculado                          | number  | —                 | 0           |
| min               | el valor mínimo permitido                | number  | —                 | `-Infinity`  |
| max               | el valor maximo permitido                | number  | —                 | `Infinity`  |
| step              | incremento (salto)                       | number  | —                 | 1           |
| precision         | precisión del valor del input | number  | —                 | —           |
| size              | tamaño del componente                    | string  | large/small       | —           |
| disabled          | si el componente esta deshabilitado      | boolean | —                 | false       |
| controls          | si se activan los botones de control     | boolean | —                 | true        |
| controls-position | posición de los botones de control       | string  | right             | -           |
| name              | lo mismo que `name` en un input nativo   | string  | —                 | —           |
| label             | texto de la etiqueta                     | string  | —                 | —           |
| placeholder | placeholder in input | string | - | - |

### Eventos

| Nombre | Descripción                              | Parámetros         |
| ------ | ---------------------------------------- | ------------------ |
| change | se produce cuando el valor cambia        | value after change |
| blur   | se produce cuando el componente pierde el foco | (event: Event)     |
| focus  | se produce cuando el componente obtiene el foco | (event: Event)     |

### Métodos
| Método | Descripción                          | Parámetro |
| ------ | ------------------------------------ | --------- |
| focus  | coloca el foco en el elemento actual | -         |
| select | selecciona el contenido del input        | -          |

