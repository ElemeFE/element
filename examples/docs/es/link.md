## Link

Texto con hipervinculo

### Básico

Texto con hipervinculo básico
:::demo

```html
<div>
  <el-link href="https://element.eleme.io" target="_blank">default</el-link>
  <el-link type="primary">primary</el-link>
  <el-link type="success">success</el-link>
  <el-link type="warning">warning</el-link>
  <el-link type="danger">danger</el-link>
  <el-link type="info">info</el-link>
</div>
```

:::

### Deshabilitar

Deshabilita el hipervinculo
:::demo

```html
<div>
  <el-link disabled>default</el-link>
  <el-link type="primary" disabled>primary</el-link>
  <el-link type="success" disabled>success</el-link>
  <el-link type="warning" disabled>warning</el-link>
  <el-link type="danger" disabled>danger</el-link>
  <el-link type="info" disabled>info</el-link>
</div>
```

:::

### Subrayado

Subrayado del hipervinculo
:::demo

```html
<div>
  <el-link :underline="false">Without Underline</el-link>
  <el-link>With Underline</el-link>
</div>
```

:::

### Icono

Hipervinculo con icono
:::demo

```html
<div>
  <el-link icon="el-icon-edit">Edit</el-link>
  <el-link>Check<i class="el-icon-view el-icon--right"></i> </el-link>
</div>
```

:::

### Atributos

| Atributo  | Descripción                                          | Tipo    | Opciones                                    | Por defecto |
| --------- | ---------------------------------------------------- | ------- | ------------------------------------------- | ----------- |
| type      | tipo                                                 | string  | primary / success / warning / danger / info | default     |
| underline | si el hipervinculo estara subrayado                  | boolean | —                                           | true        |
| disabled  | si el componente esta deshabilitado                  | boolean | —                                           | false       |
| href      | lo mismo que el valor nativo del hipervinculo `href` | string  | —                                           | -           |
| icon      | nombre de clase del icono                            | string  | —                                           | -           |
