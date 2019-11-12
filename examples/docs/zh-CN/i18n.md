## 国际化

Element 组件内部默认使用中文，若希望使用其他语言，则需要进行多语言设置。以英文为例，在 main.js 中：

```javascript
// 完整引入 Element
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })
```

或

```javascript
// 按需引入 Element
import Vue from 'vue'
import { Button, Select } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// 设置语言
locale.use(lang)

// 引入组件
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
```

如果使用其它语言，默认情况下中文语言包依旧是被引入的，可以使用 webpack 的 NormalModuleReplacementPlugin 替换默认语言包。

**webpack.config.js**
```javascript
{
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/, 'element-ui/lib/locale/lang/en')
  ]
}
```

## 兼容 `vue-i18n@5.x`

Element 兼容 [vue-i18n@5.x](https://github.com/kazupon/vue-i18n)，搭配使用能更方便地实现多语言切换。

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

## 兼容其他 i18n 插件
如果不使用 `vue-i18n@5.x`，而是用其他的 i18n 插件，Element 将无法兼容，但是可以自定义 Element 的 i18n 的处理方法。

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

## 兼容 `vue-i18n@6.x`

默认不支持 6.x 的 `vue-i18n`，你需要手动处理。

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
    ...enLocale // 或者用 Object.assign({ message: 'hello' }, enLocale)
  },
  zh: {
    message: '你好',
    ...zhLocale // 或者用 Object.assign({ message: '你好' }, zhLocale)
  }
}
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({ i18n }).$mount('#app')
```

## 按需加载里定制 i18n

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
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

ElementLocale.i18n((key, value) => i18n.t(key, value))
```

## 通过 CDN 的方式加载语言文件

```html
<script src="//unpkg.com/vue"></script>
<script src="//unpkg.com/element-ui"></script>
<script src="//unpkg.com/element-ui/lib/umd/locale/en.js"></script>

<script>
  ELEMENT.locale(ELEMENT.lang.en)
</script>
```

搭配 `vue-i18n` 使用

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

目前 Element 内置了以下语言：
<ul class="language-list">
  <li>简体中文（zh-CN）</li>
  <li>英语（en）</li>
  <li>德语（de）</li>
  <li>葡萄牙语（pt）</li>
  <li>西班牙语（es）</li>
  <li>丹麦语（da）</li>
  <li>法语（fr）</li>
  <li>挪威语（nb-NO）</li>
  <li>繁体中文（zh-TW）</li>
  <li>意大利语（it）</li>
  <li>韩语（ko）</li>
  <li>日语（ja）</li>
  <li>荷兰语（nl）</li>
  <li>越南语（vi）</li>
  <li>俄语（ru-RU）</li>
  <li>土耳其语（tr-TR）</li>
  <li>巴西葡萄牙语（pt-br）</li>
  <li>波斯语（fa）</li>
  <li>泰语（th）</li>
  <li>印尼语（id）</li>
  <li>保加利亚语（bg）</li>
  <li>波兰语（pl）</li>
  <li>芬兰语（fi）</li>
  <li>瑞典语（sv-SE）</li>
  <li>希腊语（el）</li>
  <li>斯洛伐克语（sk）</li>
  <li>加泰罗尼亚语（ca）</li>
  <li>捷克语（cs-CZ）</li>
  <li>乌克兰语（ua）</li>
  <li>土库曼语（tk）</li>
  <li>泰米尔语（ta）</li>
  <li>拉脱维亚语（lv）</li>
  <li>南非荷兰语（af-ZA）</li>
  <li>爱沙尼亚语（ee）</li>
  <li>斯洛文尼亚语（sl）</li>
  <li>阿拉伯语（ar）</li>
  <li>希伯来语（he）</li>
  <li>立陶宛语（lt）</li>
  <li>蒙古语（mn）</li>
  <li>哈萨克斯坦语（kz）</li>
  <li>匈牙利语（hu）</li>
  <li>罗马尼亚语（ro）</li>
  <li>库尔德语（ku）</li>
  <li>维吾尔语（ug-CN）</li>
  <li>高棉语（km）</li>
  <li>塞尔维亚语（sr）</li>
  <li>巴斯克语（eu）</li>
  <li>吉尔吉斯语（kg）</li>
  <li>亚美尼亚语 (hy)</li>
  <li>克罗地亚 (hr)</li>
  <li>世界语 (eo)</li>
</ul>

如果你需要使用其他的语言，欢迎贡献 PR：只需在 [这里](https://github.com/ElemeFE/element/tree/dev/src/locale/lang) 添加一个语言配置文件即可。
