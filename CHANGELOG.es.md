## Changelog

### 2.2.1

*2018-03-02*

- Fixed Aside, Header and Footer shrinking in some layout, #9812
- Fixed Table with a `height` attribute not rendering in SSR, #9876
- Fixed expandable Table not calculating its height when a row is expanded, #9848
- Fixed `change` event not trigger when manually typing date in DateTimePicker, #9913
- Fixed Select showing its options when the input box is right-clicked, #9894 (by @openks)
- Added `tooltip-class` attribute for Slider, #9957
- Now Select will stay focused after selection, #9857 (by @Seebiscuit)
- Added `target-order` attribute for Transfer, #9960

### 2.2.0 Graphite

*2018-02-12*

#### New features
- Menu
  - Agregados los atributos  `popper-class` y `disabled` para SubMenu, #9604 #9771
  - Menu Horizontal ahora soporta SubMenu multi-capas, #9741
- Tree
  - Agregado el evento `node-contextmenu`, #9678
  - Ahora se puede personalizar el template del nodo usando scoped slot, #9686
  - Agregados los metodos  `getNode`, `remove`, `append`, `insertBefore`, `insertAfter`, `getCheckedKeys`, `getHalfCheckedNodes`, `getHalfCheckedKeys` y el evento `check`, #9718 #9730
- Transfer
  - Agregado el metodo `clearQuery`, #9753
- Select
  - Agregado el atributo `popper-append-to-body`, #9782

#### Bug fixes
- Table
  - Corregido el icono de expansión de una fila expandible que al hacer click activaba el evento `row-click`, #9654
  - Corregido el layout que no se actualizaba cuando el ancho de columna era cambiado por el usuario arrastrando, #9668
  - Corregido problema de estilo cuando la fila de resumen coexistia con columnas fijas, #9667
- Container
  - Corregido componentes del Container que no se estiraban en IE11, #9655
- Loading
  - Corregido Loading no se mostraba cuando el valor de `v-loading` era cambiado a true en el `hook`  `mounted`, #9722
- Switch
  - Corregido se disparaban los dos eventos nativos de click cuando se hacia click en el Switch, #9760

    ​

### 2.1.0 Charcoal

*2018-01-31*

#### New features
- Cascader
  - Agregados los eventos `focus` y `blur`, #9184 (by @viewweiwu)
- Table
  - El `filter-method` ahora tiene un tercer parámetro `column`, #9196 (by @liyanlong)
- DatePicker
  - Agregados los atributos `prefix-icon` y `clear-icon`, #9237 (by @AdamSGit)
  - Agregado el atributo `default-time`, #9094 (by @nighca)
  - `value-format` ahora soporta `timestamp`, #9319 (by @wacky6)
- InputNumber
  - Ahora el valor vinculado puede ser `undefined`, #9361
- Select
  - Agregado el atributo `auto-complete`, #9388
- Form
  - Agregado el atributo `disabled`, #9529
  - Agregado el atributo `validateOnRuleChange`, #8141
- Notification
  - Agregado el metodo `closeAll`, #9514

#### Bug fixes
- InputNumber
  - Arreglado el reseteo del valor cuando tiene punto decimal, #9116
- Dropdown
  - Arreglado el dropdown menu que tenia un posicionamiento incorrecto cuando la página sólo tiene una barra de desplazamiento horizontal en algunos navegadores, #9138 (by @banzhuanmei)
- Table
  - Corregido un error en el cálculo del número de columnas fijas después de que los datos de la columna cambian, #9188（by @kolesoffac）
  - Corregido el borde de la última columna de la cabecera agrupada que no se visualizaba correctamente., #9326
  - Corregido el posicionamiento incorrecto del header de la tabla en Safari, #9327
  - Corregido fila expandida colapsaba cuando cambiaban los datos de la tabla, #9462
  - Corregido renders múltiples innecesarios en algunas condiciones, #9426
  - Corregido un error de calculo en el ancho de la columna cuando `width` cambiaba en TableColumn, #9426
