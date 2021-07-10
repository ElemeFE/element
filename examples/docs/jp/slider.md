## スライダー

一定の範囲内でスライダーをドラッグします。

### 基本的な使い方

スライダーをドラッグしているときに現在の値が表示されます。

:::demo バインド値を設定してスライダーの初期値をカスタマイズします。

```html
<template>
  <div class="block">
    <span class="demonstration">Default value</span>
    <el-slider v-model="value1"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Customized initial value</span>
    <el-slider v-model="value2"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Hide Tooltip</span>
    <el-slider v-model="value3" :show-tooltip="false"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Format Tooltip</span>
    <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Disabled</span>
    <el-slider v-model="value5" disabled></el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>
```
:::

### 離散値

オプションは離散的にすることができます。

:::demo `step` 属性でステップサイズを設定する。`show-stop` 属性を設定することでブレークポイントを表示することができる。

```html
<template>
  <div class="block">
    <span class="demonstration">Breakpoints not displayed</span>
    <el-slider
      v-model="value1"
      :step="10">
    </el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Breakpoints displayed</span>
    <el-slider
      v-model="value2"
      :step="10"
      show-stops>
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 0
      }
    }
  }
</script>
```
:::

### インプットボックス付きスライダー

インプットボックスから値を設定します。

:::demo 右側にインプットボックスを表示するために `show-input` 属性を設定する。

```html
<template>
  <div class="block">
    <el-slider
      v-model="value"
      show-input>
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
</script>
```
:::

### 範囲の選択

値の範囲の選択に対応しています。

:::demo `range`属性を設定すると、範囲モードが有効になり、バインディング値は2つの境界値からなる配列となります。
```html
<template>
  <div class="block">
    <el-slider
      v-model="value"
      range
      show-stops
      :max="10">
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: [4, 8]
      }
    }
  }
</script>
```
:::

### 垂直モード

:::demo `vertical` 属性を `true` に設定すると、垂直モードが有効になる。垂直モードでは `height` 属性が必要である。
```html
<template>
  <div class="block">
    <el-slider
      v-model="value"
      vertical
      height="200px">
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
</script>
```
:::

### マークを表示

:::demo この `marks` 属性を設定すると、スライダーにマークを表示することができる。
```html
<template>
  <div class="block">
    <el-slider
      v-model="value"
      range
      :marks="marks">
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: [30, 60],
        marks: {
          0: '0°C',
          8: '8°C',
          37: '37°C',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '50%')
          }
        }
      }
    }
  }
</script>
```
:::

## 属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | バインディング値 | number | — | 0 |
| min | 最小値 | number | — | 0 |
| max | 最大値 | number | — | 100 |
| disabled | スライダーが無効になっているかどうか | boolean | — | false |
| step | ステップサイズ | number | — | 1 |
| show-input | whether to display an input box, works when `range` is false | boolean | — | false |
| show-input-controls | 入力ボックスを表示するかどうか、`range` が false のときに動作します。 | boolean | — | true |
| input-size | インプットボックスのサイズ | string | large / medium / small / mini | small |
| show-stops | ブレークポイントを表示するかどうか | boolean | — | false |
| show-tooltip | ツールチップの値を表示するかどうか | boolean | — | true |
| format-tooltip | ツールチップの値を表示するためのフォーマット | function(value) | — | — |
| range | 範囲セレクトするかどうか | boolean | — | false |
| vertical | 垂直モード | boolean | — | false |
| height | スライダーの高さ、垂直モードで必要 | string | — | — |
| label | スクリーンリーダー用ラベル | string | — | — |
| debounce | タイプ時のデバウンス遅延をミリ秒単位で指定する。`show-input` がtrueのときに動作します。 | number | — | 300 |
| tooltip-class | ツールチップのカスタムクラス名 | string | — | — |
| marks |  マークは，キーの種類は数字で，閉じた間隔[min, max]でなければなりません。マークはスタイルをカスタム出来ます。| object | — | — |

## イベント
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change | 値が変更されたときにトリガされます（マウスがドラッグされている場合、このイベントはマウスが離されたときにのみ発生します）。 | value after changing |
| input | データが変化した時にトリガーする(スライド中にリアルタイムでエミットされる) | value after changing |
