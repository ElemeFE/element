## ツールチップ

マウスホバーのプロンプト情報を表示します。

### 基本的な使い方

ツールチップの配置は9箇所です。

:::demo ホバー時の表示内容を設定するには、属性 `content` を用いる。属性 `placement` はツールチップの位置を決める。値は `[orientation]-[alignment]` で、方向は `top`, `left`, `right`, `bottom` の4つ、アライメントは `start`, `end`, `null` の3つで、デフォルトのアライメントはnullです。例えば、`placement="left-end"` を例にとると、ツールチップはホバリングしている要素の左側に表示され、ツールチップの下端は要素の下端に合わせて配置されます。
```html
<div class="box">
  <div class="top">
    <el-tooltip class="item" effect="dark" content="Top Left prompts info" placement="top-start">
      <el-button>top-start</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Top Center prompts info" placement="top">
      <el-button>top</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Top Right prompts info" placement="top-end">
      <el-button>top-end</el-button>
    </el-tooltip>
  </div>
  <div class="left">
    <el-tooltip class="item" effect="dark" content="Left Top prompts info" placement="left-start">
      <el-button>left-start</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Left Center prompts info" placement="left">
      <el-button>left</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Left Bottom prompts info" placement="left-end">
      <el-button>left-end</el-button>
    </el-tooltip>
  </div>

  <div class="right">
    <el-tooltip class="item" effect="dark" content="Right Top prompts info" placement="right-start">
      <el-button>right-start</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Right Center prompts info" placement="right">
      <el-button>right</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Right Bottom prompts info" placement="right-end">
      <el-button>right-end</el-button>
    </el-tooltip>
  </div>
  <div class="bottom">
    <el-tooltip class="item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">
      <el-button>bottom-start</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Bottom Center prompts info" placement="bottom">
      <el-button>bottom</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
      <el-button>bottom-end</el-button>
    </el-tooltip>
  </div>
</div>

<style>
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 110px;
    }

    .right {
      float: right;
      width: 110px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }

    .el-button {
      width: 110px;
    }
  }
</style>
```
:::


### テーマ

ツールチップには、`dark` と `light` の2つのテーマがあります。

:::demo テーマを変更するには `effect` を設定します。デフォルト値は`dark`です。
```html
<el-tooltip content="Top center" placement="top">
  <el-button>Dark</el-button>
</el-tooltip>
<el-tooltip content="Bottom center" placement="bottom" effect="light">
  <el-button>Light</el-button>
</el-tooltip>
```
:::

### コンテンツを追加します。

複数行のテキストを表示し、そのフォーマットを設定します。

:::demo `el-tooltip` の `content` という名前のスロットを追加して `el-tooltip` の `content` 属性をオーバーライドします。
```html
<el-tooltip placement="top">
  <div slot="content">multiple lines<br/>second line</div>
  <el-button>Top center</el-button>
</el-tooltip>
```
:::

### 高度な使用法

基本的な使い方に加えて、自分でカスタマイズできる属性がいくつかあります。:

`transition` 属性はツールチップの表示・非表示のアニメーションをカスタマイズすることができ、デフォルト値は el-fade-in-linear です。

デフォルト値は el-faade-in-linear です。 `disabled` 属性は `tooltip` を無効にします。`true`に設定すればよいだけです。

実際、ツールチップは[Vue-popper](https://github.com/element-component/vue-popper)をベースにした拡張機能なので、Vue-popperで許可されている属性なら何でも使えます。

:::demo
```html
<template>
  <el-tooltip :disabled="disabled" content="click to close tooltip function" placement="bottom" effect="light">
    <el-button @click="disabled = !disabled">click to {{disabled ? 'active' : 'close'}} tooltip function</el-button>
  </el-tooltip>
</template>

<script>
  export default {
    data() {
      return {
        disabled: false
      };
    }
  };
</script>

<style>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .expand-fade-leave-active {
    margin-left: 20px;
    opacity: 0;
  }
</style>
```
:::


:::tip
ツールチップでは `router-link` コンポーネントはサポートされていないので、`vm.$router.push` を使用してください。

無効化されたフォーム要素は、Tooltipではサポートされていません。詳細は[Mdn](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter)を参照してください。Tooltipが動作するためには、無効化されたフォーム要素をコンテナ要素で包む必要があります。
:::


### 属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|----------------|---------|-----------|-------------|--------|
|  effect   |  ツールチップのテーマ  | string   | dark/light  | dark  |
|  content  | コンテンツを表示、`slot#content` で上書きすることができます。 | String   | — | — |
|  placement | ツールチップの位置   | string    |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |  bottom |
|  value / v-model | ツールチップの可視性 | boolean           | — |  false |
|  disabled       |  ツールチップが無効になっているかどうか  | boolean    | — |  false |
|  offset        |  ツールチップのオフセット   | number    | — |  0 |
|  transition     |  アニメーション名 | string             | — | el-fade-in-linear |
|  visible-arrow   |  矢印が表示されているかどうかを指定します。詳しくは、[Vue-popper](https://github.com/element-component/vue-popper)のページを参照してください。 | boolean | — | true |
|  popper-options        | [popper.js](https://popper.js.org/documentation.html) parameters | Object            | refer to [popper.js](https://popper.js.org/documentation.html) doc | `{ boundariesElement: 'body', gpuAcceleration: false }` |
| open-delay | ミリ秒単位の出現の遅延 | number | — | 0 |
| manual | ツールチップを手動で制御するかどうかを指定します。`true` に設定すると `mouseenter` と `mouseleave` は効果を持ちません。 | boolean | — | false |
|  popper-class  |  ツールチップのポッパーのカスタムクラス名 | string | — | — |
| enterable | マウスがツールチップに入るかどうか | Boolean | — | true |
| hide-after | ツールチップを非表示にするタイムアウト（ミリ秒単位） | number | — | 0 |
| tabindex   | [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) のツールチップ | number | — | 0 |