- Loading
  - Corregido que en algunas ocasiones el loading no se ocultaba correctamente, #9313
- DatePicker
  - Corregido el metodo `focus` que no funcionaba en modo `range`, #9437
  - Corregido si se hacia clic en el botón "now" seguia seleccionando la fecha actual aunque estuviera desactivado, #9470 (by @wacky6)
  - Corregido fijación de fechas al navegar, #9577 (by @wacky6)
- Steps
  - Corregido error de estilos en IE 11, #9454

#### Breaking changes
- Menu
  - El menú desplegable en modo `collapse` ahora se agrega directamente al `body`, de modo que es visible cuando está anidado en Aside, #9263
- Table
  - Ahora, al marcar los checkboxes en la Tabla de selección múltiple no se activa el evento `row-click`, #9467
- Loading
  - El `z-index` de la máscara de carga non-fullscreen se cambia a 2000. El `z-index` de la máscara de carga fullscreen se actualiza dinámicamente con los componentes emergentes, #9522
- Dropdown
  - Los atributos `show-timeout` y `hide-timeout` ahora solo trabajan si se dispara `hover`, #9573

### 2.0.11

*2018-01-08*

- Corregido el problema de color del borde del Select cuando está el slot `prepend` o `append`  del Input, #9089
- Corregido el parámetro  `remove-tag` de Select, #9090
- Añadido los atributos `show-timeout` y `hide-timeout` para SubMenu, #8934 (por @HugoLew)
- Corregido el estilo de Tooltip de  `show-overflow-tooltip`  que faltaba cuando Table era importada bajo demanda, #9130
- Se ha corregido el mal funcionamiento de ordenación de la columna de Table despues que  `clearSort`  era ejecutado en esa columna, #9100 (por @zEmily)
- El fichero de configuración i18n para el checo se renombra de `cz` a `cs-CZ`, #9164

### 2.0.10

*2017-12-29*

- Corregido el calculo incorrecto de la altura máxima de Table cuando fixed column y summary row coexisten, #9026
- Solucionado el estilo de color que no lo compilaba para textos vacíos en Table, #9028
- Ahora DatePicker sólo emite el evento `change` cuando el valor cambia verdaderamente, #9029 (by @remizovvv)
- Añadido atributo `tabindex` para Input, #9041 (by @dicklwm)

### 2.0.9🎄

*2017-12-24*

- Añadida la función de enganche (hook) `before-remove`  para Upload, #8788 (by @firesh)
- Arreglado el valor inicial de error que no funcionaba para FormItem, #8840
- Ahora la directiva Loading soporta nombre de clase personalizado asignando el atributo `element-loading-custom-class`, #8826 (por @earlymeme)
- Arreglado CarouselItem que se ponía invisible cuando los datos eran actualizados asincrónicamente, #8921
- Añadido el atributo `renderAfterExpand` para Tree, #8972

### 2.0.8

*2017-12-12*

- Agregada la documentacion en español
- Arreglado `show-timeout` de Dropdown que no funcionaba cuando se disparaba el click, #8734 (por @presidenten)
- Arreglado el tiempo de validacion del Form cuando se disparaba el blur, #8776
- Arreglado el evento de perdida de foco (blur) del DatePicker por rangos, #8784
- `format` de TimePicker ahora soporta AM/PM, #8620 (por @firesh)

### 2.0.7

*2017-11-29*

- Solucionado el estilo disabled en el texto de button, #8570

### 2.0.6

*2017-11-29*

- Corregido error de estilo de los iconos de ordenación de Table, #8405
- Corregido activacion para Popover cuando `trigger` es manual, #8467
- Añadidos los atributos `prefix-icon` y `suffix-icon`  para Autocomplete, #8446 (por @liyanlong)
- Añadido el atributo `separator` para Cascader, #8501
- Añadido atributo `clearable` para Input, #8509 (por @lbogdan)
- Añadido atributo `background` para Pagination, #8553

