## イメージ
imgのネイティブ機能の他に、遅延ロード、カスタムプレースホルダ、ロード失敗などをサポートしています。

### 基本的な使い方

ネイティブの [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)と同じように、`fit`で画像のサイズをコンテナに合わせてリサイズする方法を指定します。
```html
<div class="demo-image">
  <div class="block" v-for="fit in fits" :key="fit">
    <span class="demonstration">{{ fit }}</span>
    <el-image
      style="width: 100px; height: 100px"
      :src="url"
      :fit="fit"></el-image>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    }
  }
</script>
```
:::

### プレースホルダ

:::demo 画像がまだ読み込まれていない場合のカスタムプレースホルダの内容を `slot = placeholder` で指定します。
```html
<div class="demo-image__placeholder">
  <div class="block">
    <span class="demonstration">Default</span>
    <el-image :src="src"></el-image>
  </div>
  <div class="block">
    <span class="demonstration">Custom</span>
    <el-image :src="src">
      <div slot="placeholder" class="image-slot">
        Loading<span class="dot">...</span>
      </div>
    </el-image>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    }
  }
</script>
```
:::

### ロード失敗

:::demo `slot = error` で画像読み込みにエラーが発生した場合のカスタム失敗コンテンツ
```html
<div class="demo-image__error">
  <div class="block">
    <span class="demonstration">Default</span>
    <el-image></el-image>
  </div>
  <div class="block">
    <span class="demonstration">Custom</span>
    <el-image>
      <div slot="error" class="image-slot">
        <i class="el-icon-picture-outline"></i>
      </div>
    </el-image>
  </div>
</div>
```
:::

### レイジーロード(遅延ロード)

:::demo `lazy = true` で遅延ロードを利用します。設定すると、画像はビューにスクロールするまで読み込まれます。スクロールリスナーを追加するスクロールコンテナは `scroll-container` で指定できます。未定義の場合は、オーバーフロープロパティが auto または scroll である最も近い親コンテナを指定します。
```html
<div class="demo-image__lazy">
  <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
</div>

<script>
  export default {
    data() {
      return {
        urls: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ]
      }
    }
  }
</script>
```
:::

### イメージプレビュー

:::demo `previewSrcList` prop を設定することで大きなイメージのプレビューを許可します。
```html
<div class="demo-image__preview">
  <el-image 
    style="width: 100px; height: 100px"
    :src="url" 
    :preview-src-list="srcList">
  </el-image>
</div>

<script>
  export default {
    data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
      }
    }
  }
</script>
```
:::

### 属性
| Attribute | Description | Type  | Accepted values | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| src | image source、ネイティブと同じ | string | — | - |
| fit | 画像のサイズをコンテナに合わせてどのように変更するかを指定します。[object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)と同じ | string | fill / contain / cover / none / scale-down | - |
| alt | ネイティブalt | string | - | - |
| referrer-policy | ネイティブreferrerPolicy | string | - | - |
| lazy | 遅延ロードを使用するかどうか | boolean | — | false |
| scroll-container | 遅延ロード時にスクロールリスナーを追加するコンテナ | string / HTMLElement | — | The nearest parent container whose overflow property is auto or scroll |
| preview-src-list | 大きな画像のプレビューを許可する | Array | — | - |
| z-index | セットイメージプレビュー z-index | Number | — | 2000 |

### イベント
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| load | ネイティブロードと同じ | (e: Event) |
| error | ネイティブエラーと同じ | (e: Error) |

### スロット
| Slot Name | Description |
|---------|-------------|
| placeholder | 画像の読み込み時にトリガ |
| error | 画像の読み込み失敗した場合のトリガー |


