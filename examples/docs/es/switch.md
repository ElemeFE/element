## Switch

Switch es utilizado para realizar cambios entre dos estados opuestos.

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
  v-model="value1"
  active-text="Pay by month"
  inactive-text="Pay by year">
</el-switch>
<el-switch
  style="display: block"
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="Pay by month"
  inactive-text="Pay by year">
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

### Tipos de valores extendidos

:::demo Puede establecer los atributos `active-value` y `inactive-value`. Ambos reciben valores de tipo `Boolean`, `String` o `Number`.

```html
<el-tooltip :content="'Switch value: ' + value" placement="top">
  <el-switch
    v-model="value"
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
        value: '100'
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
  v-model="value1"
  disabled>
</el-switch>
<el-switch
  v-model="value2"
  disabled>
</el-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: false
      }
    }
  };
</script>
```
:::

### Atributos

| Atributo            | Descripción                              | Tipo                      | Valores aceptados | Por defecto |
| ------------------- | ---------------------------------------- | ------------------------- | ----------------- | ----------- |
| value / v-model      | valor enlazado                           | boolean / string / number | —                 | —           |
| disabled            | si Switch esta deshabilitado             | boolean                   | —                 | false       |
| width               | ancho del componente Switch              | number                    | —                 | 40          |
| active-icon-class   | nombre de la clase del icono mostrado en el estado `on`, sobrescribe `active-text` | string                    | —                 | —           |
| inactive-icon-class | nombre de la clase del icono mostrado en el estado `off`, sobrescribe `inactive-text` | string                    | —                 | —           |
| active-text         | texto mostrado en el estado `on`         | string                    | —                 | —           |
| inactive-text       | texto mostrado en el estado `off`        | string                    | —                 | —           |
| active-value        | cambia su valor cuando se encuentra en el estado `on` | boolean / string / number | —                 | true        |
| inactive-value      | cambia su valor cuando se encuentra en el estado `off` | boolean / string / number | —                 | false       |
| active-color        | color de fondo cuando se encuentra en el estado `on` | string                    | —                 | #409EFF     |
| inactive-color      | color de fondo cuando se encuentra en el estado `off` | string                    | —                 | #C0CCDA     |
| name                | nombre de entrada del componente Switch  | string                    | —                 | —           |
| validate-event      | si se debe lanzar la validación de formulario | boolean              | -                 | true        |

### Eventos

| Nombre del evento | Descripción                       | Parámetro |
| ----------------- | --------------------------------- | --------- |
| change            | se dispara cuando el valor cambia | valor     |
después de cambiar

### Métodos
| Método | Descripción               | Parámetro |
| ------ | ------------------------- | --------- |
| focus  | foco al componente Switch | —         |
