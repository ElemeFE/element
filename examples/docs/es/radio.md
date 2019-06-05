## Radio
Selección única entre múltiples opciones.

### Uso básico
El elemento Radio no debe tener muchas opciones. De otra manera, utilice el componente Select.

:::demo Crear un elemento Radio es fácil, solo necesita enlazar(`bind`) una variable a la directiva `v-model` del Radio. Va a ser igual al valor `label` del Radio seleccionado. El tipo de dato de `label` es `String`, `Number` o `Boolean`.
```html
<template>
  <el-radio v-model="radio" label="1">Option A</el-radio>
  <el-radio v-model="radio" label="2">Option B</el-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```
:::

### Deshabilitado

El atributo `disabled` es utilizado para deshabilitar un Radio.

:::demo Solo necesita agregar el atributo `disabled`.
```html
<template>
  <el-radio disabled v-model="radio" label="disabled">Option A</el-radio>
  <el-radio disabled v-model="radio" label="selected and disabled">Option B</el-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: 'selected and disabled'
      };
    }
  }
</script>
```
:::

### Grupo de elementos Radio

Recomendado para seleccionar opciones que se excluyen mutuamente.

:::demo Combine `el-radio-group` con `el-radio` para mostrar un grupo de Radios. Enlace la variable con `v-model` del elemento `el-radio-group` y asigne el valor del `label` en `el-radio`. Se provee el evento `change` con el valor actual como parámetro.

```html
<el-radio-group v-model="radio">
  <el-radio :label="3">Option A</el-radio>
  <el-radio :label="6">Option B</el-radio>
  <el-radio :label="9">Option C</el-radio>
</el-radio-group>

<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>
```
:::

### Estilo Button

Radio con estilo de botón.

:::demo Solo necesita cambiar el elemento `el-radio` a `el-radio-button`. Se provee el atributo `size`.
```html
<template>
  <div>
    <el-radio-group v-model="radio1">
      <el-radio-button label="New York"></el-radio-button>
      <el-radio-button label="Washington"></el-radio-button>
      <el-radio-button label="Los Angeles"></el-radio-button>
      <el-radio-button label="Chicago"></el-radio-button>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio2" size="medium">
      <el-radio-button label="New York" ></el-radio-button>
      <el-radio-button label="Washington"></el-radio-button>
      <el-radio-button label="Los Angeles"></el-radio-button>
      <el-radio-button label="Chicago"></el-radio-button>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio3" size="small">
      <el-radio-button label="New York"></el-radio-button>
      <el-radio-button label="Washington" disabled ></el-radio-button>
      <el-radio-button label="Los Angeles"></el-radio-button>
      <el-radio-button label="Chicago"></el-radio-button>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio4" disabled size="mini">
      <el-radio-button label="New York"></el-radio-button>
      <el-radio-button label="Washington"></el-radio-button>
      <el-radio-button label="Los Angeles"></el-radio-button>
      <el-radio-button label="Chicago"></el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: 'New York',
        radio2: 'New York',
        radio3: 'New York',
        radio4: 'New York'
      };
    }
  }
</script>
```
:::

### Con bordes

:::demo El atributo `border` agrega un borde al elemento Radio.
```html
<template>
  <div>
    <el-radio v-model="radio1" label="1" border>Option A</el-radio>
    <el-radio v-model="radio1" label="2" border>Option B</el-radio>
  </div>
  <div style="margin-top: 20px">
    <el-radio v-model="radio2" label="1" border size="medium">Option A</el-radio>
    <el-radio v-model="radio2" label="2" border size="medium">Option B</el-radio>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio3" size="small">
      <el-radio label="1" border>Option A</el-radio>
      <el-radio label="2" border disabled>Option B</el-radio>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio4" size="mini" disabled>
      <el-radio label="1" border>Option A</el-radio>
      <el-radio label="2" border>Option B</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1'
      };
    }
  }
</script>
```
:::

### Atributos de Radio

| Atributo | Descripción                              | Tipo                      | Valores Aceptado      | Por defecto |
| -------- | ---------------------------------------- | ------------------------- | --------------------- | ----------- |
| value / v-model | valor enlazado | string / number / boolean | — | — |
| label    | el valor del Radio                       | string / number / boolean | —                     | —           |
| disabled | si el Radio está deshabilitado           | boolean                   | —                     | false       |
| border   | agregar borde alrededor del elemento Radio | boolean                   | —                     | false       |
| size     | tamaño del elemento Radio, solo funciona si `border` es verdadero | string                    | medium / small / mini | —           |
| name     | atributo nativo `name`                 | string                    | —                     | —           |

### Atributos de Radio-button

| Atributo | Descripción                    | Tipo            | Valores Aceptado | Por defecto |
| -------- | ------------------------------ | --------------- | ---------------- | ----------- |
| label    | el valor del Radio             | string / number | —                | —           |
| disabled | si el Radio está deshabilitado | boolean         | —                | false       |
| name     | atributo nativo `name`         | string          | —                | —           |

### Atributos de Radio-group

| Atributo   | Descripción                              | Tipo    | Valores Aceptado      | Valores por defecto |
| ---------- | ---------------------------------------- | ------- | --------------------- | ------------------- |
| value / v-model | valor enlazado | string / number / boolean | — | — |
| size       | tamaño de los `radio buttons` o `bordered radios` | string  | medium / small / mini | —                   |
| disabled   | si la anidación de radios está deshabilitada | boolean | —                     | false               |
| text-color | color de las letras cuando el botón está activo | string  | —                     | #ffffff             |
| fill       | color del borde y fondo cuando el botón está activo | string  | —                     | #409EFF             |

### Eventos de Radio 

| Nombre de evento | Descripción                       | Parámetros                               |
| ---------------- | --------------------------------- | ---------------------------------------- |
| change           | se dispara cuando el valor cambia | el valor del `label` del Radio seleccionado |


### Eventos de Radio-group 

| Nombre de evento | Descripción                       | Parámetros                               |
| ---------------- | --------------------------------- | ---------------------------------------- |
| change           | se dispara cuando el valor cambia | el valor del `label` del Radio seleccionado |

