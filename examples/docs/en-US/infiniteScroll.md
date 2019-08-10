## InfiniteScroll

Load more data while reach bottom of the page

### Basic usage
Add `v-infinite-scroll` to the list to automatically execute loading method when scrolling to the bottom.
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

### Disable Loading

:::demo
```html
<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
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


### Attributes

| Attribute | Description | Type  | Accepted values | Default   |
| -------------- | ------------------------------ | --------- | ------------------------------------ | ------- |
| infinite-scroll-disabled | is disabled           | boolean      | - |false |
| infinite-scroll-delay   | throttle delay (ms)   | number       |   - |200   |
| infinite-scroll-distance| trigger distance (px) | number   |- |0 |
| infinite-scroll-immediate |Whether to execute the loading method immediately, in case the content cannot be filled up in the initial state. | boolean | - |true |
