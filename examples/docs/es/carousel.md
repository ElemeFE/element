<script>
  export default {
    mounted() {
      this.$nextTick(() => {
        const demos = document.querySelectorAll('.source');
        demos[0].style.padding = '0';
        demos[0].className += ' small';
        demos[3].className += ' medium';
      });
    }
  }
</script>
<style>
  .demo-carousel .block {
    padding: 30px;
    text-align: center;
    border-right: solid 1px #EFF2F6;
    display: inline-block;
    width: 50%;
    box-sizing: border-box;
    &:last-child {
      border-right: none;
    }
  }

  .demo-carousel .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .demo-carousel .el-carousel__container {
    text-align: center;
  }

  .demo-carousel .el-carousel__item {
    h3 {
      color: #fff;
      font-size: 18px;
      line-height: 300px;
      margin: 0;
    }
    &:nth-child(2n) {
      background-color: #99a9bf;
    }
    &:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  }

  .demo-carousel .small h3 {
    font-size: 14px;
    line-height: 150px;
  }

  .demo-carousel .medium h3 {
    font-size: 14px;
    line-height: 200px;
  }
</style>
## Carousel

Presenta una serie de imágenes o textos en un espacio limitado

### Uso básico

:::demo Combine `el-carousel`  con `el-carousel-item`, para conseguir el carrusel. El contenido de cada diapositiva es completamente personalizable, y sólo tiene que colocarla dentro de la etiqueta  `el-carousel-item` . Por defecto, el carrusel cambia cuando el ratón pasa por encima de un indicador. Fije  `trigger`  para  `click`, si lo que se desea es que el carrusel cambie sólo cuando se haga clic en un indicador.

```html
<template>
  <div class="block">
    <span class="demonstration">Switch when indicator is hovered (default)</span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="block">
    <span class="demonstration">Switch when indicator is clicked</span>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::

### Indicadores

Los indicadores de paginacion pueden mostrarse fuera del carrusel

:::demo El atributo  `indicator-position`  determina dónde se encuentran los indicadores de paginación. Por defecto están dentro del carrusel, y el ajuste de `indicator-position`  a `outside`  los mueve hacia fuera; en cambio `indicator-position`  a `none`  los oculta.

```html
<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::

### Flechas

Puede definir cuando se visualizan las flechas

:::demo El atributo `arrow` determina cuándo se visualizan las flechas. Por defecto aparecen cuando el ratón se desplaza sobre el carrusel. Ajuste `arrow` a `always` o `never` para mostrar u ocultar las flechas permanentemente.

```html
<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::

### Modo Card

Cuando una página es suficientemente ancha pero tiene una altura limitada, puede activar el modo `card` para carrusel.

:::demo Ajuste `type` a `card` para activar el modo tarjeta. Aparte de la apariencia, la mayor diferencia entre el modo tarjeta y el modo común es que al hacer clic en las diapositivas de ambos lados, el carrusel cambia directamente en modo tarjeta.

```html
<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::

### Atributos de Carousel
| Atributo           | Descripcion                              | Tipo    | Valores aceptados  | Por defecto |
| ------------------ | ---------------------------------------- | ------- | ------------------ | ----------- |
| height             | Alto del carrusel                        | string  | —                  | —           |
| initial-index      | Indice del slider inicial activo (empieza desde 0) | number  | —                  | 0           |
| trigger            | Evento que muestra los indicadores       | string  | hover/click        | hover       |
| autoplay           | Si se enlazan automáticamente las diapositivas | boolean | —                  | true        |
| interval           | Intervalo del auto loop, en milisegundos | number  | —                  | 3000        |
| indicator-position | Posición del indicador de paginación     | string  | outside/none       | —           |
| arrow              | Cuando se muestran las flechas           | string  | always/hover/never | hover       |
| type               | Tipo de carrusel                         | string  | card               | —           |

### Eventos de Carousel
| Nombre evento | Descripción                              | Parametros                               |
| ------------- | ---------------------------------------- | ---------------------------------------- |
| change        | Se dispara cuando el slider activo cambia | Indice del nuevo slider activo, indice del anterior slider activo. |

### Metodos de Carousel
| Metodos       | Descripción                | Parametros                               |
| ------------- | -------------------------- | ---------------------------------------- |
| setActiveItem | Cambio manual de slider    | indice del slider al que se va a cambiar, empezando por 0; o el `name` del `el-carousel-item` correspondiente |
| prev          | Cambia al slider anterior  | —                                        |
| next          | Cambia al slider siguiente | —                                        |

### Atributos de Carousel-Item
| Atributo | Descripción                              | Tipo   | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | ------ | ----------------- | ----------- |
| name     | Nombre del item que puede ser usado en `setActiveItem` | string | —                 | —           |
| label    | Texto que se mostrara en el indicador de paginacion correspondiente | string | —                 | —           |

