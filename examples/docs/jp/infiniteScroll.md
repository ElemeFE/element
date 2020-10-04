## InfiniteScroll

ページ下部に到達している間にさらに多くのデータを読み込む

### 基本的な使い方
リストに `v-infinite-scroll` を追加し、下までスクロールしたときに自動的にロードメソッドを実行するようにする。
:::demo
```html
<template>
  <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
    <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        count: 0
      }
    },
    methods: {
      load () {
        this.count += 2
      }
    }
  }
</script>
```
:::

### ローディングを無効化

:::demo
```html
<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    無効化
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
      <li v-for="i in count" class="list-item">{{ i }}</li>
    </ul>
    <p v-if="loading">Loading...</p>
    <p v-if="noMore">No more</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 10,
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.count >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 2000)
      }
    }
  }
</script>
```
:::


### 属性

| Attribute | Description | Type  | Accepted values | Default   |
| -------------- | ------------------------------ | --------- | ------------------------------------ | ------- |
| infinite-scroll-disabled | 無効かどうか           | boolean      | - |false |
| infinite-scroll-delay   | スロットルディレイ(ms)   | number       |   - |200   |
| infinite-scroll-distance| トリガー距離(px) | number   |- |0 |
| infinite-scroll-immediate |初期状態でコンテンツが埋まらない場合に、すぐに読み込みメソッドを実行するかどうか。 | boolean | - |true |