### 2.0.5

*2017-11-17*

- Solucionado regresion en 2.0.4 de Popover, Tree, Breadcrumb and Cascader, #8188 #8217 #8283
- Solucionado Fuga de memoria de la directiva clickoutside, #8168 #8225 (por @badpunman @STLighter)
- Solucionada la altura en multiple Select cuando se borra su valor, #8317 (por @luciy)
- Añadido el atributo `collapse-tags` para multiple Select  para reemplazar las tags con una línea de texto, #8190
- Solucionado el alto consumo de CPU causado por Table cuando esta oculta, #8351
- Ahora puede usar el método `doLayout` de Table para actualizar su diseño, #8351

### 2.0.4

*2017-11-10*

- Accesibilidad mejorada para Cascader, Dropdown, Message, Notification, Popover, Tooltip y Tree
- Arreglado el cambio de tamaño del Container cuando el ancho de la vista disminuye, #8042
- Arreglado Tree's `updateKeyChildren` borraba incorrectamente los nodos hijos, #8100
- Arreglado la altura de los bordes de CheckboxBotón's cuando esta anidado en un Form, #8100
- Arreglado error de análisis de los Menu's para los colores personalizados, #8153 (por @zhouyixiang)

### 2.0.3

*2017-11-03*

- Solucionado atributos `editable` and `readonly` de DatePicker de los rangos, #7922
- Corregido error de estilo de los Tabs anidados, #7941
- Corregido error de estilo del último Step de Steps verticales, #7980
- Corregido el tiempo de activación del evento `current-change`  para Pagination, #7995
- Corregido Tooltip no registrado en el Menu, #7995

### 2.0.2

*2017-10-31*

- Ahora haciendo clic con el botón derecho del ratón en los botones de InputNumber no cambiará su valor, #7817
- El metodo `validate` de Form ahora puede esperar por validaciones asíncronas antes de ejecutar su devolución de llamada, #7774 (por @Allenice)
- Corregido la selección de rango de DatePicker no funcionaba en los navegadores Chromium 53-57, #7838
- Corregido la perdida de previsualización e iconos de eliminar de Upload cuando su `list-type` es picture-card, #7857
- Añadido el atributo `sort-by` para TableColumn, #7828 (por @wangfengming)
- Corregido que a veces DatePicker muestra un número de año incorrecto al seleccionar la primera semana en modo week, #7860 (por @hh23485)
- Corregido error de estilo de icono de Step vertical, #7891
- El área hot para las flechas de nodo en Tree se expandia, #7891

### 2.0.1

*2017-10-28*

- Corregido error de estilo de RadioButton y CheckboxButton, #7793
- Corregido TimePicker no responde al desplazamiento del ratón en algunas condiciones, #7811
- Corregido estilos incompletos de algunos componentes cuando se importan bajo demanda, #7811

### 2.0.0 Carbon

*2017-10-27*

#### New features

- General
  - Un nuevo tema:  `theme-chalk`
  - Se ha mejorado la accesibilidad de los siguientes componentes: Alert, AutoComplete, Breadcrumb, Button, Checkbox, Collapse, Input, InputNumber, Menu, Progress, Radio, Rate, Slider, Switch, Upload
  - Añadido tipografías TypeScript
  - Todos los iconos existentes son rediseñados. Se han añadido algunos iconos nuevos
  - Añadida una serie de clases de utilidades basadas en puntos de ruptura que ocultan elementos cuando el tamaño del viewport cumple ciertas condiciones
  - Componentes de diseño añadidos: Container, Header, Aside, Main, Footer.
  - Ahora puede configurar los tamaños de componentes a nivel global. Al importar Element, puede añadir un objeto de configuración global con un prop `size` para configurar tamaños predeterminados para todos los componentes.
- Button
  - Atributo `round` añadido. Se usa para botones de esquinas redondas #6643
