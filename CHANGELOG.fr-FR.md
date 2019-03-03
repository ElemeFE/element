## Changelog

### 2.6.1

*2019-03-03*

#### Bug fixes

- **Don't specify node version** (by @iamkun in #14546)
- Fix doc directory in `deloy-faas.sh` (by @ziyoung in #14553)
- Fix date style issue in changelog for 2.6.0 (by @island205 in #14547)
- Fix doc typo (by @wack6 in #14552)

### 2.6.0

*2019-03-01*

#### New features
- Timeline
  - Add timeline component (by @jikkai in #14248)
- DropdownItem
  - Add icon prop to `el-dropdown-item` (by @gabrielboliveira in #14088)
- Input
  - Add show-password props (by @phshy0607 in #13966)
- Select
  - Add slot `empty` (by @elfman in #13785)
- Autocomplete
  - Add highlight-first-item prop (by @YamenSharaf in #14269)
- I18n
  - Created Armenian locale (by @hamletbarsamyan in #14214)
- Docs
  - French translation (by @smalesys in #12153, #14418, #14434)

#### Optimization
- Alert
  - Update alert description default slot class (by @iamkun in #14488)
- Input
  - Update input password (by @iamkun in #14480)
- InputNumber
  - Remove unnecessary parseFloat (by @JuniorTour in #14172)
- Menu
  - Add support for `el-menu-item` without index (by @georgyfarniev in #13298)
- Table
  - Remove some html DOM operations (by @elfman in #13643)
- Upload
  - Optimize code (by @elfman in #13973)
- Popup
  - Optimize code (by @KAionro in #14413)
- Docs
  - Add more detail about how to run play mode for contribution (by @island205 in #14355)
  - Warn input as a controlled component. (by @wacky6 in #14463)
  - Update Table doc (by @luguokong in #14329)
  - Update input doc (by @iamkun in #14437)
  - Update custom-theme docs (by @wangguohao in #14297)
  - Make the icon style change when hover on it (by @tuxinghuan in #14295)
- Build
  - Minimizing css and js for Element doc site (by @iamkun in #14430)
  - Speeding up webpack (by @hetech in #14484)
  - Use cli to select release version (by @hetech in #14354)
- Install stale for issue handling (by @island205 in #14392)

#### Bug fixes
- Menu
  - Fix subMenu focus bug when switch browser tab (by @liupl in #13976)
- MessageBox
  - Fix type definition (by @NateScarlet in #14278)
- ScrollBar
  - Prevent right button click on thumb (by @xifeiwu in #14196)
- Switch
  - Trigger form validation if value changes (by @hetech in #14426)
- Table
  - Make toggleAllSelection method an instance method (by @letanure in #14075)
- Tabs & Dropdown
  - Fix style (by @hetech in #14452)
- Tree
  - Empty-text tips are different from tables (by @ColinCll in #14331)
- Docs
  - Fix  DatetimePicker format doc error (by @iamkun in #14290)
  - Spelling issue in datepicker documentation (by @helmut in #14481)
  - Fix pagination doc style (by @liuchuzhang in #14451)

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
