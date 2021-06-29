## Changelog

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

#### Bug fixes

- Autocomplete
  - Fix change event bug (#19200 by @sxzz)
- Image
  - Update error status (#19194 by @lhx6538665)

#### Optimization

- I18n
  - Update ru-RU popconfirm translation (#19220 by @Opppex)
  - Update vi translation (#19244 by @quangln2810)
  - Update Catalan and Spanish translations (#19296 by @Ismaaa)
  - Update Indonesia translation (#19320) by @therour)
  - Update Brazilian Portuguese translation (#19374 by @diegomengarda)


### 2.13.1

*2020-04-13*

#### New features
- Autocomplete
  - Add change event (#17913 by @sxzz)

#### Bug fixes

- Autocomplete
  - Fix suggestion error when textarea (#18478 by @Roojay)
- Carousel
  - Fix console typo bug (#18264 by @IceFox)
- Image
  - Fix preview dose not show when preview list not contain src issue (#18975) (#19130 by @luckyCao)
  - Fix shortcut key not work at second time issue (#18983) (#19156 by @luckyCao)
  - Don't show image-viewer when preview is false (#18967 by @inooNgt)
- Transfer
  - Fix incorrect line-height of el-transfer's first list item when it was used with  el-form-item (#18917 by @Hanx)
- InputNumber
  - Correctly compute inputNumberDisabled (#18439 by @ashuser-pendo)
- Chore
  - Remove index intro (#19155 by @iamkun)
- Doc
  - Popconfirm doc update (#18324 by @iamkun)
  - Fix step-strictly docs typo (#18705 by @dream2023)
  - Fix a type error in document of steps component (#17555 by @haoranyu)

### 2.13.0

*2019-11-26*

#### New features

- Popconfirm
  - Add popconfirm component (#17548 by @iamkun)

#### Bug fixes

- BackTop
  - Use cubic bezier scrolling (by @lon)
- DatePicker
  - Fix bug of only select min date of date range problem (#17191 by @smk0621)
- Select
  - Fix select test cases (by @msidolphin)
- Tree
  - Add font-size for the style of tree empty-text (#17094 by @spengjie)
- Table
  - Column header can be costumed (#17291 by @ziyoung)
  - Update table header cell style (#17284 by @ziyoung)
  - Fix table header height after filter (#17348 by @ziyoung)
  - Fixed row-style with display not work (#17002 by @a631807682)
  - Fix header table not display (#17341 by @ziyoung)
- Calendar
  - Import el-button and el-button-group (#17376 by @masongzhi)
- MessageBox
  - Fix icon position error (#17410 by @nullptru)
- TimePicker
  - Set the selection range after scrolling up or down (#16868 by @mattheyan)
- Message
  - Fix close instace offsetHeight（#17564） (#17852 by @gzwgq222)
- Form
  - Callback of validateField should be optional (#17314 by @CarterLi)
- Cascader
  - Fix TypeScript 3.7 compatibility (#17881 by @CarterLi)
- Menu
  - Fix router NavigationDuplicated error when using vue-router@^3.1.0 (#17269 by @iamkun)
- Dropdown
  - Update type file (#17550 by @iamkun)
- Progress
  - Add strokeLinecap prop (#17552 by @iamkun)
- InfiniteScroll
  - Skip trigger event on invisible element (#17553 by @iamkun)
- Image
  - Perfect picture preview behavior (#16985 by @luckyCao)
  - Fix shield the page when preview big image (#16796 by @luckyCao)
- Drawer 
  - Bugfix drawer-append-to-body-not-working (#16953 by @JeremyWuuuuu)
- Select
  - Fix tag show value or empty issue (17199 by @luckyCao)
- Scrollbar
  - Fix FireFox scroll bar width (#18091 by @iamkun)
  
#### Optimization

- I18n
  - Update sv-SE.js (#17926 by @FOLLGAD)
  - Update avatar component fr doc (#17762 by @blombard)
- Docs
  - Fix time-select typo (#17250 by @wacky6)
  - Fix Drawer attribute accepted value typo in es (#17122 by @haoranyu)
  - Update Spanish changelog 2.12.0 (#17364 by @Gonzalo2310)
  - Fix Changelog typo (#17874 by @renlixin)
  - Fix Loading demo (#17862 by @MBearo)
  - Add input event in input Events Table (#18061 by @zhouxinyong)
  - Delete Input repeat change event (#18085 by @zhouxinyong)

### 2.12.0

*2019-08-29*

#### New features

- Popover
  - Add close-delay prop (#16671 by @LachlanStuart)
- Theme
  - Add Chrome Extension: Element Theme Extension (#16686 by @iamkun)
- Icon
  - Add font-display to @font-face declaration (#16805 by @iamfaizalandyka)

#### Bug fixes

- Carousel
  - Fix onChange emit value (#16705 by @iamkun)
- Notification
  - Fix modifying incoming option object (#16704 by @iamkun)
- DatePicker
  - Add className for picker option (#16632 by @iamkun)
- DateTimePicker
  - Fix time-spinner not scroll to right position (#16854 by @jesse-li)
- Table
  - Prevent click handler after drag (#16850 by @ziyoung)
  - Fix chrome crash when set thead css display to none (#16956 by @luckyCao)
  - Fix wrong empty block height (#16861 by @ziyoung)
  - Not throw error when calling toggleExpansion (#16304 by @yyjjqq94)
  - Not trigger sort-change event when mounted (#17113 by @a631807682)
  - Fix setCurrentRow unable to clear highlight row (#16879 by @ziyoung)
  - Fix expand-row-keys not work when data is loaded asynchronously (#16899 by @ziyoung)
  - set toggleAllSelection as instance property (#17137 by @ziyoung)
- Tree
  - Fix distance between label and checkbox (#16799 by @Hazlank)
- Tabs
  - Fix incorrect TabItem's position (#16520 by @victorting)
  - Fix activated tab is out of visual range bug (#17033 by @nullptru)
- Calendar
  - Fix weekdays i18n issue (#16772 by @ubitoffee)
  - fix locale error by (#17208 by @iamkun)
- Cascader
  - Fix CascaderPanel display error (#16716 by @zhangHongEn)
  - Fix disable status and close button issue (#16224 by @yyjjqq94)
- Input
  - Fix Korean composition event (#15069 by @MoonHyuk)
  - Fix click event of clear button not trigger when using v-loading (#16576 by @a631807682)
- Select
  - Not toggle dropdown when filtering (#17205 by @luckyCao)
- Transfer
  - Fix style error  (#17206 by @iamkun)
- Dialog
  - update sass var (#16365 by @haoranyu)
- RadioGroup
  - Not produce invalid HTML in table if "is" attribute is specify (#17070 by @nullptru)
- Divider
  - Support custom classes (#17078 by @island205)

#### Optimization

- Checkbox
  - Improve screen reader experience (#16575 by @tylertrotter)
- Docs
  - Update changelog (#16773 by @SimonaliaChen)
  - Update contributing guide (#14800 by @sinchang)
  - Fix typo in Drawer docs (#16848 by @winkay)
  - Update custom theme (#16983 by @iamkun)
  - Add Esperanto translation (#16955 by @maxkoryukov)
  - Update input-number document about change event (#16316 by @luckyCao)
  - Update spanish doc 2.11.1 (#16961 by @Gonzalo2310)
- I18n
  - Remove translation of 'year' in catalan language as in the other languages (#14722 by @oscaralbareda)
  - Update spanish changelog 2.10.0 and 2.10.1 (#16548 by @Gonzalo2310)
  - Update ar.js (#16653 by @l3op)
- Test
  - Correct spelling error (#16672 by @boomler)
  - Refactor unit test to use data-uri (#16847 by @a631807682)
- Types
  - Fix httprequest type (#16633 by @luckyCao)

### 2.11.1

*2019-07-26*

#### Bug fixes

- Image
  - Fix Image component SSR compatibility (#16737 by @luckyCao)
- Chore
  - Update dart-sass compatibility (#16744 by @LewisChennnnn)

### 2.11.0

*2019-07-25*

#### New features

- Drawer
  - Add drawer component (#16577 by @JeremyWuuuuu)

#### Bug fixes

- Checkbox
  - Enhance css selector (#16006 by @Hazlank)
- Tree
  - Make el-tree generic (#15934 by @JeremyWuuuuu)
  - Set isCurrent prop to False (#15870 by @kkkisme)
- Dropdown
  - Fix split-button caret default color (#15931 by @JuniorTour)
- Cascader
  - Fix level 1 children is empty update problem (#16399 by @luckyCao)
  - Add sets default values when lazy is true (#16420 by @luckyCao)
  - Fix display errors when node value is duplicate (#15935 by @junyiz)
  - Expose getCheckedNodes and fix options change bug (#16709 by @SimonaliaChen)
- Calendar
  - Display correct header when range is specified (#16354 by @ziyoung)
- Submenu
  - Fix prop append-to-body (#16289 by @a631807682)
- Table 
  - Fix tree table when updating data (#16481 by @island205)
- Select
  - Fix memory leak issue (#16463 by @island205)
- InfiniteScroll
  - Update naming & doc (#16698 by @iamkun)
- Avatar
  - Fix image not center vertically issue (#16489 by @luckyCao)
- Dialog
  - Add destroyOnClose attribute (#16455 by @ziyoung)
- Image
  - Add big Image preview feature (#16333 by @luckyCao)

#### Optimization

- Docs
  - Fix dropdown demo (#16193 by @webxmsj)
  - Fix typo in table documents (#15971 by @howiefh)
- I18n
  - Update translation of Thai language (#16689 by @ponkrit)
- Chore
  - Update theme base api (#16607 by @iamkun)
  - Add form theme token (#16699 by @iamkun)
  - Mark ali inner user's access (#16609 by @iamkun)
  - Fix doc anchor bug (#16692 by @iamkun)

### 2.10.1

*2019-07-02*

#### Bug fixes

- Table
  - Fix sort icon (#15439 by @bezany)
  - Fix layout breaks when append slot exists (#16332 by @ziyoung)
  - Fix showOverflowTooltip not reactive (#16295 by @a631807682)
  - Register scrollbar in filter-panel (#16246 by @ziyoung)
- Chore
  - Fix 2.9 docs (#16233 by @ziyoung)
  - Fix index page theme intro english css style issue (#16254 by @iamkun)

#### Optimization

- Tag
  - Compatible with IE (#16334 by @ziyoung)
- Chore
  - Update Dingtalk Group QR image (#16236 by @iamkun)
- Doc
  - Update online theme roller doc (#16244 by @iamkun)

### 2.10.0

*2019-06-25*

#### New features

- I18n
  - Added Uzbek language (#15796 by @ogabek96)
- Calendar
  - Add first-day-of-week attribute (#16047 by @ziyoung)
- Avatar
  - Add avatar component (#16144 by @luckyCao)
- Upload:
  - Add capability to customize thumbnail template (#13192 by @victorzhuk)

#### Bug fixes

- Tree
  - Not highlight tree node when currentKey is null (#15668 by @yyjjqq94)
  - Fix issue #15538 caused by two Tree sharing the same data. (#15615 by @VanMess)
- Upload
  - Update the parameter `fileList` type (#15716 by @underfin)
- Table
  - Fix loading icon not display (#15868 by @ziyoung)
  - Fix background color of complex table when hovering (#15504 by @cnlon)
  - Fix current-row-key and select event bug (#15983 by @ziyoung)
  - Height accepts more units (#16013 by @ziyoung)
  - Fix reserve-selection not work (#16135 by @ziyoung)
- Docs
  - Fix Divider attribute type in zh-cn (#15889 by @haoranyu)
- Menu
  - Fixed submenu hidden bug after adding popper-append-to-body (#15391 by @PanJiaChen)
- Select
  - Fix initialInputHeight (#15989 by @yyjjqq94)
  - Fix default-first-option behavior when typing Chinese (#15431 by @VanMess)
  - fix double import problem (#16215 by @lengband)
- Message
  - Add type def for offset option (#16027 by @matjaz)
- Timeline
  - Fix reverse broken (#16091 by @ziyoung)
- Slider
  - Fix #15545 by adding explains about "input" event in Chinese (#15588 by @VanMess)
- InfiniteScroll
  - Update package name (#16125 by @iamkun)
- MessageBox
  - Fix  distinguishCancelAndClose action not same as docs bug (#15438 by @qingdengyue)
- PopupManager
  - Fix z-index cannot be rewritten at first using (#15738 by @luckyCao)
- Docs
  - Delete an incorrect closing html tag and empty block code (#16194 by @Alexeykhr)
- Chore
  - Update test api host (#15807 by @iamkun)

#### Optimization

- Tree
  - Modify loop conditions to improve performance (#15699 by @KingJeason)
- Theme
  - Refine GA track & Update footer link forward to online theme roller (#16007 by @island205)
- Badge
  - Update badge prop check (#16198 by @iamkun)
- Avatar
  - Update theme config var (#16202 by @luckyCao)
- I18n
  - Update pt-br.js (#15776 by @gigioSouza)
  - Update Farsi translation (#15881 by @pamenary)
- Docs
  - Add missing components in quickstart (#16063 by @pape2016)
  - Update french translation (#16208 by @blombard)
  - Add description $slots.default (#15444 by @Alexeykhr)
  - Update Spanish Doc 2.9.1 (#15840 by @Gonzalo2310)
  - Fix spelling mistakes in fr (#15837 by @blombard)
  - Update changelog 2.9.2 Spanish (#16185 by @Gonzalo2310)

#### Breaking changes

- Form
  - Remove success status (#16159 by @ziyoung)

### 2.9.2

*2019-06-21*

#### Correction de bugs

- Chore
  - Correction du fichier de définitions TS (#15805 by @NateScarlet)

### 2.9.1

*2019-05-30*

#### Nouvelles fonctionnalités

- Table
  - les événements tree-props，default-expand-all, expand-row-keys, toggle-row-expansion method and expand-change sont pris en charge dans Tree Table (#15709 by @ziyoung)

#### Correction de bugs

- Table
  - Correction de quelques bugs (#15709 by @ziyoung)
- Theme
  - Mise à jour de l'hôte api (#15784 by @iamkun)

#### Optimisation

- Chore
  - Mise à jour de InfiniteScroll type (#15794 by @iamkun)

### 2.9.0

*2019-05-30*

#### Nouvelles fonctionnalités

- Backtop
  - Ajout du composant Backtop (#15541 by @iamkun)
- PageHeader
  - Ajout du composant PageHeader (#15714 by @ziyoung)
- InfiniteScroll
  - Ajout de la directive InfiniteScroll (#15567 by @iamkun)
- Cascader
  - Ajouter plusieurs mode et filter-method (#15611 by @SimonaliaChen)
- Message
  - Affichage en mode pile (#15639 by @island205)
- Tag
  - Ajout d'un effet de prop (#15725 by @SimonaliaChen)
- Tabs
  - Aligner le titre à gauche lorsque le type est carte (#15695 by @luckyCao)
- DatePicker
  - Supporte les chaînes de caractères littérales (#15525 by island205)
- Image
  - Ajout du support pour les attributs de transmission et listeners (#15578 by @VanMess)
- Theme
  - Ajout d'un popup en arrière plan (#15412 by @iamkun)
- Chore
  - Mise à jour de la nouvelle page d'index 2.9.0 (#15682 by @iamkun)

#### Correction de bugs

- Table
  - Correction du comportement de sort-change lorsque la condition de tri est nulle (#15012 by @joelxr)
- Image
  - Correction de la compatibilité ssr et object-fit (#15346 by @SimonaliaChen)
- Input
  - Correction du style de show-word-count dans el-form (#15359 by @lvjiaxuan)
  - Correction de l'icône d'erreur pas centrée (#15354 by @YiiGuxing)
- Calendar
  - Correction du mauvais jour de la semaine quand le jour est dimanche (#15399 by @qingdengyue)
  - Correction du bug de disparition d'octobre (#15394 by @qingdengyue)
- Tabs
  - Correction de l'onglet de base imbriqué dans l'erreur de remplissage de card (#15461 by @SimonaliaChen)
- Tag
  - Correction du problème de propagation d'arrêt (#15150 by @infjer)
- Form
  - Correction de input-group dans l'erreur de hauteur de form-item (#15457 by @SimonaliaChen)
  - Résolution de l'issue de resetFields (15181 by @luckyCao)
- Tooltip
  - Correction de tabindex personnalisé ne fonctionnant pas (#15619 by @SimonaliaChen )
- Link
  - Correction de la classe de style d'icône (#15752 by @iamkun)
- Select
  - Revert définit la valeur à null une fois effacée (#15447 by @iamkun)
- Loading
  - Résolution du problème de mise à jour de dom lorsque l'état de chargement change rapidement (#15123 by @FAKER-A)
- Switch
  - Label avec les événements récurrents el-switch (#15178 by @FAKER-A)
- Slider
  - Correction d'un problème de style lorsque la barre de défilement est cliquée (#15561 by @luckyCao)
- Radio
  - Résolution de l'issue 14808 (#14809 by @OverTree)
- Form
  - Résolution du problème de resetFields (15181 by @luckyCao)
- Chore
  - Mise à jour des dépendances et corrige le bug de démonstration (#15324 by ziyoung)
- Type
  - Correction du type de chargement (#15635 by @iamkun)
  - Correction du type d'icône (#15634 by @iamkun)
  - Fixe la définition du type de lien (#15402 by @iamkun)

#### Optimisation

- Cascader
  - Refactor (#15611 by @SimonaliaChen)
- Chore
  - Mise à jour de la logique du nouveau composant (by @iamkun)
- Docs
  - Renommage de variables dans la documentation (#15185 by @liupl)
  - Correction du type d'attribut d'image et de la valeur par défaut (#15423 by @haoranyu)
  - Correction d'un bug de formulaire (#15228 by @SHERlocked93)

### 2.8.2

*2019-04-25*

#### Corrections de bugs

- Icon
  - Mise à jour (#15272 par @iamkun)
- Docs
  - Correction du style de Form et Input (#15273 par @ziyoung)

### 2.8.1

*2019-04-25*

#### Corrections de bugs

- Icon
  - Mise à jour de l'icône du cascadeur et du select (#15264 par @SimonaliaChen)
  - Mise à jour (#15258 #15268 par @iamkun)

#### Optimisation

- Chore
  - Mise à jour du script de build (#15267 par @ziyoung)
- Docs
  - Correction de la couleur de souslignage d'un lien (#15265 par @iamkun)
- Autre
  - Correction d'une configuration de migration non compatible avec les propriétés et évènements en camelCase (#15260 par @SimonaliaChen)

### 2.8.0

*2019-04-25*

#### Nouvelles fonctionnalités

- Divider
  - Ajout du composant divider (#15055 par @island205)
- Rate
  - Ajout des couleurs et des classes d'icônes personnalisées en passant un objet (#15051 par @SimonaliaChen)
- Link
  - Ajout du composant Link (#15052 par @iamkun)
- Calendar
  - Ajout du composant calendar (#14908 by @ziyoung)
- Icon
  - Ajout d'une icône (#15214 par @iamkun)
- Alert
  - Ajout d'un thème sombre (#15041 par @island205)
- Image
  - Ajout du composant image (#15117 par @SimonaliaChen)
- Collapse
  - CollapseItem peut être désactivé (#15076 par @ziyoung)
- Carousel
  - Ajout d'un attribut de direction et support de la direction verticale (#15122 by @ziyoung)
- Pagination
  - Ajout d'un attribut caché sur une seule page (#15096 par @ziyoung)
- Slider
  - Ajout des marqueurs (#15133 par @luckyCao)
- Input
  - Ajout de l'attribut show-word-count (#15075 par @luckyCao)
- InputNumber
  - Ajout de l'attribut step-strictly (#15050 par @luckyCao)
- Tooltip, Dropdown, Popover
  - Support de l'attribut tabindex (#15167 by @ziyoung)

#### Corrections de bugs

- Notification
  - Correction du word-break du titre (#15008 par @iamkun)
- Form
  - Correction d'une erreur dans les règles de validation (#14985 par @luckyCao)
  - Correction du style du label (#14969 par @ziyoung)
  - Les FormItem requis affiche un astérisque lorsque le label est auto (#15144 by @ziyoung)
- Pagination
  - Fix du slot non mis à jour (#14711 par @lucyhao)
- Table
  - Correction d'un bug de chargement en mode lazy (#15101 by @ziyoung)
  - Correction de la largeur des cellules lorsque colspan est supérieur à 1 (#15196 by @ziyoung)
  - Amélioration des performances (#14868 by @ziyoung)
  - Ne pas émettre de déclencheurs de changement de tri pendant l'initialisation (#14625 by @PeanutWatson)
  - Comportement égal pour height et max-height (#14660 by @arthurdenner)
- Dialog
  - Correction de la casse des longs mots (#15027 par @iamkun)
- Alert
  - Mise à jour (#15186 par @ziyoung)
- Tabs
  - Correction d'un problème où le rejet d'une promesse touchait l'application (#14816 par @ffxsam)
  - Rerendu lors d'un changement de slots (#1523238 by @ziyoung)
- Message
  - Mise à jour (#14968 par @agoni121212)
- Select
  - Correction d'une erreur lorsque la valeur est indéfinie ou nulle (#15022 par @luckyCao)
- Tree
  - Détruire le noeud courant après sa suppression (#14604 par @sinchang)
  - Amélioration des performances (#14881 par @ChenZhuoSteve)
- Dropdown
  - Correction de style (#14907 par @doing123)
- Slider
  - Correction d'un bug clavier a11y cassé (#14792 by @erezsob)
- Menu
  - La valeur ActiveIndex sera nulle si defaultIndex n'existe pas (#14074 par @hoythan)
- Directive
  - RepeatClick : utilisation de Date.now() au lieu de Date() (#14776 par @pavelmash)
- Upload
  - Correction du style d'affichage des images transparentes (#15039 par @iamkun)
- Thème
  - Ajout d'une bordure (#1525256 par @iamkun)

#### Optimisation

- Chore
  - Mise à jour du changelog zh-cn (#14965 par @iamkun)
  - Masquer la description de la démo quand elle est vide (#15014 par @ziyoung)
  - Afficher les informations du serveur de développement par défaut par @iamkun)
  - Correction d'une erreur de changelog 2.6.0 (#15026 par @iamkun)
  - Mise à jour de la configuration de compilation (#14821 par @abc3660170)
  - Ajout d'hmr (#15221 par @SimonaliaChen)
  - Utilisation de sourcemap dans l'environnement dev (#15087 par @ibufu)
Docs
  - Renommage de la variable dans docs (#14602 #15003 #15094 #15105 par @liupl)
  - Correction d'une erreur de téléchargement de doc (#15023 par @iamkun)
  - Mise à jour du validateur de formulaire personnalisé doc (#15040 par @iamkun)
  - Mise à jour des onglets docs pour afficher les onglets verticaux (#15053 par @iamkun)
  - Utiliser eleme.cn comme domaine (#15139 par @ziyoung)
  - Correction du nom de route Image (#15194 par @iamkun)
  - Suppression de la traduction en double (#15207 par @iamkun)

#### Breaking changes

- Rate
  - Correction du support de l'affichage décimal en mode désactivé (#15089 par @haoranyu)
- Select
  - Utiliser le label de l'option pour régler le placeholder en mode filtre (#14989 par @ibufu)

### 2.7.2

*2019-04-03*

#### Corrections de bugs

- Form
  - Correction du style de `label-width` auto (#14955 par @ziyoung)

#### Optimisation
- Docs
  - Correction d'une erreur de lien img (#14957 par @iamkun)
- Chore
  - Correction d'une erreur de déploiement mkdir (#14952 par @iamkun)

### 2.7.1

*2019-04-03*

#### Corrections de bugs

- Select
  - Définir la valeur à null lorsqu'elle est effacée (#14322 par @aaronfulkerson)
- Input
  - Mise à jour des valeurs dépendantes du DOM lors d'un changement de type (#14889 par @wacky6)
- Table
  - Faire fonctionner `defaultExpandAll' lorsqu'une colonne étendue existe (#14935 par @ziyoung)
- Dialog
  - Couleur d'arrière-plan configurable (#14939 par @ziyoung)
- Form
  - `label-width` supporte la largeur automatique (#14944 by @ziyoung)

#### Optimisation
- Docs
  - Mise à jour de la documentation en espagnol (#14913 par @Gonzalo2310)
  - Ajout d'un document en français pour le nouveau composant (#14924 by @ziyoung)
  - Optimiser la documentation des onglets (#14938 by @ziyoung)

### 2.7.0

*2019-03-28*

#### Nouvelles fonctionnalités

- Table
  - Ajout du support de l'arborescence des données (#14632 by @ziyoung)

#### Corrections de bugs

- Tabs
  - Utilise la couleur primaire comme couleur de l'ombre (#14558 par @Richard-Choooou)
  - Rerendu lorsque label change (#14496 par @akki-jat)
- Table
  - Le pied de page suit l'alignement des cellules du corps (#14730 by @ziyoung)
- NavMenu
  - Correction d'un bug de clic sur el-submenu (#14443 par @PanJiaChen)
- Dropdown
  - Compatible avec la nouvelle syntaxe v-slot 2.6 (#14832 by @ziyoung)
- ColorPicker
  - Correction d'une erreur de couleur hexadécimale (#14793 par @iamkun)
- Tree
  - Revert pr #13349 (#14847 par @ziyoung)
- Tooltip
  - Affichage lorsque la valeur initiale est vraie (#14826 by @ziyoung)
- Docs
  - Mise à jour de la documentation du cascader (#14442 par @panhezeng)
- Style
  - Correction des media queries dans sm-only, md-only, lg-only (#14611 by @sinchang)

#### Optimisation

- Chore
  - Ajouter la description de la page web (#14802 par @iamkun)

### 2.6.3

*2019-03-21*

#### Corrections de bugs

- Correction du style de la démo de Cascader (#14789 par @ziyoung)
- Suppression des opérations DOM inutiles (#14788 by @ziyoung)
- Correction DatePicker valeur par défaut DST (#14562 par @wacky6)

### 2.6.2

*2019-03-21*

##### Nouvelles fonctionnalités

- DatePicker
  - Ajout d'une plage de mois pour l'attribut type (#14487 par @zxyRealm)
- i18n
  - Ajout de la locale croate (#14360 par @danijelh)

##### Corrections de bugs

- Input
  - Correction d'un régression (#14572 par @wacky6)
- DatePicker
  - Correction du calcul du premier jour de la semaine (#14523 par @sinchang)
  - Correction du format de valeur du sélecteur de semaine (#13754 par @wacky6)
- Steps
  - Correction du problème #14502 (#14596 par @sinchang)
  - Correction du style avec le thème simple (#14610 par @sinchang)
- Docs
  - Mise à jour de la doc française pour la 2.6.1 et correction de fautes de frappe (#1455555 par @smalesys)
  - Renommage d'une variable dans la documentation de la table (#14587 par @likwotsing)
  - Ajout de l'index de recherche en français (#14565 par @iamkun)
  - Correction du style de la page TimePicker (#14579 par @ziyoung)
  - Renommage d'une variable dans la page Upload (#14593 par @liupl)
  - Mise à jour de la traduction française (#14643 par @smalesys)
  - Mise à jour de la documentation du validateur de formulaire asynchrone (#14694 par @iamkun)
  - Correction d'une erreur de doc tooltip (#14748 par @iamkun)
  - Correction d'une coquille (#14751 par @2bj)
  - Correction de la surbrillance pour Webkit touch (#14703 by @VladG0r)

##### Optimisation

- Tâche
  - Mise à jour du script de build dans le ci (#14600 par @ziyoung)
  - Mise à jour du tracking ga (#14560 par @iamkun)
  - Ajout d'un événement ga supplémentaire (#14633 par @iamkun)
  - Mise à jour du groupe de discussion (#14741 par @iamkun)
  - Mise à jour des deps de test et conf (#14735 par @wacky6)
  - Mise à jour de Gulp (#14745 by @ziyoung)
  - Utilisez le codepen pour afficher les démos et correction d'une erreur de doc (#14747 by @ziyoung)

### 2.6.1

*2019-03-03*

#### Corrections de bugs

- **Ne pas spécifier la version de node** (par @iamkun dans #14546)
- Correction du répertoire doc dans `deloy-faas.sh` (par @ziyoung dans #14553)
- Correction d'un problème de style de date dans le changelog de la 2.6.0 (par @island205 dans #14547)
- Correction d'une typo dans la doc (par @wack6 dans #14552)

### 2.6.0

*2019-03-01*

#### Nouvelles fonctionnalités
- Timeline
  - Ajout d'un composant timeline (par @jikkai dans #14248)
- DropdownItem
  - Ajout de la propriété `icon` à `el-dropdown-item` (par @gabrielboliveira dans #14088)
- Input
  - Ajout de propriétés pour afficher les mots de passe (par @phshy0607 dans #13966)
- Select
  - Ajout du slot `empty` (par @elfman au #13785)
- Autocomplete
  - Ajout de la propriété `highlight-first-item` (par @YamenSharaf dans #14269)
- I18n
  - Création de la locale Arménienne (par @hamletbarsamyan dans #14214)
- Docs
  - Traduction française (par @smalesys dans #12153, #14418, #14434)

#### Optimisation
- Alert
  - Mise à jour de la classe du slot par défaut de la description de Alert (par @iamkun dans #14488)
- Input
  - Mise à jour de l'input de type password (par @iamkun dans #14480)
- InputNumber
  - Retrait d'un parseFloat inutile (par @JuniorTour au #14172)
- Menu
  - Ajout du support de `el-menu-item` sans index (par @georgyfarniev dans #13298)
- Table
  - Suppression de certaines opérations du DOM (par @elfman dans #13643)
- Upload
  - Optimisation du code (par @elfman dans #13973)
- Popup
  - Optimisation du code (par @KAionro dans #14413)
- Docs
  - Ajout de détails sur la façon d'exécuter le mode play pour les contributeurs (par @island205 dans #14355)
  - Ajout d'un avertissement concernant Input (par @wacky6 dans #14463)
  - Mise à jour de la doc de Table (par @luguokong dans #14329)
  - Mise à jour de la doc d'Input (par @iamkun dans #14437)
  - Mise à jour de la doc sur le thème (par @wangguohaohao dans #14297)
  - Le style de l'icône change lorsque vous passez dessus (par @tuxinghuan dans #14295)
- Build
  - Minification du CSS et du JS pour le site d'Element (par @iamkun dans #14430)
  - Accélération de webpack (par @hetech dans #14484)
  - Utilisation du cli pour sélectionner la version de publication (par @hetech dans #14354)
- Installation de stale pour la gestion des issues (par @island205 dans #14392)

#### Corrections de bugs
- Menu
  - Correction d'un bug de focus des sous-menus lors du changement d'onglet du navigateur (par @liupl dans #13976)
- MessageBox
  - Correction de la définition du type (par @NateScarlet dans #14278)
- ScrollBar
  - Empêche le clic droit sur le bouton du pouce (par @xifeiwu dans #14196)
- Switch
  - Déclenchement de la validation du formulaire si la valeur change (par @hetech dans #14426)
- Table
  - La méthode toggleAllSelection est maintenant une méthode d'instance (par @letanure dans #14075)
- Tabs & Dropdown
  - Correction du style (par @hetech dans #14452)
- Tree
  - Les tips sont différents des tableaux (par @ColinCll dans #14331)
- Docs
  - Correction d'une erreur de doc du DatetimePicker (par @iamkun dans #14290)
  - Problème d'orthographe dans la documentation du DatePicker (par @helmut dans #14481)
  - Correction du style de la doc de Pagination(par @liuchuzhang dans #14451)

#### Breaking changes
- Table
  - Fix params order of row events (by @jikkai in #12086)

### 2.5.4

*2019-02-01*

#### Corrections de bugs

- Build: Correction d'un problème de configuration de babel qui cassait la transition collapse (par @island205 dans #14282)

### 2.5.3

*2019-01-31*

#### Optimisation

- Optimisation du code de Message (par @vok123 dans #14029)
- Suppression des gh-pages (par @ziyoung dans #14266)
- Ajout du lien IssueHunt (par @island205 dans #14261)

#### Corrections de bugs

- Correction d'une erreur du module UMD côté serveur (par @island205 dans #14242)
- Correction du style du TabBar actif (par @iamkun dans #14240)
- Correction d'une erreur de code dans la démo de Table (par @xunmeng dans #14253)

### 2.5.2

*2019-01-27*

#### Optimisation
- Docs:
  - Mise à jour du ChangeLog ES 2.5.1 (par @Gonzalo2310 dans #14231)

#### Corrections de bugs
- Build:
  - Suppression des commentaires non supprimés dans le module umd `lib/index.js` (par @island205 dans #14233)
  - Correction d'une erreur d'exportation dans le module commonjs utilisé dans nuxt.js (par @island205 dans #14232)
  - Correction des problèmes de build 2.5.1 (par @iamkun dans #14228)

### 2.5.1

*2019-01-26*

#### Optimisation
- DatePicker: surbrillance du mois et de l'année courants (par @Debiancc dans #14211)
- Mise à jour du changelog 2.5.0 (par @wacky6 dans #14217)

#### Corrections de bugs
- Correction d'un problème d'exportation due par la mise à jour du webpack (par @island205 dans #14220)
- Conservation de la docs 2.4.11 && nouveau sous-dossier pour 2.5+ (par @iamkun dans #14222)

### 2.5.0

*2019-01-25*

#### Nouvelles fonctionnalités
- DatePicker
  - Ajout de l'attribut `validate-event` (par @ziyoung dans #13531)
- DateTimePicker
  - `pickerOptions` supporte l'option `selectableRange` (par @eeeeeeeeeeeason)
- Tag
  - Ajout de l'événement `click` (par @licdream dans #14106)
- I18n
  - Support de la langue kirghize (par @zzjframework dans #14174)

#### Optimisation
- Mise à niveau vers webpack@4 (par @jikkai dans #14173)
- Input
  - Simplification de l'implémentation, suivant un flux de données à sens unique. Correction de plusieurs bugs liés. (par @wacky6 dans #13471)
- Mise à jour du fichier Axure avec de nouveaux composants (par @ziyoung dans #13773)

#### Corrections de bugs
- Autocomplete
  - Correction de la dernière ligne du menu déroulant qui était coupée (#13597) (par @ziyoung)
  - Correction d'une flèche de popper manquante (#13762) (par @liuchuzhang)
- Carrousel
  - Nettoyage du timer lorsque le composant est détruit (#13820) (par @elfman)
- Cascader
  - Suppression de la propriété obsolète des props calculées (#13737) (par @iamkun)
  - Correction de la définition du type CascaderOption dans TypeScript (#13613) (par @NateScarlet)
  - Correction de l'icône couvrant le texte (#13596) (par @ziyoung)
- Checkbox
  - Refonte du style (par @PanJiaChen)
- DatePicker
  - Ajout d'un `key` de v-for manquant dans TimeSpinner (#13547) (par @Ende93)
  - Correction du surlignage de la semaine dans la bordure de l'année (#13883) (par @suyi91)
- Input
  - Correction de la référence de textarea dans le DOM (#13803) (par @laomu1988 @island205)
- Pagination
  - La valeur d'entrée ne sera pas inférieure à 1 (#13727) (par @elfman)
- Popover
  - Correction d'un problème de popover avec le déclencheur de hover (#13104) (par @goldengecko)
  - Correction d'une fuite de mémoire de l'instance popper (#13988) (par @qpxtWhite)
- Radio
  - Refonte du style (par @ohhhoney1)
- Table
  - Amélioration du tri des tables en cliquant sur la flèche de tri (#12890) (par @ohhoney1)
  - Correction d'un problème d'alignement vertical du texte vide sur IE10+ (#13638) (par @imzjy)
  - Correction de la documentation sur le type d'index (#13628) (par @ilovefafafa)
  - Correction du problème d'affichage `show-summary` lorsque le header multi-niveaux est fixe (#13914) (par @luckyCao)
- Tabs
  - Correction d'un bug de défilement automatique (#13696) (par @iamkun)
  - Obtenir l'onglet correct par le nom de l'onglet (#13705) (par @iamkun)
  - Utilisez paneName au lieu de name pour déterminer le style du panneau (#13733) (par @iamkun)
- Tree
  - Correction de la propriété `showCheckbox` sur `Tree` qui ne pouvait pas affecter leurs `tree-node` enfants(par @KidneyFlower)
  - Mise à jour des fichiers de doc et de définition (#13540) (par @ziyoung)
- Upload
  - Ajout de le propriété `url` au fichier uploadé lorsque `list-type` est modifié (#13771) (par @elfman)
- Slider
  - Correction de l'indentation du code source (#13955) (par @wacky6)
- I18n
  - Ajout des traductions manquantes en catalan (par @jaumesala)
  - Ajout de la traduction russe manquante (#13658) (par @justlp)
  - Correction des traductions en finnois (#14137) (par @jenkrisu)
- Doc
  - Mise à jour de la documentation espagnol depuis la 2.4.11 (#13522) (par @Gonzalo2310)
- Autres
  - Suppression d'un script inutile (par @ziyoung)
  - Correction des ancres (#13753) (par @iamkun)
  - Correction de l'incohérence des majuscules dans la documentation (par @wonderjar)
  - Ajout du QR code du chat DingDing au readme (#13957) (par @iamkun)
  - Ajout des logs yarn au .gitignore (#13922) (par @mimimi)
  - Suppression du sponsor duotai (#14156) (par @island205)
  - Mise à jour du QR code dans le readme (#13960) (par @iamkun)
  - Mise à jour du lien CDN, correction d'une typo (par @ziyoung)

### 2.4.11

*2018-11-21*

- Revert pr #13296. Correction d'un clic sur Menu externe causant l'effondrement du SubMenu, #13478
- Ajustement des points de rupture media query sur petit écran (xs), #13468 (par @alekoshen712)

### 2.4.10

*2018-11-16*

- Correction des clics multiples sur Select pour afficher la liste déroulante, #13268
- L'icône d'effacement des champs n'est pas affichée lorsque Form est désactivé, #13208
- Ajustement des styles de Select, Progress, Autocomplete, Tooltip, Collaspe, TimePicker, #13188 (par @porcelainHeart) #13210 #13266 #13266 #13257 #13290 #13347 (par @PanJiaChen)
- Ajout de l'attribut `loop` dans le composant Carrousel, #13217
- Lorsque les données de Table changent, la ligne en surbrillance reste, #13200
- Le slot du header de Table peut recevoir des paramètres, #13263
- La méthode `clearFilter` de Table peut recevoir des arguments, #13176
- La bulle d'aide n'est plus créée lorsqu'il n'y a pas de contenu dans la cellule de Table, #13152 (par @rongxingsun)
- Le contenu de la zone de saisie du panneau ColorPicker peut être affiché correctement, #13278
- ColorPicker ne déclenche plus la validation des formulaires lors du glisser-déposer, #13299
- InputNumber: ajout de la méthode `select`, #13286 (par @st-sloth)
- AutoComplete: ajout de l'événement `clear`, #12171(par arthurdenner) #13326
- Vous pouvez fermer Menu en cliquant à l'extérieur, #13296
- La méthode `validateField` du formulaire peut recevoir des arguments, #13319
- Cascader: ajout de l'événement `visible-change`, #13415
- DatePicker: a ajout d'un slot pour les séparateurs d'intervalle, #13272 (par @milworm)
- Tree: ajout des propriétés `iconClass` et `currentNodeKey`, #13337 #13197 (par @isnifer)
- Progress: ajout du texte de statut #13198 (par @ali-master)
- Correction de `defaultCheckedKeys` de Tree, #13349 (par @dive2Pro)

### 2.4.9

*2018-10-26*

- Le paramètre `clearValidate` de Form supporte les strings #12990 (par @codinglobster)
- Ajout de l'attribut `type` pour Badge, #12991
- Les utilisateurs peuvent utiliser scoped-slot pour personnaliser l'en-tête de colonne de Table #13012 (par @ivanseidel)
- Correction du champ de Select incapable d'entrer du texte sous IE, #13034 (par @GaliMU)
- Les options Select ne s'enroule pas lorsque l'espace est suffisant, #12329 (par @akki-jat)
- Lorsque la liste déroulante de Select est ouverte, l'icône de la flèche s'affichera également correctement, #12353 (par @firesh)
- Correction de l'attribut de taille de Select qui ne fonctionnait pas, #13070
- La sélection de plusieurs valeurs peut aussi être effacée, #13049 (par @ZSkycat)
- Correction du dernier TabNav qui ne pouvait pas être supprimé, #13039
- Correction d'un problème d'affichage du label TabNav, #13178
- Ajout d'un slot de titre pour Alert, #13082 (par @Kingwl)
- Correction d'un problème où le contenu de l'infobulle de Table était incorrect, #13159 (par @elfman)
- Optimisation de l'animation de Upload lorsque le fichier est supprimé, #12987
- Style ajusté pour InputNumber lorsque le bouton de commande n'est pas affiché, #13052

### 2.4.8

- Ne pas afficher le contour lorsque le Switch est focus, #12771
- Correction du style de Dropdown dans ButtonGroup, #12819 (par @bluejfox)
- Ajout d'un événement d'ouverture pour Dialog, #12828
- Correction de l'ordre d'affichage incorrect de TabNav, #12846
- Correction d'un problème qui empêchait les Tabs de défiler jusqu'à l'onglet sélectionné, #12948
- Correction d'un problème de l'identificateur qui ne s'affiche pas lorsque le noeud de Tree est glissé, #12854
- Le paramètre de l'événement validation du formulaire contient le message de validation #12860 (par @YamenSharaf).
- Correction de DatePicker pour ne pas vérifier la validité du temps d'entrée de l'utilisateur, #12898
- Correction d'un problème avec l'attribut `render-header` de l'en-tête de table qui ne fonctionnait pas, #12914

### 2.4.7

*2018-09-14*

- Correction de DatePicker ne déclenchant pas la validation du formulaire, #12328 #12348
- Correction des erreurs lancées par DatePicker en mode multiple, #12347
- Correction d'une position incorrecte du spinner de DatePicker, #12415 (par @rang-ali)
- Correction du remplissage automatique de la zone de saisie de DatePicker, #12521 (par @abdallanayer)
- Correction du champ non-subrillant dans Cascader, #12341
- Correction d'un mauvais ordre de Tabpane, #12346
- Correction d'une position incorrecte du curseur ColorPicker, #12376 (par @cnwhy)
- Correction du style de SubMenu, #2457
- Correction de la surbrillance après la sélection de SubMenu, #12479
- Correction des valeurs incorrectes sélectionnées par Cascader, #12508 (par @huangjinqiang)
- Correction d'une valeur incorrecte dans le champ d'entrée Pagination, #12525
- Correction de l'ordre dans lequel la Pagination déclenche les événements, #12530
- Correction des filtres de table non-affichés, #12539
- Correction de l'arbre incapable de supprimer des nœuds, #12684
- Correction de la hauteur de Select Input changeant en mode simple, #12719
- Correction d'un style du label de FormItem sous forme imbriquée, #12748
- Ajout de l'attribut `autocomplete` pour Input, `auto-complete` devenant obsolète, #12514 (par @axetroy)
- Ajout des slots-scope pour Form pour afficher les informations de validation, #12715 (par @YamenSharaf)

### 2.4.6

*2018-08-09*

- Correction de Table n'affichant pas l'icône de filtre lorsque `filters` est un tableau vide, #12165
- Correction de Menu ne sauvegardant pas l'état actif lorsque `collapse` change, #12178 (par @elfman)
- Correction du Cascader n'échappant pas les caractères spéciaux poue les Regexp, #12248
- Correction d'un bouton Radio désactivé affichant l'ombre d'une case lorsqu'on clique dessus, #12262
- Correction de arrow key qui n'a pas d'effet lorsque la valeur par défaut est `undefined`, #12322
- Correction de la fonction de requête de Select non-stabilisée en mode multi, #12181
- Correction du mot-clé de la requête Select disparaissant en mode multi, #12304
- Correction d'une largeur incorrecte de Dialog lorsqu'il est affiché en plein écran, #12203
- Correction de l'affichage incorrect de Main sur IE, #12237
- Correction de Input déclenchant deux validations de formulaire, #12260
- Correction de l'ajout d'un nouveau nœud d'arborescence provoquant la disparition des nœuds, #12256
- Correction d'un nœud d'arborescence non supprimé après avoir glissé, #12279
- Correction du Popover non-visible quand InputNumber a le focus, #12284
- Ajout de l'attribut `popper-append-to-body` pour Autocomplete, #12241
- Ajout du support du modificateur `sync` pour l'attribut `page-size` de Pagination, #12281

### 2.4.5

*2018-07-26*

- Correction du réglage de Table `class-name` qui ne fonctionne pas pour les colonnes `expand`, #12006
- Ajout de la méthode `toggleAllSelection` pour Table, #12047
- Correction d'une mauvaise position du slot de suffixe lorsque Input contient Select, #12108
- Correction de `line-height` de l'option impossible à régler, #12120
- Correction de TimeSelect avec la valeur par défaut `null` ne pouvant être assigné après avoir exécuté `resetField`, #12010
- Correction d'un événement keydown qui n'étant pas arrow key ne fonctionne pas dans Tree, #12008
- Correction d'un nœud parent vérifié en mode lazy, #12106
- Ajout du paramètre `includeHalfChecked` pour getCheckedNodes de Tree, #12014

### 2.4.4

*2018-07-13*

- Correction du déclenchement de la validation de Select après la réinitialisation du formulaire, #11837
- Correction d'une mauvaise position du slot `suffix` de Input lorsque le slot `suffixe` est avec le slot `append`, #11951
- Correction de Input affichant toujours l'icône clear même en lecture seule, #11967
- Correction d'un nœud d'arborescence coché lorsqu'il est désactivé, #11847
- Correction des `default-checked-keys` qui ne fonctionnait pas, #11971
- Correction de `empty-text` non visible lorsque le noeud de Tree est filtré, #11971
- Correction de la position du `empty-text` surdimensionné dans Table, #11965
- Correction de la surbrillance de la ligne de Table lorsque `current-row-key` est assignée à `null`, #11866
- Correction de l'affichage de la liste déroulante des filtres lorsque `filters` est un tableau vide, #11864
- Correction du label de Radio qui n'arrête pas la propagation des événements, #11912

### 2.4.3

*2018-07-03*

- Correction de `allow-drop` qui ne fonctionnait pas correctement lorsque les nœuds de Tree avaient une hauteur personnalisée, #11797
- Maintenant vous pouvez passer un paramètre à la méthode `clearValidate` du formulaire, en spécifiant quels résultats de validation FormItems doivent être effacés, #11821
- Ajout de l'attribut `distinguishCancelAndClose` pour MessageBox, #11831

### 2.4.2

*2018-06-26*

- Maintenant `class-name` et `label-class-name` de Table sont réactifs, #11626
- Correction de Table qui mettait toujours en surbrillance la ligne cliquée lorsque `highlight-current-row` était `false`, #11646
- Correction d'un bug de style de ButtonGroup lorsqu'il n'a qu'un seul bouton `round` ou `circle`, #11605
- Correction du style du Select de Pagination, #11622
- Correction de la méthode `open` du menu quand `collapse` est dynamiquement changé, #11646
- Ajout des paramètres `activeName` et `oldActiveName` au hook before-leave de Tabs, #11713
- Correction de Cascader ayant le focus après avoir cliqué à l'extérieur, #11588
- Correction de Cascader ne se fermant pas quand l'option est cliquée quand `change-on-select` est `true`, #11623
- La mise à jour programmatique de la valeur de Select déclenchera la validation du formulaire, #11672

### 2.4.1

*2018-06-08*

- Suppression du duplicata de la déclaration de type pour Autocomplete, #11388
- Correction du style de flèche déroulante de Select dans FireFox lorsqu'il est imbriqué dans Form, #11427
- Correction de l'icône de l'option de Select qui s'affiche toujours lorsque la valeur initiale est `null`, #11460
- Correction d'un Radio désactivé affichant l'ombre de la boîte quand on clique dessus, #11462
- Ajout de l'attribut `iconClass` pour MessageBox, #11499
- Ajout de l'attribut `stretch` pour Tabs, #11476
- Correction d'un problème d'ordre de rendu de TabPane lorsque Tabs est `lazy`, #11461
- Correction de Table ne conservant pas la surbrillance de la ligne actuelle lors de son ouverture, #11464
- Correction de l'état de la mise au point lorsque `before-leave` renvoie une promesse résolue, #11386
- Correction de la désactivation du Popover qui créait encore des poppers, #11426
- Correction de la boucle sans fin de Tree lorsqu'un nouveau noeud est ajouté en mode lazy, #11430 (par @wangjingf)
- Ajout de l'événement `closed` pour Dialog, #11490

### 2.4.0 Fullerene

*2018-05-28*

#### Nouvelles fonctionnalités
- Général
  - L'outil de développement et le bundler sont basculés vers le webpack natif, #11216
  - Vous pouvez maintenant définir globalement l'index z initial des popups, #11257
- Autocomplete
  - Ajout de l'attribut `hide-loading`, #11260
- Button
  - Vous pouvez maintenant utiliser l'attribut `size` sur les boutons circulaires pour contrôler leur taille, #11275
- InputNumber
  - Ajout de l'attribut `precision`, #11281
- Tabs
  - Ajout de l'attribut `before-leave`, #11259
  - Ajout de l'attribut `lazy`, #11167（by @Kingwl）
- Table
  - Ajout de la méthode `sort` pour trier manuellement la table, #11311

#### Corrections de bugs
- Input
  - Correction d'un problème qui provoquait un re-rendu lors de l'utilisation de l'IME chinois pour saisir rapidement du texte, #11235 (par @STLighter)
- Popover
  - Correction de l'erreur de console lorsque l'élément déclencheur est Radio ou Checkbox, #11265
- Breadcrumb
  - Correction de l'attribut `to` ne supportant pas la mise à jour dynamique, #11286
- Upload
  - Correction de l'erreur de console lorsqu'un fichier est résolu dans la promesse retournée de la méthode `beforeUpload`, #11297 (par @qusiba)
- Infobulle
  - Correction d'une flèche mal positionnée lorsque le contenu est vide, #11335
- Autocomplete
  - Correction de suggestions d'entrée incorrectes après la suppression rapide d'un mot-clé, #11323
- ColorPicker
  - Correction d'un événement `active-change` se déclenchant incorrectement lorsque le menu déroulant du picker est fermé, #11304
- Table
  - Correction d'une erreur de style du panneau de filtre surdimensionné, #11314
  - Correction de la ligne actuellement sélectionnée qui n'était pas conservée lors du tri de la table, #11348
- Checkbox
  - Correction d'une checkbox unique ne supportant pas la validation, #11271
- Radio
  - Correction du Radio désactivé quand même sélectionné en appuyant sur la touche espace, #11303
- MessageBox
  - Correction de la classe `el-popup-parent-hidden` qui n'était pas supprimée à l'ouverture successive de MessageBox, #11371

### 2.3.9

*2018-05-18*

- Correction d'une erreur lorsque les données source n'ont pas le champ spécifié par l'attribut `prop` d'une TableColumn, lorsque la souris se déplace dans les cellules de cette colonne, #11137
- L'attribut `lockScroll` des composants popup n'ajoute plus un style en ligne à l'élément parent, mais ajoute un nom de classe, #1111114
- Correction de l'icône de Progression qui ne s'affichait pas quand son `status` était une exception, #11172
- Correction de l'attribut `désactivé` qui ne fonctionnait pas dans la liste des résultats de filtrage du Cascader filtrable, #11185
- Correction d'un problème où la ligne étendue de la table ne peut pas être réduite si la source de données est mise à jour après son extension, #11186
- `setCurrentKey` de Tree accepte maintenant `null` comme paramètre pour annuler le noeud actuellement mis en surbrillance, #11205

### 2.3.8

*2018-05-11*

- Correction du saut du panneau DatePicker au mois courant après avoir choisi une date dans un mois non courant quand `type` est dates, #10973
- Correction de l'Input effaçable affichant toujours l'icône d'effacement en lecture seule, #10912
- Correction de la fermeture du panneau DatePicker sans changer la valeur déclenchant incorrectement l'événement `change`, #11017
- Correction d'un problème de navigation du clavier lorsque Select a regroupé les options, #11058
- Ajout du slot nommé `préfixe` pour Select, #11063
- Ajout de la méthode `clearValidate` pour FormItem, #11076
- Ajout de l'attribut `checkOnClickNode` pour Tree, #1111111

### 2.3.7

*2018-04-29*

- Correction d'une table qui ne mettait pas à jour ses largeurs de headers lorsque la barre de défilement disparaissait à cause du filtrage, #10834
- Correction de l'Input effaçable affichant toujours l'icône d'effacement lorsque sa valeur initiale est `null`, #10912
- Correction d'un déclencheur incorrect de l'événement `active-change` après avoir changé la valeur liée de ColorPicker par programmation, #10903 (par @zhangbobell)
- Correction du Select filtrable qui provoquait une boucle infinie lors de la navigation dans les options à l'aide du clavier si toutes les options sont désactivées, #10945

### 2.3.6

*2018-04-21*

- Correction d'un comportement incorrect du callback `allow-drop` de Tree lorsque le paramètre `type` est utilisé, #10821
- Maintenant vous pouvez entrer correctement les mots-clés dans le Select simple filtrable dans IE11, #10822
- Correction d'un Select simple déclenchant incorrectement un événement `blur` après avoir cliqué sur une option, #10822

### 2.3.5

*2018-04-20*

- Correction d'une surbrillance incorrecte dans le panneau DatePicker lorsque `type` est la semaine, #10712
- Correction d'un InputNumber vide lorsque sa valeur initiale est 0, #10714
- Ajout de l'attribut `automatic-dropdown` pour Select, #10042 (par @Seebiscuit)
- Correction de Rate désactivé quand même mis à jour par les touches de navigation, #10726 (par @Richard-Choooou)
- L'attribut `type` de DatePicker peut être `dates`, où vous pouvez choisir plusieurs dates dans un sélecteur, #10650 (par @Mini256)
- Ajout des événements `prev-click` et `next-click` pour Pagination, #10755
- Ajout de l'attribut `pager-count` pour Pagination, #10493 (par @chongjohn716)
- Ajout de `type` comme 3ème paramètre de l'attribut `allow-drop` de Tree, #10792
- Nous utilisons maintenant ResizeObserver pour détecter le redimensionnement des éléments DOM, #10779

### 2.3.4

*2018-04-12*

- Suppression du double de l'attribut `showTimeout` dans la déclaration TypeScript de SubMenu, #10566 (par @kimond)
- Vous pouvez maintenant personnaliser les éléments de Transfert en utilisant le scoped slot, #10577
- Correction d'un clic sur le bouton précédent désactivé et le bouton suivant de la pagination déclenchant toujours l'événement `current-current-change`, #10628
- Correction de Textarea affichant `undefined` dans le SSR lorsque sa valeur n'est pas définie, #10630
- Correction de la désactivation du style TabItem lorsque `type` est border-card, #10640
- Ajout de `$index` comme quatrième paramètre du `formatter` de la Table, #10645
- Correction de CheckboxButton non exporté dans la déclaration TypeScript, #10666

### 2.3.3

*2018-04-04*

- Ajout de l'attribut `shadow` pour Card, #10418 (par @YunYouJun)
- Correction de Badge masqué lorsque `value` est `0`, #10470
- Correction de quelques bugs de Tree, #10474 #10494
- Ajout de `placement` pour Autocomplete, #10475
- L'attribut `default-time` fonctionne également dans DateTimePicker, #10321 (par @RickMacTurk)
- Suppression du contour bleu de TabItem après que le navigateur n'ait plus le focus ou soit minimisé, #10503
- Ajout de l'attribut `popper-append-to-body` pour SubMenu, #10515
- Suppression du feedback visuel lors du survol d'un élément BreadcrumbItem non lié, #10551
- Correction de l'événement `change` d'InputNumber pour s'assurer que la valeur liée du composant est mise à jour dans le gestionnaire d'événements, #10553

### 2.3.2

*2018-03-29*

- Correction d'une régression d'Autocomplete, #10442

### 2.3.1

*2018-03-29*

- Correction d'une régression de `type` d'Inputqui n'était pas transmis à l'élément natif, #10415
- Ajout de la méthode `blur` pour Select, #10416

#### 2.3.0 Diamant

*2018-03-28*

#### Nouvelles fonctionnalités
- Table
  - Maintenant le `formatter` de TableColumn peut être mis à jour dynamiquement, #10184 (par @elfman)
  - Ajout de l'attribut `select-on-indeterminate`, #9924 (par @syn-zeta)
- Menu
  - Ajout de l'attribut `collapse-transition`, #8809 (par @limichange)
- Input
  - Ajout de la méthode `select`, #10229
  - Ajout de la méthode `blur`, #10356
- ColorPicker
  - Ajout de l'attribut `predefine`, #10170 (par @elfman)
- Tree
  - Ajout des attributs `draggable`, `allow-drop` et `allow-drag`, et `node-drag-start`, `node-drag-enter`, `node-drag-leave`, `node-drag-leave`, `node-drag-over`, `node-drag-end` et `node-drop`, #9251 #10372 (par @elfman)
- Form
  - La méthode `validate` a maintenant un deuxième paramètre, contenant l'information des éléments de formulaire qui ont échoué à la validation, #10279
  - Ajout de l'événement `validate`, #10351
- Progress
  - Ajout de l'attribut `color`, #10352 (par @YunYouJun)
- Button
  - Ajout de l'attribut `circle`, #10359 (par @YunYouJun)

#### Corrections de bugs
- Form
  - Correction du label de FormItem non aligné avec l'Input mixte, #10189
- Menu
  - Désormais, le menu réduit n'affichera la bulle d'aide que lorsque le slot `title` de l'élément MenuItem est défini, #10193 (par @PanJiaChen).
- Pagination
  - Correction d'un événement `current-current-change` qui se déclenchait incorrectement sans interaction de l'utilisateur, #10247
- DatePicker
  - Maintenant, la date et l'heure dans le panneau déroulant sont correctement formatées en fonction de l'attribut `format`, #10174（by @remizovvv）
- Upload
  - Correction de l'attribut `accept` qui ne fonctionnait pas quand `drag` est vrai, #10278

### 2.2.2

*2018-03-14*

- Ajout de l'événement `clear` pour Input, #9988 (par @blackmiaool)
- Maintenant la saisie manuelle de ColorPicker supporte les modes `hsl`, `hsv` et `rgb`, #9991
- Correction de DatePicker ne déclenchant pas l'événement `change` lorsque sa valeur initiale est effacée, #9986
- Maintenant les attributs liés à la classe d'icônes de Rate supportent les mises à jour dynamiques, #10003
- Correction de Table avec des colonnes fixes dont la hauteur n'est pas mise à jour correctement si `max-height` est réglé, #10034
- Maintenant le mode plage de DatePicker supporte la sélection inverse (en cliquant sur la date de fin, puis sur la date de début), #8156 (par @earlymeme)
- Ajout de l'attribut `désactivé` pour Pagination, #10006
- Ajout des événements `after-enter` et `after-leave` pour Popover, #10047
- Correction de Select ne déclenchant pas la validation lorsque l'utilisateur sélectionne une option après avoir exécuté `resetFields` du formulaire, #10105
- Correction des largeurs incorrectes des colonnes fixes de Table dans certains cas, #10130
- Correction de MessageBox héritant de l'attribut `title` de son instance précédente lorsqu'il était appelé sans `title`, #10126 (par @Pochodaydaydayup)
- Ajout de l'attribut `input-size` pour Slider, #10154
- Ajout des événements `left-check-change` et `right-check-change` pour Transfer, #10156

### 2.2.1

*2018-03-02*

- Correction d'un rétrécissement de Aside, Header et Footer dans certaines mises en page, #9812
- Correction de Table avec un attribut `height` qui ne rendait pas dans SSR, #9876
- Correction d'une Table extensible ne calculant pas sa hauteur lorsqu'une rangée est agrandie, #9848
- Correction d'un événement `change` qui ne se déclenchait pas lors de la saisie manuelle de la date dans DateTimePicker, #9913
- Correction de Select affichant ses options lorsque la boîte de saisie est cliquée avec le bouton droit de la souris, #9894 (par @openks)
- Ajout de l'attribut `tooltip-class` pour Slider, #9957
- Maintenant Select garde le focus après la sélection, #9857 (par @Seebiscuit)
- Ajout de l'attribut `target-order` pour Transfer, #9960

### 2.2.0 Graphite

*2018-02-12*

#### Nouvelles fonctionnalités
- Menu
  - Ajout des attributs `popper-class` et `disabled` pour le sous-menu, #9604 #9771
  - Le menu horizontal prend maintenant en charge le sous-menu multicouche, #9741
- Tree
  - Ajout de l'évènement `node-contextmenu`, #9678
  - Vous pouvez maintenant personnaliser le modèle de nœud en utilisant un slot avec portée, #9686
  - Ajout des méthodes `getNode`, `remove`, `remove`, `append`, `insertBefore`, `insertAfter`, `getCheckedKeys`, `getHalfCheckedNodes`, `getHalfCheckedNodes`, `getHalfCheckedKeys` et de l'événement `check`, #9718 #9730
- Transfer
  - Ajout de la méthode `clearQuery`, #9753
- Select
  - Ajout de l'attribut `popper-append-to-body`, #9782

#### Corrections de bugs
- Table
  - Correction d'un clic sur l'icône d'expansion d'une ligne extensible qui déclenche l'événement `row-click`, #9654
  - Correction de la mise en page non mise à jour lorsque la largeur des colonnes est modifiée par glisser-déposer de l'utilisateur, #9668
  - Correction d'un problème de style lorsque la ligne de résumé coexiste avec des colonnes fixes, #9667
- Container
  - Les composants fixes de Container ne s'étirent pas dans IE11, #9655
- Loading
  - Correction du chargement n'apparaissant pas lorsque la valeur de `v-loading` est changée en true dans le hook `mounted`, #9722
- Switch
  - Correction de deux événements de clics natifs déclenchés lorsque Switch est cliqué, #9760

### 2.1.0 Charcoal

*2018-01-31*

#### Nouvelles fonctionnalités
- Cascader
  - Ajout des événements `focus` et `blur`, #9184 (par @viewweiwu)
- Table
  - La méthode `filter-method` a maintenant un troisième paramètre `column`, #9196 (par @liyanlong)
- DatePicker
  - Ajout des attributs `prefix-icon` et `clear-icon`, #9237 (par @AdamSGit)
  - Ajout de l'attribut `default-time`, #9094 (par @nighca)
  - Le format `value-format` supporte maintenant `timestamp`, #9319 (par @wacky6)
- InputNumber
  - Maintenant la valeur liée peut être `undefined`, #9361
- Select
  - Ajouté l'attribut `auto-complete`, #9388
- Form
 - Ajout de l'attribut `désactivé`, #9529
 - Ajout de l'attribut `validateOnRuleChange`, #8141
- Notification
  - Ajout de la méthode `closeAll`, #9514

#### Corrections de bugs
- InputNumber
  - Correstion du reset lors de la saisie du point des nombres décimaux, #9116
- Dropdown
  - Correction du mauvais positionnement du menu déroulant lorsque la page n'a qu'une barre de défilement horizontale dans certains navigateurs, #9138 (par @banzhuanmei)
- Table
  - Correction d'une erreur dans le calcul du nombre de colonnes fixes après les changements de données des colonnes, #9188（by @kolesoffac）
  - Correction de la bordure de la dernière colonne de l'en-tête groupé qui n'était pas correctement affichée, #9326
  - Correction d'un positionnement incorrect de l'en-tête du tableau dans Safari, #9327
  - Correction de la réduction des lignes extensibles lorsque les données de la table changent, #9462
  - Correction de rendus multiples inutiles dans certaines conditions, #9426
  - Correction d'une erreur de calcul de la largeur de colonne lors de la modification de `width` de TableColumn, #9426
- Loading
  - Correction de Loading ne se cachant pas correctement dans certaines conditions, #9313
- DatePicker
  - Correction de la méthode `focus` qui ne fonctionnait pas en mode "range", #9437
  - Correction du clic sur le bouton "now" qui sélectionnait toujours la date actuelle même si elle était désactivée, #9470 (par @wacky6)
  - Correction d'une date trop serrée lors de la navigation, #9577 (par @wacky6)
- Steps
  - Correction d'une erreur de style dans IE 11, #9454

#### Changements
- Menu
  - Le menu contextuel en mode `collapse` s'ajoute maintenant directement à `body`, de sorte qu'il est visible lorsqu'il est imbriqué dans Aside, #9263
- Table
  - Maintenant, cocher les cases dans la Table multi-sélection ne déclenche pas l'événement `row-click`, #9467
- Loading
  - Le `z-index` du masque de chargement non plein écran est changé à 2000. Le `z-index` du masque de chargement plein écran se mettra à jour dynamiquement avec les composants popup, #9522
- Dropdown
  - Les attributs `show-timeout` et `hide-timeout` ne fonctionnent maintenant que lorsque le déclencheur est `hover`, #9573

### 2.0.11

*2018-01-08*

- Correction d'un problème de couleur de bordure de Select dans les slots `prepend` ou `append` de Input, #9089
- Correction du paramètre `remove-tag` de l'événement Select, #909090
- Ajout des attributs `show-timeout` et `hide-timeout` pour le sous-menu, #8934 (par @HugoLew)
- Correction d'un style Tooltip manquant de `show-overflow-tooltip` lors de l'importation de Table sur demande, #9130
- Correction d'un dysfonctionnement du tri des colonnes de la table après l'exécution de `clearSort` sur cette colonne, #9100 (par @zEmily)
- Le fichier de configuration i18n pour le tchèque est renommé de `cz` en `cs-CZ`, #9164

### 2.0.10

*2017-12-29*

- Calcul erroné de la hauteur du tableau lorsque la colonne fixe et la ligne de somme coexistent, #9026
- Correction d'un style de couleur non compilé du texte vide dans le tableau, #9028
- Maintenant, DatePicker n'émet que l'événement `change` quand la valeur est vraiment changée, #9029 (par @remizovvvv)
- Ajout de l'attribut `tabindex` pour Input, #9041 (par @dicklwm)

### 2.0.9🎄

*2017-12-24*

- Ajouté la fonction de hook "avant suppression" pour Upload, #8788 (par @firesh)
- Correction de la valeur initiale de `error` qui ne fonctionnait pas pour FormItem, #8840
- La directive Loading prend maintenant en charge le nom de classe personnalisé grâce à l'attribut `element-loading-custom-class`, #8826 (par @earlymeme)
- Correction CarouselItem devenant invisible lorsque les données sont mises à jour de manière asynchrone, #8921
- Ajout de l'attribut `renderAfterExpand` pour Tree, #8972

### 2.0.8

*2017-12-12*

- Ajout de la documentation en espagnol
- Correction du `show-timeout` de Dropdown qui ne fonctionnait pas quand le déclencheur est click, #8734 (par @presidenten)
- Correction du temps de validation des formulaires pour les règles dont le déclencheur est blur, #8776
- Correction d'un événement de blur de DatePicker avec intervalle, #8784
- L'attribut `format` de TimePicker supporte maintenant AM/PM, #8620 (par @firesh)

### 2.0.7

*2017-11-29*

- Correction du style du bouton de type texte désactivé, #8570

### 2.0.6

*2017-11-29*

- Correction d'un bug de style des icônes de tri de la table, #8405
- Correction du mécanisme de déclenchement de Popover lorsque son `trigger` est manuel, #8467
- Ajout des attributs `prefix-icon` et `suffix-icon` pour Autocomplete, #8446 (par @liyanlong)
- Ajout de l'attribut `separator` pour Cascader, #8501
- Ajout de l'attribut `clearable` pour Input, #8509 (par @lbogdan)
- Ajout de l'attribut `background` pour Pagination, #8553

### 2.0.5

*2017-11-17*

- Correction de la régression Popover, Tree, Breadcrumb et Cascader dans 2.0.4, #8188 #8217 #8283
- Correction d'une fuite de mémoire de la directive `clickoutside`, #8168 #8225 (par @badpunman @STLighter)
- Correction de la hauteur du Select multiple lorsque sa valeur est effacée, #8317 (par @luciy)
- Ajout de l'attribut `collapse-tags` pour plusieurs Sélectionner pour remplacer les balises par une ligne de texte, #8190
- Correction d'une consommation CPU élevée causée par la table cachée, #8351
- Maintenant vous pouvez utiliser la méthode `doLayout` de la Table pour mettre à jour sa disposition, #8351

### 2.0.4

*2017-11-10*

- Accessibilité améliorée pour Cascader, Dropdown, Message, Notification, Popover, Tooltip et Tree.
- Correction du redimensionnement de Container lorsque la largeur de la fenêtre d'affichage diminue, #8042
- Correction de la suppression incorrecte de `updateKeyChildren` dans Tree, #8100
- Correction de la hauteur de la CheckboxButton avec bordure lorsque le bouton est imbriqué dans un formulaire, #8100
- Correction d'une erreur d'analyse du menu pour les couleurs personnalisées, #8153 (par @zhouyixiang)

### 2.0.3

*2017-11-03*

- Correction des attributs `éditable` et `readonly` pour DatePicker avec intervalle, #7922
- Correction d'une erreur de style des Tabs imbriqués, #7941
- Correction d'une erreur de style de la dernière étape des Steps verticales, #7980
- Correction de la synchronisation du déclenchement de l'événement `current-current-change` pour Pagination, #7995
- Correction d'une infobulle non enregistrée dans Menu, #7995

### 2.0.2

*2017-10-31*

- Un clic droit sur les boutons de InputNumber ne changera pas sa valeur, #7817
- La méthode `validate` de Form peut maintenant attendre des validations asynchrones avant d'exécuter son callback, #7774 (par @Allenice)
- Correction de la plage de sélection de DatePicker ne fonctionnant pas dans les navigateurs Chromium 53-57, #7838
- Correction des icônes manquantes de prévisualisation et de suppression de Upload lorsque son `list-type` est picture-card, #7857
- Ajout de l'attribut `sort-by` pour TableColumn, #7828 (par @wangfengming)
- Correction de DatePicker affichant parfois un mauvais numéro d'année lors de la sélection de la première semaine en mode semaine, #7860 (par @hhh23485)
- Correction d'une erreur de style d'icône des Steps verticales, #7891
- La 'hot area' pour les flèches de nœud dans Tree est étendue, #7891

### 2.0.1

*2017-10-28*

- Correction d'une erreur de style de RadioButton et CheckboxButton, #7793
- Correction de TimePicker qui ne répondait pas au défilement de la souris dans certaines conditions, #7811
- Correction des styles incomplets de certains composants lors de l'importation à la demande, #7811

### 2.0.0 Carbon

*2017-10-27*

#### Nouvelles fonctionnalités
- Général
  - Un nouveau thème : `theme-chalk`.
  - L'accessibilité des éléments suivants est améliorée : Alert, AutoComplete, Breadcrumb, Button, Checkbox, Collapse, Input, InputNumber, Menu, Progress, Radio, Rate, Slider, Switch, Upload
  - Ajout du typage TypeScript
  - Toutes les icônes existantes sont redessinées. De nouvelles icônes sont ajoutées
  - Ajout d'une série de classes basées sur les breakpoints qui masquent les éléments lorsque la taille de la fenêtre remplit certaines conditions
  - Ajout des composants de mise en page : Container, Header, Aside, Main, Footer
  - Vous pouvez maintenant configurer la taille des composants de manière globale. Lors de l'importation d'un élément, vous pouvez ajouter un objet de configuration global avec une propriété `size` pour configurer les tailles par défaut pour tous les composants.
- Button
  - Ajout de l'attribut `round`. Il est utilisé pour les boutons à coins ronds #6643
- TimeSelect
  - Vous pouvez maintenant naviguer en appuyant sur les touches `Up` et `Down`, et en appuyant sur `Enter` vous sélectionnez l'heure #6023.
- TimePicker
  - Vous pouvez maintenant naviguer à l'aide des touches fléchées, et en appuyant sur `Entrée` vous sélectionnez l'heure #6050.
  - Ajout de `start-placeholder` et de `end-placeholder`. Ce sont des placeholders pour les deux champs en mode intervalle #7169
  - Ajout de l'attribut `farrow-control` pour faire tourner le temps avec les flèches #7438
- Tree
  - Maintenant les noeuds enfants ne font pas de rendu avant la première ouverture #6257
  - Ajout de l'attribut `check-descendants`. Il détermine si les nœuds enfants sont vérifiés lors du contrôle de leur nœud parent en mode `lazy` #6235
- Tag
  - Ajouté l'attribut `size` #7203
- Datepicker
  - Maintenant `timeFormat` peut formater le TimePicker quand le type est réglé sur `datetimerange` #6052
  - Ajout de `start-placeholder` et de `end-placeholder`. Ce sont des placeholders pour les deux champs en mode intervalle #7169
  - Ajout de l'attribut `value-format` pour personnaliser le format de la valeur liée, #7367
  - Ajout de l'attribut `unlink-panels` pour dissocier les deux panneaux de date lors de la sélection d'une plage de dates
- MessageBox
  - Ajout de l'attribut `closeOnHashChange` #6043
  - Ajout de l'attribut `center` pour que le contenu puisse être centré #7029
  - Ajout de l'attribut `roundButton` pour afficher les boutons ronds #7029
  - Ajout de l'attribut `dangerouslyUseHTMLString`. Lorsqu'il est réglé sur `true`, `message` sera interprété comme une chaîne HTML<sup>\*</sup> #6043
  - Ajout de l'attribut `inputType` pour assigner le type de l'input intérieur, #7651
- Dialog
  - Ajout des attributs `width`、`fullscreen`、`append-to-body`. La boîte de dialogue peut maintenant être imbriquée
  - Ajout de l'attribut `center` pour que le contenu puisse être centré #7042
  - Ajout de `focus-after-closed`、`focus-after-open` pour améliorer l'accessibilité #6511
- ColorPicker
  - Maintenant vous pouvez taper les couleurs dans le champ de saisie #6167
  - Ajout des attributs `size` et `disabled` #7026
  - Ajout de l'attribut `popper-class` #7351
- Message
  - Maintenant la couleur des icônes peut être modifiée par CSS #6207
  - Ajout de l'attribut `dangerouslyUseHTMLString`. Lorsqu'il est réglé sur `true`, `message` sera interprété comme une chaîne HTML<sup>\*</sup> #6207
  - Ajout de l'attribut `center` pour que le contenu puisse être centré #6875
- Notification
  - Ajout de l'attribut `position` pour configurer où Notification apparaît #6231
  - Ajout de l'attribut `dangerouslyUseHTMLString`. Lorsqu'il est réglé sur `true`, `message` sera interprété comme une chaîne HTML<sup>\*</sup> #6231
  - Ajout de l'attribut `showClose` pour cacher le bouton de fermeture #6402
- Rate
  - Ajout de l'attribut `show-score` pour déterminer si le score actuel est affiché #6295
- Tabs
  - Ajout de l'attribut `tab-position` #6096
- Radio
  - Ajout des attributs `border` et `size` #6690
- Checkbox
  - Ajout des attributs `border` et `size` #6690
- Alert
  - Ajout de l'attribut `center` pour que le contenu puisse être centré #6876
- Menu
  - Ajout des attributs `background-color`, `text-color` et `active-text-color` #7064
  - Ajout des méthodes `open` et `close` pour ouvrir et fermer les sous-menus par programmation, #7412
- Form
  - Ajout de l'attribut `inline-message` pour déterminer si le message de validation est affiché en ligne #7032
  - Ajout de l'attribut `status-icon` pour afficher une icône de feedback après validation #7032
  - Form et FormItem ont maintenant un attribut `size`. Les composants internes hériteront de cette taille s'ils ne sont pas spécifiés sur eux-mêmes, #7428
  - La méthode `validate` retournera maintenant une promesse si le rappel est omis, #7405
  - Ajout de la méthode `clearValidate` pour la validation des résultats pour tous les éléments de formulaire, #7623
- Input
  - Ajout des attributs `suffixe` et `préfixe` des slots nommés, `suffixIcon` et `prefixIcon` pour ajouter du contenu dans la zone de saisie #7032
- Breadcrumb
  - Ajout de l'attribut `separator-class` pour supporter les icônes comme séparateurs d'éléments #7203
- Steps
  - Ajout de l'attribut `simple` pour activer les étapes de style simple #7274
- Pagination
  - Ajout des attributs `prev-text` et `next-text` pour personnaliser les textes des pages précédente et suivante #7005
- Loading
  - Maintenant vous pouvez personnaliser l'icône et la couleur de fond avec les propriétés `spinner` et `background` #7390
- Autocomplete
  - Ajout de l'attribut `debounce`, #7413
- Upload
  - Ajout des attributs `limit` et `on-exceed` pour limiter le nombre de fichiers, #7405
- DateTimePicker
  - Ajout de l'attribut `time-arrow-control` pour activer `arrow-control` du TimePicker imbriqué, #743838
- Layout
  - Ajout d'un nouveau point d'arrêt `xl` pour les fenêtres plus larges que 1920px
- Table
  - Ajout de l'attribut `span-method` pour la fusion de cellules
  - Ajout de la méthode `clearSort` pour effacer le tri par programmation
  - Ajout de la méthode `clearFilter` pour effacer le filtre par programmation
  - Pour les lignes extensibles, lorsqu'une ligne est étendue, une classe `.expanded` sera ajoutée à sa liste de classes, afin que vous puissiez personnaliser son style
  - Ajout de l'attribut `size`
  - Ajout de la méthode `toggleRowExpansionRowExpansion` pour ouvrir ou réduire les lignes extensibles par programmation
  - Ajout de l'attribut `cell-class-name` pour assigner un nom de classe aux cellules
  - Ajout de l'attribut `cell-style` pour le style des cellules
  - Ajout de l'attribut `header-row-class-name` pour assigner un nom de classe aux lignes d'en-tête
  - Ajout de l'attribut `header-row-style` pour le style d'en-tête
  - Ajout de l'attribut `header-cell-class-name` pour assigner un nom de classe aux cellules d'en-tête
  - Ajout de l'attribut `header-cell-style` pour le style des cellules d'en-tête
  - L'attribut `prop` de la tableColumn accepte maintenant les notations `object[key]`
  - Ajout de l'attribut `index` pour TableColumn pour personnaliser les index de lignes
- Select
  - Ajout de l'attribut `reserve-keyword` pour réserver le mot-clé de la recherche courante après avoir sélectionné une option.

#### Corrections de bugs
- DatePicker
  - Correction de `v-model` retournant le deuxième jour de la semaine sélectionnée en mode semaine #6038
  - Correction de la première entrée effacée dans le type `daterange` #6021
- DateTimePicker
  - Correction de DateTimePicker et TimePicker s'affectant l'un l'autre lors de la sélection #6090
  - Correction de l'heure et de la seconde qui peuvent être au-delà de la limite en sélectionnant l'heure #6076
- TimePicker
  - Correction de `v-model` qui ne se mettait pas à jour correctement lors du blur #6023
- Dialog
  - Correction des textes ayant des bords flous lors de l'ouverture et de la fermeture des listes déroulantes imbriquées #6088
- Select
  - Performances améliorées. Maintenant Vue dev-tool ne crashera pas quand un grand nombre de Select sont détruits #6151
- Table
  - Correction d'un bug ou la table reste masquée lorsque son élément parent apparaît depuis `display : none`
  - Correction de l'extension de la largeur de la table lorsque l'élément parent a `display : flex`
  - Correction d'un bug qui corrigeait le fait que les colonnes d'une table avec l'emplacement `append` disparaissaient lorsque les données étaient récupérées dynamiquement
  - Correction de l'attribut `expand-row-keys` qui ne fonctionnait pas avec la valeur initiale
  - Correction d'une défaillance du filtre lors de la mise à jour de `data`
  - Correction d'une erreur de calcul dans la mise en page des colonnes fixes avec en-têtes groupés
  - Correction d'un bug dynamique de `max-height`
  - Correction de quelques erreurs de calcul de style

#### Breaking changes
- Général
  - Suppression de `theme-default`.
  - Compatible avec Vue 2.5.2+ et IE 10+
  - L'événement `change` des composants de formulaire et l'événement `current-current-change` de la pagination ne se déclenchent plus que lors de l'interaction de l'utilisateur
  - L'attribut `size` de Button et les composants de formulaire acceptent maintenant `medium`, `small` et `mini`
  - Pour faciliter l'utilisation d'icônes tierces, les attributs `icon` du bouton et des étapes, `prefix-icon` et `suffix-icon` d'Input nécessitent maintenant un nom de classe complet
- Dialog
  - Suppression de l'attribut `taille`. Maintenant la taille de Dialog peut être configurée par `width` et `fullscreen`
  - Maintenant la visibilité de Dialog ne peut plus être contrôlée par `v-model`
- Rate
  - Le `text-template` est renommé `score-template`
- Dropdown
  - `menu-align` est renommé en `placement`. Maintenant il supporte plus de positions
- Transfert
  - le `footer-format` est renommé en `format`
- Switch
  - Les attributs commençant par `on-**` seront analysés pour les événements dans JSX, ce qui rend tous les attributs `on-*` de Switch incapable de fonctionner en JSX. Ainsi, les attributs `on-**` sont renommés en `active-*`, et par conséquent les attributs `off-*` sont renommés en `inactive-*`. Cette modification affecte les attributs suivants: `on-icon-class`, `off-icon-class`, `on-text`, `off-text`, `off-text`, `on-color`, `off-color`, `on-value`, `off-value`
  - Les attributs `active-text` et `inactive-text` n'ont plus de valeurs par défaut
- Tag
  - L'attribut `type` accepte maintenant `success`, `info`, ` warning` et `danger`
- Menu
  - Suppression de l'attribut `theme`. La couleur du menu peut être configurée en utilisant `background-color`, `text-color` et `active-text-color`
- Input
  - Suppression de l'attribut `icon`. L'icône du suffixe peut maintenant être configurée à l'aide de l'attribut `suffix-icon` ou du slot `suffix-icon`
  - Suppression de l'attribut `on-icon-click` et de l'événement `click`. Maintenant pour ajouter le gestionnaire de clic sur les icônes, veuillez utiliser les slots nommés
  - L'événement `change` se comporte maintenant comme dans l'input natif, qui ne se déclenche qu'en cas de blur ou en appuyant sur Entrée. Si vous avez besoin de répondre à l'entrée de l'utilisateur en temps réel, vous pouvez utiliser l'événement `input`
- Autocomplete
  - Suppression de l'attribut `custom-item`. Le template de suggestions d'entrée peut maintenant être personnalisé en utilisant `scoped slot`.
  - Suppression de l'attribut `props`. Vous pouvez maintenant utiliser l'attribut `value-key` pour désigner le nom de clé de l'objet de suggestion d'entrée pour l'affichage.
- Steps
  - Suppression de l'attribut `center`
  - Maintenant le Steps va remplir son conteneur parent par défaut
- DatePicker
  - Le paramètre de l'événement `change` de DatePicker est maintenant la valeur liée elle-même. Son format est contrôlé par `value-format`
- Table
  - Suppression de la prise en charge de la personnalisation du modèle de colonne à l'aide de `inline-template`
  - `sort-method` s'aligne maintenant avec `Array.sort`. Il devrait retourner un nombre au lieu d'un booléen
  - L'emplacement `append` est déplacé à l'extérieur de l'élément `tbody` pour éviter les rendus multiples
  - L'événement `expand` est renommé en `expand-change`
  - Les paramètres de la méthode `row-class-name` et `row-style` sont maintenant un objet

##
<i><sup>*</sup> Rendre du HTML arbitraire de façon dynamique sur votre site Web peut être très dangereux car cela peut facilement mener à[des attaques XSS](https://en.wikipedia.org/wiki/Cross-site_scripting). Donc quand `dangerouslyUseHTMLString' est activé, assurez-vous que le contenu du `message' est fiable, et **ne jamais** assigner `message` au contenu fourni par l'utilisateur.</i>.
