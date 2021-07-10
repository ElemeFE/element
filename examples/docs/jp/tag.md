## タグ

マーキングや選択に使用します。

### 基本的な使い方

:::demo タグの型を定義するには `type` 属性を用いる。さらに、`color` 属性を用いてタグの背景色を設定することもできる。

```html
<el-tag>Tag 1</el-tag>
<el-tag type="success">Tag 2</el-tag>
<el-tag type="info">Tag 3</el-tag>
<el-tag type="warning">Tag 4</el-tag>
<el-tag type="danger">Tag 5</el-tag>
```
:::

### 取り外し可能なタグ

:::demo `closable` 属性は取り外し可能なタグを定義するために用いることができる。これは `Boolean` を受け付けます。デフォルトでは、タグの削除にはフェージングアニメーションが付きます。アニメーションを使いたくない場合は、`disable-transitions` 属性に `Boolean` を指定して `true` に設定すればよい。`close` イベントはタグが削除されたときに発生する。

```html
<el-tag
  v-for="tag in tags"
  :key="tag.name"
  closable
  :type="tag.type">
  {{tag.name}}
</el-tag>

<script>
  export default {
    data() {
      return {
        tags: [
          { name: 'Tag 1', type: '' },
          { name: 'Tag 2', type: 'success' },
          { name: 'Tag 3', type: 'info' },
          { name: 'Tag 4', type: 'warning' },
          { name: 'Tag 5', type: 'danger' }
        ]
      };
    }
  }
</script>
```
:::

### 動的に編集

タグを動的に追加したり削除したりするには、`close`イベントを利用することができる。

:::demo
```html
<el-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="mini"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>

<style>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>

<script>
  export default {
    data() {
      return {
        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>
```
:::

### サイズ

デフォルトのサイズの他に、Tagコンポーネントには3つの追加サイズが用意されており、異なるシナリオの中から選択することができます。

:::demo 追加のサイズを `medium`, `small`, `mini` で設定するには、属性 `size` を使用します。

```html
<el-tag>Default</el-tag>
<el-tag size="medium">Medium</el-tag>
<el-tag size="small">Small</el-tag>
<el-tag size="mini">Mini</el-tag>
```
:::


### テーマ

タグは3つの異なるテーマを提供します: `dark`、`light`、`plain`です。

:::demo `effect` を使って変更する場合、デフォルトは `light` です。
```html
<div class="tag-group">
  <span class="tag-group__title">Dark</span>
  <el-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    effect="dark">
    {{ item.label }}
  </el-tag>
</div>
<div class="tag-group">
  <span class="tag-group__title">Plain</span>
  <el-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    effect="plain">
    {{ item.label }}
  </el-tag>
</div>

<script>
  export default {
    data() {
      return {
        items: [
          { type: '', label: 'Tag 1' },
          { type: 'success', label: 'Tag 2' },
          { type: 'info', label: 'Tag 3' },
          { type: 'danger', label: 'Tag 4' },
          { type: 'warning', label: 'Tag 5' }
        ]
      }
    }
  }
</script>
```
:::

### 属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | コンポーネントタイプ | string | success/info/warning/danger | — |
| closable | タグを削除できるかどうか | boolean | — | false |
| disable-transitions | アニメーションを無効にするかどうか | boolean | — | false |
| hit | タグにハイライトされた境界線があるかどうか | boolean | — | false |
| color | タグの背景色 | string | — | — |
| size | タグサイズ | string | medium / small / mini | — |
| effect | コンポーネントテーマ | string | dark / light / plain | light |


### イベント
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| click | タグがクリックされたときにトリガーされます。 | — |
| close | タグが削除されたときにトリガーされます。 | — |
