<style>
  .demo-box.demo-switch {
    .el-switch {
      margin: 20px 20px 20px 0;
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true,
        value3: true,
        value4: true,
        value5: '100',
        value6: true,
        value7: false
      }
    }
  };
</script>

## Switch

Switch es utilizdo para realizar cambios entre dos estados opuestos.

### Uso básico

:::demo Enlace `v-model` a una variable de tipo `Boolean`. Los atributos `active-color` y `inactive-color` deciden el color de fondo en cada estado.

```html
<el-switch v-model="value1">
</el-switch>
<el-switch
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
</script>
```
:::

### Texto de descripción
:::demo Puede agregar los atributos `active-text` y `inactive-text` para mostrar los textos.

```html
<el-switch
  v-model="value3"
  active-text="Pay by month"
  inactive-text="Pay by year">
</el-switch>
<el-switch
  style="display: block"
  v-model="value4"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="Pay by month"
  inactive-text="Pay by year">
</el-switch>

<script>
  export default {
    data() {
      return {
        value3: true,
        value4: true
      }
    }
  };
</script>
```
:::

### Tipos de valores extendidos

:::demo Puede establecer los atributos `active-value` y `inactive-value`. Ambos reciben valores de tipo `Boolean`, `String` o `Number`.

```html
<el-tooltip :content="'Switch value: ' + value5" placement="top">
  <el-switch
    v-model="value5"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-value="100"
    inactive-value="0">
  </el-switch>
</el-tooltip>

<script>
  export default {
    data() {
      return {
        value5: '100'
      }
    }
  };
</script>
```

:::

### Disabled

:::demo Agregar el atributo `disabled` desactiva el componente Switch.

```html
<el-switch
  v-model="value6"
  disabled>
</el-switch>
<el-switch
  v-model="value7"
  disabled>
</el-switch>

<script>
  export default {
    data() {
      return {
        value6: true,
        value7: false
      }
    }
  };
</script>
```
:::

### Atributos

| Atributo            | Descripción                              | Tipo                      | Valores aceptados | Por defecto |
| ------------------- | ---------------------------------------- | ------------------------- | ----------------- | ----------- |
| disabled            | si Switch esta deshabilitado             | boolean                   | —                 | false       |
| width               | ancho del componente Switch              | number                    | —                 | 40          |
| active-icon-class   | nombre de la clase del icono mostrado en el estado `on`, sobreescribe `active-text` | string                    | —                 | —           |
| inactive-icon-class | nombre de la clase del icono mostrado en el estado `off`, sobreescribe `inactive-text` | string                    | —                 | —           |
| active-text         | texto mostrado en el estado `on`         | string                    | —                 | —           |
| inactive-text       | texto mostrado en el estado `off`        | string                    | —                 | —           |
| active-value        | cambia su valor cuando se encuentra en el estado `on` | boolean / string / number | —                 | true        |
| inactive-value      | cambia su valor cuando se encuentra en el estado `off` | boolean / string / number | —                 | false       |
| active-color        | color de fondo cuando se encuentra en el estado `on` | string                    | —                 | #409EFF     |
| inactive-color      | color de fondo cuando se encuentra en el estado `off` | string                    | —                 | #C0CCDA     |
| name                | nombre de entrada del componente Switch  | string                    | —                 | —           |

### Eventos

| Nombre del evento | Descripción                       | Parametro |
| ----------------- | --------------------------------- | --------- |
| change            | se dispara cuando el valor cambia | valor     |
después de cambiar

### Metodos
| Metodo | Descripción               | Parametro |
| ------ | ------------------------- | --------- |
| focus  | foco al componente Switch | —         |
