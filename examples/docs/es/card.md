## Card
Muestra información dentro de un contenedor `card`

### Uso Básico

`Card` incluye titulo, contenido y operaciones.

:::demo Card se compone de cabecera y cuerpo. La cabecera es opcional y la colocación de su  contenido depende de un slot con nombre.

```html
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>Card name</span>
    <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'List item ' + o }}
  </div>
</el-card>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
```
:::

### Card simple

La parte de la cabecera puede omitirse.

:::demo
```html
<el-card class="box-card">
  <div v-for="o in 4" :key="o" class="text item">
    {{'List item ' + o }}
  </div>
</el-card>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
```
:::

### Con imágenes

Muestre un contenido más rico añadiendo algunas configuraciones.

:::demo El atributo `body-style` define el estilo CSS del `body` personalizado. Este ejemplo también utiliza  `el-col` para el layout.

```html
<el-row>
  <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>Yummy hamburger</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">Operating</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>
```
:::

### Shadow

Puede definir cuándo mostrar las sombras.

:::demo El atributo de sombra determina cuándo se muestran las sombras. Puede ser `always`, `hover` o `never`.

```html
<el-row :gutter="12">
  <el-col :span="8">
    <el-card shadow="always">
      Always
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="hover">
      Hover
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="never">
      Never
    </el-card>
  </el-col>
</el-row>
```
:::

### Atributos
| Atributo   | Descripción                              | Tipo   | Valores aceptados  | Por defecto         |
| ---------- | ---------------------------------------- | ------ | -----------------  | ------------------- |
| header     | Titulo del card. También acepta DOM pasado por `slot#header` | string  | —                 | —                   |
| body-style | Estilo CSS del cuerpo                    | object | —                  | { padding: '20px' } |
| shadow     | Cuando mostrar la sombra del Card | string | always / hover / never | always          |