- TimeSelect
  - Ahora puede ser navegado por  `Up` y `Down`, y presionando `Enter` selecciona la hora #6023
- TimePicker
  - Ahora puede ser navegado por  `Up` y `Down`, y presionando `Enter` selecciona la hora #6050
  - Añadido `start-placeholder` y `end-placeholder`. Son placeholder's para las dos casillas de input en modo range #7169
  - Añadido el atributo `arrow-control` para hacer girar el tiempo con las flechas #7438
- Tree
  - Ahora los nodos hijo no se renderizan antes de la primera expansión #6257
  - Añadido el atributo `check-descendants`. Determina si los nodos hijo se seleccionan al seleccionar su nodo padre en modo `lazy` #6235
- Tag
  - Atributo `size` añadido #7203
- Datepicker
  - Ahora `timeFormat` puede dar formato al TimePicker cuando type está configurado en `datetimerange` #6052
  - Añadido `start-placeholder` y `end-placeholder`. Son placeholder's para las dos casillas de input en modo range #7169
  - Atributo `value-format` añadido para personalizar el formato del valor enlazado, #7367
  - Añadido el atributo `unlink-panels` para desacoplar los dos paneles de fechas al seleccionar un rango.
- MessageBox
  - Añadido el atributo `closeOnHashChange` #6043
  - Atributo `center` agregado para que el contenido pueda ser centrado #7029
  - Añadido atributo `roundButton` para mostrar Botones redondeados #7029
  - Añadido atributo  `dangerouslyUseHTMLString`. Cuando está configurado en true, el mensaje será analizado como cadena HTML<sup>*</sup> #6043
  - Añadido atributo `inputType` para asignar el tipo para el input interno, #7651
- Dialog
  - Añadidos los atributos `width`, `fullscreen`, `append-to-body`. Ahora Dialog puede ser anidado
  - Atributo `center` agregado para que el contenido pueda ser centrado #7042
  - Añadidos  `focus-after-closed`, `focus-after-open`  para mejorar la accesibilidad #6511
- ColorPicker
  - Ahora puede escribir colores en el input #6167
  - Añadidos atributos `size` y `disabled` #7026
  - Añadido atributo `popper-class` #7351
- Message
  - Ahora el color de los iconos puede ser sustituido por CSS #6207
  - Añadido atributo  `dangerouslyUseHTMLString`. Cuando está configurado en true, el mensaje será analizado como cadena HTML<sup>*</sup> #6207
  - Atributo `center` agregado para que el contenido pueda ser centrado #6875
- Notification
  - Añadido atributo `position` para configurar donde aparece Notification #6231
  - Añadido atributo `dangerouslyUseHTMLString` . Cuando está configurado en true, el mensaje será analizado como cadena HTML<sup>*</sup> #6231
  - Añadido el atributo `showClose` para ocultar el botón de cierre #6402
- Rate
  - Añadido el atributo `show-score` para determinar si la puntuación actual se muestra #6295
- Tabs
  - Añadido el atributo `tab-position`  #6096
- Radio
  - Añadidos los atributos `border` y `size`  #6690
- Checkbox
  - Añadidos los atributos `border` y `size`  #6690
- Alert
  - Atributo `center` agregado para que el contenido pueda ser centrado #6876
- Menu
  - Añadidos los atributos  `background-color`, `text-color` y `active-text-color` #7064
  - Añadidos los methods  `open` and `close` para abrir y cerrar los SubMenu con programación, #7412
- Form
  - Añadido el atributo  `inline-message`  para determinar si el mensaje de validación se muestra inline #7032
  - Añadido el atributo `status-icon` para mostrar un icono de retroalimentación cuando se valida #7032
  - Form y FormItem ahora tienen un atributo `size`. Los componentes internos heredarán este tamaño si no se especifica en ellos mismos, #7428
  - Método `validate` devolverá ahora una promesa si se omite la llamada de retorno, #7405
  - Añadido método `clearValidate` para limpiar los resultados de las validaciones de todos los form items, #7623
