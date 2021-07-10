## インストール

### npm
npmでインストールが推奨されており、[webpack](https://webpack.js.org/) でシームレスに動作します。

```shell
npm i element-ui -S
```

### CDN

[unpkg.com/element-ui](https://unpkg.com/element-ui/) から最新版を手に入れ、ページに JavascriptとCSSファイルをインポートすれば動作します。

```html
<!-- import CSS -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- import JavaScript -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
```

:::tip
[推奨]CDNを使うときはElementのバージョンを固定することを推奨します。詳しくは[unpkg.com](https://unpkg.com)を御覧ください。
:::

### Hello world
CDNを使う場合、Elementでハローワールドを表示するのは簡単です。 [Online Demo](https://codepen.io/ziyoung/pen/rRKYpd)

<iframe height="265" style="width: 100%;" scrolling="no" title="Element demo" src="//codepen.io/ziyoung/embed/rRKYpd/?height=265&theme-id=light&default-tab=html" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziyoung/pen/rRKYpd/'>Element demo</a> by hetech
  (<a href='https://codepen.io/ziyoung'>@ziyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

npmを使っていてwebpackを適用したい場合は、次のページに進んでください。: [Quick Start](/#/en-US/component/quickstart).
