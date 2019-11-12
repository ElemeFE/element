## Avatar

Los avatares pueden utilizarse para representar personas u objetos. Soporta imágenes, iconos o caracteres.

### Básico

Use los props `shape` y `size` para establecer la forma y el tamaño del avatar

:::demo
```html
<template>
  <el-row class="demo-avatar demo-basic">
    <el-col :span="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <el-avatar :size="size" :src="circleUrl"></el-avatar>
        </div>
      </div>
    </el-col>  
    <el-col :span="12">
      <div class="sub-title">square</div>
      <div class="demo-basic--circle">
        <div class="block"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
        </div>
      </div>
    </el-col> 
  </el-row>
</template>
<script>
  export default {
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"]
      }
    }
  }
</script>

```
:::

### Tipos

Soporta imágenes, iconos o caracteres.

:::demo
```html
<template>
  <div class="demo-type">
    <div>
      <el-avatar icon="el-icon-user-solid"></el-avatar>
    </div>
    <div>
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>
    <div>
      <el-avatar> user </el-avatar>
    </div>
  </div>
</template>
```
:::

### Fallback cuando se produce un error de carga de imagen

Fallback cuando se produce un error de carga de imagen

:::demo
```html
<template>
  <div class="demo-type">
    <el-avatar :size="60" src="https://empty" @error="errorHandler">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
      </el-avatar>
  </div>
</template>
<script>
  export default {
    methods: {
      errorHandler() {
        return true
      }
    }
  }
</script>

```
:::

### Cómo encaja la imagen en su contenedor

Establezca cómo la imagen se ajusta a su contenedor para un avatar de imagen, igual que [object-fit](https://developer.mozilla.org/es/docs/Web/CSS/object-fit).

:::demo
```html
<template>
  <div class="demo-fit">
    <div class="block" v-for="fit in fits" :key="fit">
        <span class="title">{{ fit }}</span>
        <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    }
  }
</script>

```
:::

### Atributos

| Atributo     | Descripción | Tipo   | Valores aceptados | Por defecto |
| ----------------- | -------------------------------- | --------------- | ------ | ------ |
| icon              | establece el tipo de representación a Icono, más información en  Componente Icon | string          |        |        |
| size              | Establece el tamaño del avatar | number/string | number / large / medium / small | large  |
| shape             | establece la forma del avatar | string |    circle / square     |   circle  |
| src               | la dirección de la imagen para un avatar de imagen | string |        |      |
| srcSet            | Una lista de una o más cadenas separadas por comas que indica un conjunto de posibles fuentes de imágenes para que el agente de usuario las utilice. | string |        |      |
| alt               | Este atributo define una descripción de texto alternativo de la imagen | string |        |      |
| fit               | establece cómo encaja la imagen en su contenedor para un avatar de imagen | string |    fill / contain / cover / none / scale-down    |   cover   |

### Eventos

| Nombre | Descripción | Parámetros |
| ------ | ------------------ | -------- |
| error  | cuando se produce un error de carga de img, devuelve false para evitar el comportamiento de repliegue predeterminado |(e: Event)  |

### Slot

| Nombre | Descripción | 
| default  | personalice el contenido del avatar |

