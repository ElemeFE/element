## Popover

### Uso básico

Similar a un Tooltip, Popover está construido con `Vue-popper`. Así que para atributos duplicados, por favor refiérase a la documentación de Tooltip.

:::demo El atributo `trigger` es usado para definir como el popover se dispara: `hover`, `click`, `focus` o `manual`. En cuanto al elemento desencadenante, puedes escribirlo de dos maneras diferentes: usando el `slot="reference"`[named slot](https://v2.vuejs.org/v2/guide/components-slots#Named-Slots), o usando la directiva `v-popover` y poniendo  el `ref` de Popover.

```html
<template>
  <el-popover
    placement="top-start"
    title="Title"
    width="200"
    trigger="hover"
    content="this is content, this is content, this is content">
    <el-button slot="reference">Hover to activate</el-button>
  </el-popover>

  <el-popover
    placement="bottom"
    title="Title"
    width="200"
    trigger="click"
    content="this is content, this is content, this is content">
    <el-button slot="reference">Click to activate</el-button>
  </el-popover>

  <el-popover
    ref="popover"
    placement="right"
    title="Title"
    width="200"
    trigger="focus"
    content="this is content, this is content, this is content">
  </el-popover>
  <el-button v-popover:popover>Focus to activate</el-button>

  <el-popover
    placement="bottom"
    title="Title"
    width="200"
    trigger="manual"
    content="this is content, this is content, this is content"
    v-model="visible">
    <el-button slot="reference" @click="visible = !visible">Manual to activate</el-button>
  </el-popover>
</template>

<script>
  export default {
    data() {
      return {
        visible: false
      };
    }
  };
</script>
```
:::

### Información anidada
Otros componentes pueden anidarse dentro de popover. A continuación un ejemplo de una tabla anidada.

:::demo Reemplaza el atributo `content` con un `slot`.

```html
<el-popover
  placement="right"
  width="400"
  trigger="click">
  <el-table :data="gridData">
    <el-table-column width="150" property="date" label="date"></el-table-column>
    <el-table-column width="100" property="name" label="name"></el-table-column>
    <el-table-column width="300" property="address" label="address"></el-table-column>
  </el-table>
  <el-button slot="reference">Click to activate</el-button>
</el-popover>

<script>
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-04',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-01',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          address: 'New York City'
        }]
      };
    }
  };
</script>
```
:::

### Operación anidada

Por supuesto, puedes anidar otras operaciones. Es más ligero que utilizar un `dialog`.

:::demo
```html
<el-popover
  placement="top"
  width="160"
  v-model="visible">
  <p>Are you sure to delete this?</p>
  <div style="text-align: right; margin: 0">
    <el-button size="mini" type="text" @click="visible = false">cancel</el-button>
    <el-button type="primary" size="mini" @click="visible = false">confirm</el-button>
  </div>
  <el-button slot="reference">Delete</el-button>
</el-popover>

<script>
  export default {
    data() {
      return {
        visible: false,
      };
    }
  }
</script>
```
:::

### Atributos
| Atributo       | Descripción                              | Tipo           | Valores aceptados                        | Por defecto                              |
| -------------- | ---------------------------------------- | -------------- | ---------------------------------------- | ---------------------------------------- |
| trigger        | cómo se dispara el popover               | string         | click/focus/hover/manual                 | click                                    |
| title          | título del popover                       | string         | —                                        | —                                        |
| content        | contenido del popover, puede ser sustituido por un `slot` | string         | —                                        | —                                        |
| width          | ancho del popover                        | string, number | —                                        | Min width 150px                          |
| placement      | posición del popover en la pantalla      | string         | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom                                   |
| disabled       | si el popover está deshabilitado         | boolean        | —                                        | false                                    |
| value / v-model | si el popover está visible               | Boolean        | —                                        | false                                    |
| offset         | popover offset                           | number         | —                                        | 0                                        |
| transition     | animación de transición del popover | string         | —                                        | el-fade-in-linear                        |
| visible-arrow  | si una flecha del tooltip es mostrada o no. Para más información, por favor refiérase a [Vue-popper](https://github.com/element-component/vue-popper) | boolean        | —                                        | true                                     |
| popper-options | parámetros para [popper.js](https://popper.js.org/docs/v2/) | object         | por favor, refiérase a [popper.js](https://popper.js.org/docs/v2/) | `{ boundariesElement: 'body', gpuAcceleration: false }` |
| popper-class   | clase propia para popover                | string         | —                                        | —                                        |
| open-delay     | retraso de la aparición cuando `trigger` es hover, en mili segundos | number         | —                                        | —                                        |
| close-delay    | Retraso antes de desaparecer cuando el `trigger` es hover, en mili segundos. | number | — | 200 |
| tabindex       | [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) de Popover |   number           |      —      |  0    |

### Slot
| Nombre    | Descripción                          |
| --------- | ------------------------------------ |
| —         | texto contenido en popover           |
| reference | elemento HTML que dispara el popover |

### Eventos
| Nombre del evento | Descripción                             | Parámetros |
| ----------------- | --------------------------------------- | ---------- |
| show              | se dispara cuando se muestra el popover | —          |
| after-enter       | se dispara cuando la transición de entrada termina | —       |
| hide              | se dispara cuando se oculta el popover  | —          |
| after-leave       | se dispara cuando la transición de salida termina | —        |
