## InputNumber

Input de  valores numéricos con un rango personalizable.

### Uso básico

:::demo Vincule una variable con `v-model` en el elemento `<el-input-number>` y estará listo.

```html
<template>
  <el-input-number v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
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
  <el-input-number v-model="num" :disabled="true"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
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
  <el-input-number v-model="num" :step="2"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 5
      }
    }
  };
</script>
```
:::

### Step estrictamente

:::demo El atributo `step-strictly` acepta `boolean`. Si este atributo es `true`, el valor de entrada sólo puede ser múltiplo de step.

```html
<template>
  <el-input-number v-model="num" :step="2" step-strictly></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 2
      }
    }
  };
</script>
```
:::

### Precisión

:::demo El atributo `precision` aplica presición al valor del value.

```html
<template>
  <el-input-number v-model="num" :precision="2" :step="0.1" :max="10"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      }
    }
  };
</script>
```

:::

:::tip
El valor de `precision` debe ser un numero entero positivo que no debe ser inferior a los decimales del `step`.

:::

### Tamaño

Utilice el atributo `size` para establecer tamaños adicionales con `medium`, `small` o `mini`.

:::demo

```html
<template>
  <el-input-number v-model="num1"></el-input-number>
    <el-input-number size="medium" v-model="num2"></el-input-number>
    <el-input-number size="small" v-model="num3"></el-input-number>
    <el-input-number size="mini" v-model="num4"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num1: 1,
        num2: 1,
        num3: 1,
        num4: 1
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
  <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
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
| max               | el valor máximo permitido          | number  | —                 | `Infinity`  |
| step              | incremento (salto)                       | number  | —                 | 1           |
| step-strictly  | si el valor del input puede ser solo un múltiplo de step | boolean  | —                 | false       |
| precision         | precisión del valor del input | number  | —                 | —           |
| size              | tamaño del componente                    | string  | large/small       | —           |
| disabled          | si el componente esta deshabilitado      | boolean | —                 | false       |
| controls          | si se activan los botones de control     | boolean | —                 | true        |
| controls-position | posición de los botones de control       | string  | right             | -           |
| name              | lo mismo que `name` en un input nativo   | string  | —                 | —           |
| label             | texto de la etiqueta                     | string  | —                 | —           |
| placeholder | placeholder en el input | string | - | - |

### Eventos

| Nombre | Descripción                              | Parámetros         |
| ------ | ---------------------------------------- | ------------------ |
| change | se produce cuando el valor cambia        | currentValue, oldValue |
| blur   | se produce cuando el componente pierde el foco | (event: Event)     |
| focus  | se produce cuando el componente obtiene el foco | (event: Event)     |

### Métodos
| Método | Descripción                          | Parámetro |
| ------ | ------------------------------------ | --------- |
| focus  | coloca el foco en el elemento actual | -         |
| select | selecciona el contenido del input        | -          |

