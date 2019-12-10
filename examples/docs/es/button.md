## Button

Botones comúnmente usados.

### Uso básico

:::demo Use `type`, `plain`,`round` y `circle` para definir estilos a los botones.

```html
<el-row>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</el-row>

<el-row>
  <el-button plain>Plain</el-button>
  <el-button type="primary" plain>Primary</el-button>
  <el-button type="success" plain>Success</el-button>
  <el-button type="info" plain>Info</el-button>
  <el-button type="warning" plain>Warning</el-button>
  <el-button type="danger" plain>Danger</el-button>
</el-row>

<el-row>
  <el-button round>Round</el-button>
  <el-button type="primary" round>Primary</el-button>
  <el-button type="success" round>Success</el-button>
  <el-button type="info" round>Info</el-button>
  <el-button type="warning" round>Warning</el-button>
  <el-button type="danger" round>Danger</el-button>
</el-row>

<el-row>
  <el-button icon="el-icon-search" circle></el-button>
  <el-button type="primary" icon="el-icon-edit" circle></el-button>
  <el-button type="success" icon="el-icon-check" circle></el-button>
  <el-button type="info" icon="el-icon-message" circle></el-button>
  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
  <el-button type="danger" icon="el-icon-delete" circle></el-button>
</el-row>
```
:::

### Botón deshabilitado

El atributo `disabled` determina su un botón esta deshabilitado.

:::demo Use el atributo `disabled` para determinar si un botón esta deshabilitado. Acepta un valor `Boolean`.

```html
<el-row>
  <el-button disabled>Default</el-button>
  <el-button type="primary" disabled>Primary</el-button>
  <el-button type="success" disabled>Success</el-button>
  <el-button type="info" disabled>Info</el-button>
  <el-button type="warning" disabled>Warning</el-button>
  <el-button type="danger" disabled>Danger</el-button>
</el-row>

<el-row>
  <el-button plain disabled>Plain</el-button>
  <el-button type="primary" plain disabled>Primary</el-button>
  <el-button type="success" plain disabled>Success</el-button>
  <el-button type="info" plain disabled>Info</el-button>
  <el-button type="warning" plain disabled>Warning</el-button>
  <el-button type="danger" plain disabled>Danger</el-button>
</el-row>
```
:::

### Botón de texto

Botones sin borde ni fondo.

:::demo
```html
<el-button type="text">Text Button</el-button>
<el-button type="text" disabled>Text Button</el-button>
```
:::

### Botón icono

Use iconos para darle mayor significado a Button. Se puede usar simplemente un icono o un icono con texto.

:::demo Use el atributo `icon` para agregar un icono. Puede encontrar el listado de iconos en el componente de iconos. Agregar iconos a la derecha del texto se puede conseguir con un tag `<i>`. También se pueden usar iconos personalizados.

```html
<el-button type="primary" icon="el-icon-edit"></el-button>
<el-button type="primary" icon="el-icon-share"></el-button>
<el-button type="primary" icon="el-icon-delete"></el-button>
<el-button type="primary" icon="el-icon-search">Search</el-button>
<el-button type="primary">Upload<i class="el-icon-upload el-icon-right"></i></el-button>
```
:::

### Grupo de botones

Mostrar un grupo de botones puede ser usado para mostrar un grupo de operaciones similares.

:::demo Use el tag `<el-button-group>` para agrupar sus botones.

```html
<el-button-group>
  <el-button type="primary" icon="el-icon-arrow-left">Previous Page</el-button>
  <el-button type="primary">Next Page<i class="el-icon-arrow-right el-icon-right"></i></el-button>
</el-button-group>
<el-button-group>
  <el-button type="primary" icon="el-icon-edit"></el-button>
  <el-button type="primary" icon="el-icon-share"></el-button>
  <el-button type="primary" icon="el-icon-delete"></el-button>
</el-button-group>
```
:::

### Botón de descarga 

Cuando se hace clic en un botón para descargar datos, el botón muestra un estado de descarga.

:::demo Ajuste el atributo `loading` a `true` para mostrar el estado de descarga.

```html
<el-button type="primary" :loading="true">Loading</el-button>
```
:::

### Tamaños

Además del tamaño por defecto, el componente Button provee tres tamaños adicionales para utilizar en diferentes escenarios.

:::demo Use el atributo `size` para setear tamaños adicionales con `medium`, `small` o `mini`.

```html
<el-row>
  <el-button>Default</el-button>
  <el-button size="medium">Medium</el-button>
  <el-button size="small">Small</el-button>
  <el-button size="mini">Mini</el-button>
</el-row>
<el-row>
  <el-button round>Default</el-button>
  <el-button size="medium" round>Medium</el-button>
  <el-button size="small" round>Small</el-button>
  <el-button size="mini" round>Mini</el-button>
</el-row>
```
:::

### Atributos
| Atributo    | Descripción                                   | Tipo    | Valores aceptados                                  | Por defecto |
| ----------- | --------------------------------------------- | ------- | -------------------------------------------------- | ----------- |
| size        | tamaño del botón                              | string  | medium / small / mini                              | —           |
| type        | tipo de botón                                 | string  | primary / success / warning / danger / info / text | —           |
| plain       | determinar si es o no un botón plano          | boolean | —                                                  | false       |
| round       | determinar si es o no un botón redondo        | boolean | —                                                  | false       |
| circle      | determina si es un botón circular             | boolean | —                                                  | false       |
| loading     | determinar si es o no un botón de descarga    | boolean | —                                                  | false       |
| disabled    | deshabilitar el botón                         | boolean | —                                                  | false       |
| icon        | nombre de la clase del icono                  | string  | —                                                  | —           |
| autofocus   | misma funcionalidad que la nativa `autofocus` | boolean | —                                                  | false       |
| native-type | misma funcionalidad que la nativa `type`      | string  | button / submit / reset                            | button      |

