## Internationalisation

La langue par défaut d'Element est le Chinois. Si vous souhaitez utiliser une autre langue, il vous faudra la configurer. Par exemple, dans votre fichier d'entrée, si vous importez Element entièrement:

```javascript
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })
```

Ou si vous importez Element à la demande:

```javascript
import Vue from 'vue'
import { Button, Select } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// configure la langue
locale.use(lang)

// importe les composants
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
```

La pack de la langue Chinois est importé par défaut, même si vous configurez une autre langue. En utilisant le `NormalModuleReplacementPlugin` fournit par webpack vous pouvez remplacer la locale par défaut:

webpack.config.js
```javascript
{
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/, 'element-ui/lib/locale/lang/en')
  ]
}
```

## Compatible avec `vue-i18n@5.x`

Element est compatible avec [vue-i18n@5.x](https://github.com/kazupon/vue-i18n), ce qui rend le changement de langue encore plus simple.

```javascript
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Element from 'element-ui'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)
Vue.use(Element)

Vue.config.lang = 'zh-cn'
Vue.locale('zh-cn', zhLocale)
Vue.locale('en', enLocale)
```

## Compatible avec d'autres plugins i18n

Element n'est pas forcément compatible avec d'autres plugins i18n que vue-i18n, mais vous pouvez configurer le fonctionnement i18n.

```javascript
import Vue from 'vue'
import Element from 'element-ui'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(Element, {
  i18n: function (path, options) {
    // ...
  }
})
```

## Compatible avec `vue-i18n@6.x`

Vous devrez le configurer manuellement pour la compatibilité avec `6.x`.

```javascript
import Vue from 'vue'
import Element from 'element-ui'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)

const messages = {
  en: {
    message: 'hello',
    ...enLocale // Ou utilisez `Object.assign({ message: 'hello' }, enLocale)`
  },
  zh: {
    message: '你好',
    ...zhLocale // Ou utilisez `Object.assign({ message: '你好' }, zhLocale)`
  }
}

// Crée l'instance de VueI18n avec ses options
const i18n = new VueI18n({
  locale: 'en', // indique la locale
  messages, // indique les messages
})

Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({ i18n }).$mount('#app')
```

## i18n personnalisée dans les composants à la demande

```js
import Vue from 'vue'
import DatePicker from 'element/lib/date-picker'
import VueI18n from 'vue-i18n'

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'

Vue.use(VueI18n)
Vue.use(DatePicker)

const messages = {
  en: {
    message: 'hello',
    ...enLocale
  },
  zh: {
    message: '你好',
    ...zhLocale
  }
}

// Crée l'instance de VueI18n avec ses options
const i18n = new VueI18n({
  locale: 'en', // indique la locale
  messages, // indique les messages
})

ElementLocale.i18n((key, value) => i18n.t(key, value))
```

## Import via un CDN

```html
<script src="//unpkg.com/vue"></script>
<script src="//unpkg.com/element-ui"></script>
<script src="//unpkg.com/element-ui/lib/umd/locale/en.js"></script>

<script>
  ELEMENT.locale(ELEMENT.lang.en)
</script>
```

Compatible avec `vue-i18n`

```html
<script src="//unpkg.com/vue"></script>
<script src="//unpkg.com/vue-i18n/dist/vue-i18n.js"></script>
<script src="//unpkg.com/element-ui"></script>
<script src="//unpkg.com/element-ui/lib/umd/locale/zh-CN.js"></script>
<script src="//unpkg.com/element-ui/lib/umd/locale/en.js"></script>

<script>
  Vue.locale('en', ELEMENT.lang.en)
  Vue.locale('zh-cn', ELEMENT.lang.zhCN)
</script>
```

Actuellement, Element supporte les langues suivantes:
<ul class="language-list">
  <li>Chinois simplifié (zh-CN)</li>
  <li>Anglais (en)</li>
  <li>Allemand (de)</li>
  <li>Portugais (pt)</li>
  <li>Espagnol (es)</li>
  <li>Danois (da)</li>
  <li>Français (fr)</li>
  <li>Norvégien (nb-NO)</li>
  <li>Chinois traditionnel (zh-TW)</li>
  <li>Italien (it)</li>
  <li>Coréen (ko)</li>
  <li>Japonais (ja)</li>
  <li>Néerlandais (nl)</li>
  <li>Vietnamien (vi)</li>
  <li>Russe (ru-RU)</li>
  <li>Turque (tr-TR)</li>
  <li>Portugais brésilien (pt-br)</li>
  <li>Farsi (fa)</li>
  <li>Thaï (th)</li>
  <li>Indonésien (id)</li>
  <li>Bulgare (bg)</li>
  <li>Polonais (pl)</li>
  <li>Finnois (fi)</li>
  <li>Suédois (sv-SE)</li>
  <li>Grec (el)</li>
  <li>Slovaque (sk)</li>
  <li>Catalan (ca)</li>
  <li>Tchèque (cs-CZ)</li>
  <li>Ukrainien (ua)</li>
  <li>Turkmène (tk)</li>
  <li>Tamoul (ta)</li>
  <li>Letton (lv)</li>
  <li>Afrikaans (af-ZA)</li>
  <li>Estonien (ee)</li>
  <li>Slovène (sl)</li>
  <li>Arabe (ar)</li>
  <li>Hébreu (he)</li>
  <li>Lituanien (lt)</li>
  <li>Mongol (mn)</li>
  <li>Kazakh (kz)</li>
  <li>Hongrois (hu)</li>
  <li>Roumain (ro)</li>
  <li>Kurde (ku)</li>
  <li>Ouïghour (ug-CN)</li>
  <li>Khmer (km)</li>
  <li>Serbe (sr)</li>
  <li>Basque (eu)</li>
  <li>Kirghize (kg)</li>
  <li>Croate (hr)</li>
  <li>Arménien (hy)</li>
  <li>Espéranto (eo)</li>
</ul>

Si votre langue n'apparaît pas dans la liste, n'hésitez pas a contribuer: ajoutez simplement un fichier de configuration [ici](https://github.com/ElemeFE/element/tree/dev/src/locale/lang) et créez une pull request.
