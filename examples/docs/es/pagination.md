<style>
  .demo-pagination .source.first {
    padding: 0;
  }

  .demo-pagination .first .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px #EFF2F6;
    display: inline-block;
    width: 50%;
    box-sizing: border-box;
    
    &:last-child {
      border-right: none;
    }
  }

  .demo-pagination .first .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .demo-pagination .source.last {
    padding: 0;
  }

  .demo-pagination .last .block {
    padding: 30px 24px;
    border-bottom: solid 1px #EFF2F6;
    &:last-child {
      border-bottom: none;
    }
  }

  .demo-pagination .last .demonstration {
    font-size: 14px;
    color: #8492a6;
    line-height: 44px;
  }

  .demo-pagination .last .demonstration + .el-pagination {
    float: right;
    width: 70%;
    margin: 5px 20px 0 0;
  }
</style>

## Paginación
Si tiene que mostrar muchos datos en una página, utilice la paginación.

### Uso básico

:::demo Asigne en el atributo `layout` los diferentes elementos que quiere utilizar separados por coma. Los elementos de paginación son: `prev` (un botón para navegar a la página anterior), `next` (un botón para navegar a la siguiente página), `pager` (lista de página), `jumper` (un `input` para saltar a una página determinada), `total` (total de elementos), `size` (un `select` para seleccionar el tamaño de la página ) y `->`(todo elemento situado luego de este símbolo será movido a la derecha).
```html
<div class="block">
  <span class="demonstration">When you have few pages</span>
  <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
</div>
<div class="block">
  <span class="demonstration">When you have more than 7 pages</span>
  <el-pagination
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
</div>
```
:::

### Paginación pequeña

Usa una paginación pequeña en caso de espacio limitado.

:::demo Solo ponga el atributo `small` como `true` y la Paginación se volverá pequeña.
```html
<el-pagination
  small
  layout="prev, pager, next"
  :total="50">
</el-pagination>
```
:::

### Más elementos

Agrega más modulos basados en su escenario.

:::demo Este ejemplo es un completo caso de uso. Utiliza los eventos `size-change` y `current-change` para manejar el tamaño de página y el cambio de página. El atributo `page-sizes` acepta un arreglo de enteros, cada uno representa un diferente valor del atributo `sizes` que es un `select`, ejemplo `[100, 200, 300, 400]` indicará que el `select` tendrá las opciones: 100, 200, 300 o 400 elementos por página.

```html
<template>
  <div class="block">
    <span class="demonstration">Total item count</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">Change page size</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">Jump to</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">All combined</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`${val} items per page`);
      },
      handleCurrentChange(val) {
        console.log(`current page: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>
```
:::
<script>
  import { addClass } from 'element-ui/src/utils/dom';
  export default {
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    },
    methods: {
      handleSizeChange(val) {
        console.log(`${val} items per page`);
      },
      handleCurrentChange(val) {
        console.log(`current page: ${val}`);
      }
    },
    mounted() {
      this.$nextTick(() => {
        let demos = document.querySelectorAll('.source');
        let firstDemo = demos[0];
        let lastDemo = demos[demos.length - 1];
        addClass(firstDemo, 'first');
        addClass(lastDemo, 'last');
      });
    }
  }
</script>

### Atributos
| Atributo     | Descripción                              | Tipo     | Valores aceptados                        | Por defecto                            |
| ------------ | ---------------------------------------- | -------- | ---------------------------------------- | -------------------------------------- |
| small        | usar paginación pequeña                  | boolean  | —                                        | false                                  |
| page-size    | cantidad de elementos por página         | number   | —                                        | 10                                     |
| total        | total de elementos                       | number   | —                                        | —                                      |
| page-count   | total de páginas. Asigna `total` o `page-count` y las páginas serán mostradas; si necesitas `page-sizes`, `total` es **requerido** | number   | —                                        | —                                      |
| current-page | número actual de la página, soporta el modificador .sync | number   | —                                        | 1                                      |
| layout       | layout de la paginación, elementos separados por coma | string   | `sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total`, `slot` | 'prev, pager, next, jumper, ->, total' |
| page-sizes   | opciones para la cantidad de elementos por página | number[] | —                                        | [10, 20, 30, 40, 50, 100]              |
| popper-class | clase propia para el `dropdown` del `select` del número de páginas | string   | —                                        | —                                      |
| prev-text    | texto para el botón `prev`               | string   | —                                        | —                                      |
| next-text    | texto para el botón `next`               | string   | —                                        | —                                      |

### Eventos
| Nombre del evento | Descripción                             | Parámetros                    |
| ----------------- | --------------------------------------- | ----------------------------- |
| size-change       | se dispara cuando `page-size` cambia    | nuevo valor de `page-size`    |
| current-change    | se dispara cuando `current-page` cambia | nuevo valor de `current-page` |

### Slot
| Nombre | Descripción                              |
| ------ | ---------------------------------------- |
| —      | Elemento propio. Para utilizar esto necesitas declarar `slot` en el `layout` |
