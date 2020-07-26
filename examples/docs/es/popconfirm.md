## Popconfirm 

Un dialogo de confirmación simple asociado al evento click de un elemento.

### Uso básico

Popconfirm es parecido a Popover. Para algunos atributos duplicados, por favor consulte la documentación de Popover.

:::demo Solo el atributo  `title`  esta disponible en Popconfirm, `content` sera ignorado.
```html
<template>
<el-popconfirm
  title="Are you sure to delete this?"
>
  <el-button slot="reference">Delete</el-button>
</el-popconfirm>
</template>
````
:::

### Personalización
Se puede personalizar Popconfirm así:
:::demo

```html
<template>
<el-popconfirm
  confirmButtonText='OK'
  cancelButtonText='No, Thanks'
  icon="el-icon-info"
  iconColor="red"
  title="Are you sure to delete this?"
>
  <el-button slot="reference">Delete</el-button>
</el-popconfirm>
</template>
```
:::

### Atributos
| Atributo     | Descripción | Tipo    | Valores aceptados | Por defecto |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  title              | Titulo | String | — | — |
|  confirmButtonText              | Texto del botón de confirmación | String | — | — |
|  cancelButtonText              | Texto del botón de cancelación | String | — | — |
|  confirmButtonType              | Tipo del botón de confirmación | String | — | Primary |
|  cancelButtonType              | Tipo del botón de cancelación | String | — | Text |
|  icon              | Icono | String | — | el-icon-question |
|  iconColor              | Color icono | String | — | #f90 |
|  hideIcon              | ¿Es un icono oculto? | Boolean | — | false |

### Slot
| Nombre | Descripción |
|--- | ---|
| reference | Elemento HTML que activa el Popconfirm |

### Eventos
| Nombre Evento | Descripción | Parámetros |
|---------|--------|---------|
| onConfirm | Se activa cuando se pulsa el botón de confirmación | — |
| onCancel | Se activa cuando se pulsa el botón de cancelación | — |