<script>
  export default {
    data() {
      return {
        active: 0
      };
    },
    
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>

## Steps

Guía al usuario para completar tareas de acuerdo con el proceso. Sus pasos pueden configurarse de acuerdo con el escenario de aplicación real y el número de pasos no puede ser inferior a dos.

### Uso básico

Barra de pasos simple.

:::demo Defina el atributo `active` con un valor de tipo `Number`, que indica el índice de pasos y comienza desde 0. Puede definir el atributo `space` cuando es necesario fijar el ancho del paso que acepta el tipo `Boolean`. La unidad del atributo `space` es px. Si no está configurado, es responsive. La configuración del atributo `finish-status` puede cambiar el estado de los pasos completados.

```html
<el-steps :active="active" finish-status="success">
  <el-step title="Step 1"></el-step>
  <el-step title="Step 2"></el-step>
  <el-step title="Step 3"></el-step>
</el-steps>

<el-button style="margin-top: 12px;" @click="next">Next step</el-button>

<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>
```
:::

### Step bar con el status

Muestra el estado del step para cada paso.

:::demo Utilice el atributo `title` para establecer el nombre del paso, o sobreescriba el atributo usando un slot con nombre. Hemos enumerado todos los nombres de slots al final de esta página.

```html
<el-steps :space="200" :active="1" finish-status="success">
  <el-step title="Done"></el-step>
  <el-step title="Processing"></el-step>
  <el-step title="Step 3"></el-step>
</el-steps>
```
:::

### Centrado 

El título y la descripción pueden estar centrados.

:::demo
```html
<el-steps :active="2" align-center>
  <el-step title="Step 1" description="Some description"></el-step>
  <el-step title="Step 2" description="Some description"></el-step>
  <el-step title="Step 3" description="Some description"></el-step>
  <el-step title="Step 4" description="Some description"></el-step>
</el-steps>
```
:::

### Step bar con descripción

Puede poner una descripción para cada paso.

:::demo
```html
<el-steps :active="1">
  <el-step title="Step 1" description="Some description"></el-step>
  <el-step title="Step 2" description="Some description"></el-step>
  <el-step title="Step 3" description="Some description"></el-step>
</el-steps>
```
:::

### Step bar with icon

En la barra de pasos se pueden utilizar diversos iconos personalizados.

:::demo El icono se define mediante la propiedad `icon`. Los tipos de iconos se pueden encontrar en la descripción del componente Icono. Además, puede personalizar el icono a través de un slot con nombre.

```html
<el-steps :active="1">
  <el-step title="Step 1" icon="el-icon-edit"></el-step>
  <el-step title="Step 2" icon="el-icon-upload"></el-step>
  <el-step title="Step 3" icon="el-icon-picture"></el-step>
</el-steps>
```
:::

### Step bar vertical

Step bar vertical.

:::demo Sólo tiene que fijar el atributo `direction`  a ` vertical` en el elemento `el-steps`.

```html
<div style="height: 300px;">
  <el-steps direction="vertical" :active="1">
    <el-step title="Step 1"></el-step>
    <el-step title="Step 2"></el-step>
    <el-step title="Step 3"></el-step>
  </el-steps>
</div>
```
:::

### Step bar simple
Step bar simple, donde se ignorará `align-center`, `description`, `direction` y `space`.

:::demo
```html

<el-steps :space="200" :active="1" simple>
  <el-step title="Step 1" icon="el-icon-edit"></el-step>
  <el-step title="Step 2" icon="el-icon-upload"></el-step>
  <el-step title="Step 3" icon="el-icon-picture"></el-step>
</el-steps>

<el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
  <el-step title="Step 1" ></el-step>
  <el-step title="Step 2" ></el-step>
  <el-step title="Step 3" ></el-step>
</el-steps>
```
:::

### Steps atributos

| Atributo       | Descripción                              | Tipo            | Valores aceptados                        | Por defecto |
| -------------- | ---------------------------------------- | --------------- | ---------------------------------------- | ----------- |
| space          | el espaciado de cada paso, será responsivo si se omite. Soporta porcentaje. | number / string | —                                        | —           |
| direction      | dirección de visualización               | string          | vertical/horizontal                      | horizontal  |
| active         | actual paso de activación                | number          | —                                        | 0           |
| process-status | status del paso actual                   | string          | wait / process / finish / error / success | process     |
| finish-status  | status del paso final                    | string          | wait / process / finish / error / success | finish      |
| align-center   | centrado de título y descripción         | boolean         | —                                        | false       |
| simple         | si aplicar un tema simple                | boolean         | -                                        | false       |

### Step atributos
| Atributo    | Descripción                              | Tipo                                     | Valores aceptados | Por defecto |
| ----------- | ---------------------------------------- | ---------------------------------------- | ----------------- | ----------- |
| title       | titulo del paso                          | string                                   | —                 | —           |
| description | descripción del paso                     | string                                   | —                 | —           |
| icon        | icono del paso                           | nombre de la clase del icono del paso. Los iconos también se pueden pasar a través del slot con nombre | string            | —           |
| status      | estado actual. Se configurará automáticamente mediante Steps si no está configurado. | wait / process / finish / error / success | -                 |             |

### Step Slot
| Name        | Description          |
| ----------- | -------------------- |
| icon        | Icono personalizado  |
| title       | Titulo del paso      |
| description | Descripcion del paso |

