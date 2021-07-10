## 進捗状況

現在の操作の進捗状況を表示し、ユーザーに現在の状態を知らせるために使用されます。

### 線形プログレスバー

:::demo パーセントを設定するには `percentage` 属性を用いる。**必須**で、`0-100`の間で指定する必要があります。`format`を設定することで、テキストの書式をカスタマイズすることができます。
```html
<el-progress :percentage="50"></el-progress>
<el-progress :percentage="100" :format="format"></el-progress>
<el-progress :percentage="100" status="success"></el-progress>
<el-progress :percentage="100" status="warning"></el-progress>
<el-progress :percentage="50" status="exception"></el-progress>

<script>
  export default {
    methods: {
      format(percentage) {
        return percentage === 100 ? 'Full' : `${percentage}%`;
      }
    }
  };
</script>
```
:::

### 内部比率

この場合、パーセンテージは追加のスペースを取りません。

:::demo `ストローク幅`属性はプログレスバーの幅を決定し、プログレスバーの中に説明を加えるには`text-inside`属性を使う。
```html
<el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
<el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
<el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
<el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
```
:::

### カスタムカラー

プログレスバーの色を設定するには `color` attr を使うことができ、色文字列、関数、配列のいずれかを受け付けます。

:::demo

```html
<el-progress :percentage="percentage" :color="customColor"></el-progress>

<el-progress :percentage="percentage" :color="customColorMethod"></el-progress>

<el-progress :percentage="percentage" :color="customColors"></el-progress>
<div>
  <el-button-group>
    <el-button icon="el-icon-minus" @click="decrease"></el-button>
    <el-button icon="el-icon-plus" @click="increase"></el-button>
  </el-button-group>
</div>

<script>
  export default {
    data() {
      return {
        percentage: 20,
        customColor: '#409eff',
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      customColorMethod(percentage) {
        if (percentage < 30) {
          return '#909399';
        } else if (percentage < 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
        }
      },
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
  }
</script>
```
:::

### 円形のプログレスバー

:::demo `type` 属性に `circle` を指定すると円形のプログレスバーが利用でき、`width` 属性を指定すると円形の大きさを変更することができます。
```html
<el-progress type="circle" :percentage="0"></el-progress>
<el-progress type="circle" :percentage="25"></el-progress>
<el-progress type="circle" :percentage="100" status="success"></el-progress>
<el-progress type="circle" :percentage="70" status="warning"></el-progress>
<el-progress type="circle" :percentage="50" status="exception"></el-progress>
```
:::

### ダッシュボードのプログレスバー

`dashboard` に `type` 属性を指定することでダッシュボードのプログレスバーも利用できる。

:::demo

```html
<el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
<div>
  <el-button-group>
    <el-button icon="el-icon-minus" @click="decrease"></el-button>
    <el-button icon="el-icon-plus" @click="increase"></el-button>
  </el-button-group>
</div>

<script>
  export default {
    data() {
      return {
        percentage: 10,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
  }
</script>
```
:::

### 属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
| --- | ---- | ---- | ---- | ---- |
| **percentage** | パーセンテージ、 **required** | number | 0-100 | 0 |
| type | プログレスバーの種類 | string | line/circle/dashboard | line |
| stroke-width | プログレスバーの幅 | number | — | 6 |
| text-inside | パーセントをプログレスバーの中に配置するかどうか、`type`が 'line'の場合のみ動作します。 | boolean | — | false |
| status | プログレスバーの現在の状態 | string | success/exception/warning | — |
| color  | プログレスバーの背景色を指定します。`status` プロップをオーバーライドします。 | string/function/array | — | '' |
| width | サークルプログレスバーのキャンバス幅 | number | — | 126 |
| show-text | パーセンテージ表示の有無 | boolean | — | true |
| stroke-linecap  | 終点でのサークル/ダッシュボード型の形状 | string | butt/round/square | round |
