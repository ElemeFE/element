## Scroll

An infinite scroll component, another presentation of a page turning page, is often used to load more data.

### Basic usage

When scrolling to the bottom, more contents are loaded.

:::demo Use `el-scroll` to wrap the content of the scroll and specify the attribute value of `height` or `maxHeight`.
```html
<div>
    <el-scroll
     :height="300"
     :loading="loading"
     @scroll-to-bottom="onScrollToBottom">
         <ul>
            <li v-for="(news, index) in newsList" :key="index">
              <h2>{{news.title}}</h2>
              <p>{{news.content}}</p>
            </li>
          </ul>
    </el-scroll>
</div>
<script>
export default {
  data () {
    return {
      loading: false,
      newsList: [
        { title: 'news title 1', content: 'content 1' },
        { title: 'news title 2', content: 'content 2' },
        { title: 'news title 3', content: 'content 3' },
        { title: 'news title 4', content: 'content 4' },
        { title: 'news title 5', content: 'content 5' }
      ]
    }
  },
  methods: {
    onScrollToBottom () {
      this.loading = true
      setTimeout(() => {
        this.newsList.push({
          title: `news title ${this.newsList.length + 1}`,
          content: `content ${this.newsList.length + 1}`
        })
        this.loading = false
      }, 1000)
    }
  }
}
</script>
```
:::

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | Component height, unit px | number | — | —  |
| maxHeight | Component max height, unit px | number | — | —  |
| threshold| Bottom trigger threshold, unit px | number | — | 0 |
| loadingText | loading text that displays under the spinner | string | — | — |
| loading | Whether to display the load icon | boolean | — | true |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| scroll-to-bottom | Triggered when content rolls to the bottom | the`scroll`instance |
