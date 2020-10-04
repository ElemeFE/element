## リンク

テキストハイパーリンク

### ベーシック

ベーシックテキストリンク
:::demo

```html
<div>
  <el-link href="https://element.eleme.io" target="_blank">default</el-link>
  <el-link type="primary">primary</el-link>
  <el-link type="success">success</el-link>
  <el-link type="warning">warning</el-link>
  <el-link type="danger">danger</el-link>
  <el-link type="info">info</el-link>
</div>
```

:::

### 無効化

リンクの無効化状態
:::demo

```html
<div>
  <el-link disabled>default</el-link>
  <el-link type="primary" disabled>primary</el-link>
  <el-link type="success" disabled>success</el-link>
  <el-link type="warning" disabled>warning</el-link>
  <el-link type="danger" disabled>danger</el-link>
  <el-link type="info" disabled>info</el-link>
</div>
```

:::

### 下線

リンクの下線
:::demo

```html
<div>
  <el-link :underline="false">Without Underline</el-link>
  <el-link>With Underline</el-link>
</div>
```

:::

### アイコン

リンク付きアイコン
:::demo

```html
<div>
  <el-link icon="el-icon-edit">Edit</el-link>
  <el-link>Check<i class="el-icon-view el-icon--right"></i> </el-link>
</div>
```

:::

### 属性

| Attribute | Description                         | Type    | Options                                     | Default |
| --------- | ----------------------------------- | ------- | ------------------------------------------- | ------- |
| type      | タイプ                                | string  | primary / success / warning / danger / info | default |
| underline | コンポーネントに下線があるか | boolean | —                                           | true    |
| disabled  | コンポーネントが無効化されているか   | boolean | —                                           | false   |
| href      | ネイティブハイパーリンクの `href` と同じ   | string  | —                                           | -       |
| icon      | アイコンのクラス名                  | string  | —                                           | -       |