- Input
  - Añadido slots con nombres `suffix` y `prefix` y atributos `suffixIcon` y `prefixIcon`  para añadir contenido dentro del input #7032
- Breadcrumb
  - Añadido el atributo `separator-class` para dar soporte a los iconos como separadores de items #7203
- Steps
  - Añadido atributo `simple` para activar Steps de estilo sencillo #7274
- Pagination
  - Añadidos los atributos `prev-text` y `next-text` para personalizar los textos de la página anterior y de la página siguiente #7005
- Loading
  - Ahora usted puede personalizar el ícono del spinner y el color de fondo con los props  `spinner` y `background` , #7390
- Autocomplete
  - Añadido atributo `debounce`, #7413
- Upload
  - Añadidos los atributos `limit` and `on-exceed` para limitar la cantidad de archivos, #7405
- DateTimePicker
  - Añadido el atributo `time-arrow-control` para activar `arrow-control` del TimePicker anidado, #7438
- Layout
  - Añadido un nuevo breakpoint `xl` para viewport más ancho que 1920px
- Table
  - Añadido el atributo `span-method` para combinar celdas
  - Añadido el método `clearSort` para borrar la clasificación programáticamente
  - Añadido el método `clearFilter` para limpiar el filtro de forma programática
  - Para las filas ampliables, cuando se amplía una fila, se añadirá una clase `.expanded` a su lista de clases, para que pueda personalizar su estilo.
  - Atributo de `size` añadido
  - Añadido el método `toggleRowExpansion` para expandir o contraer filas expandibles programáticamente.
  - Añadido el atributo `cell-class-name` para asignar el nombre de la clase para las celdas
  - Añadido atributo `cell-style` para dar estilo a las celdas
  - Añadido atributo `header-row-class-name` para asignar el nombre de clase para las filas de encabezado.
  - Añadido un atributo `header-row-style` para el estilo de encabezado
  - Añadido el atributo `header-cell-class-name` para asignar el nombre de la clase para las celdas de encabezado.
  - Añadido el atributo `header-cell-style` a las celdas de encabezado de estilo
  - El atributo prop de TableColumn ahora acepta las notaciones  `object[key]`
  - Atributo de `index` añadido para TableColumn para personalizar índices de filas
- Select
  - Añadido el atributo `reserve-keyword` para reservar la palabra clave de búsqueda actual después de seleccionar una opción.

#### Bug fixes

- DatePicker
  -  Arreglado  `v-model`  que devolvia el segundo día de la semana seleccionada en modo week #6038
  -  Arreglado el primer input comenzaba borrado con el type `daterange`  #6021
- DateTimePicker
  - Arreglado DateTimePicker y TimePicker que se afectaban entre sí cuando se seleccionaban #6090
  - Arreglado la hora y el segundo podian estar más allá del límite al seleccionar el tiempo #6076
- TimePicker
  - Arreglado `v-model` que no se actualizaba correctamente cuando no tenia el foco #6023
- Dialog
  - Arreglado textos que tenian bordes borrosos al abrir y cerrar dropdowns anidados #6088
- Select
  - Rendimiento mejorado. Ahora Vue dev-tool no se bloqueará cuando un gran número de Selects sean destruidos #6151
- Table
  - Corregido un bug de Table permanecía oculto cuando su elemento padre tenia el atributo   `display: none`
  - Arreglado Table ahora amplia su ancho cuando el elemento padre tiene `display: flex`
  - Arreglado un bug que corregía las columnas de una tabla con slot con nombre  `append`   que  desaparecia cuando los datos eran recuperados dinámicamente.
  - Arreglado el atributo `expand-row-keys` que no funcionan con el valor inicial
  - Fallo del filtro corregido al actualizar los datos
  - Se ha corregido un error de cálculo de la disposición de columnas fijas con cabeceras agrupadas.
  - Corregido un error de `max-height` dinámico
  - Corregidos algunos errores de cálculo de estilo

