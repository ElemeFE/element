<script>
  export default {
    data() {
      return {
        links: [],
        input: '',
        input1: '',
        input2: '',
        input21: '',
        input22: '',
        input23: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        textarea: '',
        textarea2: '',
        textarea3: '',
        select: '',
        state1: '',
        state2: '',
        state3: '',
        state4: ''
      };
    },
    methods: {
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
        ];
      },
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createStateFilter(queryString)) : links;

        cb(results);
      },
      querySearchAsync(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createStateFilter(queryString)) : links;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  };
</script>

<style>
  .demo-input.demo-es {
    .el-select .el-input {
      width: 130px;
    }
    .el-input {
      width: 180px;
    }
    .el-textarea {
      width: 414px;
    }
    .el-input-group {
      width: 100%;
    }
    .demo-input-size {
      .el-input {
        vertical-align: top;
        margin: 0 10px 10px 0;
      }
    }
    .demo-input-suffix {
      padding: 10px;
    }
    .demo-input-suffix .el-input {
      margin-right: 15px;
    }
    .demo-input-label {
      display: inline-block;
      width: 130px;
    }
    .input-with-select .el-input-group__prepend {
      background-color: #fff;
    }
    .demo-autocomplete {
      text-align: center;

      .sub-title {
        margin-bottom: 10px;
        font-size: 14px;
        color: #8492a6;
      }

      .el-col:not(:last-child) {
        border-right: 1px solid rgba(224,230,237,0.50);
      }

      .el-autocomplete {
        text-align: left;
      }
    }
  }
  .el-autocomplete-suggestion.my-autocomplete {
    li {
      line-height: normal;
      padding: 7px *;

      .name {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .addr {
        font-size: 12px;
        color: #b4b4b4;
      }
      .highlighted .addr {
        color: #ddd;
      }
    }
  }
</style>

## Input

Ingresa datos usando el ratón o teclado.

### Uso básico

:::demo

```html
<el-input placeholder="Please input" v-model="input"></el-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

### Disabled

:::demo Deshabilite el Input con el atributo  `disabled`.

```html
<el-input
  placeholder="Please input"
  v-model="input1"
  :disabled="true">
</el-input>

<script>
export default {
  data() {
    return {
      input1: ''
    }
  }
}
</script>
```
:::

### Input con icono

Añada un icono para indicar el tipo de Input.

:::demo Para añadir iconos en el Input, puede utilizar los atributos `prefix-icon` y `suffix-icon` . Además, los slots con nombre `prefix` y `suffix` también funcionan.

```html
<div class="demo-input-suffix">
  <span class="demo-input-label">Using attributes</span>
  <el-input
    placeholder="Pick a date"
    suffix-icon="el-icon-date"
    v-model="input2">
  </el-input>
  <el-input
    placeholder="Type something"
    prefix-icon="el-icon-search"
    v-model="input21">
  </el-input>
</div>
<div class="demo-input-suffix">
  <span class="demo-input-label">Using slots</span>
  <el-input
    placeholder="Pick a date"
    v-model="input22">
    <i slot="suffix" class="el-input__icon el-icon-date"></i>
  </el-input>
  <el-input
    placeholder="Type something"
    v-model="input23">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
</div>

<style>
  .demo-input-label {
    display: inline-block;
    width: 130px;
  }
</style>

<script>
export default {
  data() {
    return {
      input2: '',
      input21: '',
      input22: '',
      input23: ''
    }
  }
}
</script>
```
:::

### Textarea

Redimensiona para introducir varias líneas de información de texto. Agrege el atributo `type="textarea"` para cambiar el `input` al tipo nativo `textarea`.

:::demo Controle la altura ajustando el prop `rows`.

```html
<el-input
  type="textarea"
  :rows="2"
  placeholder="Please input"
  v-model="textarea">
</el-input>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>
```
:::

### Textarea tamaño automatico

El ajuste del prop `autosize` en el tipo de Input textarea hace que la altura se ajuste automáticamente en función del contenido. Se puede proporcionar opciones en un objeto para autodimensionar y especificar el número mínimo y máximo de líneas que el textarea puede ajustar automáticamente.

:::demo

```html
<el-input
  type="textarea"
  autosize
  placeholder="Please input"
  v-model="textarea2">
</el-input>
<div style="margin: 20px 0;"></div>
<el-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="Please input"
  v-model="textarea3">
</el-input>

<script>
export default {
  data() {
    return {
      textarea2: '',
      textarea3: ''
    }
  }
}
</script>
```
:::

### Mezclando elementos con input

Añade un elemento antes o después del input, generalmente una etiqueta o un botón.

:::demo Utilice el `slot` para seleccionar si el elemento se colocara antes (prepend) o después (append) del Input.

```html
<div>
  <el-input placeholder="Please input" v-model="input3">
    <template slot="prepend">Http://</template>
  </el-input>
</div>
<div style="margin-top: 15px;">
  <el-input placeholder="Please input" v-model="input4">
    <template slot="append">.com</template>
  </el-input>
</div>
<div style="margin-top: 15px;">
  <el-input placeholder="Please input" v-model="input5" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="Select">
      <el-option label="Restaurant" value="1"></el-option>
      <el-option label="Order No." value="2"></el-option>
      <el-option label="Tel" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>

<style>
  .el-select .el-input {
    width: 110px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
<script>
export default {
  data() {
    return {
      input3: '',
      input4: '',
      input5: '',
      select: ''
    }
  }
}
</script>
```
:::

### Tamaño

:::demo Añada el atributo `size` para cambiar el tamaño del Input. Además del tamaño predeterminado, hay otras tres opciones: `large`, `small` y `mini`.

```html
<div class="demo-input-size">
  <el-input
    placeholder="Please Input"
    v-model="input6">
  </el-input>
  <el-input
    size="medium"
    placeholder="Please Input"
    v-model="input7">
  </el-input>
  <el-input
    size="small"
    placeholder="Please Input"
    v-model="input8">
  </el-input>
  <el-input
    size="mini"
    placeholder="Please Input"
    v-model="input9">
  </el-input>
</div>

<script>
export default {
  data() {
    return {
      input6: '',
      input7: '',
      input8: '',
      input9: ''
    }
  }
}
</script>
```
:::

### Autocompletado

Puede obtener algunas sugerencias basadas en la entrada actual.

:::demo El componente Autocomplete proporciona sugerencias de entrada. El atributo `fetch-suggestions` es un método que devuelve la entrada sugerida. En este ejemplo, `querySearch(queryString, cb)` devuelve las sugerencias al componente mediante `cb(data)` cuando están listas.

```html
<el-row class="demo-autocomplete">
  <el-col :span="12">
    <div class="sub-title">list suggestions when activated</div>
    <el-autocomplete
      class="inline-input"
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="Please Input"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
  <el-col :span="12">
    <div class="sub-title">list suggestions on input</div>
    <el-autocomplete
      class="inline-input"
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="Please Input"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
</el-row>
<script>
  export default {
    data() {
      return {
        links: [],
        state1: '',
        state2: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;
        // call callback function to return suggestions
        cb(results);
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  }
</script>
```
:::

### Template personalizado

Personalice cómo se muestran las sugerencias.

:::demo Utilice `scoped slot` para personalizar los elementos de sugerencias. En el scope, puede acceder al objeto de sugerencia mediante la clave  `item`.

```html
<el-autocomplete
  popper-class="my-autocomplete"
  v-model="state3"
  :fetch-suggestions="querySearch"
  placeholder="Please input"
  @select="handleSelect">
  <i
    class="el-icon-edit el-input__icon"
    slot="suffix"
    @click="handleIconClick">
  </i>
  <template slot-scope="props">
    <div class="value">{{ props.item.value }}</div>
    <span class="link">{{ props.item.link }}</span>
  </template>
</el-autocomplete>

<style>
  .my-autocomplete {
    li {
      line-height: normal;
      padding: 7px;

      .value {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .link {
        font-size: 12px;
        color: #b4b4b4;
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        links: [],
        state3: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;
        // call callback function to return suggestion objects
        cb(results);
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  }
</script>
```
:::

### Búsqueda remota

Búsqueda de datos desde el servidor.

:::demo
```html
<el-autocomplete
  v-model="state4"
  :fetch-suggestions="querySearchAsync"
  placeholder="Please input"
  @select="handleSelect"
></el-autocomplete>
<script>
  export default {
    data() {
      return {
        links: [],
        state4: '',
        timeout:  null
      };
    },
    methods: {
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },
      querySearchAsync(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  };
</script>
```
:::

### Input atributos

| Atributo      | Descripción                              | Tipo             | Valores aceptados                | Por defecto |
| ------------- | ---------------------------------------- | ---------------- | -------------------------------- | ----------- |
| type          | tipo de input                            | string           | text / textarea                  | text        |
| value         | valor enlazado                           | string / number  | —                                | —           |
| maxlength     | el maximo para el largo del texto        | number           | —                                | —           |
| minlength     | el mínimo para el largo del texto        | number           | —                                | —           |
| placeholder   | placeholder del Input                    | string           | —                                | —           |
| disabled      | si esta deshabilitado                    | boolean          | —                                | false       |
| size          | tamaño del input, esto no funciona cuando `type` no es textarea | string           | medium / small / mini            | —           |
| prefix-icon   | clase del icono de prefijo               | string           | —                                | —           |
| suffix-icon   | clase del icono de sufijo                | string           | —                                | —           |
| rows          | número de filas, sólo funciona cuando `type` es 'textarea'. | number           | —                                | 2           |
| autosize      | si textarea tiene una altura adaptativa, sólo funciona cuando el`type` es 'textarea'. Puede aceptar un objeto, p. ej. { minRows: 2, maxRows: 6 } | boolean / object | —                                | false       |
| auto-complete | igual que `auto-complete` en el input nativo | string           | on/off                           | off         |
| name          | igual que `name` en el input nativo      | string           | —                                | —           |
| readonly      | igual que `readonly` en el input nativo  | boolean          | —                                | false       |
| max           | igual que `max` en el input nativo       | —                | —                                | —           |
| min           | igual que `min` en el input nativo       | —                | —                                | —           |
| step          | igual que `step` en el input nativo      | —                | —                                | —           |
| resize        | control para el dimensionamiento         | string           | none, both, horizontal, vertical | —           |
| autofocus     | igual que `autofocus` en el input nativo | boolean          | —                                | false       |
| form          | igual que `form` en el input nativo      | string           | —                                | —           |
| label         | texto de la etiqueta                     | string           | —                                | —           |
| tabindex      | orden de tabulacion para el Input        | string           | -                                | -           |

### Input slots

| Nombre  | Descripción                          |
| ------- | ------------------------------------ |
| prefix  | contenido como prefijo del input     |
| suffix  | contenido como sufijo del input      |
| prepend | contenido antes del input            |
| append  | contenido a añadir después del input |

### Input eventos

| Nombre | Descripción                              | Parametros                |
| ------ | ---------------------------------------- | ------------------------- |
| blur   | Se dispara cuando se pierde el foco      | (event: Event)            |
| focus  | Se dispara cuando se obtiene el foco     | (event: Event)            |
| change | se activa cuando cambia el valor de entrada | (value: string \| number) |

### Autocomplete Atributos

Atributo | Descripción | Tipo | Opciones | Por defecto
|----| ----| ----| ---- | -----|
|placeholder| el placeholder del Autocomplete| string | — | — |
|disabled | si el Autocompete esta deshabilitado  | boolean | — | false|
| value-key | nombre del campo del objeto de sugerencia del input para la visualización | string | — | value |
|icon | nombre del icono | string | — | — |
|value | valor enlazado | string | — | — |
| debounce | retardo al escribir, en milisegundos | number | — | 300 |
|fetch-suggestions | un método para obtener las sugerencias del input. Cuando las sugerencias estén listas, invocar `callback(data:[])` para devolverlas a Autocomplete | Function(queryString, callback) | — | — |
| popper-class | nombre personalizado de clase para el dropdown de autocomplete | string | — | — |
| trigger-on-focus | si se deben mostrar sugerencias cuando el input obtiene el foco | boolean | — | true |
| on-icon-click | funcion que se invoca cuando se hace click en el icono | function | — | — |
| name | igual que `name` en el input nativo | string | — | — |
| select-when-unmatched | si se emite un evento `select` al pulsar enter cuando no hay coincidencia de Autocomplete | boolean | — | false |
| label | texto de la etiqueta | string | — | — |

### Autocomplete slots

| Nombre  | Descripción                          |
| ------- | ------------------------------------ |
| prefix  | contenido como prefijo del input     |
| suffix  | contenido como sufijo del input      |
| prepend | contenido antes del input            |
| append  | contenido a añadir después del input |

### Autocomplete Eventos

| Nombre | Descripción                              | Parametros                               |
| ------ | ---------------------------------------- | ---------------------------------------- |
| select | se dispara cuando se hace click a una sugerencia | sugerencia en la que se está haciendo click |

### Metodo
| Metodo | Descripción                   | Parametros |
| ------ | ----------------------------- | ---------- |
| focus  | coloca el foco en el elemento | —          |
