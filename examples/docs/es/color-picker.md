<script>
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: null,
        color3: 'rgba(19, 206, 102, 0.8)',
        color4: '#409EFF'
      };
    },
    mounted() {
      this.$nextTick(() => {
        const demos = document.querySelectorAll('.source');
        demos[0].style.padding = '0';
      });
    },
  }
</script>

<style>
  .demo-color-picker .block {
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
  .demo-color-picker .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .demo-color-picker .el-color-picker + .el-color-picker {
    margin-left: 20px;
  }
</style>

## ColorPicker

ColorPicker es un selector de color que soporta varios formatos de color.

### Uso básico

:::demo ColorPicker requiere una variable de tipo `string` para ser enlazada a `v-model`.
```html
<div class="block">
  <span class="demonstration">Especifica valor por defecto</span>
  <el-color-picker v-model="color1"></el-color-picker>
</div>
<div class="block">
  <span class="demonstration">No especifica valor por defecto</span>
  <el-color-picker v-model="color2"></el-color-picker>
</div>

<script>
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: null
      }
    }
  };
</script>
```
:::

### Alpha

:::demo ColorPicker soporta selección de canales alpha. Para activarlo sólo agrege el atributo `show-alpha`.
```html
<el-color-picker v-model="color3" show-alpha></el-color-picker>

<script>
  export default {
    data() {
      return {
        color3: 'rgba(19, 206, 102, 0.8)'
      }
    }
  };
</script>
```
:::

### Sizes

:::demo
```html
<el-color-picker v-model="color4"></el-color-picker>
<el-color-picker v-model="color4" size="medium"></el-color-picker>
<el-color-picker v-model="color4" size="small"></el-color-picker>
<el-color-picker v-model="color4" size="mini"></el-color-picker>

<script>
  export default {
    data() {
      return {
        color4: '#409EFF'
      }
    }
  };
</script>
```
:::

### Atributos
| Atributo     | Descripción                              | Tipo    | Valores aceptados     | Por defecto                              |
| ------------ | ---------------------------------------- | ------- | --------------------- | ---------------------------------------- |
| disabled     | especifica si se deshabilita el ColorPicker | boolean | —                     | false                                    |
| size         | tamaño del ColorPicker                   | string  | —                     | medium / small / mini                    |
| show-alpha   | especifica si se muestra el control deslizante para el valor alpha | boolean | —                     | false                                    |
| color-format | formato de color del `v-model`           | string  | hsl / hsv / hex / rgb | hex (si show-alpha es false)/ rgb (si show-alpha es true) |
| popper-class | nombre de clase para el dropdown del ColorPicker | string  | —                     | —                                        |

### Eventos
| Nombre de Evento | Descripción                              | Parametros             |
| ---------------- | ---------------------------------------- | ---------------------- |
| change           | se dispara cuando el valor del input cambia | valor del color        |
| active-change    | se dispara cuando el actual color activo cambia | valor del color activo |

