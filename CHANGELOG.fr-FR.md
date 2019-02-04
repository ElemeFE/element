## Changelog

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

- Correction de `allow-drop` qui ne fonctionnait pas correctement lorsque les nœuds de l'arborescence avaient une hauteur personnalisée, #11797
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

##### Corrections de bugs
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
- Correction d'un déclencheur incorrect de l'événement `active-change` après avoir changé la valeur de liaison de ColorPicker par programmation, #10903 (par @zhangbobell)
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
- Correction de quelques bogues de l'arborescence, #10474 #10494
- Ajout de `placement` pour Autocomplete, #10475
- L'attribut `default-time` fonctionne également dans DateTimePicker, #10321 (par @RickMacTurk)
- Suppression du contour bleu de TabItem après que le navigateur n'ait plus le focus ou soit minimisé, #10503
- Ajout de l'attribut `popper-append-to-body` pour SubMenu, #10515
- Suppression du feedback visuel lors du survol d'un élément BreadcrumbItem non lié, #10551
- Correction de l'événement `change` d'InputNumber pour s'assurer que la valeur de liaison du composant est mise à jour dans le gestionnaire d'événements, #10553

### 2.3.2

*2018-03-29*

- Correction d'une régression d'Autocomplete, #10442

### 2.3.1

*2018-03-29*

- Correction d'une régression de `type` d'Inputqui n'était pas transmis à l'élément natif, #10415
- Ajout de la méthode `blur` pour Select, #10416

#### 2.3.0 Diamant

*2018-03-28*

##### Nouvelles fonctionnalités
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
- Bouton
  - Ajout de l'attribut `circle`, #10359 (par @YunYouJun)

##### Corrections de bugs
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

##### Nouvelles fonctionnalités
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

##### Corrections de bugs
- Table
  - Correction d'un clic sur l'icône d'expansion d'une ligne extensible qui déclenche l'événement `row-click`, #9654
  - Correction de la mise en page non mise à jour lorsque la largeur des colonnes est modifiée par glisser-déposer de l'utilisateur, #9668
  - Correction d'un problème de style lorsque la ligne de résumé coexiste avec des colonnes fixes, #9667
- Container
  - Les composants fixes du conteneur ne s'étirent pas dans IE11, #9655
- Loading
  - Correction du chargement n'apparaissant pas lorsque la valeur de `v-loading` est changée en true dans le hook `mounted`, #9722
- Switch
  - Correction de deux événements de clics natifs déclenchés lorsque Switch est cliqué, #9760
