## Changelog

### 2.15.12

*2022-11-16*

#### Bug fixes
- Statistic：
  - Fixed the thousandth bit bug (#22252 by @webvs2)
- Other
  - Fix 2.15.11 element-theme-chalk publish fail bug

### 2.15.11

*2022-11-15*

#### Bug fixes
- Docs
  - Fix Radio docs (#22178 by @bchen1029) 
  - Fix Progress docs
#### Optimization
- I18n
  - Update translation of Malaysian (#22185 by @z4q)
  - Update translation of Norwegian (#22145 by @Barsnes)
- Progress
  - Add defineBackColor and textColor prop (#22089 by @lm312)
- Statistics
  - Add new component Statistics (#22159 by @webvs2)
- Other
  - Add Web Types to improve code assistance in WebStorm IDE and other JetBrains IDEs (#22135 by @piotrtomiak)

### 2.15.10

*2022-09-13*

#### Bug fixes

- DatePicker
  - Fix props placement error (#21908 by @lqzhgood)
- Loading
  - Fix sticky DOM error (#22087 by @zzjjhh001)
- Docs
  - Fix Popover docs (#22083 by @lm312)
  - Fix Skeleton docs (#22092 by @lm312)
  - Fix DatePicker docs (#21970 by @guojiongwei)
- Tree: 
  - fix lazy-load default check problem (#21934 by @kiss-yu)

#### Optimization

- I18n
  - Add translation of Sinhalese (#21936 by @sayuri-gi)
  - Update translation of Spanish (#21924 by @jcardus)
  - Add translation of Malaysian (#22028 by @iorange0411)
  - Update translation of Swahili (#21904 by @Cholowao)
- Utils
  - update date-util.js (#22099 by @Due07)  
- DatePicker
  - add months And years type (#21918 by @akiko123456)

### 2.15.9

*2022-06-02*

#### Bug fixes

- Table
  - Fix Tabl-header shake bug (#21863 by @bofeng)
  - Fix when partial import  show `el-checkbox not imported` error (#21828 by @bobohuochai)
- FormItem
  - Fix  change rules  verification not reset bug (#21892 by @bofeng)
- Cascader
  - Fix change options unexpect error (#21759 by @louiebb)
- Docs
  - Fix Popover docs (#21843 by @lod61)
  - Fix Calendar docs (#21814 by @GoJam11)
  - Fix TimePicker docs (#21803 by @Alanscut)
  - Fix DatePicker docs (#21877 by @Nirvanaiu)
- Other
  - Fix codepen display bug (#21863 by @bofeng)

#### Optimization

- I18n
  - Add translation of Swahili (#21895 by @quilltouch)
- Chore
  - Use launch-editor-middleware in dev environment (#21633 by @polemices)
- DatePicker & Cascader
  - Optimize the dropdown animation direction (#21806 by @XivLaw)
- Tooltip
  - Optimize `getFirstElement` code (#21886 by @zhankang)
- Input
  - Optimize scss code (#21558 by @cheese-git)

### 2.15.8

*2022-04-12*

#### Bug fixes

- Drawer
  - Fix appendToBody failure problem (#21264 by @cs1707)
- Switch
  - Fix toggling value problem(#19473 by @EdwinBetanc0urt)
- Docs
  - Fix input docs (#21723 by @justforuse)
  - Fix DatePicker docs (#21663 by @justforuse)
  - Fix Skeleton docs (#21601 by @yanwydxf)
- Others
  - Fix vue version (#21736 by @ckvv)

#### Optimization

- I18n
  - add translation of Azerbaijani (#21012 by @ricardotondello)
  - update translation of Slovenian (#21729 by @patik123)
  - update translation of Slovak (#21711 by @sjaustirni )
  - add translation of Icelandic (#21709 by @aronhr)
  - add translation of Bengali (#21485 by @llwwtt)

#### Others

- Due to compatibility considerations, the PR on node-sass (#21019 by @linxsbox) of 2.15.7 release has been withdrawn and will be published in an appropriate version after re-evaluation.

### 2.15.7

*2021-11-18*

#### Bug fixes

- Select
  - fix click icon triggering dropdown (#21314 by @dennyak47)
  - fix keydown event when composition (#21336 by @bchen1029)
- Badge
  - fix type class when is-dot (#21308 by @adaex)
- Form
  - validate method reject error info (#21374 by @cs1707)
- Table
  - fix resizeObserver loop limit exceeded (#21255 by @tomieric)
  - fix toggleAllSelection bug when table is empty (#21456 by @cs1707)
  - optimize performance (#21330 by @cs1707)
- Button
  - fix disabled priority (#21375 by @cs1707)
- Descriptions
  - fix label slot bug (#21462 by @cs1707)
- SASS
  - replace node-sass with dart-sass (#21019 by @linxsbox)
- Docs
  - fix skeleton typos (#21408 by @zhhbstudio)

### 2.15.6

*2021-09-02*

#### Bug fixes

- Cascader
  - fix a bug that makes the browser jitter in zoom mode (#21207 by @cs1707)
  - optimize performance (#21231 by @cs1707)
- Select
  - fix long text overflow in multiple mode (#21237 by @cs1707)
- Dropdown
  - add disabled property (#21235 by @mshioda)
- Radio
  - fix checked state when browser go back (#21250 by @cs1707)
- Descriptions
  - fix type declaration (#21265 by @adaex)
  - avoid table style conflict (#21254 by @adaex)
- Drawer
  - fix append to body (#21264 by @cs1707)
- Local
  - fix italian mistake (#21012 by @ricardotondello)

### 2.15.5

*2021-08-04*

#### Bug fixes

- Select
  - fix resetInputHeight (#21201 by @cs1707)

### 2.15.4

*2021-08-03*

#### New features

- Descriptions 
  - add description component (#21129 by @cs1707)
- Result 
  - add result component (#21171 by @cs1707)

#### Bug fixes

- Utils 
  - fix isScroll (#21098 by @canvascat)
- Translation 
  - update it.js (#21133 by @bliberi)
- RadioGroup 
  - fix RadioGroup used in component causes exception #17908 (#20783 by @lceric)
- Message 
  - fix message[type] (#21088 by @cs1707)
- Carousel 
  - reset the timer when setActiveItem method is called (#20846 by @Nekojita1)
- Cascader 
  - fix emitPath (#21185 by @cs1707)
- Select 
  - fix select filterable bug (#17494 by @profore)
  - fix a bug that makes the browser jitter in zoom mode (#21197 by @cs1707)
- Tree 
  - fix insertChild (#21194 by @cs1707)

### 2.15.3

*2021-06-29*

#### New features

- Skeleton
  - add skeleton component (#21038 by @cs1707)
- Empty
  - add empty component (#21080 by @cs1707)

#### Bug fixes

- Local
  - fix week translations for hr locale (#21040 by @cs1707)
- Table
  - fix lazy load data (#21041 by @cs1707)
- Docs
  - fix form hide-required-asterisk description (#21045 by @cs1707)
- Drawer:
  - fix destroy (#20715 by @zj9495)
- Row
  - fix align top (#20963 by @cs1707)
- Select
  - fix the bug when the value is Boolean (#21052 by @cs1707)
- Calendar
  - fix first-day-of-week (#21057 by @cs1707)
- Utils
  - fix isScroll (#21065 by @cs1707)
  - fix(utils.dom by @fw6)
- TypeScript
  - add CascaderPanel export type (#21070 by @qige2016)
  - add spinner.d.ts (#21090 by @qige2016)
  
### 2.15.2

*2021-05-28*

#### Bug fixes

- Image
  - fix z-index and keydown event add stopPropagation (#20859 by @cs1707)
- Input
  - fix show password cursor (#20870 by @cs1707)
  - fix show password icon in edge (#20902 by @cs1707)
- Carousel
  - fix interval and scale bug (#20931 by @cs1707)
- Cascader
  - fix delete tag bug (#20939 by @cs1707)
- Drawer
  - add overflow auto (#20948 by @cs1707)
- Others
  - fix isFunction (#20912 by @cs1707)

### 2.15.1

*2021-02-23*

#### Bug fixes

- Drawer
  - bugfix (by @cs1707)
- Image
  - fix incorrect image object fit ratio in IE (#19583 by @charlie0228)
- Cascader
  - fix cascader panel active path (#20730 by @cs1707)
- Calendar 
  - fix calendar component i18n bug (#20758 by @iamkun)
- ColorPicker
  - fix bugs (by @UxieVerity)

#### Optimization

- Doc
  - update Axure resource v2.1.0 (by @iamkun)
### 2.15.0

*2021-01-15*

#### Bug fixes

- Select
  - Fix placeholder i18n bug (#17644 by @nzh63)
- Popconfirm
  - Popconfirm i18n bug by @iamkun
- Drawer
  - Fix focus bug (#20626 by @cs1707)
- Image
  - Preview optimization (#20652 by @cs1707)

#### Optimization

- Doc
  - Fix typo in french translation of datetime-picker.md (#20543 by @lonk)
  - Add format attribute description to the progress component (#20641 by @cs1707)

### 2.14.1

*2020-11-11*

#### Bug fixes

- Popover
  - Compatible with Vue 2.6 new v-slot syntax (#20424 by @iamkun)

#### Optimization

- I18n
  - Update Arabic translation (#20202 by @elkattan)
  - Update Uighur translation (#20177 by @IlhamTahir)

### 2.14.0

*2020-10-29*

#### Breaking changes

- Popconfirm
  - Rename event name to `confirm`, `cancel` (#20240 by @hugiron)

#### Bug fixes

- Progress
  - Fix attribute error (#19985 by @Caaalabash)

#### Optimization

- I18n
  - Update Russian translation (#19451 by @yangirov)
  - Update Khmer translation (#20077 by @Sovai)
  - Update Ukrainian translation (#20344 by @MammutAlex)

### 2.13.2

*2020-05-18*

#### Corrección de errores

- Autocomplete
  - Arreglado el error cuando se daba el evento change (#19200 by @sxzz)
- Image
  - Actualizado el estado de error  (#19194 by @lhx6538665)

#### Optimización

- I18n
  - Actualización de la traducción del popconfirm al Ruso (#19220 by @Opppex)
  - Actualización  de la traducción al vi (#19244 by @quangln2810)
  - Actualización de la traducción al Catalán y al Español (#19296 by @Ismaaa)
  - Actualización de la traducción al Indonesio (#19320) by @therour)
  - Actualización de la traducción al Portugués Brasileño (#19374 by @diegomengarda)


### 2.13.1

*2020-04-13*

#### Nuevas características
- Autocomplete
  - Agregado el evento change (#17913 by @sxzz)

#### Corrección de errores

- Autocomplete
  - Solucionado el error de la sugerencia en textarea (#18478 by @Roojay)
- Carousel
  - Arreglado el error de escritura de la consola (#18264 by @IceFox)
- Image
  - Solucionado el error de que no se mostraba el preview si no existía el src  (#18975) (#19130 by @luckyCao)
  - Arreglado el problema de que el shortcut key no funcionaba la segunda vez (#18983) (#19156 by @luckyCao)
  - No muestra la imagen cuando preview es falso (#18967 by @inooNgt)
- Transfer
  - Corregida la altura (line-height) incorrecta del primer elemento del el-transfer cuando era usado con el-form-item (#18917 by @Hanx)
- InputNumber
  - Calculo correcto de inputNumberDisabled (#18439 by @ashuser-pendo)
- Tarea
  - Se quito la introducción del index (#19155 by @iamkun)
- Documentación
  - Actualización de la documentación de Popconfirm (#18324 by @iamkun)
  - Arreglado el error tipográfico de la documentación de Fix step-strictly (#18705 by @dream2023)
  - Corregido un type error en la documentación de steps component (#17555 by @haoranyu)

### 2.13.0

*2019-11-26*

#### Nuevas características

- Popconfirm
  - Agregado componente popconfirm (#17548 by @iamkun)

#### Corrección de errores

- BackTop
  - Se usa cubic bezier para el scroll (by @lon)
- DatePicker
  - Arreglado el fallo cuando solo se elegía fecha mínima en un rango de fechas (#17191 by @smk0621)
- Select
  - Arreglado los casos de test del select (by @msidolphin)
- Tree
  - Agregado font-size para el estilo del texto cuando esta vacío el tree (#17094 by @spengjie)
- Table
  - La cabecera de la columna puede modificarse (#17291 by @ziyoung)
  - Se actualizo el estilo de la cabecera de la tabla de la celda  (#17284 by @ziyoung)
  - Se soluciono el problema de height de la cabecera de la tabla después de un filtro (#17348 by @ziyoung)
  - Corregido el estilo de la fila que con display no funcionaba (#17002 by @a631807682)
  - Arreglado que la cabecera de la tabla no se mostraba (#17341 by @ziyoung)
- Calendar
  - La importación de el-button y el-button-group (#17376 by @masongzhi)
- MessageBox
  - Corregido el error de posición del icono (#17410 by @nullptru)
- TimePicker
  - Establecido el rango de selección después de hacer scroll (#16868 by @mattheyan)
- Message
  - Corregido el offsetHeight al cerrar la instancia（#17564） (#17852 by @gzwgq222)
- Form
  - La función de llamada de validateField es opcional (#17314 by @CarterLi)
- Cascader
  - Corregida la compatibilidad con TypeScript 3.7 (#17881 by @CarterLi)
- Menu
  - Corregido el error de la ruta de navegación duplicada cuando se usaba vue-router@^3.1.0 (#17269 by @iamkun)
- Dropdown
  - Actualización del tipo de archivo (#17550 by @iamkun)
- Progress
  - Agregada la prop strokeLinecap (#17552 by @iamkun)
- InfiniteScroll
  - Salto del disparo de evento en elementos invisibles (#17553 by @iamkun)
- Image
  - Comportamiento perfecto de personalización de imágenes (#16985 by @luckyCao)
  - Corregida la pagina cuando se hace preview de imágenes grandes (#16796 by @luckyCao)
- Drawer 
  - Corregido el fallo del append-to-body del drawer que no funcionaba (#16953 by @JeremyWuuuuu)
- Select
  - Corregido:  ahora muestra el tag o el valor vacío (17199 by @luckyCao)
- Scrollbar
  - Arreglado el ancho del scroll en FireFox  (#18091 by @iamkun)
  
#### Optimización

- I18n
  - Actualizado sv-SE.js (#17926 by @FOLLGAD)
  - Actualizada la documentación para francés para el componente avatar (#17762 by @blombard)
- Docs
  - Arreglada la typografia de time-select (#17250 by @wacky6)
  - Arreglado en Drawer, ahora el atributo value acepta tipografías en español (#17122 by @haoranyu)
  - Actualización del Changelog 2.12.0 al español (#17364 by @Gonzalo2310)
  - Arreglo de la tipografía del Changelog (#17874 by @renlixin)
  - Arreglada la demo de Loading (#17862 by @MBearo)
  - Agregado el evento input en los inputs de Table (#18061 by @zhouxinyong)
  - Eliminado el evento repetitivo change de los input (#18085 by @zhouxinyong)

### 2.12.0

*2019-08-29*

#### Nuevas características

- Popover
  - Agregada la prop close-delay  (#16671 by @LachlanStuart)
- Theme
  - Añadida la extensión Chrome: Element Theme Extensión (#16686 by @iamkun)
- Icon
  - Añadido font-display a la declaración @font-face (#16805 by @iamfaizalandyka)

#### Corrección de errores

- Carousel
  - Corregido el valor emitido por onChange (#16705 by @iamkun)
- Notification
  - Corrección de la modificación del objeto de opción entrante (#16704 by @iamkun)
- DatePicker
  - Agregado el className para la opción picker (#16632 by @iamkun)
- DateTimePicker
  - Corrección del  time-spinner que no se desplazaba a la posición correcta (#16854 by @jesse-li)
- Table
  - Evitar la propagación del click después del arrastre (#16850 by @ziyoung)
  - Corregido una error en chrome que se producía cuando el css de thead tenia display: none  (#16956 by @luckyCao)
  - Corregida la altura incorrecta de los bloques vacíos  (#16861 by @ziyoung)
  - No hay lanzamiento de error cuando se llama a toggleExpansion (#16304 by @yyjjqq94)
  - No se lanza el evento sort-change cuando esta montado (#17113 by @a631807682)
  - Corregido que el setCurrentRow no borraba la linea resaltada (#16879 by @ziyoung)
  - Corregido que expand-row-keys no funcionaba cuando los datos eran cargados asincrónicamente (#16899 by @ziyoung)
  - Establecido toggleAllSelection como propiedad instanciada (#17137 by @ziyoung)
- Tree
  - Corregida la distancia entre label y checkbox (#16799 by @Hazlank)
- Tabs
  - Corregida la posición incorrecta de los item's del Tab (#16520 by @victorting)
  - Corregido el error de que la pestaña activada estaba fuera del rango visual (#17033 by @nullptru)
- Calendar
  - Arreglado el problema de los días de la semana con i18n (#16772 by @ubitoffee)
  - Corregido el error de localización (#17208 by @iamkun)
- Cascader
  - Corregido un error de visualización del CascaderPanel  (#16716 by @zhangHongEn)
  - Corregido el problema de disable status y close button (#16224 by @yyjjqq94)
- Input
  - Arreglado el evento de composición coreana (#15069 by @MoonHyuk)
  - Arreglado el evento click del botón clear que no se lanzaba cuando se usaba v-loading (#16576 by @a631807682)
- Select
  - No cambiaba el dropdown cuando se filtraba (#17205 by @luckyCao)
- Transfer
  - Arreglado un error de estilo (#17206 by @iamkun)
- Dialog
  - Actualizada las variables Sass  (#16365 by @haoranyu)
- RadioGroup
  - No produce HTML invalido en la tabla si el atributo 'is' es especificado (#17070 by @nullptru)
- Divider
  - Soporta clases personalizadas (#17078 by @island205)

#### Optimización

- Checkbox
  - Mejorada la experiencia del lector de pantalla (#16575 by @tylertrotter)
- Docs
  - Actualizado changelog (#16773 by @SimonaliaChen)
  - Actualizada la guía de contribución (#14800 by @sinchang)
  - Arreglado typo en la documentación de Drawer (#16848 by @winkay)
  - Actualizado el tema personalizado (#16983 by @iamkun)
  - Agregada traducción en Esperanto (#16955 by @maxkoryukov)
  - Actualizada la documentación de input-number sobre el evento change (#16316 by @luckyCao)
  - Actualizada la documentación en Español 2.11.1 (#16961 by @Gonzalo2310)
- I18n
  - Eliminada la traducción de 'year' en idioma Catalán como en otros idiomas (#14722 by @oscaralbareda)
  - Actualizado el changelog de las versiones 2.10.0 y 2.10.1 en Español (#16548 by @Gonzalo2310)
  - Actualizado ar.js (#16653 by @l3op)
- Test
  - Corregir error ortográfico (#16672 by @boomler)
  - Refractorizacion del unit test para usar data-uri (#16847 by @a631807682)
- Types
  - Corrección del tipo httprequest (#16633 by @luckyCao)

### 2.11.1

*2019-07-26*

#### Corrección de errores

- Image
  - Corregido el componente Image para compatibilidad SSR (#16737 by @luckyCao)
- Tarea
  - Actualizado para compatibilidad con dart-sass by @LewisChennnnn)

### 2.11.0

*2019-07-25*

#### Nuevas características

- Drawer
  - Agregado componente drawer (#16577 by @JeremyWuuuuu)

#### Corrección de errores

- Checkbox
  - Mejora del selector css (#16006 by @Hazlank)
- Tree
  - Establecido el el-tree como genérico (#15934 by @JeremyWuuuuu)
  - Establecido la prop  isCurrent como False (#15870 by @kkkisme)
- Dropdown
  - Corregido el color predeterminado de los split-button (#15931 by @JuniorTour)
- Cascader
  - Corregido un problema de actualización cuando el nivel 1 de children estaba vació (#16399 by @luckyCao)
  - Ahora se muestra correctamente header cuando range esta especificado (#16354 by @ziyoung)
  - Agregados valores por defecto cuando lazy es true (#16420 by @luckyCao)
  - Solucionado problemas de visualización (#15935 by @junyiz)
  - Expuestos los getCheckedNodes y corrección de errores en el cambio de opciones (#16709 by @SimonaliaChen)
- Submenu
  - Corregida la prop append-to-body (#16289 by @a631807682)
- Table 
  - Arreglado un fallo en la actualizacion de los datos de tree table (#16481 by @island205)
- Select
  - Arreglado un problema de fuga de memoria (#16463 by @island205)
- InfiniteScroll
  - Actualizada la nomenclatura y la documentacion (#16698 by @iamkun)
- Avatar
  - Arreglado que la imagen no se centraba verticalmente (#16489 by @luckyCao)
- Dialog
  - Agregado el atributo destroyOnClosee (#16455 by @ziyoung)
- Image
  - Agregada la función de vista previa grande de imágenes (#16333 by @luckyCao)

#### Optimización

- Documentación
  - Arreglada la demo de dropdown (#16193 by @webxmsj)
  - Corrección de errores tipográficos en las tablas de documentos (#15971 by @howiefh)
- I18n
  - Actualizada la traduccion del lenguage Thai (#16689 by @ponkrit)
- Tareas
  - Actualizada la api base del tema (#16607 by @iamkun)
  - Añadido token del formulario del tema (#16699 by @iamkun)
  - Marcar todos los accesos internos del usuario (#16609 by @iamkun)
  - Corrección del error de anclaje del documento (#16692 by @iamkun)

### 2.10.1

*2019-07-02*

#### Corrección de errores


- Table
  - Corregido el icono de ordenación  (#15439 by @bezany)
  - Corregidas las rupturas del layout cuando existía un slot (#16332 by @ziyoung)
  - Corregido showOverflowTooltip no era reactivo (#16295 by @a631807682)
  - Registrada la scrollbar en el panel de filtro (#16246 by @ziyoung)
- Tareas
  - Arreglada la documentación 2.9 (#16233 by @ziyoung)
  - Corregido el índice de la página de introducción del tema en inglés que tenia un error en los estilos css  (#16254 by @iamkun)

#### Optimización

- Tag
  - Compatible con IE (#16334 by @ziyoung)
- Tarea
  - Actualizada la imagen QR de Dingtalk Group (#16236 by @iamkun)
- Doc
  - Actualizada la documentación online del theme roller (#16244 by @iamkun)

### 2.10.0

*2019-06-25*

#### Nuevas características

- I18n
  - Añadido idioma Uzbeko (#15796 by @ogabek96)
- Calendar
  - Añadido el atributo del primer día de la semana (#16047 by @ziyoung)
- Avatar
  - Agregado componente Avatar (#16144 by @luckyCao)
- Upload:
  - Añade capacidad para personalizar la plantilla de miniaturas (#13192 by @victorzhuk)

#### Corrección de errores

- Tree
  - No resaltar el nodo de árbol cuando currentKey es nulo (#15668 by @yyjjqq94)
  - Solucionado el problema #15538 causado por dos Tree que compartian los mismos datos.(#15615 by @VanMess)
- Upload
  - Actualizado el tipo del parámetro `fileList`  (#15716 by @underfin)
- Table
  - Solucionado que el icono de loading no se mostraba (#15868 by @ziyoung)
  - Corregido el color de fondo de una tabla compleja cuando se desplaza el cursor (#15504 by @cnlon)
  - Corregido current-row-key y el bug del evento select (#15983 by @ziyoung)
  - Height acepta más unidades (#16013 by @ziyoung)
  - Solucionado reserve-selection no funcionaba (#16135 by @ziyoung)
- Docs
  - Corregido el tipo de atributo Divider en zh-cn  (#15889 by @haoranyu)
  - Se elimina una etiqueta html de cierre incorrecta y el código de bloque vacío (#16194 por @Alexeykhr)
- Menu
  - Corregido un error oculto en el submenú después de añadir popper-append-to-body (#15391 by @PanJiaChen)
- Select
  - Arreglado initialInputHeight (#15989 by @yyjjqq94)
  - Corregido el comportamiento de default-first-option cuando se escribe chino (#15431 by @VanMess)
  - Corregido el problema de importación doble (#16215 by @lengband)
- Message
  - Añadida la opción type def para offset (#16027 by @matjaz)
- Timeline
  - Arreglado reverso roto (#16091 by @ziyoung)
- Slider
  - Corregido #15545 agregando explicaciones sobre el evento "input" en chino (#15588 by @VanMess)
- InfiniteScroll
  - Actualización del nombre del paquete (#16125 by @iamkun)
- MessageBox
  - Arreglado el bug de distinguishCancelAndClose, la acción no era la misma que la documentada (#15438 by @qingdengyue)
- PopupManager
  - Arreglado que el z-index no podía ser reescrito la primera vez que se usaba (#15738 by @luckyCao)
- Tarea
  - Actualizado el test del api host  (#15807 by @iamkun)

#### Optimizacion

- Tree
  - Modificar las condiciones del bucle para mejorar el rendimiento (#15699 by @KingJeason)
- Theme
  - Refinado  GA track & actualizado el link del pie que lleva al theme roller online (#16007 by @island205)
- Badge
  - Actualizado el check del prop badge (#16198 by @iamkun)
- Avatar
  - Actualizado el var del config del theme (#16202 by @luckyCao)
- I18n
  - Actualizada la traducción del portugués (#15776 by @gigioSouza)
  - Actualizada la traducción del idioma Farsi (#15881 by @pamenary)
- Docs
  - Agregado componentes faltantes en el quick start (#16063 by @pape2016)
  - Actualizada la traducción al francés (#16208 by @blombard)
  - Agregada descripción $slots.default (#15444 by @Alexeykhr)
  - Actualizada la Doc en Español 2.9.1 (#15840 by @Gonzalo2310)
  - Corrección de errores ortográficos en fr (#15837 by @blombard)
  - Actualizado el changelog 2.9.2 en español (#16185 by @Gonzalo2310)

#### Breaking changes

- Form
  - Eliminado el estado success (#16159 by @ziyoung)

### 2.9.2

*2019-06-21*

#### Corrección de errores

- Tareas
  - Solucionadas las definiciones de archivos TS (#15805 by @NateScarlet)

### 2.9.1

*2019-05-30*

#### Nuevas características

- Table
  - Los metodos tree-props，default-expand-all, expand-row-keys, toggle-row-expansion y el evento expand-change son compatibles con Tree Table (#15709 by @ziyoung)

#### Corrección de errores

- Table
  - Corrección de algunos errores (#15709 by @ziyoung)
- Theme
  - Actualización del host de la api (#15784 by @iamkun)

#### Optimización

- Tarea
  - Una actualización del tipo InfiniteScroll (#15794 by @iamkun)

### 2.9.0

*2019-05-30*

#### Nuevas características

- Backtop
  - Añadido componente Backtop (#15541 by @iamkun)
- PageHeader
  - Añadido el componente PageHeader (#15714 by @ziyoung)
- InfiniteScroll
  - Añadida la directiva InfiniteScroll (#15567 by @iamkun)
- Cascader
  - Agregado modo múltiple y método de filtro (#15611 by @SimonaliaChen)
- Message
  - Visualización en modo stack (#15639 by @island205)
- Tag
  - Añadido prop effect (#15725 by @SimonaliaChen)
- Tabs
  - Alinea el título a la izquierda cuando el tipo es card (#15695 by @luckyCao)
- DatePicker
  - Soporta cadenas literales (#15525 by island205)
- Image
  - Añadido soporte para transmitir attrs y listeners (#15578 by @VanMess)
- Theme
  - Añadido fondo al popup (#15412 by @iamkun)
- Tarea
  - Actualizada la nueva página de índice 2.9.0 (#15682 by @iamkun)

#### Corrección de errores

- Table
  - Corregido el comportamiento de cambio de orden cuando la condición de orden es nula (#15012 by @joelxr)
- Image
  - Corregido ssr y compatibilidad de ajuste de objetos (#15346 by @SimonaliaChen)
- Input
  - Corregido estilo show-word-count en el-form (#15359 by @lvjiaxuan)
  - Corregido el icono de borrar que no estaba centrado (#15354 by @YiiGuxing)
- Calendar
  - Corregido día de la semana no correcto cuando el día es domingo (#15399 by @qingdengyue)
  - Corregido error de desaparición de octubre (#15394 by @qingdengyue)
- Tabs
  - Corrección de la pestaña básica anidada en el error de relleno de la pestaña de la tarjeta (#15461 by @SimonaliaChen)
- Tag
  - Corregido problema de propagación de stop (#15150 by @infjer)
- Form
  - Corregido el error de grupo de entrada dentro de la altura del elemento de formulario (#15457 by @SimonaliaChen)
  - Solucionado el problema de resetFields (15181 by @luckyCao)
- Tooltip
  - Corregido tabindex personalizado no funcionaba (#15619 by @SimonaliaChen )
- Link
  - Arreglada la clase de estilo del icono de enlace (#15752 by @iamkun)
- Select
  - Revertir el valor establecido a nulo cuando se borra (#15447 by @iamkun)
- Loading
  - Corregido dom no cambia cuando el estado de carga cambia rápidamente (#15123 by @FAKER-A)
- Switch
  - Etiqueta con el evento de repetición del interruptor (#15178 by @FAKER-A)
- Slider
  - Arreglado el problema de estilo al hacer clic en la barra deslizante (#15561 by @luckyCao)
- Radio
  - Solucionado el problema 14808 (#14809 by @OverTree)
- Form
  - Solucionado el problema de resetFields (15181 by @luckyCao)
- Tarea
  - Se actualizaron las dependencias y se corrigió el error de demostración (#15324 by ziyoung)
 - Type
  - Corregida la definición del tipo de carga (#15635 by @iamkun)
  - Corregido tipo Icono (#15634 by @iamkun)
  - Corregida la definición del tipo de enlace (#15402 by @iamkun)

#### Optimización

- Cascader
  - Refractorización (#15611 by @SimonaliaChen)
- Tarea
  - Actualización hacer nueva lógica de componentes (by @iamkun)
- Documentación
  - Renombrar variable en docs (#15185 by @liupl)
  - Corregido el atributo type de imagen y el valor por defecto (#15423 by @haoranyu)
  - Corregido error en la doc de form (#15228 by @SHERlocked93)

### 2.8.2

*2019-04-25*

#### Corrección de errores

- Icon
  - Actualizado icon (#15272 by @iamkun)
- Docs
  - Arreglada la documentacion de Form e Input (#15273 by @ziyoung)

### 2.8.1

*2019-04-25*

#### Corrección de errores

- Icon
  - Actualizado el icono de cascader y select (#15264 by @SimonaliaChen)
  - Actualizado icon (#15258 #15268 by @iamkun)

#### Optimización

- Chore
  - Actualizado build script (#15267 by @ziyoung)
- Docs
  - Arreglado el color underline de link (#15265 by @iamkun)
- Other
  - Arreglada la migracion de la configuracion no compatible con camel case props y eventos (#15260 by @SimonaliaChen)

### 2.8.0

*2019-04-25*

#### Nuevas características

- Divider
  - Agregado el componente Divider (#15055 by @island205)
- Rate
  - Agregados colores personalizados y clases de iconos pasando un objeto (#15051 by @SimonaliaChen)
- Link
  - Agregado componente Link (#15052 by @iamkun)
- Calendar
  - Agregado el componente Calendar (#14908 by @ziyoung)
- Icon
  - Agregado Icon (#15214 by @iamkun)
- Alert
  - Agregado tema dark (#15041 by @island205)
- Image
  - Agregado componente image (#15117 by @SimonaliaChen)
- Collapse
  - CollapseItem puede ser disabled (#15076 by @ziyoung)
- Carousel
  - Agregado atributo direction y soporte para la direccion vertical (#15122 by @ziyoung)
- Pagination
  - Agregado atributo hide-on-single-page (#15096 by @ziyoung)
- Slider
  - Agregado atributo marks (#15133 by @luckyCao)
- Input
  - Agregado attributo show-word-count (#15075 by @luckyCao)
- InputNumber
  - Agregado atributo step-strictly (#15050 by @luckyCao)
- Tooltip, Dropdown, Popover
  - Soporte para el atributo tabindex (#15167 by @ziyoung)

#### Corrección de errores

- Notification
  - Arreglado el word break del titulo (#15008 by @iamkun)
- Form
  - Arreglado que cuando se cambiaban las reglas en el-form no funcionaba (#14985 by @luckyCao)
  - Arreglado el estilo del label (#14969 by @ziyoung)
  - Los FormItem requeridos muestran astericos cuando el label es auto (#15144 by @ziyoung)
- Pagination
  - Arreglado que el slot no se actualizaba (#14711 by @lucyhao)
- Table
  - Arreglado un bug del load en el modo lazy (#15101 by @ziyoung)
  - Arreglado el ancho de la celda cuando colspan es mayor que 1 (#15196 by @ziyoung)
  - Mejora en el rendimiento (#14868 by @ziyoung)
  - No se emiten disparadores del evento sort-change durante la inicializacion (#14625 by @PeanutWatson)
  - Igual comportamiento para height y max-height (#14660 by @arthurdenner)
- Dialog
  - Arreglado que el cuerpo del dialog quiebre las palabras correctamente en las palabras largas (#15027 by @iamkun)
- Alert
  - Actualizada la definicion de type (#15186 by @ziyoung)
- Tabs
  - Solucionado el problema por el que el rechazo de la promesa estaba afectando a la aplicación (#14816 by @ffxsam)
  - Rerender cuando hay cambios en el slot (#15238 by @ziyoung)
- Message
  - Actualizada la definicion de type (#14968 by @agoni1212)
- Select
  - Solucionado el error cuando value es undefined o null (#15022 by @luckyCao)
- Tree
  - Eliminar el nodo actual despues de removido (#14604 by @sinchang)
  - Mejora en el rendimiento (#14881 by @ChenZhuoSteve)
- Dropdown
  - Estilo arreglado (#14907 by @doing123)
- Slider
  - Corrección de un fallo en el teclado a11y (#14792 by @erezsob)
- Menu
  - El valor de ActiveIndex será nulo si el defaultIndex no existe (#14074 by @hoythan)
- Directive
  - RepeatClick: usa Date.now() en lugar de new Date() (#14776 by @pavelmash)
- Upload
  - Arreglado el estilo para mostrar imagenes transparentes (#15039 by @iamkun)
- Theme
  - Agregado zero border (#15256 by @iamkun)

#### Optimización

- Tareas
  - Actualizado changelog zh-cn (#14965 by @iamkun)

  - Ocultar la descripcion de la demo cuando esta vacia (#15014 by @ziyoung)

  - Muestra la info dev del server por defecto @iamkun)

  - Arreglado un error del changelog v2.6.0 (#15026 by @iamkun)

  - Actualizado build config (#14821 by @abc3660170)

  - Agregado hmr (#15221 by @SimonaliaChen)

  - Uso de sourcemap en entorno dev (#15087 by @ibufu) Docs

  - Cambio de nombre de variable en docs (#14602 #15003 #15094 #15105 by @liupl)

  - Arreglado un error en la documentacion de upload (#15023 by @iamkun)

  - Actualizada la documentacion del custom validator del Form (#15040 by @iamkun)

  - Actualizada la documentacion de Tabs de como mostrar tabs verticales (#15053 by @iamkun)

  - Uso del dominio eleme.cn (#15139 by @ziyoung)

  - Arreglado el nombre de la ruta de imágenes (#15194 by @iamkun)

  - Eliminada la traducción duplicada en francés (#15207 by @iamkun)



#### Breaking changes

- Rate
  - Arreglado Fix decimal display support in disabled mode (#15089 by @haoranyu)
- Select
  - Se usa la opcion placeholder del label para poner el placeholder en el modo filter (#14989 by @ibufu)

### 2.7.2

*2019-04-03*

#### Corrección de errores

- Form
  - Arreglado el estilo auto `label-width` (#14955 by @ziyoung)

#### Optimización
- Docs
  - Arreglado un error de link de una imagen (#14957 by @iamkun)
- Chore
  - Arreglado un error de mkdir en el deploy (#14952 by @iamkun)

### 2.7.1

*2019-04-03*

#### Corrección de errores

- Select
  - Se asigna null a value cuando se limpia (#14322 by @aaronfulkerson)
- Input
  - Actualiza los valores dependientes en el DOM cuando el tipo cambia (#14889 by @wacky6)
- Table
  - Hacer que defaultExpandAll funcione cuando exista una columna expandida (#14935 by @ziyoung)
- Dialog
  - El color de fondo puede ser configurado (#14939 by @ziyoung)
- Form
  - `label-width` soporta auto width (#14944 by @ziyoung)

#### Optimización
- Docs
  - Actualización de la documentación en español (#14913 by @Gonzalo2310)
  - Agregada documentación en francés para el nuevo componente (#14924 by @ziyoung)
  - Documentación de los Tabs optimizada (#14938 by @ziyoung)

### 2.7.0

*2019-03-28*

#### Nuevas características

- Table
  - Agregado soporte de datos con estructura tree (#14632 by @ziyoung)

#### Corrección de errores

- Tabs
  - Uso de color primario como boxShadow color (#14558 by @Richard-Choooou)
  - Renderización cuando cambia la etiqueta (#14496 by @akki-jat)
- Table
  - El pie de página sigue la alineación de las celdas del body (#14730 by @ziyoung)
- NavMenu
  - Se ha corregido que al hacer click en el el-submenu se disparaba childMenu nuevamente (#14443 by @PanJiaChen)
- Dropdown
  - Compatible con la nueva sintaxis de v-slot en V 2.6 (#14832 by @ziyoung)
- ColorPicker
  - Corregido el manejo de error de string en hex color (#14793 by @iamkun)
- Tree
  - Revertido pr #13349 (#14847 by @ziyoung)
- Tooltip
  - Muestra cuando el valor inicial es verdadero (#14826 by @ziyoung)
- Docs
  - Actualización de documentos de cascader (#14442 by @panhezeng)
- Style
  - Corrección de la media query en sm-only, md-only, lg-only (#14611 by @sinchang)

#### Optimización

- Chore
  - Añadido descripción de la página web (#14802 by @iamkun)

### 2.6.3

*2019-03-21*

#### Corrección de errores

- Corrección del estilo de demostración de Cascader (#14789 by @ziyoung)
- Eliminación de la operación DOM innecesaria (#14788 by @ziyoung)
- Corrección del valor predeterminado del DST de DatePicker (#14562 by @wacky6)

### 2.6.2

*2019-03-21*

#### Nuevas características

- DatePicker
  - Añadido monthrange para el atributo type (#14487 by @zxyRealm)
- i18n
  - Añadido Locale Croata (#14360 by @danijelh)
- Docs
  - Actualización del documento en francés para 2.6.1 y corrección de errores tipográficos (#14555 by @smalesys)
  - Actualización de la traducción al francés (#14643 by @smalesys)

#### Corrección de errores

- Input
  - Corregida regresión (#14572 by @wacky6)
- DatePicker
  - Corrección del cálculo del primer día de la semana (#14523 by @sinchang)
  - Corregido el formato de valor del selector de semana (#13754 by @wacky6)
- Steps
  - Corregida issue #14502 (#14596 by @sinchang)
  - Arreglado estilo con tema simple (#14610 by @sinchang)
- Docs
  - Renombrada variable en documentos de Table (#14587 by @likwotsing)
  - Añadido índice de búsqueda en francés (#14565 by @iamkun)
  - Corrección del estilo de página TimePicker (#14579 by @ziyoung)
  - Renombrada variable en Upload docs (#14593 by @liupl)
  - Actualización de los documentos del Form async validator (#14694 by @iamkun)
  - Solucionado el error de tooltip doc (#14748 by @iamkun)
  - Corregido error tipográfico (#14751 by @2bj)
  - Corregido los elementos de control de resaltado para Webkit touch (#14703 by @VladG0r)


#### Optimización

- Chore
  - Actualización del script de construcción de ci (#14600 by @ziyoung)
  - Actualización ga tracking (#14560 por @iamkun)
  - Añadido más evento ga (#14633 by @iamkun)
  - Actualización del grupo de discusión (#14741 por @iamkun)
  - Actualización de los deps y conf de las pruebas (#14735 by @wacky6)
  - Actualización gulp (#14745 by @ziyoung)
  - Uso de codepen para mostrar la demo y corregir el error doc (#14747 por @ziyoung)

### 2.6.1

*2019-03-03*

#### Corrección de errores

- **Don't specify node version** (by @iamkun in #14546)
- Corrección del directorio doc en `deloy-faas.sh` (by @ziyoung in #14553)
- Arreglado el estilo de date en changelog para 2.6.0 (by @island205 in #14547)
- Corregido error tipográfico en doc (by @wack6 in #14552)

### 2.6.0

*2019-03-01*

#### Nuevas características
- Timeline
  - Agregado componente timeline (by @jikkai in #14248)
- DropdownItem
  - Añadida la prop icon a `el-dropdown-item` (by @gabrielboliveira in #14088)
- Input
  - Añadida la prop show-password (by @phshy0607 in #13966)
- Select
  - Añadido el slot `empty` (by @elfman in #13785)
- Autocomplete
  - Añadida la prop highlight-first-item (by @YamenSharaf in #14269)
- I18n
  - Locale Armenio creado (by @hamletbarsamyan in #14214)
- Docs
  - Traducción al francés (by @smalesys in #12153, #14418, #14434)

#### Optimización
- Alert
  - Actualizada la descripción de Alert (by @iamkun in #14488)
- Input
  - Actualizado input password (by @iamkun in #14480)
- InputNumber
  - Removido parseFloat innecesario (by @JuniorTour in #14172)
- Menu
  - Añadido soporte para `el-menu-item` sin índice (by @georgyfarniev in #13298)
- Table
  - Eliminadas algunas operaciones DOM html (by @elfman in #13643)
- Upload
  - Optimizado el código (by @elfman in #13973)
- Popup
  - Optimizado el código (by @KAionro in #14413)
- Docs
  - Se han agregado más detalles sobre cómo ejecutar el modo de play para contribuir (by @island205 in #14355)
  - Warn input como componente de control. (by @wacky6 in #14463)
  - Actualizacion de la documentacion de Table (by @luguokong in #14329)
  - Actualizacion de la documentacion de input (by @iamkun in #14437)
  - Actualizacion de la documentacion de custom-theme (by @wangguohao in #14297)
  - Se ha hecho que el icono cambie de estilo en hover (by @tuxinghuan in #14295)
- Build
  - Minimización de css y js para la doc del sitio de Element (by @iamkun in #14430)
  - Aceleración de webpack (by @hetech in #14484)
  - Uso de cli para seleccionar la versión de lanzamiento (by @hetech in #14354)
- Instalación de stale para el manejo de issues (by @island205 in #14392)

#### Corrección de errores
- Menu
  - Corregido el error de focus del submenú cuando se cambiaba la pestaña del navegador (by @liupl in #13976)
- MessageBox
  - Corregida la definicion de type (by @NateScarlet in #14278)
- ScrollBar
  - Prevenido el clic del botón derecho en la miniatura (by @xifeiwu in #14196)
- Switch
  - Activación de la validación de formularios si el valor cambia (by @hetech in #14426)
- Table
  - Se ha convertido el método toggleAllSelection en un método de instancia (by @letanure in #14075)
- Tabs & Dropdown
  - Estilo arreglado (by @hetech in #14452)
- Tree
  - Los tips de texto vacío son diferentes de las tablas (by @ColinCll in #14331)
- Docs
  - Corregido el error de formato de la documentacion de DatetimePicker (by @iamkun in #14290)
  - Problema de ortografía en la documentación de datepicker (by @helmut in #14481)
  - Arreglado estilo doc de paginación (by @liuchuzhang in #14451)

#### Breaking changes
- Table
  - Cambiar el orden de los parámetros enviados en los eventos de las filas (by @jikkai in #12086)

### 2.5.4

*2019-02-01*

#### Corrección de errores

- Build: Se ha solucionado el problema de configuración de babel que provocaba que el efecto de transicion de collpase se rompiera (por @island205 en #14282)

### 2.5.3

*2019-01-31*

#### Optimización

- Optimización del código de Message (por @vok123 en #14029)
- Retirada de gh-pages (por @ziyoung en #14266)
- Añadido enlace IssueHunt (por @island205 en #14261)

#### Corrección de errores

- Corregido el error del módulo UMD en el lado del servidor (por @island205 en #14242)
- Corregido el estilo activo de TabBar (por @iamkun en #14240)
- Corregido el error de código de demo de la tabla (por @xunmeng en #14253)


### 2.5.2

*2019-01-27*

#### Optimización
- Docs:
  - Actualizacion ChangeLog ES 2.5.1 (by @Gonzalo2310 in #14231)

#### Corrección de errores
- Build:
  - Eliminar comentarios no borrados en el módulo umd `lib/index.js` (por @island205 en #14233)
  - Corregido el error de exportación disparado en el módulo commonjs usado en nuxt.js (por @island205 en #14232)
  - Corrección de problemas de compilación de 2.5.1 (por @iamkun en #14228)

### 2.5.1

*2019-01-26*

#### Optimización
- DatePicker: resalta el mes y año actual (por @Debiancc en #14211)
- Actualizacion del changelog 2.5.0 (por @wacky6 en #14217)

#### Corrección de errores
- Arreglado el problema de exportación generado por la actualización de webpack (por @island205 en #14220)
- Guardados los documentos 2.4.11 y la nueva subcarpeta para 2.5+ (por @iamkun en #14222)

### 2.5.0

*2019-01-25*

#### Corrección de errores
- Autocompletar
  - Corregida la última línea del menú desplegable que comenzaba recortada (#13597) (por @ziyoung)
  - Arreglada la popper arrow que faltaba (#13762) (por @liuchuzhang)
- Carrusel
  - Contador de limpieza cuando el componente es destruido (#13820) (por @elfman)
- Cascader
  - Retirada de los props computados obsoletos (#13737) (por @iamkun)
  - Se corrigió la definición de tipo de las opciónes de Cascader en TypeScript (#13613) (por @NateScarlet)
  - Corregido icono que cubre el texto (#13596) (por @ziyoung)
- Checkbox
  - Refinado el estilo (por @PanJiaChen)
- DatePicker
  - Añade el `key` en v-for de TimeSpinner (#13547) (por @Ende93)
  - Corregido el resaltado de la semana en el límite del año (#13883) (por @suyi91)
- Input
  - Corregida la referencia del nodo DOM del textarea (#13803) (por @laomu1988 @island205)
- Pagination
  - El valor de entrada no será menor que 1 (#13727) (por @elfman)
- Popover
  - Corrección de problemas de popover con el disparador de hover (#13104) (por @goldengecko)
  - Corregido el fallo de memoria de instancia de popper (#13988) (por @qpxtWhite)
- Radio
  - Refinado el estilo (por @ohhoney1)
- Table
  - Mejorada la ordenación de tablas al hacer clic en la flecha de ordenación (#12890) (por @ohhoney1)
  - Solucionado el problema de alineación vertical de texto vacío en IE10+ (#13638) (por @imzjjy)
  - Corregida la documentación del tipo de índice (#13628) (por @ilovefafa)
  - Corrección del problema de visualización de `show-summary` cuando el encabezado multinivel tiene el attr fixed (#13914) (por @luckyCao)
- Tabs
  - Corregido error de autodesplazamiento (#13696) (por @iamkun)
  - Obtener la tab correcta a través del nombre de tab (#13705) (por @iamkun)
  - Uso de paneName en lugar de name para determinar el estilo del panel (#13733) (por @iamkun)
- Tree
  - Corregido que `showCheckbox` prop en `Tree` no puede afectar a los hijos `tree-node` (por @KidneyFlower)
  - Actualizado documento y archivo de definición (#13540) (por @ziyoung)
- Upload
  - Agregada la prop `url` para subir el archivo cuando `list-type` cambia (#13771) (por @elfman)
- Slider
  - Corrección de la sangría del código fuente (#13955) (por @wacky6)
- I18n
  - Añadidas las traducciones de catalán que faltaban (por @jaumesala)
  - Añadidas las traducciónes de ruso que faltaban (#13658) (por @justlp)
  - Corrección de las traducciones al finés (#14137) (por @jenkrisu)
- Doc
  - Actualización del documento 2.4.11 (#13522) (por @Gonzalo2310)
- Otros
  - Eliminar scripts innecesarios (por @ziyoung)
  - Corregido el error de anchor link (#13753) (por @iamkun)
  - Corrección de la capitalización inconsistente en la documentación (por @wonderjar)
  - Añadido código qr del grupo de chat DingDing al readme (by @iamkun in #13957)
  - Añadido logs de hilo a .gitignore (#13922) (por @mimimi)
  - Eliminada la cuota de patrocinadores (#14156) (por @island205)
  - Actualizado readme qr code src (#13960) (por @iamkun)
  - Actualizado enlace CDN, corregido error tipográfico (por @ziyoung)

### 2.4.11

*2018-11-21*

- Revertido pr #13296. Arreglado que al hacer clic fuera del Menú causaba que el Submenú colapsara, #13478
- Ajustados los media query breakpoints de las pantallas pequeñas (xs), #13468 (por @alekoshen712)

### 2.4.10

*2018-11-16*

- Se corrigio que se necesitaban varios clics en Select para mostrar la lista desplegable, #13268
- El icono de limpiado para el input no se muestraba cuando Form estaba deshabilitado, #13208
- Ajustados los estilos de Select, Progress, Autocomplete, Tooltip, Collaspe, TimePicker, #13188 (by @porcelainHeart) #13210 #13266 #13257 #13290 #13347 (by @PanJiaChen)
- Se agregó el atributo `loop` al componente carrusel, #13217
- Cuando los datos de Table cambian, la línea resaltada permanecerá, #13200
- Table header scoped slot puede recibir parámetros, #13263
- El método `clearFilter` de la tabla soporta argumentos, #13176
- El tooltip ya no se crea cuando no hay contenido en la celda de Table, #13152 (por @rongxingsun)
- El contenido del input del panel ColorPicker se muestra correctamente, #13278
- ColorPicker ya no activa la validación de formularios al arrastrar, #13299
- InputNumber se le ha añadido el método `select`, #13286 (por @st-sloth)
- Autocompletar agregó el evento `clear`, #12171(by arthurdenner) #13326
- Puede cerrar Menú haciendo clic fuera del Menú, #13296
- El método `validateField` de Form puede recibir argumentos, #13319
- Cascader añadió el evento `visible-change`, #13415
- DatePicker agregó slot para separador de rango, #13272 (por @milworm)
- Tree añade las propiedades `iconClass` y `currentNodeKey`, #13337 #13197 (por @isnifer)
- Progress permite texto en el atributo `status` #13198 (por @ali-master)
- Corregidas las `defaultCheckedKeys` de Tree que causaba un error, #13349 (por @dive2Pro)


### 2.4.9

*2018-10-26*

- El parámetro de Form's `clearValidate` soporta cadenas, #12990 (by @codinglobster)
- Se agregó el atributo `type` para Badge, #12991
- Ser puede usar scoped-slot para personalizar el encabezado de la columna de Table #13012 (por @ivanseidel)
- Arreglado que el input box de Select no se podia escrbir en IE, #13034 (by @GaliMU)
- La opción Seleccionar no se cerraba cuando el espacio era insuficiente, #12329 (by @akki-jat)
- Cuando se expande la lista desplegable de Seleccionar, el icono de flecha también se mostrará correctamente, #12353 (by @firesh)
- Arreglado que el atributo size de Select no funcionaba, #13070
- Select multiple values pueden ser limpiado en lote, #13049 (by @ZSkycat)
- Arreglado el último TabNav que no se podía borrar, #13039
- Arreglado que la etiqueta del TabNav no se mostraba correctamente, #13178
- Añadido title slot para Alert, #13082 (by @Kingwl)
- Corregido un problema por el cual el contenido del tooltip en Table era incorrecto, #13159 (by @elfman)
- Optimizada la animación de Upload cuando el archivo es eliminado, #12987
- Ajustado el estilo de InputNumber cuando no se muestra el botón de control, #13052

### 2.4.8

- No se muestra el contorno cuando Switch está enfocado, #12771
- Arreglado el estilo del Dropdown en ButtonGroup, #12819 (por @bluejfox)
- Añadido evento opened para Dialog, #12828
- Corregido el orden incorrecto de visualización de TabNav, #12846
- Corregido el problema de que Tabs no se desplazaba a la pestaña seleccionada, #12948
- Corregido el problema de que el identificador no se mostraba cuando se arrastraba el Tree node, #12854
- El parámetro validar evento de Form contiene el mensaje de validación, #12860 (por @YamenSharaf)
- Se ha corregido el DatePicker que no verificaba la validez de la hora de entrada del usuario, #12898
- Arreglado el problema de que el atributo `render-header` del encabezado de Table no funcionaba, #12914

### 2.4.7

*2018-09-14*

- Corregido que DatePicker no activaba la validación del Form, #12328 #12348
- Corregidos el lanzamiento de errores del DatePicker en modo múltiple, #12347
- Corregida la posición incorrecta del spinner del DatePicker, #12415 (por @rang-ali)
- Se ha corregido el llenado automático del input del DatePicker, #12521 (por @abdallanayer)
- Corregida el input no resaltada en Cascader, #12341
- Corregido el orden incorrecto de Tabpane, #12346
- Corregida la posición incorrecta del cursor de ColorPicker, #12376 (por @cnwhy)
- Corregido el estilo del Submenú, #2457
- Corregido el resaltado después de seleccionar el Submenú, #12479
- Corregidos los valores incorrectos seleccionados por Cascader, #12508 (por @huangjinqiang)
- Corregido el valor incorrecto del input de Paginación, #12525
- Se ha corregido el orden en que la paginación desencadena los eventos, #12530
- Corregido que no se mostraba el Table Filter, #12539
- Corregido Tree que era incapaz de borrar nodos, #12684
- Corregida la altura de los Select Input que cambiaba en modo simple, #12719
- Arreglado el estilo de la etiqueta FormItem en Form anidado, #12748
- Añadido el atributo `autocomplete` para Input, obsoleto `auto-complete`, #12514 (por @axetroy)
- Añadido el slots-scope de Form para mostrar la información de validación, #12715 (por @YamenSharaf)

### 2.4.6

*2018-08-09*

- Arreglada la tabla que no mostraba el ícono del filtro cuando a `filter` se les asignaba un array vacío, #12165
- Arreglado Menu que no guardaba el estado activo cuando cambiaba `collapse` #12178 (por @elfman)
- Se ha corregido que Cascader no escapaba a los caracteres especiales para Regexp, #12248
- Se ha corregido que el RadioBotón deshabilitado mostraba la sombra de la caja cuando se hacía clic, #12262
- Arreglado el efecto de la tecla de flecha en Select cuando el valor por defecto es `undefined`,#12322
- Corregida la función de consulta de Select not debounced en modo multi, #12181
- Corregida que la palabra clave de consulta de Select desaparecía en modo multi, #12304
- Corregido el ancho incorrecto de Dialog cuando se muestra a pantalla completa, #12203
- Corregida la visualización incorrecta de Main en IE, #12237
- Corregido el trigger de Input con dos validaciones de Form, #12260
- Arreglado el añadir un nuevo nodo de árbol que causaba que los nodos desaparecieran, #12256
- Arreglado el nodo Tree no se borraba después de arrastrar, #12279
- Popover corregido porque no era visible cuando InputNumber no enfocaba, #12284
- Añadido el atributo `popper-append-to-body` para Autocompletar, #12241
- Añadido el modificador `sync` para el atributo `page-size` de Pagination, #12281

### 2.4.5

*2018-07-26*

- Se ha corregido en Table que `class-name` no funcionaba para las columnas `expand`, #12006
- Se ha añadido el método `toggleAllSelection` para Table, #12047
- Corregida la posición incorrecta del `suffix slot` cuando Input contiene Select, #12108
- Corregido que el `line-height` de Option no se establecia, #12120
- Corregido que TimeSelect con valor por defecto `null` no podia ser asignado después de ejecutar `resetField`, #12010
- Arreglado el evento `keydown` que cuando no era una tecla de flecha no funciona en Tree, #12008
- Corregido nodo padre checked en modo lazy, #12106
- Añadido el parámetro `includeHalfChecked` para getCheckedNodes de Tree, #12014

### 2.4.4

*2018-07-13*

- Corregido que se disparaba la validacion del Select después de reajustar el formulario, #11837
- Corregida la posición incorrecta del slot Input `suffix` cuando se usaba el slot `suffix` con el slot `append` , #11951
- Corregido el clearable Input que muestraba el icono de borrado cuando era readonly, #11967
- Arreglado el nodo Tree checked cuando estaba disabled, #11847
- Corregido que `default-checked-keys` no funcionaba en Tree, #11971
- Corregido que el `empty-text` no era visible cuando el nodo Tree se filtraba, #11971
- Arreglada la posición de texto vacío sobredimensionado en Table, #11965
- Corregido que la fila de la tabla no se modificado el resaltado cuando `current-row-key` era asignada a null, #11866
- Arreglado que mostraba el filtro del dropdown cuando los filtros eran un array vacío, #11864
- Corregido que el cambio de label de Radio no detenia propagacion de eventos, #11912

### 2.4.3

*2018-07-03*

- Corregido `allow-drop` que no funcionaba correctamente cuando los nodos de árbol tenian una altura personalizada, #11797
- Ahora puede pasar un parámetro al método `clearValidate` de Form, especificando qué resultados de validación de `FormItems` necesita borrar, #11821
- Añadido el atributo `distinguishCancelAndClose` para MessageBox, #11831

### 2.4.2

*2018-06-26*

- Ahora el `class-name` y el `label-class-name` de la tabla son reactivos, #11626
- Arreglado que Table seguia resaltando la fila en la que se había hecho clic cuando `highlight-current-row` era `false`, #11646
- Corregido un error de estilo de ButtonGroup cuando sólo habia un botón `round` o `circle`, #11605
- Arreglado estilo del tamaño de página del Select de Pagination, #11622
- Corregido un error del método `open` de los Menús cuando se cambiaba dinámicamente `collapse`, #11646
- Añadidos los parámetros `activeName` y `oldActiveName` al gancho before-leave de Tabs, #11713
- Arreglado el focus en Cascader después de hacer clic fuera, #11588
- Arreglado que Cascader no se cerraba cuando se hacia clic en la opción estando `change-on-select` como `true`, #11623
- Ahora la actualización del valor de Select programáticamente activará la validación de formulario, #11672

### 2.4.1

*2018-06-08*

- Removida la declaración duplicada de type en Autocompletar, #11388
- Corregido el estilo de flecha en el dropdown de Select en FireFox cuando se anidaba en el formulario, #11427
- Corregido que el ícono `clear` de Select seguia apareciendo cuando el valor inicial era `null`, #11460
- Arreglado que cuando el radio estaba `disabled` mostraba el box-shadow al hacer click, #11462
- Añadido el atributo `iconClass` para MessageBox, #11499
- Añadido el atributo `stretch` para Tabs, #11476
- Arreglado el problema de orden de renderizado de TabPane cuando Tabs es `lazy`, #11461
- Arreglado que Table no retenia la fila actual de resaltados cuando se expandia, #11464
- Arreglado que focusing state cuando `before-leave` devolvia una promesa resuelta, #11386
- Arreglado que Popover deshabilitado seguia creando poppers, #11426
- Arreglado el bucle sin fin de Tree cuando se añadia un nuevo nodo en modo `lazy`, #11430 (por @wangjingf)
- Añadido el evento `closed` para Dialog, #11490

### 2.4.0 Fullerene

*2018-05-28*

#### Nuevas características
- Generalidades
  - La herramienta de desarrollo y el empaquetador se cambiaron a webpack nativo, #11216
  - Ahora puede configurar globalmente el z-index inicial de los popups, #11257
- Autocomplete
  - Añadido el atributo `hide-loading`, #11260
- Button
  - Ahora se puede usar el atributo `size` en los botones circulares para controlar sus tamaños, #11275
- InputNumber
  - Añadido el atributo `precision`, #11281
- Tabs
  - Añadido el atributo `before-leave`, #11259
  - Añadido el atributo `lazy`, #11167（by @Kingwl）
- Table
  - Añadido el método `sort` para ordenar manualmente la tabla, #11311

#### Corrección de errores
- Input
  - Se ha corregido un problema que provocaba que se volviera a procesar al utilizar el IME chino para introducir texto rápidamente, #11235 (por @STLighter).
- Popover
  - Corregido el error de la consola cuando el elemento disparador es Radio o Checkbox, #11265
- Breadcrumb
  - Arreglado el atributo `to` que no soportaba la actualización dinámica, #11286
- Upload
  - Corregido el error de la consola cuando se resolvia el Archivo en la Promesa devuelta del método `beforeUpload`, #11297 (por @qusiba)
- Tooltip
  - Solucionado que la flecha no se posicionaba correctamente cuando el contenido estaba vacío, #11335
- Autocompletar
  - Corregido que las sugerencias de entrada eran incorrectas después de eliminar la palabra clave rápidamente, #11323
- ColorPicker
  - Corregido el evento `active-change` que se disparaba incorrectamente cuando el menú desplegable del picker estaba cerrado, #11304
- Table
  - Corregido el error de estilo del panel de filtro cuando se sobredimensionaba, #11314
  - Corregida que la fila seleccionada actualmente no se retenia cuando se ordenaba la tabla, #11348
- CheckBox
  - Arreglado que cuando el checkbox era único no soportaba validación, #11271
- Radio
  - Arreglado que el Radio desactivado seguia estando seleccionada cuando se pulsaba la tecla espaciadora, #11303
- MessageBox
  - Corregida la clase `el-popup-parent--hidden` que no se eliminaba al abrir MessageBox sucesivamente, #11371

### 2.3.9

*2018-05-18*

- Corregido que cuando los datos de origen no tenian el campo especificado por el atributo `prop` de una TableColumn, se producía un error al moverse el ratón dentro de las celdas de esa columna, #11137.
- El atributo `lockScroll` de los componentes pop-up ya no añade un inline style al elemento padre, sino que añade un nombre de clase, #1111114.
- Arreglado el icono de Progreso que no se mostraba cuando su `status` era `exception`, #11172
- El atributo `disabled` no funcionaba en la lista de resultados del filtro de Cascader, #11185
- Se ha corregido un problema por el que la fila expandida de la Tabla no se podía contraer si los datos de origen se actualizaban después de su expansión, #11186.
- `setCurrentKey` de Tree ahora acepta `null` como parámetro para cancelar el nodo actualmente resaltado, #11205

### 2.3.8

*2018-05-11*

- Corregido que el panel DatePicker saltaba al mes actual después de escoger una fecha en un mes diferente cuando el tipo era `dates`, #10973
- Arreglado que el `clearable Input` seguía mostrando el icono de borrado cuando era sólo de lectura, #10912
- Arreglado que al cerrar el panel DatePicker sin modificar el valor se desencadenaba incorrectamente el evento `change`, #11017
- Arreglado que la navegación por el teclado no funcionaba correctamente cuando Select tenia opciones agrupadas, #11058
- Agregado el `slot named` `prefix` para Select, #11063
- Agregado el metodo `clearValidate` para FormItem, #11076
- Agregado el atributo `checkOnClickNode` para Tree, #11111

### 2.3.7

*2018-04-29*

- Corregido que Table no actualizaba el ancho de encabezado cuando la barra de desplazamiento desaparecia debido al filtrado, #10834
- Corregido input borrable que mostraba el icono de borrado cuando su valor inicial era `nulo`, #10912
- Corregido el disparador incorrecto del evento `active-change` después de cambiar el valor enlazado de ColorPicker programáticamente, #10903 (por @zhangbobell)
- Corregido filterable Select que causaba un bucle infinito al navegar por las opciones usando el teclado si todas las opciones estában deshabilitadas, #10945

### 2.3.6

*2018-04-21*

- Corregido el comportamiento incorrecto del callback `allow-drop` de Tree cuando se usaba el parámetro `type`, #10821
- Ahora puede introducir correctamente las palabras clave en filterable Single Select en IE11, #10822
- Corregido Single Select activaba incorrectamente el evento `blur` después de hacer clic en una opción, #10822

### 2.3.5

*2018-04-20*

- Arreglado los incorrectos realces en el panel de DatePicker cuando `type` es week, #10712
- Arreglado que InputNumber comenzaba vacio cuando el valor inicial era 0, #10714
- Agregado el atributo `automatic-dropdown` para Select, #10042 (by @Seebiscuit)
- Arreglado que el valor del Rate pasaba a `disabled` cuando se comenzaba a actualizar con las teclas de navegacion, #10726 (by @Richard-Choooou)
- Ahora el atributo `type` de DatePicker's puede ser `'dates'`, donde puede elegir varias fechas en un solo picker, #10650 (by @Mini256)
- Agregados los eventos `prev-click` y `next-click` para Pagination, #10755
- Agregado el atributo `pager-count` para Pagination, #10493 (by @chongjohn716)
- Agregado `type` como 3rd parametro del atributo `allow-drop` de Tree, #10792
- Ahora usamos ResizeObserver para detectar el redimensionamiento de elementos DOM, #10779

### 2.3.4

*2018-04-12*

- Eliminado el atributo duplicado `showTimeout` en SubMenu's en la declaracion TypeScript, #10566 (by @kimond)
- Ahora se puede personalizar los datos de los items de Transfer usando scoped slot, #10577
- Arreglado que los click de los botones `next` y `prev` en Pagination se deshabilitaban cuando se disparaba el evento `current-change`, #10628
- Arreglado que Textarea mostraba `undefined` en SSR cuando el valor no era asignado, #10630
- Arreglado que se deshabilitaba el estilo del TabItem cuando `type` era border-card, #10640
- Agregado `$index` como cuarto parametro en el atributo de las columnas de Table `formatter` , #10645
- Arreglado que CheckboxButton no se exportaba en la declaracion de TypeScript, #10666

### 2.3.3

*2018-04-04*

- Agregar atributo `shadow` para Card, #10418 (by @YunYouJun)
- Se ha corregido el error de ocultar Badge cuando `value` es `0`, #10470
- Arreglados algunos bugs del draggable Tree, #10474 #10494
- Agregado `placement` para Autocomplete, #10475
- Ahora el atributo `default-time` también funciona en un rango que no es el rango DateTimePicker, #10321 (by @RickMacTurk)
- Eliminado el contorno azul de TabItem después de que el navegador se desdibuja o se minimiza, #10503
- Agregado el atributo `popper-append-to-body` para SubMenu, #10515
- Eliminado el feedback visual cuando se desplaza sobre non-link BreadcrumbItem, #10551
- Se ha corregido el evento `change` de InputNumber para garantizar que el valor de ligado del componente se actualiza en el control de eventos, #10553

### 2.3.2

*2018-03-29*

- Arreglada una regresión de Autocompletar, #10442

### 2.3.1

*2018-03-29*

- Se ha corregido una regresión por la que el `type` de input no se transmitia al elemento de entrada nativo, #10415
- Agregado el metodo `blur` para Select, #10416

### 2.3.0 Diamond

*2018-03-28*

#### Nuevas características
- Table
  - Ahora `formatter` de TableColumn puede ser actualizado dinámicamente, #10184 (by @elfman)
  - Agregado el atributo `select-on-indeterminate`, #9924 (by @syn-zeta)
- Menu
  - Agregado el atributo `collapse-transition`, #8809 (by @limichange)
- Input
  - Agregado el metodo `select` , #10229
  - Agregado el metodo `blur`, #10356
- ColorPicker
  - Agregado el atributo `predefine`, #10170 (by @elfman)
- Tree
  - Agregados los atributos `draggable`, `allow-drop` y `allow-drag`, y los eventos `node-drag-start`, `node-drag-enter`, `node-drag-leave`, `node-drag-over`, `node-drag-end` y `node-drop`, #9251 #10372 (by @elfman)
- Form
  - El metodo `validate` ahora acepta un segundo parametro, que contiene información de los ítems del formulario que no superaron la validación, #10279
  - Agregado el evento `validate`, #10351
- Progress
  - Agregado el atributo `color`, #10352 (by @YunYouJun)
- Button
  - Agregado el atributo `circle`, #10359 (by @YunYouJun)

#### Bug's arreglados
- Form
  - Solucionado: Label del FormItem no se alineaba adecuadamente con Input mixto, #10189
- Menu
  - Ahora collapsed Menu sólo mostrará el Tooltip cuando el slot `title` de MenuItem esté configurado, #10193 (by @PanJiaChen)
- Pagination
  - Corregido el evento `current-change` que se disparaba erróneamente sin interacción del usuario, #10247
- DatePicker
  - Ahora la fecha y la hora en el panel desplegable están correctamente formateadas según el atributo `format`, #10174（by @remizovvv）
- Upload
  - Solucionado el atributo `accept` no trabajaba cuando `drag` era true, #10278

### 2.2.2

*2018-03-14*

- Agregado el evento `clear` para Input, #9988 (by @blackmiaool)
- Ahora la entrada manual de ColorPicker soporta los modos `hsl`, `hsv` y `rgb`, #9991
- Arreglado DatePicker no desencadenaba el evento `change` cuando se borraba su valor inicial, #9986
- Ahora la clase de iconos relacionadas con los atributos de Rate soporta actualizaciones dinamicas, #10003
- Arreglado Table que con columnas `fixed` no actualizaban correctamente su altura si se fijaba `max-height`, #10034
- Ahora DatePicker en modo rango admite la selección inversa (haciendo clic en la fecha final y, a continuación, haciendo clic en la fecha de inicio), #8156 (by @earlymeme)
- Agregado el atributo `disabled` para Pagination, #10006
- Agregados los eventos `after-enter` y ` after-leave` para Popover, #10047
- Arreglado Select no disparaba validación cuando el usuario seleccionaba una opción después de ejecutar `resetFields` de Form, #10105
- Arreglado anchos incorrectos de columnas fijas de Table en algunos casos, #10130
- Corregido MessageBox heredaba el atributo `title` de su instancia anterior cuando se llamaba sin `title`, #10126 (by @Pochodaydayup)
- Agregado el atributo `input-size` para Slider, #10154
- Agregados los eventos `left-check-change` y `right-check-change` para Transfer, #10156

### 2.2.1

*2018-03-02*

- Corregido Aside, Header y Footer que se contraia en algunos layout, #9812
- Corregido Table con un atributo `height` no renderizaba en SSR, #9876
- Corregido Table con fila expandible no calculaba la altura cuando la fila era expandida, #9484
- Corregido que cuando se escribia la fecha de forma manual en DateTimePicker no se disparaba el evento `change`, #9913
- Corregido que Select mostraba sus opciones cuando se hacia click con el botón derecho del mouse en el Input, #9894 (by @openks)
- Agregado el atributo `tooltip-class` para Slider, #9957
- Ahora Select permanecera enfocado despues de la selección, #9857 (by @Seebiscuit)
- Agregado el atributo `target-order` para Transfer, #9960

### 2.2.0 Graphite

*2018-02-12*

#### New features
- Menu
  - Agregados los atributos `popper-class` y `disabled` para SubMenu, #9604 #9771
  - Menu Horizontal ahora soporta SubMenu multi-capas, #9741
- Tree
  - Agregado el evento `node-contextmenu`, #9678
  - Ahora se puede personalizar el template del nodo usando scoped slot, #9686
  - Agregados los metodos `getNode`, `remove`, `append`, `insertBefore`, `insertAfter`, `getCheckedKeys`, `getHalfCheckedNodes`, `getHalfCheckedKeys` y el evento `check`, #9718 #9730
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

  - Corregido Loading no se mostraba cuando el valor de `v-loading` era cambiado a true en el `hook` `mounted`, #9722
- Switch
  - Corregido se disparaban los dos eventos nativos de click cuando se hacia click en el Switch, #9760



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

- Corregido el problema de color del borde del Select cuando está el slot `prepend` o `append` del Input, #9089
- Corregido el parámetro `remove-tag` de Select, #9090
- Añadido los atributos `show-timeout` y `hide-timeout` para SubMenu, #8934 (por @HugoLew)
- Corregido el estilo de Tooltip de `show-overflow-tooltip` que faltaba cuando Table era importada bajo demanda, #9130
- Se ha corregido el mal funcionamiento de ordenación de la columna de Table despues que `clearSort` era ejecutado en esa columna, #9100 (por @zEmily)
- El fichero de configuración i18n para el checo se renombra de `cz` a `cs-CZ`, #9164

### 2.0.10

*2017-12-29*

- Corregido el calculo incorrecto de la altura máxima de Table cuando fixed column y summary row coexisten, #9026
- Solucionado el estilo de color que no lo compilaba para textos vacíos en Table, #9028
- Ahora DatePicker sólo emite el evento `change` cuando el valor cambia verdaderamente, #9029 (by @remizovvv)
- Añadido atributo `tabindex` para Input, #9041 (by @dicklwm)

### 2.0.9🎄

*2017-12-24*

- Añadida la función de enganche (hook) `before-remove` para Upload, #8788 (by @firesh)
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
- Añadidos los atributos `prefix-icon` y `suffix-icon` para Autocomplete, #8446 (por @liyanlong)
- Añadido el atributo `separator` para Cascader, #8501
- Añadido atributo `clearable` para Input, #8509 (por @lbogdan)
- Añadido atributo `background` para Pagination, #8553

### 2.0.5

*2017-11-17*

- Solucionado regresion en 2.0.4 de Popover, Tree, Breadcrumb and Cascader, #8188 #8217 #8283
- Solucionado Fuga de memoria de la directiva clickoutside, #8168 #8225 (por @badpunman @STLighter)
- Solucionada la altura en multiple Select cuando se borra su valor, #8317 (por @luciy)
- Añadido el atributo `collapse-tags` para multiple Select para reemplazar las tags con una línea de texto, #8190
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
- Corregido el tiempo de activación del evento `current-change` para Pagination, #7995
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
  - Un nuevo tema: `theme-chalk`
  - Se ha mejorado la accesibilidad de los siguientes componentes: Alert, AutoComplete, Breadcrumb, Button, Checkbox, Collapse, Input, InputNumber, Menu, Progress, Radio, Rate, Slider, Switch, Upload
  - Añadido tipografías TypeScript
  - Todos los iconos existentes son rediseñados. Se han añadido algunos iconos nuevos
  - Añadida una serie de clases de utilidades basadas en puntos de ruptura que ocultan elementos cuando el tamaño del viewport cumple ciertas condiciones
  - Componentes de diseño añadidos: Container, Header, Aside, Main, Footer.
  - Ahora puede configurar los tamaños de componentes a nivel global. Al importar Element, puede añadir un objeto de configuración global con un prop `size` para configurar tamaños predeterminados para todos los componentes.
- Button
  - Atributo `round` añadido. Se usa para botones de esquinas redondas #6643
- TimeSelect
  - Ahora puede ser navegado por `Up` y `Down`, y presionando `Enter` selecciona la hora #6023
- TimePicker
  - Ahora puede ser navegado por `Up` y `Down`, y presionando `Enter` selecciona la hora #6050
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
  - Añadido atributo `dangerouslyUseHTMLString`. Cuando está configurado en true, el mensaje será analizado como cadena HTML<sup>*</sup> #6043
  - Añadido atributo `inputType` para asignar el tipo para el input interno, #7651
- Dialog
  - Añadidos los atributos `width`, `fullscreen`, `append-to-body`. Ahora Dialog puede ser anidado
  - Atributo `center` agregado para que el contenido pueda ser centrado #7042
  - Añadidos `focus-after-closed`, `focus-after-open` para mejorar la accesibilidad #6511
- ColorPicker
  - Ahora puede escribir colores en el input #6167
  - Añadidos atributos `size` y `disabled` #7026
  - Añadido atributo `popper-class` #7351
- Message
  - Ahora el color de los iconos puede ser sustituido por CSS #6207
  - Añadido atributo `dangerouslyUseHTMLString`. Cuando está configurado en true, el mensaje será analizado como cadena HTML<sup>*</sup> #6207
  - Atributo `center` agregado para que el contenido pueda ser centrado #6875
- Notification
  - Añadido atributo `position` para configurar donde aparece Notification #6231
  - Añadido atributo `dangerouslyUseHTMLString` . Cuando está configurado en true, el mensaje será analizado como cadena HTML<sup>*</sup> #6231
  - Añadido el atributo `showClose` para ocultar el botón de cierre #6402
- Rate
  - Añadido el atributo `show-score` para determinar si la puntuación actual se muestra #6295
- Tabs
  - Añadido el atributo `tab-position` #6096
- Radio
  - Añadidos los atributos `border` y `size` #6690
- Checkbox
  - Añadidos los atributos `border` y `size` #6690
- Alert
  - Atributo `center` agregado para que el contenido pueda ser centrado #6876
- Menu
  - Añadidos los atributos `background-color`, `text-color` y `active-text-color` #7064
  - Añadidos los methods `open` and `close` para abrir y cerrar los SubMenu con programación, #7412
- Form
  - Añadido el atributo `inline-message` para determinar si el mensaje de validación se muestra inline #7032
  - Añadido el atributo `status-icon` para mostrar un icono de retroalimentación cuando se valida #7032
  - Form y FormItem ahora tienen un atributo `size`. Los componentes internos heredarán este tamaño si no se especifica en ellos mismos, #7428
  - Método `validate` devolverá ahora una promesa si se omite la llamada de retorno, #7405
  - Añadido método `clearValidate` para limpiar los resultados de las validaciones de todos los form items, #7623
- Input
  - Añadido slots con nombres `suffix` y `prefix` y atributos `suffixIcon` y `prefixIcon` para añadir contenido dentro del input #7032
- Breadcrumb
  - Añadido el atributo `separator-class` para dar soporte a los iconos como separadores de items #7203
- Steps
  - Añadido atributo `simple` para activar Steps de estilo sencillo #7274
- Pagination
  - Añadidos los atributos `prev-text` y `next-text` para personalizar los textos de la página anterior y de la página siguiente #7005
- Loading
  - Ahora usted puede personalizar el ícono del spinner y el color de fondo con los props `spinner` y `background` , #7390
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
  - El atributo prop de TableColumn ahora acepta las notaciones `object[key]`
  - Atributo de `index` añadido para TableColumn para personalizar índices de filas
- Select
  - Añadido el atributo `reserve-keyword` para reservar la palabra clave de búsqueda actual después de seleccionar una opción.

#### Bug fixes

- DatePicker
  - Arreglado `v-model` que devolvia el segundo día de la semana seleccionada en modo week #6038
  - Arreglado el primer input comenzaba borrado con el type `daterange` #6021
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
  - Corregido un bug de Table permanecía oculto cuando su elemento padre tenia el atributo `display: none`
  - Arreglado Table ahora amplia su ancho cuando el elemento padre tiene `display: flex`
  - Arreglado un bug que corregía las columnas de una tabla con slot con nombre `append` que desaparecia cuando los datos eran recuperados dinámicamente.
  - Arreglado el atributo `expand-row-keys` que no funcionan con el valor inicial
  - Fallo del filtro corregido al actualizar los datos
  - Se ha corregido un error de cálculo de la disposición de columnas fijas con cabeceras agrupadas.
  - Corregido un error de `max-height` dinámico
  - Corregidos algunos errores de cálculo de estilo

#### Breaking changes

- General
  - Eliminado `theme-default`
  - Compatible con Vue 2.5.2+ e IE 10+
  - Evento `change` de componentes del formulario y evento `current-change` de Pagination ahora sólo se activa en la interacción del usuario.
  - El atributo `size` del botón y los componentes del formulario aceptan ahora los tamaños `medium`, `small` y `mini`.
  - Para facilitar el uso de iconos de terceros, los atributos `icon` de Button y Steps y los atributos `prefix-icon` y `suffix-icon` del input ahora requieren un nombre de clase completo.
- Dialog
  - Atributo `size` eliminado. Ahora el tamaño de Dialog se puede configurar con `width` y `fullscreen`
  - Ahora la visibilidad del Diálogo no puede ser controlada por `v-model`
- Rate
  - `text-template` a sido renombrado a `score-template`
- Dropdown
  - `menu-align` a sido renombrado a `placement`. Ahora soporta más posiciones
- Transfer
  - `footer-format` a sido renombrado a `format`
- Switch
  - Los atributos que comienzan con `on*` serán analizados en eventos en JSX, haciendo que todos los atributos `on*` de Switch no puedan trabajar en JSX. Por lo tanto, los atributos `on*` se renombran a `active-*`, y por consiguiente los atributos `off-*` se renombran a `inactivado-*`. Este cambio afecta a los siguientes atributos: `on-icon-class`, `off-icon-class`, `on-text`, `off-text`, `on-color`, `off-color`, `on-value`, `off-value`.
  - Los atributos `active-text` y `inactive-text` ahora no tienen valores por defecto.
- Tag
  - El atributo type acepta ahora `success`, `info`, `warning` y `danger`
- Menu
  - Atributo `theme` eliminado. El color de Menu se puede configurar utilizando `background-color`, `text-color` y `active-text-color`
- Input
  - Atributo `icon` eliminado. Ahora el icono del sufijo puede configurarse usando el atributo `suffix-icon` o el slot con nombre `suffix`.
  - Eliminado el atributo `on-icon-click` y el evento `click`. Ahora para añadir el manejador de clics en los iconos, por favor use los slots con nombre.
  - El evento `change` se comporta ahora como el nativo, que se activa sólo en la perdida del foco o presionando enter. Si necesita responder a las entradas de usuario en tiempo real, puede utilizar el evento `input`.
- Autocomplete
  - Atributo `custom-item` eliminado. Ahora la plantilla de sugerencias del input se puede personalizar utilizando `scoped slot`
  - Atributo `props` eliminado. Ahora puede utilizar el atributo `value-key` para designar el nombre de la clave del objeto de sugerencia del input para su visualización.
- Steps
  - Atributo `center` eliminado
  - Ahora Steps llenara su contenedor padre por defecto
- DatePicker
  - Los parámetros del evento `change` de DatePicker son ahora el valor vinculante en sí mismo. Su formato es controlado por `value-format`
- Table
  - Soporte eliminado para personalizar la plantilla de columnas mediante `inline-template`
  - `sort-method` ahora se alinea con `Array.sort`. Debería devolver un número en lugar de un booleano
  - El slot `append` se desplazo fuera del elemento `tbody` para evitar múltiples renderizados.
  - Evento `expand` se renombro a `expand-change`
  - Los parametros de los métodos `row-class-name` y `row-style` son ahora un objeto

# #

<i><sup>*</sup> El procesamiento dinámico de HTML arbitrario en su sitio web puede ser muy peligroso porque puede conducir fácilmente a [ataques XSS](https://en.wikipedia.org/wiki/Cross-site_scripting). Por lo tanto, cuando `dangerouslyUseHTMLString` está encendido, por favor asegúrese de que el contenido de `message` es confiable, y **nunca** asigne el `message` al contenido proporcionado por el usuario.</i>``