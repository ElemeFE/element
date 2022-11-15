## Progreso
Progreso es usado para mostrar el estado de la operación actual e informar al usuario acerca de ésta.

### Barra de progreso lineal

:::demo Usa el atributo `percentage` para asignar el porcentaje. Este es **requerido** y tiene que ser un valor entre `0-100`. Puede personalizar el formato de texto estableciendo `format`.

```html
<el-progress :percentage="50"></el-progress>
<el-progress :percentage="100" :format="format"></el-progress>
<el-progress :percentage="100" status="success"></el-progress>
<el-progress :percentage="100" status="warning"></el-progress>
<el-progress :percentage="50" status="exception"></el-progress>

<script>
  export default {
    methods: {
      format(percentage) {
        return percentage === 100 ? 'Full' : `${percentage}%`;
      }
    }
  };
</script>
```
:::

### Porcentaje interno
En este caso el porcentaje no toma espacio adicional.

:::demo El atributo `stroke-width` decide el ancho de la barra de progreso, y usa el atributo `text-inside` para poner la descripción dentro de la misma.
```html
<el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
<el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
<el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
<el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
```
:::

### Color personalizado

Puede utilizar el atributo `color` para establecer el color de la barra de progreso.

:::demo

```html
<el-progress :percentage="percentage" :color="customColor"></el-progress>

<el-progress :percentage="percentage" :color="customColorMethod"></el-progress>

<el-progress :percentage="percentage" :color="customColors"></el-progress>
<div>
  <el-button-group>
    <el-button icon="el-icon-minus" @click="decrease"></el-button>
    <el-button icon="el-icon-plus" @click="increase"></el-button>
  </el-button-group>
</div>

<script>
  export default {
    data() {
      return {
        percentage: 20,
        customColor: '#409eff',
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      customColorMethod(percentage) {
        if (percentage < 30) {
          return '#909399';
        } else if (percentage < 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
        }
      },
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
  }
</script>
```
:::

### Barra de progreso circular

:::demo Puede asignar el atributo `type` como `circle` para usar la barra circular de progreso, y usar el atributo `width` para cambiar el tamaño del círculo.
```html
<el-progress type="circle" :percentage="0"></el-progress>
<el-progress type="circle" :percentage="25"></el-progress>
<el-progress type="circle" :percentage="100" status="success"></el-progress>
<el-progress type="circle" :percentage="70" status="warning"></el-progress>
<el-progress type="circle" :percentage="50" status="exception"></el-progress>
```
:::

### Barra de progreso del panel de control

:::demo También puede especificar el atributo `type` a `dashboard` para usar la barra de progreso del panel de control.

```html
<el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>

<div>
  <el-button-group>
    <el-button icon="el-icon-minus" @click="decrease"></el-button>
    <el-button icon="el-icon-plus" @click="increase"></el-button>
  </el-button-group>
</div>

<script>
  export default {
    data() {
      return {
        percentage: 10,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
  }
</script>
```
:::

### Atributos
| Atributo     | Descripción                              | Tipo    | Valores aceptado  | Por defecto |
| ------------ | ---------------------------------------- | ------- | ----------------- | ----------- |
| percentage   | porcentaje, requerido                    | number  | 0-100             | 0           |
| type         | tipo de barra de progreso                | string  | line/circle/dashboard  | line   |
| stroke-width | ancho de la barra de progreso            | number  | —                 | 6           |
| text-inside  | mostrar el porcentaje dentro de la barra de progreso, solo funciona cuando `type` es 'line' | boolean | —                 | false       |
| status       | estado actual de la barra de progreso    | string  | success/exception/warning | —   |
| color        | color de fondo de la barra de progreso. Sobrescribe la propiedad `status` | string/function/array | — | '' |
| width        | ancho del canvas que contiene la barra de progreso circula | number  | —                 | 126         |
| show-text    | mostrar porcentaje                       | boolean | —                 | true        |
| stroke-linecap  | circle/dashboard tipo de diseño al final del camino | string | butt/round/square | round |
| format  | personalizar el formato de texto estableciendo format  | function(percentage) | — | — |
| define-back-color  | background color of progress bar (hex format) | string | — | — |
| text-color  | text color of progress bar (hex format) | string | — | — |