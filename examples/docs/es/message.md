<script>
  module.exports = {
    methods: {
      open() {
        this.$message('This is a message.');
      },
    
      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
      },
    
      open2() {
        this.$message({
          message: 'Congrats, this is a success message.',
          type: 'success'
        });
      },
    
      open3() {
        this.$message({
          message: 'Warning, this is a warning message.',
          type: 'warning'
        });
      },
    
      open4() {
        this.$message.error('Oops, this is a error message.');
      },
    
      open5() {
        this.$message({
          showClose: true,
          message: 'This is a message.'
        });
      },
    
      open6() {
        this.$message({
          showClose: true,
          message: 'Congrats, this is a success message.',
          type: 'success'
        });
      },
    
      open7() {
        this.$message({
          showClose: true,
          message: 'Warning, this is a warning message.',
          type: 'warning'
        });
      },
    
      open8() {
        this.$message({
          showClose: true,
          message: 'Oops, this is a error message.',
          type: 'error'
        });
      },
    
      openCenter() {
        this.$message({
          message: 'Centered text',
          center: true
        });
      },
    
      openHTML() {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>This is <i>HTML</i> string</strong>'
        });
      }
    }
  };
</script>

## Message

Utilizado para mostrar retroalimentacion despues de una actividad. La diferencia con el componente Notification es que este ultimo es utilizado para mostrar una notificacion pasiva a nivel de sistema.

### Uso basico

Se muestra en la parte superior de la pagina y desaparece despues de 3 segundos.

:::demo La configuracion del componente Message es muy similar al del componente notification, asi que parte de las opciones no seran explicadas en detalle aqui. Puedes consultar la tabla de opciones en la parte inferior conbinada con la documentacion del componente notification para comprenderla. Element a registrado un metodo `$message` para poder invocarlo. Message puede tomar una cadena o un Vnode como parametro, y lo mostrara como el cuerpo principal.

```html
<template>
  <el-button :plain="true" @click="open">Show message</el-button>
  <el-button :plain="true" @click="openVn">VNode</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$message('This is a message.');
      },
      
      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
      }
    }
  }
</script>
```
:::

### Tipos

Utilizados para mostrar retroalimentacion de Success, Warning, Message y Error activities.

:::demo Cuando necesite mas personalizacion, el componente Message tambien puede tomar un objeto como parametro. Por ejemplo, estableciendo el valor de `type` puede definir diferentes tipos, el predeterminado es `info`. En tales casos el cuerpo principal se pasa como el valor de `message`. Tambien, hay registrados metodos para los diferentes tipos, asi que, puedes llamarlos sin necesidad de pasar un tipo como `open4`.
```html
<template>
  <el-button :plain="true" @click="open2">success</el-button>
  <el-button :plain="true" @click="open3">warning</el-button>
  <el-button :plain="true" @click="open">message</el-button>
  <el-button :plain="true" @click="open4">error</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$message('This is a message.');
      },
      open2() {
        this.$message({
          message: 'Congrats, this is a success message.',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: 'Warning, this is a warning message.',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('Oops, this is a error message.');
      }
    }
  }
</script>
```
:::

### Closable

Un boton para cerrar que puede ser agregado.

:::demo Un componente Message predeterminado no se puede cerrar manualmente. Si necesitas un componente message que pueda cerrarse, puedes establecer el campo `showClose`. Ademas, al igual que las notificaciones, message tiene un atriubuto `duration` que puede ser controlado. Por defecto la duracion es de 3000 ms, y no desaparecera al llegar a `0`.
```html
<template>
  <el-button :plain="true" @click="open5">message</el-button>
  <el-button :plain="true" @click="open6">success</el-button>
  <el-button :plain="true" @click="open7">warning</el-button>
  <el-button :plain="true" @click="open8">error</el-button>
</template>

<script>
  export default {
    methods: {
      open5() {
        this.$message({
          showClose: true,
          message: 'This is a message.'
        });
      },

      open6() {
        this.$message({
          showClose: true,
          message: 'Congrats, this is a success message.',
          type: 'success'
        });
      },

      open7() {
        this.$message({
          showClose: true,
          message: 'Warning, this is a warning message.',
          type: 'warning'
        });
      },

      open8() {
        this.$message({
          showClose: true,
          message: 'Oops, this is a error message.',
          type: 'error'
        });
      }
    }
  }
</script>
```
:::

### Centered text
Utiliza el atributo `center` para centrar el texto.

:::demo

```html
<template>
  <el-button :plain="true" @click="openCenter">Centered text</el-button>
</template>

<script>
  export default {
    methods: {
      openCenter() {
        this.$message({
          message: 'Centered text',
          center: true
        });
      }
    }
  }
</script>
```
:::

### Utiliza cadenas HTML
`message` soporta cadenas HTML.

:::demo Establece la propiedad `dangerouslyUseHTMLString` en true y `message` sera tratado como una cadena HTML.

```html
<template>
  <el-button :plain="true" @click="openHTML">Use HTML String</el-button>
</template>

<script>
  export default {
    methods: {
      openHTML() {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>This is <i>HTML</i> string</strong>'
        });
      }
    }
  }
</script>
```
:::

:::warning
Aunque la propiedad `message` soporta cadenas HTML, realizar arbitrariamente render dinamico de HTML en nuestro sitio web puede ser muy peligroso ya que puede conducir facilmente a [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting). Entonces cuando `dangerouslyUseHTMLString` esta activada, asegurece que el contendio de `message` sea de confianza, y **nunca** asignar `message` a contenido generado por el usuario.
:::

### Metodos Globales

Element ha agregado un método global llamado `$message` para Vue.prototype. Entonces en una instancia de vue puede llamar a `Message` como lo hicimos en esta pagina.

### Importación local

Import `Message`:

```javascript
import { Message } from 'element-ui';
```

En este caso deberia llamar al metodo `Message(options)`. Tambien se han registrado metodos para los diferentes tipos, e.g. `Message.success(options)`. Puede llamar al metodo `Message.closeAll()` para cerrar manualmente todas las instancias.

### Options
| Atributo                 | Descripcion                              | Tipo           | Valores permitidos         | Por defecto |
| ------------------------ | ---------------------------------------- | -------------- | -------------------------- | ----------- |
| message                  | texto del mensaje                        | string / VNode | —                          | —           |
| type                     | tipo del mensaje                         | string         | success/warning/info/error | info        |
| iconClass                | clase personalizada para el icono, sobreescribe `type` | string         | —                          | —           |
| dangerouslyUseHTMLString | utilizado para que `message` sea tratado como cadena HTML | boolean        | —                          | false       |
| customClass              | nombre de clase personalizado para el componente Message | string         | —                          | —           |
| duration                 | muestra la duracion,en milisegundos. si se establece en 0, este no se apagara automaticamente | number         | —                          | 3000        |
| showClose                | utilizado para mostrar un boton para cerrar | boolean        | —                          | false       |
| center                   | utilizado para centrar el texto          | boolean        | —                          | false       |
| onClose                  | funcion callback ejecutada cuando se cierra con una instancia de mensaje como parametro | function       | —                          | —           |

### Metodos
`Message` y `this.$message` regresan una instancia del componente Message. Para cerrar manualmente la instancia, puede llamar al metodo `close`.
| Metodo | Descripcion                  |
| ------ | ---------------------------- |
| close  | cierra el componente Message |