#### Breaking changes

- General
  - Eliminado `theme-default`
  - Compatible con Vue 2.5.2+ e IE 10+
  - Evento `change`  de componentes del formulario y evento `current-change` de Pagination ahora sólo se activa en la interacción del usuario.
  - El atributo `size` del botón y los componentes del formulario aceptan ahora los tamaños `medium`, `small` y `mini`.
  - Para facilitar el uso de iconos de terceros, los atributos `icon` de Button y Steps y los atributos  `prefix-icon` y `suffix-icon`  del input ahora requieren un nombre de clase completo.
- Dialog
  - Atributo `size` eliminado. Ahora el tamaño de Dialog se puede configurar con  `width` y `fullscreen`
  - Ahora la visibilidad del Diálogo no puede ser controlada por `v-model`
- Rate
  - `text-template` a sido renombrado a `score-template`
- Dropdown
  - `menu-align` a sido renombrado a `placement`. Ahora soporta más posiciones
- Transfer
  - `footer-format` a sido renombrado a `format`
- Switch
  - Los atributos que comienzan con `on*` serán analizados en eventos en JSX, haciendo que todos los atributos `on*` de Switch no puedan trabajar en JSX. Por lo tanto, los atributos `on*` se renombran a `active-*`, y por consiguiente los atributos `off-*` se renombran a `inactivado-*`. Este cambio afecta a los siguientes atributos:  `on-icon-class`, `off-icon-class`, `on-text`, `off-text`, `on-color`, `off-color`, `on-value`, `off-value`.
  - Los atributos `active-text` y `inactive-text`  ahora no tienen valores por defecto.
- Tag
  - El atributo type acepta ahora  `success`, `info`, `warning` y `danger`
- Menu
  - Atributo `theme` eliminado. El color de Menu se puede configurar utilizando  `background-color`, `text-color` y `active-text-color`
- Input
  - Atributo `icon` eliminado. Ahora el icono del sufijo puede configurarse usando el atributo  `suffix-icon`  o el slot con nombre `suffix`.
  - Eliminado el atributo `on-icon-click` y el evento `click`. Ahora para añadir el manejador de clics en los iconos, por favor use los slots con nombre. 
  - El evento `change` se comporta ahora como el nativo, que se activa sólo en la perdida del foco o presionando enter. Si necesita responder a las entradas de usuario en tiempo real, puede utilizar el evento `input`.
- Autocomplete
  - Atributo `custom-item` eliminado. Ahora la plantilla de sugerencias del input se puede personalizar utilizando `scoped slot`
  - Atributo  `props`  eliminado. Ahora puede utilizar el atributo `value-key` para designar el nombre de la clave del objeto de sugerencia del input para su visualización.
- Steps
  - Atributo `center` eliminado
  - Ahora Steps llenara su contenedor padre por defecto
- DatePicker
  - Los parámetros del evento `change` de DatePicker son ahora el valor vinculante en sí mismo. Su formato es controlado por `value-format`
- Table
  - Soporte eliminado para personalizar la plantilla de columnas mediante `inline-template`
  - `sort-method` ahora se alinea con `Array.sort`. Debería devolver un número en lugar de un booleano
  - El slot `append`  se desplazo fuera del elemento `tbody` para evitar múltiples renderizados.
  - Evento `expand` se renombro a `expand-change`
  - Los parametros de los métodos  `row-class-name` y `row-style` son ahora un objeto

# #

<i><sup>*</sup> El procesamiento dinámico de HTML arbitrario en su sitio web puede ser muy peligroso porque puede conducir fácilmente a [ataques XSS](https://en.wikipedia.org/wiki/Cross-site_scripting). Por lo tanto, cuando `dangerouslyUseHTMLString` está encendido, por favor asegúrese de que el contenido de `message` es confiable, y **nunca** asigne el `message` al contenido proporcionado por el usuario.</i>