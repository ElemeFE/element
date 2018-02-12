<style>
  .demo-transfer {
    .transfer-footer {
      margin-left: 15px;
      padding: 6px 5px;
    }
  }
</style>

<script>
  export default {
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `Option ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      const generateData2 = _ => {
        const data = [];
        const states = ['California', 'Illinois', 'Maryland', 'Texas', 'Florida', 'Colorado', 'Connecticut '];
        const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT'];
        states.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            initial: initials[index]
          });
        });
        return data;
      };
      const generateData3 = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            value: i,
            desc: `Option ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        data2: generateData2(),
        data3: generateData3(),
        value1: [1, 4],
        value2: [],
        value3: [1],
        value4: [],
        filterMethod(query, item) {
          return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1;
        },
        renderFunc(h, option) {
          return <span>{ option.key } - { option.label }</span>;
        }
      };
    },
    
    methods: {
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
      }
    }
  };
</script>

## Transfer

### Uso básico
:::demo Los datos se pasan a Transfer a través del atributo `data`. Los datos tienen que ser un array de objetos, y cada objeto debe tener estos atributos: `key` que será el identificador del item, `label` que será el texto a mostrar, y `disabled` que indicará si el elemento esta desactivado. Los items dentro de la lista destino están sincronizados con la variable asociada a `v-model`, y el valor de esa variable es un array de claves de los elementos de la lista destino. Así que si no quiere que la lista destino esté vacía inicialmente puede inicializar el `v-model` con un array.
```html
<template>
  <el-transfer
    v-model="value1"
    :data="data">
  </el-transfer>
</template>

<script>
  export default {
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `Option ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value1: [1, 4]
      };
    }
  };
</script>
```
:::

### Filtrar

Puede buscar y filtrar los items.

::demo Ponga el atributo `filterable` a true para permitir el filtrado.Por defecto si el `label` del item contiene el término buscado será incluido en el resultado. También puede implementar su propio método de filtrado con el atributo `filter-method`, que recibe un método y le pasa la búsqueda y cada item. Los items para los que devuelva true serán incluidos en el resultado de la búsqueda.
```html
<template>
  <el-transfer
    filterable
    :filter-method="filterMethod"
    filter-placeholder="State Abbreviations"
    v-model="value2"
    :data="data2">
  </el-transfer>
</template>

<script>
  export default {
    data() {
      const generateData2 = _ => {
        const data = [];
        const states = ['California', 'Illinois', 'Maryland', 'Texas', 'Florida', 'Colorado', 'Connecticut '];
        const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT'];
        states.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            initial: initials[index]
          });
        });
        return data;
      };
      return {
        data2: generateData2(),
        value2: [],
        filterMethod(query, item) {
          return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1;
        }
      };
    }
  };
</script>
```
:::

### Personalizable

Puede personalizar los títulos, botones, la función de renderizado de los items, el texto de status de la cabecera y el contenido del pie.

:::demo Use `titles`, `button-texts`, `render-content` y `format` respectivamente para personalizar los títulos de las listas, el texto de los botones, la función de renderizado para los items y el texto de la cabecera que muestra el estado de los items. Para el pie de la lista hay dos slots: `left-footer` y `right-footer`. Además, si quiere algunos items marcados inicialmente puede usar `left-default-checked` y `right-default-checked`. Finalmente este ejemplo muestra el evento `change`. Tenga en cuenta que este ejemplo no se puede ejecutar en jsfiddle porque no soporta sintaxis JSX. En un proyecto real `render-content` funcionará si las dependencias son configuradas correctamente.
```html
<template>
  <el-transfer
    v-model="value3"
    filterable
    :left-default-checked="[2, 3]"
    :right-default-checked="[1]"
    :render-content="renderFunc"
    :titles="['Source', 'Target']"
    :button-texts="['To left', 'To right']"
    :format="{
      noChecked: '${total}',
      hasChecked: '${checked}/${total}'
    }"
    @change="handleChange"
    :data="data">
    <el-button class="transfer-footer" slot="left-footer" size="small">Operation</el-button>
    <el-button class="transfer-footer" slot="right-footer" size="small">Operation</el-button>
  </el-transfer>
</template>

<style>
  .transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
</style>

<script>
  export default {
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `Option ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value3: [1],
        renderFunc(h, option) {
          return <span>{ option.key } - { option.label }</span>;
        }
      };
    },

    methods: {
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
      }
    }
  };
</script>
```
:::

### Prop con alias

Por defecto Transfer busca los atributos `key`, `label`, y `disabled` en cada elemento. Si sus datos tienen un nombre diferente para la clave puede usar el atributo `props` para añadir alias.

:::demo En este ejemplo los elementos no tienen `key`y `label`, en vez de eso tienen `value` y `desc`. Así que tiene que añadir alias para `key` y `label`.
```html
<template>
  <el-transfer
    v-model="value4"
    :props="{
      key: 'value',
      label: 'desc'
    }"
    :data="data3">
  </el-transfer>
</template>

<script>
  export default {
    data() {
      const generateData3 = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            value: i,
            desc: `Option ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data3: generateData3(),
        value4: []
      };
    }
  };
</script>
```
:::

### Atributos
| Atriburo              | Descripcion                              | Tipo                            | Valores aceptados | Por defecto                              |
| --------------------- | ---------------------------------------- | ------------------------------- | ----------------- | ---------------------------------------- |
| data                  | Origen de datos                          | array[{ key, label, disabled }] | —                 | [ ]                                      |
| filterable            | Si se puede filtrar                      | boolean                         | —                 | false                                    |
| filter-placeholder    | Placeholder para el input del filtro     | string                          | —                 | Enter keyword                            |
| filter-method         | Método de filtrado                       | function                        | —                 | —                                        |
| titles                | Títulos de las listas                    | array                           | —                 | ['List 1', 'List 2']                     |
| button-texts          | Texto de los botones                     | array                           | —                 | [ ]                                      |
| render-content        | Función de renderizado                   | function(h, option)             | —                 | —                                        |
| format                | Texto para el status en el header        | object{noChecked, hasChecked}   | —                 | { noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' } |
| props                 | prop alias para el origen de datos       | object{key, label, disabled}    | —                 | —                                        |
| left-default-checked  | Array de claves de los elementos marcados inicialmente en la lista de la izquierda | array                           | —                 | [ ]                                      |
| right-default-checked | Array de claves de los elementos marcados inicialmente en la lista de la derecha | array                           | —                 | [ ]                                      |

### Slot
| Nombre       | Descripcion                              |
| ------------ | ---------------------------------------- |
| left-footer  | Contenido del footer de la lista de la izquierda |
| right-footer | Contenido del footer de la lista de la derecha |

### Methods
| Method | Description | Parameters |
| ---- | ---- | ---- |
| clearQuery | borra la palabra clave del filtro de un determinado panel | 'left' / 'right' |

### Eventos
| Nombre | Descripcion                              | Parametros                               |
| ------ | ---------------------------------------- | ---------------------------------------- |
| change | se lanzá cuando los elementos cambian en la lista de la derecha | array con las claves de los elementos de la lista de la derecha |

