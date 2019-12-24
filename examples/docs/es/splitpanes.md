## Split Panes

Este componente divide un espacio en paneles.

### Uso básico

Al establecer `pane-size` para determinar el porcentaje de tamaño de un panel. `pane-max` establece el tamaño de porcentaje máximo que se puede ajustar arrastrando el divisor. `pane-min` establece el tamaño de porcentaje mínimo que se puede ajustar arrastrando el divisor.

:::demo
```html
<template>
  <el-splitpanes style="height: 400px" class="el-splitpanes">
    <el-pane pane-min="20" pane-max="70">
      <span>1</span>
    </el-pane>
    <el-pane>
      <span>2</span>
    </el-pane>
    <el-pane pane-max="70">
      <span>3</span>
    </el-pane>
  </el-splitpanes>
</template>
```
:::

### Split vertical space

Agregue `is-vertical` para dividir un espacio vertical.

:::demo
```html
<template>
  <el-splitpanes style="height: 400px" class="el-splitpanes" is-vertical>
    <el-pane pane-min="20" pane-max="70">
      <span>1</span>
    </el-pane>
    <el-pane>
      <span>2</span>
    </el-pane>
    <el-pane pane-max="70">
      <span>3</span>
    </el-pane>
  </el-splitpanes>
</template>
```
:::



### Combinaciones

Los paneles divididos anidados se pueden usar para combinar paneles divididos verticales y horizontales.

:::demo
```html
<template>
  <el-splitpanes style="height: 400px" class="el-splitpanes">
    <el-pane pane-min="20">
      <span>1</span>
    </el-pane>
    <el-pane>
      <el-splitpanes is-vertical>
        <el-pane>
          <span>2</span>
        </el-pane>
        <el-pane>
          <span>3</span>
        </el-pane>
        <el-pane>
          <span>4</span>
        </el-pane>
      </el-splitpanes>
    </el-pane>
    <el-pane>
      <span>5</span>
    </el-pane>
  </el-splitpanes>
</template>
```
:::

### Atributos de Split Panes
| Atributo       | Descripción                                                  | Tipo            | Valores aceptados                         | Por defecto |
|---------- |-------- |---------- |-------------  |-------- |
| is-expansive  | si es cierto, los divisores podrían empujar otros paneles  | Boolean   |  —  |  true |
| is-vertical  | si es cierto, el espacio se divide verticalmente  | Boolean   |  —  |  false |
| has-leading-splitter  | si es cierto, se mostrará un divisor principal para hacer doble clic para maximizar el primer panel | Boolean   |  —  |  false |
| has-dblclick-expansion  |  si es verdadero, hacer doble clic en un divisor podría maximizar el panel | Boolean   |  —  |  true |

### Atributos de Pane
| Atributo       | Descripción                                                  | Tipo            | Valores aceptados                         | Por defecto |
|---------- |-------- |---------- |-------------  |-------- |
| pane-size  | el tamaño porcentual de un panel | Number   |  —  | - |
| pane-max  | tamaño de porcentaje máximo que se puede ajustar arrastrando el divisor   | Number   | -  |     100    |
| pane-min  | tamaño de porcentaje mínimo que se puede ajustar arrastrando el divisor   | Number   | — |  0  |


### Eventos de Pestañas
| Nombre de Evento | Descripción                                                  | Parámetros                    |
|---------- |-------- |---------- |
| ready | evento después de que los paneles estén listos | — |
| resize | el evento se dispara si los paneles cambian de tamaño  | — |
| resized | el evento se dispara si el cambio de tamaño de los paneles ha terminado | — |
| pane-maximize | el evento se dispara si un panel se maximiza haciendo doble clic en un divisor | — |
| pane-click | el evento se dispara si se hace clic en un panel | — |
| splitter-click | el evento se dispara si se hace clic en un divisor | — |
